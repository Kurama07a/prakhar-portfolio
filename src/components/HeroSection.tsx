import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Starfield Background */}
      <div className="stars absolute inset-0 opacity-50"></div>
      
      {/* Sophisticated dark overlay with ivory gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-dark/45 via-charcoal/80 to-slate-deep/100"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-space-dark/60 via-transparent to-space-dark/60"></div>
      
      {/* Subtle warm glow for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gold-accent/5"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="font-space text-6xl md:text-8xl font-bold mb-6 text-ivory drop-shadow-2xl">
          Hey, I'm{' '}
          <span className="bg-gradient-to-r from-gold-accent to-amber-glow bg-clip-text text-transparent">
            Prakhar
          </span>
        </h1>
        
        {/* Subtext */}
        <p className="font-inter text-xl md:text-2xl mb-12 text-text-secondary leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
          I build things for fun, sometimes break them to learn how they work, 
          and often get lost staring at the stars or replaying the same playlist on loop.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-gold-accent to-amber-glow rounded-full font-space font-semibold text-lg text-space-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-accent/40 drop-shadow-lg"
          >
            <span className="flex items-center gap-2">
              View My Work
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <a
            href="/resume.pdf"
            download
            className="group px-8 py-4 border-2 border-gold-accent text-gold-accent rounded-full font-space font-semibold text-lg transition-all duration-300 hover:bg-gold-accent hover:text-space-dark hover:scale-105 backdrop-blur-sm bg-charcoal/40 drop-shadow-lg"
          >
            <span className="flex items-center gap-2">
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </span>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-text-muted drop-shadow-md" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
