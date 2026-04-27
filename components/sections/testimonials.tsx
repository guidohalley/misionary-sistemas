"use client"

import { motion } from "motion/react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    quote:
      "Antes de tener el sistema, liquidar comisiones nos llevaba dos días. Ahora lo hacemos en minutos y sin errores.",
    author: "Aarón Ortas",
    role: "Director",
    company: "Fénix Comisiones",
    initials: "AO",
  },
  {
    quote:
      "Misionary entendió exactamente lo que necesitábamos. No nos vendieron algo genérico, construyeron lo nuestro.",
    author: "Federico Iraola",
    role: "Fundador",
    company: "Sistema Escuela",
    initials: "FI",
  },
  {
    quote:
      "El sistema nos permitió escalar de 3 a 40 institutos sin contratar más personal administrativo.",
    author: "Responsable de operaciones",
    role: "Operaciones",
    company: "Sistema Escuela",
    initials: "SE",
  },
  {
    quote:
      "La atención es de otro nivel. Cuando necesitamos un cambio, Misionary responde rápido y lo resuelven bien.",
    author: "Administración",
    role: "Administración",
    company: "Cooperativa Fátima",
    initials: "CF",
  },
  {
    quote:
      "Digitalizamos toda la gestión de socios en menos de dos meses. Impensable con otro proveedor.",
    author: "Gerencia",
    role: "Gerencia",
    company: "Cooperativa Fátima",
    initials: "CF",
  },
  {
    quote:
      "Nuestros turnos sin presentarse bajaron un 60% desde que implementamos el sistema de recordatorios.",
    author: "Coordinación",
    role: "Coordinación",
    company: "Centro Med",
    initials: "CM",
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

export function Testimonials() {
  return (
    <section id="clientes" className="py-20 px-6 bg-[rgba(38,38,38,0.03)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-[#737373] font-medium mb-3">
            Clientes
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-[#262626]">
            Lo que dicen las empresas que ya trabajan con nosotros
          </h2>
        </motion.div>

        <motion.div
          style={{ columnCount: 3, columnGap: "1rem" }}
          className="[column-count:1] sm:[column-count:2] lg:[column-count:3]"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {TESTIMONIALS.map(({ quote, author, role, company, initials }) => (
            <motion.div
              key={`${author}-${company}`}
              variants={cardVariants}
              className="break-inside-avoid mb-4 border border-[rgba(38,38,38,0.12)] rounded-xl p-6 bg-[#F1F1F1]"
            >
              <blockquote className="text-sm text-[#262626] leading-relaxed mb-5">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs bg-[#262626] text-[#F1F1F1]">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-medium text-[#262626]">{author}</p>
                  <p className="text-xs text-[#737373]">
                    {role} · {company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
