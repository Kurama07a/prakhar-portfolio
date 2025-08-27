import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    description?: string;
  }[];
}

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0); // Track direction for animation

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      description: "Cuz every backend needs a solid frontend.",
      skills: [
        { name: "React.js & Next.js", icon: "⚛️", description: "It's what the most tutorials cover." },
        { name: "JavaScript & TypeScript", icon: "🟨", description: "Same as before" },
        { name: "TailwindCSS", icon: "🎨", description: "Plan CSS? No Thanks" },
        { name: "ShadCN/UI", icon: "🎯", description: "Thank you, I love you " },
        { name: "Material UI", icon: "📦", description: "Wow , just wow" },
        { name: "Ant Design", icon: "🎨", description: "A design system for enterprise-level products" },
        { name: "Chakra UI", icon: "🛠️", description: "other half of the coin that is shadCN/UI" },
        { name: "Framer Motion", icon: "🎬", description: "I like when things move" },
        { name: "Figma", icon: "🎨", description: "Flying blind never benifits anyone" },
      ]
    },
    {
      title: "Backend",
      description: "My first love.",
      skills: [
        { name: "Node.js & Express", icon: "🟢", description: "Seniors told me to do MERN stack ;_;" },
        { name: "FastAPI (Python)", icon: "🐍", description: "It's actually pretty fast" },
        { name: "WebSockets", icon: "🔌", description: "I hate to refresh my screen" },
        { name: "PostgreSQL", icon: "🐘", description: "SQL on steroids" },
        { name: "MySQL", icon: "🐬", description: "you tell me this runs half the internet? I believe you" },
        { name: "MongoDB", icon: "🍃", description: "When you're too confused" },
        { name: "Redis", icon: "🧊", description: "Like the pile of clothes on my chair" },
        { name: "RabbitMQ", icon: "🐇", description: "Like passing notes" },
        { name: "Prisma", icon: "⚡", description: "SQL but aesthetic" },
        { name: "Firebase", icon: "🔥", description: "Google wanted more of my data" },
        { name: "AWS", icon: "☁️", description: "So did Amazon" },
        { name: "Supabase", icon: "🛠️", description: "So I decided to give to Amazon but quietly" },
        { name: "GraphQL", icon: "📈", description: "I never got it really" },
      ]
    },
    {
      title: "DevOps & Tools",
      description: "Or else how will the code run?",
      skills: [
        { name: "Docker", icon: "🐳", description: "Cuz it runs on my pc just ain't enough" },
        { name: "GitHub Actions", icon: "⚙️", description: "I hated redeploying" },
        { name: "Linux", icon: "🐧", description: "The cool kid OS" },
        { name: "Networking", icon: "🌐", description: "Hands-on experience with real networks" },
        { name: "Vercel", icon: "▲", description: "Frontend fairy godmother" },
        { name: "DigitalOcean", icon: "🌊", description: "Cloud, but with startup energy" }
      ]
    },
    {
      title: "Beyond Tech",
      description: "I am more than just 1s and 0s.",
      skills: [
        { name: "System Design", icon: "🏗️", description: "Big diagrams = big brain energy" },
        { name: "Real-time Monitoring", icon: "📊", description: "I love stalking servers" },
        { name: "Automation Scripts", icon: "🤖", description: "who likes chores anyways" },
        { name: "Astronomy", icon: "🌌", description: "Stars sneak into my metaphors" },
        { name: "AI/ML Curious", icon: "🧠", description: "Gotta keep monitoring what's gonna take my job" },
        { name: "Rock Music", icon: "🎸", description: "Ctrl+C, Ctrl+V, Ctrl+Z, Power Chord." }
      ]
    }
  ];

  const handlePrev = () => {
    setDirection(-1);
    setActiveTab((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveTab((prev) => (prev === skillCategories.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-space-dark/90 via-charcoal/85 to-slate-deep/90 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-space text-5xl font-bold text-ivory mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-accent to-amber-glow mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through real projects, curious exploration, and the belief that
            great technology should solve meaningful problems.
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="relative flex items-center justify-between mb-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-ivory/10 text-ivory hover:bg-gold-accent/30 hover:text-space-dark transition-all duration-300 shadow-lg hover:shadow-gold-accent/20"
            aria-label="Previous category"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="flex-1 mx-4 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeTab}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                <div className="mb-8">
                  <h3 className="font-space text-3xl font-bold text-ivory mb-4">
                    {skillCategories[activeTab].title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-4xl mx-auto">
                    {skillCategories[activeTab].description}
                  </p>
                </div>
                {/* Skills Grid */}
                <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">
                  {(() => {
                    const skills = skillCategories[activeTab].skills;
                    const title = skillCategories[activeTab].title;
                    let rowStructure: number[] = [];
                    
                    // Define row structure for each section
                    switch (title) {
                      case "Frontend":
                        rowStructure = [4, 3, 2]; // 9 skills total
                        break;
                      case "Backend":
                        rowStructure = [4, 4, 3, 2]; // 13 skills total
                        break;
                      case "DevOps & Tools":
                        rowStructure = [3, 2, 1]; // 6 skills total
                        break;
                      case "Beyond Tech":
                        rowStructure = [4, 2]; // 6 skills total
                        break;
                      default:
                        rowStructure = [4, 3, 2]; // fallback
                    }
                    
                    let skillIndex = 0;
                    const rows = rowStructure.map((rowCount, rowIndex) => {
                      const rowSkills = skills.slice(skillIndex, skillIndex + rowCount);
                      skillIndex += rowCount;
                      
                      return (
                        <div key={rowIndex} className="flex justify-center gap-6">
                          {rowSkills.map((skill, index) => (
                            <motion.div
                              key={skillIndex - rowCount + index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: (skillIndex - rowCount + index) * 0.1 }}
                              className="group bg-gradient-to-br from-ivory/5 to-gold-accent/5 backdrop-blur-sm
                                       border border-ivory/10 rounded-xl p-6 hover:border-gold-accent/30
                                       hover:bg-gradient-to-br hover:from-ivory/8 hover:to-gold-accent/8
                                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/10
                                       w-48 h-48 flex flex-col items-center justify-center text-center"
                            >
                              <span className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </span>
                              <h4 className="font-medium text-ivory group-hover:text-gold-accent transition-colors duration-300 mb-3 text-center">
                                {skill.name}
                              </h4>
                              {skill.description && (
                                <p className="text-xs text-text-secondary/80 leading-relaxed text-center">
                                  {skill.description}
                                </p>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      );
                    });
                    
                    return rows;
                  })()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-ivory/10 text-ivory hover:bg-gold-accent/30 hover:text-space-dark transition-all duration-300 shadow-lg hover:shadow-gold-accent/20"
            aria-label="Next category"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-accent/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-amber-glow/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold-accent/20 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;