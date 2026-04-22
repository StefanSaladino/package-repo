/* ========================================
   TIMELINE BEHAVIOR
   ----------------------------------------
   Reveals standard timeline items and the
   staggered alternating timeline items.
======================================== */

export function initTimeline(root = document) {
  const items = root.querySelectorAll(".timeline-item, .staggered-item");

  if (!items.length) return;

  const reveal = (el) => {
    el.classList.add("is-visible");
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    items.forEach((item, index) => {
      if (item.dataset.timelineInitialized === "true") return;
      item.dataset.timelineInitialized = "true";
      item.style.transitionDelay = `${index * 120}ms`;
      observer.observe(item);
    });
  } else {
    items.forEach(reveal);
  }
}