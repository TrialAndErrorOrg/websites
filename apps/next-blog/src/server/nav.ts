import { unstable_cache } from 'next/cache'
import { strapiClient } from './api/strapi'
// make sure to import this after the strapiClient
// otherwise the strapiClient will be type undefined
import type { Menu } from '@/types'

export const getNavigation = unstable_cache(
  async (slug: string) => {
    return (
      (
        await strapiClient
          .from<Menu>('menus?nested=true')
          .select()
          .equalTo('slug', slug)
          .populate()
          .get()
      )?.data?.[0] ?? ({} as Menu)
    )
  },
  ['menu-cache'],
  {
    tags: ['global'],
    revalidate: 60 * 60 * 24,
  },
)
