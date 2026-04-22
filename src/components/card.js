/* ========================================
   CARD COMPONENT
   ----------------------------------------
   Generic content card used for:
   - Services
   - Features
   - Blog previews
   - Promotional sections

   Supports optional:
   - Image
   - Eyebrow label
   - CTA button

   Designed to be highly reusable and
   layout-agnostic.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

/**
 * Renders a content card.
 *
 * @param {Object} options
 * @param {string} options.eyebrow - Small label above title
 * @param {string} options.title - Card title
 * @param {string} options.body - Main content text
 * @param {string} options.imageSrc - Image URL
 * @param {string} options.imageAlt - Image alt text
 * @param {string} options.ctaLabel - CTA button label
 * @param {string} options.ctaHref - CTA link URL
 * @param {string} options.className - Additional classes
 *
 * @returns {string} HTML string
 */
export function renderCard({
  eyebrow = "",
  title = "Card title",
  body = "Card body text.",
  imageSrc = "",
  imageAlt = "",
  ctaLabel = "",
  ctaHref = "",
  className = ""
} = {}) {
  const classes = ["card", className]
    .filter(Boolean)
    .join(" ");

  return `
    <article class="${classes}">

      ${
        imageSrc
          ? `
            <!-- Optional Card Media -->
            <div class="card-media">
              <img 
                src="${escapeHtml(imageSrc)}" 
                alt="${escapeHtml(imageAlt || title)}" 
                loading="lazy" 
                decoding="async" 
              />
            </div>
          `
          : ""
      }

      <!-- Card Content -->
      <div class="card-body">
        ${eyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>

      ${
        ctaLabel
          ? `
            <!-- Card Call-To-Action -->
            <div class="card-actions">
              <a class="btn btn-outline" href="${escapeHtml(ctaHref || "#")}">
                ${escapeHtml(ctaLabel)}
              </a>
            </div>
          `
          : ""
      }

    </article>
  `;
}