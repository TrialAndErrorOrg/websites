import { GetAttributesValues } from '@strapi/strapi'
import { cache } from 'react'
import { strapi } from './strapi'

export const getPerson = cache(async (slug: string) => {
  const person = await strapi
    .from<GetAttributesValues<'api::team-member.team-member'>>('team-members')
    .select()
    .populateWith('image', undefined, true)
    .populateDeep([
      {
        path: 'blog_posts',
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
    .equalTo('slug', slug)
    .get()

  if (!person.data?.[0]) {
    return (
      await strapi
        .from<GetAttributesValues<'api::blog-author.blog-author'>>('blog-authors')
        .select()
        .populateWith('image', undefined, true)
        .populateDeep([
          {
            path: 'blog_posts',
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
        .equalTo('slug', slug)
        .get()
    )?.data?.[0]
  }

  return person?.data?.[0]
})
