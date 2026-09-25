import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Clientes } from "@/components/sections/clientes"
import { Trabajos } from "@/components/sections/trabajos"
import { Integraciones } from "@/components/sections/integraciones"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Team } from "@/components/sections/team"
import { FAQ, FAQS } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { CONTACT_EMAIL } from "@/lib/contact"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Misionary",
  description:
    "Software factory en Posadas, Misiones. Sistemas a medida, integraciones y operación para empresas.",
  url: "https://misionary.dev",
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Posadas",
    addressRegion: "Misiones",
    addressCountry: "AR",
  },
  areaServed: "Argentina",
  serviceType: "Desarrollo de sistemas web a medida",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function SistemasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <main>
        <Hero />
        <Clientes />
        <Trabajos />
        <Integraciones />
        <Problem />
        <HowItWorks />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
