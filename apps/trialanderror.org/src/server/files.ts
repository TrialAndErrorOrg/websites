import { cache } from 'react'
import { strapiClient } from './api/strapi'
import { Attribute } from '@strapi/strapi'
import { env } from '../env/server.mjs'

export const getFile = async (id: number) => {
  try {
    return (
      await fetch(`${env.STRAPI_ENDPOINT}/upload/files/${id}`, {
        headers: {
          Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
        },
      })
    ).json() as Promise<Attribute.GetValues<'plugin::upload.file'>>
  } catch (err) {
    console.log(err)
    return null
  }
}
