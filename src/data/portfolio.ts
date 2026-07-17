export const profile = {
  name: "Will Morcombe",
  title: "Lead Python Developer",
  tagline:
    "Backend-focused Python developer with four years’ commercial experience building APIs, LLM microservices, and production data tooling — and the founder of CoachLytix.",
  email: "willmorcombe.freelance@gmail.com",
  location: "London, United Kingdom",
  focus: "Python · APIs · AI",
  availability: "Open to opportunities",
  github: "https://github.com/willmorcombe",
  linkedin: "https://linkedin.com/in/willmorcombe",
}

export const about = {
  summary:
    "I'm a backend-focused Python developer at Central Test, where I lead a small R&D engineering team delivering AI-ready microservices for talent assessment. My path started in data science after an MSc in Computer Science with AI, and has grown into leading design, delivery, and mentoring — including supervising a company-linked PhD on soft-skills detection from CVs. Alongside that, I founded CoachLytix, a live golf coaching SaaS built end-to-end with Django, PostgreSQL, and AWS.",
  highlights: [
    "Lead Python developer managing delivery across data science and backend work",
    "Designed LLM and CV-analysis microservices from architecture through to production",
    "Published academic co-author and PhD technical supervisor",
    "Founder of CoachLytix — a live SaaS product shipped test-first",
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
    role: "Lead Python Developer",
    company: "Central Test",
    period: "Jan 2022 — Present",
    href: "https://www.centraltest.com",
    description:
      "Central Test provides psychometric assessments and job-matching solutions. Started as a data scientist and progressed to lead Python developer, managing a data scientist and a Python developer while bridging R&D and IT. Own technical design for AI microservices (LLM service, async CV analysis), an internal R&D statistics platform that cut analysis time by over 50%, and the published ai-tools-ct PyPI package. Translate research into production features with FastAPI, Django, PostgreSQL, Docker, and test-driven delivery; also supervise a company-linked PhD on NLP for soft-skills detection in CVs.",
  },
  {
    role: "Founder & Full-Stack Developer",
    company: "CoachLytix",
    period: "2026 — Present",
    href: "https://coachlytix.co.uk",
    description:
      "Built a golf coaching management platform end-to-end as a modular Django monolith — players, lessons, dashboard, and ownership-based auth on PostgreSQL. Exposed DRF APIs alongside server-rendered views, integrated AWS S3 for lesson video storage, and shipped with pytest-django (80%+ coverage target) plus GitHub Actions CI/CD. Live at coachlytix.co.uk.",
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  live?: boolean
}

export const projects: Project[] = [
  {
    title: "CoachLytix",
    description:
      "Golf coaching SaaS where coaches organise players, lessons, and workflow in one place — modular Django apps, DRF APIs, PostgreSQL, and AWS S3 for lesson video.",
    tags: ["Django", "DRF", "PostgreSQL", "AWS S3", "pytest"],
    href: "https://coachlytix.co.uk",
    live: true,
  },
  {
    title: "LLM microservice",
    description:
      "FastAPI service that exposes facade-based REST endpoints for custom and provider LLMs (OpenAI, Anthropic), abstracting providers behind a factory so other Central Test services can call job-description and CV-analysis prompts reliably.",
    tags: ["FastAPI", "LLMs", "Pytest", "TDD"],
  },
  {
    title: "CV analysis service",
    description:
      "Async FastAPI microservice with PostgreSQL and ARQ: the platform submits a CV job, the analysis pipeline runs in the background, and completion events are published over pub/sub for the product to consume.",
    tags: ["FastAPI", "PostgreSQL", "ARQ", "Async"],
  },
  {
    title: "ai-tools-ct",
    description:
      "Published PyPI package that simplifies AI data generation with OpenAI prompt workflows — single and parallel bulk generation with structured pandas DataFrame results.",
    tags: ["Python", "OpenAI", "Pandas", "PyPI"],
    href: "https://pypi.org/project/ai-tools-ct/",
  },
  {
    title: "R&D statistics tool",
    description:
      "Internal Django platform for downloading client data and automating statistics for client requests and research analysis — designed with TDD and patterns that cut analysis time by over 50%.",
    tags: ["Django", "ORM", "TDD", "Data tooling"],
  },
]

export const skills = [
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "Django REST Framework",
  "SQL",
  "PostgreSQL",
  "Pandas",
  "NumPy",
  "Docker",
  "CI/CD",
  "Pytest",
  "TDD",
  "Celery / ARQ",
  "LLM integrations",
  "AWS S3",
  "Git",
]

export const education = [
  {
    degree: "MSc Advanced Computer Science with AI",
    school: "University of Leeds",
    detail: "Distinction (75%)",
    period: "2020 — 2021",
  },
  {
    degree: "BSc Computer Science",
    school: "De Montfort University",
    detail: "First-Class Honours (81%)",
    period: "2017 — 2020",
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
