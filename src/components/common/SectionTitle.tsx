import type { ReactNode } from 'react'
export function SectionTitle({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-title"><span>{number}</span><i /><h2>{children}</h2></div>
}
