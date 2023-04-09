/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "th.bing.com"],
  },
  env: {
    apikey: "https://misty-cowboy-hat-crow.cyclic.app/api/v1/blogospot",
  },
};

module.exports = nextConfig;
