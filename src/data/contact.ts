import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ContactLink } from '../types/ContactLink';

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: FaEnvelope,
    text: 'ruhan@veramonte.org',
    href: 'mailto:ruhan@veramonte.org',
  },
  {
    icon: FaPhone,
    text: '+55 (81) 9 8169-6333',
    href: 'tel:+5581981696333',
  },
  {
    icon: FaGithub,
    text: 'GitHub',
    href: 'https://github.com/oliveruh',
  },
  {
    icon: FaLinkedin,
    text: 'LinkedIn',
    href: 'https://linkedin.com/in/ruhan-herlisson',
  },
];