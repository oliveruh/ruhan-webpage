import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ContactModal.module.css';
import { CONTACT_DATA } from '../../data/contact_data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// TODO: Modal close button is not accessible on mobile devices
const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Validate environment variables (consider using .env files)
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      if (!captchaRef.current) {
        throw new Error('reCAPTCHA not initialized');
      }

      // Execute reCAPTCHA
      const token = await captchaRef.current.executeAsync();
      if (!token) {
        throw new Error('Failed reCAPTCHA challenge');
      }

      // Prepare template parameters
      const templateParams = {
        name,
        email,
        message
      };

      // Send email through EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Reset form and state
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
      formRef.current?.reset();

      // Close modal after delay
      setTimeout(() => {
        setIsSent(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Submission error:', err);
      alert(`Failed to send message: ${(err as Error).message}`);
    } finally {
      captchaRef.current?.reset();
      setIsSending(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <h2 className={styles.modalTitle}>{CONTACT_DATA.componentTitle}</h2>
        <p className={styles.modalSubtitle}>
          {CONTACT_DATA.componentSubtitle}
        </p>

        {isSent ? (
          <div className={styles.successMessage}>
            <i className="fas fa-check-circle"></i>
            <p>{CONTACT_DATA.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} ref={formRef} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{CONTACT_DATA.nameLabel}</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder={CONTACT_DATA.namePlaceholder}
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{CONTACT_DATA.emailLabel}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={CONTACT_DATA.emailPlaceholder}
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{CONTACT_DATA.messageLabel}</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder={CONTACT_DATA.messagePlaceholder}
                className={styles.formTextarea}
              />
            </div>

            <ReCAPTCHA
              sitekey={recaptchaSiteKey}
              ref={captchaRef}
              size="invisible"
              badge="inline"
              hl={navigator.language}
              onErrored={() => {
                console.error('reCAPTCHA Error - check your network connection and site key');
                captchaRef.current?.reset();
              }}
              onExpired={() => {
                captchaRef.current?.reset();
              }}
              key={isOpen ? 'active' : 'inactive'} // Force re-initialization
            />

            <div className={styles.recaptchaNotice}>
              This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
              <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSending}
              data-umami-event="click-send-contact-message"
            >
              {isSending ? CONTACT_DATA.sendingMessage : CONTACT_DATA.sentMessage}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;