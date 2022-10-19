import type { BlogPost } from '../../utils/types'
import type { Props as AstroSeoProps } from '@astrolib/seo'

interface Props {
  post: BlogPost
}

export const getAcademicMetaTags = (post: BlogPost) => {
  const {
    title,
    excerpt,
    publishDate,
    publishedAt,
    image,
    blog_authors: blogAuthors,
    blog_tags: blogTags,
    team_members: teamMembers,
    related,
    seo,
    academic,
  } = post

  const titleWithContext = `${title} | A Blog of Trial &amp; Error`

  const { doi, abstract } = academic ?? ({} as NonNullable<typeof academic>)

  const titleTags = [
    { property: 'og:title', content: titleWithContext },
    { name: 'twitter:title', content: titleWithContext },
    { name: 'twitter:image:alt', content: titleWithContext },
    { name: 'citation_title', content: title },
    { name: 'dc.title', content: title },
    {
      name: 'og:site_name',
      content: 'A Blog of Trial &amp; Error',
    },
    {
      name: 'citation_journal_title',
      content: 'A Blog of Trial &amp Error',
    },
    { property: 'og:type', content: 'article' },
    {
      property: 'og:url',
      content: `https://trialanderror.org/blog/${post.slug}`,
    },
    {
      name: 'twitter:url',
      content: `https://trialanderror.org/blog/${post.slug}`,
    },
    {
      name: 'citation_fulltext_html_url',
      content: `https://trialanderror.org/blog/${post.slug}`,
    },
  ]

  const doiTags = doi
    ? [
        { name: 'citation_doi', content: doi },
        { name: 'dc.identifier', content: doi },
        { name: 'prism.doi', content: doi },
      ]
    : []

  const descriptionTags = [
    {
      name: 'description',
      content: seo?.metaDescription ?? abstract ?? excerpt,
    },
    {
      property: 'og:description',
      content: seo?.metaDescription ?? excerpt,
    },
    {
      name: 'twitter:description',
      content: seo?.metaDescription ?? excerpt,
    },
    { name: 'citation_abstract', content: abstract ?? excerpt },
    { name: 'dc.description', content: abstract ?? excerpt },
  ]

  const imageTags = [
    {
      property: 'og:image',
      content: seo?.shareImage?.url ?? image?.url,
    },
    {
      name: 'twitter:image',
      content: seo?.shareImage?.url ?? image?.url,
    },
    {
      name: 'citation_image',
      content: seo?.shareImage?.url ?? image?.url,
    },
    {
      name: 'dc.coverage',
      content: seo?.shareImage?.url ?? image?.url,
    },
  ]

  const teamMemberTags =
    teamMembers?.flatMap((teamMember) => [
      {
        name: 'citation_author',
        content: `${teamMember.firstName} ${teamMember.lastName ?? ''}`,
      },
      {
        name: 'dc.creator',
        content: `${teamMember.firstName} ${teamMember.lastName ?? ''}`,
      },
      {
        name: 'dc.contributor',
        content: `${teamMember.firstName} ${teamMember.lastName ?? ''}`,
      },
    ]) ?? []

  const blogAuthorTags =
    blogAuthors?.flatMap((blogAuthor) => [
      {
        name: 'citation_author',
        content: `${blogAuthor.firstName ?? ''} ${blogAuthor.lastName ?? ''}`,
      },
      {
        name: 'dc.creator',
        content: `${blogAuthor.firstName} ${blogAuthor.lastName ?? ''}`,
      },
      {
        name: 'dc.contributor',
        content: `${blogAuthor.firstName} ${blogAuthor.lastName ?? ''}`,
      },
    ]) ?? []

  const blogTagTags =
    blogTags?.flatMap((blogTag) => [
      {
        name: 'citation_keywords',
        content: blogTag.title,
      },
      {
        name: 'dc.subject',
        content: blogTag.title,
      },
    ]) ?? []

  const relatedTags =
    related?.flatMap((relatedPost) => [
      {
        name: 'dc.relation',
        content: relatedPost.title,
      },
    ]) ?? []

  const dateTags = [
    {
      name: 'article:published_time',
      content: publishDate ?? publishedAt ?? new Date().toString(),
    },
    {
      name: 'citation_publication_date',
      content: publishDate ?? publishedAt ?? new Date().toString(),
    },
    { name: 'dc.date', content: publishDate ?? publishedAt ?? new Date().toString() },
  ]

  const seoTags = [
    {
      name: 'robots',
      content: seo?.metaRobots ?? 'index, follow',
    },
  ]

  const tags = [
    ...titleTags,
    ...descriptionTags,
    ...imageTags,
    ...teamMemberTags,
    ...blogAuthorTags,
    ...blogTagTags,
    ...relatedTags,
    ...dateTags,
    ...seoTags,
    ...doiTags,
  ] as AstroSeoProps['additionalMetaTags']
  return tags
}
