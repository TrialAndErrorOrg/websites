// @ts-check
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
  },
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
