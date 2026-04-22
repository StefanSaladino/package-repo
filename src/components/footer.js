/* ========================================
   FOOTER COMPONENT
   ----------------------------------------
   Flexible footer with columns and optional
   map/embed area.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

function renderFooterLinks(items = []) {
  return `
    <ul class="footer-links">
      ${items
        .map((item) => {
          if (!item.href) {
            return `<li>${escapeHtml(item.label || "")}</li>`;
          }

          const target = item.target ? ` target="${escapeHtml(item.target)}"` : "";
          const rel =
            item.target === "_blank"
              ? ` rel="${escapeHtml(item.rel || "noopener noreferrer")}"`
              : item.rel
                ? ` rel="${escapeHtml(item.rel)}"`
                : "";

          return `
            <li>
              <a href="${escapeHtml(item.href)}"${target}${rel}>
                ${escapeHtml(item.label || "")}
              </a>
            </li>
          `;
        })
        .join("")}
    </ul>
  `;
}

export function renderFooter({
  brandName = "Contractor UI",
  tagline = "Reusable design system",
  description = "A modular front-end system built for contractor and service websites.",
  logoSrc = "",
  logoAlt = "Logo",
  logoLetter = "",
  columns = [
    {
      title: "Explore",
      items: [
        { label: "Home", href: "#hero" },
        { label: "Cards", href: "#cards" },
        { label: "Reviews", href: "#reviews" }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Accordion", href: "#accordion" },
        { label: "Timeline", href: "#timeline" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Contact",
      items: [
        { label: "+1 (000) 000-0000", href: "tel:+10000000000" },
        { label: "hello@example.com", href: "mailto:hello@example.com" }
      ]
    }
  ],
  mapSrc = "",
  copyrightText = `© ${new Date().getFullYear()} ${brandName}. All rights reserved.`
} = {}) {
  const letter = logoLetter || (brandName ? brandName.trim()[0] : "C");

  const logoMarkup = logoSrc
    ? `<img class="brand-logo" src="${escapeHtml(logoSrc)}" alt="${escapeHtml(logoAlt)}" />`
    : `<span class="brand-mark" aria-hidden="true">${escapeHtml(letter)}</span>`;

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-branding">
          <div class="footer-brand">
            ${logoMarkup}
            <div>
              <strong>${escapeHtml(brandName)}</strong>
              <p>${escapeHtml(tagline)}</p>
            </div>
          </div>
          <p class="footer-description">${escapeHtml(description)}</p>
        </div>

        ${columns
          .map(
            (column) => `
              <div class="footer-column">
                <h3>${escapeHtml(column.title)}</h3>
                ${renderFooterLinks(column.items || [])}
              </div>
            `
          )
          .join("")}

        ${
          mapSrc
            ? `
              <div class="footer-media">
                <iframe
                  title="${escapeHtml(brandName)} location map"
                  src="${escapeHtml(mapSrc)}"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allowfullscreen
                ></iframe>
              </div>
            `
            : ""
        }
      </div>

      <div class="container footer-bottom">
        <p>${escapeHtml(copyrightText)}</p>
      </div>
    </footer>
  `;
}