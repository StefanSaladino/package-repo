/* ========================================
   ADVANCED API (POWER USERS ONLY)
   ----------------------------------------
   Exposes low-level system access for:
   - manual mounting
   - registry overrides
   - direct component rendering
   - internal lifecycle control

   WARNING:
   This bypasses normal initAll() flow.
======================================== */

export { initAll, mountAndInit, initUI } from "./core.js";

export { componentRegistry } from "./registry.js";
export { mountComponents, mountComponent } from "./mount.js";

export { escapeHtml } from "./utils/escapeHtml.js";

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

export { initNav } from "./behaviours/nav.js";
export { initReveal } from "./behaviours/reveal.js";
export { initCarousel } from "./behaviours/carousel.js";
export { initAccordion } from "./behaviours/accordion.js";
export { initTimeline } from "./behaviours/timeline.js";
export { initAnimations } from "./behaviours/animations.js";
export { initParallax } from "./behaviours/parallax.js";