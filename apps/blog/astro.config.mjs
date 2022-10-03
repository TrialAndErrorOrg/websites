import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import turbolinks from '@astrojs/turbolinks'

export default defineConfig({
  outDir: '../../dist/apps/blog',
  integrations: [preact(), sitemap(), tailwind(), turbolinks()],
})
