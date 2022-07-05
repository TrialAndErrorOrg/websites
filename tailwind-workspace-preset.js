// @ts-check

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 **/

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // @ts-expect-error shush
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
