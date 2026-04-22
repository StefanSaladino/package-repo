/* ========================================
   PUBLIC ENTRY POINT (index.js)
   ----------------------------------------
   This file defines the public API of the
   library. Consumers should import from here
   rather than deep internal paths.

   Example:
   import { mountAndInit } from "contractor-ui";
======================================== */

/* Core system */
export { componentRegistry } from "./registry.js";
export { mountComponents, mountComponent } from "./mount.js";
export { mountAndInit, initUI } from "./core.js";

/* Utilities */
export { escapeHtml } from "./utils/escapeHtml.js";

/* Component renderers (optional direct usage) */
export { renderHeader } from "./components/header.js";
export { renderFooter } from "./components/footer.js";
export { renderButton } from "./components/button.js";
export { renderCard } from "./components/card.js";
export { renderForm } from "./components/form.js";
export { renderAccordion } from "./components/accordion.js";
export { renderReviewCarousel } from "./components/reviewCarousel.js";
export { renderTimeline } from "./components/timeline.js";
export { renderStaggeredTimeline } from "./components/staggeredTimeline.js";
export { renderParallaxScroll } from "./components/parallaxScroll.js";

/* Behaviour initializers */
export { initNav } from "./behaviours/nav.js";
export { initReveal } from "./behaviours/reveal.js";
export { initCarousel } from "./behaviours/carousel.js";
export { initAccordion } from "./behaviours/accordion.js";
export { initTimeline } from "./behaviours/timeline.js";
export { initAnimations } from "./behaviours/animations.js";
export { initParallax } from "./behaviours/parallax.js";