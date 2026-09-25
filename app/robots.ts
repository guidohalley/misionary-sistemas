import type { MetadataRoute } from "next"

const AI_AND_SEARCH_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Googlebot",
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/reel"],
      },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/reel"],
      })),
    ],
    sitemap: "https://misionary.dev/sitemap.xml",
  }
}
