//#region src/utils/escapeHtml.js
function e(e = "") {
	return String(e).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
//#endregion
//#region src/components/header.js
function t(t = {}) {
	let n = e(t.label || "Link");
	return `<a href="${e(t.href || "#")}"${t.target ? ` target="${e(t.target)}"` : ""}${t.target === "_blank" ? ` rel="${e(t.rel || "noopener noreferrer")}"` : t.rel ? ` rel="${e(t.rel)}"` : ""}>${n}</a>`;
}
function n({ brandName: n = "Contractor UI", homeHref: r = "#hero", logoSrc: i = "", logoAlt: a = "Logo", logoLetter: o = "", links: s = [
	{
		label: "Home",
		href: "#hero"
	},
	{
		label: "Cards",
		href: "#cards"
	},
	{
		label: "Reviews",
		href: "#reviews"
	},
	{
		label: "Timeline",
		href: "#timeline"
	},
	{
		label: "Contact",
		href: "#contact"
	}
], ctaLabel: c = "Contact", ctaHref: l = "#contact", ctaSecondaryLabel: u = "Call", ctaSecondaryHref: d = "tel:+10000000000" } = {}) {
	let f = o || (n ? n.trim()[0] : "C"), p = Math.random().toString(36).slice(2, 8), m = i ? `<img class="brand-logo" src="${e(i)}" alt="${e(a)}" />` : `<span class="brand-mark" aria-hidden="true">${e(f)}</span>`, h = s.map(t).join("");
	return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${e(r)}" aria-label="${e(n)} home">
          ${m}
          <span class="brand-text">${e(n)}</span>
        </a>

        <nav class="nav-desktop" aria-label="Primary navigation">
          ${h}
        </nav>

        <div class="nav-actions">
          <a class="btn btn-outline nav-cta-link" href="${e(d)}">${e(u)}</a>
          <a class="btn btn-brand nav-cta-link" href="${e(l)}">${e(c)}</a>

          <button
            class="hamburger"
            id="hamburger-${p}"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobileMenu-${p}"
            data-mobile-menu-toggle
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav class="nav-mobile" id="mobileMenu-${p}" aria-hidden="true" data-mobile-menu>
        ${h}
        <div class="nav-mobile-actions">
          <a class="btn btn-outline" href="${e(d)}">${e(u)}</a>
          <a class="btn btn-brand" href="${e(l)}">${e(c)}</a>
        </div>
      </nav>
    </header>
  `;
}
//#endregion
//#region src/components/footer.js
function r(t = []) {
	return `
    <ul class="footer-links">
      ${t.map((t) => {
		if (!t.href) return `<li>${e(t.label || "")}</li>`;
		let n = t.target ? ` target="${e(t.target)}"` : "", r = t.target === "_blank" ? ` rel="${e(t.rel || "noopener noreferrer")}"` : t.rel ? ` rel="${e(t.rel)}"` : "";
		return `
            <li>
              <a href="${e(t.href)}"${n}${r}>
                ${e(t.label || "")}
              </a>
            </li>
          `;
	}).join("")}
    </ul>
  `;
}
function i({ brandName: t = "Contractor UI", tagline: n = "Reusable design system", description: i = "A modular front-end system built for contractor and service websites.", logoSrc: a = "", logoAlt: o = "Logo", logoLetter: s = "", columns: c = [], mapSrc: l = "", copyrightText: u = `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${t}. All rights reserved.` } = {}) {
	let d = s || (t ? t.trim()[0] : "C");
	return `
    <footer class="site-footer">

      <div class="container footer-grid">

        <!-- Branding -->
        <div class="footer-branding">
          <div class="footer-brand">
            ${a ? `<img class="brand-logo" src="${e(a)}" alt="${e(o)}" />` : `<span class="brand-mark" aria-hidden="true">${e(d)}</span>`}
            <div>
              <strong>${e(t)}</strong>
              <p>${e(n)}</p>
            </div>
          </div>
          <p class="footer-description">${e(i)}</p>
        </div>

        <!-- Navigation Columns -->
        ${c.map((t) => `
              <div class="footer-column">
                <h3>${e(t.title)}</h3>
                ${r(t.items || [])}
              </div>
            `).join("")}

        ${l ? `
              <!-- Optional Embedded Map -->
              <div class="footer-media">
                <iframe
                  title="${e(t)} location map"
                  src="${e(l)}"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  allowfullscreen
                ></iframe>
              </div>
            ` : ""}

      </div>

      <!-- Footer Bottom -->
      <div class="container footer-bottom">
        <p>${e(u)}</p>
      </div>

    </footer>
  `;
}
//#endregion
//#region src/components/button.js
function a({ label: t = "Button", href: n = "", type: r = "button", variant: i = "brand", className: a = "", target: o = "", rel: s = "", ariaLabel: c = "" } = {}) {
	let l = [
		"btn",
		`btn-${i}`,
		a
	].filter(Boolean).join(" "), u = e(t);
	if (n) return `<a class="${l}" href="${e(n)}"${o ? ` target="${e(o)}"` : ""}${o === "_blank" ? ` rel="${e(s || "noopener noreferrer")}"` : s ? ` rel="${e(s)}"` : ""}${c ? ` aria-label="${e(c)}"` : ""}>${u}</a>`;
	let d = c ? ` aria-label="${e(c)}"` : "";
	return `<button class="${l}" type="${e(r)}"${d}>${u}</button>`;
}
//#endregion
//#region src/components/card.js
function o({ eyebrow: t = "", title: n = "Card title", body: r = "Card body text.", imageSrc: i = "", imageAlt: a = "", ctaLabel: o = "", ctaHref: s = "", className: c = "" } = {}) {
	return `
    <article class="${["card", c].filter(Boolean).join(" ")}">

      ${i ? `
            <!-- Optional Card Media -->
            <div class="card-media">
              <img 
                src="${e(i)}" 
                alt="${e(a || n)}" 
                loading="lazy" 
                decoding="async" 
              />
            </div>
          ` : ""}

      <!-- Card Content -->
      <div class="card-body">
        ${t ? `<span class="eyebrow">${e(t)}</span>` : ""}
        <h3>${e(n)}</h3>
        <p>${e(r)}</p>
      </div>

      ${o ? `
            <!-- Card Call-To-Action -->
            <div class="card-actions">
              <a class="btn btn-outline" href="${e(s || "#")}">
                ${e(o)}
              </a>
            </div>
          ` : ""}

    </article>
  `;
}
//#endregion
//#region src/components/form.js
function s(t = {}) {
	let { label: n = "", name: r = "", type: i = "text", placeholder: a = "", required: o = !1, rows: s = 4, autocomplete: c = "", options: l = [] } = t, u = o ? " required" : "", d = c ? ` autocomplete="${e(c)}"` : "", f = e(r), p = e(n), m = e(a);
	return i === "textarea" ? `
      <div class="field">
        <label for="${f}">${p}</label>
        <textarea
          class="input"
          id="${f}"
          name="${f}"
          rows="${Number(s)}"
          placeholder="${m}"
          ${u}${d}
        ></textarea>
      </div>
    ` : i === "select" ? `
      <div class="field">
        <label for="${f}">${p}</label>
        <select class="input" id="${f}" name="${f}" ${u}${d}>
          <option value="">Select an option</option>
          ${l.map((t) => `
                <option value="${e(t.value)}">${e(t.label)}</option>
              `).join("")}
        </select>
      </div>
    ` : `
    <div class="field">
      <label for="${f}">${p}</label>
      <input
        class="input"
        type="${e(i)}"
        id="${f}"
        name="${f}"
        placeholder="${m}"
        ${u}${d}
      />
    </div>
  `;
}
function c({ action: t = "#", method: n = "POST", netlifyName: r = "", submitLabel: i = "Submit", note: a = "", fields: o = [
	{
		label: "Name",
		name: "name",
		placeholder: "Your name",
		required: !0,
		autocomplete: "name"
	},
	{
		label: "Email",
		name: "email",
		type: "email",
		placeholder: "Email address",
		required: !0,
		autocomplete: "email"
	},
	{
		label: "Message",
		name: "message",
		type: "textarea",
		placeholder: "Tell us what you need...",
		required: !0,
		rows: 5
	}
] } = {}) {
	let c = !!r;
	return `
    <form
      class="form"
      action="${e(t)}"
      method="${e(n)}"
      ${c ? "data-netlify=\"true\" netlify-honeypot=\"bot-field\"" : ""}
    >
      ${c ? `<input type="hidden" name="form-name" value="${e(r)}" />` : ""}

      ${c ? "\n            <p class=\"sr-only\">\n              <label>Do not fill this out: <input name=\"bot-field\" /></label>\n            </p>\n          " : ""}

      ${o.map(s).join("")}

      <button class="btn btn-brand" type="submit">${e(i)}</button>

      ${a ? `<p class="form-note">${e(a)}</p>` : ""}
    </form>
  `;
}
//#endregion
//#region src/components/accordion.js
function l({ title: t = "", items: n = [{
	title: "What do you offer?",
	content: "A short answer goes here.",
	kicker: "Answer"
}, {
	title: "How does it work?",
	content: "A second answer goes here.",
	kicker: "Answer"
}], openIndex: r = 0, idPrefix: i = `accordion-${Math.random().toString(36).slice(2, 8)}` } = {}) {
	return `
    <div class="accordion-custom">
      ${n.map((t, n) => {
		let a = n === r, o = `${i}-trigger-${n}`, s = `${i}-panel-${n}`;
		return `
            <div class="accordion-item-custom ${a ? "is-open" : ""}">

              <!-- Trigger Button -->
              <button
                id="${o}"
                class="accordion-trigger"
                type="button"
                aria-expanded="${a ? "true" : "false"}"
                aria-controls="${s}"
              >
                <span>${e(t.title)}</span>
              </button>

              <!-- Expandable Panel -->
              <div
                id="${s}"
                class="accordion-panel"
                role="region"
                aria-labelledby="${o}"
              >
                <div class="accordion-panel-inner">

                  ${t.kicker ? `<span class="accordion-kicker">${e(t.kicker)}</span>` : ""}

                  <p>${e(t.content)}</p>

                </div>
              </div>

            </div>
          `;
	}).join("")}
    </div>
  `;
}
//#endregion
//#region src/components/reviewCarousel.js
function u(t = {}) {
	let n = Array.isArray(t.reviews) ? t.reviews : [
		{
			name: "John D.",
			role: "Homeowner · Brampton",
			text: "Excellent service. The whole process was clean and professional."
		},
		{
			name: "Sarah M.",
			role: "Renovation Client · GTA",
			text: "Fast turnaround and great communication from start to finish."
		},
		{
			name: "Mike R.",
			role: "Builder · Ontario",
			text: "The carousel feels smooth and the layout is very easy to scan."
		},
		{
			name: "Emily T.",
			role: "Property Owner · Peel Region",
			text: "The team was reliable, careful, and easy to work with."
		},
		{
			name: "Alicia P.",
			role: "Homeowner · Caledon",
			text: "Great experience from quote to completion."
		},
		{
			name: "Jordan K.",
			role: "Builder · York Region",
			text: "Professional work and a strong final result."
		}
	], r = t.googleIconSrc || "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='12' fill='%23ffffff'/%3E%3Ctext x='12' y='16' text-anchor='middle' font-family='Arial, sans-serif' font-size='12' fill='%23000000'%3EG%3C/text%3E%3C/svg%3E";
	return `
    <div class="reviews-track-wrap">
      <div class="reviews-track" data-reviews-track>
        ${n.map((t) => `
              <article class="review-card card" tabindex="0">
                <div class="review-header">
                  <div class="avatar" data-name="${e(t.name)}"></div>
                  <div>
                    <strong>${e(t.name)}</strong>
                    <p>${e(t.role)}</p>
                  </div>
                </div>

                <p>${e(t.text)}</p>

                <div class="review-meta">
                  <span class="stars">★★★★★</span>
                  <img
                    src="${e(r)}"
                    alt="Google review"
                    class="google-icon"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            `).join("")}
      </div>
    </div>
  `;
}
//#endregion
//#region src/components/timeline.js
function d(t = {}) {
	return `
    <div class="timeline">
      ${(t.items ?? [
		{
			date: "2021",
			title: "Discovery",
			text: "Started with planning, requirements, and early structure."
		},
		{
			date: "2022",
			title: "Build",
			text: "Moved into development and component authoring."
		},
		{
			date: "2023",
			title: "Refine",
			text: "Improved performance, styling, and maintainability."
		},
		{
			date: "2024",
			title: "Scale",
			text: "Expanded the system for reuse across multiple sites."
		}
	]).map((t, n) => `
            <article class="timeline-item" data-timeline-item>
              <div class="timeline-marker">${String(n + 1).padStart(2, "0")}</div>
              <div class="timeline-content">
                <span class="timeline-date">${e(t.date)}</span>
                <h3>${e(t.title)}</h3>
                <p>${e(t.text)}</p>
              </div>
            </article>
          `).join("")}
    </div>
  `;
}
//#endregion
//#region src/components/staggeredTimeline.js
function f(t = {}) {
	return `
    <div class="staggered-timeline">
      <div class="staggered-timeline-wrapper">
        ${(t.items ?? [
		{
			date: "2021",
			title: "Idea Formation",
			text: "Initial concept and direction established."
		},
		{
			date: "2022",
			title: "Development",
			text: "Core architecture and reusable patterns built."
		},
		{
			date: "2023",
			title: "Expansion",
			text: "The system grew into a broader component library."
		},
		{
			date: "2024",
			title: "Production",
			text: "Optimized for performance, reuse, and scale."
		}
	]).map((t, n) => `
              <article class="staggered-item ${t.side || (n % 2 == 0 ? "left" : "right")}" data-timeline-item>
                <div class="staggered-content">
                  <span class="staggered-dot" aria-hidden="true"></span>
                  <span class="staggered-date">${e(t.date)}</span>
                  <h3>${e(t.title)}</h3>
                  <p>${e(t.text)}</p>
                </div>
              </article>
            `).join("")}
      </div>
    </div>
  `;
}
//#endregion
//#region src/components/parallaxScroll.js
function p(t = {}) {
	let n = {
		eyebrow: "Parallax Scroll",
		title: "Layered motion with depth",
		text: "This section adds a subtle parallax shift to create visual rhythm without overwhelming the page.",
		imageSrc: "",
		imageAlt: "",
		ctaLabel: "Learn More",
		ctaHref: "#contact",
		imagePosition: "center center",
		loading: "eager",
		speed: .16,
		scale: 1.08,
		...t
	};
	return `
    <section
      class="section parallax-scroll reveal"
      data-parallax-section
      data-parallax-speed="${e(String(n.speed))}"
      data-parallax-scale="${e(String(n.scale))}"
    >

      <div class="container parallax-scroll-grid">

        <!-- Text Content -->
        <div class="parallax-scroll-copy">
          ${n.eyebrow ? `<span class="eyebrow">${e(n.eyebrow)}</span>` : ""}
          <h2>${e(n.title)}</h2>
          <p>${e(n.text)}</p>

          ${n.ctaLabel ? `<a class="btn btn-brand" href="${e(n.ctaHref)}">
                  ${e(n.ctaLabel)}
                </a>` : ""}
        </div>

        <!-- Media -->
        <div class="parallax-scroll-media">
          <div class="parallax-scroll-frame">
            <img
              src="${e(n.imageSrc)}"
              alt="${e(n.imageAlt)}"
              class="parallax-scroll-image"
              data-parallax-image
              loading="${e(n.loading)}"
              decoding="async"
              style="object-position:${e(n.imagePosition)};"
            />
          </div>
        </div>

      </div>
    </section>
  `;
}
//#endregion
//#region src/registry.js
var m = {
	header: { render: n },
	footer: { render: i },
	button: { render: a },
	card: { render: o },
	form: { render: c },
	accordion: { render: l },
	"review-carousel": { render: u },
	timeline: { render: d },
	"staggered-timeline": { render: f },
	"parallax-scroll": { render: p }
};
//#endregion
//#region src/mount.js
function h(e) {
	let t = e.dataset.props || "";
	if (!t.trim()) return {};
	try {
		return JSON.parse(t);
	} catch (e) {
		return console.warn("Invalid JSON in data-props:", t, e), {};
	}
}
function g(e, t, n = {}, r = m) {
	let i = r[t];
	return !e || !i?.render ? !1 : (e.innerHTML = i.render(n), e.dataset.mounted = "true", !0);
}
async function _(e = document, t = m) {
	let n = Array.from(e.querySelectorAll("[data-component]")), r = [];
	for (let e of n) {
		if (e.dataset.mounted === "true") continue;
		let n = e.dataset.component;
		if (!t[n]?.render) {
			console.warn(`Unknown component: ${n}`);
			continue;
		}
		g(e, n, h(e), t), r.push({
			name: n,
			target: e
		});
	}
	return r;
}
//#endregion
//#region src/behaviours/nav.js
function v() {
	let e = document.querySelectorAll(".site-header");
	e.length && e.forEach((e) => {
		if (e.dataset.navInitialized === "true") return;
		e.dataset.navInitialized = "true";
		let t = e.querySelector("[data-mobile-menu-toggle]"), n = e.querySelector("[data-mobile-menu]");
		if (!e || !t || !n) return;
		let r = () => {
			t.classList.remove("active"), n.classList.remove("active"), t.setAttribute("aria-expanded", "false"), n.setAttribute("aria-hidden", "true");
		};
		t.addEventListener("click", (e) => {
			e.stopPropagation();
			let r = n.classList.toggle("active");
			t.classList.toggle("active", r), t.setAttribute("aria-expanded", String(r)), n.setAttribute("aria-hidden", String(!r));
		}), document.addEventListener("click", (e) => {
			e.target.closest(".site-header") || r();
		}), document.addEventListener("keydown", (e) => {
			e.key === "Escape" && r();
		}), n.querySelectorAll("a").forEach((e) => {
			e.addEventListener("click", r);
		}), window.addEventListener("resize", () => {
			window.innerWidth >= 992 && r();
		});
	});
}
//#endregion
//#region src/behaviours/reveal.js
function y(e = document) {
	let t = e.querySelectorAll(".reveal");
	if (!t.length) return;
	let n = (e) => {
		e.classList.add("is-visible"), e.querySelectorAll("[data-reveal-child]").forEach((e, t) => {
			let n = e.dataset.delay ? parseInt(e.dataset.delay, 10) : t * 100;
			e.style.transitionDelay = `${n}ms`, e.classList.add("is-visible");
		});
	};
	if ("IntersectionObserver" in window) {
		let e = new IntersectionObserver((t) => {
			t.forEach((t) => {
				t.isIntersecting && (n(t.target), e.unobserve(t.target));
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -50px 0px"
		});
		t.forEach((t) => {
			t.classList.contains("is-visible") || e.observe(t);
		});
	} else t.forEach(n);
}
//#endregion
//#region src/behaviours/carousel.js
function b(e = document) {
	let t = e.querySelectorAll("[data-reviews-track]");
	if (!t.length) return;
	let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	t.forEach((e) => {
		if (e.dataset.carouselInitialized === "true") return;
		e.dataset.carouselInitialized = "true";
		let t = Array.from(e.children);
		if (!t.length) return;
		t.forEach((t) => {
			e.appendChild(t.cloneNode(!0));
		}), e.querySelectorAll(".avatar").forEach((e) => {
			e.textContent = (e.dataset.name || "").split(" ").filter(Boolean).map((e) => e[0]).join("").toUpperCase().slice(0, 2) || "G";
		});
		let r = !1, i = 0, a = 0, o = () => {
			i = e.scrollWidth / 2;
		}, s = () => {
			o();
			let t = () => {
				!n && !r && i > 0 && (a -= .35, Math.abs(a) >= i && (a += i), e.style.transform = `translate3d(${a}px, 0, 0)`), requestAnimationFrame(t);
			};
			requestAnimationFrame(t);
		}, c = () => {
			r = !0;
		}, l = () => {
			r = !1;
		};
		e.addEventListener("mouseenter", c), e.addEventListener("mouseleave", l), e.addEventListener("focusin", c), e.addEventListener("focusout", () => {
			requestAnimationFrame(() => {
				e.contains(document.activeElement) || l();
			});
		}), e.addEventListener("dragstart", (e) => e.preventDefault()), window.addEventListener("resize", o), document.readyState === "complete" ? requestAnimationFrame(s) : window.addEventListener("load", () => requestAnimationFrame(s), { once: !0 });
	});
}
//#endregion
//#region src/behaviours/accordion.js
function x(e = document) {
	let t = e.querySelectorAll(".accordion-custom");
	t.length && t.forEach((e, t) => {
		if (e.dataset.accordionInitialized === "true") return;
		e.dataset.accordionInitialized = "true";
		let n = Array.from(e.querySelectorAll(".accordion-item-custom"));
		n.length && n.forEach((e, r) => {
			let i = e.querySelector(".accordion-trigger"), a = e.querySelector(".accordion-panel");
			if (!i || !a) return;
			let o = i.id || `accordion-${t}-trigger-${r}`, s = a.id || `accordion-${t}-panel-${r}`;
			i.id = o, a.id = s, i.setAttribute("aria-controls", s), i.setAttribute("aria-expanded", e.classList.contains("is-open") ? "true" : "false"), a.setAttribute("role", "region"), a.setAttribute("aria-labelledby", o), i.addEventListener("click", () => {
				let t = e.classList.contains("is-open");
				n.forEach((e) => {
					let t = e.querySelector(".accordion-trigger");
					e.classList.remove("is-open"), t?.setAttribute("aria-expanded", "false");
				}), t || (e.classList.add("is-open"), i.setAttribute("aria-expanded", "true"));
			});
		});
	});
}
//#endregion
//#region src/behaviours/timeline.js
function S(e = document) {
	let t = e.querySelectorAll(".timeline-item, .staggered-item");
	if (!t.length) return;
	let n = (e) => {
		e.classList.add("is-visible");
	};
	if ("IntersectionObserver" in window) {
		let e = new IntersectionObserver((t) => {
			t.forEach((t) => {
				t.isIntersecting && (n(t.target), e.unobserve(t.target));
			});
		}, {
			threshold: .18,
			rootMargin: "0px 0px -50px 0px"
		});
		t.forEach((t, n) => {
			t.dataset.timelineInitialized !== "true" && (t.dataset.timelineInitialized = "true", t.style.transitionDelay = `${n * 120}ms`, e.observe(t));
		});
	} else t.forEach(n);
}
//#endregion
//#region src/behaviours/animations.js
function C(e = document) {
	e.querySelectorAll("[data-float]").forEach((e, t) => {
		e.dataset.floatInitialized !== "true" && (e.dataset.floatInitialized = "true", e.classList.add("is-floating"), e.style.animationDelay = `${t * 120}ms`);
	});
}
//#endregion
//#region src/behaviours/parallax.js
function w(e = document) {
	let t = Array.from(e.querySelectorAll("[data-parallax-section]"));
	if (!t.length) return;
	let n = window.matchMedia("(prefers-reduced-motion: reduce)").matches, r = !1, i = () => {
		r = !1;
		let e = window.innerHeight || document.documentElement.clientHeight;
		t.forEach((t) => {
			let r = t.querySelector("[data-parallax-image]");
			if (!r) return;
			let i = t.getBoundingClientRect(), a = Number.parseFloat(t.dataset.parallaxSpeed || "0.16"), o = Number.parseFloat(t.dataset.parallaxScale || "1.08");
			if (n) {
				r.style.transform = "translate3d(0, 0, 0) scale(1)";
				return;
			}
			if (i.bottom <= 0 || i.top >= e) return;
			let s = (e * .5 - i.top) * a;
			r.style.transform = `translate3d(0, ${s}px, 0) scale(${o})`;
		});
	}, a = () => {
		r || (r = !0, requestAnimationFrame(i));
	};
	window.addEventListener("scroll", a, { passive: !0 }), window.addEventListener("resize", a), i();
}
//#endregion
//#region src/core.js
async function T(e = document) {
	await _(e), D(e);
}
async function E(e = document) {
	await T(e);
}
function D(e = document) {
	v(), y(e), b(e), x(e), S(e), C(e), w(e);
}
//#endregion
export { n as C, i as S, u as _, C as a, o as b, b as c, g as d, _ as f, d as g, f as h, w as i, y as l, p as m, D as n, S as o, m as p, T as r, x as s, E as t, v as u, l as v, e as w, a as x, c as y };
