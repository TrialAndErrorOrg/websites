import { cache } from 'react'
import { strapiClient } from './api/strapi'
// make sure to import this after the strapiClient
// otherwise the strapiClient will be type undefined
import { Menu } from '@/types'

export const getNavigation = cache(async (slug: string) => (
    (
      await strapiClient
        .from<Menu>('menus?nested=true')
        .select()
        .equalTo('slug', slug)
        .populate()
        .get()
    )?.data?.[0] ?? ({} as Menu)
  ))
