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
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Equipo", href: "#equipo" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-foreground/12 shadow-[0_1px_0_color-mix(in_oklab,var(--color-foreground)_8%,transparent)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://cdn.misionary.misionary.com.ar/Logos%20Misionary_M-10.svg"
            alt="Misionary"
            width={32}
            height={32}
            unoptimized
            priority
          />
          <span className="text-sm font-medium text-foreground tracking-tight">
            misionary<span className="text-muted-foreground font-normal">.dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + tema */}
        <div className="hidden md:flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="ml-2">
            <a href="#contacto">Reservá asesoría</a>
          </Button>
        </div>

        {/* Mobile: tema + menú */}
        <div className="flex md:hidden items-center gap-0.5">
          <ThemeToggle />
          <button
            type="button"
            className="-mr-1 p-3 min-h-11 min-w-11 inline-flex items-center justify-center text-muted-foreground hover:text-foreground touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-background border-b border-foreground/12 px-4 sm:px-6 pb-5 flex flex-col gap-0.5"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground py-3 min-h-11 flex items-center transition-colors touch-manipulation"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="w-full mt-2">
              <a href="#contacto" onClick={() => setOpen(false)}>
                Reservá asesoría
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
