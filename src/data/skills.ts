import { FaJava, FaLeaf, FaShieldAlt, FaDatabase, FaDocker, FaAws, FaJenkins, FaServer, FaStream, FaVuejs, FaVial, FaUserShield, FaCloud, FaCubes, FaReact } from 'react-icons/fa';
import { Skill } from '../types/Skill';

export const SKILLS: Skill[] = [
  // Backend Core
  {
    name: 'Java 17',
    icon: FaJava,
  },
  {
    name: 'Spring Boot',
    icon: FaLeaf,
  },
  {
    name: 'Spring Security',
    icon: FaShieldAlt,
  },
  {
    name: 'Hibernate',
    icon: FaDatabase,
  },
  {
    name: 'PostgreSQL',
    icon: FaServer,
  },
  {
    name: 'REST APIs',
    icon: FaCloud,
  },
  {
    name: 'Microservices',
    icon: FaCubes,
  },

  // Infra & DevOps
  {
    name: 'Docker',
    icon: FaDocker,
  },
  {
    name: 'AWS',
    icon: FaAws,
  },
  {
    name: 'Jenkins',
    icon: FaJenkins,
  },

  // Messaging / Asynchronous
  {
    name: 'Kafka',
    icon: FaStream,
  },

  // Frontend
  {
    name: 'React',
    icon: FaReact,
  },

  // Testing
  {
    name: 'JUnit/Mockito',
    icon: FaVial,
  },

  // Security/Compliance
  {
    name: 'OWASP Compliance',
    icon: FaUserShield,
  },
];
