"use client"

import { FileSpreadsheet, MessageCircleWarning, TrendingDown } from "lucide-react"
import { motion } from "motion/react"

const PAINS = [
  {
    icon: FileSpreadsheet,
    title: "Información dispersa",
    description:
      "Datos repartidos en planillas, WhatsApp y emails. Sin una sola fuente de verdad, las decisiones se toman a ciegas.",
  },
  {
    icon: MessageCircleWarning,
    title: "Errores por procesos manuales",
    description:
      "Cada tarea que depende de una persona para ejecutarse es un punto de falla. El error humano no escala.",
  },
  {
    icon: TrendingDown,
    title: "Imposible crecer sin orden",
    description:
      "Cuando el negocio crece, el caos operativo crece más rápido. Sin sistema propio, el crecimiento se vuelve en contra.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

export function Problem() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            El problema
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground text-balance">
            ¿Seguís operando sin un sistema propio?
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-px bg-foreground/12 rounded-xl overflow-hidden"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {PAINS.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="bg-background p-5 sm:p-8 hover:bg-foreground/[0.04] transition-colors"
            >
              <Icon size={20} className="text-foreground mb-5" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
