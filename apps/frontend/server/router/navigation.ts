/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { GetAttributesValues } from "@strapi/strapi"
import { createRouter } from "./context"

type Menu = GetAttributesValues<"plugin::menus.menu">

export const navigationRouter = createRouter().query("main", {
  async resolve({ ctx }) {
    return await ctx.strapi
      .from<Menu>("menus?nested=true")
      .select()
      .equalTo("slug", "main")
      .populate()
      .get()
  },
})
