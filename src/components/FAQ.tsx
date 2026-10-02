import { useState } from "react";
import { faqs } from "../data/content";
import { Reveal, Tag } from "./ui";
import "./FAQ.css";

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="container faq-inner">
        <div className="faq-head">
          <Tag index="S.11" label="FAQ" />
          <Reveal as="h2" className="display-m">
            Questions <em>buyers ask</em>
          </Reveal>
        </div>

        <div className="faq-list">
          {faqs.length > 0 ? (
            faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                  <div className="faq-answer">
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="faq-item faq-empty">
              <span className="mono">Frequently asked questions - expecting data</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
