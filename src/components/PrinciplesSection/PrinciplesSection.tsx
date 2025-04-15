import { Principle } from '../../types/Principle';
import styles from './PrinciplesSection.module.css';

interface PrinciplesSectionProps {
  principles: Principle[];
}

const PrinciplesSection = ({ principles }: PrinciplesSectionProps) => {
  return (
    <div className={styles.testimonial}>
      <div className="technical-principles">
        {principles.map((principle, index) => (
          <div key={index} className={styles.principle}>
            <h4 className={styles.principleTitle}>
              <i className={`${principle.icon} ${styles.principleIcon}`}></i> 
              {principle.title}
            </h4>
            <p className={styles.principleText}>{principle.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrinciplesSection;