import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedItem from "@/components/ui/AnimatedItem";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="px-16 py-32 border-b border-line">
      <div className="flex justify-between items-end mb-16">
        <div>
          <SectionLabel>03 — Projects</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
            Selected <em className="italic text-accent">work</em>
          </h2>
        </div>
        <Link href="#" className="font-mono text-[0.72rem] tracking-widest uppercase text-muted hover:text-ink transition-colors">
          All projects →
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <AnimatedItem key={project.num} delay={i * 100} direction="up">
            <Link
              href={project.href}
              className="block border border-line bg-card overflow-hidden transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(26,24,20,0.08)]"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} border-b border-line flex items-center justify-center`}>
                <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#F5F2EC]/40">
                  {project.label}
                </span>
              </div>
              <div className="p-6">
                <div className="font-mono text-[0.62rem] text-accent tracking-widest mb-2">{project.num}</div>
                <h3 className="font-serif text-xl font-light leading-snug mb-2">{project.title}</h3>
                <p className="font-serif text-sm text-muted font-light leading-relaxed mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-[0.6rem] tracking-widest uppercase px-2 py-1 bg-bg text-muted border border-line">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}