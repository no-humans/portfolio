Pranav P. Portfolio --- Design & Implementation Specification

1. Purpose

Build a premium personal portfolio for Pranav P. --- Frontend
Developer using the attached UI reference as the visual source of
truth.

There are two important visual references:

Reference 1: the current implementation/screenshot that shows
the profile image incorrectly compressed into a very narrow vertical
strip.

Reference 2: the target UI design. Use this as the primary
design reference for the final layout, spacing, typography, hero
composition, section structure, and visual language.

The implementation must reproduce the design intent of Reference 2,
not the broken profile-image behavior shown in Reference 1.

2. Core Design Direction

Visual Style

The portfolio must feel:

Premium

Minimal

Editorial

Modern

High-end frontend developer portfolio

Clean and spacious

Typography-driven

Animation-focused but not gimmicky

Avoid making it look like:

A generic SaaS landing page

A template dashboard

A glassmorphism portfolio

A neon developer portfolio

A 3D/WebGL experiment

A page where every element is animated continuously

The visual hierarchy must come primarily from:

Typography

Spacing

Grid/layout

Black/white contrast

Small orange accents

Carefully controlled motion

3. Color System

Use a strict light theme.

Core Colors

--color-bg: #FFFFFF;
--color-surface: #FFFFFF;
--color-surface-muted: #F8F8F8;

--color-text-primary: #0A0A0A;
--color-text-secondary: #4A4A4A;
--color-text-muted: #777777;

--color-border: #E5E5E5;
--color-border-strong: #CFCFCF;

--color-accent: #FF5A00;
--color-accent-hover: #E94F00;

--color-black: #000000;
--color-white: #FFFFFF;

Color Rules

Black:

Main headings

Body text

Navigation

Icons

Primary buttons

Important UI elements

White:

Page background

Card backgrounds

Button text where applicable

Orange:

Use very sparingly.

Orange is only an accent.

Use it for:

P. in PRANAV P.

Section numbers

Active navigation indicator

DEVELOPER

Small labels

Decorative lines

Timeline dots

Arrows

Hover indicators

Small decorative shapes

Important CTA details

Progress indicators

Do NOT use orange as a large background.

Do NOT create orange gradients.

Do NOT use multiple accent colors.

4. Typography

Use a modern geometric/neo-grotesk sans-serif.

Recommended font direction:

Inter

Geist

Manrope

Satoshi-like alternative if already available

Prefer a high-quality free font.

Typography Hierarchy

Hero

The LET'S TALK heading must be extremely large.

Desktop:

clamp(5rem, 9vw, 10rem)

Use:

font-weight: 700--900

very tight line-height

tight letter-spacing

Section Titles

clamp(2rem, 3vw, 4rem)

Body

16px–18px
line-height: 1.6

Metadata

11px–13px
uppercase
letter-spacing: 0.04em–0.1em

Typography must remain readable on mobile.

5. Spacing System

Do not hardcode random margins throughout components.

Create spacing tokens.

Example:

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 80px;
--space-10: 120px;
--space-11: 160px;

Use responsive spacing.

Large sections should have generous vertical breathing room.

6. Container System

Create a reusable container.

Desktop:

max-width: 1440px;
margin-inline: auto;

Responsive horizontal padding:

Mobile: 20px
Tablet: 32px
Laptop: 48px
Desktop: 64px
Large Desktop: 80px

Do not create an artificially narrow content area.

The reference design uses large whitespace while still allowing the hero
artwork to occupy significant space.

7. Grid System

Use CSS Grid for major page layouts.

Suggested:

grid-template-columns: repeat(12, minmax(0, 1fr));

Use the grid to position:

Hero text

Hero image

Social links

About content

Stats

Skills

Projects

Experience

Avoid excessive nested flex containers that cause content to shrink
unexpectedly.

8. IMPORTANT --- HERO PROFILE IMAGE FIX

Current Problem

In the current implementation, the profile image is compressed into a
very narrow vertical strip on the far right.

This is WRONG.

The profile image must NOT shrink because the LET'S TALK typography or
other hero content takes available flex width.

The profile image needs its own intentional layout area.

Target Behavior

Follow Reference 2.

The profile image should:

Be clearly visible

Occupy a substantial portion of the hero

Sit on the right side of the hero

Be vertically aligned with the hero content

Have a large visual presence

Never collapse to a tiny width

Never become a 50--100px strip

Never be squeezed by neighboring flex children

Recommended Desktop Layout

Use CSS Grid rather than allowing uncontrolled flex shrinking.

Conceptually:

----------------------------------------------------
|              |                  |                |
| LET'S TALK   | NAME / ROLE      |    PROFILE     |
|              |                  |     IMAGE      |
|              |                  |                |
----------------------------------------------------

