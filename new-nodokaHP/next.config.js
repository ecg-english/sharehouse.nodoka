/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sharehouse.nodoka',
  assetPrefix: '/sharehouse.nodoka',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
}

module.exports = nextConfig
