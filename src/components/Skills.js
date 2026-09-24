import React from "react";
import useReveal from "./useReveal";

const GROUPS = [
  {
    title: "Languages & Frontend",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL", "React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "Flask", "MongoDB Atlas", "MySQL", "ChromaDB", "Redis Pub/Sub"],
  },
  {
    title: "AI / GenAI & Cloud",
    items: ["LangChain", "LangGraph", "RAG", "Vector Search", "Groq API", "AWS", "Docker", "CI/CD", "Netlify", "Render"],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <h2>Tools I reach for.</h2>
        </div>
        <div className="skill-groups">
          {GROUPS.map((group) => (
            <div className="skill-card reveal-init" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
