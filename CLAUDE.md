# msnr-sistemas-landing

Landing page de Misionary para el servicio de sistemas a medida (misionary.dev).
Repositorio bajo la org: https://github.com/misionary-dev

## Sobre Misionary
- Software Factory en Posadas, Misiones, Argentina (ar-northeast-1)
- Especialización: sistemas a medida, integraciones, mobile-first
- Integración de IA: RAG, NLP, extracción estructurada de datos
- Cumplimiento: Ley de Integración y Regulación de la IA de Misiones
- Contacto: devs@misionary.com
- Web actual: misionary.com | Nueva: misionary.dev

## Stack del proyecto
- Next.js 16 + React 19 + TypeScript (deploy OpenNext / Cloudflare)
- Tailwind CSS 4 (tokens en app/globals.css)
- shadcn/ui (Radix UI primitives, instalación manual)
- motion v12 — import SIEMPRE desde "motion/react", NUNCA "framer-motion"
- gsap + @gsap/react (useGSAP hook, nunca useEffect directo); plugins registrados en app/providers.tsx
- lenis (smooth scroll) — import desde "lenis/react"
- sonner (toasts del formulario de contacto)
- Tipografía: IBM Plex Sans + IBM Plex Mono (next/font)

## Estructura del proyecto
content/catalog.ts        → ALLOWLIST única de clientes, sistemas, sitios y partners
content/diagramas.ts      → grafos de arquitectura (nodos + edges + rutas) por sistema
content/integraciones.ts  → carriles de integraciones y usos validados
components/diagram/       → motor de grafos (Archify/Railway): canvas, geometría, rutas
components/specimens/     → UI demo con datos ficticios por sistema
components/showreel/      → showreel web de 15 s (GSAP, SVG)
components/sections/      → una sección por archivo
components/ui/            → primitivos shadcn
app/page.tsx              → ensambla las secciones
app/reel/page.tsx         → showreel a pantalla completa (noindex)

## Secciones de la landing (orden definitivo)
01. Navbar
02. Hero — H1 + CTAs + showreel
03. Clientes — nombre (+ logo cuando exista), sin links
04. Trabajos — Ecosistema Fénix (flagship) + índice de sistemas + sitios
05. Integraciones — bus de servicios con usos validados + partner Botssy
06. Problem
07. HowItWorks — workflow en carriles (Cliente / Misionary / Plataformas)
08. Team
09. FAQ
10. Contact
11. Footer
Testimonials: OCULTO (no renderizar hasta tener citas reales autorizadas).

## Portfolio — reglas duras (Guido, 2026-09-25)
- Solo existe lo que está en content/catalog.ts. Agregar = una entrada nueva ahí.
- Sistemas: Fénix Comisiones + web pública Fénix (un solo ecosistema con Tokko Broker),
  Escuela Alas, Cooperativa Fátima, Gymsoft / Neutron Gym, Intacto Welty (OT),
  ERP Misionary (propio), Twenty CRM (plataforma).
- Sitios: GreenSAP, Recibito, Hotel Grand Lago, Transrio Turismo, EnerBio, Intacto Welty Web,
  AMID Misiones, Aaron Ortas, EPSA, Río Uruguay. Se muestran como sitios, no como sistemas.
- VETADOS (ni card, ni logo, ni trust line, ni testimonio): Hatapy, Lowe Petrovalle,
  Centro Med, Poder Judicial, Exclusivas Fénix, Prestamos Soft / "Sistema Prestamista",
  AMID Pacientes, Rutas Intacto y cualquier otro fuera del catálogo.
- Sin métricas ni claims de performance de clientes.
- Sin links a sitios de clientes. Único link externo permitido: partners (Botssy).
- Solo specimens en código con datos ficticios. Sin screenshots, embeds, iframes, logins ni
  demos vivas de sistemas de clientes. Los specimens no replican la UI real del cliente.
- Grafos: solo stack, roles e integraciones confirmados; sin hostnames, endpoints ni tablas.
- Integraciones: dibujar edge solo si el uso está validado; el resto va como "disponible".

## Convenciones de animación
- Cada animación explica un estado del sistema (rutas, nodos activos); nada decorativo
- gsap solo dentro de useGSAP(); respetar prefers-reduced-motion
- Componentes animados llevan "use client"; secciones estáticas quedan como RSC

## Estilo visual
Consola operativa: blanco #fafafa, tinta #262626, lima #e3fc74 solo como acento funcional
(ruta activa, foco, "en producción"), siempre como fill con texto oscuro.
Grafos de nodos + edges en vez de cards genéricas. Dot-grid como estructura.
Sin gradientes decorativos, sin sombras, sin 3D/shaders, sin íconos "AI" (Sparkles).
Bordes 0.5px. Cards rounded-xl. Weights 400 y 500 únicamente.
