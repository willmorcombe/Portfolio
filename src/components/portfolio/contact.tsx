import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { profile } from "@/data/portfolio"

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: EnvelopeSimpleIcon,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GithubLogoIcon,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedinLogoIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-card p-8 shadow-soft md:p-12">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-3 max-w-xl font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Let&apos;s connect
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          I&apos;m open to full-time roles, graduate positions, and the right
          project collaborations. If you&apos;re hiring or have something worth
          building, I&apos;d be glad to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Button key={label} variant="outline" asChild>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noreferrer"}
              >
                <Icon />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
