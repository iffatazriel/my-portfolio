import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
      <span className="font-mono text-xs tracking-widest text-muted uppercase">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </span>
      <span className="font-mono text-xs tracking-widest text-muted uppercase">
        Built with Next.js & Tailwind CSS
      </span>
    </footer>
  );
}