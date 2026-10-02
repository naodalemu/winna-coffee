import { testimonials } from "../data/content";
import { Reveal, Tag } from "./ui";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="quotes">
      <div className="container quotes-inner">
        <Tag index="S.10" label="What buyers say" center />
        {testimonials.length > 0 ? (
          testimonials.map((t, i) => (
            <Reveal as="figure" key={i} className="quote" delay={i * 100}>
              <blockquote className="display-m">“{t.quote}”</blockquote>
              <figcaption className="mono">
                {t.name} - {t.company}
              </figcaption>
            </Reveal>
          ))
        ) : (
          <Reveal as="figure" className="quote">
            <blockquote className="display-m">
              “Trusted by roasters <em>worldwide.</em>”
            </blockquote>
            <figcaption className="mono quote-pending">Customer testimonials - expecting data</figcaption>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
