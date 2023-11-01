/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Attribute } from "@strapi/strapi"
import { TRPCError } from "@trpc/server"
import { createRouter } from "./context"

type User = Attribute.GetValues<"plugin::users-permissions.user">
export const authRouter = createRouter()
  .query("getSession", {
    resolve({ ctx }) {
      return ctx.session
    },
  })
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }
    return next()
  })
  .query("avatar", {
    async resolve({ ctx: { session, strapi } }) {
      const { user } = session ?? {}
      if (!session || !user || !user.email) return ""
      if (user?.image) {
        return user.image
      }

      const image = await strapi
        .from<User>("users")
        .select(["avatar", "provider"])
        .equalTo("email", user.email)
        .get()

      if (image?.data?.[0]?.avatar) {
        return image.data[0].avatar
      }
      return ""
    },
  })
  .query("getSecretMessage", {
    async resolve() {
      return "You are logged in and can see this secret message!"
    },
  })
