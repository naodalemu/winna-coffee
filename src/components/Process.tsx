import { process } from "../data/content";
import { Reveal, Tag } from "./ui";
import "./Process.css";

function Process() {
  return (
    <section id="process" className="process section-dark">
      <div className="container">
        <div className="process-head">
          <Tag index="S.06" label="Our process" />
          <Reveal as="h2" className="display-l">
            From farm <em>to you</em>
          </Reveal>
        </div>

        <ol className="process-list">
          {process.map((step, i) => (
            <Reveal as="li" key={step.n} className="process-row" delay={i * 70}>
              <span className="mono process-n">{step.n}</span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
