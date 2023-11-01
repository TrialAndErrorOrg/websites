import { cache } from 'react'
import { strapiClient } from './api/strapi'
// make sure to import this after the strapiClient
// otherwise the strapiClient will be type undefined
import type { Page } from '@/types'

export const getPage = cache(async (slug: string) => (
    (await strapiClient.from<Page>('pages').select().equalTo('slug', slug).populate().get())
      ?.data?.[0] ?? ({} as Page)
  ))
