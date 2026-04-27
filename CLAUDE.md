# msnr-sistemas-landing

Landing page de Misionary para el servicio de sistemas a medida.
Repositorio bajo la org: https://github.com/misionary-dev

## Sobre Misionary
- Software Factory en Posadas, Misiones, Argentina (ar-northeast-1)
- Especialización: sistemas enterprise, alta disponibilidad, mobile-first
- Integración de IA: RAG, NLP, extracción estructurada de datos
- Referencia de confianza: +5 sistemas críticos en el Poder Judicial de Misiones
- Cumplimiento: Ley de Integración y Regulación de la IA de Misiones
- Contacto: devs@misionary.com
- Web actual: misionary.com | Nueva: misionary.dev

## Stack del proyecto
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui (Radix UI primitives, instalación manual)
- motion v12 — import SIEMPRE desde "motion/react", NUNCA "framer-motion"
- gsap + @gsap/react (useGSAP hook, nunca useEffect directo)
- lenis (smooth scroll) — import desde "lenis/react", no "@studio-freight/react-lenis"
- sonner (toasts del formulario de contacto)

## Stack de producción Misionary (contexto general)
- Frontend: Next.js, React, TypeScript
- Backend: PHP 8.x (Laravel), Node.js, Prisma ORM
- DB: PostgreSQL, MySQL
- Infra: Vercel, Ubuntu/Debian, GitHub Actions CI/CD
- AI tooling: Claude + Cursor en el flujo de desarrollo

## Estructura del proyecto
components/sections/   → una sección por archivo (navbar, hero, etc.)
components/ui/         → primitivos shadcn
components/reactbits/  → componentes instalados via jsrepo
app/page.tsx           → ensambla todas las secciones
app/providers.tsx      → Lenis ReactLenis root
lib/utils.ts           → cn() helper

## Secciones de la landing (en orden)
01. Navbar — sticky, scroll-aware
02. Hero — H1 SEO + 2 CTAs + social proof
03. LogosStrip — clientes en gris
04. Problem — 3 pain points
05. HowItWorks — stepper horizontal (Pixa-style)
06. Trabajos — grid portafolio
07. Testimonials — masonry CSS columns
08. Team — co-founders + equipo
09. FAQ — Accordion shadcn
10. Contact — form con sonner toast
11. Footer — links internos SEO

## Clientes reales (usar en contenido)
Fénix Comisiones (Aarón Ortas), Sistema Escuela (Federico Iraola),
Cooperativa Fátima, Centro Med, Hatapy, Lowe Petrovalle

## Convenciones de animación
- motion: whileInView + viewport={{ once: true }} en secciones
- gsap: solo dentro de useGSAP(), registrar plugins una sola vez en providers.tsx
- Lenis ya configurado como proveedor global en app/providers.tsx
- Componentes animados siempre llevan "use client"

## Estilo visual
Flat, blanco, serio. Referencia: Linear.app, Vercel.com.
Sin gradientes decorativos. Sin sombras pesadas.
Bordes: 0.5px solid. Cards: rounded-xl. Weights: 400 y 500 únicamente.
