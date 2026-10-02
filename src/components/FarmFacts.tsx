import { farmFacts, type FarmFact } from "../data/content";
import { Reveal, RevealImage, Tag } from "./ui";
import "./FarmFacts.css";

function FarmFacts() {
  return (
    <section id="origins" className="facts">
      <div className="container">
        <div className="facts-intro">
          <Tag index="S.04" label="The farm" />
          <Reveal as="h2" className="display-l facts-title">
            Inside <em>Nibo Sendeka</em>
          </Reveal>
          <Reveal as="p" className="lede facts-lede" delay={120}>
            101.54 hectares in the Sheka Zone highlands - the altitude, climate and soil that
            shape every bean.
          </Reveal>
        </div>

        <div className="facts-rows">
          {farmFacts.map((f, i) => (
            <FactRow key={f.slot} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FactRow({ f, index }: { f: FarmFact; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article className={`fact${flipped ? " fact-flip" : ""}`}>
      <RevealImage src={f.img} alt={f.name} className="fact-img" />
      <Reveal className="fact-text" delay={150}>
        <span className="mono fact-index">
          {String(index + 1).padStart(2, "0")} - {f.region}
        </span>
        <h3 className="heading-sans">{f.name}</h3>
        <p className="lede">{f.notes}</p>
      </Reveal>
    </article>
  );
}

export default FarmFacts;
