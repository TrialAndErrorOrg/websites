import type { GetAttributesValues } from '@strapi/strapi'
import { strapi } from './strapi'
import type { OpenPosition } from './types'

export const getPositions = async (props?: { page?: number; pageSize?: number }) => {
  const posts = await strapi
    ?.from<GetAttributesValues<'api::open-position.open-position'>>('open-positions')
    .select()
    .populate()
    .sortBy([{ field: 'publishedAt', order: 'desc' }])
    // .paginate(props?.page ?? 1, props?.pageSize ?? 10)
    .get()
  return posts?.data ?? []
}

export const getPosition = async (slug: string) => {
  const posts = await strapi
    ?.from<GetAttributesValues<'api::open-position.open-position'>>('open-positions')
    .select()
    .equalTo('slug', slug)
    .populate()
    // .sortBy([{ field: 'publishedAt', order: 'desc' }])
    // .paginate(props?.page ?? 1, props?.pageSize ?? 10)
    .get()

  return posts?.data?.[0] ?? ({} as OpenPosition)
}
