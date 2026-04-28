"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL, getWhatsAppHref } from "@/lib/contact"
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react"

const fieldClass =
  "min-h-11 rounded-md border border-input bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"

const textareaClass =
  "min-h-[7.5rem] rounded-md border border-input bg-background px-3 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none"

export function Contact() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      toast.success("¡Consulta enviada!", {
        description:
          "Te respondemos en menos de 24 horas para coordinar la asesoría.",
      })
      ;(e.target as HTMLFormElement).reset()
    } catch {
      toast.error("Error al enviar", {
        description:
          `Por favor intentá nuevamente o escribinos a ${CONTACT_EMAIL}`,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-14 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
              Contacto
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-3 sm:mb-4 text-balance">
              Reservá tu asesoría gratuita
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Contanos en qué etapa está tu negocio y qué problema querés resolver.
              Te respondemos en menos de 24 horas con un diagnóstico inicial sin costo.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground min-h-10">
                <Mail size={15} className="shrink-0" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="underline-offset-2 hover:underline break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground min-h-10">
                <MessageCircle size={15} className="shrink-0" />
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  Contactar por WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={15} className="shrink-0" />
                <span>Posadas, Misiones, Argentina</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-foreground" htmlFor="empresa">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    placeholder="Nombre de tu empresa"
                    className={fieldClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground" htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  required
                  type="tel"
                  placeholder="+54 9 ..."
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground" htmlFor="necesidad">
                  ¿Qué necesitás?
                </label>
                <textarea
                  id="necesidad"
                  name="necesidad"
                  required
                  rows={4}
                  placeholder="Contanos brevemente el problema que querés resolver..."
                  className={textareaClass}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="mt-1 w-full md:w-auto min-h-11 touch-manipulation"
              >
                {loading ? "Enviando..." : "Reservar asesoría gratis"}
                {!loading && <ArrowRight size={16} />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
