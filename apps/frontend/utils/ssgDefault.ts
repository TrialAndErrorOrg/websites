import { createSSGHelpers } from "@trpc/react/ssg"
import superjson from "superjson"
import { appRouter } from "../server/router"
import { createContext } from "../server/router/context"

export const ssgDefault = async () => {
  const ssg = createSSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  })
  await ssg.fetchQuery("nav.main")
  await ssg.fetchQuery("nav.get", "footer")
  await ssg.fetchQuery("nav.get", "socials")

  return ssg
}
