// @ts-check

const colors = require("tailwindcss/colors");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink,
			},
			fontFamily: {
				sans: ["'Open Sans'"],
			},
		},
	},
};
