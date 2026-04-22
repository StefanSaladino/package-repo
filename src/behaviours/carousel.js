/* ========================================
   REVIEW CAROUSEL
   ----------------------------------------
   Seamless infinite loop with:
   - auto scroll
   - pause on hover / focus
   - avatar initials
======================================== */

export function initCarousel(root = document) {
  const tracks = root.querySelectorAll("[data-reviews-track]");
  if (!tracks.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  tracks.forEach((track) => {
    if (track.dataset.carouselInitialized === "true") return;
    track.dataset.carouselInitialized = "true";

    const originalItems = Array.from(track.children);
    if (!originalItems.length) return;

    // Duplicate once for seamless looping.
    originalItems.forEach((item) => {
      track.appendChild(item.cloneNode(true));
    });

    // Fill avatar initials.
    track.querySelectorAll(".avatar").forEach((el) => {
      const name = el.dataset.name || "";
      const initials = name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

      el.textContent = initials || "G";
    });

    let isPaused = false;
    let loopWidth = 0;
    let position = 0;
    const speed = 0.35;

    const measure = () => {
      loopWidth = track.scrollWidth / 2;
    };

    const start = () => {
      measure();

      const animate = () => {
        if (!prefersReducedMotion && !isPaused && loopWidth > 0) {
          position -= speed;

          if (Math.abs(position) >= loopWidth) {
            position += loopWidth;
          }

          track.style.transform = `translate3d(${position}px, 0, 0)`;
        }

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    const pause = () => {
      isPaused = true;
    };

    const resume = () => {
      isPaused = false;
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", () => {
      requestAnimationFrame(() => {
        if (!track.contains(document.activeElement)) {
          resume();
        }
      });
    });

    track.addEventListener("dragstart", (e) => e.preventDefault());

    window.addEventListener("resize", measure);

    if (document.readyState === "complete") {
      requestAnimationFrame(start);
    } else {
      window.addEventListener("load", () => requestAnimationFrame(start), { once: true });
    }
  });
}