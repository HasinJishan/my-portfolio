import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section style={styles.hero} id="home">
      <div style={styles.background}>
        <div style={styles.glow1}></div>
        <div style={styles.glow2}></div>
        <div style={styles.glow3}></div>
      </div>
      
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.badge}>
            <span style={styles.badgeDot}></span>
            Available for Opportunities
          </div>
          
          <h1 style={styles.name}>
            Hasin Jishan M
          </h1>
          
          <h2 style={styles.title}>
            <span style={styles.typewriter}>Full Stack Developer</span>
            <span style={styles.typewriterCursor}>|</span>
          </h2>
          
          <p style={styles.subtitle}>
            Building scalable web applications with React, Angular, and Python • AWS Certified
          </p>
          
          <div style={styles.buttons}>
            <a href="#projects" style={styles.btnPrimary}>
              View My Work
              <span style={styles.btnArrow}>→</span>
            </a>
            <a href="#contact" style={styles.btnSecondary}>
              Let's Talk
            </a>
          </div>
          
          <div style={styles.social}>
            <a href="https://github.com/HasinJishan" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/hasinjishan" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:hasinjishan17@gmail.com" style={styles.socialLink}>
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div style={styles.illustration}>
          <div style={styles.codeBlock}>
            <div style={styles.codeLine}>
              <span style={styles.codePurple}>const</span>
              <span style={styles.codeBlue}> developer</span>
              <span style={styles.codeWhite}>=</span>
              <span style={styles.codeYellow}> HasinJishan</span>
            </div>
            <div style={styles.codeLine}>
              <span style={styles.codePurple}>const</span>
              <span style={styles.codeBlue}> skills</span>
              <span style={styles.codeWhite}>=</span>
              <span style={styles.codeGreen}>[</span>
            </div>
            <div style={styles.codeLine}>
              <span style={styles.codeGreen}>  React</span>
              <span style={styles.codeWhite}>,</span>
              <span style={styles.codeGreen}> Angular</span>
              <span style={styles.codeWhite}>,</span>
              <span style={styles.codeGreen}> Python</span>
            </div>
            <div style={styles.codeLine}>
              <span style={styles.codeGreen}>  AWS</span>
              <span style={styles.codeWhite}>,</span>
              <span style={styles.codeGreen}> Node.js</span>
              <span style={styles.codeWhite}>,</span>
              <span style={styles.codeGreen}> MongoDB</span>
            </div>
            <div style={styles.codeLine}>
              <span style={styles.codeGreen}>]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 50%, #0a0a1a 100%)',
    paddingTop: '80px',
  },
  background: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
  },
  glow1: {
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(108, 99, 255, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite',
  },
  glow2: {
    position: 'absolute',
    bottom: '-20%',
    left: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(0, 210, 255, 0.2) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 10s ease-in-out infinite reverse',
  },
  glow3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(108, 99, 255, 0.05) 0%, transparent 70%)',
    borderRadius: '50%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 20px',
    background: 'rgba(108, 99, 255, 0.15)',
    border: '1px solid rgba(108, 99, 255, 0.3)',
    borderRadius: '50px',
    fontSize: '0.9rem',
    color: '#a29bfe',
    width: 'fit-content',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    background: '#00d2ff',
    borderRadius: '50%',
    animation: 'pulse 2s ease-in-out infinite',
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: '800',
    lineHeight: '1.2',
    background: 'linear-gradient(135deg, #ffffff 0%, #a29bfe 50%, #00d2ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#b0b0d0',
  },
  typewriter: {
    color: '#6c63ff',
  },
  typewriterCursor: {
    color: '#6c63ff',
    animation: 'pulse 1s step-end infinite',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#8888aa',
    maxWidth: '500px',
    lineHeight: '1.8',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    padding: '14px 35px',
    background: 'linear-gradient(135deg, #6c63ff, #00d2ff)',
    borderRadius: '50px',
    color: 'white',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(108, 99, 255, 0.3)',
  },
  btnArrow: {
    transition: 'transform 0.3s ease',
    display: 'inline-block',
  },
  btnSecondary: {
    padding: '14px 35px',
    background: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50px',
    color: 'white',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  social: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  socialLink: {
    width: '50px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  illustration: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeBlock: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '2rem',
    fontFamily: 'monospace',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '450px',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  codeLine: {
    padding: '4px 0',
  },
  codePurple: { color: '#a29bfe' },
  codeBlue: { color: '#6c63ff' },
  codeWhite: { color: '#ffffff' },
  codeYellow: { color: '#ffa502' },
  codeGreen: { color: '#00d2ff' },
};

export default Hero;