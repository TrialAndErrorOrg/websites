import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  outDir: '../../dist/apps/positions',
  integrations: [partytown(), tailwind()],
})
