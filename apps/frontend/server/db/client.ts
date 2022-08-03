// src/server/db/client.ts
import {
  createClient,
  StrapiClient,
  StrapiClientOptions,
} from "@kmariappan/strapi-client-js"
// eslint-disable-next-line import/extensions
import { env } from "../env.mjs"

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var strapi: StrapiClient | undefined
}

export const strapiClientOptions: StrapiClientOptions = {
  url: env.STRAPI_ENDPOINT,
  apiToken: env.STRAPI_API_TOKEN, // Built in API token,
  normalizeData: true, // Normalize Unified response Format. default - true
  headers: {}, // Custom Headers
  persistSession: false,
}
export const strapi = global.strapi || createClient(strapiClientOptions)

if (env.NODE_ENV !== "production") {
  global.strapi = strapi
}
