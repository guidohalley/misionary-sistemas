"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL, getWhatsAppHref } from "@/lib/contact"

const fieldClass =
  "min-h-11 rounded-md border-[0.5px] border-foreground/25 bg-panel px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"

export function Contact() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      toast.success("¡Consulta enviada!", {
        description: "Te respondemos en menos de 24 horas para coordinar el diagnóstico.",
      })
      form.reset()
    } catch {
      toast.error("Error al enviar", {
        description: `Intentá nuevamente o escribinos a ${CONTACT_EMAIL}`,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div>
          <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-foreground">10</span>
            <span className="h-px w-6 bg-foreground/25" />
            Contacto
          </p>
          <h2 className="mb-4 text-balance text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            Reservá tu diagnóstico sin costo.
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            Contanos en qué etapa está tu negocio y qué querés resolver. Te respondemos en menos de
            24 horas.
          </p>

          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <div className="flex min-h-10 items-center gap-3">
              <Mail size={15} className="shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="break-all underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex min-h-10 items-center gap-3">
              <MessageCircle size={15} className="shrink-0" />
              <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                Contactar por WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={15} className="shrink-0" />
              <span>Posadas, Misiones, Argentina</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full min-w-0 flex-col gap-4 rounded-xl border-[0.5px] border-foreground/20 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-xs font-medium" htmlFor="nombre">
              Nombre
              <input id="nombre" name="nombre" required placeholder="Tu nombre" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-xs font-medium" htmlFor="empresa">
              Empresa
              <input id="empresa" name="empresa" placeholder="Nombre de tu empresa" className={fieldClass} />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-xs font-medium" htmlFor="whatsapp">
            WhatsApp
            <input id="whatsapp" name="whatsapp" required type="tel" placeholder="+54 9 ..." className={fieldClass} />
          </label>
          <label className="flex flex-col gap-1.5 text-xs font-medium" htmlFor="necesidad">
            ¿Qué necesitás?
            <textarea
              id="necesidad"
              name="necesidad"
              required
              rows={4}
              placeholder="Contanos brevemente qué querés resolver..."
              className={`${fieldClass} min-h-[7.5rem] resize-none py-3`}
            />
          </label>
          <Button type="submit" size="lg" disabled={loading} className="mt-1 min-h-11 w-full touch-manipulation md:w-auto md:self-start">
            {loading ? "Enviando..." : "Reservar diagnóstico"}
            {!loading && <ArrowRight size={16} />}
          </Button>
        </form>
      </div>
    </section>
  )
}
