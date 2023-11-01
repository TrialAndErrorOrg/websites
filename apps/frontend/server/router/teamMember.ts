/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { Attribute } from "@strapi/strapi"
import { createRouter } from "./context"

type TeamMember = Attribute.GetValues<"api::team-member.team-member">

export const teamMemberRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx, input }) {
      const data =
        (
          await ctx.strapi
            .from<TeamMember>("team-members")
            .select(input)
            .populate()
            .get()
        ).data ?? []
      const sorted = data.sort((a, b) => {
        if ((a?.department ?? "") < (b?.department ?? "")) return -1
        if ((a?.department ?? "") > (b?.department ?? "")) return 1
        return 0
      })
      return sorted
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
