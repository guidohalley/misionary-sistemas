import { cn } from "@/lib/utils"

/**
 * Specimens: abstracciones de módulos con datos ficticios.
 * No replican la UI real de ningún cliente.
 */

function Frame({
  title,
  meta,
  children,
  className,
}: {
  title: string
  meta?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border-[0.5px] border-foreground/20 bg-panel",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b-[0.5px] border-foreground/15 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex gap-1" aria-hidden>
            <span className="size-1.5 rounded-full bg-foreground/20" />
            <span className="size-1.5 rounded-full bg-foreground/20" />
            <span className="size-1.5 rounded-full bg-foreground/20" />
          </span>
          <figcaption className="text-xs font-medium">{title}</figcaption>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          {meta ?? "datos ficticios"}
        </span>
      </div>
      <div className="p-3.5">{children}</div>
    </figure>
  )
}

function Chip({ on, children }: { on?: boolean; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 font-mono text-[10px]",
        on ? "bg-lime text-lime-foreground" : "border-[0.5px] border-foreground/20 text-muted-foreground"
      )}
    >
      {children}
    </span>
  )
}

function Rows({ rows }: { rows: { a: string; b: string; c: string; on?: boolean }[] }) {
  return (
    <ul className="divide-y-[0.5px] divide-foreground/10">
      {rows.map((r) => (
        <li key={r.a} className="grid grid-cols-[1fr_auto] items-center gap-2 py-2 text-xs">
          <span className="min-w-0">
            <span className="block truncate font-medium">{r.a}</span>
            <span className="block truncate font-mono text-[10px] text-muted-foreground">{r.b}</span>
          </span>
          <Chip on={r.on}>{r.c}</Chip>
        </li>
      ))}
    </ul>
  )
}

export function FenixSpecimen() {
  return (
    <Frame title="Liquidaciones del mes · ejemplo">
      <Rows
        rows={[
          { a: "Asesor A", b: "Venta · Depto 2 amb · OP-0412", c: "liquidada", on: true },
          { a: "Asesor B", b: "Alquiler · Local · OP-0415", c: "en revisión" },
          { a: "Asesor C", b: "Venta · Casa 3 dorm · OP-0419", c: "pendiente" },
        ]}
      />
      <div className="mt-3 grid grid-cols-3 gap-2 border-t-[0.5px] border-foreground/10 pt-3 font-mono text-[10px] text-muted-foreground">
        <span>Operaciones</span>
        <span>Comisiones</span>
        <span>Caja</span>
      </div>
    </Frame>
  )
}

export function EscuelaSpecimen() {
  return (
    <Frame title="Panel escolar">
      <Rows
        rows={[
          { a: "Alumno/a 01", b: "Curso A · turno mañana", c: "activo", on: true },
          { a: "Alumno/a 02", b: "Curso B · turno tarde", c: "activo" },
          { a: "Alumno/a 03", b: "Curso A · turno mañana", c: "revisar" },
        ]}
      />
    </Frame>
  )
}

export function FatimaSpecimen() {
  return (
    <Frame title="Pedidos">
      <Rows
        rows={[
          { a: "Pedido #1042", b: "3 ítems · retiro en local", c: "preparando", on: true },
          { a: "Pedido #1041", b: "5 ítems · envío", c: "confirmado" },
          { a: "Pedido #1040", b: "2 ítems · retiro en local", c: "entregado" },
        ]}
      />
    </Frame>
  )
}

export function GymSpecimen() {
  return (
    <Frame title="Pantalla de sala" meta="tv · datos ficticios">
      <div className="rounded-lg bg-ink p-3 text-white">
        <div className="flex items-center justify-between font-mono text-[10px] text-white/60">
          <span>SALA 1</span>
          <span className="rounded bg-lime px-1.5 py-0.5 text-lime-foreground">EN CURSO</span>
        </div>
        <p className="mt-2 text-sm font-medium">Rutina demo · Bloque A</p>
        <ul className="mt-2 flex flex-col gap-1 font-mono text-[11px] text-white/80">
          <li className="flex justify-between"><span>Ejercicio 1</span><span>4 × 10</span></li>
          <li className="flex justify-between"><span>Ejercicio 2</span><span>3 × 12</span></li>
          <li className="flex justify-between"><span>Ejercicio 3</span><span>3 × 45 s</span></li>
        </ul>
        <div className="mt-3 flex aspect-[16/6] items-center justify-center rounded border-[0.5px] border-white/15 font-mono text-[10px] text-white/40">
          ▶ video del ejercicio
        </div>
      </div>
    </Frame>
  )
}

export function IntactoSpecimen() {
  const cols = [
    { t: "Abierta", items: ["OT-0231", "OT-0234"] },
    { t: "En proceso", items: ["OT-0228"], on: true },
    { t: "Cerrada", items: ["OT-0219", "OT-0221"] },
  ]
  return (
    <Frame title="Órdenes de trabajo">
      <div className="grid grid-cols-3 gap-2">
        {cols.map((c) => (
          <div key={c.t} className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{c.t}</span>
            {c.items.map((i) => (
              <span
                key={i}
                className={cn(
                  "rounded-md px-2 py-2 font-mono text-[11px]",
                  c.on ? "bg-lime text-lime-foreground" : "border-[0.5px] border-foreground/20"
                )}
              >
                {i}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  )
}

export function ErpSpecimen() {
  return (
    <Frame title="Presupuesto P-0087">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Cliente demo S.A.</span>
        <Chip>borrador</Chip>
      </div>
      <ul className="mt-2 divide-y-[0.5px] divide-foreground/10 font-mono text-[11px]">
        <li className="flex justify-between py-1.5"><span>Servicio · desarrollo</span><span>1 ×</span></li>
        <li className="flex justify-between py-1.5"><span>Servicio · soporte mensual</span><span>4 ×</span></li>
        <li className="flex justify-between py-1.5"><span>Producto · licencia</span><span>1 ×</span></li>
      </ul>
      <div className="mt-2 flex justify-between border-t-[0.5px] border-foreground/10 pt-2 font-mono text-[10px] text-muted-foreground">
        <span>Subtotal · impuestos · total</span>
        <Chip on>listo para enviar</Chip>
      </div>
    </Frame>
  )
}

export const SPECIMENS = {
  fenix: FenixSpecimen,
  "escuela-alas": EscuelaSpecimen,
  "cooperativa-fatima": FatimaSpecimen,
  "neutron-gym": GymSpecimen,
  "intacto-welty": IntactoSpecimen,
  "erp-misionary": ErpSpecimen,
} as const
