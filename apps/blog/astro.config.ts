import path from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import prefetch from '@astrojs/prefetch'
// import partytown from '@astrojs/partytown'
import react from '@astrojs/react'

import { SITE } from './src/config.mjs'
// import * as StrapiTypes from '../../libs/types/src/lib/schemas'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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

  output: 'static',

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap({
      serialize: (item) => ({
        ...item,
        url: item.url.replace(/\/$/, ''),
        links: item?.links?.map((link) => ({
          ...link,
          url: link.url.replace(/\/$/, ''),
        })),
      }),
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    react(),
    process.env.NODE_ENV === 'production' &&
      prefetch({
        selector:
          'a[href^="/"]:not([href^="/tag"]):not([href^="/category"]):not([href^="/author"])',
      }),

    /* Disable this integration if you don't use Google Analytics (or other external script). */
    // partytown({
    //   config: { forward: ['dataLayer.push'] },
    // }),
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
})
