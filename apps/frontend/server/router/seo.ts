/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Attribute } from "@strapi/strapi"
import { z } from "zod"
import { createRouter } from "./context"

type Global = Attribute.GetValues<"api::global.global">
type FilteredStrapiApiStrings<
  P extends keyof Strapi.Schemas = keyof Strapi.Schemas
> = P extends `api::${string}` ? Attribute.GetValues<P> : never

type StrapiTypesWithSeo<P extends Record<string, any>> = P extends {
  seo?: any
}
  ? P
  : never

type StrapiApiTypes = StrapiTypesWithSeo<FilteredStrapiApiStrings>

export const seoRouter = createRouter()
  .query("default", {
    async resolve({ ctx }) {
      return (await ctx.strapi.from<Global>("global").select().populate().get())
        ?.data?.[0]
    },
  })
  .query("get", {
    input: z.enum([
      "blog-post",
      "team-member",
      "blog-author",
      "team-page",
      "homepage",
      "blog-home",
    ]),
    async resolve({ ctx, input }) {
      const res = await ctx.strapi
        .from<StrapiApiTypes>(input)
        .select(["seo"])
        .populate()
        .get()

      return res?.data?.[0]?.seo ?? ({} as StrapiApiTypes["seo"])
    },
  })
