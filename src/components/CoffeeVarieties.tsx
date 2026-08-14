import ImageWithCredit from "./ImageWithCredit";
import { varieties } from "../data/content";

function CoffeeVarieties() {
  return (
    <div id="coffee" style={{ background: "#14261A", padding: "120px 44px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
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
            Our Coffee
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 46,
              lineHeight: 1.12,
              color: "#FBF8F1",
              margin: "0 0 18px",
            }}
          >
            Single-Origin Arabica Varieties
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#B9C7BC", margin: 0 }}>
            Grown across 12 mapped blocks on the Nibo Sendeka farm, each variety carries the
            character of its altitude and soil.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {varieties.map((p) => (
            <div
              key={p.slot}
              style={{
                background: "#FBF8F1",
                borderRadius: 6,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 230 }}>
                <ImageWithCredit img={p.img} credit={p.credit} creditHref={p.creditHref} alt={p.name} />
              </div>
              <div style={{ padding: "28px 26px 30px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontWeight: 600,
                    fontSize: 25,
                    color: "#2A1C11",
                    margin: "0 0 12px",
                  }}
                >
                  {p.name}
                </h3>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        letterSpacing: 0.5,
                        color: "#1E3A2B",
                        background: "#EDE6D6",
                        padding: "5px 11px",
                        borderRadius: 2,
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid #E6DDCB", paddingTop: 16, marginTop: "auto" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      color: "#5A4A3B",
                      marginBottom: 9,
                    }}
                  >
                    <span style={{ color: "#8A7A66" }}>Altitude</span>
                    <span style={{ fontWeight: 600, textAlign: "right", maxWidth: "60%" }}>
                      {p.altitude}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      color: "#5A4A3B",
                      marginBottom: 9,
                    }}
                  >
                    <span style={{ color: "#8A7A66" }}>Blocks</span>
                    <span style={{ fontWeight: 600 }}>{p.blocks}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      color: "#5A4A3B",
                    }}
                  >
                    <span style={{ color: "#8A7A66" }}>Profile</span>
                    <span style={{ fontWeight: 600, textAlign: "right", maxWidth: "60%" }}>
                      {p.profile}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoffeeVarieties;
