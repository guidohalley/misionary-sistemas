import { SectionHeader } from "./section-header"

export const FAQS = [
  {
    q: "¿Cuánto cuesta hacer un sistema para mi empresa?",
    a:
      "El costo depende de cuántos módulos necesitás, qué integraciones hay que conectar y si hay datos históricos que migrar. En Misionary hacemos un diagnóstico sin costo para entender tu operación; después te presentamos una propuesta con alcance, etapas y presupuesto claros, sin sorpresas en el camino.",
  },
  {
    q: "¿Necesito un sistema si mi empresa es pequeña?",
    a:
      "Un sistema bien diseñado sirve también a equipos chicos: ordena la información, reduce errores de planilla y te permite delegar sin perder control. Empezamos por lo que más duele hoy y sumamos módulos cuando el negocio crece, sin obligarte a un paquete enorme desde el día uno.",
  },
  {
    q: "¿Qué diferencia hay entre un sistema web y una planilla?",
    a:
      "Un sistema web centraliza datos en un solo lugar, define quién puede ver o cambiar cada cosa, automatiza tareas repetitivas y se conecta con Mercado Pago, tu web o portales como Tokko. Una planilla de Excel se desordena, se duplica y no avisa cuando alguien cambió un número crítico.",
  },
  {
    q: "¿Se puede conectar con lo que ya uso?",
    a:
      "Sí. Integramos tu sistema con las herramientas que ya tenés: Mercado Pago, sitios web, planillas, portales inmobiliarios como Tokko, email marketing y medición analítica. Solo conectamos usos que validamos en producción; el resto lo evaluamos en el diagnóstico según tu caso.",
  },
  {
    q: "¿Cuánto tiempo tarda en desarrollarse un sistema?",
    a:
      "El plazo depende del alcance acordado. Trabajamos con entregas semanales para que veas y pruebes avances desde las primeras semanas, en lugar de esperar meses a un “gran lanzamiento”. Ajustamos prioridades en cada iteración según lo que tu operación necesite primero.",
  },
  {
    q: "¿El sistema puede crecer con mi negocio?",
    a:
      "Lo armamos por módulos: arrancás con lo indispensable y sumás funciones, usuarios o sucursales sin tirar lo ya construido. Esa arquitectura es propia de una software factory a medida, no de una plantilla genérica que te obliga a cambiar de producto cuando escalás.",
  },
  {
    q: "¿Tengo que saber de tecnología?",
    a:
      "No. Vos nos contás cómo funciona tu negocio, qué decisiones tomás cada día y qué te frustra de las planillas o herramientas actuales. Nosotros traducimos eso a un sistema, te mostramos prototipos en lenguaje simple y capacitamos a tu equipo para el uso diario.",
  },
  {
    q: "¿Puedo usarlo desde el celular?",
    a:
      "Sí. Diseñamos primero para celular: pantallas legibles, tareas rápidas y acceso seguro desde cualquier dispositivo. Tu equipo puede cargar datos o consultar estados en ruta, sin depender siempre de una computadora de escritorio en la oficina.",
  },
  {
    q: "¿Hay empresas de software en Misiones o Posadas?",
    a:
      "Sí. Misionary es una software factory con base en Posadas, Misiones. Desarrollamos sistemas a medida e integraciones para empresas del NEA y de todo Argentina. En misionary.dev mostramos nuestra línea de ingeniería; misionary.com es el sitio de marketing de la misma marca.",
  },
] as const

export function FAQ() {
  return (
    <section id="faq" className="bg-foreground/[0.025] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <SectionHeader index="09" label="Preguntas frecuentes" title="Antes de empezar." className="md:block" />
        <div className="w-full border-t-[0.5px] border-foreground/15">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group border-b-[0.5px] border-foreground/15 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-4 text-left text-sm font-medium text-balance touch-manipulation"
              >
                {q}
                <span
                  className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                >
                  ▾
                </span>
              </summary>
              <p className="pb-5 pr-1 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
