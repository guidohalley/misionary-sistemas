import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Clientes } from "@/components/sections/clientes"
import { Trabajos } from "@/components/sections/trabajos"
import { Integraciones } from "@/components/sections/integraciones"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Team } from "@/components/sections/team"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { getHomeJsonLd } from "@/lib/json-ld"

export default function SistemasPage() {
  const jsonLd = getHomeJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
