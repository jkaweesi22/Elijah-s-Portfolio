import type { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

const siteName = "Elijah Biimbwa";
const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH
  ? `https://yourusername.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
  : "https://yourusername.github.io";

export function generateSEO(config: SEOConfig): Metadata {
  const title = config.title ? `${config.title} | ${siteName}` : siteName;
  const url = config.path ? `${baseUrl}${config.path}` : baseUrl;

  return {
    title,
    description: config.description,
    openGraph: {
      title,
      description: config.description,
      url,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: config.description,
    },
    robots: config.noIndex ? { index: false, follow: false } : undefined,
  };
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): object {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH
    ? `https://yourusername.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
    : "https://yourusername.github.io";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

export function generatePersonJsonLd(): object {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH
    ? `https://yourusername.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
    : "https://yourusername.github.io";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elijah Biimbwa",
    jobTitle: "Creative Designer",
    description:
      "Creative designer specializing in graphic design, brand identity, social media visuals, and marketing materials.",
    url: baseUrl,
    knowsAbout: [
      "Graphic Design",
      "Brand Identity",
      "Social Media Design",
      "Marketing Materials",
    ],
    image: `${baseUrl}/og-image.jpg`,
  };
}
