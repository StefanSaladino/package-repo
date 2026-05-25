/* ========================================
   REVIEW CAROUSEL COMPONENT
   ----------------------------------------
   Returns the track + review cards.
   The auto-loop behavior is added by JS.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

export function renderReviewCarousel(options = {}) {
  // ========================================
  // DEFAULT DATA (safe fallback)
  // ========================================
  const defaultReviews = [
    {
      name: "John D.",
      role: "Homeowner · Brampton",
      text: "Excellent service. The whole process was clean and professional."
    },
    {
      name: "Sarah M.",
      role: "Renovation Client · GTA",
      text: "Fast turnaround and great communication from start to finish."
    },
    {
      name: "Mike R.",
      role: "Builder · Ontario",
      text: "The carousel feels smooth and the layout is very easy to scan."
    },
    {
      name: "Emily T.",
      role: "Property Owner · Peel Region",
      text: "The team was reliable, careful, and easy to work with."
    },
    {
      name: "Alicia P.",
      role: "Homeowner · Caledon",
      text: "Great experience from quote to completion."
    },
    {
      name: "Jordan K.",
      role: "Builder · York Region",
      text: "Professional work and a strong final result."
    }
  ];

  // ========================================
  // USE PROVIDED DATA OR FALLBACK
  // ========================================
  const reviews = Array.isArray(options.reviews) ? options.reviews : defaultReviews;

  // Optional image source for the Google badge.
  // Defaults to an inline data URI so the component
  // does not depend on a browser-visible node_modules path.
  const googleIconSrc =
    options.googleIconSrc ||
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='12' fill='%23ffffff'/%3E%3Ctext x='12' y='16' text-anchor='middle' font-family='Arial, sans-serif' font-size='12' fill='%23000000'%3EG%3C/text%3E%3C/svg%3E";

  // ========================================
  // RENDER
  // ========================================
  return `
    <div class="reviews-track-wrap">
      <div class="reviews-track" data-reviews-track>
        ${reviews
          .map(
            (review) => `
              <article class="review-card card" tabindex="0">
                <div class="review-header">
                  <div class="avatar" data-name="${escapeHtml(review.name)}"></div>
                  <div>
                    <strong>${escapeHtml(review.name)}</strong>
                    <p>${escapeHtml(review.role)}</p>
                  </div>
                </div>

                <p>${escapeHtml(review.text)}</p>

                <div class="review-meta">
                  <span class="stars">★★★★★</span>
                  <img
                    src="${escapeHtml(googleIconSrc)}"
                    alt="Google review"
                    class="google-icon"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}