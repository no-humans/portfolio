# Tech Stack

## Core

- React
- TypeScript
- Vite

## Styling

- Tailwind CSS
- CSS custom properties/design tokens
- Component CSS where useful

## Animation

### Framer Motion
Use for UI/component motion:
- navbar entrance
- mobile menu
- section reveals
- text reveals
- staggered lists
- buttons
- hover states
- cards
- contact elements

### GSAP
Use for complex timelines:
- loading exit
- hero parallax
- project showcase
- horizontal project movement
- large typography movement
- progress indicators

### ScrollTrigger
Use to respond to user scrolling. It must not take control of normal page navigation.

### React Bits
Required:
- CountUp
- Splash Cursor

Splash Cursor is desktop-only and must be disabled on touch/mobile.

## Principle

Use each library for the job it is best at. Do not duplicate animation systems unnecessarily.
