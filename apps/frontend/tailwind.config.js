const { createGlobPatternsForDependencies } = require("@nx/react/tailwind")

const { join } = require("path")

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: "class",
  presets: [require("../../tailwind-workspace-preset.js")],
  content: [
    join(__dirname, "**/*!(*.stories|*.spec).{ts,tsx,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#ffe13e",
          100: "#ffd734",
          200: "#ffcd2a",
          300: "#ffc320",
          400: "#ffb916",
          500: "#ffaf0c",
          600: "#f5a502",
          700: "#eb9b00",
          800: "#e19100",
          900: "#d78700",
        },
        blue: {
          50: "#325874",
          100: "#284e6a",
          200: "#1e4460",
          300: "#143a56",
          400: "#0a304c",
          500: "#002642",
          600: "#001c38",
          700: "#00122e",
          800: "#000824",
          900: "#00001a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
