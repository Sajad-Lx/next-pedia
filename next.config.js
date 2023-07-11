const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "@/lib/hashPass"],
  },
}

// module.exports = nextConfig

module.exports = withContentlayer(nextConfig)
