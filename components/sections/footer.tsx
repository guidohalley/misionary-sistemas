import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { CONTACT_EMAIL } from "@/lib/contact"

const LINKS = {
  Producto: [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Clientes", href: "#clientes" },
    { label: "FAQ", href: "#faq" },
  ],
  Empresa: [
    { label: "Equipo", href: "#equipo" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "#contacto" },
  ],
  SEO: [
    { label: "Sistemas para inmobiliarias", href: "/sistemas/inmobiliarias" },
    { label: "Sistemas para educación", href: "/sistemas/educacion" },
    { label: "Sistemas para salud", href: "/sistemas/salud" },
    { label: "Software a medida Argentina", href: "/blog/software-a-medida" },
  ],
}

export function Footer() {
  return (
    <footer className="py-10 sm:py-14 px-4 sm:px-6 bg-background border-t border-foreground/12 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="https://cdn.misionary.misionary.com.ar/Logos%20Misionary_M-10.svg"
                alt="Misionary"
                width={28}
                height={28}
                unoptimized
              />
              <span className="text-sm font-medium text-foreground tracking-tight">
                misionary<span className="text-muted-foreground font-normal">.dev</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Agencia de software y sistemas a medida. Posadas, Misiones,
              Argentina.
            </p>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-medium text-foreground uppercase tracking-widest mb-3">
                {group}
              </p>
              <ul className="flex flex-col gap-0.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex py-2 min-h-10 items-center touch-manipulation"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Misionary · Posadas, Misiones, Argentina
          </p>
          <p className="text-xs text-muted-foreground">{CONTACT_EMAIL}</p>
        </div>
      </div>
    </footer>
  )
}
