/* ========================================
   BUTTON COMPONENT
   ----------------------------------------
   Renders either:
   - <a> element (if href is provided)
   - <button> element (default)

   Designed for flexible usage across:
   - Navigation links
   - CTA buttons
   - Form actions

   Features:
   - Variant-based styling
   - Safe attribute handling (XSS protection)
   - Accessibility via optional aria-label
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

/**
 * Renders a button or anchor element.
 *
 * @param {Object} options
 * @param {string} options.label - Visible button text
 * @param {string} options.href - If provided, renders <a> instead of <button>
 * @param {string} options.type - Button type attribute (button, submit, etc.)
 * @param {string} options.variant - Visual style modifier (e.g. brand, outline)
 * @param {string} options.className - Additional custom classes
 * @param {string} options.target - Anchor target (_blank, etc.)
 * @param {string} options.rel - Anchor rel attribute
 * @param {string} options.ariaLabel - Accessibility label
 *
 * @returns {string} HTML string
 */
export function renderButton({
  label = "Button",
  href = "",
  type = "button",
  variant = "brand",
  className = "",
  target = "",
  rel = "",
  ariaLabel = ""
} = {}) {
  // Compose final class list
  const classes = ["btn", `btn-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const safeLabel = escapeHtml(label);

  // If href is provided, render as anchor
  if (href) {
    const safeHref = escapeHtml(href);

    const safeTarget = target
      ? ` target="${escapeHtml(target)}"`
      : "";

    const safeRel =
      target === "_blank"
        ? ` rel="${escapeHtml(rel || "noopener noreferrer")}"`
        : rel
          ? ` rel="${escapeHtml(rel)}"`
          : "";

    const safeAria = ariaLabel
      ? ` aria-label="${escapeHtml(ariaLabel)}"`
      : "";

    return `<a class="${classes}" href="${safeHref}"${safeTarget}${safeRel}${safeAria}>${safeLabel}</a>`;
  }

  // Otherwise render as button
  const safeAria = ariaLabel
    ? ` aria-label="${escapeHtml(ariaLabel)}"`
    : "";

  return `<button class="${classes}" type="${escapeHtml(type)}"${safeAria}>${safeLabel}</button>`;
}