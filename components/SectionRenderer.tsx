import Link from "next/link";
import {
  Sparkles,
  Palette,
  Layout,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { ProjectCard } from "./ProjectCard";
import { TestimonialCard } from "./TestimonialCard";
import projectsData from "@/data/content/projects.json";
import testimonialsData from "@/data/content/testimonials.json";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  palette: Palette,
  layout: Layout,
  megaphone: Megaphone,
};

interface SectionRendererProps {
  sections: Array<{
    type: string;
    title?: string;
    subtitle?: string;
    items?: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
    limit?: number;
    ctaLabel?: string;
    ctaHref?: string;
  }>;
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <>
      {sections.map((section, index) => (
        <RevealOnScroll key={index}>
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {section.title && (
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="mt-4 text-muted-foreground">{section.subtitle}</p>
                  )}
                </div>
              )}

              {section.type === "feature-grid" && section.items && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {section.items.map((item, i) => {
                    const Icon = item.icon ? iconMap[item.icon] : Sparkles;
                    return (
                      <div
                        key={i}
                        className="rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        {Icon && (
                          <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        )}
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {section.type === "portfolio-preview" && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {(projectsData?.projects ?? [])
                    .filter((p) => p.featured)
                    .slice(0, section.limit ?? 6)
                    .map((project) => (
                      <ProjectCard
                        key={project.slug}
                        slug={project.slug}
                        title={project.title}
                        category={project.category}
                        summary={project.summary}
                        image={project.images[0]}
                      />
                    ))}
                </div>
              )}

              {section.type === "testimonial" && (
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                  {(testimonialsData?.testimonials ?? [])
                    .slice(0, section.limit ?? 2)
                    .map((t, i) => (
                      <TestimonialCard
                        key={i}
                        name={t.name}
                        role={t.role}
                        company={t.company}
                        quote={t.quote}
                        avatar={t.avatar}
                      />
                    ))}
                </div>
              )}

              {section.type === "call-to-action" && (
                <div className="text-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 sm:p-16">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {section.title}
                  </h3>
                  {section.subtitle && (
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                      {section.subtitle}
                    </p>
                  )}
                  {section.ctaHref && section.ctaLabel && (
                    <Link
                      href={`${basePath}${section.ctaHref}`}
                      className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-secondary transition-colors shadow-lg"
                    >
                      {section.ctaLabel}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </section>
        </RevealOnScroll>
      ))}
    </>
  );
}
