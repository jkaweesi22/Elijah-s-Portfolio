import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string | null;
}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  avatar,
}: TestimonialCardProps) {
  return (
    <blockquote className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-sm">
      <Quote className="h-10 w-10 text-primary/40 mb-4" aria-hidden />
      <p className="text-lg text-foreground leading-relaxed">"{quote}"</p>
      <footer className="mt-6 flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <cite className="not-italic font-semibold text-foreground">{name}</cite>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </footer>
    </blockquote>
  );
}
