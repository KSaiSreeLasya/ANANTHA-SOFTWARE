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
        <div className="mb-8 inline-block animate-fade-in-up" style={{animationDuration: '0.8s'}}>
          <div className="px-6 py-3 text-primary text-xs font-semibold uppercase tracking-widest flex items-center gap-3 group relative backdrop-blur-lg border border-primary/30 rounded-full bg-primary/8">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse-scale"></span>
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text">Transforming Industries</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"></div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        {/* ASOCSEMI Banner */}
        <div className="mb-16 w-full px-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10"></div>
            <div className="flex flex-col items-center text-center space-y-4 py-12 relative">
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-500">
                Anantha Software is now <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">ASOCSEMI</span>
              </h3>
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed uppercase tracking-wider font-medium group-hover:text-text-secondary transition-colors duration-500 max-w-xl">
                Transitioning to ASOCSEMI! We are excited to introduce our expanded semiconductor and engineering services. Our commitment to excellence drives us to deliver top-tier technology.
              </p>
              <button
                onClick={() => window.open('https://www.asocsemi.com/', '_blank')}
                className="mt-4 px-8 py-3 btn-primary btn-primary-outline rounded-lg text-xs font-bold uppercase tracking-[0.15em] transform hover:scale-105 active:scale-95 transition-all duration-400 group/btn"
              >
                <span className="relative z-10">Explore ASOCSEMI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8 uppercase" style={{animationDuration: '1s'}}>
          <span className="block mb-4 text-text group animate-fade-in-up" style={{animationDelay: '0.2s', animationDuration: '0.8s'}}>
            <span className="inline-block relative">
              <span className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg"></span>
              <span className="relative">Delivering</span>
            </span>
            {' '}
            <span className="inline-block text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text" style={{animation: 'gradient-shift 6s ease infinite', backgroundSize: '200% 200%'}}>Excellence</span>
            {' '}
            in
          </span>
          <span className="block text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text animate-gradient-shift animate-fade-in-up" style={{animationDelay: '0.4s', animationDuration: '0.8s'}}>Engineering & Technology</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-fade-in-up hover:text-text-secondary transition-colors duration-500" style={{animationDelay: '0.4s'}}>
          Cutting-edge solutions in VLSI, AI/ML, and Software Engineering. Empowering businesses to innovate, scale, and lead their industries with advanced technology partnerships.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <button
            onClick={() => navigateTo('services')}
            className="btn-primary btn-primary-solid rounded-lg px-10 py-4 text-sm font-bold uppercase tracking-widest shadow-glow hover:shadow-2xl transform transition-all hover:scale-105 active:scale-95 duration-400 relative group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="btn-primary btn-primary-outline rounded-lg px-10 py-4 text-sm font-bold uppercase tracking-widest transform transition-all hover:scale-105 active:scale-95 duration-400 relative group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {[
            { value: '4+', label: 'Years' },
            { value: '50+', label: 'Team Members' },
            { value: '3', label: 'Continents' }
          ].map((stat, i) => (
            <div key={i} className="text-center group/stat cursor-default relative p-4 rounded-lg hover:bg-primary/8 transition-all duration-400 border border-transparent hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-400 rounded-lg"></div>
              <div className="relative z-10 text-2xl md:text-3xl font-black text-gradient group-hover/stat:scale-125 transition-transform duration-400">{stat.value}</div>
              <div className="relative z-10 text-xs text-text-muted uppercase tracking-wider font-semibold group-hover/stat:text-primary transition-colors duration-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <span className="text-xs text-text-muted uppercase tracking-widest font-semibold group-hover:text-primary transition-colors duration-500">Scroll to explore</span>
            <svg className="w-6 h-6 text-primary animate-bounce-smooth group-hover:scale-125 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
