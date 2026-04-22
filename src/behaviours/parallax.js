/* ========================================
   PARALLAX SCROLL BEHAVIOR
   ----------------------------------------
   Applies a vertical parallax effect to
   images inside sections marked with:
   [data-parallax-section]

   Features:
   - Scroll-based translate + scale transform
   - requestAnimationFrame optimization
   - Passive scroll listener for performance
   - Respects prefers-reduced-motion
   - Global singleton guard (runs once)

   Expected structure:
   [data-parallax-section]
     └── [data-parallax-image]
======================================== */

/**
 * Initializes parallax scroll behavior.
 *
 * @param {HTMLElement|Document} root
 */
export function initParallax(root = document) {
  const sections = Array.from(
    root.querySelectorAll("[data-parallax-section]")
  );

  if (!sections.length) return;

  // Prevent multiple global initializations
  if (window.__contractorParallaxInitialized) return;
  window.__contractorParallaxInitialized = true;

  // Accessibility: reduce motion if user prefers
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let ticking = false;

  /**
   * Updates all parallax elements based on scroll position.
   */
  const update = () => {
    ticking = false;

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    sections.forEach((section) => {
      const image = section.querySelector("[data-parallax-image]");
      if (!image) return;

      const rect = section.getBoundingClientRect();

      // Read per-section configuration
      const speed = Number.parseFloat(
        section.dataset.parallaxSpeed || "0.16"
      );

      const scale = Number.parseFloat(
        section.dataset.parallaxScale || "1.08"
      );

      // Disable motion if user prefers reduced motion
      if (prefersReducedMotion) {
        image.style.transform = "translate3d(0, 0, 0) scale(1)";
        return;
      }

      // Skip if section is outside viewport
      if (rect.bottom <= 0 || rect.top >= viewportHeight) {
        return;
      }

      // Calculate offset relative to viewport midpoint
      const midpoint = viewportHeight * 0.5;
      const offset = (midpoint - rect.top) * speed;

      // Apply transform
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
    });
  };

  /**
   * Schedules an update using requestAnimationFrame.
   */
  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  // Scroll + resize listeners
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  // Initial render
  update();
}