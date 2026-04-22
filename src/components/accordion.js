/* ========================================
   ACCORDION COMPONENT 
   ----------------------------------------
   Reusable accordion UI for FAQs, services,
   or expandable content sections.

   Features:
   - Accessible markup (ARIA attributes)
   - Configurable default open item
   - Unique ID generation for multiple instances
   - Safe content rendering via escapeHtml()

   Expected usage:
   <div 
     data-component="accordion"
     data-props='{
       "title": "FAQ",
       "items": [
         { "title": "Q1", "content": "A1" }
       ]
     }'>
   </div>
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

/**
 * Renders an accordion component as an HTML string.
 *
 * @param {Object} options
 * @param {string} options.title - Optional section title (currently unused in markup)
 * @param {Array} options.items - List of accordion entries
 * @param {number} options.openIndex - Index of item open by default
 * @param {string} options.idPrefix - Unique prefix for ARIA IDs
 *
 * @returns {string} HTML string
 */
export function renderAccordion({
  title = "",
  items = [
    {
      title: "What do you offer?",
      content: "A short answer goes here.",
      kicker: "Answer"
    },
    {
      title: "How does it work?",
      content: "A second answer goes here.",
      kicker: "Answer"
    }
  ],
  openIndex = 0,

  // Generates a unique ID prefix to prevent collisions
  idPrefix = `accordion-${Math.random().toString(36).slice(2, 8)}`
} = {}) {
  return `
    <div class="accordion-custom">
      ${items
        .map((item, index) => {
          const isOpen = index === openIndex;

          // Accessibility: link trigger to panel
          const triggerId = `${idPrefix}-trigger-${index}`;
          const panelId = `${idPrefix}-panel-${index}`;

          return `
            <div class="accordion-item-custom ${isOpen ? "is-open" : ""}">

              <!-- Trigger Button -->
              <button
                id="${triggerId}"
                class="accordion-trigger"
                type="button"
                aria-expanded="${isOpen ? "true" : "false"}"
                aria-controls="${panelId}"
              >
                <span>${escapeHtml(item.title)}</span>
              </button>

              <!-- Expandable Panel -->
              <div
                id="${panelId}"
                class="accordion-panel"
                role="region"
                aria-labelledby="${triggerId}"
              >
                <div class="accordion-panel-inner">

                  ${
                    item.kicker
                      ? `<span class="accordion-kicker">${escapeHtml(item.kicker)}</span>`
                      : ""
                  }

                  <p>${escapeHtml(item.content)}</p>

                </div>
              </div>

            </div>
          `;
        })
        .join("")}
    </div>
  `;
}