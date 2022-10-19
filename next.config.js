/** @type {import('next').NextConfig} https://dummyjson.com/image/i/products/29/thumbnail.webp */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dummyjson.com'],
    formats: ["image/webp"],
  },
}
module.exports = {
  images: {
    domains: ['dummyjson.com'],
  },
}
