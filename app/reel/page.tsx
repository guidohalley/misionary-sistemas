import type { Metadata } from "next"
import { Showreel } from "@/components/showreel/showreel"

export const metadata: Metadata = {
  title: "Reel | Misionary",
  robots: { index: false, follow: true },
}

export default function ReelPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-black">
      <Showreel chrome={false} className="w-full max-w-[min(100vw,calc(100dvh*16/9))]" />
    </main>
  )
}
