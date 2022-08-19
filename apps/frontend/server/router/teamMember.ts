/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { GetAttributesValues } from "@strapi/strapi"
import { createRouter } from "./context"

type TeamMember = GetAttributesValues<"api::team-member.team-member">

export const teamMemberRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx, input }) {
      return (
        (
          await ctx.strapi
            .from<TeamMember>("team-members")
            .select(input)
            .populate()
            .get()
        ).data ?? []
      )
    },
  })
  .query("getSEOBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<TeamMember>("team-members")
        .select(["seo"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<TeamMember>("team-members")
        .select()
        .populate()
        .equalTo("slug", input)
        .get()
    },
  })
