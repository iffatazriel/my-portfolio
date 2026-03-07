"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#F5F2EC]/95 backdrop-blur-md border-b border-[#D9D4CB] shadow-sm"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-serif text-lg font-light tracking-widest text-ink hover:opacity-70"
      >
        {siteConfig.initials.split(".")[0]}
        <span className="text-accent">.</span>
        {siteConfig.initials.split(".")[1]}
      </Link>

      {/* Hamburger (Mobile) */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-[2px] bg-ink"></span>
        <span className="w-6 h-[2px] bg-ink"></span>
        <span className="w-6 h-[2px] bg-ink"></span>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");

          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-mono text-xs tracking-widest uppercase relative transition-colors duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                  isActive
                    ? "text-ink after:w-full"
                    : "text-muted hover:text-ink after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F5F2EC] border-b border-[#D9D4CB] md:hidden">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-xs tracking-widest uppercase text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}