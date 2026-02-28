/**
 * Prepends basePath to local image paths for GitHub Pages subpath deployment.
 * External URLs (http/https) are returned as-is.
 */
export function getImageSrc(path: string): string {
  if (!path) return "";

  // External URLs - return as-is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return basePath ? `${basePath}${normalizedPath}` : normalizedPath;
}
