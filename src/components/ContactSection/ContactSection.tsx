import styles from './ContactSection.module.css';

const ContactSection = () => {
  const contactLinks = [
    {
      href: "mailto:ruhan@veramonte.org",
      icon: "fas fa-envelope",
      text: "ruhan@veramonte.org"
    },
    {
      href: "tel:+5581981696333",
      icon: "fas fa-phone",
      text: "+55 (81) 9 8169-6333"
    },
    {
      href: "https://github.com/oliveruh",
      icon: "fab fa-github",
      text: "GitHub"
    },
    {
      href: "https://linkedin.com/in/ruhan-herlisson",
      icon: "fab fa-linkedin",
      text: "LinkedIn"
    }
  ];

  return (
    <div>
      <h3 className="section-title">Connect</h3>
      <div className={styles.contactLinks}>
        {contactLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className={styles.contactLink}
            target={link.href.startsWith('http') ? "_blank" : undefined}
            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            <span className={styles.contactIcon}>
              <i className={link.icon}></i>
            </span>
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;