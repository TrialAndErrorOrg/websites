/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { GetAttributesValues } from "@strapi/strapi"
import { createRouter } from "./context"

type BlogPost = GetAttributesValues<"api::blog-post.blog-post">

export const blogPostRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.strapi.from<BlogPost>("blog-posts").select().get()
    },
  })
  .query("getSEOBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<BlogPost>("blog-posts")
        .select(["seo"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<BlogPost>("blog-posts")
        .select()
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getRelatedBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<BlogPost>("blog-posts")
        .select(["related"])
        .equalTo("slug", input)
        .get()
    },
  })
