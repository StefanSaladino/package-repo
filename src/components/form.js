/* ========================================
   FORM COMPONENT
   ----------------------------------------
   Dynamic form renderer with support for:
   - Input fields (text, email, tel, etc.)
   - Textareas
   - Select dropdowns
   - Netlify form handling

   Designed for flexible contact forms and
   lead capture scenarios.
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

/**
 * Renders a single form field based on type.
 *
 * @param {Object} field
 * @returns {string}
 */
function renderField(field = {}) {
  const {
    label = "",
    name = "",
    type = "text",
    placeholder = "",
    required = false,
    rows = 4,
    autocomplete = "",
    options = []
  } = field;

  const req = required ? " required" : "";
  const auto = autocomplete
    ? ` autocomplete="${escapeHtml(autocomplete)}"`
    : "";

  const safeName = escapeHtml(name);
  const safeLabel = escapeHtml(label);
  const safePlaceholder = escapeHtml(placeholder);

  // Textarea field
  if (type === "textarea") {
    return `
      <div class="field">
        <label for="${safeName}">${safeLabel}</label>
        <textarea
          class="input"
          id="${safeName}"
          name="${safeName}"
          rows="${escapeHtml(rows)}"
          placeholder="${safePlaceholder}"
          ${req}${auto}
        ></textarea>
      </div>
    `;
  }

  // Select field
  if (type === "select") {
    return `
      <div class="field">
        <label for="${safeName}">${safeLabel}</label>
        <select class="input" id="${safeName}" name="${safeName}" ${req}${auto}>
          <option value="">Select an option</option>
          ${options
            .map(
              (option) => `
                <option value="${escapeHtml(option.value)}">
                  ${escapeHtml(option.label)}
                </option>
              `
            )
            .join("")}
        </select>
      </div>
    `;
  }

  // Default input field
  return `
    <div class="field">
      <label for="${safeName}">${safeLabel}</label>
      <input
        class="input"
        type="${escapeHtml(type)}"
        id="${safeName}"
        name="${safeName}"
        placeholder="${safePlaceholder}"
        ${req}${auto}
      />
    </div>
  `;
}

/**
 * Renders a full form element.
 *
 * @param {Object} options
 * @returns {string}
 */
export function renderForm({
  action = "#",
  method = "POST",
  netlifyName = "",
  submitLabel = "Submit",
  note = "",
  fields = []
} = {}) {
  const isNetlify = Boolean(netlifyName);

  return `
    <form
      class="form"
      action="${escapeHtml(action)}"
      method="${escapeHtml(method)}"
      ${isNetlify ? 'data-netlify="true" netlify-honeypot="bot-field"' : ""}
    >

      ${
        isNetlify
          ? `<input type="hidden" name="form-name" value="${escapeHtml(netlifyName)}" />`
          : ""
      }

      ${
        isNetlify
          ? `
            <!-- Honeypot field for spam protection -->
            <p class="sr-only">
              <label>Do not fill this out: <input name="bot-field" /></label>
            </p>
          `
          : ""
      }

      <!-- Dynamic Fields -->
      ${fields.map(renderField).join("")}

      <!-- Submit Button -->
      <button class="btn btn-brand" type="submit">
        ${escapeHtml(submitLabel)}
      </button>

      ${note ? `<p class="form-note">${escapeHtml(note)}</p>` : ""}

    </form>
  `;
}