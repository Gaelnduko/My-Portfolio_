import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/My-Portfolio_",
  assetPrefix: "/My-Portfolio_",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
