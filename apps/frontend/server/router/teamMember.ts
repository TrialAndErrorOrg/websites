/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { createRouter } from "./context"
import { ApiTeamMemberTeamMember } from "@/types"

export const teamMemberRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.strapi
        .from<ApiTeamMemberTeamMember>("team-members")
        .select()
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
