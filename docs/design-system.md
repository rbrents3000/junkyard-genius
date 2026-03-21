# Junkyard Genius — Design System Reference

> **Creative North Star: "The Precision Workshop"**
> A high-tech, editorial build environment. Raw materials are present, but the tools are surgical, the lighting is atmospheric, and the organization is obsessive. Intentional asymmetry over rigid grids. Heavy-weight display type against expansive negative space.

---

## Color Tokens

Source: `src/styles/main.css` (`@theme` block)

### Primary (Orange — "Ignition")

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#ffb59d` | Light primary text |
| `primary-container` | `#ff6b35` | **Main accent** — CTAs, links, active states, rating bars (Jaw) |
| `on-primary` | `#5d1900` | Text on primary surfaces |
| `on-primary-container` | `#5f1900` | Text on primary containers |

### Secondary (Blue — "Logic")

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary` | `#a7c8ff` | Light secondary text |
| `secondary-container` | `#0061b7` | Pro-tip callout borders, interactive states |

### Tertiary (Purple — "Creative")

| Token | Hex | Usage |
|-------|-----|-------|
| `tertiary` | `#d0bcff` | Light tertiary text |
| `tertiary-container` | `#a884ff` | Specialized tools, categorization accents |

### Surfaces

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#131318` | Page background |
| `surface` | `#131318` | Base surface |
| `surface-container-lowest` | `#0e0e13` | Deepest recessed areas |
| `surface-container-low` | `#1b1b20` | Cards, sidebar panels |
| `surface-container` | `#1f1f25` | Mid-level containers |
| `surface-container-high` | `#2a292f` | Interactive/hover cards, step circles |
| `surface-container-highest` | `#35343a` | Empty rating bar segments, active states |
| `on-surface` | `#e4e1e9` | Primary text color |

### Borders

| Token | Hex | Usage |
|-------|-----|-------|
| `outline` | `#a98a80` | Strong borders (hover state) |
| `outline-variant` | `#594139` | Subtle borders (use at 10-20% opacity for "ghost borders") |

### Error / Danger

| Token | Hex | Usage |
|-------|-----|-------|
| `error` | `#ffb4ab` | Error text |
| `error-container` | `#93000a` | Caution callout backgrounds, warning icons |

### Rating Bar Colors

| Rating | Hex | CSS |
|--------|-----|-----|
| Jaw Drop | `#ff6b35` | `bg-[#ff6b35]` |
| Brain Melt | `#3b82f6` | `bg-[#3b82f6]` |
| Wallet | `#22c55e` | `bg-[#22c55e]` |
| Spicy | `#ef4444` | `bg-[#ef4444]` |
| Clout | `#7c3aed` | `bg-[#7c3aed]` |
| Time | `#6b7280` | `bg-[#6b7280]` |

---

## Typography

### Fonts

| Role | Font | Import |
|------|------|--------|
| Headlines, Labels | **Space Grotesk** | `--font-headline`, `--font-label` |
| Body text | **Inter** | `--font-body` |

### Scale

| Style | Font | Weight | Size | Tracking | Transform | Usage |
|-------|------|--------|------|----------|-----------|-------|
| Display | Space Grotesk | 900 | 5xl-7xl | tight (-0.02em) | uppercase | Page titles, hero headings |
| Headline | Space Grotesk | 700-900 | 2xl-4xl | tight | uppercase | Section headings |
| Title | Space Grotesk | 700 | base-lg | tight | uppercase | Card titles, nav links |
| Label | Space Grotesk | 600 | 10px-xs | widest (0.08-0.2em) | uppercase | Section labels, metadata tags, pill text |
| Body | Inter | 400-600 | base | normal | none | Paragraphs, descriptions |

### Key Rules

- Headlines are always `uppercase` with `tracking-tight`
- Labels use `text-[10px]`, `uppercase`, `tracking-widest` — mimics serial numbers
- Body text uses Inter for "user manual" clarity
- Build number badges: `font-headline text-6xl text-primary-container/20`

---

## Spacing & Border Radius

### Radii (Tight Industrial)

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `0.125rem` (2px) | Buttons, chips, badges |
| `radius-md` | `0.25rem` (4px) | Cards, containers, inputs |
| `radius-lg` | `0.5rem` (8px) | Large panels |
| `radius-xl` | `0.75rem` (12px) | Hero images |

**Rule:** No pill shapes. Corners stay tight and "machined."

### Spacing Conventions

- Use `space-12` (3rem) and `space-16` (4rem) generously — breathing room is premium
- Card padding: `p-6` (1.5rem)
- Grid gaps: `gap-8` (2rem) for layout columns, `gap-4` (1rem) for card grids
- Section spacing: `py-8` to `py-12`

---

## Elevation & Depth

### Tonal Layering (No Drop Shadows)

Define depth through background color shifts, not shadows:

```
background (#131318)
  └── surface-container-low (#1b1b20)  ← cards, panels
        └── surface-container-high (#2a292f)  ← hover states, nested elements
              └── surface-container-highest (#35343a)  ← active states, indicators
```

