import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="section-padding bg-gradient-to-b from-color-bg via-color-bg-light to-color-bg wavy-bg relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-20 animate-float" style={{animation: 'float 15s ease-in-out infinite'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 bg-primary rounded-full inline-block mr-2 animate-pulse-smooth"></span>
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 animate-fade-in-up">
            Comprehensive <span className="text-gradient">Technology Solutions</span>
          </h2>
          <div className="divider w-12 mx-auto mb-8"></div>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed font-medium animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            End-to-end engineering and software solutions designed for businesses that demand excellence and innovation.
          </p>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Integrated Hardware/Software */}
          <div className="gradient-card-subtle p-8 rounded-2xl card-hover group border-primary/40 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-125 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 11V16M12 11L12 11.01M12 11L15 8M12 11L9 8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">Integrated Hardware & Software</h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  End-to-end solutions for semiconductor, AI/ML, and IoT industries across consumer, storage, automotive, wireless, and data center domains.
                </p>
              </div>
            </div>
          </div>

          {/* Silicon Engineering */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600/30 to-indigo-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-4 group-hover:text-coral transition-colors duration-300">Silicon Engineering</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><span className="text-coral mr-2">•</span> Architecture</li>
                <li className="flex items-center"><span className="text-coral mr-2">•</span> RTL Design & Integration</li>
                <li className="flex items-center"><span className="text-coral mr-2">•</span> Design Verification</li>
                <li className="flex items-center"><span className="text-coral mr-2">•</span> FPGA Prototyping and Emulation</li>
                <li className="flex items-center"><span className="text-coral mr-2">•</span> Design For Test (DFT)</li>
                <li className="flex items-center"><span className="text-coral mr-2">•</span> Physical Design</li>
                <li className="flex items-center"><span className="text-coral mr-2">•</span> Analog & Mixed Signal</li>
              </ul>
            </div>
          </div>

          {/* AI/ML Development */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600/30 to-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-red-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-3 group-hover:text-coral transition-colors duration-300">Advanced AI/ML Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team excels in advanced AI/ML development, leveraging cutting-edge technologies to accelerate data science and provide valuable insights for your business.
              </p>
            </div>
          </div>

          {/* Advanced AI/ML - Tech Stack */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-600/30 to-rose-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-rose-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-4 group-hover:text-coral transition-colors duration-300">Tech Stack & Cloud</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-white mb-1.5 flex items-center"><span className="w-2 h-2 bg-coral rounded-full mr-2"></span>AI and Edge AI</p>
                  <p className="text-xs text-gray-500 ml-5">NLP, LLM, Responsible AI, Generative AI</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1.5 flex items-center"><span className="w-2 h-2 bg-coral rounded-full mr-2"></span>Cloud Technologies</p>
                  <p className="text-xs text-gray-500 ml-5">Azure, AWS, Zoho, G-suite</p>
                </div>
              </div>
            </div>
          </div>

          {/* Software Development */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6m7-15H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H4v-5h12v5zm0-7H4V8h12v6z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-3 group-hover:text-coral transition-colors duration-300">Software Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-spectrum software development services including web applications, mobile apps, and enterprise solutions with focus on scalability, security, and performance.
              </p>
            </div>
          </div>

          {/* Cloud Services */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/30 to-cyan-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c2.21 0 4 1.79 4 4 0 2.05-1.53 3.76-3.56 3.97l1.07-1.07c.63-.63.63-1.65 0-2.28-.63-.63-1.65-.63-2.28 0l-2.28 2.28c-.31.31-.46.72-.46 1.14 0 .42.15.83.46 1.14l2.28 2.28c.63.63 1.65.63 2.28 0 .63-.63.63-1.65 0-2.28L23 17.5c2.21 0 4-1.79 4-4 0-2.05-1.53-3.76-3.56-3.97l1.07-1.07c.63-.63.63-1.65 0-2.28-.63-.63-1.65-.63-2.28 0z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-3 group-hover:text-coral transition-colors duration-300">Cloud Services</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive cloud infrastructure solutions including deployment, management, and optimization on AWS, Azure, and Google Cloud Platform.
              </p>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600/30 to-emerald-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19V5m0 0L5 9m4-4l4-4m6 8v6m0 0l-4-4m4 4l4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-3 group-hover:text-coral transition-colors duration-300">Data Engineering</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                End-to-end data engineering solutions including data pipeline design, ETL/ELT processes, data warehousing, and real-time analytics architecture.
              </p>
            </div>
          </div>

          {/* SAP Solutions */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600/30 to-orange-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-orange-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-3 group-hover:text-coral transition-colors duration-300">SAP Solutions</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enterprise resource planning implementation, customization, and support for SAP ERP systems including module configuration and system integration.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-20 border-t border-white/10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">Driving Technological Advancements</h3>
            <div className="divider-coral w-12 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { val: '4', label: 'Years of Expertise' },
              { val: '3', label: 'Technology Partnerships' },
              { val: '50+', label: 'Engineering Team' },
              { val: '3', label: 'Global Presence' },
              { val: '2', label: 'Industry Awards' }
            ].map(s => (
              <div key={s.label} className="gradient-card p-8 rounded-xl text-center card-hover group">
                <div className="text-4xl md:text-5xl font-black text-coral mb-3 group-hover:text-teal transition-colors duration-300">{s.val}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
