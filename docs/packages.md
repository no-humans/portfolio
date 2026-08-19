# Packages

## Required animation packages

```bash
npm install framer-motion gsap
```

Use React Bits according to the project's current setup for CountUp and Splash Cursor.

## Responsibilities

- `framer-motion` — component/UI motion
- `gsap` — complex animation timelines
- `gsap/ScrollTrigger` — scroll-driven animation
- React Bits — CountUp and Splash Cursor

Keep existing packages that have a real purpose.

Do not add duplicate animation or icon libraries.

After dependency changes, run:

```bash
npm run build
```