### Glassmorphism

For floating elements (nav, modals, sidebar panels):
```css
background: rgba(19, 19, 24, 0.80);  /* or bg-surface-container-low/80 */
backdrop-filter: blur(16px);
border: 1px solid var(--color-outline-variant) / 10%;
```

### Ghost Borders

Use `outline-variant` at 10-20% opacity. It should be a suggestion of a line, not a hard boundary:
```css
border: 1px solid var(--color-outline-variant) / 10%;
/* Tailwind: border border-outline-variant/10 */
```

---

## Component Patterns

### Hero Section

Used on build detail and category pages.

```
<section class="relative overflow-hidden border-b border-outline-variant/10">
  [Blurred background image at opacity-20]
  [Gradient overlay: from-background via-background/90 to-background/60]
  [Content: breadcrumb, title, stats row, featured image]
</section>
```

### Sidebar Panel (Glassmorphic Card)

Used in build detail sidebar for specs, materials, tracker, share.

```
<div class="bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/10 rounded-sm p-6">
  <h2 class="font-label text-[10px] uppercase tracking-widest text-slate-500 mb-5">
    Section Title
  </h2>
  [content]
</div>
```

### Build Card (Category Grid)

```
<a class="cat-build-card group no-underline">
  [Image: grayscale → color on hover]
  [Build number badge: absolute top-right]
  [Difficulty/time pills]
  [Title: font-headline uppercase, hover:text-primary-container]
  [6 rating bars in 2-column grid]
</a>
```

CSS: `.cat-build-card` has hover translateY(-2px) and border-color transition.

### Rating Bar (`ratingBar` shortcode)

Defined in `.eleventy.js`. Renders 5 small spans (`w-6 h-2 rounded-sm`):
- Filled: rating-specific color (e.g., `bg-[#ff6b35]`)
- Empty: `bg-surface-container-highest`

```liquid
{% ratingBar ratings.jaw, 5, "bg-[#ff6b35]" %}
```

### Prev/Next Navigation Cards

```html
<a class="group flex-1 p-5 bg-surface-container-low border border-outline-variant/10 rounded-sm
          no-underline hover:border-primary-container/30 hover:-translate-y-0.5 transition-all">
  <span class="font-label text-[10px] uppercase tracking-widest text-slate-500">Previous Build</span>
  <span class="font-headline text-base font-bold uppercase tracking-tight text-on-surface
               group-hover:text-primary-container transition-colors">
    Title
  </span>
</a>
```

### Tracker Buttons

```css
.tracker-btn {
  padding: 10px 18px;
  border-radius: 0.25rem;
  border: 1.5px solid #1e2030;
  background: #1b1b20;
  font-family: "Space Grotesk";
  font-weight: 600;
}
.tracker-btn.active { border-color: #3dd68c; color: #3dd68c; }
.tracker-btn-want.active { border-color: #ff6b35; color: #ff6b35; }
```

### Safety Callout (Caution)

```css
.build-caution {
  border-left: 4px solid var(--color-error);
  background: rgba(147, 0, 10, 0.12);
  /* Animated warning icon via ::before with cautionPulse animation */
}
```

### Pro-Tip Blockquote

```css
blockquote:not(.build-caution) {
  border-left: 4px solid var(--color-secondary-container);
  background: rgba(0, 97, 183, 0.08);
  font-style: italic;
}
```

---

## Animation Patterns

| Pattern | Duration | Easing | Usage |
|---------|----------|--------|-------|
| Hover translate | `0.2s` | ease | Card lift (`translateY(-2px)`) |
| Border color | `0.2s` | ease | Card/button hover accent |
| Grayscale | `0.3s` | default | Category card images (grayscale-0 on hover) |
| Color transition | `0.2s-0.3s` | ease | Text/icon color changes on hover |
| `cautionPulse` | `2s` | ease-in-out, infinite | Warning icon opacity pulse (1 → 0.6 → 1) |
| `slideUp` | `0.3s` | ease | Undo toast appearance |
| Details arrow | `0.2s` | default | Ingredients toggle (rotate 90deg) |

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

---

## Do's and Don'ts

### Do

- Embrace intentional asymmetry — push headlines left, body text narrow right
- Use "Technical Metadata" labels — small caps like `SPECIFICATIONS`, `Trophy_Room`, `VER 1.0.4`
- Use `space-12` and `space-16` generously — breathing room makes junk look premium
- Define boundaries through background color shifts, not borders
- Use ghost borders (`outline-variant` at 10-20% opacity) when a line is needed
- Use glassmorphism for floating/sticky elements (nav, sidebar)

### Don't

- Don't use 1px solid opaque borders to section layouts
- Don't use pill-shaped buttons or badges — keep radii tight (`sm` or `md`)
- Don't use generic icons — use thin-stroke, geometric icons (Material Symbols Outlined)
- Don't center-align long-form text — anchor to strong left margin
- Don't use traditional drop shadows — use tonal layering instead
- Don't use Inter for headlines — Space Grotesk is the headline font
