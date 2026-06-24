import { profile } from "@/data/portfolio"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-[11px] tracking-wide">
          React · Vite · shadcn/ui
        </p>
      </div>
    </footer>
  )
}
