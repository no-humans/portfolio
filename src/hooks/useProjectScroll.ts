import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export function useProjectScroll(ref: RefObject<HTMLElement | null>, reduceMotion: boolean | null) {
  useEffect(() => {
    if (reduceMotion || !ref.current) return
    const context = gsap.context(() => {
      const media = gsap.matchMedia()
      media.add('(min-width: 900px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.project-card')
        gsap.to(cards, { xPercent: -78 * (cards.length - 1), ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=2400', pin: true, scrub: 1, anticipatePin: 1 } })
      })
      return () => media.revert()
    }, ref)
    return () => context.revert()
  }, [ref, reduceMotion])
}
