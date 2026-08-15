import { useEffect, useState } from "react";
import { farmFacts } from "../data/content";

type MenuKey = "products" | "origins" | null;

const navLinkStyle = { color: "#EAE3D4", fontSize: 14, fontWeight: 500 };
const enquireStyle = {
  background: "#C9A24B",
  color: "#1B2A1E",
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 0.5,
  padding: "12px 22px",
  borderRadius: 2,
};

function Nav() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(20,38,25,0.98)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(201,162,75,0.22)",
        boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.18)" : "none",
        transition: "box-shadow .25s ease",
      }}
    >
      <div
        onMouseLeave={() => setOpenMenu(null)}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
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
            className="hero-eyebrow"
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

        <div className="nav-links" style={{ flexShrink: 0 }}>
          <a href="#top" style={navLinkStyle}>
            Home
          </a>
          <div
            className="nav-caret"
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
          <a href="#about" style={navLinkStyle}>
            About
          </a>
          <div
            className="nav-caret"
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
          <a href="#process" style={navLinkStyle}>
            Process
          </a>
          <a href="#impact" style={navLinkStyle}>
            Impact
          </a>
          <a href="#contact" style={navLinkStyle}>
            Contact
          </a>
          <a href="#contact" className="btn-gold" style={enquireStyle}>
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            width: 40,
            height: 40,
            background: "transparent",
            border: "1px solid rgba(201,162,75,0.4)",
            borderRadius: 3,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: 18,
              height: 1.5,
              background: "#EAE3D4",
              transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              transition: "transform .2s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: 18,
              height: 1.5,
              background: "#EAE3D4",
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity .2s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: 18,
              height: 1.5,
              background: "#EAE3D4",
              transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              transition: "transform .2s ease",
            }}
          />
        </button>

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
              animation: "fadeIn .2s ease both",
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
              animation: "fadeIn .2s ease both",
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

      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: 78,
            left: 0,
            right: 0,
            background: "#14261A",
            borderTop: "1px solid rgba(201,162,75,0.22)",
            boxShadow: "0 24px 50px rgba(20,38,25,0.3)",
            display: "flex",
            flexDirection: "column",
            padding: "18px 24px 28px",
            gap: 4,
            animation: "fadeIn .2s ease both",
          }}
        >
          {[
            { href: "#top", label: "Home" },
            { href: "#coffee", label: "Coffee" },
            { href: "#about", label: "About" },
            { href: "#origins", label: "The Farm" },
            { href: "#process", label: "Process" },
            { href: "#impact", label: "Impact" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                ...navLinkStyle,
                padding: "14px 4px",
                borderBottom: "1px solid rgba(201,162,75,0.12)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold"
            onClick={() => setMobileOpen(false)}
            style={{ ...enquireStyle, textAlign: "center", marginTop: 14 }}
          >
            Enquire Now
          </a>
        </div>
      )}
    </div>
  );
}

export default Nav;
