import { useEffect, useRef } from "react";

// Writes --p (−1 at the viewport bottom → 1 at the top) onto the element while it is on
// screen, so CSS can drive parallax without re-rendering React.
export function useParallax<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let onScreen = false;

    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = ((vh - r.top) / (vh + r.height)) * 2 - 1;
      el.style.setProperty("--p", Math.max(-1, Math.min(1, p)).toFixed(4));
    };
    const onScroll = () => {
      if (onScreen && !frame) frame = requestAnimationFrame(update);
    };

    const obs = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) update();
    });
    obs.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
