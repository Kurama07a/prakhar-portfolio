import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      
      {/* Temporary placeholder sections for navigation testing */}
      <section id="skills" className="min-h-screen bg-gradient-to-b from-space-dark/90 via-charcoal/85 to-slate-deep/90 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-space text-4xl font-bold text-ivory mb-4">Skills</h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>
      
      <section id="beyond" className="min-h-screen bg-gradient-to-b from-slate-deep/90 via-gold-accent/10 to-amber-glow/15 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-space text-4xl font-bold text-ivory mb-4">Beyond Code</h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen bg-gradient-to-b from-amber-glow/15 to-copper/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-space text-4xl font-bold text-ivory mb-4">Contact</h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
