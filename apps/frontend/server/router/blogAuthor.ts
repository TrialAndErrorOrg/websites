/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { Attribute } from "@strapi/strapi"
import { createRouter } from "./context"

type BlogAuthor = Attribute.GetValues<"api::blog-author.blog-author">
type TeamMember = Attribute.GetValues<"api::team-member.team-member">

export const blogAuthorRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.strapi.from<BlogAuthor>("blog-authors").select().get()
    },
  })
  .query("getSEOBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<BlogAuthor>("blog-authors")
        .select(["seo"])
        .equalTo("slug", input)
        .get()
    },
  })
  .query("getBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      try {
        return await ctx.strapi
          .from<TeamMember>("team-members")
          .select()
          .equalTo("slug", input)
          .get()
      } catch (error) {
        return await ctx.strapi
          .from<BlogAuthor>("blog-authors")
          .select()
          .equalTo("slug", input)
          .get()
      }
    },
  })
  .query("getBlogAuthorsBySlug", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<BlogAuthor>("blog-authors")
        .select(["blog_posts"])
        .equalTo("slug", input)
        .get()
    },
  })
