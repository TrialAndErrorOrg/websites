/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { GetAttributesValues } from "@strapi/strapi"
import { z } from "zod"
import { createRouter } from "./context"

type FilteredStrapiApiStrings<
  P extends keyof Strapi.Schemas = keyof Strapi.Schemas
> = P extends `${string}page` | `${string}home` ? GetAttributesValues<P> : never

type StrapiTypesWithSeo<P extends Record<string, any>> = P extends {
  seo?: any
}
  ? P
  : never

type StrapiApiTypes = StrapiTypesWithSeo<FilteredStrapiApiStrings>

export const pageRouter = createRouter().query("get", {
  input: z.string(),
  async resolve({ ctx, input }) {
    const res = await ctx.strapi
      .from<StrapiApiTypes>(input)
      .select()
      .populateDeep([
        {
          path: "hero",
          children: "*",
        },
        { path: "seo", children: "*" },
      ])
      .get()

    console.log({ res })
    return res?.data ?? {}
  },
})
