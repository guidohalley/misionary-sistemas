# Motion v12 (ex Framer Motion)

## Import correcto para este proyecto
```ts
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react"
```

## Patterns usados en este proyecto

### Fade-up al entrar en viewport (el más común)
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>
```

### Stagger de lista de cards
```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

<motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map(i => <motion.li key={i} variants={item} />)}
</motion.ul>
```

### Hover en cards
```tsx
<motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
```

### AnimatePresence (para modals / condicionales)
```tsx
<AnimatePresence>
  {open && (
    <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
  )}
</AnimatePresence>
```

## Errores frecuentes
- NO usar `transition-*` de Tailwind en elementos animados con motion
- SIEMPRE `"use client"` en el archivo que use motion
- viewport={{ once: true }} para que no repita al hacer scroll back
