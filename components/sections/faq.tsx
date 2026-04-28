"use client"

import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    q: "¿Cuánto cuesta hacer un sistema para mi empresa?",
    a: "El costo depende de la complejidad y las funcionalidades requeridas. Ofrecemos un diagnóstico gratuito donde evaluamos tu caso y te presentamos una propuesta con rangos claros. Los proyectos van desde sistemas simples de gestión hasta plataformas complejas con múltiples módulos.",
  },
  {
    q: "¿Necesito un sistema si mi empresa es pequeña?",
    a: "Sí. De hecho, las empresas pequeñas que adoptan sistemas temprano escalan mucho más rápido. Un sistema bien diseñado te da control, reduce errores y te permite delegar sin perder visibilidad, sin importar el tamaño.",
  },
  {
    q: "¿Qué diferencia hay entre un sistema web y una planilla de Excel?",
    a: "Un sistema web centraliza la información en tiempo real, permite acceso desde cualquier dispositivo, automatiza procesos repetitivos, controla permisos por usuario y genera reportes automáticos. Excel no escala, no tiene control de acceso real y es altamente propenso a errores humanos.",
  },
  {
    q: "¿El sistema puede integrarse con WhatsApp o facturación electrónica?",
    a: "Sí. Podemos integrar el sistema con la API de WhatsApp Business para notificaciones automáticas, con sistemas de facturación electrónica (AFIP), plataformas de pago y cualquier API externa que necesites.",
  },
  {
    q: "¿Cuánto tiempo tarda en desarrollarse un sistema?",
    a: "Depende de la complejidad. Un sistema de gestión inicial puede estar listo en 4 a 8 semanas. Los proyectos más grandes con múltiples módulos pueden tomar 3 a 6 meses. Trabajamos con entregas semanales para que nunca pierdas visibilidad del avance.",
  },
  {
    q: "¿El sistema puede escalar si mi negocio crece?",
    a: "Diseñamos todos nuestros sistemas con arquitectura modular y escalable. Podés empezar con los módulos que necesitás hoy y agregar funcionalidades en el futuro sin rehacer todo desde cero.",
  },
  {
    q: "¿Puedo acceder al sistema desde el celular?",
    a: "Todos los sistemas que desarrollamos son responsive y funcionan en cualquier dispositivo. También desarrollamos apps móviles nativas si el caso de uso lo requiere.",
  },
  {
    q: "¿Hay empresas de software en Misiones o Posadas?",
    a: "Sí, somos Misionary. Estamos basados en Posadas, Misiones y trabajamos con empresas de todo el NEA y Argentina. Tener un equipo local significa comunicación directa, sin diferencias horarias y con contexto real de la región.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-20 px-4 sm:px-6 bg-foreground/[0.04]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-xl mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground text-balance">
            Todo lo que necesitás saber antes de empezar
          </h2>
        </motion.div>

        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-foreground/12"
              >
                <AccordionTrigger className="min-h-12 py-4 text-left text-sm font-medium text-foreground hover:no-underline hover:text-foreground/80 text-balance gap-3 touch-manipulation [&>svg]:shrink-0">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pr-1">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
