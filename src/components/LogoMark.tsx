// Sparked Global sunburst mark, traced from the brand artwork (1600×1600 source, cropped viewBox).
// Drawn in a single colour so it works on any background.

export const MARK_VIEWBOX = '290 405 1015 740'

// Sunburst: rays + the band above the sun, with the top half of the sun cut out by the arc
export const BURST_PATH =
  'M297 792 L644 744 L530 650 L699 714 L499 442 L734 663 L728 424 L797 668 L888 548 L860 673 ' +
  'L1121 413 L917 730 L1041 694 L970 749 L1297 804 L919 800 A119.5 119.5 0 0 0 680 800 Z'

// Lower half of the sun
export const SUN_PATH = 'M680 800 A119.5 119.5 0 0 0 919 800 Z'

type LogoMarkProps = {
  color?: string
  /** Ring stroke in source units; the artwork uses ~3, but small renders need it heavier to stay visible */
  ringWidth?: number
  className?: string
  style?: React.CSSProperties
  height?: number | string
}

export default function LogoMark({ color = 'currentColor', ringWidth = 3, className, style, height }: LogoMarkProps) {
  return (
    <svg viewBox={MARK_VIEWBOX} height={height} className={className} style={style} aria-hidden="true" focusable="false">
      <circle cx="799.5" cy="799.5" r="335.5" fill="none" stroke={color} strokeWidth={ringWidth} />
      <path d={BURST_PATH} fill={color} />
      <path d={SUN_PATH} fill={color} />
    </svg>
  )
}
