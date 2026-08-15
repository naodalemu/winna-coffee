import { process } from "../data/content";

function Process() {
  return (
    <div id="process" style={{ background: "#F6F1E7", padding: "120px 44px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            Our Process
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 46,
              lineHeight: 1.12,
              color: "#2A1C11",
              margin: 0,
            }}
          >
            From farm to you
          </h2>
        </div>
        <div>
          {process.map((step) => (
            <div
              key={step.n}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 36,
                padding: "34px 0",
                borderTop: "1px solid #E2D9C6",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 56,
                  fontWeight: 500,
                  color: "#C9A24B",
                  lineHeight: 1,
                }}
              >
                {step.n}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontWeight: 600,
                    fontSize: 27,
                    color: "#2A1C11",
                    margin: "0 0 10px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5A4A3B", margin: 0, maxWidth: 640 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
