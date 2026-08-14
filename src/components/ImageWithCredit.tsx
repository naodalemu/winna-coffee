import type { CSSProperties } from "react";
import type { Credited } from "../data/content";

interface ImageWithCreditProps extends Credited {
  alt?: string;
  style?: CSSProperties;
  imgStyle?: CSSProperties;
}

function ImageWithCredit({
  img,
  credit,
  creditHref,
  alt = "",
  style,
  imgStyle,
}: ImageWithCreditProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
      <img
        src={img}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          ...imgStyle,
        }}
      />
      <a
        href={creditHref}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          left: 6,
          bottom: 6,
          maxWidth: "calc(100% - 12px)",
          padding: "3px 7px",
          borderRadius: 5,
          background: "rgba(0,0,0,.55)",
          color: "#fff",
          font: "10px/1.2 system-ui,-apple-system,sans-serif",
          textDecoration: "none",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backdropFilter: "blur(6px)",
        }}
      >
        {credit}
      </a>
    </div>
  );
}

export default ImageWithCredit;
