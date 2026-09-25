import { SectionHeader } from "./section-header"

const PAINS = [
  {
    n: "1",
    title: "Cada uno con su planilla",
    description:
      "Ventas en una planilla, stock en otra y pedidos por WhatsApp. Cuando necesitás un número, nadie tiene el mismo.",
    tags: ["Planilla", "WhatsApp", "Mail"],
  },
  {
    n: "2",
    title: "Tareas que dependen de la memoria",
    description:
      "Si alguien se olvida de pasar un dato, el error aparece recién a fin de mes, cuando ya es tarde.",
    tags: ["Copiar y pegar", "Revisar a mano"],
  },
  {
    n: "3",
    title: "Herramientas que no se hablan",
    description:
      "Cobrás por un lado, publicás por otro y respondés consultas por otro. Crecer suma trabajo en vez de ordenarlo.",
    tags: ["Cobros", "Web", "Consultas"],
  },
]

export function Problem() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="06"
          label="El problema"
          title="¿Te suena alguna de estas situaciones?"
          description="Si te pasa, el siguiente paso es un diagnóstico sin costo."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border-[0.5px] border-foreground/15 bg-foreground/15 md:grid-cols-3">
          {PAINS.map((p) => (
            <div key={p.n} className="flex flex-col gap-5 bg-background p-5 sm:p-7">
              <span className="flex size-8 items-center justify-center rounded-lg border-[0.5px] border-foreground/25 font-mono text-xs text-muted-foreground">
                {p.n}
              </span>
              <div>
                <h3 className="mb-2 text-base font-medium">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
              <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Hoy se resuelve con">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md bg-foreground/[0.05] px-2 py-1 text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
