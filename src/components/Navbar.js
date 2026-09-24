import React, { useEffect, useState } from "react";

const SECTIONS = ["about", "skills", "experience", "projects", "achievements", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const close = () => setOpen(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="wrap nav-row">
        <a href="#top" className="brand" onClick={close}>
          HJ<em>.</em>M
        </a>
        <div className={`nav-links${open ? " open" : ""}`}>
          {SECTIONS.slice(0, -1).map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={close}
              className={active === id ? "active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>Contact</a>
        </div>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
