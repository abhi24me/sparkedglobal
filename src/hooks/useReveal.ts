import { useEffect } from 'react'

/**
 * Fades in elements marked with `data-reveal` as they scroll into view.
 * Re-runs whenever `key` changes (e.g. on route change).
 * Without IntersectionObserver, everything is shown immediately.
 */
export function useReveal(key: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}
