/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  env: {
    NEXT_PUBLIC_DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_URL
  }
}

module.exports = nextConfig
