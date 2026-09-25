"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { SystemDiagram } from "@/components/diagram/system-diagram"
import { SPECIMENS } from "@/components/specimens/specimens"
import { DIAGRAMS } from "@/content/diagramas"
import { cn } from "@/lib/utils"

type Row = {
  slug: Exclude<keyof typeof DIAGRAMS, "fenix">
  nombre: string
  rubro: string
  tipo: "sistema" | "propio"
  modulos: string
  stack: string
  resumen: string
}

const ROWS: Row[] = [
  {
    slug: "escuela-alas",
    nombre: "Escuela Alas",
    rubro: "Educación",
    tipo: "sistema",
    modulos: "gestión académica y administrativa",
    stack: "Next 16 · Express · MySQL",
    resumen: "La gestión académica y administrativa de la escuela, en un solo lugar y hecha a su medida.",
  },
  {
    slug: "cooperativa-fatima",
    nombre: "Cooperativa Fátima",
    rubro: "Cooperativa",
    tipo: "sistema",
    modulos: "tienda web · pedidos · catálogo",
    stack: "Next 16 · NestJS · PostgreSQL",
    resumen: "Los clientes compran en la tienda web y la cooperativa gestiona pedidos y catálogo desde su panel.",
  },
  {
    slug: "neutron-gym",
    nombre: "Neutron Gym",
    rubro: "Fitness",
    tipo: "sistema",
    modulos: "rutinas · socios · pantallas de sala",
    stack: "React · Express · PostgreSQL",
    resumen: "El gimnasio arma rutinas y administra socios; las pantallas de la sala muestran cada ejercicio en video.",
  },
  {
    slug: "intacto-welty",
    nombre: "Intacto Welty",
    rubro: "Industria",
    tipo: "sistema",
    modulos: "órdenes de trabajo · seguimiento",
    stack: "Turborepo · Next · Prisma 7",
    resumen: "Las órdenes de trabajo de planta y su seguimiento, desde que se abren hasta que se cierran.",
  },
  {
    slug: "erp-misionary",
    nombre: "ERP Misionary",
    rubro: "Gestión empresarial",
    tipo: "propio",
    modulos: "presupuestos · clientes · proveedores",
    stack: "React 19 · Express · PostgreSQL 16",
    resumen: "Nuestro propio sistema de gestión: presupuestos, clientes, proveedores, servicios y productos.",
  },
]

export function SystemsIndex() {
  const [selected, setSelected] = useState<Row["slug"]>("escuela-alas")
  const row = ROWS.find((r) => r.slug === selected) ?? ROWS[0]
  const Specimen = SPECIMENS[row.slug]

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-xl border-[0.5px] border-foreground/20">
        <div className="hidden grid-cols-[1.3fr_1fr_2fr_auto] gap-4 border-b-[0.5px] border-foreground/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground md:grid">
          <span>Empresa</span>
          <span>Rubro</span>
          <span>Qué resuelve</span>
          <span>Estado</span>
        </div>
        <ul role="tablist" aria-label="Sistemas" className="divide-y-[0.5px] divide-foreground/15">
          {ROWS.map((r) => {
            const on = r.slug === selected
            return (
              <li key={r.slug}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="system-panel"
                  onClick={() => setSelected(r.slug)}
                  className={cn(
                    "grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-4 py-3.5 text-left transition-colors touch-manipulation md:grid-cols-[1.3fr_1fr_2fr_auto]",
                    on ? "bg-lime text-lime-foreground" : "hover:bg-foreground/[0.03]"
                  )}
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    {r.nombre}
                    {r.tipo === "propio" && (
                      <span
                        className={cn(
                          "rounded px-1 py-px font-mono text-[9px] uppercase tracking-[0.12em]",
                          on ? "bg-lime-foreground text-lime" : "bg-foreground text-background"
                        )}
                      >
                        nuestro
                      </span>
                    )}
                  </span>
                  <span className={cn("text-xs md:order-none", on ? "text-lime-foreground/75" : "text-muted-foreground")}>
                    {r.rubro}
                  </span>
                  <span className={cn("col-span-2 text-xs md:col-span-1", on ? "text-lime-foreground/75" : "text-muted-foreground")}>
                    {r.modulos}
                  </span>
                  <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] md:inline-flex">
                    <span className={cn("size-1.5 rounded-full", on ? "bg-lime-foreground" : "bg-foreground/40")} />
                    en uso hoy
                    <ArrowRight size={12} className={on ? "opacity-100" : "opacity-0"} />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div id="system-panel" role="tabpanel" className="flex flex-col gap-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {row.tipo === "propio" ? "Sistema propio de Misionary" : row.rubro}
            </p>
            <h3 className="mt-1 text-xl font-medium tracking-tight">{row.nombre}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{row.resumen}</p>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              <span className="text-foreground/60">Detalle técnico: </span>
              {row.stack}
            </p>
          </div>
          <Specimen />
        </div>
        <SystemDiagram key={row.slug} diagram={DIAGRAMS[row.slug]} autoPlay={DIAGRAMS[row.slug].routes[0].id} />
      </div>
    </div>
  )
}
