import { SITE } from '../../config.mjs'

import { SinglePost } from '../components/blog/SinglePost'

import { cleanSlug } from '../../utils/permalinks'
import { getPostBy, getAllPosts, getSinglePost } from '../../utils/blog'
import { createMetadata } from '../../utils/createMetadata'
import { notFound } from 'next/navigation'

import { getAcademicOtherSeo } from '../../utils/getAcademicOtherSEO'
import { draftMode } from 'next/headers'

export async function generateMetadata({ params }: { params: { post: string } }) {
  const post = await getPostBy({ field: 'slug', value: params.post })
  if (!post) {
    return createMetadata({})
  }
  return createMetadata(
    {
      title: `${post.title} — ${SITE.name}`,
      description: post.seo?.metaDescription ?? post.excerpt,
      canonical: post.slug ?? '',
      image: post.image?.formats?.thumbnail?.url ?? post.image.url,
      ogTitle: post.title,
    },
    { other: getAcademicOtherSeo(post) },
  )
}

export async function generateStaticParams() {
  // const posts = await fetchPosts()
  const posts = (await getAllPosts()) ?? []

  const pars = posts.map((post, idx) => ({
    post: cleanSlug(post.slug ?? '/'),
  }))

  return pars
}

export default async function Post({ params }: { params: { post: string } }) {
  const { isEnabled } = draftMode()
  console.log({ isEnabled })

  const { post: slug } = params
  const posts = (await getAllPosts(isEnabled)) ?? []
  // const post = posts.find((post) => cleanSlug(post.slug ?? '/') === slug)
  const post = await getSinglePost(slug, isEnabled)
  const idx = posts.findIndex((post) => cleanSlug(post.slug ?? '/') === slug)
  const prev = posts[idx - 1]
  const next = posts[idx + 1]

  // const date = post?.publishDate ?? post?.publishedAt
  // const nextNext = getNextPublishPost(date ? new Date(date) : new Date())
  // console.log(next.slug, nextNext?.slug)
  const latest = posts.filter((latest) => latest.id !== post?.id).slice(0, 4)

  if (!post) {
    notFound()
  }

  console.log(new Date().toISOString(), `Generating post ${post?.title}`)
  return (
    // @ts-expect-error TODO: Typescript 5.1
    <SinglePost latest={latest} prev={prev} next={next} post={{ ...post, image: post.image }} />
  )
}
