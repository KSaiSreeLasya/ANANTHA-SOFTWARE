import React from 'react';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Animated Background Spheres - White Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large Primary Sphere - Blue */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/12 to-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow" style={{animation: 'floatSlow 20s ease-in-out infinite'}}></div>

        {/* Secondary Gold Sphere */}
        <div className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-bl from-secondary/18 via-secondary/10 to-secondary/3 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{animation: 'float 24s ease-in-out infinite 2s'}}></div>

        {/* Tertiary Teal Sphere */}
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-tr from-accent/15 to-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-float" style={{animation: 'float 28s ease-in-out infinite 4s'}}></div>

        {/* Gold Accent Sphere */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-secondary/12 to-primary/6 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" style={{animation: 'floatSlow 30s ease-in-out infinite 3s'}}></div>

        {/* Extra Bottom Accent */}
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-gradient-to-t from-accent/15 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-35" style={{animation: 'float 32s ease-in-out infinite 6s'}}></div>
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
        <div className="mb-14 inline-block animate-fade-in-up" style={{animationDuration: '0.7s'}}>
          <div className="px-8 py-4 text-secondary text-xs font-bold uppercase tracking-widest flex items-center gap-3 group relative backdrop-blur-sm border border-secondary/40 rounded-full bg-gradient-to-r from-secondary/12 to-secondary/6" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.2)'}}>
            <span className="w-3.5 h-3.5 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse-scale"></span>
            <span className="text-secondary">Transforming Industries</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-lg -z-10"></div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-accent group-hover:w-full transition-all duration-600 rounded-full"></div>
          </div>
        </div>

        {/* ASOCSEMI Banner */}
        <div className="mb-20 w-full px-4 animate-fade-in-up" style={{animationDelay: '0.1s', animationDuration: '0.8s'}}>
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/12 via-accent/8 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-3xl -z-10 rounded-3xl"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-accent/25 to-secondary/25 opacity-0 group-hover:opacity-100 blur-xl -z-20 rounded-3xl transition-opacity duration-700"></div>
            <div className="flex flex-col items-center text-center space-y-6 py-24 px-12 relative border border-secondary/40 group-hover:border-secondary/80 bg-gradient-to-br from-secondary/14 to-secondary/6 rounded-3xl backdrop-blur-xl transition-all duration-600 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/12 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              <h3 className="text-3xl md:text-4xl font-black group-hover:text-secondary transition-colors duration-600 w-full flex flex-col items-center justify-center relative z-10 letter-spacing-tight">
                Anantha Software is now <span className="inline-block mt-3 font-black text-3xl md:text-4xl" style={{background: 'linear-gradient(120deg, #fbbf24 0%, #14b8a6 50%, #3b82f6 100%)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradient-shift 8s ease infinite'}}>ASOCSEMI</span>
              </h3>
              <div className="h-2 w-40 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-600 rounded-full relative z-10" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)'}}></div>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed uppercase tracking-wider font-medium group-hover:text-text-primary transition-colors duration-600 max-w-2xl relative z-10">
                Transitioning to ASOCSEMI! We are excited to introduce our expanded semiconductor and engineering services. Our commitment to excellence drives us to deliver top-tier technology.
              </p>
              <button
                onClick={() => window.open('https://www.asocsemi.com/', '_blank')}
                className="mt-8 px-12 py-5 btn-primary-outline-gold rounded-2xl text-xs font-bold uppercase tracking-wider transform hover:scale-110 active:scale-95 transition-all duration-500 group/btn overflow-hidden relative z-10 border-2.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Explore ASOCSEMI
                  <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Heading with Enhanced Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] mb-16 uppercase" style={{letterSpacing: '-0.025em'}}>
          <span className="block text-text group animate-fade-in-up relative" style={{animationDelay: '0.2s', animationDuration: '0.9s', marginBottom: '1rem', fontWeight: 900, lineHeight: '1.05'}}>
            <span className="inline-block relative">
              <span className="absolute -inset-6 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-xl"></span>
              <span className="relative hover:text-secondary transition-colors duration-500">Transforming</span>
            </span>
            <span className="inline-block ml-3 mr-3 hover:scale-110 transition-transform duration-500" style={{animation: 'gradient-shift 8s ease infinite', background: 'linear-gradient(120deg, #fbbf24 0%, #14b8a6 50%, #3b82f6 100%)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 900, display: 'inline-block'}}>Innovation</span>
            <br />
            <span className="text-text-secondary font-light">Into</span>
          </span>
          <span className="block animate-fade-in-up relative" style={{animationDelay: '0.4s', animationDuration: '0.9s', background: 'linear-gradient(120deg, #3b82f6 0%, #14b8a6 50%, #fbbf24 100%)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradient-shift 8s ease infinite', fontWeight: 900, lineHeight: '1.05', display: 'block'}}>Reality</span>
        </h1>

        {/* Subheading with Enhanced Typography */}
        <div className="relative group">
          <div className="absolute -inset-8 bg-gradient-to-r from-secondary/0 via-secondary/15 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-xl -z-10 pointer-events-none"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto mb-24 font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '0.35s', animationDuration: '0.9s', letterSpacing: '0.3px', fontWeight: '300', lineHeight: '1.8'}}>
            <span className="text-text font-medium">Cutting-edge solutions</span> in VLSI, AI/ML, and Software Engineering.
            <br className="hidden md:block" />
            Empowering businesses to innovate, scale, and lead their industries with advanced technology partnerships.
          </p>
        </div>

        {/* CTA Buttons with Enhanced Hover States */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 items-center animate-fade-in-up" style={{animationDelay: '0.5s', animationDuration: '0.9s'}}>
          <button
            onClick={() => navigateTo('services')}
            className="btn-primary-gold btn-primary-solid rounded-3xl px-16 py-6 text-xs font-bold uppercase tracking-widest shadow-glow hover:shadow-2xl transform transition-all hover:scale-110 active:scale-95 duration-500 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 justify-center">
              <span className="relative">Explore Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="btn-primary-outline-gold rounded-3xl px-16 py-6 text-xs font-bold uppercase tracking-widest transform transition-all hover:scale-110 active:scale-95 duration-500 relative group overflow-hidden border-2.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 justify-center">
              <span className="relative">Let's Talk</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Enhanced Stats Row with 3D Effects */}
        <div className="mt-40 grid grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s', animationDuration: '0.9s'}}>
          {[
            { value: '4+', label: 'Years', delay: 0, icon: '📅' },
            { value: '50+', label: 'Team Members', delay: 0.1, icon: '👥' },
            { value: '3', label: 'Continents', delay: 0.2, icon: '🌍' }
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center group/stat cursor-default relative p-8 md:p-12 rounded-3xl border border-secondary/35 hover:border-secondary/70 transition-all duration-600 bg-gradient-to-br from-secondary/14 to-secondary/6 hover:from-secondary/25 hover:to-secondary/15 overflow-hidden backdrop-blur-xl transform hover:-translate-y-2"
              style={{animation: 'fadeInUp 0.9s ease-out', animationDelay: `${0.65 + stat.delay}s`, animationFillMode: 'both', perspective: '1000px'}}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/25 via-transparent to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-600 blur-2xl -z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover/stat:opacity-60 transition-opacity duration-700 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-accent/15 rounded-full mix-blend-screen filter blur-2xl opacity-0 group-hover/stat:opacity-40 transition-opacity duration-700 -z-10"></div>

              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="text-5xl group-hover/stat:scale-125 transition-transform duration-600">{stat.icon}</div>
                <div className="text-5xl md:text-7xl font-black group-hover/stat:scale-110 transition-transform duration-600" style={{background: 'linear-gradient(120deg, #fbbf24 0%, #14b8a6 50%, #fbbf24 100%)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradient-shift 6s ease infinite'}}>{stat.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-widest font-bold group-hover/stat:text-secondary transition-colors duration-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;
