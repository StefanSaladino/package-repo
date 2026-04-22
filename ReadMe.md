# Contractor UI

A reusable, versioned front-end design system for contractor and service websites.

This package is built as a plain ESM library so you can use it in:
- static sites
- Vite projects
- modern React/Next/Vue apps
- any bundler that supports ES modules and CSS imports

---

## What is included

This package ships with:
- render functions for reusable HTML components
- behavior modules for navigation, scroll reveal, carousel motion, accordion toggling, timeline reveal, and optional floating animations
- a shared stylesheet
- a demo site showing the system in action
- npm-ready versioning so you can pin releases by version

---

## Why this structure exists

The package is split into three layers:

### 1. Renderers
These return HTML strings.

Examples:
- `renderHeader()`
- `renderFooter()`
- `renderButton()`
- `renderCard()`
- `renderForm()`
- `renderAccordion()`
- `renderReviewCarousel()`
- `renderTimeline()`
- `renderStaggeredTimeline()`

### 2. Behaviors
These attach interaction and motion after the HTML is mounted.

Examples:
- `initNav()`
- `initReveal()`
- `initCarousel()`
- `initAccordion()`
- `initTimeline()`
- `initAnimations()`

### 3. Styles
All shared visual rules live in one stylesheet:
- `src/styles/styles.css`

---

## File structure

```txt
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
    │   └── staggeredTimeline.js
    ├── behaviors/
    │   ├── nav.js
    │   ├── reveal.js
    │   ├── carousel.js
    │   ├── accordion.js
    │   ├── timeline.js
    │   └── animations.js
    └── styles/
        └── styles.css

Installation
Install from npm
npm install @yourname/contractor-ui@1.0.0

The version number can be pinned exactly or ranged using SemVer.

SemVer example
1.0.0 = first stable release
1.0.1 = patch fix
1.1.0 = new backward-compatible feature
2.0.0 = breaking change

To update a dependency without unexpected breaking changes, pin the exact version you want.

Publishing workflow

From the package repo:

npm login
npm version patch
npm publish

Use:

npm version patch for bug fixes
npm version minor for new backwards-compatible components
npm version major for breaking changes

If the package is scoped and public, publish it as a public scoped package.

How to use in a project
1. Import styles

If your project uses a bundler, import the stylesheet:

import "@yourname/contractor-ui/styles.css";
2. Mount your components

Render functions return HTML strings. Put them into the DOM with innerHTML or your framework’s equivalent.

import {
  renderHeader,
  renderFooter,
  renderReviewCarousel,
  initUI
} from "@yourname/contractor-ui";

document.querySelector("#header").innerHTML = renderHeader();
document.querySelector("#footer").innerHTML = renderFooter();
document.querySelector("#reviews").innerHTML = renderReviewCarousel();

// then wire the behaviors
initUI();

initUI();
3. Important order of operations

Render the HTML first. Then call initUI().

That is essential because:

the carousel needs the review cards already in the DOM
the accordion needs its markup in the DOM
reveal observers need visible targets to exist
the navigation needs the header to be mounted
Public API
Renderers
renderHeader(options)
Creates the site header with desktop navigation and a mobile menu.

Common options:

brandName
homeHref
logoSrc
logoLetter
links
ctaLabel
ctaHref
ctaSecondaryLabel
ctaSecondaryHref
renderFooter(options)

Creates the footer with columns and an optional embedded map.

Common options:

brandName
tagline
description
logoSrc
logoLetter
columns
mapSrc
copyrightText
renderButton(options)

Returns either an <a> or <button>.

Common options:

label
href
type
variant
className
target
rel
renderCard(options)

Creates a reusable card block.

Common options:

eyebrow
title
body
imageSrc
imageAlt
ctaLabel
ctaHref
className
renderForm(options)

Creates a flexible form layout.

Common options:

action
method
netlifyName
submitLabel
note
fields

Supported field types:

text
email
tel
textarea
select
renderAccordion(options)

Creates a reusable accordion with one open item by default.

Common options:

items
openIndex
idPrefix
renderReviewCarousel(options)

Creates the review carousel track and cards.

Common options:

reviews
renderTimeline(options)

Creates the standard vertical timeline.

Common options:

items
renderStaggeredTimeline(options)

Creates the alternating left/right timeline.

Common options:

items
Behaviors
initUI(root = document)

Initializes all behaviors in the correct order.

It runs:

initNav()
initReveal(root)
initCarousel(root)
initAccordion(root)
initTimeline(root)
initAnimations(root)
initNav()

Wires the hamburger menu.

initReveal(root)

Activates scroll reveal for .reveal blocks.

Supports:

default fade-up
data-reveal="left"
data-reveal="right"
data-reveal="up"
data-reveal="scale"
staggered child reveal using [data-reveal-child]
initCarousel(root)

Makes every [data-reviews-track] lane auto-scroll as a seamless loop and pause on hover/focus.

initAccordion(root)

Wires the accordion so one item opens at a time in each accordion block.

initTimeline(root)

Reveals timeline items as they enter the viewport.

initAnimations(root)

Adds the floating animation class to any element with data-float.

Demo site

The demo/ folder shows how to use the package locally before publishing it.

Run the demo

Use any local server. For example:

npx serve demo

or:

python -m http.server

Open the demo through a local server, not file://, because ES module imports require a server context.

Demo flow

The demo does this in order:

loads the header/footer markup with render functions
mounts cards, reviews, accordions, timelines, and forms
calls initUI(document) to attach the behaviors

That is the exact pattern to follow in a real project.

Using the package in a real site
Example
import "@yourname/contractor-ui/styles.css";
import {
  renderHeader,
  renderReviewCarousel,
  renderTimeline,
  initUI
} from "@yourname/contractor-ui";

document.querySelector("#header").innerHTML = renderHeader({
  brandName: "Your Company",
  homeHref: "/",
  logoLetter: "Y",
  links: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ],
  ctaLabel: "Get Quote",
  ctaHref: "#contact"
});

document.querySelector("#reviews").innerHTML = renderReviewCarousel();
document.querySelector("#timeline").innerHTML = renderTimeline();

initUI();
Version pinning strategy

If a project is sensitive to UI changes, pin exact versions:

npm install @yourname/contractor-ui@1.0.0

If you want safe patch/minor updates:

npm install @yourname/contractor-ui@^1.0.0
Updating the package

When you make a change:

update the source
test in the demo
bump the version
publish

Example:

npm version patch
npm publish
What to customize for your own brand

Change these first:

package name in package.json
brand name in renderHeader / renderFooter
logo letter or logo image
navigation labels
footer text
review copy
timeline events
form field configuration
map URL
social / contact details
colors in styles.css
Wiring checklist

If something does not work, check these first:

Did you render the HTML before calling initUI()?
Is the page using a local server, not file://?
Did you import the stylesheet?
Does the carousel have [data-reviews-track]?
Are the header IDs hamburger and mobileMenu present?
Are timeline items using .timeline-item or .staggered-item?
Are reveal sections using .reveal?
Notes

This package intentionally stays framework-agnostic. That means it can be dropped into:

vanilla JS
Vite
React wrappers
server-rendered pages
static site generators

The core idea is simple:

render HTML from functions
attach behavior after mount
keep styles in one source
pin versions when stability matters

---