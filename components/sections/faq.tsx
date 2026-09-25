import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeader } from "./section-header"

export const FAQS = [
  {
    q: "¿Cuánto cuesta hacer un sistema para mi empresa?",
    a: "Depende de la complejidad y los módulos. Hacemos un diagnóstico sin costo y te presentamos una propuesta con alcance y presupuesto claros.",
  },
  {
    q: "¿Necesito un sistema si mi empresa es pequeña?",
    a: "Sí. Un sistema bien diseñado te da control, reduce errores y te permite delegar sin perder visibilidad, sin importar el tamaño.",
  },
  {
    q: "¿Qué diferencia hay entre un sistema web y una planilla?",
    a: "Un sistema centraliza la información, controla permisos por usuario, automatiza tareas repetitivas y se conecta con otras herramientas. Una planilla no escala ni tiene control de acceso real.",
  },
  {
    q: "¿Se puede integrar con las herramientas que ya uso?",
    a: "Sí. Integramos con plataformas de pago, CRMs, catálogos externos, email marketing, analytics y cualquier servicio con API. Ver la sección Integraciones.",
  },
  {
    q: "¿Cuánto tiempo tarda en desarrollarse un sistema?",
    a: "Depende del alcance. Trabajamos con entregas semanales para que veas y pruebes el avance desde las primeras semanas.",
  },
  {
    q: "¿El sistema puede crecer con mi negocio?",
    a: "Diseñamos con arquitectura modular: empezás con los módulos que necesitás hoy y sumás funcionalidades sin rehacer todo.",
  },
  {
    q: "¿Puedo usarlo desde el celular?",
    a: "Todos los sistemas son mobile-first y funcionan en cualquier dispositivo.",
  },
  {
    q: "¿Hay empresas de software en Misiones o Posadas?",
    a: "Sí, somos Misionary. Estamos en Posadas, Misiones, y trabajamos con empresas de todo el NEA y Argentina.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-foreground/[0.025] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <SectionHeader index="09" label="Preguntas frecuentes" title="Antes de empezar." className="md:block" />
        <Accordion type="single" collapsible className="w-full border-t-[0.5px] border-foreground/15">
          {FAQS.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`item-${i}`} className="border-b-[0.5px] border-foreground/15">
              <AccordionTrigger className="min-h-12 gap-3 py-4 text-left text-sm font-medium text-balance hover:no-underline touch-manipulation [&>svg]:shrink-0">
                {q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-1 text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
