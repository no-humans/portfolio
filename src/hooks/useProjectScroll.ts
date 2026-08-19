import { useLayoutEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export function useProjectScroll(
  sectionRef: RefObject<HTMLElement | null>,
  viewportRef: RefObject<HTMLDivElement | null>,
  trackRef: RefObject<HTMLDivElement | null>,
  reduceMotion: boolean | null,
) {
  useLayoutEffect(() => {
    const section = sectionRef.current
    const viewport = viewportRef.current
    const track = trackRef.current

    if (reduceMotion || !section || !viewport || !track) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth)

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    })

    return () => {
      mm.revert()
    }
  }, [sectionRef, viewportRef, trackRef, reduceMotion])
}
