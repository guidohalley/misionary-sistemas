"use client"

import { ReactLenis } from "lenis/react"
import { Toaster } from "sonner"
import { ThemeProvider, useTheme } from "@/components/theme-provider"

function ThemedToaster() {
  const { theme, mounted } = useTheme()
  return (
    <Toaster
      theme={mounted ? theme : "light"}
      position="bottom-center"
      richColors
      offset={{
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
      toastOptions={{ className: "touch-manipulation" }}
    />
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
        {children}
        <ThemedToaster />
      </ReactLenis>
    </ThemeProvider>
  )
}
