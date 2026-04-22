/* ========================================
   PARALLAX SCROLL COMPONENT
   ----------------------------------------
   A split layout with a moving image layer.
   Mounted via data-component="parallax-scroll".
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

export function renderParallaxScroll(options = {}) {
  const defaults = {
    eyebrow: "Parallax Scroll",
    title: "Layered motion with depth",
    text:
      "This section adds a subtle parallax shift to create visual rhythm without overwhelming the page.",
    imageSrc:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Construction and service work visual",
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
        <div class="parallax-scroll-copy">
          ${settings.eyebrow ? `<span class="eyebrow">${escapeHtml(settings.eyebrow)}</span>` : ""}
          <h2>${escapeHtml(settings.title)}</h2>
          <p>${escapeHtml(settings.text)}</p>
          ${
            settings.ctaLabel
              ? `<a class="btn btn-brand" href="${escapeHtml(settings.ctaHref)}">${escapeHtml(settings.ctaLabel)}</a>`
              : ""
          }
        </div>

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