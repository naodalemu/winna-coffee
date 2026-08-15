import { useReveal } from "../hooks/useReveal";

function Testimonials() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <div style={{ background: "#FBF8F1", padding: "110px 44px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div
          ref={intro.ref}
          className={`reveal${intro.visible ? " is-visible" : ""}`}
          style={{ textAlign: "center", marginBottom: 44 }}
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
            What Buyers Say
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
            Trusted by roasters worldwide
          </h2>
        </div>
        <div
          style={{
            border: "1px dashed #CBBE9F",
            borderRadius: 8,
            background: "#F6F1E7",
            padding: "72px 40px",
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          <div style={{ color: "#C9A24B", letterSpacing: 3, fontSize: 18, marginBottom: 16 }}>
            ★★★★★
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontStyle: "italic",
              fontSize: 22,
              color: "#8A7A66",
              margin: 0,
            }}
          >
            Customer testimonials & reviews — expecting data
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
