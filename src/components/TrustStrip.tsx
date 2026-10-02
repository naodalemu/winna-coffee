import { trust } from "../data/content";
import "./TrustStrip.css";

function TrustStrip() {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...trust, ...trust];

  return (
    <div className="ticker" aria-label={trust.join(", ")}>
      <div className="ticker-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy}>
            {items.map((t, i) => (
              <span key={`${copy}-${i}`} className="ticker-item label">
                {t}
                <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true">
                  <path d="M5 0l1.2 3.8L10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z" fill="currentColor" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustStrip;
