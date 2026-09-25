import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { allCasos } from "@/content/casos"
import { getContentJsonLd } from "@/lib/json-ld"

export const metadata: Metadata = {
  title: "Casos de sistemas a medida | Misionary",
  description:
    "Sistemas en producción para empresas de la región: inmobiliaria, educación, cooperativa, gimnasio e industria. Diagramas y datos ficticios.",
}

export default function CasosIndexPage() {
  const casos = allCasos()
  const jsonLd = getContentJsonLd({
    path: "/casos",
    title: metadata.title as string,
    description: metadata.description as string,
    faqs: [],
    breadcrumbs: [{ name: "Inicio", path: "/" }, { name: "Casos", path: "/casos" }],
    pageType: "WebPage",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Casos</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Sistemas allowlist que diseñamos y operamos. Sin links a sitios de clientes ni métricas de
            performance: diagramas, specimens ficticios y explicación del enfoque.
          </p>
          <ul className="mt-10 divide-y-[0.5px] divide-foreground/15 border-y-[0.5px] border-foreground/15">
            {casos.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/casos/${c.slug}`}
                  className="grid gap-1 py-5 transition-colors hover:bg-foreground/[0.02] touch-manipulation sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <span className="font-medium">{c.h1}</span>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{c.lead}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:text-right">
                    {c.rubro}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            ¿Buscás orientación antes del caso?{" "}
            <Link href="/guias" className="font-medium text-foreground underline-offset-2 hover:underline">
              Guías por intención
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
