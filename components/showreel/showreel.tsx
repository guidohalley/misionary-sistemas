"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Pause, Play, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

const W = 1280
const H = 720
const FPS = 24
const LIME = "#e3fc74"
const INK = "#161616"
const BG = "#131313"

const BOOT_LINES = [
  "$ misionary --boot ar-northeast-1",
  "› levantando sistemas a medida",
  "› conectando integraciones",
]

const WORDS = ["PLANILLAS", "WHATSAPP", "PAPELES"]

type ReelNode = { id: string; kind: string; label: string; cx: number; cy: number }
const NODES: ReelNode[] = [
  { id: "u", kind: "ACTOR", label: "tu equipo", cx: 170, cy: 360 },
  { id: "app", kind: "APP", label: "web + mobile", cx: 400, cy: 220 },
  { id: "api", kind: "API", label: "núcleo", cx: 640, cy: 360 },
  { id: "data", kind: "DATA", label: "postgres", cx: 880, cy: 220 },
  { id: "ext", kind: "EXT", label: "pagos · crm", cx: 1080, cy: 360 },
  { id: "infra", kind: "INFRA", label: "cloud", cx: 640, cy: 540 },
]
const EDGES = [
  "M170 324 V220 H300",
  "M500 220 H600 V324",
  "M680 324 V220 H780",
  "M980 220 H1080 V324",
  "M740 360 H980",
  "M640 396 V504",
]

const TICKERS = [
  { y: 150, dir: -1, items: ["AWS", "Cloudflare", "Railway", "Vercel", "Hostinger", "Tokko Broker", "Twenty CRM", "ERP Misionary"] },
  { y: 560, dir: 1, items: ["Mercado Pago", "Ualá", "Slack", "Resend", "Botssy", "Webhooks", "APIs REST", "y otras"] },
  { y: 622, dir: -1, items: ["GA4", "PostHog", "Search Console", "Meta Pixel", "Meta Business", "TikTok", "Pinterest", "Snapchat"] },
]
const CONNECTORS = [
  "M560 318 V250 H300 V172",
  "M640 318 V172",
  "M720 318 V250 H980 V172",
  "M580 402 V470 H400 V538",
  "M700 402 V470 H880 V538",
]

const CUTS = [
  { name: "Fénix Inmobiliaria", rubro: "inmobiliaria · ecosistema" },
  { name: "Escuela Alas", rubro: "educación" },
  { name: "Cooperativa Fátima", rubro: "cooperativa · e-commerce" },
  { name: "Neutron Gym", rubro: "fitness · pantallas de sala" },
  { name: "Intacto Welty", rubro: "industria · órdenes de trabajo" },
]

const chipWidth = (s: string) => Math.round(s.length * 11.2 + 40)

function tickerLayout(items: string[]) {
  let x = 0
  return [...items, ...items].map((label) => {
    const w = chipWidth(label)
    const out = { label, x, w }
    x += w + 16
    return out
  })
}

function formatTime(t: number) {
  const s = Math.floor(t)
  const f = Math.floor((t - s) * FPS)
  return `00:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`
}

type Props = {
  chrome?: boolean
  className?: string
}

