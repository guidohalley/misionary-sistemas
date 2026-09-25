import { SectionHeader } from "./section-header"

const PAINS = [
  {
    code: "ERR-01",
    title: "Información dispersa",
    description:
      "Datos repartidos en planillas, WhatsApp y mails. Sin una sola fuente de verdad, cada decisión se toma a ciegas.",
    nodes: ["planilla", "chat", "mail"],
  },
  {
    code: "ERR-02",
    title: "Procesos manuales",
    description:
      "Cada tarea que depende de que alguien se acuerde es un punto de falla. El error humano no escala.",
    nodes: ["copiar", "pegar", "revisar"],
  },
  {
    code: "ERR-03",
    title: "Herramientas sin conexión",
    description:
      "Cobros, catálogo, CRM y web viven separados. Crecer multiplica el trabajo en vez de ordenarlo.",
    nodes: ["pagos", "web", "crm"],
  },
]

export function Problem() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="06"
          label="El problema"
          title="¿Tu empresa todavía opera sin sistema propio?"
          description="Si te identificás con alguno de estos síntomas, el siguiente paso es un diagnóstico."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border-[0.5px] border-foreground/15 bg-foreground/15 md:grid-cols-3">
          {PAINS.map((p) => (
            <div key={p.code} className="flex flex-col gap-5 bg-background p-5 sm:p-7">
              <div className="flex items-center gap-2" aria-hidden>
                {p.nodes.map((n, i) => (
                  <span key={n} className="flex items-center gap-2">
                    <span className="rounded-md border-[0.5px] border-dashed border-foreground/35 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                      {n}
                    </span>
                    {i < p.nodes.length - 1 && (
                      <span className="font-mono text-[10px] text-foreground/35">✕</span>
                    )}
                  </span>
                ))}
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">{p.code}</p>
                <h3 className="mb-2 text-base font-medium">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
