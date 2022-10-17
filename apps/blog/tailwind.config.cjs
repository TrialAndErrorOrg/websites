const { createGlobPatternsForDependencies } = require('@nxtensions/astro/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { join } = require('path')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'),

    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      boxShadow: {
        'thick-1': '2px 2px 0 #000',
        'thick-2': '4px 4px 0 #000',
        'thick-3': '8px 8px 0 #000',
        'thick-1-white': '2px 2px 0 #fff',
        'thick-2-white': '4px 4px 0 #fff',
        'thick-3-white': '8px 8px 0 #fff',
      },
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
        cream: '#fffdf5',
        salmon: '#ffd692',
      },
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
