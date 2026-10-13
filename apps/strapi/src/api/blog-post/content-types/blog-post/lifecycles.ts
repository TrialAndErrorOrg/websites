/**
 * When a blog post goes from draft to published, send it to n8n, which turns it into a
 * Substack draft and messages whoever pressed Publish. Strapi's own webhooks leave out who
 * that was, hence a lifecycle. A failure here is logged and never blocks the publish.
 */
const UID = 'api::blog-post.blog-post'

export default {
  async beforeUpdate(event: any) {
    if (!event.params.data?.publishedAt) return
    const current = await strapi.db.query(UID).findOne({
      where: event.params.where,
      select: ['publishedAt'],
    })
    event.state.wasDraft = !current?.publishedAt
  },

  async afterUpdate(event: any) {
    if (!event.state.wasDraft) return
    const url = process.env.SUBSTACK_DRAFT_WEBHOOK_URL
    if (!url) return

    try {
      const post: any = await strapi.entityService.findOne(UID, event.result.id, {
        populate: { image: true, blog_authors: true, team_members: true },
      })
      const publisher = event.params.data.updatedBy
        ? await strapi.db.query('admin::user').findOne({
            where: { id: event.params.data.updatedBy },
            select: ['email', 'firstname', 'lastname'],
          })
        : null

      const authors = [...(post.team_members ?? []), ...(post.blog_authors ?? [])].map(
        (author: any) => ({
          name: `${author.firstName} ${author.lastName}`.trim(),
          email: author.email ?? null,
        }),
      )

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-webhook-secret': process.env.SUBSTACK_DRAFT_WEBHOOK_SECRET ?? '',
        },
        body: JSON.stringify({
          post: {
            id: post.id,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            doi: post.doi ?? null,
            body: post.body,
            image: post.image ? { url: post.image.url, alt: post.image.alternativeText } : null,
            authors,
          },
          publishedBy: publisher
            ? {
                email: publisher.email,
                name: `${publisher.firstname ?? ''} ${publisher.lastname ?? ''}`.trim(),
              }
            : null,
        }),
      })
      if (!res.ok) strapi.log.warn(`Substack draft webhook answered ${res.status}`)
    } catch (error) {
      strapi.log.warn(`Substack draft webhook failed: ${error}`)
    }
  },
}
