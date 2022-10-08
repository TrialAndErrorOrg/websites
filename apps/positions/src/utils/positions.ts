import type { GetAttributesValues } from '@strapi/strapi'
import { strapi } from './strapi'

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
