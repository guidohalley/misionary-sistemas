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
    a: "Un sistema junta toda la información en un solo lugar, define quién puede ver o cambiar cada cosa, hace solo las tareas repetitivas y se conecta con otras herramientas. Una planilla se desordena a medida que crecés.",
  },
  {
    q: "¿Se puede conectar con lo que ya uso?",
    a: "Sí. Conectamos tu sistema con Mercado Pago, tu web, tus planillas de Excel, portales como Tokko, email marketing y las herramientas de medición que ya usás.",
  },
  {
    q: "¿Cuánto tiempo tarda en desarrollarse un sistema?",
    a: "Depende del alcance. Trabajamos con entregas semanales para que veas y pruebes el avance desde las primeras semanas.",
  },
  {
    q: "¿El sistema puede crecer con mi negocio?",
    a: "Sí. Lo armamos por partes: empezás con lo que necesitás hoy y sumás nuevas funciones sin rehacer todo.",
  },
  {
    q: "¿Tengo que saber de tecnología?",
    a: "No. Vos nos contás cómo funciona tu negocio; nosotros nos ocupamos del sistema y te explicamos todo en simple.",
  },
  {
    q: "¿Puedo usarlo desde el celular?",
    a: "Sí. Todos los sistemas están pensados primero para el celular y funcionan en cualquier dispositivo.",
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
