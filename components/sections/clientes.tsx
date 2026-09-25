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
        <ul
          className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border-[0.5px] border-foreground/15 bg-foreground/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {clients.map((c) => (
            <li
              key={c.slug}
              className="flex h-16 items-center justify-center bg-background px-4 sm:h-20"
            >
              {c.logo ? (
                <Image
                  src={c.logo}
                  alt={c.nombre}
                  width={120}
                  height={32}
                  unoptimized
                  className="max-h-7 max-w-[7.5rem] object-contain opacity-80 grayscale transition-[filter,opacity] duration-200 hover:opacity-100 hover:grayscale-0 sm:max-h-8"
                />
              ) : (
                <span className="max-w-[7.5rem] text-center text-sm font-medium leading-tight tracking-tight text-foreground/85">
                  {c.nombre}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
