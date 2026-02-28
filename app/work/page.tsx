"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import projectsData from "@/data/content/projects.json";

const categories = [
  "All",
  ...Array.from(
    new Set(projectsData.projects.map((p) => p.category))
  ),
];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === filter);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <RevealOnScroll>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            My Work
          </h1>
          <p className="mt-4 text-muted-foreground">
            A collection of design projects across branding, social media,
            print, and marketing.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
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
      </RevealOnScroll>
    </div>
  );
}
