const withNx = require("@nrwl/next/plugins/with-nx")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const withPlugins = require("next-compose-plugins")
const withSWRTypes = require("next-typed-api-with-swr")
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  swcMinify: true,
  experimental: { nftTracing: true, topLevelAwait: true },
  experiments: { topLevelAwait: true },
  staticPageGenerationTimeout: 120,
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = "cheap-module-source-map"
    }
    return config
  },
  images: { domains: ["avatars.githubusercontent.com", "cote.azureedge.net"] },
}

module.exports = withPlugins([[withNx], [withBundleAnalyzer]], nextConfig)
