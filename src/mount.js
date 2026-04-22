/* ========================================
   COMPONENT MOUNTING
   ----------------------------------------
   Reads [data-component] placeholders and
   injects the matching component HTML.
======================================== */

import { componentRegistry } from "./registry.js";

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

export function mountComponent(target, name, props = {}, registry = componentRegistry) {
  const entry = registry[name];
  if (!target || !entry?.render) return false;

  target.innerHTML = entry.render(props);
  target.dataset.mounted = "true";
  return true;
}

export async function mountComponents(root = document, registry = componentRegistry) {
  const targets = Array.from(root.querySelectorAll("[data-component]"));
  const mounted = [];

  for (const target of targets) {
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