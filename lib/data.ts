export const siteConfig = {
  name: "Iffat Azriel Fitrianto",
  initials: "Iffatazriel",
  role: "Full-Stack Developer",
  tagline: "Building things for the web",
  description:
    "Full-stack developer with a quiet obsession for clean code, thoughtful interfaces, and systems that just work.",
  email: "iffatazrielfitrianto@gmail.com",
  location: "Indonesia",
  available: true,
  stats: [
    { num: "3+", label: "Years exp." },
    { num: "20+", label: "Projects" },
    { num: "7", label: "Clients" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/iffatazriel" },
    { label: "LinkedIn", href: "https://linkedin.com/in/iffatazriel" },
    { label: "Instagram", href: "https://instagram.com/iffatazriel" },
    { label: "Facebook", href: "https://facebook.com/iffatazriel" },
    { label: "Read.cv", href: "https://read.cv/iffatazriel" },
  ],
};

export const aboutConfig = {
  bio: [
    "I'm a full-stack developer based in Indonesia, specializing in building scalable web applications from concept to deployment. I care deeply about the details — from architecture decisions to pixel-perfect UIs.",
    "When I'm not writing code, I'm reading about systems design, exploring new frameworks, or writing about the things I've learned.",
  ],
  tags: [
    "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "Docker", "AWS",
    "Figma", "Tailwind CSS",
  ],
};

export const skills = [
  { num: "01", name: "Next.js",      type: "Frontend"  },
  { num: "02", name: "TypeScript",   type: "Language"  },
  { num: "03", name: "Node.js",      type: "Backend"   },
  { num: "04", name: "PostgreSQL",   type: "Database"  },
  { num: "05", name: "Tailwind CSS", type: "Styling"   },
  { num: "06", name: "AWS / Vercel", type: "Cloud"     },
  { num: "07", name: "Figma",        type: "Design"    },
];

export const projects = [
  {
    num: "01",
    label: "Case Study",
    title: "SaaS Dashboard Platform",
    description:
      "A multi-tenant analytics dashboard with real-time data visualization and role-based access control.",
    stack: ["Next.js", "Prisma", "Recharts"],
    href: "#",
    gradient: "from-[#1A1814] to-[#2D2920]",
  },
  {
    num: "02",
    label: "Open Source",
    title: "E-Commerce API",
    description:
      "RESTful API with payment integration, inventory management, and webhook support built on Node.js.",
    stack: ["Node.js", "PostgreSQL", "Stripe"],
    href: "#",
    gradient: "from-[#2A3240] to-[#1E2630]",
  },
  {
    num: "03",
    label: "Client Work",
    title: "Content Management System",
    description:
      "A headless CMS with a visual editor, media library, and multi-language content support.",
    stack: ["React", "GraphQL", "AWS S3"],
    href: "#",
    gradient: "from-[#3A2820] to-[#2A1C14]",
  },
];

export const blogPosts = [
  {
    date: "Mar 2025",
    title: "Why I chose Next.js App Router over Pages Router",
    tag: "Next.js",
    href: "#",
  },
  {
    date: "Feb 2025",
    title: "A practical guide to type-safe API routes with Zod",
    tag: "TypeScript",
    href: "#",
  },
  {
    date: "Jan 2025",
    title: "Structuring a monorepo for a growing team",
    tag: "Architecture",
    href: "#",
  },
  {
    date: "Dec 2024",
    title: "Optimizing PostgreSQL queries in a multi-tenant SaaS",
    tag: "Database",
    href: "#",
  },
];
