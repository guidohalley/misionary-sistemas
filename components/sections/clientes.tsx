import Image from "next/image"
import { CLIENT_SLUGS, entry, type CatalogEntry } from "@/content/catalog"

export function Clientes() {
  const clients: CatalogEntry[] = CLIENT_SLUGS.map((slug) => entry(slug))

  return (
    <section id="clientes" className="border-y-[0.5px] border-foreground/15 px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-foreground">03</span>
          <span className="h-px w-6 bg-foreground/25" />
          Empresas que confían en nosotros
        </p>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border-[0.5px] border-foreground/15 bg-foreground/10 md:grid-cols-7">
          {clients.map((c) => (
            <li
              key={c.slug}
              className="flex min-h-20 flex-col justify-between gap-2 bg-background px-3.5 py-3"
            >
              {c.logo ? (
                <Image src={c.logo} alt={c.nombre} width={96} height={28} unoptimized className="h-6 w-auto opacity-70 grayscale" />
              ) : (
                <span className="text-sm font-medium tracking-tight text-foreground/80">{c.nombre}</span>
              )}
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                {c.tipo === "sitio" ? "sitio web" : c.rubro}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
