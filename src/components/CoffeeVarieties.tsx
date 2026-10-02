import { useEffect, useRef, useState, type CSSProperties } from "react";
import { varieties } from "../data/content";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Tag } from "./ui";
import "./CoffeeVarieties.css";

const TICKS = 120;
const n = varieties.length;
const SEGMENT = 360 / n;
const code = (name: string) => name.replace(/^Variety\s+/i, "");
const isPending = (v: string) => /expecting data/i.test(v);

function CoffeeVarieties() {
  const pinned = useMediaQuery("(min-width: 901px) and (min-height: 600px)");
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Desktop: the section is tall and the stage is sticky; scroll progress picks the variety
  // and turns the dial continuously.
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!pinned || !section || !stage) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = section.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -r.top / travel));
      stage.style.setProperty("--rot", (progress * (360 - SEGMENT)).toFixed(2));
      setActive(Math.min(n - 1, Math.floor(progress * n)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pinned]);

  // Mobile: no pinning - the dial snaps to the tapped variety.
  useEffect(() => {
    if (!pinned) stageRef.current?.style.setProperty("--rot", String(active * SEGMENT));
  }, [pinned, active]);

  const select = (i: number) => {
    const section = sectionRef.current;
    if (!pinned || !section) {
      setActive(i);
      return;
    }
    const top = section.getBoundingClientRect().top + window.scrollY;
    const travel = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.5) / n) * travel, behavior: "smooth" });
  };

  const v = varieties[active];

  return (
    <section
      id="coffee"
      ref={sectionRef}
      className={`varieties${pinned ? " varieties-pinned" : ""}`}
      style={{ "--count": n } as CSSProperties}
    >
      <div ref={stageRef} className="varieties-stage">
        <div className="varieties-top">
          <Tag index="S.03" label="Varieties" />
          <h2 className="varieties-heading mono">
            Single-origin Arabica
            <br />
            from 12 mapped blocks
          </h2>
        </div>

        <div className="varieties-list-wrap">
          <div className="mono varieties-list-label">Varieties we grow</div>
          <ul className="varieties-list" role="list">
            {varieties.map((item, i) => (
              <li key={item.slot}>
                <button
                  type="button"
                  className={i === active ? "is-active" : ""}
                  aria-pressed={i === active}
                  onClick={() => select(i)}
                >
                  {code(item.name)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="dial" aria-hidden="true">
          <svg className="dial-ring" viewBox="0 0 400 400">
            <g className="dial-ticks-faint">
              {Array.from({ length: TICKS }, (_, i) => (
                <line key={i} x1="200" y1="6" x2="200" y2={i % 5 === 0 ? 20 : 15} transform={`rotate(${(i * 360) / TICKS} 200 200)`} />
              ))}
            </g>
            <g className="dial-ticks-active">
              {Array.from({ length: Math.round(TICKS / n) + 1 }, (_, i) => (
                <line
                  key={i}
                  x1="200"
                  y1="2"
                  x2="200"
                  y2="22"
                  transform={`rotate(${(i * 360) / TICKS} 200 200)`}
                />
              ))}
            </g>
            <g className="dial-inner">
              {Array.from({ length: 72 }, (_, i) => (
                <circle key={i} cx="200" cy="46" r="0.9" transform={`rotate(${i * 5} 200 200)`} />
              ))}
            </g>
          </svg>
          <div className="dial-photo">
            {varieties.map((item, i) => (
              <img
                key={item.slot}
                src={item.img}
                alt=""
                loading="lazy"
                className={i === active ? "is-active" : ""}
              />
            ))}
          </div>
        </div>

        <div className="varieties-index mono">
          AR [#{code(v.name)}]
          <span>
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>

        <div className="varieties-detail" aria-live="polite" key={v.slot}>
          <div className="varieties-tags">
            {v.tags.map((t) => (
              <span key={t} className={`mono${isPending(t) ? " is-pending" : ""}`}>
                {t}
              </span>
            ))}
          </div>
          <dl>
            {[
              ["Altitude", v.altitude],
              ["Blocks", v.blocks],
              ["Profile", v.profile],
            ].map(([k, val]) => (
              <div key={k}>
                <dt className="mono">{k}</dt>
                <dd className={isPending(val) ? "is-pending" : ""}>{val}</dd>
              </div>
            ))}
          </dl>
          <a href="#contact" className="link-line label">
            Request a sample
          </a>
        </div>

        {pinned && (
          <div className="varieties-progress" aria-hidden="true">
            {varieties.map((item, i) => (
              <span key={item.slot} className={i <= active ? "is-on" : ""} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CoffeeVarieties;
