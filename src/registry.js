/* ========================================
   COMPONENT REGISTRY
   ----------------------------------------
   Maps component names to their renderers.
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