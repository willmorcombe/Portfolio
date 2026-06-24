import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/data/portfolio"

export function Projects() {
  return (
    <section id="projects" className="border-b border-border/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Projects
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A mix of production software, personal products, and supporting tools
          that reflect how I build.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex h-full flex-col shadow-soft ring-0"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  {project.live ? (
                    <Badge
                      variant="outline"
                      className="shrink-0 border-brand/30 text-brand"
                    >
                      Live
                    </Badge>
                  ) : null}
                </div>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/60">
                <Button variant="ghost" size="sm" className="px-0" asChild>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.live ? "Visit site" : "View project"}
                    <ArrowUpRightIcon data-icon="inline-end" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
