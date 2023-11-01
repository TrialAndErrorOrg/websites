import { Attribute } from '@strapi/strapi'
import { cache } from 'react'
import { strapiClient } from './api/strapi'

export const getPerson = cache(async (slug: string) => {
  const person = await strapiClient
    .from<Attribute.GetValues<'api::team-member.team-member'>>('team-members')
    .select()
    .populate()
    .equalTo('slug', slug)
    .get()

  return person
})
