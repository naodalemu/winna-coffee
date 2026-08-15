import type { CSSProperties } from "react";
import ImageWithCredit from "./ImageWithCredit";
import { impactImage, values, type ValueItem } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function Impact() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <div id="impact" style={{ position: "relative", padding: "120px 44px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <ImageWithCredit {...impactImage} alt="Shade trees over the coffee farm" />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,rgba(20,38,25,0.94) 0%,rgba(20,38,25,0.82) 55%,rgba(20,38,25,0.6) 100%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
        <div
          ref={intro.ref}
          className={`reveal${intro.visible ? " is-visible" : ""}`}
          style={{ maxWidth: 560, marginBottom: 52 }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#C9A24B",
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            Our Impact
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 46,
              lineHeight: 1.1,
              color: "#FBF8F1",
              margin: "0 0 16px",
            }}
          >
            Agriculture that cares
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#CBD6CB", margin: 0 }}>
            Growing organic coffee the right way — for biodiversity, for the community, and for
            better beans.
          </p>
        </div>
        <div className="grid-3" style={{ gap: 34 }}>
          {values.map((v, i) => (
            <ValueColumn key={v.n} v={v} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ValueColumn({ v, index }: { v: ValueItem; index: number }) {
  const col = useReveal<HTMLDivElement>();

  return (
    <div
      ref={col.ref}
      className={`reveal${col.visible ? " is-visible" : ""}`}
      style={{
        "--reveal-delay": `${index * 80}ms`,
        borderTop: "2px solid #C9A24B",
        paddingTop: 24,
      } as CSSProperties}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 22,
          color: "#C9A24B",
          marginBottom: 10,
        }}
      >
        {v.n}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontWeight: 600,
          fontSize: 25,
          color: "#FBF8F1",
          margin: "0 0 12px",
        }}
      >
        {v.title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: "#CBD6CB", margin: 0 }}>{v.desc}</p>
    </div>
  );
}

export default Impact;
