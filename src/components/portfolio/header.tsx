import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { navLinks, profile } from "@/data/portfolio"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-[10px] font-semibold tracking-widest text-primary-foreground">
            WM
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ModeToggle />
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#contact">
              Contact
              <ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
