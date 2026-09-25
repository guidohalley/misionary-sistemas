import { SystemDiagram } from "@/components/diagram/system-diagram"
import { PROCESO } from "@/content/diagramas"
import { SectionHeader } from "./section-header"

const STEPS = [
  {
    n: "01",
    lane: "cliente + misionary",
    title: "Diagnóstico y relevamiento",
    description: "Entendemos tu negocio, tus procesos y tus datos. Sin costo ni compromiso.",
  },
  {
    n: "02",
    lane: "misionary · ERP",
    title: "Propuesta y prototipo",
    description: "Te mostramos cómo quedaría el sistema y un presupuesto claro, armado en nuestro ERP.",
  },
  {
    n: "03",
    lane: "misionary + cliente",
    title: "Desarrollo iterativo",
    description: "Entregas semanales: ves el avance, lo probás y das feedback en cada etapa.",
  },
  {
    n: "04",
    lane: "plataformas",
    title: "Producción, operación y soporte",
    description: "Deploy en infraestructura propia del proyecto, capacitación y soporte continuo.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-foreground/[0.025] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="07"
          label="Proceso"
          title="Cómo trabajamos, como un sistema más."
          description="Operamos con nuestras propias plataformas: ERP Misionary para propuestas y Twenty como CRM."
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
