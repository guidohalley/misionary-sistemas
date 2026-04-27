# GSAP + ScrollTrigger

## Setup (ya hecho en providers.tsx)
```ts
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger, useGSAP)
```

## Pattern base en componente
```tsx
"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export function MySection() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".step-item", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    })
  }, { scope: container })

  return <div ref={container}>...</div>
}
```

## Usar para
- HowItWorks: línea que se dibuja, pasos que aparecen en secuencia
- Hero: SplitText por letras/palabras
- Secciones con pin (elemento fijo mientras scrolleás)
- Parallax de imágenes

## NO usar para
- Hover effects simples → usar motion whileHover
- Fade-up básico → usar motion whileInView
- Modals/toggles → usar motion AnimatePresence
