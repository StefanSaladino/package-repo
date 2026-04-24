/* ========================================
   CORE API
======================================== */

export function initAll(root?: HTMLElement | Document): Promise<void>;
export function mountAndInit(root?: HTMLElement | Document): Promise<void>;
export function initUI(root?: HTMLElement | Document): void;

/* ========================================
   COMPONENT SYSTEM
======================================== */

export function mountComponents(
  root?: HTMLElement | Document
): Promise<Array<{ name: string; target: HTMLElement }>>;

export function mountComponent(
  target: HTMLElement,
  name: string,
  props?: Record<string, any>
): boolean;

export const componentRegistry: Record<
  string,
  { render: (props?: any) => string }
>;

/* ========================================
   UTILITIES
======================================== */

export function escapeHtml(value?: string): string;

/* ========================================
   COMPONENT RENDERERS
======================================== */

export function renderHeader(props?: any): string;
export function renderFooter(props?: any): string;
export function renderButton(props?: any): string;
export function renderCard(props?: any): string;
export function renderForm(props?: any): string;
export function renderAccordion(props?: any): string;
export function renderReviewCarousel(props?: any): string;
export function renderTimeline(props?: any): string;
export function renderStaggeredTimeline(props?: any): string;
export function renderParallaxScroll(props?: any): string;

/* ========================================
   BEHAVIOURS
======================================== */

export function initNav(): void;
export function initReveal(root?: HTMLElement | Document): void;
export function initCarousel(root?: HTMLElement | Document): void;
export function initAccordion(root?: HTMLElement | Document): void;
export function initTimeline(root?: HTMLElement | Document): void;
export function initAnimations(root?: HTMLElement | Document): void;
export function initParallax(root?: HTMLElement | Document): void;