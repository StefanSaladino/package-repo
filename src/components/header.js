/* ========================================
   HEADER COMPONENT
   ----------------------------------------
   Fixed site header with:
   - Brand/logo
   - Desktop navigation
   - Mobile navigation (hamburger menu)
   - Primary + secondary CTA buttons

   Designed for responsive layouts with
   behavior handled separately in JS.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

/**
 * Renders a single navigation link.
 *
 * @param {Object} link
 * @returns {string}
 */
function renderLink(link = {}) {
  const label = escapeHtml(link.label || "Link");
  const href = escapeHtml(link.href || "#");

  const target = link.target
    ? ` target="${escapeHtml(link.target)}"`
    : "";

  const rel =
    link.target === "_blank"
      ? ` rel="${escapeHtml(link.rel || "noopener noreferrer")}"`
      : link.rel
        ? ` rel="${escapeHtml(link.rel)}"`
        : "";

  return `<a href="${href}"${target}${rel}>${label}</a>`;
}

/**
 * Renders the site header.
 *
 * @param {Object} options
 * @returns {string}
 */
export function renderHeader({
  brandName = "Contractor UI",
  homeHref = "#hero",
  logoSrc = "",
  logoAlt = "Logo",
  logoLetter = "",
  links = [],
  ctaLabel = "Contact",
  ctaHref = "#contact",
  ctaSecondaryLabel = "Call",
  ctaSecondaryHref = "tel:+10000000000"
} = {}) {
  const letter =
    logoLetter || (brandName ? brandName.trim()[0] : "C");

  // Logo fallback: image or letter mark
  const logoMarkup = logoSrc
    ? `<img class="brand-logo" src="${escapeHtml(logoSrc)}" alt="${escapeHtml(logoAlt)}" />`
    : `<span class="brand-mark" aria-hidden="true">${escapeHtml(letter)}</span>`;

  const navLinks = links.map(renderLink).join("");

  return `
    <header class="site-header">

      <div class="container header-inner">

        <!-- Brand -->
        <a 
          class="brand" 
          href="${escapeHtml(homeHref)}" 
          aria-label="${escapeHtml(brandName)} home"
        >
          ${logoMarkup}
          <span class="brand-text">${escapeHtml(brandName)}</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop" aria-label="Primary navigation">
          ${navLinks}
        </nav>

        <!-- Actions + Mobile Toggle -->
        <div class="nav-actions">
          <a class="btn btn-outline nav-cta-link" href="${escapeHtml(ctaSecondaryHref)}">
            ${escapeHtml(ctaSecondaryLabel)}
          </a>

          <a class="btn btn-brand nav-cta-link" href="${escapeHtml(ctaHref)}">
            ${escapeHtml(ctaLabel)}
          </a>

          <button
            class="hamburger"
            id="hamburger"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      <!-- Mobile Navigation -->
      <nav class="nav-mobile" id="mobileMenu" aria-hidden="true">
        ${navLinks}

        <div class="nav-mobile-actions">
          <a class="btn btn-outline" href="${escapeHtml(ctaSecondaryHref)}">
            ${escapeHtml(ctaSecondaryLabel)}
          </a>

          <a class="btn btn-brand" href="${escapeHtml(ctaHref)}">
            ${escapeHtml(ctaLabel)}
          </a>
        </div>
      </nav>

    </header>
  `;
}