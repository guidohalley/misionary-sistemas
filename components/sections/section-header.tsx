import { cn } from "@/lib/utils"

type Props = {
  index: string
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ index, label, title, description, className }: Props) {
  return (
    <div className={cn("mb-8 grid gap-4 sm:mb-12 md:grid-cols-[1fr_auto] md:items-end", className)}>
      <div className="max-w-2xl">
        <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-foreground">{index}</span>
          <span className="h-px w-6 bg-foreground/25" />
          {label}
        </p>
        <h2 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