Example:

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.8fr 1.1fr;
  align-items: center;
}

Adjust proportions based on viewport.

The profile image column must have an explicit minimum width.

Example:

.hero-image-column {
  min-width: 0;
  width: 100%;
}

For the actual image wrapper:

.hero-image-wrapper {
  width: min(38vw, 520px);
  min-width: 320px;
  height: clamp(420px, 70vh, 680px);
  margin-left: auto;
}

The exact values may be adjusted after comparing against the reference,
but the image must remain visually large.

Image Rules

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

Do NOT use:

flex-shrink: 1;

on the image wrapper.

If the parent is flex-based, explicitly use:

flex-shrink: 0;

for the image area.

Do Not

Do not fix the problem by simply setting:

width: 100%;

on an element whose parent itself has collapsed.

Fix the actual layout architecture.

The image must have a real grid/column allocation.

9. Hero Image Composition

The target design has a portrait with a strong editorial composition.

Use:

grayscale image

black clothing/background where possible

clean white surrounding space

subtle circular outline

subtle decorative orange circle

small dot/grid decoration

The portrait itself should remain the visual focus.

Avoid:

heavy box shadow

colorful filters

excessive borders

rounded card styling

tiny image thumbnails

The image should feel like part of the hero composition, not a card.

10. Hero Section Height

Desktop hero should approximately occupy the first viewport.

Do not make it unnecessarily short.

Target:

min-height: 100svh;

Account for the navbar.

The hero should feel spacious.

11. Navbar

Desktop:

PRANAV P.                 01 HOME   02 ABOUT   03 SKILLS   04 PROJECTS   05 EXPERIENCE   06 CONTACT       LET'S TALK →

Characteristics:

White background

Thin bottom border

Minimal

Small uppercase navigation

Orange active indicator

Black text

No heavy shadow

Navbar should remain readable while scrolling.

Mobile:

PRANAV P.

menu button

animated fullscreen/mobile navigation

Use Framer Motion for the mobile menu.

12. Hero Left Rail

Reference design contains a small vertical section indicator.

Implement:

01
│
│
│
06

Use a subtle vertical line.

Add an orange progress dot.

This can become scroll-aware.

GSAP ScrollTrigger may update the active section/progress position.

Keep it subtle.

On mobile:

hide it or simplify it.

13. Hero Content

Main headline:

LET'S
TALK

Use a very large black heading.

Small orange decorative */shape next to it.

Below the heading:

thin orange line

short professional statement

scroll-down indicator

Example:

I build scalable, high-performance
web applications with exceptional
user experiences.

Do not use overly long text.

14. Name / Role Block

Place beside/below the hero headline according to the reference.

MY NAME IS

PRANAV P.

FRONTEND
DEVELOPER

Use orange for:

DEVELOPER

Also show:

⌖ KERALA, INDIA

Keep the typography strong and clean.

15. Follow Me Rail

Desktop right side:

FOLLOW ME

GitHub
LinkedIn
Email

Use vertical positioning similar to the reference.

On hover:

icon moves slightly

orange line/indicator appears

subtle opacity transition

Hide or convert into horizontal links on mobile.

16. Loading Screen

Full viewport.

Use React Bits CountUp.

Sequence:

00
01
02
...
99
100

Then:

Count finishes

short pause

loading screen exits using GSAP

hero content reveals

Total duration:

~1–1.5 seconds

Do not create a 3--5 second loading screen.

17. Framer Motion Usage

Use Framer Motion for:

navbar entrance

mobile menu

hero content entrance

text reveal

section reveal

cards

hover states

buttons

contact cards

small UI interactions

staggered lists

Create reusable motion variants.

Suggested utility variants:

fadeIn
fadeUp
fadeDown
slideLeft
slideRight
scaleIn
staggerChildren

Avoid repeating raw animation objects everywhere.

18. GSAP Usage

Use GSAP for large/complex motion.

Install:

npm install gsap

Use:

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

Register:

gsap.registerPlugin(ScrollTrigger);

Use GSAP for:

loading screen exit

hero scroll animation

hero parallax

project pinned section

project image transitions

horizontal scroll effects

section progress

large typography movement

Use gsap.context() or an equivalent cleanup strategy.

Kill/revert ScrollTriggers when components unmount.

19. React Bits

Use React Bits selectively.

Required:

CountUp

Splash Cursor

CountUp:

loading screen

stats section

Splash Cursor:

desktop only

disable for touch/mobile devices

do not interfere with interaction

Do not add React Bits effects just because they look cool.

Every effect must support the design.

20. About Section

Section label:

02 — ABOUT ME

Layout:

Image | Description | Metadata

Include:

grayscale supporting image

professional summary

reusable components / API / state management mention

experience

location

email

availability

resume CTA

