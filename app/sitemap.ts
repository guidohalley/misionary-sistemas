import type { MetadataRoute } from "next"
import { guiaSlugs } from "@/content/guias"
import { casoSlugs } from "@/content/casos"

const SITE = "https://misionary.dev"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entry = (path: string, priority: number) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  })

  return [
    entry("/", 1),
    entry("/guias", 0.9),
    entry("/casos", 0.9),
    ...guiaSlugs().map((slug) => entry(`/guias/${slug}`, 0.8)),
    ...casoSlugs().map((slug) => entry(`/casos/${slug}`, 0.8)),
  ]
}
