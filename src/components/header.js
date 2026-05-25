/* ========================================
   HEADER COMPONENT
   ----------------------------------------
   Fixed site header with desktop nav and
   mobile menu.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

function renderLink(link = {}) {
  const label = escapeHtml(link.label || "Link");
  const href = escapeHtml(link.href || "#");
  const target = link.target ? ` target="${escapeHtml(link.target)}"` : "";
  const rel =
    link.target === "_blank"
      ? ` rel="${escapeHtml(link.rel || "noopener noreferrer")}"`
      : link.rel
        ? ` rel="${escapeHtml(link.rel)}"`
        : "";

  return `<a href="${href}"${target}${rel}>${label}</a>`;
}

export function renderHeader({
  brandName = "Contractor UI",
  homeHref = "#hero",
  logoSrc = "",
  logoAlt = "Logo",
  logoLetter = "",
  links = [
    { label: "Home", href: "#hero" },
    { label: "Cards", href: "#cards" },
    { label: "Reviews", href: "#reviews" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" }
  ],
  ctaLabel = "Contact",
  ctaHref = "#contact",
  ctaSecondaryLabel = "Call",
  ctaSecondaryHref = "tel:+10000000000"
} = {}) {
  const letter = logoLetter || (brandName ? brandName.trim()[0] : "C");
  const uid = Math.random().toString(36).slice(2, 8);

  const logoMarkup = logoSrc
    ? `<img class="brand-logo" src="${escapeHtml(logoSrc)}" alt="${escapeHtml(logoAlt)}" />`
    : `<span class="brand-mark" aria-hidden="true">${escapeHtml(letter)}</span>`;

  const navLinks = links.map(renderLink).join("");

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${escapeHtml(homeHref)}" aria-label="${escapeHtml(brandName)} home">
          ${logoMarkup}
          <span class="brand-text">${escapeHtml(brandName)}</span>
        </a>

        <nav class="nav-desktop" aria-label="Primary navigation">
          ${navLinks}
        </nav>

        <div class="nav-actions">
          <a class="btn btn-outline nav-cta-link" href="${escapeHtml(ctaSecondaryHref)}">${escapeHtml(ctaSecondaryLabel)}</a>
          <a class="btn btn-brand nav-cta-link" href="${escapeHtml(ctaHref)}">${escapeHtml(ctaLabel)}</a>

          <button
            class="hamburger"
            id="hamburger-${uid}"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobileMenu-${uid}"
            data-mobile-menu-toggle
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav class="nav-mobile" id="mobileMenu-${uid}" aria-hidden="true" data-mobile-menu>
        ${navLinks}
        <div class="nav-mobile-actions">
          <a class="btn btn-outline" href="${escapeHtml(ctaSecondaryHref)}">${escapeHtml(ctaSecondaryLabel)}</a>
          <a class="btn btn-brand" href="${escapeHtml(ctaHref)}">${escapeHtml(ctaLabel)}</a>
        </div>
      </nav>
    </header>
  `;
}