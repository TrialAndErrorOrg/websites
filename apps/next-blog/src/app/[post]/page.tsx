import { SITE, BLOG } from '../../config.mjs'

import { SinglePost } from '../components/blog/SinglePost'

import { getCanonical, getPermalink, cleanSlug, POST_BASE } from '../../utils/permalinks'
import { getPostBy, getAllPosts, getNextPublishPost } from '../../utils/blog'
import type { BlogPost } from '../../utils/types'
import { createMetadata } from '../../utils/createMetadata'
import { notFound } from 'next/navigation'

import { draftMode } from 'next/headers'

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
  // const posts = await fetchPosts()
  const posts = (await getAllPosts()) ?? []

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
  const { isEnabled } = draftMode()
  console.log({ isEnabled })

  const { post: slug } = params
  const posts = (await getAllPosts(isEnabled)) ?? []
  console.log(Date.now(), posts.length)
  const post = posts.find((post) => cleanSlug(post.slug ?? '/') === slug)
  // const post = await getPostBy({ field: 'slug', value: slug, draftMode: isEnabled })
  const idx = posts.findIndex((post) => cleanSlug(post.slug ?? '/') === slug)
  const prev = posts[idx - 1]
  const next = posts[idx + 1]
  const date = post?.publishDate ?? post?.publishedAt
  // const nextNext = getNextPublishPost(date ? new Date(date) : new Date())
  // console.log(next.slug, nextNext?.slug)
  const latest = posts.filter((latest) => latest.id !== post?.id).slice(0, 4)

  if (!post) {
    notFound()
  }
  return (
    <SinglePost latest={latest} prev={prev} next={next} post={{ ...post, image: post.image }} />
  )
}
