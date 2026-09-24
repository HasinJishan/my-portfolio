import React, { useEffect, useRef } from "react";

const JOBS = [
  {
    active: true,
    date: "Sep 1, 2026 – Present · 3-month internship",
    title: "Java Full Stack Developer Intern",
    org: "Zidio Development",
    bullets: [
      'Building "Keystone," a full stack platform, with a Java/Spring Boot backend and React/Next.js frontend, including secure authentication and REST APIs.',
      "Working within an Agile team to deliver assigned modules end-to-end, from API design through deployment.",
    ],
    stack: ["Java", "Spring Boot", "React/Next.js", "MySQL"],
  },
  {
    date: "Jun 20, 2026 – Sep 20, 2026",
    title: "Full Stack Developer Intern",
    org: "Vulture Lines Tech Management Pvt Ltd",
    bullets: [
      "Shipped 3 core WMS modules — inventory tracking, stock/order management, warehouse workflows — building the full MERN stack end-to-end.",
      "Set up a CI/CD pipeline, reducing manual deployment steps and catching integration issues before merge.",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "CI/CD"],
  },
  {
    date: "Sep 2025 – Nov 2025",
    title: "Angular Developer Intern",
    org: "Infosys Springboard (Internship 6.0 – HireHelper)",
    bullets: [
      'Built "HireHelper," an on-demand task-assistant app, end to end, architecting reusable Angular components and Node.js APIs.',
      "Validated application stability through structured testing, reducing post-deployment bugs flagged during mentor review.",
    ],
    stack: ["Angular", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    date: "Jul 2025 – Aug 2025",
    title: "Web Developer Intern",
    org: "SkillCraft Technology",
    bullets: [
      "Delivered 4 independent web apps (stopwatch, Tic-Tac-Toe with player-vs-computer logic, calculator, profile site) with 100% on-time completion.",
      "Manually tested each app across screen sizes and browsers, catching responsiveness issues before handoff.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default function Experience() {
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (!timelineRef.current || !progressRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const visible = Math.min(Math.max(vh * 0.75 - rect.top, 0), total);
      progressRef.current.style.height = `${(visible / total) * 100}%`;
    };
    document.addEventListener("scroll", update, { passive: true });
    update();
    return () => document.removeEventListener("scroll", update);
  }, []);

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2>Where I've worked.</h2>
        </div>
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line"></div>
          <div className="timeline-progress" ref={progressRef}></div>

          {JOBS.map((job) => (
            <div className={`tl-item${job.active ? " active" : ""}`} key={job.title + job.org}>
              <div className="tl-dot"></div>
              <span className="tl-date">{job.date}</span>
              <h3>{job.title}</h3>
              <div className="org">{job.org}</div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tl-stack">
                {job.stack.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
