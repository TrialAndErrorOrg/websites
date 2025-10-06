import { Feed, FeedOptions } from 'feed'
import { getAllPosts } from './blog'

export async function generateRssFeed(type: 'rss' | 'atom' | 'json' = 'rss') {
  const allPosts = (await getAllPosts()) ?? []
  const site_url = 'https://blog.trialanderror.org'

  const feedOptions: FeedOptions = {
    updated: new Date(),
    language: 'en',
    author: {
      name: 'Blog of Center of Trial and Error',
      email: 'info@trialanderror.org',
      link: 'https://blog.trialanderror.org',
    },
    ttl: 60 * 60,
    title: 'Blog of Center of Trial and Error | RSS Feed',
    description: 'Updates from the Blog of Trial and Error!',
    id: site_url,
    link: site_url,
    image: `${site_url}/android-chrome-384x384.png`,
    favicon: `${site_url}/favicon.ico`,
    copyright: `CC-BY 4.0 ${new Date().getFullYear()}, Center of Trial and Error`,
    generator: 'Feed for Node.js',

    feedLinks: {
      rss2: `/rss.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  allPosts.forEach((post) => {
    const url = `https://blog.trialanderror.org/${post.slug}?utm_source=rss&utm_medium=rss&utm_campaign=rss`

    const image = post.image?.formats?.thumbnail ?? post.image
    const author =
      [...(post.team_members ?? []), ...(post.blog_authors ?? [])]
        .map((member) => {
          return {
            name: `${member.firstName} ${member.lastName}`,
            email: member.email,
            link: `https://blog.trialanderror.org/author/${member.slug}`,
          }
        })
        .filter((author) => author.name) ?? []

    feed.addItem({
      title: post.title,
      id: url,
      date: new Date(post.publishedAt ?? post.publishDate ?? Date.now()),
      link: url,
      description: post.excerpt,
      guid: url,
      content: url,
      published: new Date(post.publishedAt ?? post.publishDate ?? Date.now()),

      category: [
        {
          name: post.category?.title,
        },
        ...(post.blog_tags?.map((tag) => ({
          name: tag.title,
        })) ?? []),
      ],
      ...(image
        ? {
            image,
          }
        : {}),
      ...(author.length ? { author } : {}),
      ...(image
        ? {
            extensions: [
              {
                name: `media:thumbnail width="${image.width}" height="${image.height}" url="${image.url}"`,
              },
            ],
          }
        : {}),
    })
  })

  const feedString = feed.rss2()

  const feedstringWithCorrectXml = feedString.replace(
    /(<rss.*)>/,
    '$1 xmlns:media="http://search.yahoo.com/mrss/"',
  )

  return feedstringWithCorrectXml
}
