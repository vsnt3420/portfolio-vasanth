/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;
