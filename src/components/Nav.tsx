import { useEffect, useState, type CSSProperties } from "react";
import { contactEmails, contactPhone, farmCoordinates, navLinks } from "../data/content";
import { lenis } from "../lib/smoothScroll";
import "./Nav.css";

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    lenis?.stop();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav${solid ? " nav-solid" : ""}${open ? " nav-open" : ""}`}>
        <div className="nav-inner">
          <nav className="nav-quick label" aria-label="Quick links">
            <a href="#coffee">Coffee</a>
            <span aria-hidden="true">|</span>
            <a href="#origins">Farm</a>
            <span aria-hidden="true">|</span>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#top" className="nav-brand" onClick={close}>
            <span className="nav-wordmark">WINNA</span>
            <span className="nav-sub">Nibo Sendeka · Ethiopia</span>
          </a>

          <div className="nav-right">
            <a href="#contact" className="nav-enquire label">
              Enquire
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* data-lenis-prevent: Lenis is stopped while the menu is open and would otherwise
          swallow wheel events, so let the menu scroll natively */}
      <div
        id="site-menu"
        className={`menu${open ? " menu-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
        data-lenis-prevent
      >
        <div className="menu-inner container">
          <ol className="menu-links">
            {navLinks.map((l, i) => (
              <li key={l.href} style={{ "--i": i } as CSSProperties}>
                <a href={l.href} onClick={close}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="menu-link-text">{l.label}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className="menu-aside">
            <div>
              <div className="mono menu-aside-label">Write to us</div>
              {contactEmails.map((e) => (
                <a key={e} href={`mailto:${e}`}>
                  {e}
                </a>
              ))}
            </div>
            <div>
              <div className="mono menu-aside-label">Call</div>
              <a href={`tel:${contactPhone.replace(/\s/g, "")}`}>{contactPhone}</a>
            </div>
            <div>
              <div className="mono menu-aside-label">The farm</div>
              <span>Keja Kebele, Masha District</span>
              <span>Sheka Zone - {farmCoordinates}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
