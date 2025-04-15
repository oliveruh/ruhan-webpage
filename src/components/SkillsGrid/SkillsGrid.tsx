import { SKILLS } from '../../data/skills';
import styles from './SkillsGrid.module.css';

const SkillsGrid = () => {
  return (
    <div className={styles.skillsSection}>
      <h3 className="section-title">Technical Arsenal</h3>
      <div className={styles.skillsGrid}>
        {SKILLS.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.skillIcon}>
              <skill.icon />
            </div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;