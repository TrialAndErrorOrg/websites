const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { join } = require('path')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class',
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, '**/*!(*.stories|*.spec).{ts,tsx,html}'),
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

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
