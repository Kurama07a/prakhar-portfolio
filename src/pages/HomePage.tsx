import React from 'react';
import Navigation from '../components/Navigation';
import StackedHeroAbout from '../components/StackedHeroAbout';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <StackedHeroAbout />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
