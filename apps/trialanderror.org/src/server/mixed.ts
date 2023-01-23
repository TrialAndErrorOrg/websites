import { cache } from 'react'
import { env } from '../env/server.mjs'

export interface Card {
  id: string
  type: 'post' | 'article'
  title: string
  excerpt: string
  published: string
  url: string
  identifier: string
  tags: string[]
  category?: string | null
  team: Team[] | string[]
  image: Img
}

interface Team {
  img: Img
  lastName: string
  firstName: string
}

interface Img {
  alt?: string
  url?: string
  width?: number
  height?: number
  caption?: string
  formats?: {
    thumbnail?: Img
    small?: Img
    medium?: Img
    large?: Img
  }
}

export const getAllCards = cache(async ({ limit = 100, offset = 0 } = {}) => {
  try {
    return (
      await fetch(`${env.STRAPI_ENDPOINT}/front-page-cards?limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
        },
      })
    ).json() as Promise<Card[]>
  } catch (err) {
    console.log(err)
    return []
  }
})
