# Design System — msnr-sistemas-landing

## Filosofía visual
Flat, limpio, blanco. Sin gradientes decorativos, sin sombras pesadas.
Seriedad profesional con animaciones sutiles que dan vida sin distraer.
Referencia estética: Linear.app, Vercel.com, Resend.com.

## Colores (CSS variables en globals.css)
- Fondo: hsl(var(--background)) → blanco
- Texto: hsl(var(--foreground)) → casi negro
- Muted: hsl(var(--muted-foreground)) → gris medio
- Bordes: hsl(var(--border)) → gris claro

## Tipografía
- Font: Geist Sans (var(--font-geist-sans))
- Weights: 400 (regular), 500 (medium) — NUNCA 600 o 700
- H1: text-5xl/6xl font-semibold tracking-tight leading-[1.1]
- H2: text-3xl font-semibold tracking-tight
- Body: text-sm leading-relaxed text-muted-foreground
- Labels: text-xs uppercase tracking-widest font-medium

## Bordes y radios
- Bordes: 0.5px solid hsl(var(--border))
- Cards: rounded-xl (border-radius-lg)
- Pills/badges: rounded-full

## Espaciado de secciones
- Padding vertical: py-20 (desktop), py-14 (mobile)
- Max width: max-w-6xl mx-auto px-6

## Animaciones — reglas
- Duración: 0.4–0.6s, ease "easeOut"
- Entrada: opacity 0→1 + y 24→0 (fade-up)
- Stagger entre items: 0.08s
- Hover cards: y -4px, duración 0.2s
- NUNCA animar color de fondo o border — solo transform y opacity

## Secciones y backgrounds
- Hero: bg-white + grid pattern opacity 3%
- Secciones alternas: bg-white / bg-muted/20
- Sin parallax pesado — sutil o nada
- Aurora/Particles: solo en hero o CTA, opacity máx 0.4

## Componentes UI base
- Button: bg-foreground text-background (negro sobre blanco invertido)
- Badge: border border-border text-xs rounded-full
- Card: bg-white border border-border rounded-xl p-6
