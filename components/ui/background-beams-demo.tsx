"use client"

import React from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"

/** Bloque de referencia (Aceternity); el hero de la landing usa el mismo `BackgroundBeams`. */
export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-center font-sans font-medium text-neutral-200">
          Sistemas a medida
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Ejemplo visual de rayos animados (background beams), mismo efecto que el hero de la home.
        </p>
        <input
          type="email"
          placeholder="devs@misionary.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 px-3 py-2 text-sm text-neutral-200"
        />
      </div>
      <BackgroundBeams />
    </div>
  )
}
