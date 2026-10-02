/** Winna monogram: a coffee bean inside a ring. */
function Emblem({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="0.6" />
      <ellipse
        cx="32"
        cy="32"
        rx="11.5"
        ry="17"
        transform="rotate(28 32 32)"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M40 17.4c-6.8 4.4-4.2 10.8-8 14.6s-10.6 2.6-12 14.6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Emblem;
