import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { LogosStrip } from "@/components/sections/logos-strip"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Trabajos } from "@/components/sections/trabajos"
import { Testimonials } from "@/components/sections/testimonials"
import { Team } from "@/components/sections/team"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { CONTACT_EMAIL } from "@/lib/contact"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Misionary",
  description:
    "Agencia de software y sistemas a medida para empresas. Desarrollamos sistemas web personalizados para automatizar y escalar tu negocio.",
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
  priceRange: "$$",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta hacer un sistema para mi empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo depende de la complejidad y las funcionalidades requeridas. Ofrecemos un diagnóstico gratuito donde evaluamos tu caso y te presentamos una propuesta con rangos claros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito un sistema si mi empresa es pequeña?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Las empresas pequeñas que adoptan sistemas temprano escalan mucho más rápido. Un sistema bien diseñado te da control, reduce errores y te permite delegar sin perder visibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en desarrollarse un sistema?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un sistema de gestión inicial puede estar listo en 4 a 8 semanas. Los proyectos más grandes pueden tomar 3 a 6 meses. Trabajamos con entregas semanales.",
      },
    },
    {
      "@type": "Question",
      name: "¿El sistema puede integrarse con WhatsApp o facturación electrónica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Podemos integrar con la API de WhatsApp Business, facturación electrónica AFIP, plataformas de pago y cualquier API externa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay empresas de software en Misiones o Posadas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, somos Misionary. Estamos basados en Posadas, Misiones y trabajamos con empresas de todo el NEA y Argentina.",
      },
    },
  ],
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

      {/* 01 — Navbar sticky */}
      <Navbar />

      <main>
        {/* 02 — Hero */}
        <Hero />

        {/* 03 — Logos strip */}
        <LogosStrip />

        {/* 04 — Problem */}
        <Problem />

        {/* 05 — How it works */}
        <HowItWorks />

        {/* 06 — Trabajos / Portfolio */}
        <Trabajos />

        {/* 07 — Testimonials masonry */}
        <Testimonials />

        {/* 08 — Team */}
        <Team />

        {/* 09 — FAQ */}
        <FAQ />

        {/* 10 — Contact */}
        <Contact />
      </main>

      {/* 11 — Footer */}
      <Footer />
    </>
  )
}
