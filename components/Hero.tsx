import Link from "next/link";
import { getImageSrc } from "@/lib/getImageSrc";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface HeroCta {
  label: string;
  href: string;
  primary: boolean;
}

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctas?: HeroCta[];
}

export function Hero({ title, subtitle, backgroundImage, ctas = [] }: HeroProps) {
  const bgSrc = backgroundImage ? getImageSrc(backgroundImage) : undefined;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {bgSrc && (
        <div className="absolute inset-0">
          <img
            src={bgSrc}
            alt=""
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
      )}
      {!bgSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
      )}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>

        {ctas.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {ctas.map((cta) => {
              const href = cta.href.startsWith("/") ? `${basePath}${cta.href}` : cta.href;
              return (
                <Link
                  key={cta.label}
                  href={href}
                  className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 ${
                    cta.primary
                      ? "bg-primary text-primary-foreground hover:bg-secondary shadow-lg hover:shadow-xl hover:scale-105"
                      : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cta.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
