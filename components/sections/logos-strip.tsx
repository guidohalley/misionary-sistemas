"use client"

import { motion } from "motion/react"

const CLIENTS = [
  "Fénix Comisiones",
  "Hatapy",
  "Cooperativa Fátima",
  "Centro Med",
  "Lowe Petrovalle",
  "Sistema Escuela",
]

export function LogosStrip() {
  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 border-y border-foreground/12 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8 font-medium"
        >
          Empresas que ya operan con sistemas Misionary
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 sm:gap-x-10 sm:gap-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="text-xs sm:text-sm font-medium text-foreground/30 hover:text-foreground/60 transition-colors tracking-tight text-center max-w-[10rem] sm:max-w-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
