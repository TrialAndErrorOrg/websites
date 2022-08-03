/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { createRouter } from "./context"
import { ApiBlogAuthorBlogAuthor } from "@/types"

export const blogAuthorRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.strapi
        .from<ApiBlogAuthorBlogAuthor>("blog-authors")
        .select()
        .get()
    },
  })
  .query("getSEOBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiBlogAuthorBlogAuthor["attributes"]>("blog-authors")
        .select(["SEO"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiBlogAuthorBlogAuthor["attributes"]>("blog-authors")
        .select(["SEO"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getBlogAuthorsBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<ApiBlogAuthorBlogAuthor["attributes"]>("blog-authors")
        .select(["blog_posts"])
        .equalTo("slug", input)
        .get()
    },
  })
