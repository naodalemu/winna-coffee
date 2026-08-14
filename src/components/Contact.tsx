function Contact() {
  return (
    <div id="contact" style={{ background: "#14261A", padding: "120px 44px" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 70,
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
              marginBottom: 18,
            }}
          >
            Request a Quote
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 44,
              lineHeight: 1.12,
              color: "#FBF8F1",
              margin: "0 0 18px",
            }}
          >
            Tell us your grade, volume & destination.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#B9C7BC", margin: "0 0 40px" }}>
            Share the specifics and our team will respond with pricing, samples and lead times.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 3,
                  background: "rgba(201,162,75,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A24B",
                  fontWeight: 700,
                }}
              >
                ✆
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#8FA093", textTransform: "uppercase", letterSpacing: 1 }}>
                  Phone
                </div>
                <div style={{ fontSize: 15, color: "#EAE3D4" }}>+251 929 904 323</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 3,
                  background: "rgba(201,162,75,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A24B",
                  fontWeight: 700,
                }}
              >
                @
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#8FA093", textTransform: "uppercase", letterSpacing: 1 }}>
                  Email
                </div>
                <div style={{ fontSize: 15, color: "#EAE3D4" }}>mehratleg@gmail.com</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 3,
                  background: "rgba(201,162,75,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A24B",
                  fontWeight: 700,
                }}
              >
                ⌖
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#8FA093", textTransform: "uppercase", letterSpacing: 1 }}>
                  Office
                </div>
                <div style={{ fontSize: 15, color: "#EAE3D4" }}>
                  Bole, Welelay Building, 4th Floor, Addis Ababa
                </div>
              </div>
            </div>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#1FA855",
                color: "#FBF8F1",
                fontWeight: 700,
                fontSize: 14,
                padding: "14px 24px",
                borderRadius: 3,
                width: "fit-content",
                marginTop: 6,
              }}
            >
              WhatsApp Quick Order →
            </a>
          </div>
        </div>
        <div style={{ background: "#FBF8F1", borderRadius: 6, padding: "38px 36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input placeholder="Your name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input placeholder="you@company.com" style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>Variety</label>
              <select style={inputStyle}>
                <option>74110</option>
                <option>74158</option>
                <option>74140</option>
                <option>74112</option>
                <option>74165</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Volume</label>
              <input placeholder="e.g. 2 containers" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Destination</label>
            <input placeholder="Port / country" style={inputStyle} />
          </div>
          <div style={{ marginBottom: 22 }}>
            <label style={labelStyle}>Details</label>
            <textarea
              rows={3}
              placeholder="Grade, processing, timeline…"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>
          <button
            style={{
              width: "100%",
              background: "#C9A24B",
              color: "#1B2A1E",
              border: "none",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 0.5,
              padding: 16,
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: 12,
  letterSpacing: 0.5,
  color: "#8A7A66",
  textTransform: "uppercase" as const,
  marginBottom: 7,
  fontWeight: 600,
};

const inputStyle = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid #DDD3BF",
  borderRadius: 3,
  background: "#fff",
  fontSize: 14,
  color: "#2A1C11",
};

export default Contact;
