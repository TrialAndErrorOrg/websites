/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { keys} from "ts-transformer-keys"
import { enumerate} from "ts-transformer-enumerate"
import { z, ZodTupleDef } from "zod"
import { createRouter } from "./context"
import { ApiTeamMemberTeamMember } from "@/types"
const x  = Object.freeze(enumerate<'hey'|'ho'>())

const teamMemberKeys = keys<ApiTeamMemberTeamMember["attributes"]>()
const y = Object.freeze(teamMemberKeys.map(key=>z.literal(key)))
const teamMemberRegex = new RegExp(`^(${teamMemberKeys.join("|")})$`)

export const teamMemberRouter = createRouter()
  .query("getAll", {
    input: z.union(y),
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
