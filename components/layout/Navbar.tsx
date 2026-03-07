"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#blog",     label: "Blog"     },
  { href: "#contact",  label: "Contact"  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-6 bg-bg/85 backdrop-blur-md border-b border-line">
      <Link href="/" className="font-serif text-lg font-light tracking-widest text-ink">
        {siteConfig.initials.split(".")[0]}
        <span className="text-accent">.</span>
        {siteConfig.initials.split(".")[1]}
      </Link>

      <ul className="flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-muted
                         relative transition-colors duration-300 hover:text-ink
                         after:absolute after:bottom-[-3px] after:left-0
                         after:h-px after:w-0 after:bg-accent
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
