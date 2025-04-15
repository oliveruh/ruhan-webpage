import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
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
      
      <a href="https://drive.google.com/file/d/1444Y33EhZ9iKQsv2ifMEGNOCr5RwCl_z/view?usp=sharing" className={styles.portfolioLink} target="_blank" rel="noopener noreferrer">
        <FaBriefcase className={styles.portfolioIcon} />
        Check out my complete CV
        <FaExternalLinkAlt className={styles.portfolioIcon} />
      </a>
    </div>
  );
};

export default ProjectsGrid;