import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import projectsData from "@/data/content/projects.json";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export async function generateStaticParams() {
  return projectsData.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.projects.find((p) => p.slug === slug);
  if (!project) return {};

  return generateSEO({
    title: project.title,
    description: project.summary,
    path: `/work/${slug}/`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link
        href={`${basePath}/work/`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Work
      </Link>

      <div className="max-w-4xl">
        <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary mb-4">
          {project.category}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          {project.client && <span>Client: {project.client}</span>}
          <span>{project.year}</span>
          {project.toolsUsed?.length > 0 && (
            <span>Tools: {project.toolsUsed.join(", ")}</span>
          )}
        </div>
        <p className="mt-6 text-lg text-foreground">{project.summary}</p>
        <p className="mt-4 text-muted-foreground">{project.description}</p>
      </div>

      <div className="mt-12">
        <Gallery images={project.images} alt={project.title} />
      </div>
    </div>
  );
}