Use the supplied resume as the content source.

Do not invent information.

21. Stats Section

Section label:

03 — STATS

Use animated counters.

Example:

2+
YEARS EXPERIENCE

4+
MAJOR PROJECTS

4+
PRODUCT DOMAINS

Only use verified numbers.

Stats animate when entering the viewport.

22. Skills Section

Section label:

04 — SKILLS

Use clean bordered skill items.

Relevant skills from the resume include:

React.js

JavaScript ES6+

Redux

Redux Toolkit

Context API

React Router

Axios

Tailwind CSS

shadcn/ui

Material UI

Ant Design

Firebase / Firestore

Stripe

Google Maps API

REST APIs

Git

GitHub

Vite

Vercel

Netlify

Do not invent skills.

23. Projects Section

Section label:

05 — SELECTED PROJECTS

Projects:

Suite Booking Website

Apartment Management System

Hotel & Restaurant Booking Platform

E-Commerce Flower Application

Each project needs:

project image

project number

title

short description

technology tags

CTA

hover animation

Use clean white cards with subtle borders.

24. Project Scroll Experience

This is the major GSAP interaction.

Desktop:

pin project showcase

scrolling changes active project

project image transitions

title/description update

progress indicator updates

The section should feel like a premium case-study carousel.

Mobile:

Do NOT force the pinned desktop experience.

Use normal vertical project cards or a simpler horizontal interaction.

25. How I Build

Section:

06 — HOW I BUILD

Stages:

01 UNDERSTAND
02 PLAN
03 BUILD
04 OPTIMIZE
05 DEPLOY

Use an editorial timeline/flow.

Animate each stage on scroll.

Orange dots/line can show progress.

26. Experience

Section:

07 — EXPERIENCE

Use a clean vertical timeline.

Use the supplied resume as the source of truth.

Do not fabricate employment dates.

Timeline animation:

line draws

dot appears

role reveals

description reveals

Use Framer Motion for local reveals.

27. Contact

Section:

08 — LET'S TALK

Large:

LET'S
TALK.

Include:

Email

LinkedIn

GitHub

Start a Project CTA

Use black/white with small orange accents.

28. Footer

Minimal.

PRANAV P.

© 2026 Pranav P.

BACK TO TOP ↑

Back-to-top should use smooth scrolling.

29. Responsive Rules

Desktop

Preserve the reference composition.

Use:

12-column grid

large hero typography

large profile image

side rails

generous whitespace

Tablet

Reduce:

typography

gaps

image size

But do NOT allow the image to collapse.

Mobile

Recompose the layout.

Order:

Navbar
↓
LET'S TALK
↓
Profile image
↓
Name / role
↓
Description
↓
About
↓
Stats
↓
Skills
↓
Projects
↓
How I Build
↓
Experience
↓
Contact
↓
Footer

On mobile:

hide desktop side rails

hide Splash Cursor

reduce GSAP effects

no forced project pinning

maintain readable typography

30. Component Architecture

Use a feature/section-oriented structure.

src/
├── app/
│   ├── App.tsx
│   └── routes.tsx
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── motion/
│   └── ui/
│
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
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── hooks/
│   ├── useReducedMotion.ts
│   ├── useMediaQuery.ts
│   └── useIsMobile.ts
│
├── lib/
│   ├── utils.ts
│   └── animations.ts
│
├── styles/
│   ├── variables.css
│   ├── globals.css
│   ├── typography.css
│   └── utilities.css
│
├── App.tsx
├── main.tsx
└── index.css

Do not create one giant App.tsx.

31. Data Architecture

Keep portfolio content separate.

Example:

export const projects = [
  {
    id: 1,
    title: "Suite Booking Website",
    description: "...",
    technologies: ["React.js", "Firebase", "Payment Gateway"],
    image: "...",
  },
];

Do the same for:

skills

experience

social links

navigation

Components should consume data rather than hardcoding repeated content.

32. Animation Architecture

Create reusable components/utilities such as:

MotionReveal
FadeUp
StaggerContainer
TextReveal
ScrollProgress
MagneticButton

For GSAP:

useHeroAnimation
useProjectScroll
useParallax
useGsapContext

Do not put all GSAP code inside App.tsx.

33. CSS Architecture

Use:

styles/
├── variables.css
├── globals.css
├── typography.css
└── utilities.css

Variables:

colors

spacing

typography

breakpoints

borders

radii

transitions

z-index

Do not scatter design values across hundreds of components.

34. Border / Radius Rules

The reference design is mostly sharp and editorial.

Use small radius values only where useful.

Prefer:

border-radius: 2px–8px;

Avoid:

border-radius: 9999px;

for normal cards.

Pills should only be used for tags or compact metadata.

35. Buttons

Primary CTA:

