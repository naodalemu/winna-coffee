import { heroImage, farmCoordinates } from "../data/content";
import { useParallax } from "../hooks/useParallax";
import { useReveal } from "../hooks/useReveal";
import { Arrow, RiseText } from "./ui";
import "./Hero.css";

function Hero() {
  const media = useParallax<HTMLDivElement>();
  const { ref, visible } = useReveal<HTMLElement>(0);

  return (
    <section ref={ref} id="top" className={`hero${visible ? " is-visible" : ""}`}>
      <div ref={media} className="hero-media">
        <img src={heroImage.img} alt="Coffee-covered hills of the Sheka Zone highlands" />
      </div>
      <div className="hero-shade" />

      <div className="hero-content container">
        <div className="hero-meta mono">
          <span>From the Nibo Sendeka farm</span>
          <span>{farmCoordinates} - 1,705–1,880 m</span>
        </div>

        <h1 className="display-xl hero-title">
          <RiseText text="Ethiopia's finest" start={250} step={90} />
          <br />
          <em>
            <RiseText text="organic coffee." start={430} step={90} />
          </em>
        </h1>

        <div className="hero-foot">
          <p className="hero-lede">
            Single-origin, shade-grown Arabica - grown and processed on our own farm in the Sheka
            Zone of Southwest Ethiopia, exported green to roasters worldwide.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-light btn-solid label">
              Request a quote
            </a>
            <a href="#coffee" className="btn btn-light label">
              Explore varieties
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll mono" aria-label="Scroll to content">
        <span>Scroll</span>
        <Arrow dir="down" />
      </a>
    </section>
  );
}

export default Hero;
