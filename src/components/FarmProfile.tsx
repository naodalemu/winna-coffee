import { farmProfile } from "../data/content";
import { Arrow, Reveal, RevealImage, Tag } from "./ui";
import "./FarmProfile.css";

function FarmProfile() {
  return (
    <section id="profile" className="profile">
      <div className="container">
        <div className="profile-head">
          <div>
            <Tag index="S.05" label="Farm profile" />
            <Reveal as="h2" className="display-m profile-title">
              Nibo Sendeka, <em>block by block</em>
            </Reveal>
          </div>
          <Reveal as="p" className="lede profile-lede" delay={100}>
            A fully mapped organic coffee farm in Keja Kebele, Masha District - with on-site wet
            and dry processing.
          </Reveal>
        </div>

        <div className="profile-grid">
          {farmProfile.map((p, i) => (
            <article key={p.slot} className="profile-card">
              <RevealImage src={p.img} alt={p.name} className="profile-img" delay={i * 90} parallax={false} />
              <Reveal delay={i * 90 + 120}>
                <h3 className="profile-name">{p.name}</h3>
                <p className="profile-desc">{p.desc}</p>
                <dl className="profile-spec">
                  {p.spec.map((row) => (
                    <div key={row.k}>
                      <dt className="mono">{row.k}</dt>
                      <dd>{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </article>
          ))}
        </div>

        <div className="profile-cta">
          <a href="#contact" className="link-line label">
            Request the full farm report <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FarmProfile;
