import React, { useEffect, useRef, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "GenAI / RAG Engineer",
  "Java Full Stack Developer @ Zidio",
];

const STATS = [
  { value: 4, suffix: "", label: "Internships (incl. current)" },
  { value: 3, suffix: "", label: "Solo GenAI/RAG products" },
  { value: 8.75, suffix: "", label: "CGPA", decimals: 2 },
  { value: 2027, suffix: "", label: "Graduating" },
];

function useCountUp(target, decimals, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) { setValue(target); return; }
    const duration = 1100;
    const startTime = performance.now();
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return decimals ? value.toFixed(decimals) : Math.round(value);
}

function Stat({ stat, start }) {
  const display = useCountUp(stat.value, stat.decimals, start);
  return (
    <div>
      <strong>{display}{stat.suffix}</strong>
      <span>{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [statsVisible, setStatsVisible] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) { setTyped(ROLES[0]); return; }
    let roleIndex = 0, charIndex = 0, deleting = false, timeoutId;

    const tick = () => {
      const full = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        setTyped(full.slice(0, charIndex));
        if (charIndex === full.length) { deleting = true; timeoutId = setTimeout(tick, 1400); return; }
      } else {
        charIndex--;
        setTyped(full.slice(0, charIndex));
        if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % ROLES.length; }
      }
      timeoutId = setTimeout(tick, deleting ? 35 : 60);
    };
    timeoutId = setTimeout(tick, 60);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const els = heroRef.current.querySelectorAll(".reveal-init");
    els.forEach((el, i) => setTimeout(() => el.classList.add("shown"), 90 * i));
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setStatsVisible(true); }),
      { threshold: 0.4 }
    );
    if (statsRef.current) io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-blob b1"></div>
      <div className="hero-blob b2"></div>
      <div className="wrap">
        <div className="eyebrow-line reveal-init">
          <span className="dot"></span>
          <span>{typed}</span>
          <span className="cursor"></span>
        </div>
        <h1 className="reveal-init">Hasin Jishan M</h1>
        <p className="lede reveal-init">
          Full stack developer who ships production features fast — and
          builds GenAI/RAG systems solo on the side. Currently a Java Full
          Stack Developer Intern at Zidio Development, final-year B.Tech
          student graduating 2027.
        </p>
        <div className="hero-actions reveal-init">
          <a className="btn btn-primary" href="#projects">See my work</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
        <div className="hero-stats reveal-init" ref={statsRef}>
          {STATS.map((s) => (
            <Stat stat={s} start={statsVisible} key={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
