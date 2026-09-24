import React from "react";
import useReveal from "./useReveal";

const ITEMS = [
  {
    title: "Google Cloud Gen AI Academy APAC 2026 – Cohort 3",
    org: "Google Cloud & Hack2skill — hands-on Gen AI with Cloud Run: building, deploying, and orchestrating intelligent agents on Google Cloud.",
    date: "Sep 2026",
  },
  {
    title: "Google Generative AI Foundations & Antigravity Workshop",
    org: "Google for Developers & SmartBridge",
    date: "Jul 2026",
  },
  {
    title: "AWS Cloud Computing Virtual Internship",
    org: "NASSCOM FutureSkills Prime & SmartBridge",
    date: "Jan–Mar 2026",
  },
  {
    title: "Introduction to AWS Solutions",
    org: "AWS & Simplilearn SkillUp",
    date: "Jul 2026",
  },
];

export default function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <h2>Staying current.</h2>
        </div>
        <div className="cert-list reveal-init">
          {ITEMS.map((item) => (
            <div className="cert-row" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.org}</p>
              </div>
              <span className="meta">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
