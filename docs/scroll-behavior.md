# Scroll Behavior

## Core Rule

The portfolio is a normal user-controlled scrolling website.

The user must be able to scroll freely.

## Forbidden

Never automatically navigate:

```text
About → Hero
Stats → How I Build
How I Build → Footer
```

Do not use timers to navigate sections.

Do not use global:

```css
scroll-snap-type: y mandatory;
```

Do not automatically call `scrollTo()` or `scrollIntoView()` when a section enters the viewport.

## Navigation

Navigation clicks may smoothly scroll to a requested section because the user initiated the action.

## Projects

A controlled desktop GSAP project showcase is allowed. If `pin` is used, it must remain isolated to Projects. Avoid `snap` if it causes unexpected page movement.

Mobile should use normal vertical cards.

## Loading

The loading screen may temporarily control scrolling. Once it ends, normal scrolling must be enabled.

## Testing

Verify both directions:

```text
Hero → About → Stats → Skills → Projects → How I Build → Experience → Contact → Footer
Footer → Contact → Experience → How I Build → Projects → Skills → Stats → About → Hero
```

No unexpected jumps.
