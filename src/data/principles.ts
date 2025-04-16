import { FaCode, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import { Principle } from '../types/Principle';

export const PRINCIPLES: Principle[] = [
  {
    title: 'Security-Centric Approach',
    text: '"Building systems with OWASP compliance as a core requirement, not an afterthought."',
    icon: FaShieldAlt
  },
  {
    title: 'Code Quality Focus',
    text: '"Prioritizing SOLID principles and clean architecture for sustainable systems."',
    icon: FaCode,
  },
  {
    title: 'Scalability Mindset',
    text: '"Designing systems that can (and will) scale under increasing loads."',
    icon: FaTachometerAlt,
  },
];