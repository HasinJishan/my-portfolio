import React from 'react';
import { 
  FaPython, FaJava, FaJs, FaReact, FaAngular, FaNodeJs, 
  FaDocker, FaAws, FaGitAlt, FaDatabase, FaCloud, FaCog 
} from 'react-icons/fa';
import { SiFlask, SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Fundamentals',
      icon: <FaCog />,
      skills: [
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'C', icon: <FaCog />, color: '#A8B9CC' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
        { name: 'HTML5', icon: <FaCog />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCog />, color: '#1572B6' },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'Flask', icon: <SiFlask />, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
      ]
    },
    {
      title: 'Cloud, DevOps & AI',
      icon: <FaCloud />,
      skills: [
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'LLM API', icon: <FaCog />, color: '#6c63ff' },
      ]
    }
  ];

  return (
    <section style={styles.skills} id="skills">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>My Skills</span>
          <h2 style={styles.heading}>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p style={styles.subHeading}>
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div style={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>{category.icon}</div>
                <h3 style={styles.cardTitle}>{category.title}</h3>
              </div>
              <div style={styles.skillList}>
                {category.skills.map((skill, idx) => (
                  <div key={idx} style={styles.skillItem}>
                    <span style={{...styles.skillIcon, color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  skills: {
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
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
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  cardIcon: {
    fontSize: '1.8rem',
    color: '#6c63ff',
  },
  cardTitle: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '6px 16px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  skillIcon: {
    fontSize: '1.2rem',
  },
  skillName: {
    color: '#b0b0d0',
    fontSize: '0.9rem',
  },
};

export default Skills;