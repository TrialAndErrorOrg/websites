/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { GetAttributesValues } from "@strapi/strapi"
import { createRouter } from "./context"

type BlogPost = GetAttributesValues<"api::blog-post.blog-post">

const order = ["asc", "desc"] as const
const orderBy = ["title", "publishDate", "publishedAt"] as const
type SortArr = { field: typeof orderBy[number]; order: typeof order[number] }[]

export const blogPostRouter = createRouter()
  .query("getAll", {
    input: z.object({
      order: z.enum(order).default("desc"),
      orderBy: z.enum(orderBy).default("publishDate"),
      limit: z.number().min(1).max(100).default(20),
      start: z.number().min(0).default(0),
    }),
    async resolve({ ctx, input }) {
      const sortByArray = (
        input.orderBy === "title"
          ? [{ field: "title", order: input.order }]
          : [
              { field: "publishDate", order: input.order },
              { field: "publishedAt", order: input.order },
            ]
      ) as SortArr
      return await ctx.strapi
        .from<BlogPost>("blog-posts")
        .select()
        .populate()
        .sortBy(sortByArray)
        .get()
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
        .populate()
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
