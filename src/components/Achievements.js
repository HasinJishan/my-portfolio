import React from 'react';
import { FaTrophy, FaAward, FaCertificate, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaCertificate />,
      title: 'AWS Cloud Computing Internship',
      description: 'NASSCOM FutureSkills Prime & SmartBridge (Jan-Mar 2026)',
      color: '#ff9900'
    },
    {
      icon: <FaAward />,
      title: 'AWS Solutions Certification',
      description: 'AWS & Simplilearn SkillUp (Jul 2026)',
      color: '#6c63ff'
    },
    {
      icon: <FaStar />,
      title: '3 Industry Internships',
      description: 'Full stack and cloud development experience',
      color: '#00d2ff'
    },
    {
      icon: <FaTrophy />,
      title: 'CEO Recognition',
      description: 'Reference letter from Vulture Lines Tech',
      color: '#ff6b6b'
    }
  ];

  return (
    <section style={styles.achievements} id="achievements">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>Achievements</span>
          <h2 style={styles.heading}>
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <p style={styles.subHeading}>
            Recognitions that showcase my dedication and expertise
          </p>
        </div>

        <div style={styles.grid}>
          {achievements.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={{...styles.icon, color: item.color, background: `${item.color}20`}}>
                {item.icon}
              </div>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  achievements: {
    padding: '100px 0',
    background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 100%)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  icon: {
    fontSize: '2.5rem',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
  },
  title: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#b0b0d0',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
};

export default Achievements;