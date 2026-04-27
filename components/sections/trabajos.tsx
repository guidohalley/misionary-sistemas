"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const PROJECTS = [
  {
    client: "Fénix Comisiones",
    rubro: "Inmobiliaria",
    description:
      "Sistema de gestión de comisiones, liquidaciones y seguimiento de operaciones para inmobiliaria con múltiples asesores.",
    metric: "−70% tiempo en liquidaciones",
  },
  {
    client: "Cooperativa Fátima",
    rubro: "Cooperativa",
    description:
      "Sistema de gestión interna de socios, aportes y reportes financieros para una cooperativa regional.",
    metric: "Digitalización completa",
  },
  {
    client: "Hotel Grand Lago",
    rubro: "Hospitalidad",
    description:
      "Sistema de reservas online, gestión de habitaciones y check-in digital para hotel boutique.",
    metric: "Reservas 24/7 online",
  },
  {
    client: "Sistema Prestamista",
    rubro: "Fintech",
    description:
      "Plataforma de gestión de préstamos, cuotas y cobranza para prestamistas independientes y financieras.",
    metric: "Control total de cartera",
  },
  {
    client: "GreenSAP",
    rubro: "Agtech",
    description:
      "Sistema de trazabilidad y gestión de producción agroindustrial con reportes de cumplimiento normativo.",
    metric: "Trazabilidad end-to-end",
  },
  {
    client: "Misionary",
    rubro: "SaaS",
    description:
      "Plataforma interna de gestión de proyectos, clientes y facturación para la propia operación de Misionary.",
    metric: "Infraestructura escalable",
  },
  {
    client: "Recibito",
    rubro: "Retail",
    description:
      "Sistema de punto de venta con comprobantes digitales, stock e historial de clientes para comercios.",
    metric: "−80% errores de caja",
  },
  {
    client: "Rutas Intacto",
    rubro: "Logística",
    description:
      "Sistema de gestión logística con asignación de rutas, tracking de envíos y reportes de eficiencia.",
    metric: "Rutas optimizadas en tiempo real",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

export function Trabajos() {
  return (
    <section id="trabajos" className="py-20 px-6 bg-[#F1F1F1]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-[#737373] font-medium mb-3">
              Nuestros trabajos
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-[#262626]">
              Más de 10 empresas con resultados reales
            </h2>
          </div>
          <p className="text-sm text-[#737373] max-w-xs">
            Cada sistema fue construido desde cero para resolver un problema
            específico de negocio.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROJECTS.map(({ client, rubro, description, metric }) => (
            <motion.div
              key={client}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group border border-[rgba(38,38,38,0.12)] rounded-xl p-6 hover:border-[rgba(38,38,38,0.3)] bg-[#F1F1F1] cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge
                  variant="outline"
                  className="text-xs border-[rgba(38,38,38,0.2)] text-[#737373]"
                >
                  {rubro}
                </Badge>
                <ArrowUpRight
                  size={14}
                  className="text-[#737373]/40 group-hover:text-[#262626] transition-colors"
                />
              </div>
              <h3 className="text-sm font-medium text-[#262626] mb-2">{client}</h3>
              <p className="text-xs text-[#737373] leading-relaxed mb-4">
                {description}
              </p>
              <div className="pt-4 border-t border-[rgba(38,38,38,0.12)]">
                <span className="text-xs font-medium text-[#262626]">{metric}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
