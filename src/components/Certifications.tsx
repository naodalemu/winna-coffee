import { certifications } from "../data/content";
import { Reveal, Tag } from "./ui";
import "./Certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certs">
      <div className="container certs-inner">
        <div className="certs-head">
          <Tag index="S.09" label="Certifications" />
          <Reveal as="h2" className="display-m">
            Certified organic, <em>grown responsibly</em>
          </Reveal>
          <Reveal as="p" className="lede" delay={100}>
            Our beans are certified organic. Additional certifications and awards will be listed
            here.
          </Reveal>
        </div>

        <ul className="certs-list">
          {certifications.map((c, i) => {
            const pending = /expecting data/i.test(c.label);
            return (
              <Reveal as="li" key={`${c.label}-${i}`} delay={i * 70} className={pending ? "is-pending" : ""}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="certs-label">{c.label}</span>
                <span className="mono certs-status">{pending ? "Pending" : "Verified"}</span>
              </Reveal>
            );
          })}
          <Reveal as="li" delay={certifications.length * 70} className="is-pending">
            <span className="mono">-</span>
            <span className="certs-label">Awards &amp; recognition - expecting data</span>
            <span className="mono certs-status">Pending</span>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
