import ImageWithCredit from "./ImageWithCredit";
import { heroImage } from "../data/content";

function Hero() {
  return (
    <div id="top" style={{ position: "relative", height: 660, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <ImageWithCredit {...heroImage} alt="Nibo Sendeka farm highlands" />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(20,38,25,0.55) 0%,rgba(20,38,25,0.35) 45%,rgba(20,38,25,0.82) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 40px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#C9A24B",
            fontWeight: 700,
            marginBottom: 22,
            animation: "fadeUp .8s ease both",
          }}
        >
          From the Nibo Sendeka Farm · Sheka Zone, Ethiopia
        </div>
        <h1
          className="hero-title"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 600,
            fontSize: 66,
            lineHeight: 1.08,
            color: "#FBF8F1",
            margin: "0 0 22px",
            animation: "fadeUp .9s ease .1s both",
          }}
        >
          Ethiopia's Finest
          <br />
          Organic Coffee Beans.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "#E3DCCB",
            maxWidth: 640,
            margin: "0 0 34px",
            fontWeight: 300,
            animation: "fadeUp 1s ease .2s both",
          }}
        >
          Ethiopia's finest beans to the world — high-quality organic and specialty coffee, grown
          and processed on our own Nibo Sendeka farm in Southwest Ethiopia.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            pointerEvents: "auto",
            animation: "fadeUp 1.1s ease .3s both",
          }}
        >
          <a
            href="#contact"
            style={{
              background: "#C9A24B",
              color: "#1B2A1E",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 0.5,
              padding: "16px 30px",
              borderRadius: 2,
            }}
          >
            Request a Quote
          </a>
          <a
            href="#coffee"
            style={{
              background: "rgba(246,241,231,0.1)",
              border: "1px solid rgba(246,241,231,0.5)",
              color: "#FBF8F1",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 0.5,
              padding: "16px 30px",
              borderRadius: 2,
              backdropFilter: "blur(4px)",
            }}
          >
            Explore Our Coffee
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
