# Lenis — Smooth Scroll

## Setup en este proyecto
El proveedor está en app/providers.tsx y envuelve todo el layout.

```tsx
// app/providers.tsx
"use client"
import { ReactLenis } from "lenis/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>
}
```

```tsx
// app/layout.tsx
import { Providers } from "./providers"
export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

## Integración con GSAP ScrollTrigger
```tsx
// En providers.tsx, agregar sync con GSAP
import { useLenis } from "lenis/react"

useLenis(ScrollTrigger.update)
// o en useGSAP: gsap.ticker.add((time) => lenis.raf(time * 1000))
```

## Import correcto (package renombrado)
```ts
// Correcto — paquete nuevo
import { ReactLenis, useLenis } from "lenis/react"

// Deprecado — no usar
import { ReactLenis } from "@studio-freight/react-lenis"
```
