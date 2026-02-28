import { RevealOnScroll } from "@/components/RevealOnScroll";
import { getImageSrc } from "@/lib/getImageSrc";
import aboutData from "@/data/pages/about.json";
import siteConfig from "@/data/site-config.json";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "About",
  description:
    "Learn about Elijah's creative journey, design philosophy, tools, and process.",
  path: "/about/",
});

export default function AboutPage() {
  const { story, philosophy, tools, process, skills } = aboutData;
  const profileImage = "profileImage" in siteConfig ? (siteConfig as { profileImage?: string }).profileImage : undefined;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            About Me
          </h1>

          <div className="mt-10 flex flex-col lg:flex-row lg:items-start lg:gap-12 gap-10">
            {profileImage && (
              <div className="shrink-0">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
                    <img
                      src={getImageSrc(profileImage)}
                      alt="Elijah Biimbwa"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
                </div>
              </div>
            )}
            <section className="flex-1 min-w-0">
              <h2 className="text-2xl font-semibold text-foreground">
                {story.title}
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed text-lg">
                {story.content.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-16 lg:mt-20">
            <h2 className="text-2xl font-semibold text-foreground">
              {philosophy.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {philosophy.content}
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-foreground">
              {tools.title}
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {tools.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-card border border-border p-4"
                >
                  <h3 className="font-medium text-foreground">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-foreground">
              {process.title}
            </h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {process.steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl bg-card border border-border p-6 text-center"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-foreground">
              {skills.title}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </RevealOnScroll>
    </div>
  );
}
