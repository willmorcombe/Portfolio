export const profile = {
  name: "Will Morcombe",
  title: "Software Engineer",
  tagline:
    "I build reliable full-stack web applications with a focus on clear architecture, polished interfaces, and code that holds up over time.",
  email: "hello@willmorcombe.com",
  location: "United Kingdom",
  github: "https://github.com/willmorcombe",
  linkedin: "https://linkedin.com/in/willmorcombe",
}

export const about = {
  summary:
    "I'm a software engineer with experience across the full stack. Alongside professional work, I founded CoachLytix — a live SaaS product for golf coaches — which reflects how I approach building software: understand the problem, ship iteratively, and care about the details users notice.",
  highlights: [
    "Full-stack web development",
    "Product-minded engineering",
    "Clean, maintainable codebases",
    "Clear written communication",
  ],
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  href?: string
}

export const experience: ExperienceItem[] = [
  {
    role: "Founder & Lead Developer",
    company: "CoachLytix",
    period: "2024 — Present",
    href: "https://coachlytix.co.uk",
    description:
      "Built and launched a coaching SaaS platform from scratch — player management, lesson tracking, billing, and analytics — now live at coachlytix.co.uk.",
  },
  {
    role: "Software Engineer",
    company: "Your Company",
    period: "2023 — Present",
    description:
      "Delivered customer-facing features across the stack, improved application performance, and collaborated with design and product to ship iteratively.",
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  href: string
  live?: boolean
}

export const projects: Project[] = [
  {
    title: "CoachLytix",
    description:
      "A SaaS platform for golf coaches to manage players, log lessons, and track progress — built and deployed end-to-end.",
    tags: ["Django", "React", "PostgreSQL", "Stripe"],
    href: "https://coachlytix.co.uk",
    live: true,
  },
  {
    title: "Portfolio",
    description:
      "This site — a fast, statically deployed showcase built with React, Vite, and shadcn/ui.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/willmorcombe/portfolio",
  },
  {
    title: "API Toolkit",
    description:
      "Reusable service layer patterns for authentication, validation, and observability in backend services.",
    tags: ["Python", "REST", "Testing"],
    href: "https://github.com/willmorcombe",
  },
]

export const skills = [
  "TypeScript",
  "React",
  "Python",
  "Django",
  "PostgreSQL",
  "REST APIs",
  "SaaS",
  "Git",
  "CI/CD",
  "Tailwind CSS",
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
