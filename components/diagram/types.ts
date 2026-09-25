export type NodeKind = "app" | "api" | "data" | "ext" | "infra" | "actor" | "step"
export type EdgeKind = "data" | "sync" | "ops" | "evento"

export type GridPos = {
  col: number
  row: number
  span?: number
}

export type DiagramNode = {
  id: string
  kind: NodeKind
  label: string
  stack?: string
  detalle?: string[]
  desktop: GridPos
  /** `null` oculta el nodo (y sus edges) en mobile. */
  mobile?: GridPos | null
}

export type EdgeRouting = {
  via?: "h" | "v"
  fromShift?: number
  toShift?: number
}

export type DiagramEdge = EdgeRouting & {
  id: string
  from: string
  to: string
  kind: EdgeKind
  label?: string
  mobile?: EdgeRouting | null
}

export type DiagramRoute = {
  id: string
  label: string
  edges: string[]
}

export type Diagram = {
  slug: string
  grid: {
    desktop: { cols: number; rows: number }
    mobile: { cols: number; rows: number }
  }
  lanes?: { label: string; row: number; rows?: number }[]
  nodes: DiagramNode[]
  edges: DiagramEdge[]
  routes: DiagramRoute[]
}

export const KIND_LABEL: Record<NodeKind, string> = {
  app: "APP",
  api: "API",
  data: "DATA",
  ext: "EXT",
  infra: "INFRA",
  actor: "ACTOR",
  step: "PASO",
}
