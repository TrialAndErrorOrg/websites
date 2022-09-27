import { z } from "zod"

export const envSchema = z.object({
  STRAPI_ENDPOINT: z.string().url(),
  STRAPI_API_TOKEN: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().url(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  ORCID_CLIENT_ID: z.string(),
  ORCID_CLIENT_SECRET: z.string(),
  NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
  NEXT_PUBLIC_MEILISEARCH_URL: z.string().url(),
  NEXT_PUBLIC_MEILISEARCH_API_KEY: z.string(),
  // ORCID_ACCESS_SECRET: z.string(),
  PORT: z.string().optional(),
})
