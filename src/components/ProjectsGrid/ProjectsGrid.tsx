import { FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectsGrid.module.css';

const ProjectsGrid = () => {
  return (
    <div className={styles.projectsSection}>
      <h3 className="section-title">Key Projects</h3>
      <div className={styles.projectsGrid}>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <a href="/cv" className={styles.portfolioLink} data-umami-event="click-cv" target="_blank" rel="noopener noreferrer">
        View CV (external link)
        <span className={styles.iconSpacer}>
          <FaExternalLinkAlt className={styles.portfolioIcon} />
        </span>
      </a>
    </div>
  );
};

export default ProjectsGrid;