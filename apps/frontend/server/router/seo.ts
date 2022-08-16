/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { GetAttributesValues } from "@strapi/strapi"
import { createRouter } from "./context"

type Global = GetAttributesValues<"api::global.global">

export const seoRouter = createRouter().query("default", {
  async resolve({ ctx, input }) {
    return await ctx.strapi
      .from<Global>("global")
      .select(input)
      .populate()
      .get()
  },
})
