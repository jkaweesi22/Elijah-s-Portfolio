/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

const nextConfig = {
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
