import { useState } from 'react';
import styles from './Header.module.css';
import ContactModal from '../ContactModal/ContactModal';
import { HEADER } from '../../data/header';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className={styles.profile}>
        <div className={styles.profileImage}>
          <img src={HEADER.mainImage} alt={HEADER.mainName} />
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{HEADER.mainName}</h1>
          <h2 className={styles.title}>{HEADER.mainTitle}</h2>
          <p className={styles.tagline}>
            {HEADER.mainBio}
          </p>
          <div className={styles.actionButtons}>
            <button onClick={openModal} className={styles.actionBtn} data-umami-event="click-open-contact-modal"> 
              {HEADER.firstButtonText}
            </button>
            <a href="https://calendar.app.google/99yey4sNeFUYR7ii8" className={styles.calendlyBtn} data-umami-event="click-schedule-meeting-header" target="_blank" rel="noopener noreferrer">
              <i className="far fa-calendar-alt"></i> {HEADER.secondButtonText}
            </a>
          </div>
        </div>
      </header>
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;