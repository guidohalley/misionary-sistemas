import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArticleShell, ContentSection } from "@/components/content/article-shell"
import { CompareTable } from "@/components/content/compare-table"
import { allGuias, guia, guiaSlugs } from "@/content/guias"
import { getContentJsonLd } from "@/lib/json-ld"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return guiaSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const g = guia(slug)
    return { title: g.title, description: g.description }
  } catch {
    return {}
  }
}

export default async function GuiaPage({ params }: Props) {
  const { slug } = await params
  let g
  try {
    g = guia(slug)
  } catch {
    notFound()
  }

  const related = [
    ...g.relatedGuiaSlugs
      .map((s) => allGuias().find((x) => x.slug === s))
      .filter(Boolean)
      .map((x) => ({ label: x!.h1, href: `/guias/${x!.slug}` })),
    ...(g.relatedCaseSlug
      ? [{ label: `Caso ${g.relatedCaseSlug}`, href: `/casos/${g.relatedCaseSlug}` }]
      : []),
  ]

  const jsonLd = getContentJsonLd({
    path: `/guias/${g.slug}`,
    title: g.title,
    description: g.description,
    faqs: g.faqs,
    breadcrumbs: [
      { name: "Inicio", path: "/" },
      { name: "Guías", path: "/guias" },
      { name: g.h1, path: `/guias/${g.slug}` },
    ],
    pageType: "Article",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleShell
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Guías", href: "/guias" },
          { label: g.h1, href: `/guias/${g.slug}` },
        ]}
        h1={g.h1}
        lead={g.lead}
        authorName="Guido Halley"
        notFor={g.notFor}
        faqs={g.faqs}
        related={related}
        whatsappContext={`Hola, leí la guía "${g.h1}" en misionary.dev y quiero un diagnóstico.`}
      >
        {g.sections.map((sec) => (
          <ContentSection key={sec.title} title={sec.title}>
            {sec.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </ContentSection>
        ))}
        {g.showCompareTable && (
          <ContentSection title="Planilla vs SaaS vs a medida">
            <CompareTable />
          </ContentSection>
        )}
        {g.relatedCaseSlug && (
          <p className="text-muted-foreground">
            Ejemplo en la región:{" "}
            <Link href={`/casos/${g.relatedCaseSlug}`} className="font-medium text-foreground underline-offset-2 hover:underline">
              ver caso
            </Link>
            .
          </p>
        )}
      </ArticleShell>
    </>
  )
}
