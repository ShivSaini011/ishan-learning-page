/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/ishan-learning-page",
  assetPrefix: "/ishan-learning-page/",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
