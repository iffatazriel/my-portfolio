import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedItem from "@/components/ui/AnimatedItem";
import SectionLabel from "@/components/ui/SectionLabel";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="px-6 md:px-16 py-20 md:py-24 bg-card border-t border-b border-line"
    >
      <div className="flex justify-between items-end mb-12 md:mb-16">
        <div>
          <SectionLabel>02 — Skills</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-[1.15]">
            What I work with
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
        {skills.map((skill, i) => (
          <AnimatedItem
            key={skill.num}
            delay={i * 60}
            direction="up"
            className="bg-card px-4 md:px-6 py-6 md:py-8 transition-colors duration-300 hover:bg-bg cursor-default"
          >
            <div className="font-mono text-[0.65rem] text-accent tracking-widest mb-3">{skill.num}</div>
            <div className="font-serif text-base md:text-lg mb-1">{skill.name}</div>
            <div className="font-mono text-[0.62rem] text-muted tracking-widest uppercase">{skill.type}</div>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}