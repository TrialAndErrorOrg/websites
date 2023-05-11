import { SITE, BLOG } from '../../config.mjs'

import { SinglePost } from '../components/blog/SinglePost'

import { getCanonical, getPermalink, cleanSlug, POST_BASE } from '../../utils/permalinks'
import { getPostBy, getPosts } from '../../utils/blog'
import type { BlogPost } from '../../utils/types'
import { createMetadata } from '../../utils/createMetadata'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBy({ field: 'slug', value: params.slug })
  if (!post) {
    return createMetadata({})
  }
  return createMetadata({
    title: `${post.title} — ${SITE.name}`,
    description: post?.seo?.metaDescription ?? post.excerpt,
    canonical:
      post?.seo?.canonicalURL ?? getCanonical(getPermalink(post.slug, 'post')).toString() ?? '',
    image: post?.image?.formats?.thumbnail?.url ?? post.image.url,
    ogTitle: post.title,
  })
}

interface Props {
  post: BlogPost
  prev?: BlogPost
  next?: BlogPost
  latest: BlogPost[]
}
export async function generateStaticParams() {
  if (BLOG?.disabled || BLOG?.post?.disabled) return []

  // const posts = await fetchPosts()
  const posts = (await getPosts()) ?? []

  return posts.map((post, idx) => ({
    params: {
      slug: cleanSlug(post.slug ?? '/'),
    },
  }))
}

export default async function Post({
  params,
  searchParams,
}: {
  params: { post: string }
  searchParams: URLSearchParams
}) {
  const { post: slug } = params
  const posts = (await getPosts()) ?? []
  const post = posts.find((post) => cleanSlug(post.slug ?? '/') === slug)
  const idx = posts.findIndex((post) => cleanSlug(post.slug ?? '/') === slug)
  const prev = posts[idx - 1]
  const next = posts[idx + 1]
  const latest = posts.filter((latest) => latest.id !== post?.id).slice(0, 4)

  console.log(slug)
  if (!post) {
    console.log('no post found')
  }
  return (
    <SinglePost latest={latest} prev={prev} next={next} post={{ ...post, image: post.image }} />
  )
}
