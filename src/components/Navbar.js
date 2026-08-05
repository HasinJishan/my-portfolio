import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav style={{
      ...styles.nav,
      ...(scrolled ? styles.scrolled : {})
    }}>
      <div style={styles.container}>
        <a href="#home" style={styles.logo}>
          <span style={styles.logoIcon}>HJ</span>
          <span style={styles.logoText}>Hasin.</span>
        </a>

        <div style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span style={{...styles.bar, ...(isOpen ? styles.barActive : {})}}></span>
          <span style={{...styles.bar, ...(isOpen ? styles.barActive : {})}}></span>
          <span style={{...styles.bar, ...(isOpen ? styles.barActive : {})}}></span>
        </div>

        <ul style={{
          ...styles.navLinks,
          ...(isOpen ? styles.navLinksActive : {})
        }}>
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                style={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '20px 0',
    transition: 'all 0.3s ease',
    background: 'rgba(10, 10, 26, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  scrolled: {
    padding: '10px 0',
    background: 'rgba(10, 10, 26, 0.95)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    color: 'white',
  },
  logoIcon: {
    width: '45px',
    height: '45px',
    background: 'linear-gradient(135deg, #6c63ff, #00d2ff)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #6c63ff, #00d2ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    alignItems: 'center',
  },
  navLinksActive: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '80px',
    left: 0,
    right: 0,
    background: 'rgba(10, 10, 26, 0.98)',
    padding: '2rem',
    gap: '1.5rem',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  navLink: {
    color: '#b0b0d0',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    gap: '5px',
  },
  bar: {
    width: '28px',
    height: '2px',
    background: 'white',
    transition: 'all 0.3s ease',
  },
  barActive: {
    background: '#6c63ff',
  },
};

// Add responsive styles
const responsiveStyles = `
  @media (max-width: 768px) {
    .hamburger {
      display: flex !important;
    }
  }
`;

export default Navbar;