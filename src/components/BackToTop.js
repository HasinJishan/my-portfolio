import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(window.scrollY > 500);
    document.addEventListener("scroll", update, { passive: true });
    update();
    return () => document.removeEventListener("scroll", update);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`back-to-top${show ? " show" : ""}`}
      onClick={scrollTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
