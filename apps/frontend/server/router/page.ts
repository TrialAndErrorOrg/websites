/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { GetAttributesValues } from "@strapi/strapi"
import { z } from "zod"
import { createRouter } from "./context"

type FilteredStrapiApiStrings<
  P extends keyof Strapi.Schemas = keyof Strapi.Schemas
> = P extends `${string}page` | `${string}home` ? P : never

// type StrapiApiTypes = StrapiTypesWithSeo<FilteredStrapiApiStrings>
type Pages =
  | "homepage"
  | "about-page"
  | "blog-home"
  | "donate-page"
  | "team-page"
  | "legal-page"
  | "open-positions-page"
type Page<
  T extends Pages,
  P extends FilteredStrapiApiStrings = FilteredStrapiApiStrings
> = P extends `${string}${T}` ? GetAttributesValues<P> : never

type PlainPage = GetAttributesValues<"api::page.page">

const populateHero = {
  path: "hero",
  children: "*",
} as const
const populateSeo = { path: "seo", children: "*" } as const
const populate = [populateHero, populateSeo]

export const pageRouter = createRouter()
  .query("get", {
    input: z.string(),
    async resolve({ input, ctx }) {
      return (
        (
          await ctx.strapi
            .from<PlainPage>("pages")
            .select()
            .equalTo("slug", input)
            .populate()
            .get()
        )?.data?.[0] ?? ({} as PlainPage)
      )
    },
  })
  .query("homepage", {
    async resolve({ ctx }) {
      const res = await ctx.strapi
        .from<Page<"homepage">>("homepage")
        .select()
        .populateDeep(populate)
        .get()
      return (
        (Array.isArray(res?.data) ? res?.data?.[0] : res?.data) ??
        ({} as Page<"homepage">)
      )
    },
  })
  .query("about-page", {
    async resolve({ ctx }) {
      const res = await ctx.strapi
        .from<Page<"about-page">>("about-page")
        .select()
        .populateDeep(populate)
        .get()
      return (
        (Array.isArray(res?.data) ? res?.data?.[0] : res?.data) ??
        ({} as Page<"about-page">)
      )
    },
  })
  .query("blog-home", {
    async resolve({ ctx }) {
      const res = await ctx.strapi
        .from<Page<"blog-home">>("blog-home")
        .select()
        .populateDeep(populate)
        .get()
      return (
        (Array.isArray(res?.data) ? res?.data?.[0] : res?.data) ??
        ({} as Page<"blog-home">)
      )
    },
  })
  .query("team-page", {
    async resolve({ ctx }) {
      const res = await ctx.strapi
        .from<Page<"team-page">>("team-page")
        .select()
        .populateDeep(populate)
        .get()
      return (
        (Array.isArray(res?.data) ? res?.data?.[0] : res?.data) ??
        ({} as Page<"team-page">)
      )
    },
  })
  .query("donate-page", {
    async resolve({ ctx }) {
      const res = await ctx.strapi
        .from<Page<"donate-page">>("donate-page")
        .select()
        .populateDeep(populate)
        .get()
      return (
        (Array.isArray(res?.data) ? res?.data?.[0] : res?.data) ??
        ({} as Page<"donate-page">)
      )
    },
  })
  .query("legal-page", {
    async resolve({ ctx }) {
      const res = await ctx.strapi
        .from<Page<"legal-page">>("legal-page")
        .select()
        .populateDeep(populate)
        .get()
      return (
        (Array.isArray(res?.data) ? res?.data?.[0] : res?.data) ??
        ({} as Page<"legal-page">)
      )
    },
  })
  .query("open-positions-page", {
    async resolve({ ctx }) {
      const res = await ctx.strapi
        .from<Page<"open-positions-page">>("open-positions-page")
        .select()
        .populateDeep(populate)
        .get()
      return (
        (Array.isArray(res?.data) ? res?.data?.[0] : res?.data) ??
        ({} as Page<"open-positions-page">)
      )
    },
  })
