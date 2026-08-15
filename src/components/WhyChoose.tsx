import type { CSSProperties } from "react";
import { whyChoose, type WhyChooseItem } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function WhyChoose() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <div style={{ background: "#F6F1E7", padding: "110px 44px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          ref={intro.ref}
          className={`reveal${intro.visible ? " is-visible" : ""}`}
          style={{ textAlign: "center", marginBottom: 56 }}
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
            Why Choose Winna
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 44,
              color: "#2A1C11",
              margin: 0,
            }}
          >
            What sets our coffee apart
          </h2>
        </div>
        <div
          className="grid-3"
          style={{
            gap: 2,
            background: "#E2D9C6",
            border: "1px solid #E2D9C6",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          {whyChoose.map((w, i) => (
            <WhyChooseCell key={w.num} w={w} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyChooseCell({ w, index }: { w: WhyChooseItem; index: number }) {
  const cell = useReveal<HTMLDivElement>();

  return (
    <div
      ref={cell.ref}
      className={`reveal card-lift${cell.visible ? " is-visible" : ""}`}
      style={{
        "--reveal-delay": `${index * 80}ms`,
        background: "#FBF8F1",
        padding: "38px 34px",
      } as CSSProperties}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 3,
          background: "#1E3A2B",
          color: "#C9A24B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 20,
        }}
      >
        {w.num}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontWeight: 600,
          fontSize: 23,
          color: "#2A1C11",
          margin: "0 0 10px",
        }}
      >
        {w.title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5A4A3B", margin: 0 }}>{w.desc}</p>
    </div>
  );
}

export default WhyChoose;
