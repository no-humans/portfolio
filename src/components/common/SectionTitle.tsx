import type { ReactNode } from 'react'

export function SectionTitle({
  number,
  children,
  className = '',
}: {
  number: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-end gap-3 ${className}`}>
      <span className="min-w-10 text-2xl font-semibold tracking-[-0.06em] text-[var(--orange)]">
        {number}
      </span>
      <span className="mb-2 h-px w-10 bg-[var(--orange)]" />
      <h2 className="text-[clamp(1.35rem,1.6vw,1.95rem)] font-semibold uppercase tracking-[-0.05em] text-[var(--ink)]">
        {children}
      </h2>
    </div>
  )
}
