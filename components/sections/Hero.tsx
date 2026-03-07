import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 pt-28 md:pt-24 pb-12 overflow-hidden"
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center md:pr-16">
        <p className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-accent" />
          {siteConfig.available ? "Available for work" : "Currently busy"}
        </p>

        <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light leading-[1.05] tracking-[-0.01em] mb-6">
          {siteConfig.tagline.split("the ")[0]}the{" "}
          <em className="italic text-accent">web</em>
        </h1>

        <p className="text-[1.05rem] text-muted font-light max-w-[36ch] mb-10 font-serif">
          {siteConfig.description}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="#projects"
            className="font-mono text-[0.72rem] tracking-widest uppercase px-8 py-3 bg-ink text-bg transition-colors duration-300 hover:bg-accent"
          >
            View Work
          </Link>
          <Link
            href="#contact"
            className="font-mono text-[0.72rem] tracking-widest uppercase text-muted transition-colors duration-300 hover:text-ink"
          >
            Get in Touch →
          </Link>
        </div>

        <div className="flex gap-10 mt-12 pt-8 border-t border-line">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl font-light">{stat.num}</div>
              <div className="font-mono text-[0.65rem] tracking-widest uppercase text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — hidden on mobile */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-[340px] h-[420px] bg-card border border-line relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-accent/10" />
          <div className="absolute inset-8 border border-line flex flex-col justify-end p-6">
            <pre className="font-mono text-[0.68rem] leading-loose text-muted whitespace-pre">
              <span className="text-accent">const</span> developer = {"{"}
              {"\n"}  name:{" "}
              <span className="text-[#7A9E7E]">'{siteConfig.name}'</span>,
              {"\n"}  stack: [<span className="text-[#7A9E7E]">'Next.js'</span>,{" "}
              <span className="text-[#7A9E7E]">'TS'</span>],{"\n"}  focus:{" "}
              <span className="text-[#7A9E7E]">'Full Stack'</span>,{"\n"}
              {"  "}
              <span className="text-[#6B8CAE]">craft</span>: () ={">"}{" "}
              <span className="text-[#7A9E7E]">'excellence'</span>
              {"\n"}
              {"}"}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}