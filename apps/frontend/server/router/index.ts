// src/server/router/index.ts
import superjson from "superjson"
import { createRouter } from "./context"

import { authRouter } from "./auth"
import { blogPostRouter } from "./blogPost"
import { teamMemberRouter } from "./teamMember"
import { blogAuthorRouter } from "./blogAuthor"
import { orcidRouter } from "./orcid"
import { seoRouter } from "./seo"
import { navigationRouter } from "./navigation"
import { pageRouter } from "./page"
import { mixedRouter } from "./mixed"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", authRouter)
  .merge("blog.", blogPostRouter)
  .merge("blogAuthor.", blogAuthorRouter)
  .merge("teamMember.", teamMemberRouter)
  .merge("orcid.", orcidRouter)
  .merge("seo.", seoRouter)
  .merge("nav.", navigationRouter)
  .merge("page.", pageRouter)
  .merge("mixed.", mixedRouter)

// export type definition of API
export type AppRouter = typeof appRouter
