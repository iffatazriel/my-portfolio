import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedItem from "@/components/ui/AnimatedItem";
import SectionLabel from "@/components/ui/SectionLabel";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <AnimatedSection id="blog" className="px-6 md:px-16 py-20 md:py-32 border-b border-line bg-card">
      <div className="flex justify-between items-end mb-12 md:mb-16">
        <div>
          <SectionLabel>04 — Blog</SectionLabel>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-[1.15]">
            Recent <em className="italic text-accent">writings</em>
          </h2>
        </div>
        <Link href="#" className="hidden md:block font-mono text-[0.72rem] tracking-widest uppercase text-muted hover:text-ink transition-colors">
          All posts →
        </Link>
      </div>

      <div className="flex flex-col">
        {blogPosts.map((post, i) => (
          <AnimatedItem key={i} delay={i * 80} direction="left">
            <Link
              href={post.href}
              className="grid grid-cols-1 md:grid-cols-[6rem_1fr_auto] gap-2 md:gap-8 py-6 md:py-8 border-b border-line first:border-t group"
            >
              <span className="font-mono text-[0.65rem] tracking-widest uppercase text-muted">
                {post.date}
              </span>
              <span className="font-serif text-lg md:text-xl font-light transition-colors duration-300 group-hover:text-accent">
                {post.title}
              </span>
              <span className="font-mono text-[0.6rem] tracking-widest uppercase text-accent border border-accent/30 px-3 py-1.5 self-start md:self-center w-fit">
                {post.tag}
              </span>
            </Link>
          </AnimatedItem>
        ))}
      </div>

      <div className="mt-8 md:hidden text-center">
        <Link href="#" className="font-mono text-[0.72rem] tracking-widest uppercase text-muted hover:text-ink transition-colors">
          All posts →
        </Link>
      </div>
    </AnimatedSection>
  );
}