import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',           // ← this is the key line
  basePath: '/finance-dashboard', // ← IMPORTANT if repo is not at root (e.g. username.github.io/your-repo-name)
  assetPrefix: '/finance-dashboard/', // same as basePath
  images: {
    unoptimized: true,        // required for GitHub Pages
  },
  /* config options here */
};

export default nextConfig;
