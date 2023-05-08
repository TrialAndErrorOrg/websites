import { createClient, StrapiClient, StrapiClientOptions } from '@kmariappan/strapi-client-js'
// eslint-disable-next-line import/extensions

declare global {
  // @ts-expect-error i kinda need to
  // eslint-disable-next-line vars-on-top, no-var
  var strapi: StrapiClient | undefined
}

export const strapiClientOptions: StrapiClientOptions = {
  url: process.env.STRAPI_ENDPOINT!,
  apiToken: process.env.STRAPI_API_TOKEN, // Built in API token,
  normalizeData: true, // Normalize Unified response Format. default - true
  headers: {}, // Custom Headers
  persistSession: false,
}

export const strapi = createClient(strapiClientOptions)
