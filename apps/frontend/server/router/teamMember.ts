/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { ApiTeamMemberTeamMember } from "@/types"
import { createRouter } from "./context"

export const teamMemberRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiTeamMemberTeamMember["attributes"]>("team-members")
        .select(input)
        .get()
    },
  })
  .query("getSEOBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiTeamMemberTeamMember["attributes"]>("team-members")
        .select(["SEO"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiTeamMemberTeamMember["attributes"]>("team-members")
        .select(["SEO"])
        .equalTo("slug", input)
        .get()
    },
  })
