import { useEffect, useState } from "react";
import { whatsappHref } from "../data/content";
import "./WhatsAppFloat.css";

function WhatsAppFloat() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      // Stay out of the way of the pinned varieties panel and the footer.
      const coffee = document.querySelector(".varieties-pinned")?.getBoundingClientRect();
      const inCoffee = !!coffee && coffee.top <= 0 && coffee.bottom >= vh;
      const footerTop = document.querySelector("footer")?.getBoundingClientRect().top ?? Infinity;
      setShown(window.scrollY > vh * 0.8 && !inCoffee && footerTop > vh - 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`float${shown ? " is-shown" : ""}`}>
      <a href="#contact" className="float-pill label">
        Request a quote
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          <circle cx="8" cy="2" r="1.4" fill="currentColor" />
          <circle cx="2" cy="8" r="1.4" fill="currentColor" />
          <circle cx="8" cy="8" r="1.4" fill="currentColor" />
        </svg>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="float-wa"
        aria-label="Order on WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2z" />
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppFloat;
