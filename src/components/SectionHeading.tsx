import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  children?: ReactNode
  align?: 'left' | 'center'
  /** Optional element on the right of the heading row (e.g. a link) */
  aside?: ReactNode
}

export default function SectionHeading({ eyebrow, title, children, align = 'left', aside }: SectionHeadingProps) {
  return (
    <div className={`section-head section-head--${align}`} data-reveal>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        {children && <p className="section-lead">{children}</p>}
      </div>
      {aside && <div className="section-head-aside">{aside}</div>}
    </div>
  )
}
