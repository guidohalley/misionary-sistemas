"use client"

import { motion } from "motion/react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const COFOUNDERS = [
  {
    name: "Guido Halley",
    role: "Co-founder · Dirección técnica",
    bio: "Lidera la estrategia y el diseño de sistemas a medida para empresas. Enfoque en arquitectura clara, entregas iterativas y equipos que escalan con el negocio.",
    initials: "GH",
    tags: ["Next.js", "TypeScript", "Arquitectura", "PostgreSQL"],
  },
]

const TEAM = [
  { name: "Rodolfo", role: "Desarrollo de sistemas", initials: "RO" },
  { name: "Lisandro Blanco", role: "Desarrollo de software", initials: "LB" },
  { name: "Antonio", role: "Desarrollo de sistemas", initials: "AN" },
  { name: "Tomas Roetti", role: "Páginas web", initials: "TR" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

export function Team() {
  return (
    <section id="equipo" className="py-14 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Equipo
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground text-balance">
            Las personas detrás de Misionary
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {COFOUNDERS.map(({ name, role, bio, initials, tags }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="border border-foreground/12 rounded-xl p-5 sm:p-6 bg-background hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 shrink-0">
                  <AvatarFallback className="text-sm font-medium bg-foreground text-background">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5">{role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs py-0 border-foreground/20 text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {TEAM.map(({ name, role, initials }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="flex flex-col items-center text-center gap-2 p-3 sm:p-4 rounded-xl border border-foreground/12 hover:border-foreground/25 transition-colors min-w-0"
            >
              <Avatar className="w-10 h-10 shrink-0">
                <AvatarFallback className="text-xs bg-muted text-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 w-full">
                <p className="text-xs font-medium text-foreground leading-tight text-balance">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
