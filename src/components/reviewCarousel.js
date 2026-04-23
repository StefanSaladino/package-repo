/* ========================================
   REVIEW CAROUSEL COMPONENT
   ----------------------------------------
   Renders horizontally scrollable review
   cards inside a track container.

   Scrolling/looping behavior is handled
   by the carousel behaviour module.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

/**
 * Renders a review carousel.
 *
 * @param {Object} options
 * @returns {string}
 */
export function renderReviewCarousel(options = {}) {
  const defaultReviews = [
    { name: "John D.", role: "Homeowner", text: "Excellent service." },
    { name: "Sarah M.", role: "Client", text: "Great communication." },
    { name: "Sarah M.", role: "Client", text: "Great communication." },
    { name: "Sarah M.", role: "Client", text: "Great communication." },
    { name: "Sarah M.", role: "Client", text: "Great communication." },
    { name: "Sarah M.", role: "Client", text: "Great communication." }
  ];

  const reviews = options.reviews ?? defaultReviews;

  return `
    <div class="reviews-track-wrap">
      <div class="reviews-track" data-reviews-track>

        ${reviews
          .map(
            (review) => `
              <article class="review-card card" tabindex="0">

                <!-- Header -->
                <div class="review-header">
                  <div class="avatar" data-name="${escapeHtml(review.name)}"></div>
                  <div>
                    <strong>${escapeHtml(review.name)}</strong>
                    <p>${escapeHtml(review.role)}</p>
                  </div>
                </div>

                <!-- Body -->
                <p>${escapeHtml(review.text)}</p>

                <!-- Meta -->
                <div class="review-meta">
                  <span class="stars">★★★★★</span>
                  <img
                    src="node_modules/@stefansaladino/contractor-ui/src/assets/Google_Favicon_2025.svg.png"
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