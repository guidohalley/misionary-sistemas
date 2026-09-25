import type { FaqItem } from "@/components/content/article-shell"

export type GuiaSection = {
  title: string
  body: string[]
}

export type Guia = {
  slug: string
  title: string
  description: string
  h1: string
  lead: string
  sections: GuiaSection[]
  notFor: string[]
  faqs: FaqItem[]
  relatedGuiaSlugs: string[]
  relatedCaseSlug?: string
  showCompareTable?: boolean
}

export const GUIAS: Guia[] = [
  {
    slug: "sistema-para-inmobiliarias",
    title: "Sistema para inmobiliarias | CRM y operación | Misionary",
    description:
      "Qué debe resolver un sistema para una inmobiliaria en Argentina: propiedades, asesores, comisiones y web conectada. Cuándo un CRM enlatado alcanza y cuándo conviene a medida.",
    h1: "Sistema para inmobiliarias: operación, comisiones y catálogo en un solo lugar",
    lead:
      "Una inmobiliaria no necesita “un CRM más”: necesita que propiedades, asesores, comisiones y la web pública hablen entre sí. En la práctica eso suele implicar un portal de catálogo que ya usan (por ejemplo Tokko Broker), un panel interno y reglas de liquidación propias. En Misionary diseñamos ese ecosistema a medida cuando el enlatado no cubre cómo trabajan ustedes.",
    sections: [
      {
        title: "Qué suele pedir una inmobiliaria",
        body: [
          "Carga y mantenimiento de propiedades sin duplicar trabajo entre portal, planillas y web.",
          "Seguimiento de operaciones y comisiones por asesor, con criterios que cambian según el tipo de venta o alquiler.",
          "Sitio público que se actualiza cuando cambia el stock, sin que marketing tenga que republicar a mano.",
        ],
      },
      {
        title: "Portal + gestión interna",
        body: [
          "Muchas inmobiliarias en Argentina ya operan con un portal de propiedades. El sistema a medida no reemplaza eso a ciegas: se integra al flujo real — datos que entran por el portal o por carga operativa y salen a comisiones, reportes y web.",
          "En un caso de la región unimos gestión interna, web pública y el portal que ya usaban, con un equipo de carga que mantiene la información al día.",
        ],
      },
      {
        title: "Detalle técnico (sin humo)",
        body: [
          "Stack web moderno, APIs hacia el portal confirmado y bases de datos según volumen y roles. Sin prometer integraciones que no estén validadas: primero mapeamos el flujo con ustedes y después dibujamos el grafo de sistemas.",
        ],
      },
    ],
    notFor: [
      "Si solo buscan publicar fichas en un portal y no necesitan comisiones ni reglas propias, muchas veces alcanza el producto del portal o un CRM genérico.",
      "No vendemos ni implementamos Tango, Xubio ni paquetes contables enlatados.",
      "No hacemos “plantillas de inmobiliaria” sin entender su operación de asesores y liquidaciones.",
    ],
    faqs: [
      {
        q: "¿Reemplazan a Tokko u otro portal?",
        a: "No necesariamente. Diseñamos alrededor del portal que ya usan cuando tiene sentido: el sistema interno y la web consumen y devuelven datos según el flujo acordado, sin duplicar catálogo en tres lugares.",
      },
      {
        q: "¿Pueden empezar solo con comisiones?",
        a: "Sí, si el alcance está acotado. Igual el diagnóstico define si conviene un módulo único o un ecosistema que evite retrabajo después.",
      },
      {
        q: "¿Trabajan fuera de Misiones?",
        a: "Sí, en Argentina. El equipo está en Posadas; reuniones remotas y entregas iterativas son el formato habitual.",
      },
    ],
    relatedGuiaSlugs: ["crm-para-whatsapp", "de-excel-a-sistema"],
    relatedCaseSlug: "fenix",
  },
  {
    slug: "crm-para-whatsapp",
    title: "CRM para WhatsApp | Atención y seguimiento | Misionary",
    description:
      "Cómo ordenar ventas y consultas por WhatsApp sin perder contexto: CRM ligado a tu operación, integraciones y automatización con partners como Botssy.",
    h1: "CRM para WhatsApp: seguimiento comercial sin perder el hilo",
    lead:
      "WhatsApp es donde cierran muchas PyMEs en Argentina, pero el chat no es un CRM: se pierden precios, estados y responsables. Un CRM para WhatsApp bien hecho registra conversaciones, etapas y datos del cliente en el mismo sistema que usan ventas, stock o pedidos. En Misionary lo integramos a tu operación real — a veces con herramientas de email y automatización de partners como Botssy cuando el flujo lo pide.",
    sections: [
      {
        title: "Qué problema resuelve",
        body: [
          "Consultas que quedan en el celular de un vendedor.",
          "Precios y promociones que se repiten a mano.",
          "Nadie sabe en qué etapa está cada oportunidad.",
        ],
      },
      {
        title: "WhatsApp + sistema propio",
        body: [
          "No vendemos un “plugin mágico”: conectamos APIs oficiales o proveedores validados al panel que ya usan — pedidos, socios, inscripciones, lo que corresponda.",
          "Para campañas y secuencias de email marketing trabajamos con partners; Botssy es un ejemplo cuando el cliente ya lo usa o lo necesita.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "Webhooks, colas y permisos por rol. El grafo de integraciones se documenta antes de codear; solo dibujamos aristas con usos confirmados.",
        ],
      },
    ],
    notFor: [
      "Si solo quieren un chatbot genérico sin atarlo a stock, precios o contratos internos.",
      "No somos revendedores de WhatsApp Business API: implementamos sobre proveedores y políticas que ustedes ya tengan o elijan.",
      "Quien busque un CRM “gratis” de catálogo Capterra probablemente no necesita factory a medida todavía.",
    ],
    faqs: [
      {
        q: "¿Necesito número nuevo?",
        a: "Depende del proveedor y de si migran línea comercial. Lo revisamos en el diagnóstico con su operación actual.",
      },
      {
        q: "¿Pueden integrar Botssy?",
        a: "Sí, cuando el flujo incluye email o automatización y el cliente usa o quiere ese partner. Es el único link externo de partner que mostramos en el sitio.",
      },
      {
        q: "¿Reemplaza a un CRM de escritorio?",
        a: "Puede convivir o reemplazar según alcance. La decisión sale del mapa de procesos, no de un checklist de features.",
      },
    ],
    relatedGuiaSlugs: ["sistema-de-pedidos", "integrar-mercado-pago"],
    showCompareTable: true,
  },
  {
    slug: "sistema-de-stock",
    title: "Sistema de stock para tu negocio | Misionary",
    description:
      "Control de stock, ventas y catálogo cuando Excel o el kiosco enlatado ya no alcanzan. Sistemas a medida para comercios y cooperativas en Argentina.",
    h1: "Sistema de stock: inventario alineado con cómo vendés",
    lead:
      "“Sistema de stock” en Google suele mezclar kioscos, códigos de barra y facturación enlatada. En la práctica muchas PyMEs necesitan algo intermedio: saber qué hay en depósito y en sucursal, descontar por pedido web o mostrador y no duplicar listas en Excel. Cuando las reglas son propias — varias listas de precios, unidades raras, retiros en tienda — armamos el módulo de stock dentro de un sistema a medida.",
    sections: [
      {
        title: "Señales de que la planilla ya no alcanza",
        body: [
          "Más de una persona actualiza cantidades y se pisan.",
          "El catálogo web no refleja lo que hay en el depósito.",
          "Compras y ventas usan archivos distintos.",
        ],
      },
      {
        title: "Stock + pedidos + catálogo",
        body: [
          "En comercios y cooperativas solemos unir tienda o panel de pedidos con inventario. Un solo origen de verdad para cantidades y productos publicados.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "APIs REST, bases relacionales y permisos por sucursal o rol. Integración con medios de pago cuando el flujo de venta lo exige.",
        ],
      },
    ],
    notFor: [
      "Kiosco estándar con lector de código de barra y sin reglas raras: suele alcanzar un producto enlatado.",
      "No implementamos Tango Retail ni similares como proyecto llave en mano genérico.",
      "Si solo quieren un Excel “un poco mejor”, no hace falta una factory.",
    ],
    faqs: [
      {
        q: "¿Hacen código de barras?",
        a: "Si forma parte del flujo acordado, sí. No es obligatorio en todos los rubros.",
      },
      {
        q: "¿Facturación electrónica incluida?",
        a: "Solo si está en alcance y con proveedor fiscal validado. No prometemos ARCA genérico sin diagnóstico.",
      },
      {
        q: "¿Pueden migrar desde Excel?",
        a: "Sí, como parte de un proyecto mayor. La guía de Excel a sistema describe el enfoque.",
      },
    ],
    relatedGuiaSlugs: ["sistema-de-pedidos", "de-excel-a-sistema"],
    relatedCaseSlug: "cooperativa-fatima",
  },
  {
    slug: "sistema-de-pedidos",
    title: "Sistema de pedidos para comercios | Misionary",
    description:
      "Pedidos web, mostrador y backoffice en un solo sistema. Para cooperativas y comercios que superaron WhatsApp + planilla.",
    h1: "Sistema de pedidos: del mostrador a la cocina o depósito sin fricción",
    lead:
      "Un sistema de pedidos bien hecho no es solo un carrito: es estados, roles, stock y avisos según cómo entrega el negocio. Cooperativas con tienda web, gastronomía con retiro o comercios con lista de precios por cliente necesitan reglas que un SaaS genérico no trae. Diseñamos el flujo completo — catálogo, pedido, preparación y cierre — en un panel que el equipo usa todos los días.",
    sections: [
      {
        title: "Componentes habituales",
        body: [
          "Catálogo con variantes y disponibilidad.",
          "Panel interno para aceptar, preparar y entregar.",
          "Notificaciones al cliente por el canal que ya usen.",
        ],
      },
      {
        title: "Operación real",
        body: [
          "Priorizamos lo que pasa después del clic: quién ve el pedido, cómo baja stock y qué pasa si cancelan. Eso define la arquitectura más que la pantalla bonita del checkout.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "Next.js o stack acordado, API de pagos si aplica, base de datos con trazabilidad de estados.",
        ],
      },
    ],
    notFor: [
      "Tienda en Tienda Nube o Shopify sin lógica interna especial: a veces alcanza el e-commerce del proveedor.",
      "No somos agencia que solo monta plantillas de delivery.",
      "Pedidos de una sola línea por WhatsApp sin panel interno: puede alcanzar un CRM liviano primero.",
    ],
    faqs: [
      {
        q: "¿Incluye app móvil?",
        a: "Podemos hacer PWA o app según alcance. Se define en el diagnóstico, no viene “de regalo” en todos los proyectos.",
      },
      {
        q: "¿Mercado Pago?",
        a: "Sí, cuando el flujo de cobro lo requiere. Ver guía de integración de Mercado Pago.",
      },
      {
        q: "¿Cuánto tarda?",
        a: "Depende de módulos e integraciones. Damos etapas después del relevamiento, sin fechas inventadas en esta página.",
      },
    ],
    relatedGuiaSlugs: ["sistema-de-stock", "integrar-mercado-pago"],
    relatedCaseSlug: "cooperativa-fatima",
  },
  {
    slug: "de-excel-a-sistema",
    title: "De Excel a un sistema | Cuándo migrar | Misionary",
    description:
      "Señales de que la planilla ya es infraestructura crítica y cómo migrar a un sistema a medida sin frenar la operación.",
    h1: "De Excel a sistema: cuándo dejar de parchear la planilla",
    lead:
      "Excel es excelente para analizar; es frágil cuando es el único registro de clientes, stock o comisiones. Migrar no es “pasar todo a un software” de un día: es elegir qué datos son fuente de verdad, quién los toca y qué integraciones necesitan desde el día uno. En Misionary acompañamos ese paso con relevamiento, prototipos con datos ficticios y entregas por etapas para no frenar la operación.",
    sections: [
      {
        title: "Señales de alerta",
        body: [
          "Versiones “final_final2.xlsx” en el drive.",
          "Macros que solo entiende una persona.",
          "Errores de comisión o stock que se descubren tarde.",
        ],
      },
      {
        title: "Cómo migramos sin drama",
        body: [
          "Mapeamos hojas y procesos, no solo columnas.",
          "Priorizamos el módulo que más dolor quita.",
          "Convivencia temporal Excel + sistema cuando hace falta.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "Importaciones controladas, validaciones en servidor y permisos. Nada de copiar fórmulas a ciegas.",
        ],
      },
    ],
    notFor: [
      "Análisis financiero puntual que seguirá viviendo en Excel: está bien.",
      "Quien busca un ERP enlatado con 500 pantallas prefabricadas.",
      "Migración “en un fin de semana” sin dueño de proceso del lado del cliente.",
    ],
    faqs: [
      {
        q: "¿Borramos Excel el día uno?",
        a: "Casi nunca. Se apaga por módulo cuando el equipo confía en el sistema.",
      },
      {
        q: "¿Pueden leer nuestras planillas actuales?",
        a: "Sí, para relevar. La estructura final se diseña para operar, no para imitar celdas.",
      },
      {
        q: "¿Y si después quiero más módulos?",
        a: "Ese es el modelo: sistema que crece con el negocio, no licencia rígida.",
      },
    ],
    relatedGuiaSlugs: ["cuanto-cuesta-un-software-para-empresas", "sistema-de-stock"],
    showCompareTable: true,
  },
  {
    slug: "integrar-mercado-pago",
    title: "Integrar Mercado Pago a tu sistema | Misionary",
    description:
      "No es instalar un plugin: es cobrar en tu web o panel con checkout, webhooks y conciliación. Proveedor de desarrollo en Argentina.",
    h1: "Integrar Mercado Pago: cobros dentro de tu operación, no sueltos en un plugin",
    lead:
      "En Google, “integrar Mercado Pago” muestra tutoriales de Tienda Nube o Shopify. Si ya tenés sistema propio o a medida, lo que necesitás es otro: Checkout API o preferencias, webhooks de pago aprobado, estados de pedido y conciliación con tu panel. En Misionary implementamos esa capa sobre el software que usan — sin reemplazar tu negocio por una plantilla de e-commerce.",
    sections: [
      {
        title: "Qué implica en la práctica",
        body: [
          "Cuenta de vendedor y credenciales en ambiente de prueba y producción.",
          "Flujo de éxito, pendiente y rechazo reflejado en tu base de datos.",
          "Reintentos y seguridad en el servidor, no solo en el front.",
        ],
      },
      {
        title: "Más allá del botón de pago",
        body: [
          "Muchas veces el dolor está después: marcar pedido pagado, liberar stock, avisar por WhatsApp o email. Eso se diseña junto con el módulo de pedidos o facturación.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "SDK o REST de Mercado Pago, endpoints propios, idempotencia en webhooks. Documentación oficial como referencia; implementación adaptada a tu stack.",
        ],
      },
    ],
    notFor: [
      "Montar una tienda estándar en Tienda Nube sin sistema propio: seguí la documentación del proveedor.",
      "No somos soporte oficial de Mercado Pago.",
      "Cobro solo en efectivo sin intención de digitalizar: no hace falta integración.",
    ],
    faqs: [
      {
        q: "¿Trabajan con Checkout Pro o API?",
        a: "Según UX y reglas del negocio. Lo definimos en alcance.",
      },
      {
        q: "¿Cuotas y medios de pago?",
        a: "Lo habilita tu cuenta MP y la configuración acordada en el checkout.",
      },
      {
        q: "¿Y otros medios?",
        a: "Evaluamos MODO u otros si el flujo lo pide; misma regla: solo integraciones validadas.",
      },
    ],
    relatedGuiaSlugs: ["sistema-de-pedidos", "crm-para-whatsapp"],
  },
  {
    slug: "cuanto-cuesta-un-software-para-empresas",
    title: "Cuánto cuesta un software para empresas | Factores | Misionary",
    description:
      "Qué mueve el precio de un sistema a medida en Argentina: alcance, integraciones, usuarios y operación. Sin rangos inventados — diagnóstico y propuesta clara.",
    h1: "Cuánto cuesta un software para empresas: qué define el presupuesto",
    lead:
      "No hay una cifra única: un módulo de pedidos no es lo mismo que un ecosistema con portal inmobiliario, comisiones y web pública. El costo depende del alcance funcional, cantidad de integraciones, perfiles de usuario, migración de datos y si necesitás operación continua después del go-live. En Misionary cotizamos después de un diagnóstico — publicamos factores, no rangos de marketing copiados de blogs ajenos.",
    sections: [
      {
        title: "Drivers de costo",
        body: [
          "Módulos y complejidad de reglas de negocio.",
          "Integraciones (pagos, portales, WhatsApp, ERP).",
          "Cantidad de roles, sucursales y ambientes.",
          "Migración desde Excel u otros sistemas.",
          "Soporte, hosting y evolución post-lanzamiento.",
        ],
      },
      {
        title: "SaaS vs a medida (económico)",
        body: [
          "El SaaS reparte el costo en muchos clientes; la cuota es predecible pero el producto es rígido.",
          "A medida concentra inversión al inicio y te da propiedad del flujo; el mantenimiento es un acuerdo explícito, no una sorpresa de “customización” cara.",
        ],
      },
      {
        title: "Cómo cotizamos",
        body: [
          "Diagnóstico sin costo, propuesta por etapas con entregables verificables. Sin letra chica de horas infinitas: alcance acotado por sprint o fase.",
        ],
      },
    ],
    notFor: [
      "Quien solo quiere el número más bajo sin relevar proceso.",
      "Comparar con “desde $X” de agencias que no conocen tu operación.",
      "Proyectos sin dueño interno que priorice requisitos.",
    ],
    faqs: [
      {
        q: "¿Publican tabla de precios?",
        a: "No. Cada operación es distinta; los rangos en internet suelen ser genéricos o de otro mercado.",
      },
      {
        q: "¿Forma de pago?",
        a: "Por etapas atadas a entregas. Los detalles van en la propuesta comercial.",
      },
      {
        q: "¿Mantenimiento obligatorio?",
        a: "Recomendamos operación para software en producción; el alcance se acuerda — no es un vínculo oculto.",
      },
    ],
    relatedGuiaSlugs: ["de-excel-a-sistema", "desarrollo-de-software-posadas-misiones"],
    showCompareTable: true,
  },
  {
    slug: "desarrollo-de-software-posadas-misiones",
    title: "Desarrollo de software en Posadas, Misiones | Misionary",
    description:
      "Software factory en Posadas: sistemas a medida e integraciones para PyMEs. misionary.dev es ingeniería; misionary.com es marketing.",
    h1: "Desarrollo de software en Posadas y Misiones",
    lead:
      "En Posadas casi no aparece “software factory” en Google; sí aparecen directorios viejos y sistemas enlatados. Misionary es un equipo local que diseña, construye y opera software a medida para empresas de la región y del resto de Argentina. Este sitio, misionary.dev, es la línea de ingeniería y producto; misionary.com es la agencia de marketing — no son lo mismo ni compiten por el mismo pedido.",
    sections: [
      {
        title: "Qué hacemos acá",
        body: [
          "Sistemas web a medida, integraciones y operación.",
          "Casos en educación, inmobiliaria, industria, fitness y cooperativas — siempre con datos ficticios en el sitio.",
          "Trabajo híbrido: reuniones presenciales en Posadas cuando suma, remoto el resto.",
        ],
      },
      {
        title: "Para PyMEs, no para corporativo global",
        body: [
          "No somos Globant ni body shop offshore. Factory chica, código que queda del lado del cliente, foco en procesos que el enlatado no cubre.",
        ],
      },
      {
        title: "Detalle técnico",
        body: [
          "Next.js, TypeScript, bases relacionales, APIs y despliegue en nube. Cumplimiento con normativa de IA de Misiones cuando el proyecto lo involucra.",
        ],
      },
    ],
    notFor: [
      "Proyectos de solo diseño web sin sistema detrás — eso es misionary.com.",
      "Outsourcing masivo sin contacto con quien opera el negocio.",
      "Quien busca “programador freelance por hora” sin equipo que mantenga producción.",
    ],
    faqs: [
      {
        q: "¿Solo trabajan en Misiones?",
        a: "El equipo está en Posadas; clientes en toda Argentina. Lo local es cercanía, no límite geográfico.",
      },
      {
        q: "¿Dónde quedan las oficinas?",
        a: "Operamos desde Posadas, Misiones. Dirección pública fina se confirma en contacto; en schema usamos localidad y provincia.",
      },
      {
        q: "¿Por qué .dev y no .com?",
        a: ".dev es la factory de sistemas; .com es marketing y comunicación. Esta página es la primera que deberías citar para desarrollo a medida.",
      },
    ],
    relatedGuiaSlugs: ["cuanto-cuesta-un-software-para-empresas", "sistema-para-inmobiliarias"],
  },
]

export function allGuias(): Guia[] {
  return GUIAS
}

export function guia(slug: string): Guia {
  const found = GUIAS.find((g) => g.slug === slug)
  if (!found) throw new Error(`Guía desconocida: ${slug}`)
  return found
}

export function guiaSlugs(): string[] {
  return GUIAS.map((g) => g.slug)
}
