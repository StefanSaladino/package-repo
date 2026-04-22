/* ========================================
   CUSTOM ANIMATIONS
   ----------------------------------------
   Applies a staggered floating animation
   to elements marked with [data-float].

   Behavior:
   - Adds a CSS class to trigger animation
   - Applies incremental delay per element
   - Prevents duplicate initialization

   Usage:
   <div data-float></div>
======================================== */

/**
 * Initializes floating animations.
 *
 * @param {HTMLElement|Document} root
 */
export function initAnimations(root = document) {
  const items = root.querySelectorAll("[data-float]");

  items.forEach((item, index) => {
    // Prevent re-initialization
    if (item.dataset.floatInitialized === "true") return;
    item.dataset.floatInitialized = "true";

    // Apply animation class
    item.classList.add("is-floating");

    // Stagger animation timing
    item.style.animationDelay = `${index * 120}ms`;
  });
}