import { Feed, FeedOptions } from 'feed'
import { getAllCards } from '../server/mixed'
import { env } from '../env/server.mjs'
import { getAllPosts } from './blog'

export async function generateRssFeed(type: 'rss' | 'atom' | 'json' = 'rss') {
  const allPosts = (await getAllPosts()) ?? []
  const site_url = process.env.VERCEL ? 'https://trialanderror.org' : 'http://localhost:4200'

  const feedOptions: FeedOptions = {
    updated: new Date(),
    language: 'en',
    author: {
      name: 'Center of Trial & Error',
      email: 'info@trialanderror.org',
      link: 'https://trialanderror.org',
    },
    ttl: 60 * 60,
    title: 'Center of Trial & Error | RSS Feed',
    description: 'Updates from the Blog, Journal, and Center of Trial & Error!',
    id: site_url,
    link: site_url,
    image: `${site_url}/android-chrome-384x384.png`,
    favicon: `${site_url}/favicon.ico`,
    copyright: `CC-BY 4.0 ${new Date().getFullYear()}, Center of Trial & Error`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `/rss2.xml`,
      // other feed formats
      json: `/rss.json`,
      atom: `/rss.xml`,
    },
  }

  console.log(feedOptions)
  const feed = new Feed(feedOptions)
  console.log(feed)

  allPosts.forEach((post) => {
    const url = `https://blog.trialanderror.org/${post.slug}?utm_source=rss&utm_medium=rss&utm_campaign=rss`

    const image = post.image?.formats?.medium?.url ?? post.image.url
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

    console.log(image)
    feed.addItem({
      title: post.title,
      id: url,
      date: new Date(post.publishedAt ?? post.publishDate),
      link: url,
      description: post.excerpt,
      guid: post.slug,
      content: url,
      category: [
        {
          term: post.category?.title,
        },
        ...(post.blog_tags?.map((tag) => ({
          term: tag.title,
        })) ?? []),
      ],
      ...(image
        ? {
            image,
          }
        : {}),
      ...(author.length ? { author } : {}),
    })
  })

  if (type === 'rss') {
    return feed.rss2()
  }

  if (type === 'atom') {
    return feed.atom1()
  }

  if (type === 'json') {
    return feed.json1()
  }
}
