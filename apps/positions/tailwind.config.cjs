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
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
      },
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
