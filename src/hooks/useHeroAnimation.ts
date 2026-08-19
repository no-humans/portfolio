import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export function useHeroAnimation(ref: RefObject<HTMLElement | null>, reduceMotion: boolean | null) {
  useEffect(() => {
    if (reduceMotion || !ref.current) return
    const context = gsap.context(() => {
      gsap.to('.hero-word', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.portrait-wrap', { yPercent: 7, scale: 1.03, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
    }, ref)
    return () => context.revert()
  }, [ref, reduceMotion])
}
