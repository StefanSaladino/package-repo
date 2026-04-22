/* ========================================
   HTML ESCAPE UTILITY
   ----------------------------------------
   Safely escapes user-provided or dynamic
   content before injecting into HTML strings.

   Prevents:
   - Cross-Site Scripting (XSS)
   - HTML injection vulnerabilities

   Used by all component renderers to ensure
   output is safe when using template strings.

   Example:
   escapeHtml('<script>alert(1)</script>')
   → "&lt;script&gt;alert(1)&lt;/script&gt;"
======================================== */

/**
 * Escapes special HTML characters in a string.
 *
 * @param {string} value - Raw input value
 * @returns {string} Escaped string safe for HTML
 */
export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}