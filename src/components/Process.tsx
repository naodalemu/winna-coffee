import type { CSSProperties } from "react";
import { process, type ProcessStep } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function Process() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <div id="process" style={{ background: "#F6F1E7", padding: "120px 44px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div
          ref={intro.ref}
          className={`reveal${intro.visible ? " is-visible" : ""}`}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#C9A24B",
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            Our Process
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 600,
              fontSize: 46,
              lineHeight: 1.12,
              color: "#2A1C11",
              margin: 0,
            }}
          >
            From farm to you
          </h2>
        </div>
        <div>
          {process.map((step, i) => (
            <ProcessRow key={step.n} step={step} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessRow({ step, index }: { step: ProcessStep; index: number }) {
  const row = useReveal<HTMLDivElement>();

  return (
    <div
      ref={row.ref}
      className={`reveal${row.visible ? " is-visible" : ""}`}
      style={{
        "--reveal-delay": `${index * 60}ms`,
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 36,
        padding: "34px 0",
        borderTop: "1px solid #E2D9C6",
        alignItems: "start",
      } as CSSProperties}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 56,
          fontWeight: 500,
          color: "#C9A24B",
          lineHeight: 1,
        }}
      >
        {step.n}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 600,
            fontSize: 27,
            color: "#2A1C11",
            margin: "0 0 10px",
          }}
        >
          {step.title}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#5A4A3B", margin: 0, maxWidth: 640 }}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default Process;
