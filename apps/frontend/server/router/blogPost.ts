/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { createRouter } from "./context"
import { ApiBlogPostBlogPost } from "@/types"

export const blogPostRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.strapi
        .from<ApiBlogPostBlogPost>("blog-posts")
        .select()
        .get()
    },
  })
  .query("getSEOBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiBlogPostBlogPost["attributes"]>("blog-posts")
        .select(["SEO"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiBlogPostBlogPost["attributes"]>("blog-posts")
        .select(["SEO"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getRelatedBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiBlogPostBlogPost["attributes"]>("blog-posts")
        .select(["related"])
        .equalTo("slug", input)
        .get()
    },
  })
