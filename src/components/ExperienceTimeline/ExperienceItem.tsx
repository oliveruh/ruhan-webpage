import { Experience } from '../../types/Experience';
import styles from './ExperienceItem.module.css';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <li className={styles.experienceItem}>
      <div className={styles.experienceDate}>{experience.date}</div>
      <div className={styles.experienceRole}>{experience.role}</div>
      <div className={styles.experienceCompany}>{experience.company}</div>
      <div>{experience.description}</div>
    </li>
  );
};

export default ExperienceItem;