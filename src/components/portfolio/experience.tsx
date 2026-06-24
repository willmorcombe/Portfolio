import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { experience } from "@/data/portfolio"

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Experience
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Professional background
        </h2>

        <div className="mt-10 divide-y divide-border/60 rounded-xl border border-border/60">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:gap-6 md:p-8"
            >
              <div>
                <p className="text-xs text-muted-foreground">{item.period}</p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                  {item.company}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand hover:opacity-80"
                      aria-label={`Visit ${item.company}`}
                    >
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  ) : null}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold">
                  {item.role}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
