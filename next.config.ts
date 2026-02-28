import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Full URL for assetPrefix fixes 404s on GitHub Pages (relative paths can break)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath
    ? siteUrl
      ? `${siteUrl.replace(/\/$/, "")}/`
      : `${basePath}/`
    : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
