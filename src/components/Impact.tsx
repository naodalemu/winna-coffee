import { impactImage, values } from "../data/content";
import { useParallax } from "../hooks/useParallax";
import { Reveal, Tag } from "./ui";
import "./Impact.css";

function Impact() {
  const media = useParallax<HTMLDivElement>();

  return (
    <section id="impact" className="impact on-dark">
      <div ref={media} className="media parallax impact-media">
        <img src={impactImage.img} alt="Native shade trees over the coffee farm" loading="lazy" />
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
