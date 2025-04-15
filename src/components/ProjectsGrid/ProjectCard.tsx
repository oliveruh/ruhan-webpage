import { Project } from '../../types/Project';
import styles from './ProjectsGrid.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}></div>
      <div className={styles.projectContent}>
        <h4 className={styles.projectTitle}>{project.title}</h4>
        <p className={styles.projectDescription}>
          {project.description}
        </p>
        <div className={styles.techTags}>
          {project.badges.map((badge, index) => (
            <span key={index} className={styles.tag}>
              <img src={badge} alt={project.techStack[index]} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;