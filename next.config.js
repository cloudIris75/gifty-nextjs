/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gifty-bucket.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
