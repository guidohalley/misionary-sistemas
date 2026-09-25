"use client"

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { CARRILES, DESTINOS, type Destino } from "@/content/integraciones"
import { cn } from "@/lib/utils"
import { SectionHeader } from "./section-header"

type Selection = { type: "servicio"; id: string } | { type: "destino"; id: Destino } | null

type Anchor = { x: number; y: number }
type Geometry = {
  destinos: Record<string, Anchor>
  lanes: Record<string, Anchor>
  hubIn: Anchor
  hubOut: Anchor
  w: number
  h: number
}

const ALL_SERVICES = CARRILES.flatMap((c) => c.servicios.map((s) => ({ ...s, carril: c.id })))
const CYCLE = ALL_SERVICES.filter((s) => s.usadoEn.length > 0).map((s) => s.id)

const curve = (a: Anchor, b: Anchor) => {
  const dx = Math.max(24, (b.x - a.x) * 0.5)
  return `M ${a.x} ${a.y} C ${a.x + dx} ${a.y}, ${b.x - dx} ${b.y}, ${b.x} ${b.y}`
}

export function Integraciones() {
  const [sel, setSel] = useState<Selection>(null)
  const [auto, setAuto] = useState<string | null>(null)
  const [geo, setGeo] = useState<Geometry | null>(null)
  const interacted = useRef(false)
  const box = useRef<HTMLDivElement>(null)
  const hub = useRef<HTMLDivElement>(null)
  const destRefs = useRef<Record<string, HTMLElement | null>>({})
  const laneRefs = useRef<Record<string, HTMLElement | null>>({})

  const measure = useCallback(() => {
    const root = box.current
    const h = hub.current
    if (!root || !h || root.offsetWidth === 0) return
    const r = root.getBoundingClientRect()
    const rel = (el: HTMLElement, side: "left" | "right"): Anchor => {
      const b = el.getBoundingClientRect()
      return { x: (side === "left" ? b.left : b.right) - r.left, y: b.top + b.height / 2 - r.top }
    }
    const destinos: Record<string, Anchor> = {}
    Object.entries(destRefs.current).forEach(([k, el]) => {
      if (el) destinos[k] = rel(el, "right")
    })
    const lanes: Record<string, Anchor> = {}
    Object.entries(laneRefs.current).forEach(([k, el]) => {
      if (el) lanes[k] = rel(el, "left")
    })
    setGeo({ destinos, lanes, hubIn: rel(h, "left"), hubOut: rel(h, "right"), w: r.width, h: r.height })
  }, [])

  useLayoutEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (box.current) ro.observe(box.current)
    return () => ro.disconnect()
  }, [measure])

  useEffect(() => {
    const el = box.current
    if (!el) return
    let timer: number | undefined
    let i = 0
    const io = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer)
      if (!entry.isIntersecting || interacted.current) return
      timer = window.setInterval(() => {
        if (interacted.current) return window.clearInterval(timer)
        setAuto(CYCLE[i % CYCLE.length])
        i++
      }, 1800)
    }, { threshold: 0.3 })
    io.observe(el)
    return () => {
      io.disconnect()
      window.clearInterval(timer)
    }
  }, [])

  const choose = (next: Selection) => {
    interacted.current = true
    setAuto(null)
    setSel((cur) => (cur && next && cur.type === next.type && cur.id === next.id ? null : next))
  }

  const effective = useMemo<Selection>(
    () => sel ?? (auto ? { type: "servicio", id: auto } : null),
    [sel, auto]
  )

  const active = useMemo(() => {
    const destinos = new Set<string>()
    const servicios = new Set<string>()
    if (effective?.type === "servicio") {
      const s = ALL_SERVICES.find((x) => x.id === effective.id)
      servicios.add(effective.id)
      s?.usadoEn.forEach((d) => destinos.add(d))
    } else if (effective?.type === "destino") {
      destinos.add(effective.id)
      ALL_SERVICES.filter((s) => s.usadoEn.includes(effective.id)).forEach((s) => servicios.add(s.id))
    }
    const lanes = new Set(ALL_SERVICES.filter((s) => servicios.has(s.id)).map((s) => s.carril))
    return { destinos, servicios, lanes }
  }, [effective])

  const selectedService =
    effective?.type === "servicio" ? ALL_SERVICES.find((s) => s.id === effective.id) : undefined
  const hasSel = effective !== null

  return (
    <section id="integraciones" className="bg-foreground/[0.025] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="05"
          label="Integraciones"
          title="Conectamos tu sistema con el stack que ya usás."
          description="Infra, pagos, CRM/ERP, comunicación y growth. Tocá un servicio para ver dónde está en producción."
        />

        <div ref={box} className="relative">
          {geo && (
            <svg
              className="pointer-events-none absolute inset-0 hidden size-full overflow-visible md:block"
              viewBox={`0 0 ${geo.w} ${geo.h}`}
              aria-hidden
            >
              {DESTINOS.map((d) => {
                const a = geo.destinos[d.id]
                if (!a) return null
                const on = active.destinos.has(d.id)
                return (
                  <g key={d.id}>
                    {on && <path d={curve(a, geo.hubIn)} fill="none" stroke="var(--color-lime)" strokeWidth={6} />}
                    <path
                      d={curve(a, geo.hubIn)}
                      fill="none"
                      stroke="currentColor"
                      className={cn("text-foreground transition-opacity", on ? "opacity-100" : hasSel ? "opacity-10" : "opacity-25")}
                      strokeWidth={on ? 1.5 : 1}
                    />
                  </g>
                )
              })}
              {CARRILES.map((c) => {
                const b = geo.lanes[c.id]
                if (!b) return null
                const on = active.lanes.has(c.id)
                return (
                  <g key={c.id}>
                    {on && <path d={curve(geo.hubOut, b)} fill="none" stroke="var(--color-lime)" strokeWidth={6} />}
                    <path
                      d={curve(geo.hubOut, b)}
                      fill="none"
                      stroke="currentColor"
                      className={cn("text-foreground transition-opacity", on ? "opacity-100" : hasSel ? "opacity-10" : "opacity-25")}
                      strokeWidth={on ? 1.5 : 1}
                      strokeDasharray={on ? undefined : "4 4"}
                    />
                    <circle cx={b.x} cy={b.y} r={3.5} className="fill-foreground/60" />
                  </g>
                )
              })}
            </svg>
          )}

          <div className="relative grid gap-8 md:grid-cols-[minmax(0,13rem)_minmax(0,11rem)_minmax(0,1fr)] md:items-center md:gap-14">
            <ul className="hidden flex-col gap-2 md:flex" aria-label="Sistemas">
              {DESTINOS.map((d) => {
                const on = active.destinos.has(d.id)
                return (
                  <li key={d.id}>
                    <button
                      ref={(el) => {
                        destRefs.current[d.id] = el
                      }}
                      type="button"
                      onClick={() => choose({ type: "destino", id: d.id })}
                      onMouseEnter={() => {
                        interacted.current = true
                        setAuto(null)
                      }}
                      aria-pressed={sel?.type === "destino" && sel.id === d.id}
                      className={cn(
                        "flex min-h-10 w-full items-center justify-between rounded-lg border-[0.5px] px-3 text-left text-[13px] transition-colors",
                        on ? "border-transparent bg-lime text-lime-foreground" : "border-foreground/20 bg-panel hover:border-foreground/50"
                      )}
                    >
                      {d.label}
                      <span className="font-mono text-[9px] tracking-[0.14em] opacity-60">SYS</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div
              ref={hub}
              className="hidden flex-col gap-1 rounded-xl bg-foreground px-4 py-4 text-background md:flex"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-background/60">Hub</span>
              <span className="text-base font-medium leading-tight">Integración a medida</span>
              <span className="font-mono text-[10px] text-background/60">API · webhooks · sync</span>
            </div>

            <div className="flex flex-col gap-3">
              {CARRILES.map((c) => (
                <div
                  key={c.id}
                  ref={(el) => {
                    laneRefs.current[c.id] = el
                  }}
                  className={cn(
                    "rounded-xl border-[0.5px] bg-panel px-3.5 py-3 transition-colors",
                    active.lanes.has(c.id) ? "border-foreground/60" : "border-foreground/20"
                  )}
                >
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{c.label}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {c.servicios.map((s) => {
                      const on = active.servicios.has(s.id)
                      const inUse = s.usadoEn.length > 0
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => choose({ type: "servicio", id: s.id })}
                            aria-pressed={sel?.type === "servicio" && sel.id === s.id}
                            className={cn(
                              "inline-flex min-h-9 items-center gap-1.5 rounded-md border-[0.5px] px-2.5 font-mono text-[11px] transition-colors touch-manipulation",
                              on
                                ? "border-transparent bg-lime text-lime-foreground"
                                : "border-foreground/20 hover:border-foreground/50"
                            )}
                          >
                            <span
                              className={cn(
                                "size-1.5 rounded-full",
                                inUse ? (on ? "bg-lime-foreground" : "bg-foreground") : "border border-current opacity-50"
                              )}
                            />
                            {s.nombre}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                  {selectedService && selectedService.carril === c.id && (
                    <p className="mt-2.5 border-t-[0.5px] border-foreground/15 pt-2 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{selectedService.nombre}</span>
                      {selectedService.nota ? ` · ${selectedService.nota}` : ""}
                      {" — "}
                      {selectedService.usadoEn.length > 0
                        ? `en producción en ${selectedService.usadoEn
                            .map((d) => DESTINOS.find((x) => x.id === d)?.label)
                            .join(", ")}`
                        : "disponible para integrar"}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex flex-wrap items-center justify-between gap-3 px-1 font-mono text-[10px] text-muted-foreground">
                <span className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-foreground" />en producción</span>
                  <span className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full border border-current opacity-50" />disponible</span>
                </span>
                <span>+ APIs propias y otras</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://botssy.com/"
          target="_blank"
          rel="noopener"
          className="mt-8 flex flex-col gap-3 rounded-xl border-[0.5px] border-foreground/20 bg-panel px-5 py-4 transition-colors hover:border-foreground/50 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Partner</span>
            <span className="text-sm">
              <span className="font-medium">Botssy</span>
              <span className="text-muted-foreground"> — automatización de email marketing y conversaciones, conectada a tus sistemas.</span>
            </span>
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-xs">
            botssy.com <ArrowUpRight size={13} />
          </span>
        </a>
      </div>
    </section>
  )
}
