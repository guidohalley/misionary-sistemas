import type { Diagram, DiagramEdge, EdgeRouting, GridPos } from "./types"

export type Viewport = "desktop" | "mobile"

export type Box = { x: number; y: number; w: number; h: number }
type Point = { x: number; y: number }

const METRICS = {
  desktop: { colW: 200, rowH: 108, nodeH: 66, padX: 14 },
  mobile: { colW: 170, rowH: 104, nodeH: 74, padX: 10 },
} as const

export function canvasSize(diagram: Diagram, vp: Viewport) {
  const m = METRICS[vp]
  const g = diagram.grid[vp]
  return { w: g.cols * m.colW, h: g.rows * m.rowH, rowH: m.rowH }
}

export function boxFor(pos: GridPos, vp: Viewport): Box {
  const m = METRICS[vp]
  return {
    x: pos.col * m.colW + m.padX,
    y: pos.row * m.rowH + (m.rowH - m.nodeH) / 2,
    w: (pos.span ?? 1) * m.colW - m.padX * 2,
    h: m.nodeH,
  }
}

export function nodePos(diagram: Diagram, id: string, vp: Viewport): GridPos | null {
  const node = diagram.nodes.find((n) => n.id === id)
  if (!node) return null
  if (vp === "desktop") return node.desktop
  return node.mobile === undefined ? node.desktop : node.mobile
}

export function edgeRouting(edge: DiagramEdge, vp: Viewport): EdgeRouting | null {
  if (vp === "desktop") return edge
  if (edge.mobile === null) return null
  return edge.mobile ?? { via: edge.via }
}

function roundedPath(points: Point[], radius = 10) {
  const pts = points.filter(
    (p, i) => i === 0 || p.x !== points[i - 1].x || p.y !== points[i - 1].y
  )
  if (pts.length < 2) return ""
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length - 1; i++) {
    const prev = pts[i - 1]
    const cur = pts[i]
    const next = pts[i + 1]
    const inLen = Math.hypot(cur.x - prev.x, cur.y - prev.y)
    const outLen = Math.hypot(next.x - cur.x, next.y - cur.y)
    const r = Math.min(radius, inLen / 2, outLen / 2)
    const a = {
      x: cur.x - ((cur.x - prev.x) / inLen) * r,
      y: cur.y - ((cur.y - prev.y) / inLen) * r,
    }
    const b = {
      x: cur.x + ((next.x - cur.x) / outLen) * r,
      y: cur.y + ((next.y - cur.y) / outLen) * r,
    }
    d += ` L ${a.x} ${a.y} Q ${cur.x} ${cur.y} ${b.x} ${b.y}`
  }
  const last = pts[pts.length - 1]
  d += ` L ${last.x} ${last.y}`
  return d
}

export function routeEdge(a: Box, b: Box, routing: EdgeRouting) {
  const acx = a.x + a.w / 2
  const acy = a.y + a.h / 2
  const bcx = b.x + b.w / 2
  const bcy = b.y + b.h / 2
  const fromShift = routing.fromShift ?? 0
  const toShift = routing.toShift ?? 0

  const sameRow = Math.abs(acy - bcy) < 1
  const sameCol = Math.abs(acx - bcx) < 1
  const via = routing.via ?? (sameRow ? "h" : sameCol ? "v" : "v")

  let points: Point[]
  if (via === "h") {
    const forward = bcx >= acx
    const start = { x: forward ? a.x + a.w : a.x, y: acy + fromShift * a.h }
    const end = { x: forward ? b.x : b.x + b.w, y: bcy + toShift * b.h }
    const midX = (start.x + end.x) / 2
    points = [start, { x: midX, y: start.y }, { x: midX, y: end.y }, end]
  } else {
    const down = bcy >= acy
    const start = { x: acx + fromShift * a.w, y: down ? a.y + a.h : a.y }
    const end = { x: bcx + toShift * b.w, y: down ? b.y : b.y + b.h }
    const midY = (start.y + end.y) / 2
    points = [start, { x: start.x, y: midY }, { x: end.x, y: midY }, end]
  }

  const d = roundedPath(points)
  const mid = {
    x: (points[1].x + points[2].x) / 2,
    y: (points[1].y + points[2].y) / 2,
  }
  return { d, mid, end: points[points.length - 1], start: points[0] }
}
