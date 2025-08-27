import React from 'react';

const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/kurama07a',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/prakhar-shukla07a/',
      description: 'Connect professionally'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:prakhar200803@gmail.com',
      description: 'Drop me a line'
    }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-b from-slate-deep/90 via-space-dark/95 to-black py-20 relative overflow-hidden"
    >
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-ivory mb-6">
            Get{' '}
            <span className="bg-gradient-to-r from-gold-accent to-amber-glow bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-accent to-amber-glow mx-auto mb-8"></div>
        </div>

        {/* Availability Status */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-gold-accent/10 to-amber-glow/10 backdrop-blur-sm border border-gold-accent/20 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-ivory font-medium">Open to Work</span>
          </div>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and exciting projects. 
            Whether it's a full-time role, freelance work, or just a chat about tech — I'd love to hear from you.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
              className="group bg-gradient-to-br from-ivory/5 to-gold-accent/5 backdrop-blur-sm 
                       border border-ivory/10 rounded-xl p-6 hover:border-gold-accent/30 
                       hover:bg-gradient-to-br hover:from-ivory/8 hover:to-gold-accent/8
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold-accent/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <h3 className="font-medium text-ivory group-hover:text-gold-accent transition-colors duration-300 mb-2">
                {link.name}
              </h3>
              <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <p className="text-text-secondary">
            Let's build something amazing together ✨
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:prakhar@example.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-accent to-amber-glow 
                       hover:from-amber-glow hover:to-gold-accent text-space-dark font-medium 
                       px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>📧</span>
              <span>Send a Message</span>
            </a>
            <a
              href="/prakhar-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-ivory/10 hover:bg-ivory/20 
                       text-ivory border border-ivory/20 hover:border-gold-accent font-medium 
                       px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <span>📄</span>
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-amber-glow/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold-accent/20 rounded-full animate-pulse delay-2000"></div>
      </div>
    </section>
  );
};

export default ContactSection;
