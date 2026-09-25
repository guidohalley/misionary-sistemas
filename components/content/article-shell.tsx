import Link from "next/link"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL, getWhatsAppHref } from "@/lib/contact"

export type BreadcrumbItem = { label: string; href: string }

export type FaqItem = { q: string; a: string }

type ArticleShellProps = {
  breadcrumbs: BreadcrumbItem[]
  h1: string
  lead: string
  authorName: string
  authorRole?: string
  notFor: string[]
  faqs: FaqItem[]
  children: React.ReactNode
  related?: { label: string; href: string }[]
  whatsappContext?: string
}

export function ArticleShell({
  breadcrumbs,
  h1,
  lead,
  authorName,
  authorRole = "Co-founder · Dirección técnica, Misionary",
  notFor,
  faqs,
  children,
  related,
  whatsappContext,
}: ArticleShellProps) {
  const waText =
    whatsappContext ??
    `Hola, leí "${h1}" en misionary.dev y quiero consultar por un diagnóstico.`

  return (
    <>
      <Navbar />
      <main className="px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
        <article className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {breadcrumbs.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-foreground">{b.label}</span>
                  ) : (
                    <Link href={b.href} className="hover:text-foreground">{b.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <header className="mb-10 border-b-[0.5px] border-foreground/15 pb-10">
            <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">{h1}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p>
            <p className="mt-6 font-mono text-[11px] text-muted-foreground">
              Por{" "}
              <span className="text-foreground">{authorName}</span>
              <span className="mx-2 text-foreground/30">·</span>
              {authorRole}
            </p>
          </header>

          <div className="prose-content flex flex-col gap-10 text-sm leading-relaxed">{children}</div>

          <section className="mt-12 rounded-xl border-[0.5px] border-foreground/20 p-6">
            <h2 className="text-lg font-medium tracking-tight">Para quién no es</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {related && related.length > 0 && (
            <section className="mt-10">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Relacionado
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-sm font-medium underline-offset-2 hover:underline">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-lg font-medium tracking-tight">Preguntas frecuentes</h2>
            <dl className="mt-6 divide-y-[0.5px] divide-foreground/15 border-y-[0.5px] border-foreground/15">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-5">
                  <dt className="font-medium">{q}</dt>
                  <dd className="mt-2 text-muted-foreground">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <aside className="mt-12 rounded-xl bg-lime p-6 text-lime-foreground">
            <h2 className="text-lg font-medium tracking-tight">¿Querés avanzar con tu caso?</h2>
            <p className="mt-2 text-sm leading-relaxed text-lime-foreground/85">
              Contanos tu operación en un diagnóstico sin costo. Respondemos por mail o WhatsApp en menos de 24 horas.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="default" className="bg-lime-foreground text-lime hover:bg-lime-foreground/90">
                <Link href="/#contacto">Reservá un diagnóstico</Link>
              </Button>
              <Button asChild variant="outline" className="border-lime-foreground/30 bg-transparent text-lime-foreground hover:bg-lime-foreground/10">
                <a href={getWhatsAppHref(waText)} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-lime-foreground/70">
              {CONTACT_EMAIL}
            </p>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-medium tracking-tight">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 text-muted-foreground">{children}</div>
    </section>
  )
}
