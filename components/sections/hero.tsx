import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Showreel } from "@/components/showreel/showreel"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-[calc(5rem+env(safe-area-inset-top))] sm:px-6 sm:pt-28 md:pb-20 md:pt-32">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div>
          <p className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded bg-lime px-1.5 py-0.5 text-lime-foreground">
              <span className="size-1.5 rounded-full bg-lime-foreground" />
              en producción
            </span>
            ar-northeast-1 / posadas
          </p>

          <h1 className="mb-5 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Sistemas a medida,
            <br />
            <span className="text-muted-foreground">conectados a tu negocio.</span>
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dejá las planillas y el WhatsApp como sistema. Diseñamos, construimos y operamos
            software propio que se integra con las herramientas que ya usás.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="min-h-11 w-full touch-manipulation sm:w-auto">
              <a href="#contacto">
                Reservá un diagnóstico
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-11 w-full border-foreground/25 bg-transparent touch-manipulation sm:w-auto"
            >
              <a href="#trabajos">Ver sistemas</a>
            </Button>
          </div>
        </div>

        <Showreel />
      </div>
    </section>
  )
}
