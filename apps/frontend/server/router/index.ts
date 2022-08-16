// src/server/router/index.ts
import superjson from "superjson"
import { createRouter } from "./context"

import { exampleRouter } from "./example"
import { authRouter } from "./auth"
import { blogPostRouter } from "./blogPost"
import { teamMemberRouter } from "./teamMember"
import { blogAuthorRouter } from "./blogAuthor"
import { orcidRouter } from "./orcid"
import { seoRouter } from "./seo"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", authRouter)
  .merge("blog.", blogPostRouter)
  .merge("blogAuthor.", blogAuthorRouter)
  .merge("teamMember.", teamMemberRouter)
  .merge("orcid.", orcidRouter)
  .merge("seo.", seoRouter)

// export type definition of API
export type AppRouter = typeof appRouter
