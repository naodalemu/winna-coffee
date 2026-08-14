import { useEffect, useRef, useState } from "react";
import { statLabels, statTargets } from "../data/content";

type Counts = typeof statTargets;

const ZERO_COUNTS: Counts = { blocks: 0, varieties: 0, altitude: 0, rainfall: 0, hectares: 0 };

const fmt = (n: number) => n.toLocaleString("en-US");

function Stats() {
  const [counts, setCounts] = useState<Counts>(ZERO_COUNTS);
  const animatedRef = useRef(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const runCount = () => {
      const dur = 1700;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
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
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
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
    <div ref={nodeRef} style={{ background: "#F6F1E7", padding: "88px 44px" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 20,
        }}
      >
        {statItems.map((s) => (
          <div
            key={s.label}
            style={{
              textAlign: "center",
              padding: "0 8px",
              borderRight: "1px solid #E2D9C6",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontWeight: 600,
                fontSize: 52,
                color: "#1E3A2B",
                lineHeight: 1,
              }}
            >
              {s.display}
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#8A7A66",
                fontWeight: 600,
                marginTop: 12,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
