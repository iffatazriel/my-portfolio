import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutConfig } from "@/lib/data";

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="px-16 py-32 grid grid-cols-[1fr_2fr] gap-24 border-t border-line"
    >
      <div>
        <SectionLabel>01 — About</SectionLabel>
      </div>

      <div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15] mb-6">
          Crafting <em className="italic text-accent">digital</em>
          <br />experiences
        </h2>

        {aboutConfig.bio.map((paragraph, i) => (
          <p key={i} className="font-serif text-[1.05rem] text-muted font-light max-w-[60ch] mb-5">
            {paragraph}
          </p>
        ))}

        <div className="flex flex-wrap gap-2 mt-8">
          {aboutConfig.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] tracking-widest uppercase px-3 py-1.5
                         border border-line text-muted transition-all duration-300
                         hover:border-accent hover:text-accent cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
