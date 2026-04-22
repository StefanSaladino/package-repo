/* ========================================
   CUSTOM ANIMATIONS
   ----------------------------------------
   Adds a gentle floating animation to any
   element with data-float.
======================================== */

export function initAnimations(root = document) {
  const items = root.querySelectorAll("[data-float]");

  items.forEach((item, index) => {
    if (item.dataset.floatInitialized === "true") return;
    item.dataset.floatInitialized = "true";
    item.classList.add("is-floating");
    item.style.animationDelay = `${index * 120}ms`;
  });
}