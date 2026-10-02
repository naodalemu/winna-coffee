import { aboutImage } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { Arrow, Reveal, RevealImage, RiseText, Tag } from "./ui";
import "./About.css";

function About() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>(0.3);

  return (
    <section id="about" className="about">
      <div className="container">
        <div ref={headRef} className={`about-head${headVisible ? " is-visible" : ""}`}>
          <span className="about-line" aria-hidden="true" />
          <Tag index="S.01" label="Who we are" center />
          <h2 className="display-l about-title">
            <RiseText text="A single-origin farm," start={200} />
            <br />
            <em>
              <RiseText text="from soil to shipment." start={440} />
            </em>
          </h2>
        </div>

        <Reveal className="about-copy" delay={200}>
          <p className="lede">
            Winna Trading PLC exports high-quality Ethiopian coffee, organic and specialty beans
            sourced directly from our own Nibo Sendeka farm in the Sheka Zone of Southwest
            Ethiopia.
          </p>
          <a href="#origins" className="link-line label">
            Discover the farm <Arrow />
          </a>
        </Reveal>

        <div className="about-gallery">
          <RevealImage src={aboutImage.img} alt="Ripe coffee cherries in an open palm" className="about-img-main" />
          <Reveal className="about-note" delay={150}>
            <span className="mono">Fig. 01 - Harvest</span>
            <p>
              Cherries are picked selectively by hand, block by block, across 12 mapped plots on the
              Nibo Sendeka hillsides.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
