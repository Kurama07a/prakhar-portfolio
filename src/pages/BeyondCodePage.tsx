import React, { useEffect, useRef, useState } from 'react';

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  tracks: { total: number };
}

const BeyondCodePage: React.FC = () => {
  const constellationRef = useRef<HTMLCanvasElement>(null);
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);
  const [isLoadingSpotify, setIsLoadingSpotify] = useState(true);

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

    // Constellation animation (same as About section)
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

  // Spotify API integration
  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Mock data for now - you'll replace this with actual Spotify API calls
        setPlaylists([
          {
            id: '1',
            name: 'Winter Jams',
            description: 'Perfect for those late night coding sessions',
            images: [{ url: '/api/placeholder/300/300' }],
            external_urls: { spotify: 'https://open.spotify.com/playlist/0KJCNPSStjMJe1lzWAfyPL' },
            tracks: { total: 29 }
          },
          {
            id: '2',
            name: 'Riffs and Reflections',
            description: 'Metallica, Slipknot, Linkin Park, and more',
            images: [{ url: '/api/placeholder/300/300' }],
            external_urls: { spotify: 'https://open.spotify.com/playlist/2KHQh1uIl9bhdKs2QpqYDr' },
            tracks: { total: 33 }
          },
          {
            id: '3',
            name: 'Shallow Romanticss',
            description: 'Soft tunes for quiet moments',
            images: [{ url: '/api/placeholder/300/300' }],
            external_urls: { spotify: 'https://open.spotify.com/playlist/28kunYrtYcj5yBz4Fsa9hH' },
            tracks: { total: 19 }
          }
        ]);
        
        setIsLoadingSpotify(false);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
        setIsLoadingSpotify(false);
      }
    };

    fetchSpotifyData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation Bar - Simple version for the page */}
      <nav className="fixed top-0 w-full z-50 bg-space-dark/90 backdrop-blur-md border-b border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="/" 
              className="font-space text-xl font-bold text-ivory hover:text-gold-accent transition-colors"
            >
              Prakhar
            </a>
            <a 
              href="/" 
              className="text-text-secondary hover:text-ivory transition-colors flex items-center space-x-2"
            >
              <span>←</span>
              <span>Back to Portfolio</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Seamless sophisticated dark background - same as About section */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/90 via-charcoal/95 to-graphite/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gold-accent/3 via-transparent to-copper/5"></div>
          
          {/* Constellation Canvas */}
          <canvas
            ref={constellationRef}
            className="absolute inset-0 w-full h-full opacity-60"
          />
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="space-y-20">
              
              {/* Header */}
              <div className="text-center">
                <h1 className="font-space text-6xl md:text-7xl font-bold text-ivory mb-8">
                  Beyond{' '}
                  <span className="bg-gradient-to-r from-gold-accent to-amber-glow bg-clip-text text-transparent">
                    Code
                  </span>
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Because there's more to me than semicolons and curly braces — here's the human side of the equation.
                </p>
              </div>

              {/* Music Section */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* Single music-related image placeholder */}
                    <div className="w-80 h-80 bg-gradient-to-br from-gold-accent/10 to-amber-glow/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-accent/20">
                      <span className="text-8xl text-gold-accent/60">🎶</span>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-accent/30 to-amber-glow/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-copper/30 to-bronze/30 rounded-full blur-lg"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="font-space text-4xl font-bold text-ivory mb-4">My Playlists</h2>
                  <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                    <p>
                      Music is one of the ways I make sense of the world. My playlists shift with my moods — 
                      sometimes it's loud and full of energy (The Strokes, Imagine Dragons, Arctic Monkeys), 
                      and other times it's soft, almost melancholic (Snow Patrol, Kodaline, U2).
                    </p>
                    <p>
                      I like songs that are easy to sing along to, the kind that sound like memories even if you've never lived them. 
                    </p>
                  </div>

                  {/* Spotify Playlists */}
                  {isLoadingSpotify ? (
                    <div className="flex items-center space-x-3 mt-6">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gold-accent"></div>
                      <span className="text-text-secondary">Loading playlists...</span>
                    </div>
                  ) : (
                    <div className="space-y-3 mt-6">
                      {playlists.map((playlist) => (
                        <div key={playlist.id} className="flex items-center space-x-4 group">
                          <div className="w-3 h-3 bg-gold-accent rounded-full"></div>
                          <a
                            href={playlist.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-gold-accent transition-colors group-hover:text-gold-accent"
                          >
                            {playlist.name} <span className="text-text-muted">({playlist.tracks.total} tracks)</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Astrophotography Section */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 lg:order-2">
                  <h2 className="font-space text-4xl font-bold text-ivory mb-4">Astrophotography</h2>
                  <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                    <p>
                      I've always been fascinated by the night sky — the way it makes you feel small and infinite at the same time. 
                      Whenever I get away from city lights, I take my camera along to chase stars, constellations, and sometimes even auroras.
                    </p>
                    <p>
                      Astrophotography for me isn't just about the picture. It's about patience, wonder, and capturing something 
                      fleeting that most people never even stop to notice. The gallery here will have some of my favorite shots — 
                      imperfect, but real.
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-text-muted">
                    <p className="flex items-center"><span className="text-gold-accent mr-2">🔭</span>Canon EOS R6 with 24-70mm f/2.8 lens</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">⏱️</span>30s exposures, lots of patience</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">☕</span>Hot coffee for those cold nights</p>
                  </div>
                </div>
                
                <div className="relative flex justify-center lg:justify-end lg:order-1">
                  <div className="relative">
                    {/* Astrophotography image */}
                    <div className="w-90 h-90 rounded-lg overflow-hidden border border-gold-accent/20 shadow-2xl">
                      <img 
                        src="s2.png" 
                        alt="Starry night sky capture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-gold-accent/30 to-amber-glow/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-copper/30 to-bronze/30 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>

              {/* Friends Section */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* Friends group photo */}
                    <div className="w-90 h-90 rounded-lg overflow-hidden border border-gold-accent/20 shadow-2xl">
                      <img 
                        src="/f1.png" 
                        alt="Friends group - College memories"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-accent/30 to-amber-glow/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-copper/30 to-bronze/30 rounded-full blur-lg"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="font-space text-4xl font-bold text-ivory mb-4">Friends</h2>
                  <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                    <p>
                      I wouldn't be who I am without the people around me. My friends are part of my story: 
                      from endless hostel debates about nothing, to late-night food runs, to helping each other survive deadlines and exams.
                    </p>
                    <p>
                      This section isn't about polished portraits, but about little snapshots of the chaos and laughter 
                      that makes life in college bearable.
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-text-muted">
                    <p className="flex items-center"><span className="text-gold-accent mr-2">🍕</span>2 AM pizza runs during finals week</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">☕</span>Coffee debates that turn into philosophy</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">🎮</span>Weekend gaming tournaments</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">🚶‍♂️</span>Random midnight walks around campus</p>
                  </div>
                </div>
              </div>

              {/* College Life Section */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 lg:order-2">
                  <h2 className="font-space text-4xl font-bold text-ivory mb-4">College Life</h2>
                  <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                    <p>
                      I'm currently at IIITN, and if I had to sum up my college life in one word, it would be <em className="text-gold-accent">chaotic</em>. 
                      Between classes, side projects, hostel responsibilities, and club activities, every day feels like a balancing act.
                    </p>
                    <p>
                      As the Technical Secretary of my hostel body (CRA), I've been running our IT network, mapping out switches and fixing LAN issues at odd hours.
                      As Co-Lead of the CRISPR Club, I helped set up an FTP server for resource sharing and worked on projects like a classroom planner and attendance tracker.
                    </p>
                    <p>
                      College for me has been more than academics — it's been about building things, breaking them, 
                      and finding friends to share the ride with.
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-text-muted">
                    <p className="flex items-center"><span className="text-gold-accent mr-2">🏠</span>Technical Secretary, CRA Hostel Body</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">🧬</span>Co-Lead, CRISPR Club</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">⚡</span>Endless side projects and experiments</p>
                    <p className="flex items-center"><span className="text-gold-accent mr-2">🌙</span>Surviving on 4 hours of sleep</p>
                  </div>
                </div>
                
                <div className="relative flex justify-center lg:justify-end lg:order-1">
                  <div className="relative">
                    {/* Single college life image placeholder */}
                    <div className="w-80 h-80 bg-gradient-to-br from-tech-blue/10 to-electric-teal/10 rounded-lg flex items-center justify-center border border-gold-accent/20">
                      <span className="text-8xl text-gold-accent/60">🎓</span>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-gold-accent/30 to-amber-glow/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-copper/30 to-bronze/30 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeyondCodePage;
