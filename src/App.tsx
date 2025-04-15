import { useEffect } from 'react';
import './styles/global.css';
import Header from './components/Header/Header';
import SkillsGrid from './components/SkillsGrid/SkillsGrid';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import ExperienceTimeline from './components/ExperienceTimeline/ExperienceTimeline';
import ContactSection from './components/ContactSection/ContactSection';
import PrinciplesSection from './components/PrinciplesSection/PrinciplesSection';
import { EXPERIENCES } from './data/experiences';
import { PRINCIPLES } from './data/principles';

const App = () => {
  useEffect(() => {
    document.title = 'Ruhan Monte | Software Engineering Consultant';
  }, []);

  return (
    <>
      {/* Background Elements */}
      <div className="bg-element bg-1"></div>
      <div className="bg-element bg-2"></div>
      <div className="bg-element bg-3"></div>

      <div className="container">
        <div className="card">
          {/* Profile Section */}
          <Header />

          {/* Skills Section */}
          <section className="skills-section">
            <SkillsGrid />
          </section>

          {/* Projects Section */}
          <section className="projects-section">
            <ProjectsGrid />

          </section>

          {/* Bottom Section: Experience & Contact */}
          <div className="bottom-section">
            <div className="experience-section">
              <ExperienceTimeline experiences={EXPERIENCES} />
            </div>

            <div className="contact-section">
              <h3 className="section-title">Connect</h3>
              <ContactSection />

              <PrinciplesSection principles={PRINCIPLES} />
            </div>
          </div>

          <div className="footer">
            <p>&copy; {new Date().getFullYear()} Ruhan Monte. Available for projects worldwide. <a href="https://calendly.com/herlisson-ruh/papo" style={{ color: 'var(--accent)' }} target="_blank" rel="noopener noreferrer">Schedule a meeting!</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;