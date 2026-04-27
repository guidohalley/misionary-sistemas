"use client"

import { motion } from "motion/react"

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Entendemos tu negocio, tus procesos actuales y lo que necesitás resolver. Sin compromiso.",
  },
  {
    number: "02",
    title: "Propuesta y prototipo",
    description:
      "Te mostramos cómo quedaría el sistema antes de escribir una sola línea de código.",
  },
  {
    number: "03",
    title: "Desarrollo iterativo",
    description:
      "Entregas semanales. Podés ver el avance, probar y dar feedback en cada etapa.",
  },
  {
    number: "04",
    title: "Entrega y soporte",
    description:
      "Deploy en producción, capacitación del equipo y soporte continuo incluido.",
  },
]

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-6 bg-[rgba(38,38,38,0.03)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-[#737373] font-medium mb-3">
            Metodología
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-[#262626]">
            Cómo trabajamos
          </h2>
          <p className="mt-3 text-[#737373] text-sm leading-relaxed">
            Un proceso claro de cuatro pasos, diseñado para que sepas exactamente
            qué esperar en cada momento.
          </p>
        </motion.div>

        {/* Horizontal steps — desktop */}
        <motion.div
          className="hidden md:grid grid-cols-4 gap-0 relative"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* connector line */}
          <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-[rgba(38,38,38,0.12)] z-0" />

          {STEPS.map(({ number, title, description }) => (
            <motion.div
              key={number}
              variants={stepVariants}
              className="relative z-10 flex flex-col px-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#262626] text-[#F1F1F1] text-xs font-medium flex items-center justify-center mb-5 shrink-0">
                {number}
              </div>
              <h3 className="text-sm font-medium text-[#262626] mb-2">{title}</h3>
              <p className="text-xs text-[#737373] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vertical steps — mobile */}
        <motion.div
          className="md:hidden flex flex-col gap-0"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {STEPS.map(({ number, title, description }, i) => (
            <motion.div key={number} variants={stepVariants} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#262626] text-[#F1F1F1] text-xs font-medium flex items-center justify-center shrink-0">
                  {number}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-[rgba(38,38,38,0.12)] my-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-sm font-medium text-[#262626] mb-1">{title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
