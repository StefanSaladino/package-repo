/* ========================================
   STANDARD TIMELINE COMPONENT
   ----------------------------------------
   Simple linear timeline with a left-side
   spine and sequential milestones.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

export function renderTimeline(options = {}) {
  // ========================================
  // DEFAULT DATA
  // ========================================
  const defaultItems = [
    {
      date: "2021",
      title: "Discovery",
      text: "Started with planning, requirements, and early structure."
    },
    {
      date: "2022",
      title: "Build",
      text: "Moved into development and component authoring."
    },
    {
      date: "2023",
      title: "Refine",
      text: "Improved performance, styling, and maintainability."
    },
    {
      date: "2024",
      title: "Scale",
      text: "Expanded the system for reuse across multiple sites."
    }
  ];

  // ========================================
  // USE PROVIDED DATA OR FALLBACK
  // ========================================
  const items = options.items ?? defaultItems;

  // ========================================
  // RENDER
  // ========================================
  return `
    <div class="timeline">
      ${items
        .map(
          (item, index) => `
            <article class="timeline-item" data-timeline-item>
              <div class="timeline-marker">${String(index + 1).padStart(2, "0")}</div>
              <div class="timeline-content">
                <span class="timeline-date">${escapeHtml(item.date)}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}