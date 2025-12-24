import React from 'react';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-color-bg via-color-bg-light to-color-bg">
      {/* Animated Background Spheres */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{animation: 'float 8s ease-in-out infinite'}}></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{animation: 'float 10s ease-in-out infinite 2s'}}></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animation: 'float 12s ease-in-out infinite 4s'}}></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37, 99, 235, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

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
