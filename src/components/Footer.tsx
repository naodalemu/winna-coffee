import { contactEmails, contactPhone, socials } from "../data/content";

function Footer() {
  return (
    <div style={{ background: "#0F1D14", padding: "70px 44px 34px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="grid-4"
          style={{
            gap: 44,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(201,162,75,0.18)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 27,
                fontWeight: 700,
                letterSpacing: 5,
                color: "#F6F1E7",
              }}
            >
              WINNA
            </div>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#C9A24B", textTransform: "uppercase", margin: "4px 0 18px" }}>
              Ethiopia's Finest Organic Coffee
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#8FA093", margin: "0 0 20px", maxWidth: 320 }}>
              Ethiopia's finest beans to the world — high-quality organic and specialty coffee
              from the Nibo Sendeka farm.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <div
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 3,
                    border: "1px solid rgba(201,162,75,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#C9A24B",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: "#C9A24B", fontWeight: 700, marginBottom: 18 }}>
              Quick Links
            </div>
            <a href="#about" style={footerLinkStyle}>About Us</a>
            <a href="#origins" style={footerLinkStyle}>The Farm</a>
            <a href="#impact" style={footerLinkStyle}>Our Impact</a>
            <a href="#contact" style={footerLinkStyle}>Contact</a>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: "#C9A24B", fontWeight: 700, marginBottom: 18 }}>
              Coffee
            </div>
            <a href="#coffee" style={footerLinkStyle}>Varieties</a>
            <a href="#origins" style={footerLinkStyle}>Nibo Sendeka Farm</a>
            <a href="#process" style={footerLinkStyle}>Processing</a>
            <a href="#certifications" style={footerLinkStyle}>Certifications</a>
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: "#C9A24B", fontWeight: 700, marginBottom: 18 }}>
              Contact
            </div>
            <div style={{ fontSize: 14, color: "#B9C7BC", lineHeight: 1.7, marginBottom: 14 }}>
              Bole, Welelay Building, 4th Floor
              <br />
              Addis Ababa, Ethiopia
            </div>
            <div style={{ fontSize: 14, color: "#B9C7BC", lineHeight: 1.7 }}>
              {contactEmails.map((email) => (
                <div key={email}>{email}</div>
              ))}
              {contactPhone}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 26,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 12, color: "#6B7B6E" }}>© Winna Trading PLC. All Rights Reserved.</div>
          <div style={{ display: "flex", gap: 22, fontSize: 12, color: "#8FA093" }}>
            <span>Certified Organic</span>
            <span>Single-Origin</span>
            <span>Nibo Sendeka Farm</span>
            <span style={{ fontStyle: "italic", color: "#6B7B6E" }}>More — expecting data</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const footerLinkStyle = {
  display: "block",
  fontSize: 14,
  color: "#B9C7BC",
  marginBottom: 12,
};

export default Footer;
