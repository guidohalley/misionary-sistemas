import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

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
    <footer className="py-14 px-6 bg-[#F1F1F1] border-t border-[rgba(38,38,38,0.12)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="https://cdn.misionary.misionary.com.ar/Logos%20Misionary_M-10.svg"
                alt="Misionary"
                width={28}
                height={28}
                unoptimized
              />
              <span className="text-sm font-medium text-[#262626] tracking-tight">
                misionary<span className="text-[#737373] font-normal">.dev</span>
              </span>
            </div>
            <p className="text-xs text-[#737373] leading-relaxed">
              Agencia de software y sistemas a medida. Posadas, Misiones,
              Argentina.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-medium text-[#262626] uppercase tracking-widest mb-3">
                {group}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-[#737373] hover:text-[#262626] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6 bg-[rgba(38,38,38,0.12)]" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs text-[#737373]">
            © {new Date().getFullYear()} Misionary · Posadas, Misiones, Argentina
          </p>
          <p className="text-xs text-[#737373]">hola@misionary.dev</p>
        </div>
      </div>
    </footer>
  )
}
