import { SystemDiagram } from "@/components/diagram/system-diagram"
import { FenixSpecimen } from "@/components/specimens/specimens"
import { byTipo } from "@/content/catalog"
import { FENIX } from "@/content/diagramas"
import { SectionHeader } from "./section-header"
import { SystemsIndex } from "./systems-index"

const FENIX_PIEZAS = [
  { t: "Fénix Comisiones", d: "Comisiones, ventas, liquidaciones, caja y finanzas de la inmobiliaria." },
  { t: "Web pública", d: "Catálogo con búsqueda y mapa, alimentado desde Tokko Broker." },
  { t: "Operación de datos", d: "Misionary gestiona toda la data de la empresa, incluida la carga de propiedades." },
]

export function Trabajos() {
  const sitios = byTipo("sitio")

  return (
    <section id="trabajos" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          label="Trabajos"
          title="Sistemas reales, en producción. Así están conectados."
          description="Mostramos la arquitectura, no el producto de nuestros clientes: cada pantalla es un specimen con datos ficticios."
        />

        <article className="mb-16 md:mb-24">
          <div className="mb-6 grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-start">
            <div>
              <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="rounded bg-foreground px-1 py-px text-background">flagship</span>
                inmobiliaria · ecosistema
              </p>
              <h3 className="text-2xl font-medium tracking-tight">Ecosistema Fénix</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Un sistema interno, una web pública y un catálogo externo operando como una sola
                pieza. Reproducí una ruta para ver cómo viaja la información.
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
            Índice de sistemas
          </p>
          <SystemsIndex />
        </div>

        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Sitios y presencia web
            </p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              Sitios institucionales y landings, no sistemas de gestión.
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
