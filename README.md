# Pranav P. — Frontend Portfolio

A responsive, editorial React portfolio built with Vite, TypeScript, Framer Motion, GSAP ScrollTrigger, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Content and assets

- Replace the hero portrait at `src/assets/images/profile-placeholder.png`. The image is imported once by `src/App.tsx`.
- Add the resume as `public/assets/Pranav-P-Resume.pdf`; the About section already links to that location.
- Update project titles, descriptions, and technology tags in the `projects` collection near the top of `src/App.tsx`.
- Update skills in the `skills` collection in the same file.
- Update email and social links in `src/App.tsx` by searching for `pranavpasad242` and `pranav-p`.

## Motion structure

- Framer Motion controls the loader exit, menu, hero reveals, section entrances, counters, and card interactions.
- GSAP + ScrollTrigger adds a restrained hero parallax and the pinned horizontal project showcase on desktop. Mobile falls back to a touch-scrollable card row.
- `CountUp` is a small local reusable component within `src/App.tsx`; it runs once when statistics enter the viewport.
- Reduced-motion preferences disable the GSAP effects and collapse animation timings.

## Notes

The placeholder portrait was generated specifically for this layout and can be replaced freely with Pranav's own portrait. Project visuals are intentionally code-built placeholders because no project screenshots or URLs were supplied.
