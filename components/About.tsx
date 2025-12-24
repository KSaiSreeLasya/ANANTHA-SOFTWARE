import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-color-bg via-color-bg-light to-color-bg section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-primary/8 via-transparent to-transparent rounded-full blur-3xl opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-0 -left-1/3 w-1/2 h-1/2 bg-gradient-to-tr from-accent/8 via-transparent to-transparent rounded-full blur-3xl opacity-40 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">About Anantha Software</p>
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tight">About Us</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-text-secondary font-bold tracking-widest uppercase text-sm mb-8">Driving Innovation Through Excellence</p>
          <p className="text-text-secondary max-w-4xl mx-auto leading-relaxed font-medium text-lg">
            Founded in 2021 by visionary VLSI-DV Engineers and software developers, Anantha Software has evolved into a premier provider of cutting-edge VLSI, semiconductor, and software solutions. We combine deep technical expertise with a commitment to innovation.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="group relative animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="relative gradient-card p-10 rounded-2xl card-hover border-primary/30">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-400">Deep Expertise</h3>
                  <p className="text-text-muted group-hover:text-text-secondary transition-colors duration-400">
                    Our team brings decades of combined experience in VLSI design, semiconductor engineering, AI/ML, and software development across diverse industries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="relative gradient-card p-10 rounded-2xl card-hover border-primary/30">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-400">Quality First</h3>
                  <p className="text-text-muted group-hover:text-text-secondary transition-colors duration-400">
                    We follow industry best practices and rigorous testing methodologies to deliver reliable, scalable, and production-ready solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            <div className="relative gradient-card p-12 md:p-16 rounded-2xl card-hover border-primary/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-6 text-center group-hover:text-accent transition-colors duration-500">Training the Next Generation</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-accent via-primary to-accent mx-auto mb-12 rounded-full"></div>
                <div className="space-y-6 text-text-secondary text-sm md:text-base leading-relaxed font-medium">
                  <p className="group-hover:text-white transition-colors duration-500">
                    We invest in developing talent across VLSI, AI/ML, and hardware-software integration. Our training programs equip engineers with cutting-edge skills, enabling them to tackle complex challenges and drive innovation in their projects.
                  </p>
                  <p className="group-hover:text-white transition-colors duration-500">
                    By maintaining a pool of skilled, trained professionals ready for deployment, we provide our clients with flexible, agile resource management and ensure rapid project scaling without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
