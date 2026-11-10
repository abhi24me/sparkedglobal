import LogoMark from './LogoMark'

type LogoProps = {
  /** 'dark' for dark/navy backgrounds (white mark), 'light' for white backgrounds (navy mark) */
  variant?: 'light' | 'dark'
  /** Height of the mark in px; the wordmark scales with it */
  size?: number
}

export default function Logo({ variant = 'dark', size = 44 }: LogoProps) {
  const isDark = variant === 'dark'
  const markColor = isDark ? '#ffffff' : '#071e40'
  const scale = size / 44
  // The source ring is a hairline; keep it at least ~1px when rendered small
  const ringWidth = Math.max(3, 1.1 / (size / 740))

  return (
    <span
      role="img"
      aria-label="Sparked Global"
      style={{ display: 'inline-flex', alignItems: 'center', gap: `${10 * scale}px`, lineHeight: 1 }}
    >
      <LogoMark color={markColor} ringWidth={ringWidth} height={size} style={{ flex: 'none', width: 'auto' }} />
      <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif" }}>
        <span style={{ fontWeight: 800, fontSize: `${22 * scale}px`, letterSpacing: '-0.5px', color: isDark ? '#ffffff' : '#071e40' }}>
          Sparked
        </span>
        <span style={{ fontWeight: 600, fontSize: `${9.5 * scale}px`, letterSpacing: `${4.8 * scale}px`, marginTop: `${4 * scale}px`, color: isDark ? '#93c5fd' : '#1d4ed8' }}>
          GLOBAL
        </span>
      </span>
    </span>
  )
}
