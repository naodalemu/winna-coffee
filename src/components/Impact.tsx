// Canopy background: responsive AVIF (full 3:2 frame on desktop, portrait centre slice on
// phones where the section is tall), WebP fallback. Sits under a dark shade, so compressed hard.
import canopy1400 from "../assets/impact/canopy-1400.avif";
import canopy2000 from "../assets/impact/canopy-2000.avif";
import canopy3000 from "../assets/impact/canopy-3000.avif";
import canopyTall600 from "../assets/impact/canopy-tall-600.avif";
import canopyTall900 from "../assets/impact/canopy-tall-900.avif";
import canopyFallback from "../assets/impact/canopy-1400.webp";
import { values } from "../data/content";
import { useParallax } from "../hooks/useParallax";
import { Reveal, Tag } from "./ui";
import "./Impact.css";

function Impact() {
  const media = useParallax<HTMLDivElement>();

  return (
    <section id="impact" className="impact on-dark">
      <div ref={media} className="media parallax impact-media">
        <picture>
          <source
            media="(max-width: 760px)"
            type="image/avif"
            srcSet={`${canopyTall600} 600w, ${canopyTall900} 900w`}
            sizes="100vw"
          />
          <source
            type="image/avif"
            srcSet={`${canopy1400} 1400w, ${canopy2000} 2000w, ${canopy3000} 3000w`}
            sizes="100vw"
          />
          <img
            src={canopyFallback}
            alt="Native shade trees over the coffee farm"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="impact-shade" />

      <div className="container impact-inner">
        <div className="impact-head">
          <Tag index="S.08" label="Our impact" center />
          <Reveal as="h2" className="display-l">
            Agriculture <em>that cares</em>
          </Reveal>
          <Reveal as="p" className="impact-lede" delay={120}>
            Growing organic coffee the right way - for biodiversity, for the community, and for
            better beans.
          </Reveal>
        </div>

        <div className="impact-values">
          {values.map((v, i) => (
            <Reveal key={v.n} className="impact-value" delay={i * 100}>
              <span className="mono">{v.n}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
