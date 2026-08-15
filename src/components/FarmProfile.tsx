import type { CSSProperties } from "react";
import ImageWithCredit from "./ImageWithCredit";
import { farmProfile, type FarmProfileItem } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function FarmProfile() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <div id="other" style={{ background: "#FBF8F1", padding: "110px 44px", borderTop: "1px solid #ECE3D3" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          ref={intro.ref}
          className={`reveal${intro.visible ? " is-visible" : ""}`}
          style={{ maxWidth: 660, margin: "0 0 56px" }}
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
            Farm Profile
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 42,
              lineHeight: 1.12,
              color: "#2A1C11",
              margin: "0 0 14px",
            }}
          >
            Nibo Sendeka, block by block
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5A4A3B", margin: 0 }}>
            A fully mapped organic coffee farm in Keja Kebele, Masha District — with on-site wet
            and dry processing.
          </p>
        </div>
        <div className="grid-2" style={{ gap: 30 }}>
          {farmProfile.map((p, i) => (
            <FarmProfileCard key={p.slot} p={p} index={i} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a
            href="#contact"
            className="btn-outline-dark"
            style={{
              display: "inline-block",
              border: "1.5px solid #1E3A2B",
              color: "#1E3A2B",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 0.5,
              padding: "14px 32px",
              borderRadius: 2,
            }}
          >
            Contact us for the full farm report →
          </a>
        </div>
      </div>
    </div>
  );
}

function FarmProfileCard({ p, index }: { p: FarmProfileItem; index: number }) {
  const card = useReveal<HTMLDivElement>();

  return (
    <div
      ref={card.ref}
      className={`reveal card-lift farm-profile-card${card.visible ? " is-visible" : ""}`}
      style={{
        "--reveal-delay": `${index * 80}ms`,
        gap: 0,
        background: "#F6F1E7",
        borderRadius: 6,
        overflow: "hidden",
        border: "1px solid #ECE3D3",
      } as CSSProperties}
    >
      <div className="img-zoom">
        <ImageWithCredit img={p.img} credit={p.credit} creditHref={p.creditHref} alt={p.name} />
      </div>
      <div style={{ padding: "24px 26px" }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 600,
            fontSize: 23,
            color: "#2A1C11",
            margin: "0 0 6px",
          }}
        >
          {p.name}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6A5A48", margin: "0 0 16px" }}>
          {p.desc}
        </p>
        <div>
          {p.spec.map((row) => (
            <div
              key={row.k}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 14,
                borderBottom: "1px dotted #D9CFBB",
                padding: "7px 0",
                fontSize: 13,
              }}
            >
              <span style={{ color: "#8A7A66", flexShrink: 0 }}>{row.k}</span>
              <span style={{ color: "#3A2C1E", fontWeight: 600, textAlign: "right" }}>
                {row.v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FarmProfile;
