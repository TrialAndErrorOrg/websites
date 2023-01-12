import { z } from 'zod'
import { getAllCards } from '../../mixed'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const cardRouter = createTRPCRouter({
  infiniteCards: publicProcedure
    .input(
      z.object({
        limit: z.number().optional().default(9),
        cursor: z.number().optional().default(0),
      }),
    )
    .query(async ({ input }) => {
      const cards = await getAllCards({ limit: input.limit + 1, offset: input.cursor })

      let nextCursor: number | undefined = undefined

      if (cards.length > input.limit) {
        const lastCard = cards.pop()

        nextCursor = input.cursor + input.limit
      }

      return {
        cards,
        nextCursor,
      }
    }),
})
