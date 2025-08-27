import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

const StackedHeroAbout: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Start as visible
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Touch handlers for swipe navigation
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  // Intersection Observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05, // Trigger when 5% of the component is visible
        rootMargin: '0px 0px -50px 0px' // Trigger earlier when scrolling
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  // Handle keyboard navigation and scroll prevention
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isVisible) return; // Only handle keys when component is visible
      
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    // Prevent scrolling when hero section is active and component is visible
    const handleWheel = (event: WheelEvent) => {
      if (isVisible && currentSlide === 0) {
        event.preventDefault();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isVisible && currentSlide === 0) {
        event.preventDefault();
      }
    };

    // Prevent body scroll when hero section is active and component is visible
    if (isVisible && currentSlide === 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      // Restore scrolling when component unmounts or becomes invisible
      document.body.style.overflow = 'unset';
    };
  }, [currentSlide, isVisible]);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1: Hero Section */}
        <div className="w-full flex-shrink-0">
          <HeroSection onViewWork={nextSlide} />
        </div>
        
        {/* Slide 2: About Section */}
        <div className="w-full flex-shrink-0">
          <AboutSection onViewProjects={scrollToProjects} />
        </div>
      </div>

      {/* Navigation Arrows - Left and Right - Only visible when component is in view */}
      {/* Left Arrow - Previous Slide */}
      <div className={`fixed left-8 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'
      }`}>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`group p-4 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
            currentSlide === 0
              ? 'bg-charcoal/30 border-text-muted/20 text-text-muted/50 cursor-not-allowed opacity-30'
              : 'bg-charcoal/50 border-gold-accent/30 text-gold-accent hover:bg-gold-accent/20 hover:border-gold-accent/50'
          }`}
          aria-label="Previous slide"
        >
          <svg 
            className="w-6 h-6 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Right Arrow - Next Slide */}
      <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
      }`}>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`group p-4 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${
            currentSlide === totalSlides - 1
              ? 'bg-charcoal/30 border-text-muted/20 text-text-muted/50 cursor-not-allowed opacity-30'
              : 'bg-charcoal/50 border-gold-accent/30 text-gold-accent hover:bg-gold-accent/20 hover:border-gold-accent/50'
          }`}
          aria-label="Next slide"
        >
          <svg 
            className="w-6 h-6 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators - Center Bottom - Always visible when component is in view */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <div className="flex space-x-3 bg-charcoal/70 backdrop-blur-md rounded-full px-6 py-3 border border-gold-accent/20">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentSlide === index
                  ? 'bg-gold-accent shadow-lg shadow-gold-accent/50'
                  : 'bg-text-muted/40 hover:bg-gold-accent/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Keyboard Navigation Hint - Only visible when component is in view */}
      <div className={`fixed bottom-4 right-4 z-40 hidden lg:block transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-charcoal/70 backdrop-blur-md rounded-lg px-3 py-2 border border-gold-accent/20 text-xs text-text-muted">
          Use ← → arrow keys to navigate
        </div>
      </div>
    </div>
  );
};

export default StackedHeroAbout;
