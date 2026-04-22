/* ========================================
   SCROLL REVEAL ANIMATION
   ----------------------------------------
   Handles directional reveal and staggered
   child reveals for any element with .reveal.
======================================== */

export function initReveal(root = document) {
  const elements = root.querySelectorAll(".reveal");

  if (!elements.length) return;

  const revealElement = (el) => {
    el.classList.add("is-visible");

    const children = el.querySelectorAll("[data-reveal-child]");
    children.forEach((child, index) => {
      const delay = child.dataset.delay ? parseInt(child.dataset.delay, 10) : index * 100;
      child.style.transitionDelay = `${delay}ms`;
      child.classList.add("is-visible");
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        observer.observe(el);
      }
    });
  } else {
    elements.forEach(revealElement);
  }
}