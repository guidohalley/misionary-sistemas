"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { DiagramCanvas, type DiagramLevel } from "./diagram-canvas"
import { KIND_LABEL, type Diagram } from "./types"

type Props = {
  diagram: Diagram
  autoPlay?: string
  storyKey?: string
  className?: string
}

const STEP_MS = 1000

export function SystemDiagram({ diagram, autoPlay, storyKey, className }: Props) {
  const [level, setLevel] = useState<DiagramLevel>("read")
  const [routeId, setRouteId] = useState<string | null>(null)
  const [step, setStep] = useState(-1)
  const [focusId, setFocusId] = useState<string | null>(null)
  const root = useRef<HTMLDivElement>(null)
  const autoPlayed = useRef(false)

  const route = diagram.routes.find((r) => r.id === routeId) ?? null
  const playing = route !== null && step >= 0 && step < route.edges.length

  useEffect(() => {
    if (!route || step < 0 || step >= route.edges.length) return
    const t = window.setTimeout(() => setStep((s) => s + 1), STEP_MS)
    return () => window.clearTimeout(t)
  }, [route, step])

  const play = (id: string) => {
    setRouteId(id)
    setStep(0)
    if (storyKey) {
      window.history.replaceState(null, "", `#${storyKey}/${id}`)
    }
  }

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (storyKey) {
      const [, key, id] = window.location.hash.match(/^#([^/]+)\/(.+)$/) ?? []
      if (key === storyKey && diagram.routes.some((r) => r.id === id)) {
        autoPlayed.current = true
        const t = window.setTimeout(() => {
          setRouteId(id)
          setStep(0)
        }, 0)
        return () => window.clearTimeout(t)
      }
    }
    if (!autoPlay) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoPlayed.current) {
          autoPlayed.current = true
          setRouteId(autoPlay)
          setStep(0)
          io.disconnect()
        }
      },
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [autoPlay, storyKey, diagram.routes])

  const { activeEdges, activeNodes } = useMemo(() => {
    const edgesOn = new Set<string>()
    const nodesOn = new Set<string>()
    if (route && step >= 0) {
      route.edges.slice(0, step + 1).forEach((id) => {
        const e = diagram.edges.find((x) => x.id === id)
        if (!e) return
        edgesOn.add(e.id)
        nodesOn.add(e.from)
        nodesOn.add(e.to)
      })
    }
    return { activeEdges: edgesOn, activeNodes: nodesOn }
  }, [route, step, diagram.edges])

  const pulse =
    route && step >= 0 && step < route.edges.length
      ? { edgeId: route.edges[step], key: `${route.id}-${step}` }
      : null

  const focused = diagram.nodes.find((n) => n.id === focusId) ?? null

  const canvasProps = {
    diagram,
    level,
    activeEdges,
    activeNodes,
    pulse,
    focusId,
    onFocus: (id: string) => setFocusId((cur) => (cur === id ? null : id)),
  }

  return (
    <div ref={root} className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Rutas">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Ruta
          </span>
          {diagram.routes.map((r) => {
            const on = routeId === r.id
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => (on && playing ? setStep(r.edges.length) : play(r.id))}
                aria-pressed={on}
                className={cn(
                  "inline-flex min-h-9 items-center gap-1.5 rounded-md border-[0.5px] px-2.5 text-xs transition-colors touch-manipulation",
                  on
                    ? "border-transparent bg-lime text-lime-foreground"
                    : "border-foreground/25 text-foreground hover:border-foreground/60"
                )}
              >
                {on && playing ? <Pause size={12} /> : <Play size={12} />}
                {r.label}
              </button>
            )
          })}
        </div>
        <div
          className="hidden items-center rounded-md border-[0.5px] border-foreground/25 p-0.5 font-mono text-[10px] md:inline-flex"
          role="group"
          aria-label="Nivel de detalle"
        >
          {(["map", "read"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              aria-pressed={level === l}
              className={cn(
                "rounded px-2 py-1 uppercase tracking-[0.14em] transition-colors",
                level === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="dot-grid rounded-xl border-[0.5px] border-foreground/20 p-3 sm:p-5">
        <DiagramCanvas {...canvasProps} vp="desktop" className="hidden md:block" />
        <DiagramCanvas {...canvasProps} vp="mobile" className="md:hidden" />
      </div>

      <div
        className="min-h-16 rounded-lg border-[0.5px] border-foreground/20 bg-panel px-4 py-3"
        aria-live="polite"
      >
        {focused ? (
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Full · {KIND_LABEL[focused.kind]}
            </p>
            <p className="text-sm font-medium">{focused.label}</p>
            {focused.stack && (
              <p className="font-mono text-xs text-muted-foreground">{focused.stack}</p>
            )}
            {focused.detalle && (
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {focused.detalle.map((d) => (
                  <li
                    key={d}
                    className="rounded border-[0.5px] border-foreground/20 px-1.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <p className="py-1.5 font-mono text-xs text-muted-foreground">
            Tocá un nodo para ver su detalle, o reproducí una ruta.
          </p>
        )}
      </div>

      <ol className="sr-only">
        {diagram.routes.map((r) => (
          <li key={r.id}>
            {r.label}:{" "}
            {r.edges
              .map((id) => diagram.edges.find((e) => e.id === id))
              .filter((e) => e !== undefined)
              .map((e) => {
                const from = diagram.nodes.find((n) => n.id === e.from)?.label
                const to = diagram.nodes.find((n) => n.id === e.to)?.label
                return `${from} → ${to}`
              })
              .join(", ")}
          </li>
        ))}
      </ol>
    </div>
  )
}
