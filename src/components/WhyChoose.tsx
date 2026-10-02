import { whyChoose } from "../data/content";
import { Reveal, Tag } from "./ui";
import "./WhyChoose.css";

const NUMERALS = ["i.", "ii.", "iii.", "iv.", "v.", "vi."];

function WhyChoose() {
  return (
    <section className="why">
      <div className="container">
        <div className="why-head">
          <Tag index="S.07" label="Why Winna" center />
          <Reveal as="h2" className="display-m why-title">
            What sets our <em>coffee apart</em>
          </Reveal>
        </div>
        <div className="why-grid">
          {whyChoose.map((w, i) => (
            <Reveal key={w.num} className="why-item" delay={i * 100}>
              <span className="why-num">{NUMERALS[i] ?? w.num}</span>
              <h3 className="why-item-title">{w.title}</h3>
              <p className="lede">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
