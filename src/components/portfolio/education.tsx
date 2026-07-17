import { education } from "@/data/portfolio"

export function Education() {
  return (
    <section id="education" className="border-b border-border/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Education
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Academic background
        </h2>

        <div className="mt-10 divide-y divide-border/60 rounded-xl border border-border/60">
          {education.map((item) => (
            <article
              key={item.degree}
              className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:gap-6 md:p-8"
            >
              <div>
                <p className="text-xs text-muted-foreground">{item.period}</p>
                <p className="mt-2 text-sm font-semibold">{item.school}</p>
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold">
                  {item.degree}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
