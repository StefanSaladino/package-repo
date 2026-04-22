/* ========================================
   BUTTON COMPONENT
   ----------------------------------------
   Returns either an <a> or <button> based
   on whether an href is supplied.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

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
  const classes = ["btn", `btn-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const safeLabel = escapeHtml(label);

  if (href) {
    const safeHref = escapeHtml(href);
    const safeTarget = target ? ` target="${escapeHtml(target)}"` : "";
    const safeRel =
      target === "_blank"
        ? ` rel="${escapeHtml(rel || "noopener noreferrer")}"`
        : rel
          ? ` rel="${escapeHtml(rel)}"`
          : "";
    const safeAria = ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : "";

    return `<a class="${classes}" href="${safeHref}"${safeTarget}${safeRel}${safeAria}>${safeLabel}</a>`;
  }

  const safeAria = ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : "";

  return `<button class="${classes}" type="${escapeHtml(type)}"${safeAria}>${safeLabel}</button>`;
}