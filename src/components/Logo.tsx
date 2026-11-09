type LogoProps = {
  /** 'light' for white backgrounds, 'dark' for dark backgrounds */
  variant?: 'light' | 'dark'
  /** Icon size in px; the wordmark scales with it */
  size?: number
}

export default function Logo({ variant = 'light', size = 48 }: LogoProps) {
  const isDark = variant === 'dark'
  const badge = isDark ? '#009688' : '#1F2A33'
  const spark = isDark ? '#ffffff' : '#009688'
  const smallSpark = isDark ? '#1F2A33' : '#ffffff'
  const scale = size / 48

  return (
    <span
      role="img"
      aria-label="Sparked Global"
      style={{ display: 'inline-flex', alignItems: 'center', gap: `${10 * scale}px`, lineHeight: 1 }}
    >
      <svg viewBox="4 4 56 56" width={size} height={size} aria-hidden="true" style={{ flex: 'none' }}>
        <rect x="4" y="4" width="56" height="56" rx="14" fill={badge} />
        <path d="M32 13 Q32 32 51 32 Q32 32 32 51 Q32 32 13 32 Q32 32 32 13Z" fill={spark} />
        <path d="M45 13 Q45 19 51 19 Q45 19 45 25 Q45 19 39 19 Q45 19 45 13Z" fill={smallSpark} />
      </svg>
      <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', fontFamily: "'Inter', system-ui, sans-serif" }}>
        <span style={{ fontWeight: 800, fontSize: `${24 * scale}px`, letterSpacing: '-0.5px', color: isDark ? '#ffffff' : '#1F2A33' }}>
          Sparked
        </span>
        <span style={{ fontWeight: 600, fontSize: `${10.5 * scale}px`, letterSpacing: `${5.2 * scale}px`, marginTop: `${5 * scale}px`, color: isDark ? '#4db6ac' : '#009688' }}>
          GLOBAL
        </span>
      </span>
    </span>
  )
}
