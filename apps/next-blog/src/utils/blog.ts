import { cache } from 'react'
import { strapi } from './strapi'
import type { BlogPost } from '@/types'
import { Attribute } from '@strapi/strapi'
import { env } from '../env/server.mjs'

type StrapiResponse = {
  data:
    | {
        id: number
        attributes: {
          [key: string]: StrapiResponse | StrapiResponse[] | string | number | boolean | null
        }
      }
    | {
        id: number
        attributes: {
          [key: string]: StrapiResponse | StrapiResponse[] | string | number | boolean | null
        }
      }[]
}

export function _normalizeData(data: any): any {
  const isObject = (data2: any) => Object.prototype.toString.call(data2) === '[object Object]'
  const flatten = (data2: any) => {
    if (!data2.attributes) return data2
    return {
      id: data2.id,
      ...data2.attributes,
    }
  }
  if (Array.isArray(data)) {
    return data.map((item: any) => _normalizeData(item))
  }
  if (isObject(data)) {
    if (Array.isArray(data.data)) {
      data = [...data.data]
    } else if (isObject(data.data)) {
      data = flatten({ ...data.data })
    } else if (data.data === null) {
      data = null
    } else {
      data = flatten(data)
    }
    for (const key in data) {
      data[key] = _normalizeData(data[key])
    }
    return data
  }
  return data
}
// function bc otherwise react-cache fucks with it
const getPostBase = (draftMode = false) => {
  const base = strapi
    ?.from<BlogPost>('blog-posts')
    .select(['title', 'slug', 'publishDate', 'publishedAt', 'doi', 'excerpt', 'id', 'updatedAt'])
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
    .populateWith('blog_authors')
    .populateWith('blog_tags')
    .populateWith('team_members')
    // .populateWith('seo', undefined, true)
    // .populateWith('academic', undefined, true)
    .populateWith('image')
    .populateWith('category')

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

export const getAllPosts = async (draftMode = false) => {
  const data = await fetch(
    `${
      env.STRAPI_ENDPOINT
    }/blog-posts?fields[0]=title&fields[1]=slug&fields[2]=publishDate&fields[3]=publishedAt&fields[4]=doi&fields[5]=excerpt&fields[6]=id&fields[7]=updatedAt&populate[blog_authors][populate]=&populate[blog_tags][populate]=&populate[team_members][populate]=&populate[image][populate]=&populate[category][populate]=&sort[0]=publishDate%3Adesc&sort[1]=publishedAt%3Adesc${
      draftMode ? '&publicationState=preview' : ''
    }`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
      },
    },
  )

  const posts = await data.json()

  return _normalizeData(posts) as BlogPost[]
}

export const _getAllPosts = cache(async (draftMode = false) => {
  console.log(new Date().toISOString(), 'IM FETCHIN')
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
    ?.from<Attribute.GetValues<'api::tag.tag'>>('tags')
    .select()
    .populate()
    .get()

  return tags?.data
})

export const getCategories = cache(async () => {
  const categories = await strapi
    ?.from<Attribute.GetValues<'api::category.category'>>('categories')
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

export const getSinglePost = async (slug: string, draftMode = false) => {
  const data = await fetch(
    `${
      env.STRAPI_ENDPOINT
    }/blog-posts?populate[blog_tags][populate]=&populate%5Bteam_members%5D%5Bfields%5D%5B0%5D=firstName&populate%5Bteam_members%5D%5Bfields%5D%5B1%5D=lastName&populate%5Bteam_members%5D%5Bfields%5D%5B2%5D=slug&populate%5Bteam_members%5D%5Bfields%5D%5B3%5D=position&populate%5Bteam_members%5D%5Bfields%5D%5B4%5D=orcid&populate%5Bteam_members%5D%5Bfields%5D%5B5%5D=twitter&populate%5Bteam_members%5D%5Bfields%5D%5B6%5D=github&populate%5Bteam_members%5D%5Bfields%5D%5B7%5D=linkedin&populate%5Bteam_members%5D%5Bfields%5D%5B8%5D=personalWebsite&populate%5Bteam_members%5D%5Bfields%5D%5B9%5D=summary&populate%5Bteam_members%5D%5Bfields%5D%5B10%5D=mastodon&populate%5Bteam_members%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B0%5D=url&populate%5Bteam_members%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B1%5D=formats&populate%5Bteam_members%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B2%5D=alternativeText&populate%5Bteam_members%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B3%5D=height&populate%5Bteam_members%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B4%5D=width&populate%5Bblog_authors%5D%5Bfields%5D%5B0%5D=firstName&populate%5Bblog_authors%5D%5Bfields%5D%5B1%5D=lastName&populate%5Bblog_authors%5D%5Bfields%5D%5B2%5D=slug&populate%5Bblog_authors%5D%5Bfields%5D%5B3%5D=orcid&populate%5Bblog_authors%5D%5Bfields%5D%5B4%5D=twitter&populate%5Bblog_authors%5D%5Bfields%5D%5B5%5D=github&populate%5Bblog_authors%5D%5Bfields%5D%5B6%5D=linkedIn&populate%5Bblog_authors%5D%5Bfields%5D%5B7%5D=personalWebsite&populate%5Bblog_authors%5D%5Bfields%5D%5B8%5D=summary&populate%5Bblog_authors%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B0%5D=url&populate%5Bblog_authors%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B1%5D=formats&populate%5Bblog_authors%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B2%5D=alternativeText&populate%5Bblog_authors%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B3%5D=height&populate%5Bblog_authors%5D%5Bpopulate%5D%5Bimage%5D%5Bfields%5D%5B4%5D=width&populate[image][populate]=&populate[category][populate]=&filters[slug][$eq]=${slug}${
      draftMode ? '&publicationState=preview' : ''
    }`,
    {
      headers: {
        Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
      },
    },
  )

  const post = await data.json()

  const normalizedPost = _normalizeData(post)

  return normalizedPost?.[0] as BlogPost
}

export const _getSinglePost = cache(async (slug: string, draftMode = false) => {
  const getPost = await strapi
    .from<BlogPost>('blog-posts')
    .select()
    // .populateWith('blog_authors')
    .populateWith('blog_tags')
    // .populateWith('team_members')
    .populateDeep([
      {
        path: 'team_members',
        fields: [
          'firstName',
          'lastName',
          'slug',
          'position',
          'orcid',
          'twitter',
          'github',
          'linkedin',
          'personalWebsite',
          'summary',
          'mastodon',
        ],
        children: [
          { key: 'image', fields: ['url', 'formats', 'alternativeText', 'height', 'width'] },
        ],
      },
      {
        path: 'blog_authors',
        fields: [
          'firstName',
          'lastName',
          'slug',
          'orcid',
          'twitter',
          'github',
          'linkedIn',
          'personalWebsite',
          'summary',
        ],
        children: [
          { key: 'image', fields: ['url', 'formats', 'alternativeText', 'height', 'width'] },
        ],
      },
    ])
    .populateWith('image')
    .populateWith('category')
    .equalTo('slug', slug)

  const post = draftMode ? getPost.withDraft().get() : getPost.get()

  return (await post)?.data?.[0]
})
