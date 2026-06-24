import { useEffect, useMemo, useState } from "react"

import {
  ThemeProviderContext,
  type Theme,
} from "@/hooks/use-theme"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme,
  )
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(
    getSystemTheme,
  )

  const resolvedTheme = useMemo(
    () => (theme === "system" ? systemTheme : theme),
    [theme, systemTheme],
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)
    localStorage.setItem(storageKey, theme)
  }, [theme, resolvedTheme, storageKey])

  useEffect(() => {
    if (theme !== "system") return

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => setSystemTheme(getSystemTheme())

    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [theme])

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
