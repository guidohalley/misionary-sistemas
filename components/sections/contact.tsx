"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react"

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
          "Por favor intentá nuevamente o escribinos a hola@misionary.dev",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-20 px-6 bg-[#F1F1F1]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-widest text-[#737373] font-medium mb-3">
              Contacto
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-[#262626] mb-4">
              Reservá tu asesoría gratuita
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed mb-8">
              Contanos en qué etapa está tu negocio y qué problema querés resolver.
              Te respondemos en menos de 24 horas con un diagnóstico inicial sin costo.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-[#737373]">
                <Mail size={15} className="shrink-0" />
                <span>hola@misionary.dev</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#737373]">
                <MessageCircle size={15} className="shrink-0" />
                <span>WhatsApp disponible</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#737373]">
                <MapPin size={15} className="shrink-0" />
                <span>Posadas, Misiones, Argentina</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-medium text-[#262626]"
                    htmlFor="nombre"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="h-10 rounded-md border border-[rgba(38,38,38,0.15)] bg-[#F1F1F1] px-3 text-sm text-[#262626] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[rgba(38,38,38,0.2)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-medium text-[#262626]"
                    htmlFor="empresa"
                  >
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    placeholder="Nombre de tu empresa"
                    className="h-10 rounded-md border border-[rgba(38,38,38,0.15)] bg-[#F1F1F1] px-3 text-sm text-[#262626] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[rgba(38,38,38,0.2)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium text-[#262626]"
                  htmlFor="whatsapp"
                >
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  required
                  type="tel"
                  placeholder="+54 9 ..."
                  className="h-10 rounded-md border border-[rgba(38,38,38,0.15)] bg-[#F1F1F1] px-3 text-sm text-[#262626] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[rgba(38,38,38,0.2)]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium text-[#262626]"
                  htmlFor="necesidad"
                >
                  ¿Qué necesitás?
                </label>
                <textarea
                  id="necesidad"
                  name="necesidad"
                  required
                  rows={4}
                  placeholder="Contanos brevemente el problema que querés resolver..."
                  className="rounded-md border border-[rgba(38,38,38,0.15)] bg-[#F1F1F1] px-3 py-2.5 text-sm text-[#262626] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[rgba(38,38,38,0.2)] resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="mt-1 bg-[#262626] text-[#F1F1F1] hover:bg-[#262626]/90"
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
