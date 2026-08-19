# Animation System

Animation should support hierarchy and interaction.

## Framer Motion

Use for:
- navbar entrance
- mobile menu
- section reveals
- text reveals
- staggered lists
- cards
- buttons
- hover states
- contact elements

Reusable variants:
`fadeIn`, `fadeUp`, `fadeDown`, `slideLeft`, `slideRight`, `scaleIn`, `staggerChildren`.

## GSAP

Use for:
- loading exit
- hero parallax
- project showcase
- horizontal project movement
- large typography movement
- progress indicators

Register ScrollTrigger and clean up all instances.

## ScrollTrigger

Allowed:
- scrub
- controlled project pinning
- progress tracking
- parallax

Avoid:
- global snap
- automatic navigation between unrelated sections
- timer-driven navigation
- forcing the page back to a previous section

## React Bits

### CountUp
Use in:
1. loading screen
2. stats

Loading should be approximately 1–1.5 seconds.

### Splash Cursor
Desktop only. Disable on touch/mobile and reduced-motion mode. It must not block interaction.

## Reduced Motion

Respect `prefers-reduced-motion: reduce`.

Reduce heavy parallax, large GSAP movement, cursor effects and excessive transitions.

Prefer animating transform and opacity rather than layout properties.
