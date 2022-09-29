/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { env } from "../env.mjs"
import { createRouter } from "./context"

interface Card {
  id: string
  type: "post" | "article"
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

export const mixedRouter = createRouter().query("all", {
  input: z
    .object({
      limit: z.string(),
    })
    .optional(),
  async resolve({ input, ctx }) {
    return (
      await fetch(`${env.STRAPI_ENDPOINT}/front-page-cards`, {
        headers: {
          Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
        },
      })
    ).json() as Promise<Card[]>
  },
})
