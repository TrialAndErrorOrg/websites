/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { z } from "zod"
import { Attribute } from "@strapi/strapi"
import { createRouter } from "./context"

type BlogPost = Attribute.GetValues<"api::blog-post.blog-post">

const orderEnum = ["asc", "desc"] as const
const orderByEnum = ["title", "publishDate", "publishedAt"] as const
type SortArr = {
  field: (typeof orderByEnum)[number]
  order: (typeof orderEnum)[number]
}[]

const makeSortArray = ({
  order,
  orderBy,
}: {
  order: (typeof orderEnum)[number]
  orderBy: (typeof orderByEnum)[number]
}): SortArr =>
  (orderBy === "title"
    ? [{ field: "title", order }]
    : [
        { field: "publishDate", order },
        { field: "publishedAt", order },
      ]) as SortArr

export const blogPostRouter = createRouter()
  .query("getAll", {
    input: z.object({
      order: z.enum(orderEnum).default("desc"),
      orderBy: z.enum(orderByEnum).default("publishDate"),
      limit: z.number().min(1).max(100).default(20),
      start: z.number().min(0).default(0),
      tag: z.array(z.string()).optional(),
    }),
    async resolve({ ctx, input }) {
      console.log(input?.tag?.[0] ?? "")
      return await ctx.strapi
        .from<BlogPost>("blog-posts")
        .select()
        .filterDeep(
          "blog_tags.slug",
          input.tag ? "in" : "contains",
          input.tag ?? ""
        )
        .populate()
        .sortBy(makeSortArray({ order: input.order, orderBy: input.orderBy }))
        .get()
    },
  })
  .query("getByTag", {
    input: z.object({
      tag: z.string(),
      order: z.enum(orderEnum).default("desc"),
      orderBy: z.enum(orderByEnum).default("publishDate"),
      limit: z.number().min(1).max(100).default(20),
      start: z.number().min(0).default(0),
    }),
    async resolve({ ctx, input }) {
      return await ctx.strapi
        .from<BlogPost>("blog-posts")
        .select()
        .populate()
        .filterDeep("blog_tags.title", "eq", input.tag)
        .sortBy(makeSortArray({ order: input.order, orderBy: input.orderBy }))
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
      const res = await ctx.strapi
        .from<BlogPost>("blog-posts")
        .select()
        .equalTo("slug", input)
        .populate()
        .get()

      return res.data
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
