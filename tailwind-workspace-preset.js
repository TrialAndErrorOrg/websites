// @ts-check

const colors = require('tailwindcss/colors')
/**
 * @type {import('tailwindcss').Config}
 **/
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        azure: colors?.blue ?? {},
        orange: {
          50: '#ffdc32',
          100: '#ffd228',
          200: '#ffc81e',
          300: '#ffbe14',
          400: '#ffb40a',
          500: '#feaa00',
          600: '#f4a000',
          700: '#ea9600',
          800: '#e08c00',
          900: '#d68200',
        },
        bluer: {
          50: '#324f8f',
          100: '#284585',
          200: '#1e3b7b',
          300: '#143171',
          400: '#0a2767',
          500: '#001d5d',
          600: '#001353',
          700: '#000949',
          800: '#00003f',
          900: '#000035',
        },
        blue: {
          50: '#325874',
          100: '#284e6a',
          200: '#1e4460',
          300: '#143a56',
          400: '#0a304c',
          500: '#002642',
          600: '#001c38',
          700: '#00122e',
          800: '#000824',
          900: '#00001a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-scoped-groups'),
  ],
}
