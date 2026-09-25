import { SystemDiagram } from "@/components/diagram/system-diagram"
import { FenixSpecimen } from "@/components/specimens/specimens"
import { byTipo } from "@/content/catalog"
import { FENIX } from "@/content/diagramas"
import { SectionHeader } from "./section-header"
import { SystemsIndex } from "./systems-index"

const FENIX_PIEZAS = [
  { t: "Comisiones y caja", d: "Cada operación, comisión y liquidación de los asesores en un solo lugar." },
  { t: "Web pública", d: "Se actualiza sola cuando se cargan propiedades en el portal que ya usan (Tokko)." },
  { t: "Carga de datos", d: "Nuestro equipo carga y mantiene la información de la empresa, incluidas las propiedades." },
]

export function Trabajos() {
  const sitios = byTipo("sitio")

  return (
    <section id="trabajos" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          label="Trabajos"
          title="Software a medida que ya usan empresas de acá."
          description="Te mostramos ejemplos con datos ficticios: cómo quedaría tu operación, sin exponer información real de nuestros clientes."
        />

        <article className="mb-16 md:mb-24">
          <div className="mb-6 grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-start">
            <div>
              <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="rounded bg-foreground px-1 py-px text-background">caso destacado</span>
                inmobiliaria
              </p>
              <h3 className="text-2xl font-medium tracking-tight">Fénix Inmobiliaria</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                La gestión interna, la web y el portal de propiedades trabajan como una sola cosa.
                Elegí un ejemplo y mirá cómo un dato pasa de la carga a la web y a comisiones.
              </p>
              <ul className="mt-5 divide-y-[0.5px] divide-foreground/15 border-y-[0.5px] border-foreground/15">
                {FENIX_PIEZAS.map((p) => (
                  <li key={p.t} className="grid grid-cols-[8.5rem_1fr] gap-3 py-2.5 text-sm">
                    <span className="font-medium">{p.t}</span>
                    <span className="text-muted-foreground">{p.d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <FenixSpecimen />
          </div>
          <SystemDiagram diagram={FENIX} autoPlay="propiedad" storyKey="fenix" />
        </article>

        <div className="mb-16 md:mb-24">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Más casos
          </p>
          <SystemsIndex />
        </div>

        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Sitios y presencia web
            </p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              Sitios institucionales y landings que diseñamos y mantenemos.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border-[0.5px] border-foreground/15 bg-foreground/10 sm:grid-cols-5">
            {sitios.map((s) => (
              <li key={s.slug} className="flex flex-col gap-1 bg-background px-3.5 py-3">
                <span className="text-sm font-medium tracking-tight">{s.nombre}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {s.rubro}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
