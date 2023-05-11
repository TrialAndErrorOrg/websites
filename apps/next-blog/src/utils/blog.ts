import { cache } from 'react'
import { strapi } from './strapi'
import type { BlogPost } from './types'
import { GetAttributes } from '@strapi/strapi'

export const getPosts = cache(
  async (props?: { page?: number; pageSize?: number; slug?: string }) => {
    const posts = await strapi
      ?.from<BlogPost>('blog-posts')
      .select()
      .populateWith('title')
      .populateWith('slug')
      .populateWith('body')
      .populateWith('excerpt')
      .populateWith('publishDate')
      .populateWith('publishedAt')
      .populateDeep([
        {
          path: 'related',
          fields: ['title', 'slug', 'excerpt', 'publishDate', 'publishedAt'],
          children: [
            {
              key: 'image',
              fields: ['url', 'formats', 'alternativeText', 'height', 'width'],
            },
            {
              key: 'category',
              fields: ['slug', 'title'],
            },
            {
              key: 'blog_authors',
              fields: ['firstName', 'lastName', 'slug'],
            },
            {
              key: 'team_members',
              fields: ['firstName', 'lastName', 'slug'],
            },
            { key: 'blog_tags', fields: ['title', 'slug'] },
          ],
        },
      ])

      .populateWith('blog_authors', undefined, true)
      .populateWith('blog_tags', undefined, true)
      .populateWith('team_members', undefined, true)
      .populateWith('seo', undefined, true)
      .populateWith('academic', undefined, true)
      .populateWith('image', undefined, true)
      .populateWith('category', undefined, true)
      .sortBy([
        { field: 'publishDate', order: 'desc' },
        { field: 'publishedAt', order: 'desc' },
      ])
      // .paginate(props?.page ?? 1, props?.pageSize ?? 10)
      .get()

    return posts?.data ?? []
  },
)

type BlogFields = 'slug' | 'title' | 'publishDate' | 'id' | 'category' | 'publishedAt'

export const getPostBy = cache(async ({ field, value }: { field: BlogFields; value: string }) => {
  const posts = await strapi
    ?.from<BlogPost>('blog-posts')
    .select()
    .populateWith('title')
    .populateWith('slug')
    .populateWith('body')
    .populateWith('excerpt')
    .populateWith('publishDate')
    .populateWith('publishedAt')
    .populateDeep([
      {
        path: 'related',
        fields: ['title', 'slug', 'excerpt', 'publishDate', 'publishedAt'],
        children: [
          {
            key: 'image',
            fields: ['url', 'formats', 'alternativeText', 'height', 'width'],
          },
          {
            key: 'category',
            fields: ['slug', 'title'],
          },
          {
            key: 'blog_authors',
            fields: ['firstName', 'lastName', 'slug'],
          },
          {
            key: 'team_members',
            fields: ['firstName', 'lastName', 'slug'],
          },
          { key: 'blog_tags', fields: ['title', 'slug'] },
        ],
      },
    ])

    .populateWith('blog_authors', undefined, true)
    .populateWith('blog_tags', undefined, true)
    .populateWith('team_members', undefined, true)
    .populateWith('seo', undefined, true)
    .populateWith('academic', undefined, true)
    .populateWith('image', undefined, true)
    .populateWith('category', undefined, true)
    .equalTo(field, value)
    .get()

  return posts?.data?.[0]
})
