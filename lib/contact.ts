/** Misma fuente que msnr-landing (ContactSectionV2) */
export const CONTACT_EMAIL = "marketing@misionary.com" as const

const WHATSAPP_E164 = "5493764628681"

const defaultWhatsappText =
  "Hola, vengo desde misionary.dev/sistemas y quiero consultar por sus servicios."

export function getWhatsAppHref(text: string = defaultWhatsappText) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`
}
