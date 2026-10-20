import { contactEmails, contactPhone, officeAddress, varieties, whatsappHref } from "../data/content";
import { Arrow, Reveal, Tag } from "./ui";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-left">
          <Tag index="S.09" label="Request a quote" />
          <Reveal as="h2" className="display-l contact-title">
            Tell us your grade, volume <em>&amp; destination.</em>
          </Reveal>
          <Reveal as="p" className="lede contact-lede" delay={100}>
            Share the specifics and our team will respond with pricing, samples and lead times.
          </Reveal>

          <Reveal as="dl" className="contact-details" delay={180}>
            <div>
              <dt className="mono">Phone</dt>
              <dd>
                <a href={`tel:${contactPhone.replace(/\s/g, "")}`}>{contactPhone}</a>
              </dd>
            </div>
            <div>
              <dt className="mono">Email</dt>
              <dd>
                {contactEmails.map((email) => (
                  <a key={email} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="mono">Office</dt>
              <dd>{officeAddress.join(", ")}</dd>
            </div>
          </Reveal>

          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="link-line label contact-wa">
            WhatsApp quick order <Arrow />
          </a>
        </div>

        <Reveal as="form" className="contact-form" delay={120}>
          <div className="field-row">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="field-row">
            <label className="field">
              <span className="mono">Variety</span>
              <select name="variety" defaultValue="">
                <option value="" disabled>
                  Select a variety
                </option>
                {varieties.map((v) => (
                  <option key={v.slot}>{v.name.replace(/^Variety\s+/i, "")}</option>
                ))}
              </select>
            </label>
            <Field label="Volume" name="volume" placeholder="e.g. 2 containers" />
          </div>
          <Field label="Destination" name="destination" placeholder="Port / country" />
          <label className="field">
            <span className="mono">Details</span>
            <textarea name="details" rows={3} placeholder="Grade, processing, timeline…" />
          </label>
          <button type="button" className="btn btn-solid label contact-submit">
            Send enquiry <Arrow />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="field">
      <span className="mono">{label}</span>
      <input name={name} type={type} placeholder={placeholder} />
    </label>
  );
}

export default Contact;