START A PROJECT →

or:

LET'S TALK →

Style:

white background / black border or black background depending on
context

black text or white text

orange arrow

thin border

subtle hover animation

Hover:

background transition

arrow translates right

slight border/accent change

Use Framer Motion.

36. Images

Centralize image imports.

Do not scatter remote URLs throughout JSX.

Use:

src/assets/images/

For project images, use placeholders until actual screenshots are
supplied.

Use:

object-fit: cover;

where appropriate.

Optimize image dimensions.

Do not load enormous source images unnecessarily.

37. Profile Image Requirements

The profile image is especially important.

The target is the large portrait shown in Reference 2, not the tiny
narrow portrait shown in Reference 1.

The image should:

remain large

have a minimum desktop width

occupy its own grid area

not shrink

not be squeezed by the headline

remain visually dominant

scale responsively

crop naturally using object-fit: cover

preserve the face

If the current implementation uses:

display: flex;

and the text pushes the image into a tiny width, refactor the hero into
a grid.

Do not patch this with arbitrary negative margins.

38. Accessibility

Implement:

semantic HTML

proper headings

alt text

keyboard navigation

visible focus states

accessible buttons

accessible links

sufficient contrast

reduced-motion support

Use:

@media (prefers-reduced-motion: reduce)

Disable/reduce:

GSAP ScrollTrigger

Splash Cursor

large parallax

excessive transitions

39. Performance

Prioritize:

transform/opacity animations

lazy loading

image optimization

minimal dependencies

proper GSAP cleanup

no unnecessary re-renders

no layout thrashing

Avoid animating:

width
height
top
left
margin

when transform-based alternatives are possible.

Prefer:

transform
opacity

40. SEO

Add:

meaningful page title

meta description

semantic headings

Open Graph metadata where appropriate

descriptive image alt text

favicon

Example title:

Pranav P. — Frontend Developer

41. Quality Requirements

Before considering the project complete:

[ ] npm install works
[ ] npm run dev works
[ ] npm run build works
[ ] TypeScript passes
[ ] no console errors
[ ] no broken imports
[ ] no broken images
[ ] loading CountUp works
[ ] loading exit works
[ ] hero image is NOT compressed
[ ] hero matches Reference 2
[ ] navbar works
[ ] mobile navigation works
[ ] Splash Cursor works on desktop
[ ] Splash Cursor disabled on mobile
[ ] Framer Motion works
[ ] GSAP ScrollTrigger works
[ ] project showcase works
[ ] reduced motion works
[ ] mobile layout works
[ ] tablet layout works
[ ] desktop layout works
[ ] keyboard navigation works
[ ] contact links work
[ ] resume link works

42. Visual QA Requirement

After implementation, compare the browser output against Reference 2.

Pay particular attention to:

Hero proportions

Profile image size

LET'S TALK typography

Name/role placement

Navigation spacing

Section spacing

Orange accent usage

Card proportions

Project layout

Timeline

Contact section

Mobile composition

If an element differs because of implementation constraints, preserve
the visual hierarchy and design intent rather than blindly matching
pixels.

43. Git

Repository:

https://github.com/no-humans/portfolio.git

Initial setup:

git init
git remote add origin https://github.com/no-humans/portfolio.git
git branch -M main
git add .
git commit -m "Initial portfolio implementation"
git push -u origin main

Do not commit:

node_modules/
dist/
.env
.env.*

44. Final Deliverable

The final project must be a complete working React application.

Verify:

npm run build

Then package the project into:

pranav-portfolio.zip

The ZIP must NOT contain:

node_modules/
dist/
.git/

The ZIP should contain:

pranav-portfolio/
├── src/
├── public/
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── index.html
├── .gitignore
└── README.md

The README must explain:

installation

development

production build

profile image location

project image location

portfolio content/data location

contact/social link location

Framer Motion architecture

GSAP architecture

React Bits usage

responsive behavior

45. Final Instruction

Treat the attached Reference 2 UI design as the primary visual source
of truth.

The current screenshot in Reference 1 exposes an implementation problem:
the profile image has collapsed into a narrow strip.

Fix the underlying layout architecture so that the profile image has a
dedicated, substantial hero column and visually matches the intended
large portrait composition in Reference 2.

Do not simply hide the problem.

Do not use arbitrary negative margins.

Do not use a fixed desktop-only width that breaks responsiveness.

Build the portfolio as a clean, maintainable, production-quality React
application with:

React

TypeScript

Tailwind CSS

Framer Motion

GSAP

ScrollTrigger

React Bits

responsive design

accessible interactions

reusable components

centralized design tokens

clean animation architecture

The final result must feel like a premium frontend developer
portfolio, with the design doing most of the work and animation
enhancing the experience rather than overwhelming it.