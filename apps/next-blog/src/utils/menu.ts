import type { Menu } from '@/types'
import { strapi } from './strapi'
import { cache } from 'react'
import { env } from '../env/server.mjs'
import { _normalizeData } from './blog'

export const getMain = cache(async () => {
  return (
    (
      await strapi
        .from<Menu>('menus?nested=true')
        .select()
        .equalTo('slug', 'main')
        .populateDeep([
          {
            path: 'items',
            children: [
              {
                key: 'icon',
                fields: ['*'],
              },
              { key: 'description', fields: ['*'] },
            ],
          },
        ])
        .get()
    )?.data?.[0]?.items ?? ([] as NonNullable<Menu['items']>)
  )
})

export const getUserMenu = cache(
  async () =>
    (
      await strapi
        .from<Menu>('menus?nested=true')
        .select()
        .equalTo('slug', 'user-navigation')
        .populateDeep([
          {
            path: 'items',
            children: [
              {
                key: 'icon',
                fields: ['*'],
              },
            ],
          },
        ])
        .get()
    )?.data?.[0] ?? ({} as Menu),
)

export const _getMenu = cache(
  async (input: string) =>
    (await strapi.from<Menu>('menus?nested=true').select().equalTo('slug', input).populate().get())
      ?.data?.[0]?.items ?? ([] as Menu['items']),
)

export const getMenu = async (slug: string) => {
  const men = await fetch(
    `${env.STRAPI_ENDPOINT}/menus?nested=true&filters[slug][$eq]=${slug}&populate=%2A`,
    {
      headers: {
        Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
      },
    },
  )
  const menu = await men.json()

  return (_normalizeData(menu)?.[0]?.items ?? []) as Menu['items']
}
