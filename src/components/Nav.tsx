import { useState } from "react";
import { farmFacts } from "../data/content";

type MenuKey = "products" | "origins" | null;

function Nav() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(20,38,25,0.98)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(201,162,75,0.22)",
      }}
    >
      <div
        onMouseLeave={() => setOpenMenu(null)}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          position: "relative",
        }}
      >
        <a href="#top" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 5,
              color: "#F6F1E7",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            WINNA
          </div>
          <div
            style={{
              fontSize: 9,
              letterSpacing: 3,
              color: "#C9A24B",
              textTransform: "uppercase",
              marginTop: 3,
              whiteSpace: "nowrap",
            }}
          >
            Ethiopia's Finest Organic Coffee
          </div>
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          <a href="#top" style={{ color: "#EAE3D4", fontSize: 14, fontWeight: 500 }}>
            Home
          </a>
          <div
            onMouseEnter={() => setOpenMenu("products")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "#EAE3D4",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Coffee <span style={{ fontSize: 9, color: "#C9A24B" }}>▾</span>
          </div>
          <a href="#about" style={{ color: "#EAE3D4", fontSize: 14, fontWeight: 500 }}>
            About
          </a>
          <div
            onMouseEnter={() => setOpenMenu("origins")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "#EAE3D4",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            The Farm <span style={{ fontSize: 9, color: "#C9A24B" }}>▾</span>
          </div>
          <a href="#process" style={{ color: "#EAE3D4", fontSize: 14, fontWeight: 500 }}>
            Process
          </a>
          <a href="#impact" style={{ color: "#EAE3D4", fontSize: 14, fontWeight: 500 }}>
            Impact
          </a>
          <a href="#contact" style={{ color: "#EAE3D4", fontSize: 14, fontWeight: 500 }}>
            Contact
          </a>
          <a
            href="#contact"
            style={{
              background: "#C9A24B",
              color: "#1B2A1E",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.5,
              padding: "12px 22px",
              borderRadius: 2,
            }}
          >
            Enquire Now
          </a>
        </div>

        {openMenu === "products" && (
          <div
            style={{
              position: "absolute",
              top: 78,
              left: 0,
              right: 0,
              background: "#FBF8F1",
              boxShadow: "0 24px 50px rgba(20,38,25,0.18)",
              borderTop: "2px solid #C9A24B",
            }}
          >
            <div
              style={{
                maxWidth: 1280,
                margin: "0 auto",
                padding: "38px 44px",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                gap: 44,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#C9A24B",
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  Coffee Varieties
                </div>
                <a
                  href="#coffee"
                  style={{
                    display: "block",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 19,
                    color: "#2A1C11",
                    marginBottom: 10,
                  }}
                >
                  Variety 74110
                </a>
                <a
                  href="#coffee"
                  style={{
                    display: "block",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 19,
                    color: "#2A1C11",
                    marginBottom: 10,
                  }}
                >
                  Variety 74158
                </a>
                <a
                  href="#coffee"
                  style={{
                    display: "block",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 19,
                    color: "#2A1C11",
                    marginBottom: 10,
                  }}
                >
                  Variety 74140
                </a>
                <a
                  href="#coffee"
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1E3A2B",
                  }}
                >
                  View all 5 varieties →
                </a>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#C9A24B",
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  On-Farm Processing
                </div>
                <a
                  href="#process"
                  style={{ display: "block", fontSize: 14, color: "#4A3B2E", marginBottom: 11 }}
                >
                  Wet Processed
                </a>
                <a
                  href="#process"
                  style={{ display: "block", fontSize: 14, color: "#4A3B2E", marginBottom: 11 }}
                >
                  Dry / Natural
                </a>
                <span
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#A99A85",
                    fontStyle: "italic",
                    marginTop: 6,
                  }}
                >
                  More formats — expecting data
                </span>
              </div>
              <div
                style={{
                  background: "#1E3A2B",
                  borderRadius: 4,
                  padding: 26,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 22,
                    color: "#F6F1E7",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}
                >
                  Single-Origin Nibo Sendeka Farm
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#B9C7BC",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  97.36 ha of organic Arabica across 12 mapped blocks.
                </div>
                <a href="#origins" style={{ color: "#C9A24B", fontSize: 13, fontWeight: 700 }}>
                  Explore the farm →
                </a>
              </div>
            </div>
          </div>
        )}

        {openMenu === "origins" && (
          <div
            style={{
              position: "absolute",
              top: 78,
              left: 0,
              right: 0,
              background: "#FBF8F1",
              boxShadow: "0 24px 50px rgba(20,38,25,0.18)",
              borderTop: "2px solid #C9A24B",
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 44px" }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#C9A24B",
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                Inside Nibo Sendeka
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: "18px 44px",
                }}
              >
                {farmFacts.map((o) => (
                  <a
                    key={o.slot}
                    href="#origins"
                    style={{
                      display: "block",
                      borderBottom: "1px solid #E6DDCB",
                      paddingBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: 20,
                        color: "#2A1C11",
                      }}
                    >
                      {o.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#8A7A66", marginTop: 2 }}>{o.notes}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
