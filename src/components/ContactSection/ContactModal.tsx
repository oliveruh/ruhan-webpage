import { useState, FormEvent } from 'react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // TODO: API endpoint to send the email
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <h2 className={styles.modalTitle}>Get in Touch</h2>
        <p className={styles.modalSubtitle}>I'd love to hear from you and discuss any project you have in mind. Send me a message!</p>
        
        {isSent ? (
          <div className={styles.successMessage}>
            <i className="fas fa-check-circle"></i>
            <p>Message sent successfully! I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="What would you like to discuss?"
                className={styles.formTextarea}
              />
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;