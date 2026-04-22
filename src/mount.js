/* ========================================
   COMPONENT MOUNTING (mount.js)
   ----------------------------------------
   Responsible for:
   1. Scanning the DOM for [data-component]
   2. Parsing props from data attributes
   3. Rendering and injecting components

   This creates a lightweight declarative UI
   system without requiring a framework.

   Example usage in HTML:
   <div 
     data-component="card"
     data-props='{"title": "Hello"}'>
   </div>
======================================== */

import { componentRegistry } from "./registry.js";

/**
 * Safely parses JSON props from a DOM element.
 * Falls back to an empty object on failure.
 *
 * @param {HTMLElement} element
 * @returns {Object}
 */
function readProps(element) {
  const raw = element.dataset.props || "";

  if (!raw.trim()) return {};

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Invalid JSON in data-props:", raw, error);
    return {};
  }
}

/**
 * Mounts a single component into a target element.
 *
 * @param {HTMLElement} target - DOM node to inject into
 * @param {string} name - component name (registry key)
 * @param {Object} props - component props
 * @param {Object} registry - optional custom registry
 * @returns {boolean} success
 */
export function mountComponent(
  target,
  name,
  props = {},
  registry = componentRegistry
) {
  const entry = registry[name];

  // Guard: invalid target or missing renderer
  if (!target || !entry?.render) return false;

  // Inject rendered HTML
  target.innerHTML = entry.render(props);

  // Mark as mounted to prevent duplicate rendering
  target.dataset.mounted = "true";

  return true;
}

/**
 * Scans a root node for all components and mounts them.
 *
 * @param {HTMLElement|Document} root
 * @param {Object} registry
 * @returns {Array} list of mounted components
 */
export async function mountComponents(
  root = document,
  registry = componentRegistry
) {
  const targets = Array.from(root.querySelectorAll("[data-component]"));
  const mounted = [];

  for (const target of targets) {
    // Skip already-mounted elements
    if (target.dataset.mounted === "true") continue;

    const name = target.dataset.component;
    const entry = registry[name];

    if (!entry?.render) {
      console.warn(`Unknown component: ${name}`);
      continue;
    }

    const props = readProps(target);

    mountComponent(target, name, props, registry);

    mounted.push({ name, target });
  }

  return mounted;
}