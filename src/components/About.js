import React from 'react';
import { FaUserGraduate, FaCode, FaBriefcase, FaAws } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUserGraduate />, value: '8.71 CGPA', label: 'B.Tech IT' },
    { icon: <FaCode />, value: '3+', label: 'Internships' },
    { icon: <FaBriefcase />, value: '4', label: 'Projects' },
    { icon: <FaAws />, value: 'AWS', label: 'Certified' },
  ];

  return (
    <section style={styles.about} id="about">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>About Me</span>
          <h2 style={styles.heading}>
            Passionate Developer <span className="gradient-text">&</span> AI Enthusiast
          </h2>
          <p style={styles.subHeading}>
            Building the future with code, one line at a time
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.content}>
            <p style={styles.text}>
              I'm <strong>Hasin Jishan M</strong>, a Full Stack Developer and AI enthusiast 
              from Dindigul, Tamil Nadu. Currently pursuing B.Tech in Information Technology 
              at SSM Institute of Engineering and Technology with an impressive CGPA of 8.71.
            </p>
            <p style={styles.text}>
              With hands-on experience across multiple internships at Infosys, SkillCraft Technology, 
              and Vulture Lines Tech, I've developed expertise in building modern web applications 
              using React, Angular, Node.js, and Python.
            </p>
            <p style={styles.text}>
              I'm AWS-certified and passionate about integrating AI capabilities into web applications, 
              as demonstrated in my AI Interview Coach project that uses LLM APIs for real-time feedback.
            </p>
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <span style={styles.label}>📍 Location</span>
                <span style={styles.value}>Dindigul, Tamil Nadu</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>📧 Email</span>
                <span style={styles.value}>hasinjishan17@gmail.com</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>📱 Phone</span>
                <span style={styles.value}>+91 9884467799</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>🎓 Education</span>
                <span style={styles.value}>B.Tech IT (2027)</span>
              </div>
            </div>
          </div>

          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div style={styles.statIcon}>{stat.icon}</div>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  about: {
    padding: '100px 0',
    background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 100%)',
    position: 'relative',
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
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  text: {
    color: '#b0b0d0',
    lineHeight: '1.8',
    fontSize: '1rem',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginTop: '1rem',
    background: 'rgba(255, 255, 255, 0.03)',
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  label: {
    color: '#8888aa',
    fontSize: '0.8rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  value: {
    color: 'white',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  statIcon: {
    fontSize: '2rem',
    color: '#6c63ff',
    marginBottom: '0.5rem',
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '0.2rem',
  },
  statLabel: {
    color: '#8888aa',
    fontSize: '0.9rem',
  },
};

export default About;