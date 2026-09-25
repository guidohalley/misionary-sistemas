import type { Slug } from "./catalog"

/** Destinos a los que puede apuntar un uso validado de una integración. */
export type Destino = Slug | "sitios" | "operacion-misionary"

export type Carril = {
  id: string
  label: string
  servicios: Servicio[]
}

export type Servicio = {
  id: string
  nombre: string
  /** Solo usos confirmados. Vacío = se muestra como `disponible`. */
  usadoEn: Destino[]
  nota?: string
  link?: `https://${string}`
}

export const DESTINOS: { id: Destino; label: string }[] = [
  { id: "fenix", label: "Fénix Inmobiliaria" },
  { id: "escuela-alas", label: "Escuela Alas" },
  { id: "cooperativa-fatima", label: "Cooperativa Fátima" },
  { id: "neutron-gym", label: "Neutron Gym" },
  { id: "intacto-welty", label: "Intacto Welty" },
  { id: "erp-misionary", label: "ERP Misionary" },
  { id: "sitios", label: "Sitios y landings" },
  { id: "operacion-misionary", label: "Operación Misionary" },
]

export const CARRILES: Carril[] = [
  {
    id: "infra",
    label: "Infra & cloud",
    servicios: [
      { id: "aws", nombre: "AWS", usadoEn: ["neutron-gym"], nota: "S3 para video" },
      { id: "cloudflare", nombre: "Cloudflare", usadoEn: ["cooperativa-fatima", "operacion-misionary"], nota: "R2 · CDN · Workers" },
      {
        id: "railway",
        nombre: "Railway",
        usadoEn: ["fenix", "escuela-alas", "cooperativa-fatima", "neutron-gym", "intacto-welty", "erp-misionary", "operacion-misionary"],
        nota: "APIs, bases de datos y workers",
      },
      { id: "vercel", nombre: "Vercel", usadoEn: ["sitios"], nota: "Frontends y sitios" },
      { id: "hostinger", nombre: "Hostinger", usadoEn: ["operacion-misionary"], nota: "Dominios y correo" },
    ],
  },
  {
    id: "negocio",
    label: "CRM · ERP · datos",
    servicios: [
      { id: "tokko", nombre: "Tokko Broker", usadoEn: ["fenix"], nota: "Catálogo de propiedades" },
      { id: "twenty", nombre: "Twenty CRM", usadoEn: ["operacion-misionary"], nota: "Self-hosted" },
      { id: "erp", nombre: "ERP Misionary", usadoEn: ["erp-misionary", "operacion-misionary"], nota: "Sistema propio" },
    ],
  },
  {
    id: "pagos",
    label: "Pagos",
    servicios: [
      { id: "mercado-pago", nombre: "Mercado Pago", usadoEn: [] },
      { id: "uala", nombre: "Ualá", usadoEn: [] },
    ],
  },
  {
    id: "comunicacion",
    label: "Comunicación & automatización",
    servicios: [
      { id: "slack", nombre: "Slack", usadoEn: [] },
      { id: "resend", nombre: "Resend", usadoEn: [] },
      {
        id: "botssy",
        nombre: "Botssy",
        usadoEn: [],
        nota: "Partner · email marketing y automatización",
        link: "https://botssy.com/",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth · analytics · ads",
    servicios: [
      { id: "gsc", nombre: "Search Console", usadoEn: [] },
      { id: "ga4", nombre: "GA4", usadoEn: ["cooperativa-fatima"] },
      { id: "posthog", nombre: "PostHog", usadoEn: [] },
      { id: "meta-pixel", nombre: "Meta Pixel", usadoEn: ["cooperativa-fatima"] },
      { id: "meta-business", nombre: "Meta Business", usadoEn: [] },
      { id: "snapchat", nombre: "Snapchat", usadoEn: [] },
      { id: "pinterest", nombre: "Pinterest", usadoEn: [] },
      { id: "tiktok", nombre: "TikTok", usadoEn: [] },
    ],
  },
]
