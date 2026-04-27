"use client"

import { motion } from "motion/react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const COFOUNDERS = [
  {
    name: "Guido Halley",
    role: "Co-founder · Systems Analyst & Web Developer",
    bio: "Analista de Sistemas y desarrollador web con experiencia en el Poder Judicial de Misiones. Especialista en Next.js, TypeScript y arquitectura de sistemas.",
    initials: "GH",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
]

const TEAM = [
  { name: "Rodo", role: "Desarrollador", initials: "RO" },
  { name: "Antonio", role: "Desarrollador", initials: "AN" },
  { name: "Ana Bartholdy", role: "Operaciones", initials: "AB" },
  { name: "Braian Gallegos", role: "Operaciones", initials: "BG" },
  { name: "Lore Keo", role: "Operaciones", initials: "LK" },
  { name: "Lucas Milde", role: "Operaciones", initials: "LM" },
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
    <section id="equipo" className="py-20 px-6 bg-[#F1F1F1]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-[#737373] font-medium mb-3">
            Equipo
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-[#262626]">
            Las personas detrás de Misionary
          </h2>
        </motion.div>

        {/* Co-founders */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 mb-10"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {COFOUNDERS.map(({ name, role, bio, initials, tags }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="border border-[rgba(38,38,38,0.12)] rounded-xl p-6 bg-[#F1F1F1] hover:border-[rgba(38,38,38,0.3)] transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 shrink-0">
                  <AvatarFallback className="text-sm font-medium bg-[#262626] text-[#F1F1F1]">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-[#262626]">{name}</p>
                  <p className="text-xs text-[#737373] leading-snug mt-0.5">{role}</p>
                </div>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed mb-4">{bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs py-0 border-[rgba(38,38,38,0.2)] text-[#737373]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {TEAM.map(({ name, role, initials }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-[rgba(38,38,38,0.12)] hover:border-[rgba(38,38,38,0.25)] transition-colors"
            >
              <Avatar className="w-10 h-10">
                <AvatarFallback className="text-xs bg-[#E5E5E5] text-[#262626]">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs font-medium text-[#262626]">{name}</p>
                <p className="text-xs text-[#737373]">{role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
