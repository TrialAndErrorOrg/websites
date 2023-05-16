import { BlogPost } from './types'

function getUniqueList<T>(list: T[]): T[] {
  const uniqueList = Array.from(new Set(list.map((item) => JSON.stringify(item)))).map((item) =>
    JSON.parse(item),
  )
  return uniqueList
}

export function getUniqueCategoriesAndTags(posts: BlogPost[]) {
  const categories = getUniqueList(
    posts.map((post) => ({ title: post.category?.title, slug: post.category?.slug })),
  )

  const tags = getUniqueList(
    posts.flatMap(
      (post) => post.blog_tags?.map((tag) => ({ title: tag.title, slug: tag.slug })) ?? [],
    ),
  )

  return { categories, tags }
}
