/* ========================================
   HTML ESCAPE UTILITY
   ----------------------------------------
   Safely escapes text inserted into HTML
   strings returned by component renderers.
======================================== */

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}