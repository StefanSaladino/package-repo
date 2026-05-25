/* ========================================
   MOBILE NAVIGATION
   ----------------------------------------
   Controls the responsive navigation menu.

   Features:
   - Hamburger toggle
   - Click outside to close
   - Escape key support
   - Auto-close on link click
   - Reset on viewport resize
   - ARIA state synchronization

   Expected structure:
   .site-header
     ├── #hamburger
     └── #mobileMenu
======================================== */

/**
 * Initializes mobile navigation behavior.
 */
export function initNav() {
  const headers = document.querySelectorAll(".site-header");

  if (!headers.length) return;

  headers.forEach((header) => {
    // Prevent duplicate initialization
    if (header.dataset.navInitialized === "true") return;
    header.dataset.navInitialized = "true";

    const hamburger = header.querySelector("[data-mobile-menu-toggle]");
    const mobileMenu = header.querySelector("[data-mobile-menu]");

    // Guard: required elements must exist
    if (!header || !hamburger || !mobileMenu) return;

    /**
     * Closes the mobile menu and resets state.
     */
    const closeMenu = () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");

      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    };

    /**
     * Toggles mobile menu visibility.
     *
     * @param {Event} event
     */
    const toggleMenu = (event) => {
      event.stopPropagation();

      const isOpen = mobileMenu.classList.toggle("active");

      hamburger.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    };

    /* ========================================
       EVENT BINDINGS
    ======================================== */

    // Toggle via hamburger
    hamburger.addEventListener("click", toggleMenu);

    // Close when clicking outside header
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".site-header")) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Close when clicking any mobile nav link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Reset on desktop breakpoint
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    });
  });
}