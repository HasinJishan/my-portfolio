import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'AI Interview Coach',
      description: 'AI-powered interview preparation platform with user registration, AI-generated mock interviews, resume ATS analysis, and coding practice with real-time feedback',
      tech: ['React', 'Flask', 'MongoDB Atlas', 'Cloudinary', 'Groq API', 'Netlify'],
      github: 'https://github.com/HasinJishan',
      live: '#',
      image: '🚀',
      color: '#6c63ff'
    },
    {
      title: 'HireHelper',
      description: 'On-demand task assistance platform with booking-request and task-status UI modules built with Angular component-based architecture',
      tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs'],
      github: 'https://github.com/HasinJishan',
      live: '#',
      image: '💼',
      color: '#00d2ff'
    }
  ];

  return (
    <section style={styles.projects} id="projects">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>Portfolio</span>
          <h2 style={styles.heading}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={styles.subHeading}>
            Building innovative solutions that make a difference
          </p>
        </div>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardImage}>
                <span style={styles.emoji}>{project.image}</span>
                <div style={{...styles.cardOverlay, background: `${project.color}40`}}>
                  <div style={styles.overlayContent}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.overlayLink}>
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={styles.overlayLink}>
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                <div style={styles.tech}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} style={{...styles.techTag, borderColor: project.color}}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{...styles.link, color: project.color}}>
                    <FaCode /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{...styles.link, color: project.color}}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  projects: {
    padding: '100px 0',
    background: '#0a0a1a',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5%',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  tag: {
    display: 'inline-block',
    padding: '6px 20px',
    background: 'rgba(108, 99, 255, 0.15)',
    border: '1px solid rgba(108, 99, 255, 0.3)',
    borderRadius: '50px',
    color: '#a29bfe',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '0.5rem',
  },
  subHeading: {
    fontSize: '1.1rem',
    color: '#8888aa',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  cardImage: {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.02)',
    position: 'relative',
    overflow: 'hidden',
  },
  emoji: {
    fontSize: '4rem',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'all 0.3s ease',
  },
  overlayContent: {
    display: 'flex',
    gap: '1.5rem',
  },
  overlayLink: {
    width: '50px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  cardContent: {
    padding: '1.5rem',
  },
  title: {
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#b0b0d0',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  tech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  techTag: {
    padding: '4px 12px',
    border: '1px solid',
    borderRadius: '50px',
    fontSize: '0.8rem',
    color: '#b0b0d0',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
  },
};

export default Projects;