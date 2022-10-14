// import path from 'path'
import vercel from '@astrojs/vercel/serverless'
// import { fileURLToPath } from 'url'

import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import { SITE } from './src/config'
declare global {
  // @ts-expect-error i kinda need to
  // eslint-disable-next-line vars-on-top, no-var
  var strapi: StrapiClient | undefined
}

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,

  output: 'server',
  adapter: vercel(),

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
  ],
})
