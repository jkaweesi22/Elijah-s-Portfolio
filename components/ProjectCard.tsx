"use client";

import { getImageSrc } from "@/lib/getImageSrc";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
}

export function ProjectCard({ slug, title, category, summary, image }: ProjectCardProps) {
  const imgSrc = getImageSrc(image);

  return (
    <a
      href={`${basePath}/work/${slug}/`}
      className="group block"
    >
      <article className="overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground text-sm line-clamp-2">{summary}</p>
        </div>
      </article>
    </a>
  );
}
