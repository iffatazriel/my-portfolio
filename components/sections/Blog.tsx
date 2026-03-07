import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <AnimatedSection
      id="blog"
      className="px-16 py-32 border-b border-line bg-card"
    >
      <div className="flex justify-between items-end mb-16">
        <div>
          <SectionLabel>04 — Blog</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
            Recent <em className="italic text-accent">writings</em>
          </h2>
        </div>
        <Link
          href="#"
          className="font-mono text-[0.72rem] tracking-widest uppercase text-muted hover:text-ink transition-colors"
        >
          All posts →
        </Link>
      </div>

      <div className="flex flex-col">
        {blogPosts.map((post, i) => (
          <Link
            href={post.href}
            key={i}
            className="grid grid-cols-[6rem_1fr_auto] items-center gap-8 py-8
                       border-b border-line first:border-t
                       group hoverable"
          >
            <span className="font-mono text-[0.65rem] tracking-widest uppercase text-muted">
              {post.date}
            </span>
            <span className="font-serif text-xl font-light transition-colors duration-300 group-hover:text-accent">
              {post.title}
            </span>
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-accent border border-accent/30 px-3 py-1.5">
              {post.tag}
            </span>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}
