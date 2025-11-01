import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/YOUR-REPO-NAME", // <--- Change this
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
