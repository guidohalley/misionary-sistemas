import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleShell, ContentSection } from "@/components/content/article-shell"
import { CasoShowcase } from "@/components/content/caso-showcase"
import { allGuias } from "@/content/guias"
import { caso, casoSlugs, type CasoSlug } from "@/content/casos"
import { getContentJsonLd } from "@/lib/json-ld"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return casoSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const c = caso(slug)
    return { title: c.title, description: c.description }
  } catch {
    return {}
  }
}

export default async function CasoPage({ params }: Props) {
  const { slug } = await params
  let c
  try {
    c = caso(slug)
  } catch {
    notFound()
  }

  const related = c.relatedGuiaSlugs
    .map((s) => allGuias().find((x) => x.slug === s))
    .filter(Boolean)
    .map((x) => ({ label: x!.h1, href: `/guias/${x!.slug}` }))

  const jsonLd = getContentJsonLd({
    path: `/casos/${c.slug}`,
    title: c.title,
    description: c.description,
    faqs: c.faqs,
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Casos", path: "/casos" },
      { name: c.h1, path: `/casos/${c.slug}` },
    ],
    pageType: "WebPage",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleShell
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Casos", href: "/casos" },
          { label: c.h1, href: `/casos/${c.slug}` },
        ]}
        h1={c.h1}
        lead={c.lead}
        authorName="Guido Halley"
        notFor={c.notFor}
        faqs={c.faqs}
        related={related}
        whatsappContext={`Hola, vi el caso "${c.h1}" en misionary.dev y quiero hablar de un proyecto similar.`}
      >
        <p className="font-mono text-[11px] text-muted-foreground">
          <span className="text-foreground/70">{c.rubro}</span>
          <span className="mx-2">·</span>
          {c.modulos}
          <span className="mx-2">·</span>
          <span className="text-foreground/60">Detalle técnico: {c.stack}</span>
        </p>
        {c.sections.map((sec) => (
          <ContentSection key={sec.title} title={sec.title}>
            {sec.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </ContentSection>
        ))}
        <ContentSection title="Arquitectura y demo ficticia">
          <CasoShowcase slug={c.slug as CasoSlug} />
        </ContentSection>
      </ArticleShell>
    </>
  )
}
