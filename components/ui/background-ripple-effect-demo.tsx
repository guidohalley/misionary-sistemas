"use client"

import React from "react"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-background">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-medium text-foreground md:text-4xl lg:text-6xl">
          Cuadrícula con efecto ripple
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Pasá el mouse y hacé clic en las celdas. Pensado para fondos de hero o CTAs (componente de
          referencia, no usado en la home actual).
        </p>
      </div>
    </div>
  )
}
