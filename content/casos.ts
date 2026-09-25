import type { FaqItem } from "@/components/content/article-shell"
import type { Slug } from "@/content/catalog"

export type CasoSection = {
  title: string
  body: string[]
}

export type CasoSlug = "fenix" | "escuela-alas" | "cooperativa-fatima" | "neutron-gym" | "intacto-welty"

export type Caso = {
  slug: CasoSlug
  catalogSlug: Slug
  title: string
  description: string
  h1: string
  lead: string
  rubro: string
  modulos: string
  stack: string
  sections: CasoSection[]
  notFor: string[]
  faqs: FaqItem[]
  relatedGuiaSlugs: string[]
  diagramAutoPlay?: string
}

export const CASOS: Caso[] = [
  {
    slug: "fenix",
    catalogSlug: "fenix",
    title: "Caso Fénix Inmobiliaria | Sistema a medida | Misionary",
    description:
      "Ecosistema para inmobiliaria: comisiones, gestión interna y web pública integrada al portal de propiedades. Software factory en Posadas.",
    h1: "Fénix Inmobiliaria: comisiones, portal y web en un ecosistema",
    lead:
      "Fénix necesitaba que la gestión interna, las comisiones de asesores y la web pública no vivan en planillas sueltas. Armamos un ecosistema que se integra al portal de catálogo que ya usaban, con carga operativa y reglas de liquidación propias. En esta página mostramos el enfoque con diagramas y datos ficticios — sin exponer información real del cliente.",
    rubro: "Inmobiliaria",
    modulos: "comisiones · web pública · carga de propiedades",
    stack: "Next · integración portal inmobiliario · operación de datos",
    sections: [
      {
        title: "Problema de negocio",
        body: [
          "Operaciones repartidas entre portal, planillas y publicación manual en la web.",
          "Comisiones difíciles de auditar por asesor.",
          "Necesidad de un equipo que mantenga el catálogo al día.",
        ],
      },
      {
        title: "Qué construimos",
        body: [
          "Panel de comisiones y caja alineado a cómo liquidan.",
          "Web que refleja propiedades sin republicar a mano.",
          "Flujo de datos desde el portal y la carga operativa hacia los módulos internos.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "Arquitectura en capas: catálogo público, gestión interna y servicios. El grafo de abajo muestra roles e integraciones confirmadas, sin hostnames ni endpoints.",
        ],
      },
    ],
    notFor: [
      "No es un producto SaaS para comprar: es un caso de implementación a medida.",
      "No incluye link al sitio del cliente ni métricas de performance.",
      "Quien busque solo fichas en portal sin comisiones probablemente no necesite este alcance.",
    ],
    faqs: [
      {
        q: "¿Puedo ver la web real de Fénix?",
        a: "No publicamos links a sitios de clientes. El specimen y el diagrama ilustran el tipo de solución con datos ficticios.",
      },
      {
        q: "¿Es replicable para otra inmobiliaria?",
        a: "El patrón sí; las reglas y integraciones se relevan en cada diagnóstico.",
      },
      {
        q: "¿Tokko es obligatorio?",
        a: "En este caso usaron ese portal; otro cliente puede traer otro catálogo o flujo distinto.",
      },
    ],
    relatedGuiaSlugs: ["sistema-para-inmobiliarias", "de-excel-a-sistema"],
    diagramAutoPlay: "propiedad",
  },
  {
    slug: "escuela-alas",
    catalogSlug: "escuela-alas",
    title: "Caso Escuela Alas | Gestión académica | Misionary",
    description:
      "Sistema de gestión académica y administrativa para una escuela en la región. Desarrollo a medida por Misionary en Posadas.",
    h1: "Escuela Alas: gestión académica y administrativa en un solo sistema",
    lead:
      "La escuela necesitaba unificar inscripciones, seguimiento académico y tareas administrativas que antes estaban repartidas. Desarrollamos un sistema web a medida con roles para el equipo interno y flujos pensados para el día a día del establecimiento. Acá mostramos la arquitectura y un specimen con datos ficticios.",
    rubro: "Educación",
    modulos: "gestión académica · administración",
    stack: "Next 16 · Express · MySQL",
    sections: [
      {
        title: "Contexto",
        body: [
          "Crecimiento de alumnos y procesos que ya no cabían en planillas.",
          "Varios actores internos con permisos distintos.",
        ],
      },
      {
        title: "Solución",
        body: [
          "Panel único para operaciones recurrentes de la escuela.",
          "Trazabilidad de cambios importantes sin depender de archivos sueltos.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "API en Express, front en Next, base MySQL. Despliegue y operación acordados con el cliente.",
        ],
      },
    ],
    notFor: [
      "No es un LMS genérico tipo Moodle empaquetado.",
      "No vendemos licencias por alumno como SaaS educativo estándar.",
      "Instituciones que solo necesitan web institucional sin gestión interna.",
    ],
    faqs: [
      {
        q: "¿Incluye portal para familias?",
        a: "Depende del alcance acordado en el proyecto; el caso cubre la operación interna principal.",
      },
      {
        q: "¿Pueden agregar módulos después?",
        a: "Sí, el modelo de factory permite evolucionar por etapas.",
      },
      {
        q: "¿Trabajan con otras escuelas?",
        a: "Sí, con relevamiento propio de cada establecimiento.",
      },
    ],
    relatedGuiaSlugs: ["de-excel-a-sistema", "desarrollo-de-software-posadas-misiones"],
  },
  {
    slug: "cooperativa-fatima",
    catalogSlug: "cooperativa-fatima",
    title: "Caso Cooperativa Fátima | Pedidos y tienda | Misionary",
    description:
      "Tienda web, pedidos y catálogo para una cooperativa. Sistema a medida con panel interno y stock alineado.",
    h1: "Cooperativa Fátima: tienda web, pedidos y catálogo coordinados",
    lead:
      "La cooperativa vendía por canales que ya no escalaban con planillas. Implementamos tienda web, flujo de pedidos y catálogo administrado desde un panel interno, con stack moderno y reglas de negocio propias del rubro. El specimen y el diagrama usan datos ficticios para mostrar cómo opera el sistema sin datos reales de socios o clientes.",
    rubro: "Cooperativa",
    modulos: "tienda web · pedidos · catálogo",
    stack: "Next 16 · NestJS · PostgreSQL",
    sections: [
      {
        title: "Necesidad",
        body: [
          "Pedidos desde la web con preparación interna clara.",
          "Catálogo y disponibilidad sin duplicar listas.",
        ],
      },
      {
        title: "Implementación",
        body: [
          "Front de tienda y backoffice en un mismo producto.",
          "Estados de pedido visibles para el equipo de la cooperativa.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "NestJS para API, PostgreSQL, front Next. Integración de pagos evaluada según canal de cobro.",
        ],
      },
    ],
    notFor: [
      "E-commerce genérico sin lógica de cooperativa o listas de precios especiales.",
      "Solo catálogo PDF sin pedidos online.",
    ],
    faqs: [
      {
        q: "¿Tienen Mercado Pago?",
        a: "Si está en el flujo acordado, se integra como en cualquier proyecto de pedidos. No detallamos aquí la configuración del cliente.",
      },
      {
        q: "¿Relación con la guía de stock?",
        a: "Sí, el patrón de inventario + pedidos es el mismo que describimos en sistema de stock y pedidos.",
      },
      {
        q: "¿Puedo comprar en la demo?",
        a: "El specimen es ilustrativo; no hay operación real en esta página.",
      },
    ],
    relatedGuiaSlugs: ["sistema-de-pedidos", "sistema-de-stock"],
  },
  {
    slug: "neutron-gym",
    catalogSlug: "neutron-gym",
    title: "Caso Neutron Gym | Socios y rutinas | Misionary",
    description:
      "Sistema para gimnasio: socios, rutinas y pantallas de sala. Software a medida en Posadas.",
    h1: "Neutron Gym: socios, rutinas y pantallas de sala",
    lead:
      "El gimnasio necesitaba administrar socios, armar rutinas y mostrar ejercicios en pantallas de la sala sin depender de planillas y videos sueltos. Construimos un sistema con panel interno y experiencia en sala, pensado para el flujo real del negocio fitness. Todo lo que ves acá es specimen y diagrama con información ficticia.",
    rubro: "Fitness",
    modulos: "rutinas · socios · pantallas de sala",
    stack: "React · Express · PostgreSQL",
    sections: [
      {
        title: "Operación",
        body: [
          "Alta y seguimiento de socios.",
          "Rutinas asignables con contenido en video en sala.",
        ],
      },
      {
        title: "Valor",
        body: [
          "Menos fricción para el staff al actualizar rutinas.",
          "Experiencia consistente en las pantallas del local.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "React en front de operación y sala, API Express, PostgreSQL.",
        ],
      },
    ],
    notFor: [
      "App de entrenamiento B2C genérica para descargar en el store.",
      "Cadena nacional con ERP corporativo ya definido.",
    ],
    faqs: [
      {
        q: "¿Los socios tienen app?",
        a: "El foco del caso es operación del gimnasio y pantallas; canales al socio se definen por proyecto.",
      },
      {
        q: "¿Contenido de video propio?",
        a: "El sistema organiza y muestra contenido acordado; no es una biblioteca de fitness genérica.",
      },
      {
        q: "¿Sirve para otro gimnasio?",
        a: "El patrón aplica; rutinas y reglas se relevan en diagnóstico.",
      },
    ],
    relatedGuiaSlugs: ["de-excel-a-sistema", "crm-para-whatsapp"],
  },
  {
    slug: "intacto-welty",
    catalogSlug: "intacto-welty",
    title: "Caso Intacto Welty | Órdenes de trabajo | Misionary",
    description:
      "Órdenes de trabajo y seguimiento de planta para industria. Sistema a medida con Turborepo, Next y Prisma.",
    h1: "Intacto Welty: órdenes de trabajo de planta con seguimiento",
    lead:
      "En industria, una orden de trabajo mal seguida frena producción y facturación. Desarrollamos un sistema para abrir, asignar y cerrar órdenes con trazabilidad, usando un monorepo moderno y permisos por rol. La demo de esta página no replica la UI real del cliente: muestra el tipo de flujo con datos ficticios.",
    rubro: "Industria",
    modulos: "órdenes de trabajo · seguimiento",
    stack: "Turborepo · Next · Prisma 7",
    sections: [
      {
        title: "Dolor",
        body: [
          "OT dispersas en papel o Excel.",
          "Poca visibilidad de estado entre planta y administración.",
        ],
      },
      {
        title: "Solución",
        body: [
          "Ciclo de vida de OT en un panel.",
          "Historial para auditoría interna sin exponer datos en público.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "Monorepo Turborepo, Next en front, Prisma sobre base relacional.",
        ],
      },
    ],
    notFor: [
      "ERP industrial completo de suite internacional.",
      "Solo sitio web institucional — existe otro ítem de portfolio tipo sitio para presencia web.",
      "Manufactura que solo necesita un ticket helpdesk genérico.",
    ],
    faqs: [
      {
        q: "¿Integran con ERP existente?",
        a: "Se evalúa en diagnóstico; solo prometemos integraciones validadas.",
      },
      {
        q: "¿Móvil en planta?",
        a: "PWA o vistas responsive según alcance; se acuerda con operación en terreno.",
      },
      {
        q: "¿Relación con Intacto Welty web?",
        a: "En el catálogo, la web institucional es un sitio aparte; este caso es el sistema de OT.",
      },
    ],
    relatedGuiaSlugs: ["de-excel-a-sistema", "desarrollo-de-software-posadas-misiones"],
  },
]

export function allCasos(): Caso[] {
  return CASOS
}

export function caso(slug: string): Caso {
  const found = CASOS.find((c) => c.slug === slug)
  if (!found) throw new Error(`Caso desconocido: ${slug}`)
  return found
}

export function casoSlugs(): CasoSlug[] {
  return CASOS.map((c) => c.slug)
}
