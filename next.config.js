/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'traxxionet.netlify.app',
      },
    ],
  },
};

module.exports = nextConfig;
