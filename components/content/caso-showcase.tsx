"use client"

import { SystemDiagram } from "@/components/diagram/system-diagram"
import { SPECIMENS } from "@/components/specimens/specimens"
import { DIAGRAMS } from "@/content/diagramas"
import type { Slug } from "@/content/catalog"

type CasoSlug = Extract<Slug, keyof typeof DIAGRAMS>

export function CasoShowcase({ slug }: { slug: CasoSlug }) {
  const diagram = DIAGRAMS[slug]
  const Specimen = SPECIMENS[slug]
  const autoPlay = diagram.routes[0]?.id

  return (
    <div className="flex flex-col gap-8">
      <Specimen />
      <SystemDiagram diagram={diagram} autoPlay={autoPlay} />
    </div>
  )
}
