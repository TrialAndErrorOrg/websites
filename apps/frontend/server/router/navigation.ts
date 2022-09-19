/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { GetAttributesValues } from "@strapi/strapi"
import { z } from "zod"
import { createRouter } from "./context"

type Menu = GetAttributesValues<"plugin::menus.menu">

export const navigationRouter = createRouter()
  .query("main", {
    async resolve({ ctx }) {
      return (
        (
          await ctx.strapi
            .from<Menu>("menus?nested=true")
            .select()
            .equalTo("slug", "main")
            .populateDeep([
              {
                path: "items",
                children: [
                  {
                    key: "icon",
                    fields: ["*"],
                  },
                  { key: "description", fields: ["*"] },
                ],
              },
            ])
            .get()
        )?.data?.[0] ?? ({} as Menu)
      )
    },
  })
  .query("user", {
    async resolve({ ctx }) {
      return (
        (
          await ctx.strapi
            .from<Menu>("menus?nested=true")
            .select()
            .equalTo("slug", "user-navigation")
            .populateDeep([
              {
                path: "items",
                children: [
                  {
                    key: "icon",
                    fields: ["*"],
                  },
                ],
              },
            ])
            .get()
        )?.data?.[0] ?? ({} as Menu)
      )
    },
  })
  .query("get", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return (
        (
          await ctx.strapi
            .from<Menu>("menus?nested=true")
            .select()
            .equalTo("slug", input)
            .populate()
            .get()
        )?.data?.[0] ?? ({} as Menu)
      )
    },
  })
