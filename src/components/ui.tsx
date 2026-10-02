import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { useParallax } from "../hooks/useParallax";

export function Tag({ index, label, center = false }: { index: string; label: string; center?: boolean }) {
  return (
    <div className={`tag${center ? " tag-center" : ""}`}>
      <span>{index}</span>
      <span>{label}</span>
    </div>
  );
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  id,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  id?: string;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}${visible ? " is-visible" : ""}`}
      style={{ "--delay": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Splits text into words that rise out of a mask when the parent becomes visible. */
export function RiseText({ text, step = 60, start = 0 }: { text: string; step?: number; start?: number }) {
  return (
    <>
      {text.split(" ").map((word, i, all) => (
        <span key={i}>
          <span className="rise">
            <span style={{ "--delay": `${start + i * step}ms` } as CSSProperties}>{word}</span>
          </span>
          {i < all.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}

/** Image that unmasks on reveal and drifts with scroll. */
export function RevealImage({
  src,
  alt,
  className = "",
  style,
  delay = 0,
  parallax = true,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  parallax?: boolean;
  eager?: boolean;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  const pRef = useParallax<HTMLDivElement>();
  return (
    <div
      ref={(el) => {
        ref.current = el;
        pRef.current = el;
      }}
      className={`media reveal-clip${parallax ? " parallax" : ""} ${className}${visible ? " is-visible" : ""}`}
      style={{ "--delay": `${delay}ms`, ...style } as CSSProperties}
    >
      <img src={src} alt={alt} loading={eager ? undefined : "lazy"} />
    </div>
  );
}

export function Arrow({ dir = "right" }: { dir?: "right" | "up" | "down" }) {
  const rotate = dir === "up" ? -90 : dir === "down" ? 90 : 0;
  return (
    <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <path d="M0 5h12.5M8.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
