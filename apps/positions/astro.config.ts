// import path from 'path'
import vercel from '@astrojs/vercel/serverless'
// import { fileURLToPath } from 'url'

import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
// import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
// import partytown from '@astrojs/partytown'
import react from '@astrojs/react'

import { SITE } from './src/config'
// import * as StrapiTypes from '../../libs/types/src/lib/schemas'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

declare global {
  // @ts-expect-error i kinda need to
  // eslint-disable-next-line vars-on-top, no-var
  var strapi: StrapiClient | undefined
}
// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.origin,
  base: SITE.basePathname,

  // output: 'static',
  output: 'server',
  adapter: vercel(),

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    react(),
  ],

  // vite: {
  //   resolve: {
  //     alias: {
  //       '~': path.resolve(__dirname, './src'),
  //     },
  //   },
  // },
})
