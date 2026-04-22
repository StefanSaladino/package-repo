/* ========================================
   ACCORDION BEHAVIOR
   ----------------------------------------
   Controls interactive behavior for the
   accordion component.

   Features:
   - Only one item open at a time
   - Syncs ARIA attributes for accessibility
   - Prevents duplicate initialization
   - Supports multiple accordions per page

   Expected structure:
   .accordion-custom
     └── .accordion-item-custom
           ├── .accordion-trigger
           └── .accordion-panel
======================================== */

/**
 * Initializes accordion behavior within a given root.
 *
 * @param {HTMLElement|Document} root
 */
export function initAccordion(root = document) {
  const accordions = root.querySelectorAll(".accordion-custom");

  // Exit early if no accordions exist
  if (!accordions.length) return;

  accordions.forEach((accordion, accordionIndex) => {
    // Prevent re-initialization
    if (accordion.dataset.accordionInitialized === "true") return;
    accordion.dataset.accordionInitialized = "true";

    const items = Array.from(
      accordion.querySelectorAll(".accordion-item-custom")
    );

    if (!items.length) return;

    items.forEach((item, index) => {
      const trigger = item.querySelector(".accordion-trigger");
      const panel = item.querySelector(".accordion-panel");

      if (!trigger || !panel) return;

      // Ensure unique IDs for accessibility
      const triggerId =
        trigger.id || `accordion-${accordionIndex}-trigger-${index}`;

      const panelId =
        panel.id || `accordion-${accordionIndex}-panel-${index}`;

      trigger.id = triggerId;
      panel.id = panelId;

      // Link trigger ↔ panel for screen readers
      trigger.setAttribute("aria-controls", panelId);
      trigger.setAttribute(
        "aria-expanded",
        item.classList.contains("is-open") ? "true" : "false"
      );

      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", triggerId);

      // Click handler: toggle accordion item
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        // Close all items
        items.forEach((otherItem) => {
          const otherTrigger =
            otherItem.querySelector(".accordion-trigger");

          otherItem.classList.remove("is-open");
          otherTrigger?.setAttribute("aria-expanded", "false");
        });

        // Open current item if it was closed
        if (!isOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
}