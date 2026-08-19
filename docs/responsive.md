# Responsive Design

Use composition changes, not just scaled desktop CSS.

## Breakpoints

```text
Mobile: 0–639px
Small Tablet: 640–767px
Tablet: 768–1023px
Laptop: 1024–1279px
Desktop: 1280–1535px
Large Desktop: 1536px+
```

## Desktop

Preserve:
- large LET'S TALK
- large profile portrait
- three-part hero composition
- side rails
- generous whitespace
- 12-column grid

## Tablet

Reduce typography, gaps and image dimensions, but never allow the portrait to collapse.

## Mobile

Recompose:

```text
Navbar
↓
LET'S TALK
↓
Profile
↓
Name / Role
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
```

Hide desktop rails, disable Splash Cursor, reduce heavy GSAP effects and use normal vertical project cards.

No accidental horizontal overflow.
