import { useState } from 'react';
import styles from './Header.module.css';
import ContactModal from '../ContactSection/ContactModal';
import selfie from '../../assets/img/me.jpeg';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className={styles.profile}>
        <div className={styles.profileImage}>
          <img src={selfie} alt="Ruhan Monte" />
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>Ruhan Monte</h1>
          <h2 className={styles.title}>Software Engineering Consultant</h2>
          <p className={styles.tagline}>
            Software Engineer with 4+ years of experience delivering secure, scalable
            solutions in fintech, insurance, and e-commerce. Skilled in backend development (Java, Spring
            Boot), security (OWASP), CI/CD, and full-stack frameworks like Angular and React. Focused on
            building high-impact, business-driven tech.
          </p>
          <div className={styles.actionButtons}>
            <button onClick={openModal} className={styles.actionBtn}>
              Get in Touch
            </button>
            <a href="https://calendly.com/herlisson-ruh/papo" className={styles.calendlyBtn} target="_blank" rel="noopener noreferrer">
              <i className="far fa-calendar-alt"></i> Schedule a Meeting
            </a>
          </div>
        </div>
      </header>
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;