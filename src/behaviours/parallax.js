/* ========================================
   PARALLAX SCROLL BEHAVIOR
   ----------------------------------------
   Updates image translate/scale on scroll.
======================================== */

export function initParallax(root = document) {
  const sections = Array.from(root.querySelectorAll("[data-parallax-section]"));
  if (!sections.length) return;

  if (window.__contractorParallaxInitialized) return;
  window.__contractorParallaxInitialized = true;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let ticking = false;

  const update = () => {
    ticking = false;

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    sections.forEach((section) => {
      const image = section.querySelector("[data-parallax-image]");
      if (!image) return;

      const rect = section.getBoundingClientRect();
      const speed = Number.parseFloat(section.dataset.parallaxSpeed || "0.16");
      const scale = Number.parseFloat(section.dataset.parallaxScale || "1.08");

      if (prefersReducedMotion) {
        image.style.transform = "translate3d(0, 0, 0) scale(1)";
        return;
      }

      if (rect.bottom <= 0 || rect.top >= viewportHeight) {
        return;
      }

      const midpoint = viewportHeight * 0.5;
      const offset = (midpoint - rect.top) * speed;

      image.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
    });
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  update();
}