/* ========================================
   TIMELINE BEHAVIOR
   ----------------------------------------
   Handles reveal animations for both:
   - Standard timeline (.timeline-item)
   - Staggered timeline (.staggered-item)

   Features:
   - IntersectionObserver-based reveal
   - One-time animation per item
   - Automatic stagger via index delay
   - Graceful fallback for older browsers

   Expected structure:
   .timeline-item OR .staggered-item
     └── (content elements)
======================================== */

/**
 * Initializes timeline reveal animations.
 *
 * @param {HTMLElement|Document} root
 */
export function initTimeline(root = document) {
  const items = root.querySelectorAll(
    ".timeline-item, .staggered-item"
  );

  // Exit early if no timeline items exist
  if (!items.length) return;

  /**
   * Applies visible state to an item.
   *
   * @param {HTMLElement} el
   */
  const reveal = (el) => {
    el.classList.add("is-visible");
  };

  /* ========================================
     INTERSECTION OBSERVER (modern browsers)
  ======================================== */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          reveal(entry.target);

          // Stop observing after reveal
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    items.forEach((item, index) => {
      // Prevent duplicate initialization
      if (item.dataset.timelineInitialized === "true") return;
      item.dataset.timelineInitialized = "true";

      // Apply staggered delay based on position
      item.style.transitionDelay = `${index * 120}ms`;

      observer.observe(item);
    });
  } else {
    /* ========================================
       FALLBACK (no IntersectionObserver)
    ======================================== */
    items.forEach(reveal);
  }
}