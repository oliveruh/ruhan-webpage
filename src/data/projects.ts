import { Project } from '../types/Project';

export const PROJECTS: Project[] = [
  {
    title: 'Fintech Payment Gateway',
    description: 'Developed PIX/boleto payment solutions with third-party bank integrations and compliance with Brazilian Central Bank regulations.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL'],
    badges: [
      'https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white',
      'https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white',
      'https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white',
    ],
  },
  {
    title: 'Insurance Security Platform',
    description: 'Designed OWASP-compliant APIs and authentication systems for Brazil\'s largest insurance providers.',
    techStack: ['Java', 'Spring Security', 'OWASP'],
    badges: [
      'https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white',
      'https://img.shields.io/badge/Spring_Security-6DB33F?style=flat&logo=springsecurity&logoColor=white',
      'https://img.shields.io/badge/OWASP-000000?style=flat&logo=owasp&logoColor=white',
    ],
  },
  {
    title: 'E-commerce Platform Migration',
    description: 'Led monolithic to microservices migration with CI/CD implementation and database optimization.',
    techStack: ['Docker', 'Jenkins', 'MySQL'],
    badges: [
      'https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white',
      'https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white',
      'https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white',
    ],
  },
];