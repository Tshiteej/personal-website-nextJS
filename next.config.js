/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  env: {
    NEXT_PUBLIC_DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_URL
  }
}

module.exports = nextConfig
