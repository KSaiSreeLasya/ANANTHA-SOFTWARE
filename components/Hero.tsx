import React from 'react';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-color-bg via-color-bg-light to-color-bg">
      {/* Animated Background Spheres - Premium */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-primary/25 to-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float-slow" style={{animation: 'floatSlow 12s ease-in-out infinite'}}></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full mix-blend-screen filter blur-3xl opacity-45 animate-float" style={{animation: 'float 15s ease-in-out infinite 3s'}}></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-gradient-to-r from-secondary/15 to-secondary/5 rounded-full mix-blend-screen filter blur-3xl opacity-35 animate-float" style={{animation: 'float 18s ease-in-out infinite 6s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/5 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-slow" style={{animation: 'floatSlow 20s ease-in-out infinite 2s'}}></div>
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
        {/* Badge */}
        <div className="mb-8 inline-block animate-fade-in-up">
          <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/8 border border-primary/40 text-primary text-xs font-semibold uppercase tracking-widest flex items-center gap-2.5 backdrop-blur-sm hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/12 transition-all duration-500 shadow-lg shadow-primary/10">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse-scale"></span>
            Transforming Industries
          </div>
        </div>

        {/* ASOCSEMI Banner */}
        <div className="mb-16 inline-block w-full px-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="gradient-card-subtle p-8 md:p-10 rounded-2xl max-w-3xl mx-auto card-hover group border-primary/40 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl" style={{background: 'radial-gradient(circle at top, rgba(31,111,235,0.2), transparent 70%)'}}></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>
            <h3 className="relative text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-500">
              Anantha Software is now <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">ASOCSEMI</span>
            </h3>
            <p className="relative text-xs md:text-sm text-text-muted leading-relaxed uppercase tracking-wider font-medium group-hover:text-text-secondary transition-colors duration-500">
              Transitioning to ASOCSEMI! We are excited to introduce our expanded semiconductor and engineering services.
              Our commitment to excellence drives us to deliver top-tier technology.
            </p>
            <button
              onClick={() => window.open('https://www.asocsemi.com/', '_blank')}
              className="relative mt-8 px-8 py-3.5 btn-primary btn-primary-solid rounded-lg text-xs font-bold uppercase tracking-[0.15em] transform hover:scale-105 active:scale-95 transition-all duration-400 group/btn shadow-lg shadow-primary/20"
            >
              <span className="relative z-10">Explore ASOCSEMI</span>
            </button>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8 uppercase animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <span className="block mb-2 text-text">Delivering Excellence in</span>
          <span className="text-gradient block">Engineering & Technology</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Cutting-edge solutions in VLSI, AI/ML, and Software Engineering. Empowering businesses to innovate, scale, and lead their industries with advanced technology partnerships.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <button
            onClick={() => navigateTo('services')}
            className="btn-primary btn-primary-solid rounded-lg px-10 py-4 text-sm font-bold uppercase tracking-widest shadow-glow hover:shadow-2xl transform transition-all hover:scale-105 active:scale-95"
          >
            Explore Services
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="btn-primary btn-primary-outline rounded-lg px-10 py-4 text-sm font-bold uppercase tracking-widest transform transition-all hover:scale-105 active:scale-95"
          >
            Let's Talk
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {[
            { value: '4+', label: 'Years' },
            { value: '50+', label: 'Team Members' },
            { value: '3', label: 'Continents' }
          ].map((stat, i) => (
            <div key={i} className="text-center group/stat cursor-default">
              <div className="text-2xl md:text-3xl font-black text-gradient mb-1 group-hover/stat:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-xs text-text-muted uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-muted uppercase tracking-widest font-semibold">Scroll to explore</span>
            <svg className="w-5 h-5 text-primary animate-pulse-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
