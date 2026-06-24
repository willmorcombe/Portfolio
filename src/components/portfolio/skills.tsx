import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/portfolio"

export function Skills() {
  return (
    <section className="border-b border-border/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Skills
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Tools and technologies
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
