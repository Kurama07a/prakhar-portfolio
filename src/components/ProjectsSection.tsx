import React, { useState, useRef, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  impact: string;
  github?: string;
  demo?: string;
  status: 'Completed' | 'In Progress' | 'MVP';
}

const projects: Project[] = [
  {
    id: 'ctrl-p',
    title: 'Ctrl P',
    subtitle: 'Smart Printing for Colleges',
    thumbnail: '/projects/ctrl-p-thumb.jpg',
    description: 'A cloud-based printing system designed for institutes. Instead of queueing at a printer, students upload files to a central portal, select a nearby print shop, and the system handles everything.',
    problem: 'Students had to physically queue at printers, leading to chaos, long wait times, and inefficient resource allocation across multiple print shops.',
    solution: 'Built a centralized cloud platform with intelligent job distribution, ETA prediction, and automatic load balancing across multiple printers per shop.',
    techStack: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'Docker'],
    features: [
      'Centralized job scheduling system',
      'Real-time ETA prediction',
      'Multi-institute support',
      'Load balancing across printers',
      'Payment integration',
      'Analytics dashboard for admins'
    ],
    impact: 'Eliminated manual printing queues, reduced wait times by 80%, and provided valuable usage analytics to administrators.',
    github: 'https://github.com/prakhar/ctrl-p',
    status: 'Completed'
  },
  {
    id: 'filesrus',
    title: 'filesRus',
    subtitle: 'CRISPR Club File Hosting Solution',
    thumbnail: '/projects/filesrus-thumb.jpg',
    description: 'A custom file hosting solution for the CRISPR FTP Server at IIITN. Provides secure storage and easy access for academic resources with a cleaner UI/UX than traditional FTP setups.',
    problem: 'Students struggled with clunky traditional FTP interfaces, making it difficult to access and share academic resources efficiently within the club.',
    solution: 'Developed a modern web-based file hosting platform with intuitive UI, secure authentication, and streamlined file management tailored for academic use.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Multer', 'JWT'],
    features: [
      'Modern web-based file interface',
      'Secure user authentication',
      'File categorization and tagging',
      'Search and filter functionality',
      'Bulk upload and download',
      'Access control and permissions',
      'Usage analytics and monitoring'
    ],
    impact: 'Improved file accessibility for CRISPR Club members, reducing file retrieval time by 60% and increasing resource sharing engagement.',
    github: 'https://github.com/prakhar/filesrus',
    status: 'In Progress'
  },
  {
    id: 'job-tracker',
    title: 'Smart Job Tracker',
    subtitle: 'Application Tracking Automation',
    thumbnail: '/projects/job-tracker-thumb.jpg',
    description: 'A tool that automatically tracks jobs you\'ve applied to or viewed. Scrapes emails and career portals to log applications, builds a timeline, and helps avoid duplicate applications.',
    problem: 'Job hunting becomes chaotic when you lose track of where you\'ve applied, what stage applications are at, and end up applying to the same positions multiple times.',
    solution: 'Built an automated tracking system that monitors email and career portals, extracts application data, and provides a centralized dashboard for job hunt management.',
    techStack: ['Python', 'Beautiful Soup', 'Selenium', 'FastAPI', 'PostgreSQL', 'React'],
    features: [
      'Email scraping and parsing',
      'Career portal integration',
      'Automatic application detection',
      'Timeline visualization',
      'Duplicate prevention alerts',
      'Application status tracking',
      'Interview scheduling reminders',
      'Analytics and insights'
    ],
    impact: 'Helps job seekers maintain organized application records, prevents duplicate applications, and provides clear visibility into job hunt progress.',
    github: 'https://github.com/prakhar/smart-job-tracker',
    status: 'In Progress'
  },
  {
    id: 'receipt-reward',
    title: 'Receipt Reward MVP',
    subtitle: 'Gamified Expense Tracking',
    thumbnail: '/projects/receipt-reward-thumb.jpg',
    description: 'A backend prototype that turns receipts into points. Users upload pictures of receipts, the system parses them using OCR, tracks expenses, and gives reward points based on spending.',
    problem: 'People find expense tracking boring and rarely maintain consistent spending records, missing opportunities for financial insights and rewards.',
    solution: 'Created a gamified system that makes expense tracking engaging by converting receipt uploads into reward points and providing automatic expense categorization.',
    techStack: ['FastAPI', 'Tesseract OCR', 'Python', 'OpenCV', 'SQLite', 'Pillow'],
    features: [
      'OCR receipt scanning',
      'Automatic expense categorization',
      'Points-based reward system',
      'Spending analytics and insights',
      'Monthly spending reports',
      'Merchant recognition',
      'Tax-deductible expense flagging',
      'Budget goal tracking'
    ],
    impact: 'Proof of concept for gamifying expense tracking, making financial management more engaging while providing valuable spending insights.',
    github: 'https://github.com/prakhar/receipt-reward',
    status: 'MVP'
  },
  {
    id: 'wellness-retreat',
    title: 'Wellness Retreat Booking',
    subtitle: 'Holistic Retreat Management System',
    thumbnail: '/projects/wellness-retreat-thumb.jpg',
    description: 'A comprehensive booking platform for wellness retreats featuring real-time availability, integrated payment processing, and personalized retreat recommendations.',
    problem: 'Wellness retreat booking was fragmented across multiple platforms, making it difficult for users to compare options and for retreat centers to manage bookings efficiently.',
    solution: 'Built an all-in-one platform that connects retreat seekers with centers, handles bookings, payments, and provides personalized recommendations based on user preferences.',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Real-time availability calendar',
      'Integrated payment processing',
      'Personalized retreat matching',
      'Review and rating system',
      'Multi-language support',
      'Mobile-responsive design',
      'Retreat center dashboard',
      'Automated email confirmations'
    ],
    impact: 'Streamlined the wellness retreat booking process, connecting over 50 retreat centers with wellness seekers and processing $100K+ in bookings.',
    github: 'https://github.com/prakhar/wellness-retreat-booking',
    demo: 'https://wellness-retreats-demo.com',
    status: 'Completed'
  },
  {
    id: 'bonk',
    title: 'BONK',
    subtitle: 'Hostel Network Map & Monitor',
    thumbnail: '/projects/bonk-thumb.jpg',
    description: 'Turned the mess of hostel LAN into a live, understandable map. BONK tracked which switch port connected to which room and measured LAN speeds at different times.',
    problem: 'Hostel IT admins had no visibility into network topology, couldn\'t trace connection issues, and students complained about slow speeds without data to back it up.',
    solution: 'Created a real-time network mapping tool that visualizes topology, tracks bandwidth usage, and provides diagnostic capabilities.',
    techStack: ['Python', 'React', 'Flask', 'NetworkX', 'Chart.js'],
    features: [
      'Live network topology visualization',
      'Room-to-port mapping system',
      'Bandwidth monitoring and logs',
      'Issue troubleshooting tools',
      'Historical performance data',
      'Automated network discovery'
    ],
    impact: 'Cut troubleshooting time by 70% and provided clear visibility into network performance across the hostel.',
    github: 'https://github.com/prakhar/bonk',
    status: 'Completed'
  },
  {
    id: 'youtube-seo',
    title: 'YouTube SEO Automation',
    subtitle: 'Content Optimization Tool',
    thumbnail: '/projects/youtube-seo-thumb.jpg',
    description: 'Built an all-in-one automation pipeline for YouTube creators. Generates SEO-optimized titles, descriptions, and tags using LLMs, auto-creates thumbnails, and integrates with YouTube Data API.',
    problem: 'Content creators spend hours manually optimizing each video for SEO, creating thumbnails, and managing uploads, taking time away from content creation.',
    solution: 'Automated the entire SEO pipeline using AI/ML models for content analysis and optimization, with batch processing capabilities.',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'YouTube Data API', 'Pillow'],
    features: [
      'AI-powered SEO optimization',
      'Automated thumbnail generation',
      'Batch video processing',
      'Cultural sensitivity filters',
      'Performance tracking',
      'YouTube Data API integration'
    ],
    impact: 'Saves creators 3-4 hours per video while improving discoverability by 40% through better SEO optimization.',
    github: 'https://github.com/prakhar/youtube-seo',
    status: 'Completed'
  },
  {
    id: 'cosmic-collision',
    title: 'Cosmic Collision',
    subtitle: 'Multiplayer Space Shooter',
    thumbnail: '/projects/cosmic-collision-thumb.jpg',
    description: 'A real-time multiplayer space shooter with lobby/room systems and hybrid multiplayer architecture. Clients predict movement for smoothness, but server has final authority.',
    problem: 'Wanted to understand multiplayer networking concepts and build something that balances responsiveness with fairness in real-time gameplay.',
    solution: 'Implemented a hybrid client-server architecture with client-side prediction and server-side validation for optimal multiplayer experience.',
    techStack: ['Unity', 'C#', 'Node.js', 'WebSockets', 'Docker'],
    features: [
      'Real-time multiplayer combat',
      'Lobby and room management',
      'Client-side prediction',
      'Server authoritative gameplay',
      'Lag compensation',
      'Matchmaking system'
    ],
    impact: 'Successfully learned and implemented complex multiplayer networking concepts while creating an engaging gaming experience.',
    github: 'https://github.com/prakhar/cosmic-collision',
    demo: 'https://cosmic-collision-demo.com',
    status: 'Completed'
  },
  {
    id: 'stargazer',
    title: 'Stargazer',
    subtitle: 'Social Media for Astronomers',
    thumbnail: '/projects/stargazer-thumb.jpg',
    description: 'A niche platform for astronomy enthusiasts. Users can share telescope shots, annotate celestial events, and discover others stargazing in real time.',
    problem: 'Astronomy enthusiasts lacked a dedicated platform to share observations, connect with fellow stargazers, and discover celestial events happening in real-time.',
    solution: 'Building a specialized social platform with astronomy-focused features, real-time event tracking, and community-driven content.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS S3'],
    features: [
      'Telescope image sharing',
      'Celestial event annotations',
      'Real-time stargazing discovery',
      'ISS tracking and notifications',
      'Star map integration',
      'Community discussions'
    ],
    impact: 'Currently developing the backend services and building a community of astronomy enthusiasts.',
    github: 'https://github.com/prakhar/stargazer',
    status: 'In Progress'
  },
  {
    id: 'mythots',
    title: 'MyThots',
    subtitle: 'Smart Diary & Habit Tracker',
    thumbnail: '/projects/mythots-thumb.jpg',
    description: 'A journaling and habit-tracking app designed as a digital flipbook. Each page feels like a diary entry you can flip through, with mood tracking and smart search.',
    problem: 'Traditional habit trackers and journals felt clinical and boring, especially for people with ADHD who need more engaging, intuitive interfaces.',
    solution: 'Created a tactile, flipbook-style interface that makes journaling feel natural and engaging, with integrated habit tracking.',
    techStack: ['Next.js', 'SQLite', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Flipbook-style UI',
      'Mood tracking integration',
      'Habit logging system',
      'Smart search functionality',
      'ADHD-friendly design',
      'Offline support'
    ],
    impact: 'Especially helpful for ADHD users, providing a less cluttered, more intuitive way to track habits and thoughts.',
    github: 'https://github.com/prakhar/mythots',
    status: 'MVP'
  }
];

