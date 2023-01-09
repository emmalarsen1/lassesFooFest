/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["localhost", "placeimg.com", "greenmark.fly.dev"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [400, 500, 600, 700],
  },
};

module.exports = nextConfig;
