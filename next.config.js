/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  env: {
    API_PATH: '/api',
  },
};

module.exports = nextConfig
