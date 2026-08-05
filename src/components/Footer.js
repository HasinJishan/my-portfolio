import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.brand}>
            <span style={styles.logo}>HJ</span>
            <p style={styles.copy}>
              © {currentYear} Hasin Jishan M. All rights reserved.
            </p>
          </div>
          
          <div style={styles.social}>
            <a href="https://github.com/HasinJishan" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/hasinjishan" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaLinkedin />
            </a>
            <a href="mailto:hasinjishan17@gmail.com" style={styles.socialLink}>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 0',
    background: '#0a0a1a',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5%',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  logo: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #6c63ff, #00d2ff)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: 'white',
  },
  copy: {
    color: '#8888aa',
    fontSize: '0.9rem',
    margin: 0,
  },
  social: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    width: '40px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b0b0d0',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Footer;