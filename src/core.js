/* ========================================
   CORE INITIALIZER (core.js)
   ----------------------------------------
   Mounts components first, then initializes
   all behaviour modules.
======================================== */

import "./styles/styles.css";

import { mountComponents } from "./mount.js";

import { initNav } from "./behaviours/nav.js";
import { initReveal } from "./behaviours/reveal.js";
import { initCarousel } from "./behaviours/carousel.js";
import { initAccordion } from "./behaviours/accordion.js";
import { initTimeline } from "./behaviours/timeline.js";
import { initAnimations } from "./behaviours/animations.js";
import { initParallax } from "./behaviours/parallax.js";

/**
 * Full initialization pipeline:
 * mounts components and activates behaviours.
 *
 * @param {HTMLElement|Document} root
 */
export async function mountAndInit(root = document) {
  await mountComponents(root);
  initUI(root);
}

/**
 * Primary entry point (recommended).
 * Mounts all components and initializes behaviours.
 *
 * @param {HTMLElement|Document} root
 */
export async function initAll(root = document) {
  await mountAndInit(root);
}

/**
 * Initializes all behaviour modules.
 * Each module is responsible for attaching
 * event listeners and DOM interactions.
 *
 * @param {HTMLElement|Document} root
 */
export function initUI(root = document) {
  initNav();
  initReveal(root);
  initCarousel(root);
  initAccordion(root);
  initTimeline(root);
  initAnimations(root);
  initParallax(root);
}