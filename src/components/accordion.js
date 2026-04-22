/* ========================================
   ACCORDION COMPONENT
   ----------------------------------------
   Reusable FAQ / content accordion.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

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
  idPrefix = `accordion-${Math.random().toString(36).slice(2, 8)}`
} = {}) {
  return `
    <div class="accordion-custom">
      ${items
        .map((item, index) => {
          const isOpen = index === openIndex;
          const triggerId = `${idPrefix}-trigger-${index}`;
          const panelId = `${idPrefix}-panel-${index}`;

          return `
            <div class="accordion-item-custom ${isOpen ? "is-open" : ""}">
              <button
                id="${triggerId}"
                class="accordion-trigger"
                type="button"
                aria-expanded="${isOpen ? "true" : "false"}"
                aria-controls="${panelId}"
              >
                <span>${escapeHtml(item.title)}</span>
              </button>

              <div
                id="${panelId}"
                class="accordion-panel"
                role="region"
                aria-labelledby="${triggerId}"
              >
                <div class="accordion-panel-inner">
                  ${item.kicker ? `<span class="accordion-kicker">${escapeHtml(item.kicker)}</span>` : ""}
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