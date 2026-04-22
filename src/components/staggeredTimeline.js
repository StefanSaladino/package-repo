/* ========================================
   STAGGERED TIMELINE COMPONENT
   ----------------------------------------
   Alternating left/right timeline with a
   colorful vertical spine and reveal motion.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

export function renderStaggeredTimeline(options = {}) {
  // ========================================
  // DEFAULT DATA
  // ========================================
  const defaultItems = [
    {
      date: "2021",
      title: "Idea Formation",
      text: "Initial concept and direction established."
    },
    {
      date: "2022",
      title: "Development",
      text: "Core architecture and reusable patterns built."
    },
    {
      date: "2023",
      title: "Expansion",
      text: "The system grew into a broader component library."
    },
    {
      date: "2024",
      title: "Production",
      text: "Optimized for performance, reuse, and scale."
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
    <div class="staggered-timeline">
      <div class="staggered-timeline-wrapper">
        ${items
          .map((item, index) => {
            const side = item.side || (index % 2 === 0 ? "left" : "right");

            return `
              <article class="staggered-item ${side}" data-timeline-item>
                <div class="staggered-content">
                  <span class="staggered-dot" aria-hidden="true"></span>
                  <span class="staggered-date">${escapeHtml(item.date)}</span>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}