/* ========================================
   FORM COMPONENT
   ----------------------------------------
   Flexible form renderer with support for:
   - text/email/tel/etc.
   - textarea
   - select
   - Netlify form wiring
======================================== */

import { escapeHtml } from "../utils/escapeHtml.js";

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
  const auto = autocomplete ? ` autocomplete="${escapeHtml(autocomplete)}"` : "";
  const safeName = escapeHtml(name);
  const safeLabel = escapeHtml(label);
  const safePlaceholder = escapeHtml(placeholder);

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

  if (type === "select") {
    return `
      <div class="field">
        <label for="${safeName}">${safeLabel}</label>
        <select class="input" id="${safeName}" name="${safeName}" ${req}${auto}>
          <option value="">Select an option</option>
          ${options
            .map(
              (option) => `
                <option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>
              `
            )
            .join("")}
        </select>
      </div>
    `;
  }

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

export function renderForm({
  action = "#",
  method = "POST",
  netlifyName = "",
  submitLabel = "Submit",
  note = "",
  fields = [
    { label: "Name", name: "name", placeholder: "Your name", required: true, autocomplete: "name" },
    { label: "Email", name: "email", type: "email", placeholder: "Email address", required: true, autocomplete: "email" },
    { label: "Message", name: "message", type: "textarea", placeholder: "Tell us what you need...", required: true, rows: 5 }
  ]
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
            <p class="sr-only">
              <label>Do not fill this out: <input name="bot-field" /></label>
            </p>
          `
          : ""
      }

      ${fields.map(renderField).join("")}

      <button class="btn btn-brand" type="submit">${escapeHtml(submitLabel)}</button>

      ${note ? `<p class="form-note">${escapeHtml(note)}</p>` : ""}
    </form>
  `;
}