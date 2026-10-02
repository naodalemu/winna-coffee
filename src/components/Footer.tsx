import terracedPhoto from "../assets/terraced.jpg";
import {
  contactEmails,
  contactPhone,
  farmCoordinates,
  officeAddress,
  socials,
} from "../data/content";
import { useParallax } from "../hooks/useParallax";
import Emblem from "./Emblem";
import { Arrow } from "./ui";
import "./Footer.css";

const bandLinks = [
  { href: "#coffee", label: "Varieties" },
  { href: "#origins", label: "The Farm" },
  { href: "#process", label: "Process" },
  { href: "#impact", label: "Impact" },
];

const footerLinks = [
  { href: "#about", label: "About us" },
  { href: "#profile", label: "Farm profile" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Request a quote" },
];

function Footer() {
  const band = useParallax<HTMLDivElement>();

  return (
    <footer className="footer">
      <div ref={band} className="footer-band media parallax">
        <img src={terracedPhoto} alt="" loading="lazy" />
        <nav className="footer-band-links label" aria-label="Sections">
          {bandLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container">
        <div className="footer-top">
          <nav className="footer-links label" aria-label="Footer">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#top" className="footer-brand" aria-label="Winna - back to top">
            <Emblem size={72} />
            <span className="footer-wordmark">WINNA</span>
            <span className="footer-sub">Trading PLC · Ethiopia</span>
          </a>

          <ul className="footer-socials label" role="list">
            {socials.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                ) : (
                  <span>{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-mid">
          <address className="footer-address">
            <span>{officeAddress[0]}</span>
            <span>{officeAddress[1]}</span>
            <span className="footer-gap">
              Farm: Keja Kebele, Masha District, Sheka Zone
            </span>
            <span>{farmCoordinates}</span>
            <a className="footer-gap" href={`tel:${contactPhone.replace(/\s/g, "")}`}>
              T. {contactPhone}
            </a>
            {contactEmails.map((e) => (
              <a key={e} href={`mailto:${e}`}>
                {e}
              </a>
            ))}
          </address>

          <a href="#top" className="footer-top-btn" aria-label="Back to top">
            <Arrow dir="up" />
          </a>

          <div className="footer-mid-right mono">
            Single-origin Arabica
            <br />
            Exported green from Ethiopia
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} Winna Trading PLC. All rights reserved.</span>
            <span>Certified Organic</span>
            <span>Single-Origin</span>
            <span>Nibo Sendeka Farm</span>
          </div>
          <span className="footer-credit">Ethiopia's finest beans to the world</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
