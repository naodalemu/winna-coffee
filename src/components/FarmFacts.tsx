import type { CSSProperties } from "react";
import ImageWithCredit from "./ImageWithCredit";
import { farmFacts, type FarmFact } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function FarmFacts() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <div id="origins" style={{ background: "#F6F1E7", padding: "120px 44px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          ref={intro.ref}
          className={`reveal${intro.visible ? " is-visible" : ""}`}
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 60px" }}
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
            The Farm
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 46,
              lineHeight: 1.12,
              color: "#2A1C11",
              margin: "0 0 18px",
            }}
          >
            Inside Nibo Sendeka
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5A4A3B", margin: 0 }}>
            101.54 hectares in the Sheka Zone highlands — the altitude, climate and soil that
            shape every bean.
          </p>
        </div>
        <div className="grid-3" style={{ gap: 26 }}>
          {farmFacts.map((o, i) => (
            <FarmFactCard key={o.slot} o={o} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FarmFactCard({ o, index }: { o: FarmFact; index: number }) {
  const card = useReveal<HTMLDivElement>();

  return (
    <div
      ref={card.ref}
      className={`reveal img-zoom${card.visible ? " is-visible" : ""}`}
      style={{
        "--reveal-delay": `${index * 80}ms`,
        position: "relative",
        height: 400,
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: "0 18px 40px rgba(20,38,25,0.12)",
      } as CSSProperties}
    >
      <ImageWithCredit img={o.img} credit={o.credit} creditHref={o.creditHref} alt={o.name} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(20,38,25,0) 35%,rgba(20,38,25,0.9) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: 26,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#C9A24B",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          {o.region}
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 30,
            fontWeight: 600,
            color: "#FBF8F1",
            lineHeight: 1,
          }}
        >
          {o.name}
        </div>
        <div style={{ fontSize: 14, color: "#E3DCCB", marginTop: 12, lineHeight: 1.5 }}>
          {o.notes}
        </div>
      </div>
    </div>
  );
}

export default FarmFacts;
