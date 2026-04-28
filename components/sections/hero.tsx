"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BackgroundBeams } from "@/components/ui/background-beams"

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
    <section className="relative pt-[calc(4.75rem+env(safe-area-inset-top))] pb-14 px-4 sm:px-6 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <BackgroundBeams className="opacity-[0.2] dark:opacity-[0.35]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Logo grande — solo mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block md:hidden mb-6 sm:mb-8 max-w-[min(100%,220px)]"
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
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="mb-5 sm:mb-6 gap-1.5 text-xs py-1.5 px-2.5 sm:px-3 border-foreground/20 text-foreground max-w-full text-balance leading-snug"
            >
              <Sparkles size={11} />
              +10 empresas con sistemas activos en producción
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.12] sm:leading-[1.1] mb-5 sm:mb-6"
          >
            Sistemas a medida
            <br />
            <span className="text-muted-foreground font-normal">para tu empresa.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8 sm:mb-10"
          >
            Dejá de operar en planillas y WhatsApp. Desarrollamos sistemas web
            propios que centralizan, automatizan y escalan con tu negocio —
            desde Posadas, Misiones para toda Argentina.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto min-h-11 touch-manipulation">
              <a href="#contacto">
                Reservá tu asesoría gratis
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/[0.06] bg-transparent w-full sm:w-auto min-h-11 touch-manipulation"
            >
              <a href="#trabajos">Ver trabajos</a>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {CLIENTS.map(({ initial }) => (
                <div
                  key={initial}
                  className="w-7 h-7 rounded-full bg-foreground text-background text-xs flex items-center justify-center font-medium border-2 border-background"
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
