// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
import { withNx } from "@nrwl/next/plugins/with-nx.js"

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  swcMinify: true,
  experimental: {
    appDir: true,
    newNextLinkBehavior: true,
    forceSwcTransforms: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },

    ]
  },
  reactStrictMode: true,
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  staticPageGenerationTimeout: 120,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cote.azureedge.net",
      "res.cloudinary.com",
      "tailwindui.com",
    ],
  },
}

export default withNx(nextConfig)
