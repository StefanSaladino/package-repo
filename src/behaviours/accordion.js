/* ========================================
   ACCORDION BEHAVIOR
   ----------------------------------------
   Opens one item at a time in each accordion
   and keeps ARIA attributes in sync.
======================================== */

export function initAccordion(root = document) {
  const accordions = root.querySelectorAll(".accordion-custom");

  if (!accordions.length) return;

  accordions.forEach((accordion, accordionIndex) => {
    if (accordion.dataset.accordionInitialized === "true") return;
    accordion.dataset.accordionInitialized = "true";

    const items = Array.from(accordion.querySelectorAll(".accordion-item-custom"));
    if (!items.length) return;

    items.forEach((item, index) => {
      const trigger = item.querySelector(".accordion-trigger");
      const panel = item.querySelector(".accordion-panel");

      if (!trigger || !panel) return;

      const triggerId = trigger.id || `accordion-${accordionIndex}-trigger-${index}`;
      const panelId = panel.id || `accordion-${accordionIndex}-panel-${index}`;

      trigger.id = triggerId;
      panel.id = panelId;
      trigger.setAttribute("aria-controls", panelId);
      trigger.setAttribute("aria-expanded", item.classList.contains("is-open") ? "true" : "false");
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", triggerId);

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        items.forEach((otherItem) => {
          const otherTrigger = otherItem.querySelector(".accordion-trigger");
          otherItem.classList.remove("is-open");
          otherTrigger?.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
}