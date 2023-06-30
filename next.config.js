const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: [
      "@prisma/client", "@/lib/hashPass"
    ]
  }
};

// module.exports = nextConfig

module.exports = withContentlayer(nextConfig);
