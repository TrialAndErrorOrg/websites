// src/server/router/context.ts
import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { unstable_getServerSession as getServerSession } from "next-auth"
import { OrcidClient } from "orcid-client"

import { authOptions as nextAuthOptions } from "../../pages/api/auth/[...nextauth]"
import { strapi } from "../db/client"
import { getOrcidToken } from "../orcidToken"

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  const req = opts?.req
  const res = opts?.res

  const session =
    req && res && (await getServerSession(req, res, nextAuthOptions))

  const { data: token } = await getOrcidToken()
  const orcid = token?.access_token
    ? new OrcidClient({
        TOKEN: token.access_token,
        BASE: "https://pub.orcid.org",
      }).orcid
    : undefined

  return {
    req,
    res,
    session,
    strapi,
    orcid,
  }
}

type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>()
