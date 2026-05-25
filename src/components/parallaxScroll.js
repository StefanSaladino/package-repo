/* ========================================
   PARALLAX SCROLL COMPONENT
   ----------------------------------------
   Split layout section with a parallax
   image layer and static content block.

   Motion behaviour is controlled by the
   parallax behaviour module via data attrs.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

/**
 * Renders a parallax scroll section.
 *
 * @param {Object} options
 * @returns {string}
 */
export function renderParallaxScroll(options = {}) {
  const defaults = {
    eyebrow: "Parallax Scroll",
    title: "Layered motion with depth",
    text:
      "This section adds a subtle parallax shift to create visual rhythm without overwhelming the page.",
    imageSrc: "",
    imageAlt: "",
    ctaLabel: "Learn More",
    ctaHref: "#contact",
    imagePosition: "center center",
    loading: "eager",
    speed: 0.16,
    scale: 1.08
  };

  const settings = { ...defaults, ...options };

  return `
    <section
      class="section parallax-scroll reveal"
      data-parallax-section
      data-parallax-speed="${escapeHtml(String(settings.speed))}"
      data-parallax-scale="${escapeHtml(String(settings.scale))}"
    >

      <div class="container parallax-scroll-grid">

        <!-- Text Content -->
        <div class="parallax-scroll-copy">
          ${settings.eyebrow ? `<span class="eyebrow">${escapeHtml(settings.eyebrow)}</span>` : ""}
          <h2>${escapeHtml(settings.title)}</h2>
          <p>${escapeHtml(settings.text)}</p>

          ${
            settings.ctaLabel
              ? `<a class="btn btn-brand" href="${escapeHtml(settings.ctaHref)}">
                  ${escapeHtml(settings.ctaLabel)}
                </a>`
              : ""
          }
        </div>

        <!-- Media -->
        <div class="parallax-scroll-media">
          <div class="parallax-scroll-frame">
            <img
              src="${escapeHtml(settings.imageSrc)}"
              alt="${escapeHtml(settings.imageAlt)}"
              class="parallax-scroll-image"
              data-parallax-image
              loading="${escapeHtml(settings.loading)}"
              decoding="async"
              style="object-position:${escapeHtml(settings.imagePosition)};"
            />
          </div>
        </div>

      </div>
    </section>
  `;
}