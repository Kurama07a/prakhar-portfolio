import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  tracks: { total: number };
}

interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
  external_urls: { spotify: string };
}

const BeyondCodeSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);
  const [recentTracks, setRecentTracks] = useState<SpotifyTrack[]>([]);
  const [isLoadingSpotify, setIsLoadingSpotify] = useState(true);

  // Spotify API integration (you'll need to set up environment variables)
  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Mock data for now - you'll replace this with actual Spotify API calls
        setPlaylists([
          {
            id: '1',
            name: 'Coding Vibes',
            description: 'Perfect for those late night coding sessions',
            images: [{ url: '/api/placeholder/300/300' }],
            external_urls: { spotify: 'https://open.spotify.com/playlist/...' },
            tracks: { total: 47 }
          },
          {
            id: '2',
            name: 'Rock Essentials',
            description: 'The Strokes, Arctic Monkeys, and more',
            images: [{ url: '/api/placeholder/300/300' }],
            external_urls: { spotify: 'https://open.spotify.com/playlist/...' },
            tracks: { total: 32 }
          },
          {
            id: '3',
            name: 'Melancholic Mornings',
            description: 'Snow Patrol, Kodaline, U2 for quiet moments',
            images: [{ url: '/api/placeholder/300/300' }],
            external_urls: { spotify: 'https://open.spotify.com/playlist/...' },
            tracks: { total: 28 }
          }
        ]);

        setRecentTracks([
          {
            name: 'Last Nite',
            artists: [{ name: 'The Strokes' }],
            album: { name: 'Is This It', images: [{ url: '/api/placeholder/64/64' }] },
            external_urls: { spotify: 'https://open.spotify.com/track/...' }
          },
          {
            name: 'Run',
            artists: [{ name: 'Snow Patrol' }],
            album: { name: 'Final Straw', images: [{ url: '/api/placeholder/64/64' }] },
            external_urls: { spotify: 'https://open.spotify.com/track/...' }
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

  const pages = [
    {
      title: "My Playlists",
      icon: "🎶",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Music is one of the ways I make sense of the world. My playlists shift with my moods — 
            sometimes it's loud and full of energy (The Strokes, Imagine Dragons, Arctic Monkeys), 
            and other times it's soft, almost melancholic (Snow Patrol, Kodaline, U2).
          </p>
          <p className="text-text-secondary mb-8">
            I like songs that are easy to sing along to, the kind that sound like memories even if you've never lived them. 
            These playlists are pulled straight from Spotify's API, so you'll see what I've been looping this week.
            Think of it like opening a little window into my headspace.
          </p>

          {isLoadingSpotify ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-accent"></div>
              <span className="ml-3 text-text-secondary">Loading playlists...</span>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-ivory mb-4">Current Playlists</h4>
              <div className="grid gap-4">
                {playlists.map((playlist) => (
                  <div
                    key={playlist.id}
                    className="group bg-gradient-to-r from-ivory/5 to-gold-accent/5 border border-ivory/10 rounded-xl p-4 hover:border-gold-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-accent/20 to-amber-glow/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🎵</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-ivory group-hover:text-gold-accent transition-colors">
                          {playlist.name}
                        </h5>
                        <p className="text-sm text-text-secondary mt-1">{playlist.description}</p>
                        <p className="text-xs text-text-muted mt-2">{playlist.tracks.total} tracks</p>
                      </div>
                      <a
                        href={playlist.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-accent hover:text-amber-glow transition-colors"
                      >
                        <span className="text-xl">🎧</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-ivory mb-4">Recently Played</h4>
                <div className="space-y-3">
                  {recentTracks.map((track, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-ivory/5 rounded-lg hover:bg-ivory/10 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gold-accent/20 rounded flex items-center justify-center">
                        <span className="text-sm">♪</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-ivory text-sm font-medium">{track.name}</p>
                        <p className="text-text-secondary text-xs">{track.artists[0].name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Astrophotography",
      icon: "📸",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            I've always been fascinated by the night sky — the way it makes you feel small and infinite at the same time. 
            Whenever I get away from city lights, I take my camera along to chase stars, constellations, and sometimes even auroras.
          </p>
          <p className="text-text-secondary mb-8">
            Astrophotography for me isn't just about the picture. It's about patience, wonder, and capturing something 
            fleeting that most people never even stop to notice. The gallery here will have some of my favorite shots — 
            imperfect, but real.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-space-dark to-charcoal border border-ivory/10 rounded-xl overflow-hidden hover:border-gold-accent/30 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-gold-accent/10 to-amber-glow/10 flex items-center justify-center">
                  <span className="text-4xl text-gold-accent/60">🌌</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h5 className="text-ivory font-medium">Milky Way Over Mountains</h5>
                    <p className="text-text-secondary text-sm">Shot with Canon EOS R6 • 30s exposure</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-gold-accent/10 to-amber-glow/10 border border-gold-accent/20 rounded-xl">
            <h4 className="text-ivory font-semibold mb-3 flex items-center">
              <span className="mr-2">🔭</span>
              Current Setup
            </h4>
            <div className="text-text-secondary space-y-2 text-sm">
              <p>• Canon EOS R6 with 24-70mm f/2.8 lens</p>
              <p>• Sturdy tripod for long exposures</p>
              <p>• Light pollution filter for urban shots</p>
              <p>• Lots of patience and hot coffee ☕</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Friends",
      icon: "🫂",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            I wouldn't be who I am without the people around me. My friends are part of my story: 
            from endless hostel debates about nothing, to late-night food runs, to helping each other survive deadlines and exams.
          </p>
          <p className="text-text-secondary mb-8">
            This section isn't about polished portraits, but about little snapshots of the chaos and laughter 
            that makes life in college bearable.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-ivory/5 to-gold-accent/5 border border-ivory/10 rounded-xl overflow-hidden hover:border-gold-accent/30 transition-all duration-300 aspect-square"
              >
                <div className="w-full h-full bg-gradient-to-br from-gold-accent/10 to-amber-glow/10 flex items-center justify-center">
                  <span className="text-3xl text-gold-accent/60">📸</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-ivory text-xs font-medium">Late night coding session</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h4 className="text-xl font-semibold text-ivory">Random Moments</h4>
            <div className="space-y-3">
              {[
                "🍕 2 AM pizza run during finals week",
                "🎮 Weekend gaming tournaments in the common room",
                "☕ Coffee debates that turn into philosophy discussions",
                "🚶‍♂️ Random walks around campus at midnight",
                "🎭 Acting out memes in the hostel corridor"
              ].map((moment, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-ivory/5 rounded-lg hover:bg-gold-accent/10 transition-colors"
                >
                  <span className="text-gold-accent">{moment.split(' ')[0]}</span>
                  <span className="text-text-secondary">{moment.substring(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "College Life",
      icon: "🎓",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            I'm currently at IIITN, and if I had to sum up my college life in one word, it would be <em className="text-gold-accent">chaotic</em>. 
            Between classes, side projects, hostel responsibilities, and club activities, every day feels like a balancing act.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gold-accent/10 to-amber-glow/10 border border-gold-accent/20 rounded-xl p-6">
              <h4 className="text-ivory font-semibold mb-3 flex items-center">
                <span className="mr-2">🏠</span>
                Technical Secretary, CRA Hostel Body
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Running our IT network, mapping out switches and fixing LAN issues at odd hours. 
                Building tools like BONK to make sense of our chaotic hostel network topology.
              </p>
            </div>

            <div className="bg-gradient-to-r from-electric-teal/10 to-mint-accent/10 border border-electric-teal/20 rounded-xl p-6">
              <h4 className="text-ivory font-semibold mb-3 flex items-center">
                <span className="mr-2">🧬</span>
                Co-Lead, CRISPR Club
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Set up an FTP server for resource sharing (filesRus project) and worked on projects like 
                classroom planners and attendance trackers. Making tech more accessible for everyone.
              </p>
            </div>

            <div className="bg-gradient-to-r from-tech-blue/10 to-electric-teal/10 border border-tech-blue/20 rounded-xl p-6">
              <h4 className="text-ivory font-semibold mb-3 flex items-center">
                <span className="mr-2">⚡</span>
                Endless Side Quests
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Experimenting with new web apps, designing internal tools, and trying to make tech around me a little smarter. 
                From print job schedulers to receipt reward systems.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-ivory mb-4">Current Semester Chaos</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="text-gold-accent font-medium">Academic</h5>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>• Advanced Algorithms & Data Structures</p>
                  <p>• Database Management Systems</p>
                  <p>• Computer Networks</p>
                  <p>• Software Engineering</p>
                </div>
              </div>
              <div className="space-y-3">
                <h5 className="text-gold-accent font-medium">Extra-curricular</h5>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>• Network infrastructure projects</p>
                  <p>• Club resource management</p>
                  <p>• Side project development</p>
                  <p>• Surviving on 4 hours of sleep</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-ivory/5 to-gold-accent/5 border border-ivory/10 rounded-xl">
            <p className="text-text-secondary italic text-center">
              "College for me has been more than academics — it's been about building things, breaking them, 
              and finding friends to share the ride with."
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage) {
      setDirection(pageIndex > currentPage ? 1 : -1);
      setCurrentPage(pageIndex);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="beyond" className="min-h-screen bg-gradient-to-b from-slate-deep/90 via-gold-accent/10 to-amber-glow/15 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-space text-5xl font-bold text-ivory mb-6">
            🌌 Beyond Code
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-accent to-amber-glow mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Because there's more to me than semicolons and curly braces — here's the human side of the equation.
          </p>
        </div>

        {/* Page Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-ivory/5 backdrop-blur-sm rounded-2xl p-2 border border-ivory/10">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-gradient-to-r from-gold-accent to-amber-glow text-space-dark font-medium'
                    : 'text-text-secondary hover:text-ivory hover:bg-ivory/10'
                }`}
              >
                <span>{page.icon}</span>
                <span className="hidden sm:inline">{page.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  nextPage();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevPage();
                }
              }}
              className="absolute inset-0 bg-gradient-to-br from-ivory/5 to-gold-accent/5 backdrop-blur-sm border border-ivory/10 rounded-2xl p-8 overflow-y-auto cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{pages[currentPage].icon}</span>
                <h3 className="font-space text-3xl font-bold text-ivory">
                  {pages[currentPage].title}
                </h3>
              </div>
              
              {pages[currentPage].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              currentPage === 0
                ? 'text-text-muted cursor-not-allowed opacity-50'
                : 'text-ivory bg-ivory/10 hover:bg-gold-accent hover:text-space-dark border border-ivory/20 hover:border-gold-accent'
            }`}
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'bg-gold-accent' : 'bg-ivory/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              currentPage === pages.length - 1
                ? 'text-text-muted cursor-not-allowed opacity-50'
                : 'text-ivory bg-ivory/10 hover:bg-gold-accent hover:text-space-dark border border-ivory/20 hover:border-gold-accent'
            }`}
          >
            <span>Next</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
