import React from "react";
import useReveal from "./useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref}>
      <div className="wrap">
        <div className="contact-box reveal-init">
          <h2>Let's build something. Reach out.</h2>
          <div className="contact-links">
            <a href="mailto:hasinjishan17@gmail.com">hasinjishan17@gmail.com</a>
            <a href="tel:+919884467799">+91 98844 67799</a>
            <a href="https://www.linkedin.com/in/hasin-jishan-m-7a530129b" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/hasin-jishan-m
            </a>
            <a href="https://github.com/HasinJishan" target="_blank" rel="noopener noreferrer">
              github.com/HasinJishan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
