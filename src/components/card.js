/* ========================================
   CARD COMPONENT
   ----------------------------------------
   Generic content card used for services,
   features, summaries, or promo blocks.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

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
  const classes = ["card", className].filter(Boolean).join(" ");

  return `
    <article class="${classes}">
      ${
        imageSrc
          ? `
            <div class="card-media">
              <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt || title)}" loading="lazy" decoding="async" />
            </div>
          `
          : ""
      }

      <div class="card-body">
        ${eyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>

      ${
        ctaLabel
          ? `
            <div class="card-actions">
              <a class="btn btn-outline" href="${escapeHtml(ctaHref || "#")}">${escapeHtml(ctaLabel)}</a>
            </div>
          `
          : ""
      }
    </article>
  `;
}