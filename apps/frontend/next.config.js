const withNx = require("@nx/next/plugins/with-nx")

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })

const withPlugins = require("next-compose-plugins")
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  staticPageGenerationTimeout: 120,
  // webpack(config, { dev }) {
  //   if (dev) {
  //     config.devtool = "cheap-module-source-map"
  //   }
  //   return config
  // },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cote.azureedge.net",
      "res.cloudinary.com",
      "tailwindui.com",
    ],
  },
}

module.exports = nextConfig
