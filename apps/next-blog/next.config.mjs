// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import('./src/env/server.mjs'));
// import { withNx } from '@nx/next/plugins/with-nx.js';

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  // reactStrictMode: true,
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cote.azureedge.net',
      'res.cloudinary.com',
      'tailwindui.com',
    ],
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
