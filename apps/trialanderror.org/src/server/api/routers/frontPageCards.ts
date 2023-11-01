import { z } from 'zod'
import { getAllCards } from '../../mixed'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const cardRouter = createTRPCRouter({
  infiniteCards: publicProcedure
    .input(
      z.object({
        limit: z.number().optional().default(6),
        cursor: z.number().optional().default(6),
      }),
    )
    .query(async ({ input }) => {
      const cards = await getAllCards({ limit: input.limit + 1, offset: input.cursor })

      let nextCursor: number | undefined

      if (cards.length > input.limit) {
        cards.pop()

        nextCursor = input.cursor + input.limit
      }

      return {
        cards,
        nextCursor,
      }
    }),
})
