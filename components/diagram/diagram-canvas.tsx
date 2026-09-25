"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"
import { boxFor, canvasSize, edgeRouting, nodePos, routeEdge, type Viewport } from "./geometry"
import { KIND_LABEL, type Diagram, type DiagramNode, type EdgeKind } from "./types"

export type DiagramLevel = "map" | "read"

type Props = {
  diagram: Diagram
  vp: Viewport
  level: DiagramLevel
  activeNodes?: ReadonlySet<string>
  activeEdges?: ReadonlySet<string>
  pulse?: { edgeId: string; key: string } | null
  focusId?: string | null
  onFocus?: (id: string) => void
  className?: string
}

const DASH: Record<EdgeKind, string | undefined> = {
  data: undefined,
  sync: "7 5",
  ops: "2 4",
  evento: undefined,
}

const pct = (v: number, total: number) => `${(v / total) * 100}%`

export function DiagramCanvas({
  diagram,
  vp,
  level,
  activeNodes,
  activeEdges,
  pulse,
  focusId,
  onFocus,
  className,
}: Props) {
  const { w, h, rowH } = canvasSize(diagram, vp)
  const scope = useRef<HTMLDivElement>(null)
  const paths = useRef<Record<string, SVGPathElement | null>>({})
  const dot = useRef<SVGCircleElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = scope.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / w))
    ro.observe(el)
    return () => ro.disconnect()
  }, [w])

  const visibleNodes = diagram.nodes
    .map((node) => {
      const pos = nodePos(diagram, node.id, vp)
      return pos ? { node, box: boxFor(pos, vp) } : null
    })
    .filter((v): v is { node: DiagramNode; box: ReturnType<typeof boxFor> } => v !== null)

  const boxes = new Map(visibleNodes.map((v) => [v.node.id, v.box]))

  const edges = diagram.edges
    .map((edge) => {
      const a = boxes.get(edge.from)
      const b = boxes.get(edge.to)
      const routing = edgeRouting(edge, vp)
      if (!a || !b || !routing) return null
      return { edge, ...routeEdge(a, b, routing) }
    })
    .filter((v): v is NonNullable<typeof v> => v !== null)

  const hasActive = (activeEdges?.size ?? 0) > 0

  useGSAP(
    () => {
      const circle = dot.current
      if (!circle) return
      const path = pulse ? paths.current[pulse.edgeId] : null
      if (!pulse || !path) {
        gsap.set(circle, { opacity: 0 })
        return
      }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduce) {
        gsap.set(circle, { opacity: 0 })
        return
      }
      gsap.fromTo(
        circle,
        { opacity: 1 },
        {
          duration: 0.85,
          ease: "power2.inOut",
          motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
          onComplete: () => {
            gsap.to(circle, { opacity: 0, duration: 0.2 })
          },
        }
      )
    },
    { scope, dependencies: [pulse?.key], revertOnUpdate: true }
  )

  return (
    <div
      ref={scope}
      className={cn("relative w-full select-none", className)}
      style={{ aspectRatio: `${w} / ${h}` }}
    >
      {vp === "desktop" && diagram.lanes?.map((lane) => (
        <div
          key={lane.label}
          className="absolute inset-x-0 border-t border-dashed border-foreground/15"
          style={{ top: pct(lane.row * rowH, h), height: pct((lane.rows ?? 1) * rowH, h) }}
        >
          <span className="absolute left-1 top-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80">
            {lane.label}
          </span>
        </div>
      ))}

      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="absolute inset-0 size-full overflow-visible"
        preserveAspectRatio="none"
        aria-hidden
      >
        {edges.map(({ edge, d, start, end }) => {
          const active = activeEdges?.has(edge.id) ?? false
          return (
            <g key={edge.id}>
              {active && (
                <path
                  d={d}
                  fill="none"
                  stroke="var(--color-lime)"
                  strokeWidth={7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              )}
              <path
                ref={(el) => {
                  paths.current[edge.id] = el
                }}
                d={d}
                fill="none"
                stroke="currentColor"
                className={cn(
                  "text-foreground transition-opacity duration-300",
                  active ? "opacity-100" : hasActive ? "opacity-20" : "opacity-40"
                )}
                strokeWidth={active ? 1.5 : 1}
                strokeDasharray={DASH[edge.kind]}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx={start.x} cy={start.y} r={2.5} className="fill-foreground/50" />
              <circle
                cx={end.x}
                cy={end.y}
                r={3.5}
                className={active ? "fill-foreground" : "fill-foreground/50"}
              />
              {edge.kind === "evento" && (
                <circle cx={start.x} cy={start.y} r={3.5} className="fill-foreground/50" />
              )}
            </g>
          )
        })}
        <circle
          ref={dot}
          cx={0}
          cy={0}
          r={6}
          fill="var(--color-lime)"
          stroke="var(--color-ink)"
          strokeWidth={1.5}
          opacity={0}
        />
      </svg>

      {level === "read" &&
        edges
          .filter(({ edge, room }) => edge.label && scale > 0 && edge.label.length * 6.2 + 12 <= room * scale)
          .map(({ edge, mid }) => (
            <span
              key={`label-${edge.id}`}
              className={cn(
                "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-background px-1 font-mono text-[10px] leading-4 transition-colors",
                activeEdges?.has(edge.id) ? "text-foreground" : "text-muted-foreground"
              )}
              style={{ left: pct(mid.x, w), top: pct(mid.y, h) }}
            >
              {edge.label}
            </span>
          ))}

      {visibleNodes.map(({ node, box }) => {
        const active = activeNodes?.has(node.id) ?? false
        const focused = focusId === node.id
        return (
          <button
            key={node.id}
            type="button"
            onClick={() => onFocus?.(node.id)}
            aria-pressed={focused}
            aria-label={`${KIND_LABEL[node.kind]} ${node.label}${node.stack ? ` — ${node.stack}` : ""}`}
            className={cn(
              "absolute flex flex-col justify-between overflow-hidden border-[0.5px] px-2.5 py-2 text-left transition-[background-color,border-color,color,box-shadow] duration-300 touch-manipulation",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              node.kind === "data" ? "rounded-2xl" : "rounded-lg",
              node.kind === "actor" && "border-dashed",
              active
                ? "border-transparent bg-lime text-lime-foreground"
                : node.kind === "infra"
                  ? "border-foreground/25 bg-background/70 text-foreground"
                  : "border-foreground/25 bg-panel text-foreground hover:border-foreground/60",
              focused && "ring-1 ring-foreground"
            )}
            style={{
              left: pct(box.x, w),
              top: pct(box.y, h),
              width: pct(box.w, w),
              height: pct(box.h, h),
            }}
          >
            <span
              className={cn(
                "flex items-center justify-between font-mono text-[9px] tracking-[0.14em] sm:text-[10px]",
                active ? "text-lime-foreground/70" : "text-muted-foreground"
              )}
            >
              {KIND_LABEL[node.kind]}
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  active ? "bg-lime-foreground" : "bg-foreground/25"
                )}
              />
            </span>
            <span
              className={cn(
                "font-medium leading-tight",
                vp === "mobile" ? "line-clamp-2 text-[12px]" : "truncate text-[13px]"
              )}
            >
              {node.label}
            </span>
            {level === "read" && node.stack && vp === "desktop" && (
              <span
                className={cn(
                  "truncate font-mono text-[10px]",
                  active ? "text-lime-foreground/70" : "text-muted-foreground"
                )}
              >
                {node.stack}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
