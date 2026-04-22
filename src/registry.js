/* ========================================
   COMPONENT REGISTRY
   ----------------------------------------
   Central mapping of component identifiers
   to their respective render functions.

   This acts as the "source of truth" for all
   UI components available in the system.

   Each component must expose a `render(props)`
   function that returns an HTML string.

   Adding a new component:
   1. Create the component file in /components
   2. Import its render function here
   3. Register it in the object below

   This enables declarative usage via:
   <div data-component="component-name"></div>
======================================== */

import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { renderButton } from "./components/button.js";
import { renderCard } from "./components/card.js";
import { renderForm } from "./components/form.js";
import { renderAccordion } from "./components/accordion.js";
import { renderReviewCarousel } from "./components/reviewCarousel.js";
import { renderTimeline } from "./components/timeline.js";
import { renderStaggeredTimeline } from "./components/staggeredTimeline.js";
import { renderParallaxScroll } from "./components/parallaxScroll.js";

/**
 * Registry object mapping component names
 * (used in HTML data attributes) to their renderers.
 */
export const componentRegistry = {
  header: { render: renderHeader },
  footer: { render: renderFooter },
  button: { render: renderButton },
  card: { render: renderCard },
  form: { render: renderForm },
  accordion: { render: renderAccordion },
  "review-carousel": { render: renderReviewCarousel },
  timeline: { render: renderTimeline },
  "staggered-timeline": { render: renderStaggeredTimeline },
  "parallax-scroll": { render: renderParallaxScroll }
};