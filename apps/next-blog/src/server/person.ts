import { GetAttributesValues } from '@strapi/strapi'
import { cache } from 'react'
import { strapiClient } from './api/strapi'

export const getPerson = cache(async (slug: string) => {
  const person = await strapiClient
    .from<GetAttributesValues<'api::team-member.team-member'>>('team-members')
    .select()
    .populate()
    .equalTo('slug', slug)
    .get()

  return person
})
