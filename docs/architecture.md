# Architecture

## Goal

`App.tsx` must be a small page-composition file. Do not keep the entire portfolio in one component.

## Structure

```text
src/
├── app/
│   └── App.tsx
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── common/
│   ├── layout/
│   ├── motion/
│   └── ui/
├── sections/
│   ├── Loading/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Stats/
│   ├── Skills/
│   ├── Projects/
│   ├── HowIBuild/
│   ├── Experience/
│   ├── Contact/
│   └── Footer/
├── data/
│   ├── navigation.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── social.ts
├── hooks/
│   ├── useIsMobile.ts
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   ├── useHeroAnimation.ts
│   └── useProjectScroll.ts
├── lib/
│   ├── utils.ts
│   └── animations.ts
├── styles/
│   ├── variables.css
│   ├── globals.css
│   ├── typography.css
│   └── utilities.css
├── App.tsx
├── main.tsx
└── index.css
```

## App.tsx

It should mainly compose:

```tsx
<LoadingScreen />
<Navbar />
<main>
  <Hero />
  <About />
  <Stats />
  <Skills />
  <Projects />
  <HowIBuild />
  <Experience />
  <Contact />
</main>
<Footer />
```

Do not put project/skill data, large JSX sections, GSAP timelines or repeated animation definitions in App.tsx.

## Data

Keep repeated portfolio content in `src/data/`.

## Animation

Keep section-specific GSAP logic in hooks or section animation modules. Use scoped cleanup such as `gsap.context()`.

Refactoring must preserve the existing visual design and functionality.
