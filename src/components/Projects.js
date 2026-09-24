import React from "react";
import useReveal from "./useReveal";

const PROJECTS = [
  {
    name: "AI PDF Knowledge Base Chatbot",
    github: "https://github.com/HasinJishan/pdf-knowledge-chatbot",
    demo: "https://drive.google.com/file/d/14kRu3Q6yF61p9GHxe8MLR83fZSopKXRU/view?usp=sharing",
    demoLabel: "▶",
    desc: "A microservice-based RAG chatbot that answers questions from uploaded PDFs — chunking, embeddings, and vector search with ChromaDB, orchestrated through a LangGraph workflow for retrieval, generation, and follow-ups.",
    stack: ["Next.js", "FastAPI", "LangGraph", "ChromaDB", "Redis"],
  },
  {
    name: "AI Interview Coach",
    github: "https://github.com/HasinJishan/AI-Interview-Coach",
    demo: "https://interviewcoach-ai.netlify.app/",
    demoLabel: "↗",
    desc: "An AI-powered interview prep platform with mock interviews, resume ATS analysis, and real-time coding feedback, using Groq's LLM API to generate questions and score answers live.",
    stack: ["React", "Flask", "MongoDB Atlas", "Groq API"],
  },
  {
    name: "StockFlow — Warehouse Management System",
    github: "https://github.com/HasinJishan/stockflow-wms",
    demo: "https://stockflow-wms.netlify.app/",
    demoLabel: "↗",
    desc: "A production warehouse platform covering inventory tracking, stock/order management, and warehouse workflows — full MERN stack, shipped as part of my Vulture Lines internship with a CI/CD pipeline behind it.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    name: "Keystone",
    github: "https://github.com/HasinJishan/keystone",
    demo: "https://keystone-theta-six.vercel.app/login",
    demoLabel: "↗",
    desc: "A full stack platform in active development at Zidio Development — Java/Spring Boot backend, React/Next.js frontend, secure authentication and REST APIs, built as a Java Full Stack Developer Intern.",
    stack: ["Java", "Spring Boot", "React/Next.js", "MySQL"],
  },
];

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-3px)`;
}
function resetTilt(e) {
  e.currentTarget.style.transform = "";
}

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <h2>Things I've built end-to-end.</h2>
          <p>Solo-shipped products — code, deploys, and demos all included.</p>
        </div>
        <div className="project-grid">
          {PROJECTS.map((p) => (
            <div
              className="proj-card reveal-init"
              key={p.name}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="proj-top">
                <h3>{p.name}</h3>
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">⌘</a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">{p.demoLabel}</a>
                </div>
              </div>
              <p className="desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map((s) => (
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
