"use client"

import { ReactLenis } from "lenis/react"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
      <Toaster position="bottom-right" richColors />
    </ReactLenis>
  )
}
