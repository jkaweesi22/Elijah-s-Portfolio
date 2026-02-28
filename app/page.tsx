import { Hero } from "@/components/Hero";
import { SectionRenderer } from "@/components/SectionRenderer";
import homeData from "@/data/pages/home.json";

export default function HomePage() {
  const { hero, sections } = homeData;

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        ctas={hero.ctas}
      />
      <SectionRenderer sections={sections} />
    </>
  );
}
