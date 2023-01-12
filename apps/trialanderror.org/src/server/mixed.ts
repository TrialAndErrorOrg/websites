import { env } from '../env/server.mjs'

interface Card {
  id: string
  type: 'post' | 'article'
  title: string
  excerpt: string
  published: string
  url: string
  identifier: string
  tags: string[]
  category?: string | null
  team: Team[]
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
}

export async function getAllCards() {
  try {
    return (
      await fetch(`${env.STRAPI_ENDPOINT}/front-page-cards`, {
        headers: {
          Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
        },
      })
    ).json() as Promise<Card[]>
  } catch (err) {
    console.log(err)
    return []
  }
}
