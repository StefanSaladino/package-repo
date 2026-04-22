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
  const reviews = options.reviews ?? defaultReviews;

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
                    src="../src/assets/Google_Favicon_2025.svg.png"
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