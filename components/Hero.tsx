import React from 'react';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]">
      {/* Enhanced Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
            <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M0 400C120 320 240 320 360 400C480 480 600 480 720 400C840 320 960 320 1080 400C1200 480 1320 480 1440 400" stroke="url(#gradientStroke)" strokeWidth="2" />
            <path d="M0 450C120 370 240 370 360 450C480 530 600 530 720 450C840 370 960 370 1080 450C1200 530 1320 530 1440 450" stroke="url(#gradientStroke)" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-radial-gradient opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
        {/* ASOCSEMI Banner */}
        <div className="mb-16 inline-block">
          <div className="gradient-card p-8 md:p-10 rounded-2xl max-w-2xl mx-auto card-hover group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{background: 'radial-gradient(circle at top, rgba(255,107,107,0.1), transparent 70%)'}}></div>
            <h3 className="relative text-xl md:text-2xl font-bold mb-3 group-hover:text-coral transition-colors duration-300">
              Anantha Software is now <span className="text-coral">ASOCSEMI</span>
            </h3>
            <p className="relative text-xs md:text-sm text-gray-400 leading-relaxed uppercase tracking-wider font-medium">
              Transitioning to ASOCSEMI! We are excited to introduce our expanded semiconductor and engineering services.
              Our commitment to excellence drives us to deliver top-tier technology.
            </p>
            <button
              onClick={() => window.open('https://www.asocsemi.com/', '_blank')}
              className="relative mt-8 px-8 py-3.5 bg-coral text-white text-xs font-bold rounded-full uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-coral/25 hover:shadow-coral/40 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 uppercase">
          Empowering <br />
          <span className="text-gradient">Integrated Tech</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-medium tracking-wide leading-relaxed">
          You Believe, We Build. Delivering world-class expertise in Silicon Engineering, AI/ML, and Software Ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <button
            onClick={() => navigateTo('services')}
            className="btn-primary btn-primary-solid rounded-full px-10 py-4 shadow-xl shadow-coral/30 hover:shadow-coral/50"
          >
            Our Services
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="btn-primary btn-primary-outline rounded-full px-10 py-4"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
