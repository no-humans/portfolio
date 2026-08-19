# Hero Specification

## Composition

Follow the target reference:

```text
---------------------------------------------------
| LET'S TALK | NAME / ROLE | LARGE PROFILE IMAGE |
---------------------------------------------------
```

Tune proportions visually.

## Hero Height

Desktop:

```css
min-height: 100svh;
```

Account for the navbar.

## Profile Image

The portrait must be large and visually important.

It must:
- occupy its own layout area
- have a meaningful minimum width
- remain visible on desktop
- not shrink because of headline width
- preserve the face
- scale responsively

Prefer CSS Grid.

Example direction:

```css
.hero-grid {
  display: grid;
  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(240px, 0.8fr)
    minmax(320px, 1.1fr);
}
```

Portrait wrapper direction:

```css
.hero-image-wrapper {
  width: min(38vw, 520px);
  min-width: 320px;
  height: clamp(420px, 70vh, 680px);
  margin-left: auto;
  flex-shrink: 0;
}
```

Tune against the reference.

Image:

```css
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
```

Do not use arbitrary negative-margin hacks.

## Typography

```text
LET'S
TALK
```

Large black display text with a small orange decorative mark.

```text
MY NAME IS
PRANAV P.
FRONTEND
DEVELOPER
```

`DEVELOPER` is orange.

## Decorative Elements

Keep subtle:
- circular outline
- orange circle
- dot/grid field
- section rail
- social rail

## Mobile

Recompose:

```text
LET'S TALK
Profile
Name / Role
Description
Scroll
```
