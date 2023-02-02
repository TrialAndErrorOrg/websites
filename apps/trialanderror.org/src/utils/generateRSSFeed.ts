import { Feed, FeedOptions } from 'feed'
import { getAllCards } from '../server/mixed'
import { env } from '../env/server.mjs'

export async function generateRssFeed(type: 'rss' | 'atom' | 'json' = 'rss') {
  const allPosts = await getAllCards({ limit: 1000 })
  const site_url = process.env.VERCEL_URL // use 'localhost:3000' in dev mode or create .env.local file in project root and add this: VERCEL_URL=http://localhost:3000

  const feedOptions: FeedOptions = {
    updated: new Date(),
    language: 'en',
    author: {
      name: 'Center of Trial & Error',
      email: 'info@trialanderror.org',
      link: 'https://trialanderror.org',
    },
    feed: `${site_url}/rss.xml`,
    ttl: 60 * 60,
    title: 'Center of Trial & Error | RSS Feed',
    description: 'Updates from the Blog, Journal, and Center of Trial & Error!',
    id: env.VERCEL_URL,
    link: env.VERCEL_URL,
    image: `${site_url}/favicon.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `CC-BY 4.0 ${new Date().getFullYear()}, Center of Trial & Error`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      // other feed formats
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  allPosts.forEach((post) => {
    const url = `${
      post.type === 'post' ? `https://blog.trialanderror.org/${post.url}` : post.url
    }?utm_source=rss&utm_medium=rss&utm_campaign=rss`

    feed.addItem({
      title: post.title,
      id: url,
      date: new Date(post.published),
      link: url,
      description: post.excerpt,
      contributor: post.team.map((member) => {
        if (typeof member === 'string') {
          return {
            name: member,
            email: '',
            link: '',
          }
        }
        return {
          name: `${member.firstName} ${member.lastName}`,
          email: member.email,
          link: `https://blog.trialanderror.org/author/${member.slug}`,
        }
      }),
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
