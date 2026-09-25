/**
 * Allowlist única del portfolio. Solo lo que figura acá puede aparecer en el sitio.
 * Para sumar un ítem: agregar una entrada (y, si es `sistema` o `propio`, su diagrama en
 * `content/diagramas`). Reglas: sin métricas de clientes, sin links a sitios de clientes;
 * `link` solo se admite en entradas `partner`.
 */

type Base = {
  slug: string
  nombre: string
  rubro?: string
  logo?: string
}

export type CatalogEntry =
  | (Base & { tipo: "sistema"; nivel: 1 | 2 })
  | (Base & { tipo: "propio" })
  | (Base & { tipo: "plataforma" })
  | (Base & { tipo: "sitio" })
  | (Base & { tipo: "partner"; link: `https://${string}` })

export const CATALOG = [
  {
    slug: "fenix",
    tipo: "sistema",
    nivel: 1,
    nombre: "Fénix Inmobiliaria",
    rubro: "Inmobiliaria",
    logo: "https://cdn.misionary.misionary.com.ar/brands/fenix-inmobiliaria.png",
  },
  { slug: "escuela-alas", tipo: "sistema", nivel: 2, nombre: "Escuela Alas", rubro: "Educación" },
  { slug: "cooperativa-fatima", tipo: "sistema", nivel: 2, nombre: "Cooperativa Fátima", rubro: "Cooperativa" },
  { slug: "neutron-gym", tipo: "sistema", nivel: 2, nombre: "Neutron Gym", rubro: "Fitness" },
  { slug: "intacto-welty", tipo: "sistema", nivel: 2, nombre: "Intacto Welty", rubro: "Industria" },
  { slug: "erp-misionary", tipo: "propio", nombre: "ERP Misionary", rubro: "Gestión empresarial" },
  { slug: "twenty", tipo: "plataforma", nombre: "Twenty CRM" },

  { slug: "greensap", tipo: "sitio", nombre: "GreenSAP", rubro: "Agroindustria" },
  { slug: "recibito", tipo: "sitio", nombre: "Recibito", rubro: "Comercio" },
  { slug: "hotel-grand-lago", tipo: "sitio", nombre: "Hotel Grand Lago", rubro: "Hotelería" },
  { slug: "transrio-turismo", tipo: "sitio", nombre: "Transrio Turismo", rubro: "Turismo" },
  {
    slug: "enerbio",
    tipo: "sitio",
    nombre: "EnerBio",
    rubro: "Institucional",
    logo: "https://cdn.misionary.misionary.com.ar/brands/enerbio.png",
  },
  { slug: "intacto-welty-web", tipo: "sitio", nombre: "Intacto Welty", rubro: "Industria" },
  {
    slug: "amid-misiones",
    tipo: "sitio",
    nombre: "AMID Misiones",
    rubro: "Institucional",
    logo: "https://cdn.misionary.misionary.com.ar/brands/amid.png",
  },
  { slug: "aaron-ortas", tipo: "sitio", nombre: "Aaron Ortas", rubro: "Inmobiliaria" },
  { slug: "epsa", tipo: "sitio", nombre: "EPSA", rubro: "Institucional" },
  { slug: "rio-uruguay", tipo: "sitio", nombre: "Río Uruguay", rubro: "Landing" },

  { slug: "botssy", tipo: "partner", nombre: "Botssy", rubro: "Email marketing y automatización", link: "https://botssy.com/" },
] as const satisfies readonly CatalogEntry[]

export type Slug = (typeof CATALOG)[number]["slug"]

type Entry<T extends CatalogEntry["tipo"]> = Extract<(typeof CATALOG)[number], { tipo: T }>

export function byTipo<T extends CatalogEntry["tipo"]>(tipo: T): Entry<T>[] {
  return CATALOG.filter((e): e is Entry<T> => e.tipo === tipo)
}

export function entry(slug: Slug) {
  const found = CATALOG.find((e) => e.slug === slug)
  if (!found) throw new Error(`Slug fuera de la allowlist: ${slug}`)
  return found
}

/** Nombres que se muestran en la franja de clientes (nombre + logo, nunca link). */
export const CLIENT_SLUGS = [
  "fenix",
  "escuela-alas",
  "cooperativa-fatima",
  "neutron-gym",
  "intacto-welty",
  "greensap",
  "hotel-grand-lago",
  "transrio-turismo",
  "enerbio",
  "recibito",
  "amid-misiones",
  "aaron-ortas",
  "epsa",
  "rio-uruguay",
] as const satisfies readonly Slug[]
