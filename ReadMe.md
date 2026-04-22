# Contractor UI

**Contractor UI** is a reusable front-end design system for contractor and service websites.

It is built as a plain ES module package with small, focused render functions and behavior modules. The goal is to make it easy to assemble fast, accessible, SEO-friendly websites without introducing a heavy framework.

The package identity in `package.json` is **`@stefansaladino/contractor-ui`**. The repository is published as a reusable source package and can be installed directly from the GitHub repo using:

```bash
npm install StefanSaladino/package-repo
```

## What this project is for

Contractor UI is designed for sites that need:

* reusable page sections
* clean semantic markup
* responsive layouts
* lightweight interactivity
* a consistent visual system
* simple deployment on static hosts

Typical use cases include:

* contractor websites
* trades and home services sites
* quote and lead-generation landing pages
* service business brochure sites
* SEO-first static pages

## Why this structure works

The codebase is intentionally split into three layers:

### 1. Renderers

Renderer functions return HTML strings. They do not attach events or manage state. Their job is to generate markup for reusable sections such as headers, footers, buttons, cards, forms, accordions, timelines, and review carousels.

### 2. Behaviors

Behavior modules attach the interactive parts after markup is mounted. This includes mobile navigation, accordion toggling, reveal animations, carousel movement, timeline reveals, floating effects, and parallax motion.

### 3. Styles

A shared stylesheet provides the visual system, layout helpers, responsive behavior, and component styling. The CSS is mobile-first and progressively enhanced for larger screens.

## What is included

This package ships with:

* reusable render functions for common UI sections
* behavior modules for interaction and motion
* a shared design system stylesheet
* a demo folder that shows the system in action
* a public entry point for easy importing
* HTML escaping utilities for safe string rendering

## Package metadata

* **Package name:** `@stefansaladino/contractor-ui`
* **Module format:** ES modules
* **Main entry:** `./src/index.js`
* **Styles export:** `./styles.css`
* **License:** MIT

## File structure

```text
contractor-ui/
├── package.json
├── README.md
├── demo/
│   ├── index.html
│   └── main.js
└── src/
    ├── index.js
    ├── core.js
    ├── utils/
    │   └── escapeHtml.js
    ├── components/
    │   ├── header.js
    │   ├── footer.js
    │   ├── button.js
    │   ├── card.js
    │   ├── form.js
    │   ├── accordion.js
    │   ├── reviewCarousel.js
    │   ├── timeline.js
    │   ├── staggeredTimeline.js
    │   └── parallaxScroll.js
    ├── behaviors/
    │   ├── nav.js
    │   ├── reveal.js
    │   ├── carousel.js
    │   ├── accordion.js
    │   ├── timeline.js
    │   ├── animations.js
    │   └── parallax.js
    └── styles/
        └── styles.css
```

## Core concepts

### Component registry

The component registry maps a `data-component` name to its renderer.

That allows you to write HTML like this:

```html
<div data-component="card" data-props='{"title":"Fast, Reliable Work","body":"Built for contractor websites."}'></div>
```

The mount system reads the placeholder, finds the matching renderer, and replaces the element with the generated HTML.

### Mounting lifecycle

The intended order is:

1. render components into the DOM
2. initialize behaviors

That order matters because behaviors need actual markup to exist before they can attach listeners, observers, or motion effects.

## Installation

### Install from the GitHub repo

```bash
npm install StefanSaladino/package-repo
```

### Import from the package

In a bundler-based project, import the public entry point and the stylesheet:

```js
import { mountAndInit } from "@stefansaladino/contractor-ui";
import "@stefansaladino/contractor-ui/styles.css";
```

## Before you use it

This package is most useful when you already have a page or site shell in place and want to populate it with modular content blocks.

The system is especially good when you want:

* server-rendered or static HTML
* a simple component API without framework overhead
* behavior that can be attached after the page loads
* reusable sections across multiple pages or clients

## How to use it

### 1) Add placeholders in your HTML

Use `data-component` for each block you want mounted.

```html
<header data-component="header"></header>

<main>
  <section data-component="card" data-props='{
    "eyebrow": "Featured Service",
    "title": "Concrete Pumping",
    "body": "Efficient, reliable service for residential and commercial projects."
  }'></section>

  <section data-component="accordion" data-props='{
    "title": "Frequently Asked Questions",
    "openIndex": 0
  }'></section>
</main>

<footer data-component="footer"></footer>
```

### 2) Mount and initialize the UI

