// @ts-check
import rss from '@astrojs/rss'

import { SITE, BLOG } from '../../src/config.mjs'
import { fetchPosts } from '../utils/posts'
import { getPermalink } from '../utils/permalinks'
import { getPosts } from '../utils/blog.js'

export const get = async () => {
  if (BLOG.disabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    })
  }

  const posts = await getPosts()
  // const pub

  return rss({
    title: `${SITE.name}’s Blog`,
    description: SITE.description,
    site: import.meta.env.SITE,

    items: posts.map((post) => {
      const pubdate = post.publishDate ?? post.publishedAt
      const pubDate = pubdate ? new Date(pubdate) : new Date()

      return {
        link: getPermalink(post.slug, 'post'),
        title: post.title,
        description: post.excerpt ?? post.seo?.metaDescription,
        pubDate,
      }
    }),
  })
}
