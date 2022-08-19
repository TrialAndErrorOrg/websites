/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { GetAttributesValues } from "@strapi/strapi"
import { z } from "zod"
import { createRouter } from "./context"

type File = GetAttributesValues<"plugin::upload.file">

export const pageRouter = createRouter()
  .query("get", {
    input: z.string(),
    async resolve({ ctx, input }) {
      const res = await ctx.strapi.from<File>(input).select().get()
      return res?.data ?? {}
    },
  })
  .query("svg-logo", {
    async resolve({ ctx }) {
      return await (
        await fetch(
          "https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_blue_background_b87382260b.svg?updated_at=2022-08-19T18:39:49.674Z"
        )
      ).blob()
    },
  })
