# ReactBits — Animated Components

Sitio: https://reactbits.dev
Instalados via jsrepo. Cada componente es un archivo copiado en components/reactbits/.

## Instalar un componente
```bash
npx jsrepo add @react-bits/NombreComponente-TS-TW
```

## Componentes recomendados para este proyecto

### BlurText — para el H1 del hero
```bash
npx jsrepo add @react-bits/BlurText-TS-TW
```
```tsx
import BlurText from "@/components/reactbits/BlurText"
<BlurText text="Sistemas a medida para tu empresa" delay={80} />
```

### CountUp — para métricas (+10 empresas)
```bash
npx jsrepo add @react-bits/CountUp-TS-TW
```

### Aurora — background animado sutil
```bash
npx jsrepo add @react-bits/Aurora-TS-TW
```
Usar en hero o sección CTA con opacity baja (0.3-0.5) para no perder seriedad.

### Particles — fondo de partículas
```bash
npx jsrepo add @react-bits/Particles-TS-TW
```

### GradientText — para highlights en títulos
```bash
npx jsrepo add @react-bits/GradientText-TS-TW
```

### Magnet — botones que siguen el cursor
```bash
npx jsrepo add @react-bits/Magnet-TS-TW
```

## Notas
- Siempre variant TS-TW (TypeScript + Tailwind)
- Los componentes se copian en components/ del proyecto, no son un npm package
- Backgrounds y Text Animations son production-ready (9.0+/10)
- Botones tienen bugs — usar solo como referencia visual
