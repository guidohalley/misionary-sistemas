import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"
import { CONTACT_EMAIL } from "@/lib/contact"

const LINKS = [
  { label: "Guías", href: "/guias", external: true },
  { label: "Casos", href: "/casos", external: true },
  { label: "Trabajos", href: "/#trabajos", external: false },
  { label: "Integraciones", href: "/#integraciones", external: false },
  { label: "Proceso", href: "/#como-funciona", external: false },
  { label: "Equipo", href: "/#equipo", external: false },
  { label: "FAQ", href: "/#faq", external: false },
  { label: "Contacto", href: "/#contacto", external: false },
] as const

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-foreground/15 px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 sm:px-6 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2 text-foreground">
              <BrandMark className="size-[26px]" />
              <span className="text-sm font-medium tracking-tight">
                misionary<span className="font-normal text-muted-foreground">.dev</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Software factory. Sistemas a medida, integraciones y operación. Posadas, Misiones,
              Argentina.
            </p>
          </div>
          <nav aria-label="Secciones" className="grid grid-cols-2 gap-x-10 sm:grid-cols-3">
            {LINKS.map((l) =>
              l.external ? (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex min-h-10 items-center text-xs text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex min-h-10 items-center text-xs text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
                >
                  {l.label}
                </a>
              )
            )}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t-[0.5px] border-foreground/15 pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Misionary · Posadas, Misiones</p>
          <p className="normal-case tracking-normal">{CONTACT_EMAIL}</p>
        </div>
      </div>
    </footer>
  )
}
