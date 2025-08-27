import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const constellationRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = constellationRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Constellation animation
    const stars: { x: number; y: number; opacity: number; speed: number }[] = [];
    const numStars = 50;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.01
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach((star, index) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${star.opacity})`;
        ctx.fill();

        // Update opacity for twinkling effect
        star.opacity += star.speed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.speed *= -1;
        }

        // Draw connections to nearby stars
        stars.slice(index + 1).forEach(otherStar => {
          const distance = Math.sqrt(
            Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(255, 140, 0, ${0.3 - (distance / 300)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Seamless sophisticated dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/90 via-charcoal/95 to-graphite/90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gold-accent/3 via-transparent to-copper/5"></div>
      
      {/* Constellation Canvas */}
      <canvas
        ref={constellationRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative" style={{ right: '120px' , bottom: '50px' }}>
              {/* Image without container - let PNG blend naturally */}
              <img
            src="/prakhar.png"
            alt="Prakhar"
            className="w-[37.25rem] h-[37.25rem] object-contain filter drop-shadow-2xl"
            style={{
              background: 'transparent',
              mixBlendMode: 'normal'
            }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-accent/30 to-amber-glow/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-copper/30 to-bronze/30 rounded-full blur-lg"></div>
             
            </div>
          </div>
          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-space text-5xl md:text-6xl font-bold text-ivory mb-8">
                About{' '}
                <span className="bg-gradient-to-r from-gold-accent to-amber-glow bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                <p>
                  Hey, I'm Prakhar. I'm a developer who enjoys turning messy, everyday problems into systems that actually make life easier. Over the past few years, I've worked on projects ranging from college-wide print scheduling systems to network mapping tools for hostels to experiments like a multiplayer space shooter game.
                </p>
                
                <p>
                  Outside of code, I live on curiosity as much as caffeine. I love music that's easy to sing along to bands like Linkin Park, Metallica, Train, The Police are my constant background noise. Astronomy has been a quiet obsession forever; I can spend hours staring at the sky or reading about strange cosmic events.
                </p>
                
                <p>
                  I'm not going to pretend I'm consistent with the gym or reading, but I'm learning to push myself bit by bit whether it's a farmer's walk until my grip burns, or finishing a short surreal story that makes me feel small in the best way.
                </p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-xl bg-charcoal/50 backdrop-blur-sm border border-gold-accent/20 hover:border-gold-accent/40 transition-all">
                <div className="text-3xl font-bold text-gold-accent mb-2">15+</div>
                <div className="text-text-muted">Projects Built</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-charcoal/50 backdrop-blur-sm border border-amber-glow/20 hover:border-amber-glow/40 transition-all">
                <div className="text-3xl font-bold text-amber-glow mb-2">3+</div>
                <div className="text-text-muted">Years Coding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
