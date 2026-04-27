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
    <section className="py-12 px-6 border-y border-[rgba(38,38,38,0.12)] bg-[#F1F1F1]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-[#737373] uppercase tracking-widest mb-8 font-medium"
        >
          Empresas que ya operan con sistemas Misionary
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CLIENTS.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-[#262626]/30 hover:text-[#262626]/60 transition-colors tracking-tight"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
