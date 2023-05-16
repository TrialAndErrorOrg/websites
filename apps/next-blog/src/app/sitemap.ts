import { getAllPosts } from '../utils/blog'
import { MetadataRoute } from 'next'
import { SITE } from '../config.mjs'
import { getUniqueCategoriesAndTags, getUniqueList } from '../utils/getUniqueCategoriesAndTags'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getAllPosts()) ?? []

  const lastModified = posts.reduce((prev, current) => {
    const date = new Date(current?.updatedAt ?? 0)
    return date > prev ? date : prev
  }, new Date(0))

  const authors = getUniqueList(
    posts.flatMap((post) => [...(post?.blog_authors ?? []), ...(post?.team_members ?? [])]),
  )
  const authorPaths = authors.map((author) => ({
    url: `${SITE.origin}/author/${author.slug}`,
    lastModified: new Date(author.updatedAt ?? Date.now()),
  }))

  const tags = getUniqueList(posts.flatMap((post) => post?.blog_tags ?? []))
  const tagPaths = tags.map((tag) => ({
    url: `${SITE.origin}/blog/${tag.slug}`,
    lastModified: new Date(tag.updatedAt ?? Date.now()),
  }))

  const categories = getUniqueList(posts.flatMap((post) => post?.category ?? []))
  const categoryPaths = categories.map((category) => ({
    url: `${SITE.origin}/category/${category.slug}`,
    lastModified: new Date(category.updatedAt ?? Date.now()),
  }))

  const postPaths = posts.map((post) => ({
    url: `${SITE.origin}/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? Date.now()),
  }))

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: SITE.origin,
      lastModified,
    },
    ...authorPaths,
    ...tagPaths,
    ...categoryPaths,
    ...postPaths,
  ]

  return sitemap
}
