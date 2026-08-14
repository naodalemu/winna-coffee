function FAQ() {
  return (
    <div style={{ background: "#FBF8F1", padding: "120px 44px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
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
            FAQ
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
            Questions buyers ask
          </h2>
        </div>
        <div
          style={{
            border: "1px dashed #CBBE9F",
            borderRadius: 8,
            background: "#F6F1E7",
            padding: "64px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontStyle: "italic",
              fontSize: 22,
              color: "#8A7A66",
              margin: 0,
            }}
          >
            Frequently asked questions — expecting data
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
