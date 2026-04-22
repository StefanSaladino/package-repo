/* ========================================
   CORE INITIALIZER
   ----------------------------------------
   Mounts components first, then initializes
   all behaviour modules.
======================================== */

import { mountComponents } from "./mount.js";
import { initNav } from "./behaviours/nav.js";
import { initReveal } from "./behaviours/reveal.js";
import { initCarousel } from "./behaviours/carousel.js";
import { initAccordion } from "./behaviours/accordion.js";
import { initTimeline } from "./behaviours/timeline.js";
import { initAnimations } from "./behaviours/animations.js";
import { initParallax } from "./behaviours/parallax.js";

export async function mountAndInit(root = document) {
  await mountComponents(root);
  initUI(root);
}

export function initUI(root = document) {
  initNav();
  initReveal(root);
  initCarousel(root);
  initAccordion(root);
  initTimeline(root);
  initAnimations(root);
  initParallax(root);
}