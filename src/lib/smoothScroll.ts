import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Eased mouse-wheel scrolling. Touch keeps native momentum (syncTouch off), and users who
// prefer reduced motion get plain native scrolling - lenis stays null for them.
export let lenis: Lenis | null = null;

export function initSmoothScroll() {
  if (lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  lenis = new Lenis({
    autoRaf: true,
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart: settles quickly, no float
    anchors: true, // same-page #links glide through Lenis
    stopInertiaOnNavigate: true,
  });
}

// Smooth-scroll to a y position, via Lenis when it is running.
export function scrollToY(top: number) {
  if (lenis) lenis.scrollTo(top);
  else window.scrollTo({ top, behavior: "smooth" });
}
