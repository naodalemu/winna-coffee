import ImageWithCredit from "./ImageWithCredit";
import { impactImage, values } from "../data/content";

function Impact() {
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
        <div style={{ maxWidth: 560, marginBottom: 52 }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 34 }}>
          {values.map((v) => (
            <div key={v.n} style={{ borderTop: "2px solid #C9A24B", paddingTop: 24 }}>
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
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#CBD6CB", margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Impact;
