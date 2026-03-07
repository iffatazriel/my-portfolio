import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="px-6 md:px-16 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start md:items-end"
    >
      {/* Left */}
      <div>
        <SectionLabel>05 — Contact</SectionLabel>

        <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] font-light leading-[1.15] mb-6">
          Let&apos;s work{" "}
          <em className="italic text-accent">together</em>
        </h2>

        <a
          href={`mailto:${siteConfig.email}`}
          className="font-serif text-lg md:text-xl italic text-accent border-b border-accent/30
                     pb-1 transition-colors duration-300 hover:border-accent inline-block mt-2"
        >
          {siteConfig.email}
        </a>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 md:items-end">
        {siteConfig.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 font-mono text-[0.72rem] tracking-widest uppercase
                       text-muted transition-colors duration-300 hover:text-ink group
                       before:inline-block before:w-6 before:h-px before:bg-line
                       before:transition-all before:duration-300
                       hover:before:w-10 hover:before:bg-accent"
          >
            {social.label}
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
}