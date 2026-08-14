import { certifications } from "../data/content";

function Certifications() {
  return (
    <div id="certifications" style={{ background: "#14261A", padding: "110px 44px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto 56px" }}>
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
            Certifications & Recognition
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 44,
              lineHeight: 1.12,
              color: "#FBF8F1",
              margin: "0 0 16px",
            }}
          >
            Certified organic, grown responsibly
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#B9C7BC", margin: 0 }}>
            Our beans are certified organic. Additional certifications and awards will be listed
            here.
          </p>
        </div>
        <div className="grid-4-eq" style={{ gap: 16 }}>
          {certifications.map((c, i) => (
            <div
              key={`${c.label}-${i}`}
              style={{
                border: "1px solid rgba(201,162,75,0.28)",
                borderRadius: 4,
                padding: "26px 20px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 96,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: 0.5, color: c.color, lineHeight: 1.4 }}>
                {c.label}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 24,
            border: "1px dashed rgba(201,162,75,0.35)",
            borderRadius: 4,
            padding: 26,
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 14, color: "#8FA093", fontStyle: "italic" }}>
            Awards & recognition — expecting data
          </span>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
