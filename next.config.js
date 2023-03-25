/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
