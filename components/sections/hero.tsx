"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

const CLIENTS = [
  { initial: "F", label: "Fénix" },
  { initial: "H", label: "Hatapy" },
  { initial: "C", label: "Coop. Fátima" },
  { initial: "L", label: "Lowe" },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#F1F1F1]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(38,38,38,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Logo grande — solo mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block md:hidden mb-8"
        >
          <Image
            src="https://cdn.misionary.misionary.com.ar/Logos%20Misionary_MI%20SIO%20NA%20RY-2.svg"
            alt="Misionary"
            width={200}
            height={60}
            unoptimized
            priority
          />
        </motion.div>

        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow badge */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 text-xs py-1 px-3 border-[rgba(38,38,38,0.2)] text-[#262626]"
            >
              <Sparkles size={11} />
              +10 empresas con sistemas activos en producción
            </Badge>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#262626] leading-[1.1] mb-6"
          >
            Sistemas a medida
            <br />
            <span className="text-[#737373] font-normal">para tu empresa.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-[#737373] max-w-xl leading-relaxed mb-10"
          >
            Dejá de operar en planillas y WhatsApp. Desarrollamos sistemas web
            propios que centralizan, automatizan y escalan con tu negocio —
            desde Posadas, Misiones para toda Argentina.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#262626] text-[#F1F1F1] hover:bg-[#262626]/90"
            >
              <a href="#contacto">
                Reservá tu asesoría gratis
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[rgba(38,38,38,0.3)] text-[#262626] hover:bg-[rgba(38,38,38,0.04)] bg-transparent"
            >
              <a href="#trabajos">Ver trabajos</a>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-3 text-sm text-[#737373]"
          >
            <div className="flex -space-x-2">
              {CLIENTS.map(({ initial }) => (
                <div
                  key={initial}
                  className="w-7 h-7 rounded-full bg-[#262626] text-[#F1F1F1] text-xs flex items-center justify-center font-medium border-2 border-[#F1F1F1]"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span>Fénix, Hatapy, Coop. Fátima, Lowe y más</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
