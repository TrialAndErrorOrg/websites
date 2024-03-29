// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === "production"
      ? z.string().min(1)
      : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url(),
  ),
  STRAPI_ENDPOINT: z.string().url(),
  STRAPI_API_TOKEN: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  ORCID_CLIENT_ID: z.string(),
  ORCID_CLIENT_SECRET: z.string(),
  // NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
  MEILISEARCH_URL: z.string().url(),
  MEILISEARCH_API_KEY: z.string(),
  NEXT_REVALIDATION_TOKEN: z.string(),
  // ORCID_ACCESS_SECRET: z.string(),
  PORT: z.string().optional(),
  VERCEL_URL: z.string(),
  OG_URL: z.string().url()
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string(),
});
