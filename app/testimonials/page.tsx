import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TestimonialCard } from "@/components/TestimonialCard";
import testimonialsData from "@/data/content/testimonials.json";
import { generateSEO } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Testimonials",
  description:
    "What clients say about working with Elijah. Real feedback from brands and individuals.",
  path: "/testimonials/",
});

export default function TestimonialsPage() {
  const { testimonials } = testimonialsData;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <RevealOnScroll>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Testimonials
          </h1>
          <p className="mt-4 text-muted-foreground">
            What clients say about working with me. Real feedback from brands and
            individuals.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
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
      </RevealOnScroll>
    </div>
  );
}
