import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SectionHeader } from "./section-header"

const COFOUNDERS = [
  {
    name: "Guido Halley",
    role: "Co-founder · Analista de Sistemas & Web Developer",
    bio: "Diseña la arquitectura de cada sistema, de la base de datos a la infraestructura. Especialista en Next.js, TypeScript e integraciones.",
    initials: "GH",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
]

const TEAM = [
  { name: "Rodo", role: "Desarrollo", initials: "RO" },
  { name: "Antonio", role: "Desarrollo", initials: "AN" },
  { name: "Ana Bartholdy", role: "Operaciones", initials: "AB" },
  { name: "Braian Gallegos", role: "Operaciones", initials: "BG" },
  { name: "Lore Keo", role: "Operaciones", initials: "LK" },
  { name: "Lucas Milde", role: "Operaciones", initials: "LM" },
]

export function Team() {
  return (
    <section id="equipo" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="08" label="Equipo" title="Las personas detrás de cada nodo." />

        <div className="grid gap-4 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {COFOUNDERS.map((c) => (
            <div key={c.name} className="rounded-xl border-[0.5px] border-foreground/20 bg-panel p-5 sm:p-6">
              <div className="mb-4 flex items-start gap-4">
                <Avatar className="size-12 shrink-0">
                  <AvatarFallback className="bg-foreground text-sm font-medium text-background">
                    {c.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{c.role}</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{c.bio}</p>
              <ul className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <li key={t} className="rounded border-[0.5px] border-foreground/20 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border-[0.5px] border-foreground/15 bg-foreground/10 sm:grid-cols-3">
            {TEAM.map((m) => (
              <li key={m.name} className="flex items-center gap-3 bg-background p-3.5">
                <Avatar className="size-9 shrink-0">
                  <AvatarFallback className="bg-muted text-xs">{m.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium">{m.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
