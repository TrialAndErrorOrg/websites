import { cache } from 'react'
import { strapiClient } from './api/strapi'
// make sure to import this after the strapiClient
// otherwise the strapiClient will be type undefined
import { Menu } from '@/types'
import { GetAttributesValues } from '@strapi/strapi'

export const getPage = cache(async (slug: string) => {
  return (
    (
      await strapiClient
        .from<GetAttributesValues<'api::page.page'> & { id: number }>('pages')
        .select()
        .equalTo('slug', slug)
        .populate()
        .get()
    )?.data?.[0] ?? ({} as GetAttributesValues<'api::page.page'> & { id: number })
  )
})
