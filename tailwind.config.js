/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Dark sophisticated base
        'space-dark': '#0A0A0A',
        'charcoal': '#1A1A1A', 
        'slate-deep': '#2A2A2A',
        'graphite': '#3A3A3A',
        
        // Ivory and warm tones
        'ivory': '#F8F6F0',
        'cream': '#F5F2E8',
        'warm-white': '#FEFCF7',
        'pearl': '#F0EDE5',
        
        // Accent colors for contrast
        'gold-accent': '#D4AF37',
        'amber-glow': '#FF8C00',
        'copper': '#B87333',
        'bronze': '#CD7F32',
        
        // Subtle tech colors
        'tech-blue': '#4A90E2',
        'electric-teal': '#40E0D0',
        'mint-accent': '#98FB98',
        
        // Text hierarchy
        'text-primary': '#F8F6F0',
        'text-secondary': '#D1CFC7',
        'text-muted': '#A8A6A0',
        'text-accent': '#D4AF37'
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #D4AF37' },
          'to': { boxShadow: '0 0 30px #FF8C00' },
        },
        parallax: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-100px)' },
        }
      }
    },
  },
  plugins: [],
};