export function Showreel({ chrome = true, className }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const wantPlay = useRef(true)
  const timecode = useRef<SVGTextElement>(null)
  const timecodeUi = useRef<HTMLSpanElement>(null)
  const scene = useRef<SVGTextElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(true)

  useGSAP(
    () => {
      const setScene = (label: string) => () => {
        if (scene.current) scene.current.textContent = label
      }

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.3,
        defaults: { ease: "power3.out" },
        onUpdate: () => {
          const t = tl.time()
          const tc = formatTime(t)
          if (timecode.current) timecode.current.textContent = tc
          if (timecodeUi.current) timecodeUi.current.textContent = tc
          if (bar.current) bar.current.style.transform = `scaleX(${t / 15})`
        },
      })
      tlRef.current = tl
      if (!chrome) {
        // Handle para exportar el reel cuadro a cuadro desde /reel.
        ;(window as unknown as { __misionaryReel?: gsap.core.Timeline }).__misionaryReel = tl
      }

      gsap.set(".r-cam", { svgOrigin: "640 360" })
      gsap.set(".r-node, .r-hub, .r-endnode", { transformOrigin: "50% 50%" })
      gsap.set(".r-strike, .r-hl, .r-underline", { transformOrigin: "0% 50%" })

      tl.set(".r-scene", { autoAlpha: 0 }, 0)
        .set(".r-grid", { opacity: 0 }, 0)

      // 01 — boot
      tl.call(setScene("01 · BOOT"), [], 0)
        .set(".r-s1", { autoAlpha: 1 }, 0)
        .to(".r-grid", { opacity: 1, duration: 0.8, ease: "none" }, 0)
        .fromTo(".r-hud", { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.05)
      BOOT_LINES.forEach((_, i) => {
        tl.fromTo(
          `.r-type-${i}`,
          { attr: { width: 0 } },
          { attr: { width: 900 }, duration: 0.45, ease: "steps(22)" },
          0.15 + i * 0.42
        )
      })
      tl.fromTo(".r-cursor", { opacity: 0 }, { opacity: 1, duration: 0.05, repeat: 5, yoyo: true }, 1.25)
        .fromTo(".r-wipe", { x: -W }, { x: 0, duration: 0.32, ease: "power4.in" }, 1.75)
        .set(".r-s1", { autoAlpha: 0 }, 2.07)
        .set(".r-s2", { autoAlpha: 1 }, 2.07)
        .to(".r-wipe", { x: W, duration: 0.36, ease: "power4.out" }, 2.07)

      // 02 — problema
      tl.call(setScene("02 · PROBLEMA"), [], 2.07)
        .fromTo(".r-word", { y: 120 }, { y: 0, duration: 0.5, stagger: 0.1, ease: "expo.out" }, 2.15)
        .fromTo(
          ".r-strike",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.28, stagger: 0.14, ease: "power2.inOut" },
          2.75
        )
        .to(".r-word", { y: -130, duration: 0.4, stagger: 0.06, ease: "power3.in" }, 3.45)
        .to(".r-strike", { opacity: 0, duration: 0.2 }, 3.55)
        .fromTo(
          ".r-hl",
          { scaleX: 0, attr: { x: 170, y: 262, width: 940, height: 196 } },
          { scaleX: 1, duration: 0.38, ease: "expo.inOut" },
          3.8
        )
        .fromTo(".r-big", { y: 210 }, { y: 0, duration: 0.55, ease: "expo.out" }, 4.0)
        .to(".r-big", { y: -210, duration: 0.3, ease: "power3.in" }, 4.7)
        .to(".r-hl", { attr: { y: 358, height: 4 }, duration: 0.25, ease: "power3.in" }, 4.78)
        .to(".r-hl", { attr: { x: 636, width: 8 }, duration: 0.25, ease: "power3.in" }, 5.0)
        .set(".r-s2", { autoAlpha: 0 }, 5.25)

      // 03 — arquitectura
      tl.call(setScene("03 · ARQUITECTURA"), [], 5.2)
        .set(".r-s3", { autoAlpha: 1 }, 5.2)
        .fromTo(
          ".r-cam",
          { scale: 1.3 },
          { scale: 1, duration: 3.2, ease: "power2.inOut" },
          5.2
        )
        .fromTo(
          ".r-node",
          { opacity: 0, scale: 0.55 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.11, ease: "back.out(1.7)" },
          5.25
        )
        .fromTo(
          ".r-edge",
          { strokeDashoffset: (_: number, el: SVGPathElement) => el.getTotalLength() },
          { strokeDashoffset: 0, duration: 0.45, stagger: 0.1, ease: "power2.inOut" },
          5.75
        )
      gsap.utils.toArray<SVGCircleElement>(".r-packet").forEach((dot, i) => {
        const path = gsap.utils.toArray<SVGPathElement>(".r-edge")[i]
        tl.fromTo(dot, { opacity: 0 }, { opacity: 1, duration: 0.1 }, 6.6 + i * 0.12)
          .to(
            dot,
            {
              duration: 0.7,
              repeat: 1,
              ease: "power1.inOut",
              motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
            },
            6.6 + i * 0.12
          )
          .to(dot, { opacity: 0, duration: 0.15 }, 8.1)
      })
      tl.fromTo(".r-api-box", { fill: "#1d1d1d" }, { fill: LIME, duration: 0.2 }, 7.3)
        .fromTo(".r-api-text", { fill: "#f2f2f2" }, { fill: INK, duration: 0.2 }, 7.3)

      // 04 — integraciones
      tl.call(setScene("04 · INTEGRACIONES"), [], 8.4)
        .to(".r-cam", { scale: 0.62, opacity: 0.12, duration: 0.5, ease: "power3.inOut" }, 8.35)
        .set(".r-s4", { autoAlpha: 1 }, 8.4)
        .fromTo(".r-hub", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2)" }, 8.5)
        .fromTo(".r-ticker", { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.08 }, 8.55)
      TICKERS.forEach((row, i) => {
        tl.fromTo(
          `.r-ticker-${i}`,
          { x: row.dir < 0 ? 0 : -520 },
          { x: row.dir < 0 ? -520 : 0, duration: 2.8, ease: "none" },
          8.4
        )
      })
      tl.fromTo(
        ".r-conn",
        { strokeDashoffset: (_: number, el: SVGPathElement) => el.getTotalLength() },
        { strokeDashoffset: 0, duration: 0.35, stagger: 0.12, ease: "power2.out" },
        8.85
      ).fromTo(
        ".r-conn",
        { stroke: "rgba(255,255,255,0.35)" },
        { stroke: LIME, duration: 0.12, stagger: { each: 0.22, repeat: 1, yoyo: true } },
        9.6
      )
      tl.set(".r-s3", { autoAlpha: 0 }, 11.15).set(".r-s4", { autoAlpha: 0 }, 11.2)

      // 05 — sistemas (montaje)
      tl.call(setScene("05 · SISTEMAS"), [], 11.2)
      CUTS.forEach((_, i) => {
        const t = 11.2 + i * 0.4
        tl.set(`.r-cut-${i}`, { autoAlpha: 1 }, t)
          .fromTo(`.r-cut-${i} .r-cut-name`, { x: 60 }, { x: 0, duration: 0.3, ease: "expo.out" }, t)
          .fromTo(`.r-cut-${i} .r-cut-meta`, { opacity: 0 }, { opacity: 1, duration: 0.15 }, t + 0.08)
          .set(`.r-cut-${i}`, { autoAlpha: 0 }, t + 0.4)
      })

      // 06 — cierre
      tl.call(setScene("06 · MISIONARY"), [], 13.2)
        .set(".r-s6", { autoAlpha: 1 }, 13.2)
        .fromTo(".r-mark-clip", { attr: { width: 0 } }, { attr: { width: 900 }, duration: 0.6, ease: "expo.out" }, 13.2)
        .fromTo(".r-underline", { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "expo.inOut" }, 13.55)
        .fromTo(".r-tagline", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4 }, 13.75)
        .fromTo(".r-endnode", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, stagger: 0.08, ease: "back.out(2)" }, 13.9)
        .fromTo(".r-blackout", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "none" }, 14.6)
        .set({}, {}, 15)

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduce) {
        tl.pause(7.6)
        wantPlay.current = false
        setPlaying(false)
      }

      const io = new IntersectionObserver(([entry]) => {
        if (!wantPlay.current) return
        if (entry.isIntersecting) tl.play()
        else tl.pause()
      })
      if (root.current) io.observe(root.current)
      return () => io.disconnect()
    },
    { scope: root, dependencies: [chrome] }
  )

  const toggle = () => {
    const tl = tlRef.current
    if (!tl) return
    if (tl.paused()) {
      tl.play()
      wantPlay.current = true
      setPlaying(true)
    } else {
      tl.pause()
      wantPlay.current = false
      setPlaying(false)
    }
  }

  const restart = () => {
    tlRef.current?.restart()
    wantPlay.current = true
    setPlaying(true)
  }

  return (
    <div ref={root} className={cn("flex flex-col gap-2", className)}>
      <div className={cn("relative overflow-hidden bg-ink", chrome && "rounded-xl border-[0.5px] border-foreground/20")}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          role="img"
          aria-label="Showreel Misionary: de planillas y WhatsApp a sistemas conectados, arquitectura, integraciones y sistemas en producción."
          style={{ fontFamily: "var(--font-plex-sans), sans-serif" }}
        >
          <defs>
            <pattern id="reel-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.13)" />
            </pattern>
            {BOOT_LINES.map((_, i) => (
              <clipPath key={i} id={`reel-type-${i}`}>
                <rect className={`r-type-${i}`} x={110} y={262 + i * 56} width={0} height={44} />
              </clipPath>
            ))}
            {WORDS.map((_, i) => (
              <clipPath key={i} id={`reel-word-${i}`}>
                <rect x={0} y={206 + i * 110} width={W} height={112} />
              </clipPath>
            ))}
            <clipPath id="reel-big">
              <rect x={0} y={262} width={W} height={196} />
            </clipPath>
            <clipPath id="reel-mark">
              <rect className="r-mark-clip" x={190} y={230} width={0} height={200} />
            </clipPath>
          </defs>

          <rect width={W} height={H} fill={BG} />
          <rect className="r-grid" width={W} height={H} fill="url(#reel-dots)" />

          {/* 01 boot */}
          <g className="r-scene r-s1" style={{ fontFamily: "var(--font-plex-mono), monospace" }}>
            {BOOT_LINES.map((line, i) => (
              <text
                key={line}
                x={120}
                y={295 + i * 56}
                fontSize={30}
                fill={i === 0 ? LIME : "rgba(255,255,255,0.86)"}
                clipPath={`url(#reel-type-${i})`}
              >
                {line}
              </text>
            ))}
            <rect className="r-cursor" x={120} y={396} width={16} height={32} fill={LIME} opacity={0} />
          </g>

          {/* 02 problema */}
          <g className="r-scene r-s2">
            {WORDS.map((word, i) => (
              <g key={word} clipPath={`url(#reel-word-${i})`}>
                <text
                  className="r-word"
                  x={640}
                  y={292 + i * 110}
                  textAnchor="middle"
                  fontSize={96}
                  fontWeight={500}
                  fill="#f2f2f2"
                  letterSpacing={-2}
                >
                  {word}
                </text>
                <rect
                  className="r-strike"
                  x={640 - word.length * 30}
                  y={258 + i * 110}
                  width={word.length * 60}
                  height={9}
                  fill={LIME}
                />
              </g>
            ))}
            <rect className="r-hl" x={170} y={262} width={940} height={196} fill={LIME} />
            <g clipPath="url(#reel-big)">
              <text
                className="r-big"
                x={640}
                y={416}
                textAnchor="middle"
                fontSize={160}
                fontWeight={500}
                fill={INK}
                letterSpacing={-6}
              >
                SISTEMAS.
              </text>
            </g>
          </g>

          {/* 03 arquitectura */}
          <g className="r-scene r-s3">
            <g className="r-cam">
              {EDGES.map((d) => (
                <path key={d} className="r-edge" d={d} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={2} />
              ))}
              {NODES.map((n) => (
                <g key={n.id} className="r-node">
                  <rect
                    className={n.id === "api" ? "r-api-box" : undefined}
                    x={n.cx - 100}
                    y={n.cy - 36}
                    width={200}
                    height={72}
                    rx={n.kind === "DATA" ? 22 : 10}
                    fill="#1d1d1d"
                    stroke="rgba(255,255,255,0.35)"
                    strokeDasharray={n.kind === "ACTOR" ? "5 4" : undefined}
                  />
                  <text
                    className={n.id === "api" ? "r-api-text" : undefined}
                    x={n.cx - 84}
                    y={n.cy - 10}
                    fontSize={12}
                    letterSpacing={2}
                    fill="rgba(255,255,255,0.55)"
                    style={{ fontFamily: "var(--font-plex-mono), monospace" }}
                  >
                    {n.kind}
                  </text>
                  <text
                    className={n.id === "api" ? "r-api-text" : undefined}
                    x={n.cx - 84}
                    y={n.cy + 20}
                    fontSize={22}
                    fontWeight={500}
                    fill="#f2f2f2"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
              {EDGES.map((d) => (
                <circle key={`p-${d}`} className="r-packet" r={7} fill={LIME} stroke={INK} strokeWidth={2} opacity={0} />
              ))}
            </g>
          </g>

          {/* 04 integraciones */}
          <g className="r-scene r-s4">
            {CONNECTORS.map((d) => (
              <path key={d} className="r-conn" d={d} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={2} />
            ))}
            {TICKERS.map((row, i) => (
              <g key={row.y} className={`r-ticker r-ticker-${i}`}>
                {tickerLayout(row.items).map((chip, j) => (
                  <g key={`${chip.label}-${j}`} transform={`translate(${60 + chip.x} ${row.y - 22})`}>
                    <rect width={chip.w} height={44} rx={8} fill="#1d1d1d" stroke="rgba(255,255,255,0.3)" />
                    <text
                      x={chip.w / 2}
                      y={28}
                      textAnchor="middle"
                      fontSize={17}
                      fill="rgba(255,255,255,0.88)"
                      style={{ fontFamily: "var(--font-plex-mono), monospace" }}
                    >
                      {chip.label}
                    </text>
                  </g>
                ))}
              </g>
            ))}
            <g className="r-hub">
              <rect x={510} y={318} width={260} height={84} rx={12} fill={LIME} />
              <text x={532} y={346} fontSize={12} letterSpacing={2} fill={INK} style={{ fontFamily: "var(--font-plex-mono), monospace" }}>
                HUB · INTEGRACIÓN
              </text>
              <text x={532} y={382} fontSize={28} fontWeight={500} fill={INK}>
                misionary
              </text>
            </g>
          </g>

          {/* 05 sistemas */}
          {CUTS.map((cut, i) => {
            const onLime = i % 2 === 1
            return (
              <g key={cut.name} className={`r-scene r-cut-${i}`}>
                <rect width={W} height={H} fill={onLime ? LIME : BG} />
                <text
                  x={120}
                  y={250}
                  fontSize={16}
                  letterSpacing={3}
                  fill={onLime ? INK : "rgba(255,255,255,0.55)"}
                  style={{ fontFamily: "var(--font-plex-mono), monospace" }}
                >
                  {`SISTEMA ${String(i + 1).padStart(2, "0")}/${String(CUTS.length).padStart(2, "0")} · EN PRODUCCIÓN`}
                </text>
                <text
                  className="r-cut-name"
                  x={116}
                  y={400}
                  fontSize={116}
                  fontWeight={500}
                  letterSpacing={-4}
                  fill={onLime ? INK : "#f2f2f2"}
                >
                  {cut.name}
                </text>
                <text
                  className="r-cut-meta"
                  x={120}
                  y={470}
                  fontSize={22}
                  fill={onLime ? INK : LIME}
                  style={{ fontFamily: "var(--font-plex-mono), monospace" }}
                >
                  {cut.rubro}
                </text>
              </g>
            )
          })}

          {/* 06 cierre */}
          <g className="r-scene r-s6">
            <g clipPath="url(#reel-mark)">
              <text x={196} y={392} fontSize={150} fontWeight={500} letterSpacing={-6} fill="#f2f2f2">
                misionary<tspan fill="rgba(255,255,255,0.4)">.dev</tspan>
              </text>
            </g>
            <rect className="r-underline" x={200} y={424} width={380} height={8} fill={LIME} />
            <text
              className="r-tagline"
              x={200}
              y={480}
              fontSize={20}
              fill="rgba(255,255,255,0.7)"
              style={{ fontFamily: "var(--font-plex-mono), monospace" }}
            >
              sistemas a medida · posadas, misiones · ar-northeast-1
            </text>
            {[0, 1, 2].map((i) => (
              <g key={i} className="r-endnode">
                <rect x={900 + i * 70} y={532} width={44} height={28} rx={6} fill={i === 1 ? LIME : "none"} stroke={i === 1 ? LIME : "rgba(255,255,255,0.4)"} />
                {i < 2 && <path d={`M${944 + i * 70} 546 H${970 + i * 70}`} stroke="rgba(255,255,255,0.4)" strokeWidth={2} />}
              </g>
            ))}
          </g>

          <rect className="r-wipe" width={W} height={H} fill={LIME} transform={`translate(${-W} 0)`} />

          {/* HUD */}
          <g className="r-hud" style={{ fontFamily: "var(--font-plex-mono), monospace" }} fill="rgba(255,255,255,0.6)" fontSize={14} letterSpacing={2}>
            <path d="M40 64 V40 H64 M1216 40 H1240 V64 M40 656 V680 H64 M1216 680 H1240 V656" stroke="rgba(255,255,255,0.35)" strokeWidth={2} fill="none" />
            <circle cx={84} cy={60} r={5} fill={LIME} />
            <text x={98} y={65}>MISIONARY — REEL 26</text>
            <text ref={timecode} x={1196} y={65} textAnchor="end">
              00:00:00
            </text>
            <text x={84} y={668}>AR-NORTHEAST-1 · POSADAS</text>
            <text ref={scene} x={1196} y={668} textAnchor="end">
              01 · BOOT
            </text>
          </g>

          <rect className="r-blackout" width={W} height={H} fill="#000" opacity={0} pointerEvents="none" />
        </svg>
      </div>

      {chrome && (
        <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex size-8 items-center justify-center rounded-md border-[0.5px] border-foreground/25 text-foreground hover:border-foreground/60 touch-manipulation"
            aria-label={playing ? "Pausar showreel" : "Reproducir showreel"}
          >
            {playing ? <Pause size={13} /> : <Play size={13} />}
          </button>
          <button
            type="button"
            onClick={restart}
            className="inline-flex size-8 items-center justify-center rounded-md border-[0.5px] border-foreground/25 text-foreground hover:border-foreground/60 touch-manipulation"
            aria-label="Reiniciar showreel"
          >
            <RotateCcw size={13} />
          </button>
          <span ref={timecodeUi} className="tabular-nums text-foreground">
            00:00:00
          </span>
          <div className="relative h-px flex-1 bg-foreground/15">
            <div ref={bar} className="absolute inset-0 origin-left scale-x-0 bg-foreground" />
          </div>
          <span className="hidden uppercase tracking-[0.14em] sm:inline">reel · 15 s · web</span>
        </div>
      )}
    </div>
  )
}
