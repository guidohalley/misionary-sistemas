import { FAQS } from "@/components/sections/faq"
import { CONTACT_EMAIL, CONTACT_TELEPHONE_E164 } from "@/lib/contact"

const SITE_URL = "https://misionary.dev"

const SERVICE_DESCRIPTION =
  "Software factory en Posadas, Misiones: diseñamos, construimos y operamos sistemas a medida e integraciones para PyMEs. misionary.dev es la línea de ingeniería y producto; no somos agencia de marketing (eso es misionary.com)."

const TEAM_PEOPLE = [
  {
    id: "guido-halley",
    name: "Guido Halley",
    jobTitle: "Co-founder · Dirección técnica",
  },
  { id: "rodolfo", name: "Rodolfo", jobTitle: "Desarrollo de sistemas" },
  {
    id: "lisandro-blanco",
    name: "Lisandro Blanco",
    jobTitle: "Desarrollo de software",
  },
  { id: "antonio", name: "Antonio", jobTitle: "Desarrollo de sistemas" },
  { id: "tomas-roetti", name: "Tomas Roetti", jobTitle: "Sitios web" },
] as const

export function getHomeJsonLd() {
  const organizationId = `${SITE_URL}/#organization`

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: "Misionary",
    url: SITE_URL,
    description: SERVICE_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_TELEPHONE_E164,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Posadas",
      addressRegion: "Misiones",
      addressCountry: "AR",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Misiones" },
      { "@type": "Country", name: "Argentina" },
    ],
    serviceType: [
      "Desarrollo de sistemas web a medida",
      "Integración de plataformas",
      "Operación de software a medida",
    ],
    employee: TEAM_PEOPLE.map((p) => ({ "@id": `${SITE_URL}/#${p.id}` })),
  }

  const people = TEAM_PEOPLE.map((p) => ({
    "@type": "Person",
    "@id": `${SITE_URL}/#${p.id}`,
    name: p.name,
    jobTitle: p.jobTitle,
    worksFor: { "@id": organizationId },
  }))

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  return {
    "@context": "https://schema.org",
    "@graph": [professionalService, ...people, faqPage],
  }
}
