import { useEffect } from 'react';
import styles from './CurriculumRedirect.module.css';
import { FaArrowRight } from 'react-icons/fa';

const CvRedirect = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href =
        'https://drive.google.com/file/d/1444Y33EhZ9iKQsv2ifMEGNOCr5RwCl_z/view?usp=drive_link';
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Redirecting to my resume</h1>
      <p className={styles.subtitle}>
        If you are not redirected automatically,{' '}
        <a
          href="https://drive.google.com/file/d/1444Y33EhZ9iKQsv2ifMEGNOCr5RwCl_z/view?usp=drive_link"
          className={styles.link}
        >
          click here
        </a>
      </p>
      <FaArrowRight className={styles.icon} />
    </div>
  );
};

export default CvRedirect;
