// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]),
	STRAPI_ENDPOINT: z.string().url(),
	STRAPI_API_TOKEN: z.string(),
	// NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
	// MEILISEARCH_URL: z.string().url(),
	// MEILISEARCH_API_KEY: z.string(),
	NEXT_REVALIDATION_TOKEN: z.string(),
	// ORCID_ACCESS_SECRET: z.string(),
	PORT: z.string().optional(),
	VERCEL_URL: z.string(),
	OG_URL: z.string().url(),
	DRAFT_SECRET: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
	// NEXT_PUBLIC_CLIENTVAR: z.string(),
});
