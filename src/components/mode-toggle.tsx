import { MoonIcon, SunIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "@/hooks/use-theme"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={toggle}
          aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
        >
          <SunIcon className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
      </TooltipContent>
    </Tooltip>
  )
}
