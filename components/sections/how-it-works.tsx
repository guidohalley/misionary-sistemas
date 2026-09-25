import { SystemDiagram } from "@/components/diagram/system-diagram"
import { PROCESO } from "@/content/diagramas"
import { SectionHeader } from "./section-header"

const STEPS = [
  {
    n: "01",
    lane: "juntos",
    title: "Charlamos y relevamos",
    description: "Entendemos cómo funciona tu negocio hoy y qué querés resolver. Sin costo ni compromiso.",
  },
  {
    n: "02",
    lane: "nuestro equipo",
    title: "Propuesta y prototipo",
    description: "Te mostramos cómo quedaría el sistema y un presupuesto claro antes de empezar.",
  },
  {
    n: "03",
    lane: "juntos",
    title: "Construcción por etapas",
    description: "Cada semana ves avances, los probás y nos decís qué ajustar.",
  },
  {
    n: "04",
    lane: "nuestro equipo",
    title: "Publicación, capacitación y soporte",
    description: "Publicamos el sistema, capacitamos a tu equipo y seguimos con soporte.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-foreground/[0.025] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="07"
          label="Proceso"
          title="Cómo trabajamos con tu empresa, paso a paso."
          description="Usamos nuestras propias herramientas para presupuestar y seguir cada proyecto; vos ves avances claros cada semana."
        />

        <div className="hidden md:block">
          <SystemDiagram diagram={PROCESO} autoPlay="entrega" />
        </div>

        <ol className="flex flex-col md:hidden">
          {STEPS.map((s, i) => (
            <li key={s.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground font-mono text-xs text-background">
                  {s.n}
                </span>
                {i < STEPS.length - 1 && <span className="my-2 w-px flex-1 bg-foreground/20" />}
              </div>
              <div className="pb-7">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{s.lane}</p>
                <h3 className="mb-1 text-sm font-medium">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
