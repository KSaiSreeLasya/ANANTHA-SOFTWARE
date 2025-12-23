
import React from 'react';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
            <path d="M0 400C120 320 240 320 360 400C480 480 600 480 720 400C840 320 960 320 1080 400C1200 480 1320 480 1440 400" stroke="#ff6b6b" strokeWidth="1" opacity="0.3" />
            <path d="M0 450C120 370 240 370 360 450C480 530 600 530 720 450C840 370 960 370 1080 450C1200 530 1320 530 1440 450" stroke="#ff6b6b" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
        {/* ASOCSEMI Banner */}
        <div className="mb-12 inline-block">
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl max-w-2xl mx-auto backdrop-blur-md hover:border-coral/30 transition-all group">
            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-coral transition-colors">
              Anantha Software is now <span className="text-coral">ASOCSEMI</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed uppercase tracking-wider">
              Transitioning to ASOCSEMI! We are excited to introduce our expanded semiconductor and engineering services. 
              Our commitment to excellence drives us to deliver top-tier technology.
            </p>
            <button 
              onClick={() => window.open('https://www.asocsemi.com/', '_blank')}
              className="mt-6 px-8 py-3 bg-coral text-white text-xs font-bold rounded-full uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg shadow-coral/10"
            >
              Get Started
            </button>
          </div>
        </div>

        <h1 className="text-4xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 uppercase">
          Empowering <br />
          <span className="text-coral">Integrated Tech</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium tracking-wide">
          You Believe, We Build. Delivering world-class expertise in Silicon Engineering, AI/ML, and Software Ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => navigateTo('services')}
            className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-coral hover:text-white transition-all uppercase tracking-widest text-xs shadow-xl"
          >
            Our Services
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className="px-10 py-5 border-2 border-white/20 hover:border-white transition-all font-black rounded-full uppercase tracking-widest text-xs"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
