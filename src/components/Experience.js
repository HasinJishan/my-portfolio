import React from 'react';
import { FaBriefcase, FaCalendar, FaBuilding } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'Infosys Springboard',
      role: 'Angular Developer Intern',
      period: 'Internship 6.0 - HireHelper',
      description: [
        'Contributed to front-end development of "HireHelper," an on-demand task-assistant application using Angular',
        'Implemented UI features and interface components with component-based architecture',
        'Participated in testing and validation of application functionality'
      ],
      color: '#6c63ff'
    },
    {
      company: 'SkillCraft Technology',
      role: 'Web Developer Intern',
      period: 'Jul 2025 - Aug 2025',
      description: [
        'Built 4 independent web applications including stopwatch, Tic-Tac-Toe game, calculator, and personal profile site',
        'Implemented interactive UI features and game logic with improved usability',
        'Delivered all 4 responsive applications strengthening front-end development skills'
      ],
      color: '#00d2ff'
    },
    {
      company: 'Vulture Lines Tech Management Pvt Ltd',
      role: 'Full Stack Developer Intern',
      period: 'Feb 2025 - Mar 2025',
      description: [
        'Built front-end features using HTML, CSS, and JavaScript with exposure to back-end concepts',
        'Assisted in developing and testing web applications',
        'Recognized with CEO-signed reference letter for strong software engineering fundamentals'
      ],
      color: '#ff6b6b'
    }
  ];

  return (
    <section style={styles.experience} id="experience">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>Experience</span>
          <h2 style={styles.heading}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p style={styles.subHeading}>
            3 internships across full-stack, frontend, and cloud development
          </p>
        </div>

        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={{...styles.timelineLine, background: exp.color}}></div>
              <div style={styles.timelineDot}></div>
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <div>
                    <h3 style={styles.company}>{exp.company}</h3>
                    <h4 style={styles.role}>{exp.role}</h4>
                  </div>
                  <span style={{...styles.period, background: `${exp.color}20`, color: exp.color}}>
                    <FaCalendar style={styles.periodIcon} />
                    {exp.period}
                  </span>
                </div>
                <ul style={styles.list}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} style={styles.listItem}>
                      <span style={{...styles.bullet, background: exp.color}}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  experience: {
    padding: '100px 0',
    background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 100%)',
  },
  container: {
    maxWidth: '1000px',
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
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    position: 'relative',
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '2rem',
  },
  timelineLine: {
    position: 'absolute',
    left: '8px',
    top: '0',
    bottom: '0',
    width: '2px',
    opacity: '0.3',
  },
  timelineDot: {
    position: 'absolute',
    left: '0',
    top: '8px',
    width: '18px',
    height: '18px',
    background: '#6c63ff',
    borderRadius: '50%',
    border: '4px solid #0a0a1a',
    boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '2rem',
    transition: 'all 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  company: {
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '0.3rem',
  },
  role: {
    color: '#b0b0d0',
    fontSize: '1rem',
    fontWeight: '400',
  },
  period: {
    padding: '4px 16px',
    borderRadius: '50px',
    fontSize: '0.85rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  periodIcon: {
    fontSize: '0.8rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    color: '#b0b0d0',
    padding: '0.5rem 0',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  bullet: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    marginTop: '8px',
    flexShrink: 0,
  },
};

export default Experience;