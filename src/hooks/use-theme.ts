import { createContext, useContext } from "react"

export type Theme = "light" | "dark" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined,
)

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
