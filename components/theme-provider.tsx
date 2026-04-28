"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { THEME_STORAGE_KEY, type StoredTheme } from "@/lib/theme"

function applyDomTheme(theme: StoredTheme) {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* private mode u otra restricción */
  }
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#141414" : "#F1F1F1")
  }
}

type ThemeContextValue = {
  theme: StoredTheme
  mounted: boolean
  setTheme: (t: StoredTheme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

type ThemeState = { theme: StoredTheme; mounted: boolean }

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ThemeState>({
    theme: "light",
    mounted: false,
  })

  useEffect(() => {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    let theme: StoredTheme = "light"
    if (raw === "light" || raw === "dark") {
      theme = raw
      applyDomTheme(raw)
    } else {
      theme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light"
    }
    const id = requestAnimationFrame(() => {
      setState({ theme, mounted: true })
    })
    return () => cancelAnimationFrame(id)
  }, [])

  const setTheme = useCallback((t: StoredTheme) => {
    applyDomTheme(t)
    setState((s) => ({ ...s, theme: t }))
  }, [])

  const toggleTheme = useCallback(() => {
    setState((s) => {
      const next = s.theme === "dark" ? "light" : "dark"
      applyDomTheme(next)
      return { ...s, theme: next }
    })
  }, [])

  const value = useMemo(
    () => ({
      theme: state.theme,
      mounted: state.mounted,
      setTheme,
      toggleTheme,
    }),
    [state.theme, state.mounted, setTheme, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider")
  }
  return ctx
}
