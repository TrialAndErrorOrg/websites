// @ts-check
import { fileURLToPath } from "node:url";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));
// import { withNx } from '@nx/next/plugins/with-nx.js';

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })

const root = fileURLToPath(new URL("../..", import.meta.url));

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	turbopack: { root },
	outputFileTracingRoot: root,
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},

	staticPageGenerationTimeout: 120,
	output: "standalone",
	// reactStrictMode: true,
	// i18n: {
	//   locales: ["en"],
	//   defaultLocale: "en",
	// },
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"cms.trialanderror.org",
			"res.cloudinary.com",
			"tailwindui.com",
		],
	},
	experimental: {
		outputFileTracingIgnores: ["**/@swc+core*"],
	},
	// rewrites: async () => [
	//   {
	//     source: '/rss.xml',
	//     destination: '/rss',
	//   },
	//   {
	//     source: '/rss.json',
	//     destination: '/rss?type=json',
	//   },
	//   {
	//     source: '/rss2.xml',
	//     destination: '/rss?type=rss',
	//   },
	// ],
};

export default nextConfig;
