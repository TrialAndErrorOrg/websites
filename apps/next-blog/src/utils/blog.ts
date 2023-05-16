import { cache } from 'react'
import { strapi } from './strapi'
import type { BlogPost } from './types'
import { GetAttributesValues } from '@strapi/strapi'

// function bc otherwise react-cache fucks with it
const getPostBase = (draftMode = false) => {
  const base = strapi
    ?.from<BlogPost>('blog-posts')
    .select()
    .populateWith('title')
    .populateWith('slug')
    // .populateWith('body')
    .populateWith('excerpt')
    .populateWith('publishDate')
    .populateWith('publishedAt')
    // .populateDeep([
    //   {
    //     path: 'related',
    //     fields: ['title', 'slug', 'excerpt', 'publishDate', 'publishedAt'],
    //     children: [
    //       {
    //         key: 'image',
    //         fields: ['url', 'formats', 'alternativeText', 'height', 'width'],
    //       },
    //       {
    //         key: 'category',
    //         fields: ['slug', 'title'],
    //       },
    //       {
    //         key: 'blog_authors',
    //         fields: ['firstName', 'lastName', 'slug'],
    //       },
    //       {
    //         key: 'team_members',
    //         fields: ['firstName', 'lastName', 'slug'],
    //       },
    //       { key: 'blog_tags', fields: ['title', 'slug'] },
    //     ],
    //   },
    // ])
    .populateWith('blog_authors', undefined, true)
    .populateWith('blog_tags', undefined, true)
    .populateWith('team_members', undefined, true)
    // .populateWith('seo', undefined, true)
    // .populateWith('academic', undefined, true)
    .populateWith('image', undefined, true)
    .populateWith('category', undefined, true)

  return draftMode ? base.withDraft() : base
}

export const getPosts = cache(
  async (props?: { page?: number; pageSize?: number; slug?: string; draftMode?: boolean }) => {
    const posts = await getPostBase(!!props?.draftMode)
      .sortBy([
        { field: 'publishDate', order: 'desc' },
        { field: 'publishedAt', order: 'desc' },
      ])
      .paginate(props?.page ?? 1, props?.pageSize ?? 10)
      .get()

    return posts?.data ?? []
  },
)

type BlogFields = 'slug' | 'title' | 'publishDate' | 'id' | 'category' | 'publishedAt'

export const getPostsByDeep = cache(async (slug: string) => {
  const post = await getPostBase().filterDeep('blog_tags.slug', 'eq', slug).get()

  return post?.data
})

export const getPostsBy = cache(
  async ({
    field,
    value,
    draftMode = false,
  }: {
    field: BlogFields
    value: string
    draftMode?: boolean
  }) => {
    const posts = await getPostBase(draftMode).equalTo(field, value).get()

    return posts?.data
  },
)

export const getPostBy = cache(
  async ({
    field,
    value,
    draftMode = false,
  }: {
    field: BlogFields
    value: string
    draftMode?: boolean
  }) => {
    const post = await getPostBase(draftMode).populateWith('body').equalTo(field, value).get()

    return post?.data?.[0]
  },
)

export const getAllPosts = cache(async (draftMode = false) => {
  const posts = await getPostBase(draftMode)
    .sortBy([
      { field: 'publishDate', order: 'desc' },
      { field: 'publishedAt', order: 'desc' },
    ])
    .get()
  return posts?.data
})

export const getTags = cache(async () => {
  const tags = await strapi
    ?.from<GetAttributesValues<'api::tag.tag'>>('tags')
    .select()
    .populate()
    .get()

  return tags?.data
})

export const getCategories = cache(async () => {
  const categories = await strapi
    ?.from<GetAttributesValues<'api::category.category'>>('categories')
    .select()
    .populate()
    .get()

  return categories?.data
})

export const getNextPublishPost = cache(async (publishedTime: Date) => {
  const post = await getPostBase()
    .greaterThan('publishedAt', publishedTime.getTime())
    // .sortBy([{ field: 'publishedAt', order: 'asc' }])
    .paginate(1, 1)
    .get()

  return post?.data?.[0]
})
