"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Guías", href: "/guias" },
  { label: "Casos", href: "/casos" },
  { label: "Trabajos", href: "/#trabajos" },
  { label: "Integraciones", href: "/#integraciones" },
  { label: "Proceso", href: "/#como-funciona" },
  { label: "Equipo", href: "/#equipo" },
  { label: "FAQ", href: "/#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300",
        scrolled || open
          ? "border-b-[0.5px] border-foreground/15 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://cdn.misionary.misionary.com.ar/Logos%20Misionary_M-10.svg"
            alt="Misionary"
            width={28}
            height={28}
            unoptimized
            priority
          />
          <span className="text-sm font-medium tracking-tight">
            misionary<span className="font-normal text-muted-foreground">.dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <ThemeToggle />
          <Button asChild size="sm" className="ml-2">
            <Link href="/#contacto">Reservá un diagnóstico</Link>
          </Button>
        </div>

        <div className="flex items-center gap-0.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-mr-1 inline-flex min-h-11 min-w-11 items-center justify-center p-3 text-muted-foreground hover:text-foreground touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-0.5 overflow-hidden px-4 pb-5 sm:px-6 md:hidden"
          >
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-11 items-center py-3 text-sm text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-11 items-center py-3 text-sm text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Button asChild size="sm" className="mt-2 w-full">
              <Link href="/#contacto" onClick={() => setOpen(false)}>
                Reservá un diagnóstico
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
