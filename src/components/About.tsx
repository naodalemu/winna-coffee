import ImageWithCredit from "./ImageWithCredit";
import { aboutImage } from "../data/content";

function About() {
  return (
    <div id="about" style={{ background: "#FBF8F1", padding: "120px 44px" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#C9A24B",
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            Who We Are
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 44,
              lineHeight: 1.14,
              color: "#2A1C11",
              margin: "0 0 24px",
            }}
          >
            A single-origin farm, from soil to shipment.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "#5A4A3B", margin: "0 0 22px" }}>
            Winna Trading PLC is a leading exporter of high-quality Ethiopian coffee, specializing
            in organic and specialty beans sourced directly from our own Nibo Sendeka farm in the
            Sheka Zone of Southwest Ethiopia.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "#5A4A3B", margin: "0 0 30px" }}>
            The farm's combination of altitude (1,705–1,880m), rainfall (1,800–2,200mm annually)
            and rich volcanic soil creates ideal conditions for premium Arabica — 101.54 hectares
            in total, 97.36 of them planted across 12 mapped blocks.
          </p>
          <a
            href="#origins"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#1E3A2B",
              borderBottom: "2px solid #C9A24B",
              paddingBottom: 3,
            }}
          >
            Learn more about the farm →
          </a>
        </div>
        <div
          style={{
            height: 520,
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(20,38,25,0.15)",
          }}
        >
          <ImageWithCredit {...aboutImage} alt="Green coffee beans" />
        </div>
      </div>
    </div>
  );
}

export default About;
