import React from "react";
import useReveal from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <h2>Full stack engineering, applied to real AI products.</h2>
        </div>
        <div className="about-grid">
          <div className="reveal-init">
            <p>
              <strong>I build complete products, not demos.</strong> Across
              React/Next.js, Node.js, and Python, I take features from
              database schema to deployed UI — most recently a live
              Warehouse Management System handling inventory, orders, and
              workflows.
            </p>
            <p>
              On the side, I've shipped three GenAI/RAG systems solo: a PDF
              knowledge-base chatbot with LangGraph orchestration, an
              LLM-powered interview coach, and the tooling in between. I use
              AI coding tools deliberately inside my workflow — then test
              and debug the output with the same rigor as hand-written code.
            </p>
            <p>
              I'm AWS-certified, Google Generative AI Foundations trained,
              and currently working as a{" "}
              <strong>Java Full Stack Developer Intern at Zidio Development</strong>,
              building a platform called Keystone.
            </p>
          </div>
          <div className="fact-list reveal-init">
            <div>
              <strong>Based in</strong>
              <span>Dindigul, Tamil Nadu, India</span>
            </div>
            <div>
              <strong>Studying</strong>
              <span>B.Tech Information Technology, SSM Institute of Engineering &amp; Technology</span>
            </div>
            <div>
              <strong>Currently</strong>
              <span>Java Full Stack Developer Intern @ Zidio Development</span>
            </div>
            <div>
              <strong>Focus areas</strong>
              <span>Full stack web apps · RAG &amp; LLM applications · Cloud deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
