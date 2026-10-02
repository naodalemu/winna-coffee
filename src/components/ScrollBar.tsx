import { useEffect, useRef, useState } from "react";
import "./ScrollBar.css";

const MIN_THUMB = 48;
const IDLE_MS = 900;
// Sections with a dark background — the thumb switches to cream over these.
const DARK_SELECTOR = ".hero, .section-dark, .impact, .footer-band";

/** Track-less overlay scrollbar: shows while scrolling, hovering the edge or dragging. */
function ScrollBar() {
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const thumb = thumbRef.current;
    const bar = thumb?.parentElement;
    if (!thumb || !bar) return;

    let frame = 0;
    let idle = 0;

    const layout = () => {
      frame = 0;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const scrollable = docH - vh;
      bar.style.display = scrollable > 0 ? "" : "none";
      if (scrollable <= 0) return;
      const h = Math.max(MIN_THUMB, (vh / docH) * vh);
      const y = (window.scrollY / scrollable) * (vh - h);
      thumb.style.height = `${h}px`;
      thumb.style.transform = `translate3d(0, ${y}px, 0)`;

      // Look at what's underneath the thumb's centre to pick a contrasting colour.
      const under = document
        .elementsFromPoint(window.innerWidth - 8, y + h / 2)
        .find((el) => !bar.contains(el));
      thumb.classList.toggle("is-on-dark", !!under?.closest(DARK_SELECTOR));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(layout);
    };
    const onScroll = () => {
      schedule();
      setActive(true);
      clearTimeout(idle);
      idle = window.setTimeout(() => setActive(false), IDLE_MS);
    };

    layout();
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    const thumb = e.currentTarget;
    thumb.setPointerCapture(e.pointerId);
    setDragging(true);

    const startY = e.clientY;
    const startScroll = window.scrollY;
    const vh = window.innerHeight;
    const scrollable = document.documentElement.scrollHeight - vh;
    const ratio = scrollable / (vh - thumb.offsetHeight);

    const onMove = (ev: PointerEvent) => {
      window.scrollTo({ top: startScroll + (ev.clientY - startY) * ratio, behavior: "instant" });
    };
    const onUp = () => {
      setDragging(false);
      thumb.removeEventListener("pointermove", onMove);
      thumb.removeEventListener("pointerup", onUp);
      thumb.removeEventListener("pointercancel", onUp);
    };
    thumb.addEventListener("pointermove", onMove);
    thumb.addEventListener("pointerup", onUp);
    thumb.addEventListener("pointercancel", onUp);
  };

  const shown = active || dragging || hovering;

  return (
    <div
      className={`scrollbar${shown ? " is-shown" : ""}${dragging ? " is-dragging" : ""}`}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      aria-hidden="true"
    >
      <div ref={thumbRef} className="scrollbar-thumb" onPointerDown={onPointerDown} />
    </div>
  );
}

export default ScrollBar;
