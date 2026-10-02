import { useEffect, useRef, useState, type CSSProperties } from "react";
import { statLabels, statTargets } from "../data/content";
import { Reveal, Tag } from "./ui";
import "./Stats.css";

type Counts = typeof statTargets;

const ZERO_COUNTS: Counts = { blocks: 0, varieties: 0, altitude: 0, rainfall: 0, hectares: 0 };

const fmt = (n: number) => n.toLocaleString("en-US");

function Stats() {
  const [counts, setCounts] = useState<Counts>(ZERO_COUNTS);
  const [started, setStarted] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const runCount = () => {
      const dur = 1900;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 4);
        const next = {} as Counts;
        (Object.keys(statTargets) as (keyof Counts)[]).forEach((k) => {
          next[k] = Math.round(statTargets[k] * eased);
        });
        setCounts(next);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          runCount();
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const statItems: { display: string | number; label: string }[] = [
    { display: counts.blocks, label: statLabels.blocks },
    { display: counts.varieties, label: statLabels.varieties },
    { display: fmt(counts.altitude), label: statLabels.altitude },
    { display: fmt(counts.rainfall), label: statLabels.rainfall },
    { display: counts.hectares, label: statLabels.hectares },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-head">
          <Tag index="S.02" label="By the numbers" />
          <Reveal as="p" className="stats-copy">
            Altitude of 1,705–1,880 m, 1,800–2,200 mm of rain a year and rich volcanic soil -
            101.54 hectares in total, 97.36 of them planted across 12 mapped blocks.
          </Reveal>
        </div>
        <div ref={nodeRef} className={`stats-grid${started ? " is-visible" : ""}`}>
          {statItems.map((s, i) => (
            <div key={s.label} className="stat" style={{ "--i": i } as CSSProperties}>
              <span className="mono stat-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="stat-num">{s.display}</span>
              <span className="mono stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
