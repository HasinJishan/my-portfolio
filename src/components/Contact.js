import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:hasinjishan17@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'hasinjishan17@gmail.com', href: 'mailto:hasinjishan17@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 9884467799', href: 'tel:+919884467799' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Dindigul, Tamil Nadu', href: '#' },
  ];

  return (
    <section style={styles.contact} id="contact">
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.tag}>Contact</span>
          <h2 style={styles.heading}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={styles.subHeading}>
            Have a project in mind? Let's bring it to life!
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.info}>
            <h3 style={styles.infoTitle}>Get in Touch</h3>
            <p style={styles.infoText}>
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out!
            </p>
            <div style={styles.infoList}>
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} style={styles.infoItem}>
                  <span style={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <div style={styles.infoLabel}>{item.label}</div>
                    <div style={styles.infoValue}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={styles.social}>
              <a href="https://github.com/HasinJishan" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/hasinjishan" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>
            <button type="submit" style={styles.button}>
              <FaPaperPlane style={styles.buttonIcon} />
              Send Message
            </button>
            {isSubmitted && (
              <div style={styles.success}>
                ✨ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
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
    gridTemplateColumns: '1fr 1.5fr',
    gap: '4rem',
    alignItems: 'start',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  infoTitle: {
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: '600',
  },
  infoText: {
    color: '#b0b0d0',
    lineHeight: '1.8',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  infoIcon: {
    fontSize: '1.5rem',
    color: '#6c63ff',
  },
  infoLabel: {
    color: '#8888aa',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  infoValue: {
    color: 'white',
    fontSize: '1rem',
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
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    color: '#b0b0d0',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  input: {
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  textarea: {
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  button: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #6c63ff, #00d2ff)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(108, 99, 255, 0.3)',
  },
  buttonIcon: {
    fontSize: '1rem',
  },
  success: {
    padding: '1rem',
    background: 'rgba(0, 210, 255, 0.1)',
    border: '1px solid rgba(0, 210, 255, 0.3)',
    borderRadius: '12px',
    color: '#00d2ff',
    textAlign: 'center',
  },
};

export default Contact;