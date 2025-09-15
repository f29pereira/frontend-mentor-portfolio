import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export for GitHub Pages
  basePath: "/frontend-mentor-portfolio", //GitHub Pages subpath
  assetPrefix: "/frontend-mentor-portfolio/", // Prefix assets with repo path
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};