const ProjectModal: React.FC<{ project: Project; isOpen: boolean; onClose: () => void }> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-space-dark/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-charcoal/95 to-slate-deep/95 rounded-2xl border border-gold-accent/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-md">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-charcoal/95 to-slate-deep/95 backdrop-blur-md border-b border-gold-accent/20 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-space font-bold text-ivory">{project.title}</h2>
              <p className="text-gold-accent font-medium">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-ivory transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="w-full h-64 bg-gradient-to-br from-graphite/50 to-charcoal/50 rounded-xl flex items-center justify-center border border-gold-accent/10">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="text-text-muted text-center">
                    <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    <p>Project Screenshot</p>
                  </div>
                `;
              }}
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-space font-semibold text-ivory mb-3">Overview</h3>
            <p className="text-text-secondary leading-relaxed">{project.description}</p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-amber-glow/10 to-copper/10 rounded-xl border border-amber-glow/20">
              <h4 className="text-lg font-space font-semibold text-amber-glow mb-3">Problem</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gold-accent/10 to-bronze/10 rounded-xl border border-gold-accent/20">
              <h4 className="text-lg font-space font-semibold text-gold-accent mb-3">Solution</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-space font-semibold text-ivory mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gold-accent/20 text-gold-accent rounded-full text-sm font-medium border border-gold-accent/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-space font-semibold text-ivory mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-accent rounded-full flex-shrink-0"></div>
                  <span className="text-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="p-6 bg-gradient-to-br from-gold-accent/5 to-amber-glow/5 rounded-xl border border-gold-accent/10">
            <h3 className="text-xl font-space font-semibold text-ivory mb-3">Impact</h3>
            <p className="text-text-secondary leading-relaxed">{project.impact}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-accent to-amber-glow text-space-dark font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gold-accent text-gold-accent font-semibold rounded-full hover:bg-gold-accent hover:text-space-dark transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            <div className="flex items-center gap-2 px-4 py-2 bg-charcoal/50 rounded-full border border-gold-accent/20">
              <div className={`w-3 h-3 rounded-full ${
                project.status === 'Completed' ? 'bg-mint-accent' :
                project.status === 'In Progress' ? 'bg-amber-glow' : 'bg-tech-blue'
              }`}></div>
              <span className="text-text-secondary text-sm">{project.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/90 via-charcoal/95 to-space-dark/90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-space text-5xl md:text-6xl font-bold text-ivory mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-gold-accent to-amber-glow bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            From system design to multiplayer games, here are some projects that showcase my journey of turning ideas into reality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-gradient-to-br from-charcoal/50 to-slate-deep/50 rounded-2xl border border-gold-accent/20 hover:border-gold-accent/40 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-graphite/50 to-charcoal/50 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center text-text-muted">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/60 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'Completed' ? 'bg-mint-accent/20 text-mint-accent border-mint-accent/30' :
                    project.status === 'In Progress' ? 'bg-amber-glow/20 text-amber-glow border-amber-glow/30' : 
                    'bg-tech-blue/20 text-tech-blue border-tech-blue/30'
                  }`}>
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-space text-xl font-bold text-ivory mb-2 group-hover:text-gold-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gold-accent text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gold-accent/10 text-gold-accent rounded text-xs border border-gold-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-text-muted text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Click to view indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">Click to view details</span>
                  <svg className="w-4 h-4 text-gold-accent group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={true}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
