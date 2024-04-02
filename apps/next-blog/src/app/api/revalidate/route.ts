import { NextRequest } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { getAllPosts } from '../../../utils/blog'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')

  if (path) {
    revalidatePath(path)
    return new Response(`Revalidated path: ${path}`)
  }

  const tag = request.nextUrl.searchParams.get('tag')

  if (tag) {
    revalidateTag(tag)
    return new Response(`Revalidated tag: ${tag}`)
  }

  return new Response('No path or tag provided')
}

export async function POST(request: NextRequest) {
  const token = request.headers.get('x-revalidation-token')
  const body = await request.json()

  if (!body) {
    return new Response('No body provided')
  }

  const { entry, model, event } = body

  const relevantModels = ['blog-author', 'team-member', 'tag', 'category', 'blog-post'] as const

  if (!model || !event) {
    const res = new Response('No model or event provided', { status: 400 })
    return res
  }

  if (!relevantModels.includes(model)) {
    return new Response('Irrelevant model provided', { status: 400 })
  }

  revalidatePath('/')

  if (model === 'blog-author' || model === 'team-member') {
    revalidatePath(`/author/${entry.slug}`)
    return new Response('Revalidated author or team member')
  }

  if (model === 'tag' || model === 'category') {
    revalidatePath(`/blog/${entry.slug}`)
    return new Response('Revalidated tag or category')
  }

  if (model === 'blog-post') {
    revalidatePath(`/${entry.slug}`)

    const tags = entry.blog_tags.map((tag: any) => tag.slug)
    tags.forEach((tag: string) => revalidatePath(`/blog/${tag}`))

    const authors = [...entry.blog_authors, entry.team_members].map((author: any) => author.slug)

    authors.forEach((author: string) => revalidatePath(`/author/${author}`))

    revalidatePath(`/category/${entry.category.slug}`)

    const posts = (await getAllPosts()) ?? []
    const index = posts.findIndex((post) => post.id === entry.id)

    if (index > 0) {
      if (event.includes('update')) {
        const page = Math.floor(index / 10) + 1

        revalidatePath(`/blog/${page}`)
      }

      const pages = Math.ceil(posts.length / 10)

      for (let i = 1; i <= pages; i += 1) {
        revalidatePath(`/blog/${i}`)
      }
    }

    return new Response('Revalidated blog post')
  }

  return new Response('No model or event provided', { status: 400 })
}
