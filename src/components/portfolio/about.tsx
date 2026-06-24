import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { about, profile } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" className="border-b border-border/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              Thoughtful engineering, end to end
            </h2>
          </div>
          <Avatar className="size-14 rounded-xl border border-border">
            <AvatarFallback className="rounded-xl bg-primary text-sm font-medium text-primary-foreground">
              WM
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {about.summary}
          </p>
          <ul className="space-y-3 rounded-xl border border-border/60 bg-muted/40 p-5">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          {profile.name} · {profile.title}
        </p>
      </div>
    </section>
  )
}
