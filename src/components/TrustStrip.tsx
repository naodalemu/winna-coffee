import { trust } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function TrustStrip() {
  const strip = useReveal<HTMLDivElement>();

  return (
    <div style={{ background: "#1E3A2B", borderBottom: "1px solid rgba(201,162,75,0.2)" }}>
      <div
        ref={strip.ref}
        className={`reveal${strip.visible ? " is-visible" : ""}`}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "22px 44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          flexWrap: "wrap",
        }}
      >
        {trust.map((t) => (
          <div key={t} style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontSize: 13,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "#DCE5DD",
                fontWeight: 600,
                padding: "0 26px",
              }}
            >
              {t}
            </span>
            <span style={{ color: "#C9A24B", opacity: 0.5 }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustStrip;