```js
import { mountAndInit } from "@stefansaladino/contractor-ui";

document.addEventListener("DOMContentLoaded", () => {
  mountAndInit(document);
});
```

### 3) Or run the steps separately

```js
import { mountComponents, initUI } from "@stefansaladino/contractor-ui";

await mountComponents(document);
initUI(document);
```

## Available components

### `header`

Responsive site header with branding, desktop navigation, mobile navigation, and CTA buttons.

### `footer`

Multi-column footer with branding, optional links, and optional map embed.

### `button`

Returns either an `<a>` or `<button>` depending on whether `href` is supplied.

### `card`

Generic content card for service blocks, feature cards, summaries, or promos.

### `form`

Flexible form renderer with support for inputs, textarea, select, and Netlify form wiring.

### `accordion`

Accessible FAQ-style accordion with ARIA synchronization.

### `review-carousel`

Review track layout designed to work with the carousel behavior for seamless motion.

### `timeline`

Simple linear timeline for milestones and process steps.

### `staggered-timeline`

Alternating timeline layout with left/right positioning and a central spine.

### `parallax-scroll`

Split section with a parallax image layer and a content column.

## Available behaviors

### `initNav()`

Handles the mobile hamburger menu, outside click closing, Escape key support, and responsive reset on resize.

### `initReveal()`

Reveals elements with the `.reveal` class when they enter the viewport.

### `initCarousel()`

Creates the seamless infinite review carousel and generates initials for avatar placeholders.

### `initAccordion()`

Manages accordion open/close state and keeps ARIA attributes aligned with the current state.

### `initTimeline()`

Reveals timeline items using IntersectionObserver, with a fallback for older browsers.

### `initAnimations()`

Adds floating animation classes to elements marked with `data-float`.

### `initParallax()`

Applies scroll-based parallax motion to sections with `data-parallax-section` and `data-parallax-image`.

## Example usage patterns

### Card with a CTA

```js
renderCard({
  eyebrow: "Popular",
  title: "Fast Turnaround",
  body: "We keep jobs moving and communication clear.",
  ctaLabel: "Get a Quote",
  ctaHref: "#contact"
});
```

### Button as a link

```js
renderButton({
  label: "Call Now",
  href: "tel:+10000000000",
  variant: "brand"
});
```

### Netlify form

```js
renderForm({
  netlifyName: "contact",
  submitLabel: "Send Message",
  note: "We usually respond within one business day."
});
```

## Accessibility notes

The system uses several accessibility-minded patterns:

* semantic elements such as `<header>`, `<nav>`, `<main>`, `<footer>`, and `<article>`
* `aria-expanded`, `aria-controls`, and `aria-labelledby` for interactive components
* `prefers-reduced-motion` support for motion-heavy behaviors
* keyboard-friendly interactions for the header menu and review cards
* safe defaults for labels, links, and image alt text

## Styling notes

The stylesheet is built mobile-first and uses shared design tokens for consistency.

It includes:

* layout helpers such as `.container`, `.section`, and `.grid`
* shared button, card, form, accordion, header, footer, timeline, carousel, and parallax styles
* responsive breakpoints that progressively enhance the layout on tablet and desktop
* animation hooks for reveal, floating, and parallax effects

## Extending the system

### Add a new component

1. Create a new file in `src/components/`
2. Export a renderer that returns an HTML string
3. Register it in `src/registry.js`
4. Export it from `src/index.js`
5. Add any supporting styles in `src/styles/styles.css`

### Add a new behavior

1. Create a file in `src/behaviors/`
2. Export an initializer function
3. Import it in `src/core.js`
4. Export it from `src/index.js` if it should be public

## Development notes

* Component renderers should stay focused on markup only
* Behavior modules should stay focused on DOM interactions only
* Shared styling should live in the stylesheet rather than inside components
* HTML escaping should be used whenever dynamic content is inserted into strings
* Mounting should happen before behavior initialization

## Demo folder

The `demo/` folder provides a simple browser example for testing the package outside of a full application.

A demo page typically:

* imports the public entry point from `src/index.js`
* includes placeholder elements with `data-component`
* calls `mountAndInit()` after the DOM is ready
* loads `src/styles/styles.css`

## Browser support

The codebase is designed for modern browsers that support:

* ES modules
* `dataset`
* `querySelectorAll`
* `requestAnimationFrame`
* `IntersectionObserver` with graceful fallbacks

## License

MIT

## Author

Stefan Saladino
