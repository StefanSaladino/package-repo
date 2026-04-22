/* ========================================
   MOBILE NAVIGATION
   ----------------------------------------
   Handles hamburger toggle, outside click,
   escape key, and menu link closing.
======================================== */

export function initNav() {
  const header = document.querySelector(".site-header");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!header || !hamburger || !mobileMenu) return;
  if (header.dataset.navInitialized === "true") return;

  header.dataset.navInitialized = "true";

  const closeMenu = () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  };

  const toggleMenu = (event) => {
    event.stopPropagation();

    const isOpen = mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  };

  hamburger.addEventListener("click", toggleMenu);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      closeMenu();
    }
  });
}