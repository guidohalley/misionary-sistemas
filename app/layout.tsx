import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { themeInitScript } from "@/lib/theme"

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
}

const title = "Software factory y sistemas a medida | Posadas · Misionary"
const description =
  "misionary.dev es la software factory de Misionary en Posadas, Misiones: sistemas a medida e integraciones para PyMEs. No es la agencia de marketing de misionary.com."

export const metadata: Metadata = {
  metadataBase: new URL("https://misionary.dev"),
  title: {
    default: title,
    template: "%s · Misionary",
  },
  description,
  applicationName: "Misionary",
  authors: [{ name: "Misionary", url: "https://misionary.dev" }],
  creator: "Misionary",
  publisher: "Misionary",
  keywords: [
    "sistemas a medida",
    "software factory Posadas",
    "desarrollo de sistemas Misiones",
    "integraciones Mercado Pago",
    "software para empresas Argentina",
  ],
  appleWebApp: {
    capable: true,
    title: "Misionary",
    statusBarStyle: "default",
  },
  openGraph: {
    title,
    description,
    url: "https://misionary.dev",
    siteName: "Misionary",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${plexSans.variable} ${plexMono.variable} min-h-dvh overflow-x-clip`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
