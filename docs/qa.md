# QA Checklist

## Architecture
- [ ] App.tsx only composes the page
- [ ] sections are separate components
- [ ] data is separated
- [ ] animation logic is separated

## Hero
- [ ] profile image is large
- [ ] portrait never collapses
- [ ] face is not distorted
- [ ] target composition is matched
- [ ] no horizontal overflow

## Scrolling
- [ ] About does not jump to Hero
- [ ] Stats does not jump to How I Build
- [ ] How I Build does not jump to Footer
- [ ] reverse scrolling works
- [ ] scrollbar dragging works
- [ ] mouse wheel works
- [ ] trackpad works
- [ ] keyboard scrolling works
- [ ] navigation links work
- [ ] no global scroll snap
- [ ] no timer-driven navigation

## Animation
- [ ] CountUp works
- [ ] loading exits correctly
- [ ] Framer Motion works
- [ ] GSAP works
- [ ] ScrollTrigger cleans up
- [ ] project interaction works
- [ ] Splash Cursor is desktop-only
- [ ] reduced-motion mode works

## Visual
- [ ] white background
- [ ] black primary text
- [ ] orange used sparingly
- [ ] section numbering consistent
- [ ] typography matches target direction
- [ ] project cards match target direction
- [ ] borders are subtle
- [ ] no unnecessary gradients

## Responsive
- [ ] 1440px+
- [ ] 1280px
- [ ] 1024px
- [ ] 768px
- [ ] 390px

## Build

```bash
npm run build
```

Must pass with no TypeScript/build errors.
