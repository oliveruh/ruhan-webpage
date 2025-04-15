import { Experience } from '../../types/Experience';
import ExperienceItem from './ExperienceItem';
import styles from './ExperienceTimeline.module.css';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <ul className={styles.experienceList}>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </ul>
  );
};

export default ExperienceTimeline;