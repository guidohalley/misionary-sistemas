import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { allGuias } from "@/content/guias"
import { getContentJsonLd } from "@/lib/json-ld"

export const metadata: Metadata = {
  title: "Guías para elegir y armar tu sistema | Misionary",
  description:
    "Guías con el lenguaje que se busca en Argentina: stock, pedidos, CRM WhatsApp, inmobiliarias, Mercado Pago, Excel y costos. Software factory en Posadas.",
}

export default function GuiasIndexPage() {
  const guias = allGuias()
  const jsonLd = getContentJsonLd({
    path: "/guias",
    title: metadata.title as string,
    description: metadata.description as string,
    faqs: [],
    breadcrumbs: [{ name: "Inicio", path: "/" }, { name: "Guías", path: "/guias" }],
    pageType: "WebPage",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Guías</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Respuestas directas para búsquedas reales en Argentina: rubro, módulo y dolor operativo. Sin
            promesas de “gratis” ni rangos de precio inventados.
          </p>
          <ul className="mt-10 divide-y-[0.5px] divide-foreground/15 border-y-[0.5px] border-foreground/15">
            {guias.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guias/${g.slug}`}
                  className="flex flex-col gap-1 py-5 transition-colors hover:bg-foreground/[0.02] touch-manipulation"
                >
                  <span className="font-medium">{g.h1}</span>
                  <span className="text-sm text-muted-foreground line-clamp-2">{g.lead}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            ¿Preferís ver implementaciones?{" "}
            <Link href="/casos" className="font-medium text-foreground underline-offset-2 hover:underline">
              Casos de sistemas
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
