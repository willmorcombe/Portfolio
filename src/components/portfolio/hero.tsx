import { ArrowDownIcon, ArrowUpRightIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { profile } from "@/data/portfolio"

export function Hero() {
  return (
    <section className="border-b border-border/60 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {profile.title}
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <a href="#projects">
              View projects
              <ArrowDownIcon data-icon="inline-end" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              Get in touch
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>

        <Separator className="my-12" />

        <dl className="grid gap-6 sm:grid-cols-3">
          {[
            { label: "Location", value: profile.location },
            { label: "Focus", value: profile.focus },
            { label: "Availability", value: profile.availability },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
