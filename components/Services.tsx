import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] section-padding wavy-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-coral font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
            EMPOWERING THE FUTURE OF <span className="text-gradient">TECHNOLOGY</span> AND ENGINEERING
          </h2>
          <div className="divider-coral w-12 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">Comprehensive solutions designed to accelerate innovation</p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Integrated Hardware/Software */}
          <div className="gradient-card p-10 rounded-xl card-hover flex gap-6 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 11V16M12 11L12 11.01M12 11L15 8M12 11L9 8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold mb-3 group-hover:text-coral transition-colors duration-300">Integrated Hardware and Software Solutions</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                At Anantha Software, we specialize in developing integrated hardware and software solutions that support the semiconductor, AI/ML, and IoT industries across many domains such as consumer durables, storage, automotive, wireless, and data center.
              </p>
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
          <div className="p-12 border-b border-r border-white/10 flex gap-6">
            <div className="w-16 h-16 bg-purple-600/20 rounded flex items-center justify-center flex-shrink-0 text-purple-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6m7-15H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H4v-5h12v5zm0-7H4V8h12v6z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Software Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-spectrum software development services including web applications, mobile apps, and enterprise solutions with focus on scalability, security, and performance.
              </p>
            </div>
          </div>

          {/* Cloud Services */}
          <div className="p-12 border-b border-white/10 flex gap-6">
            <div className="w-16 h-16 bg-cyan-600/20 rounded flex items-center justify-center flex-shrink-0 text-cyan-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c2.21 0 4 1.79 4 4 0 2.05-1.53 3.76-3.56 3.97l1.07-1.07c.63-.63.63-1.65 0-2.28-.63-.63-1.65-.63-2.28 0l-2.28 2.28c-.31.31-.46.72-.46 1.14 0 .42.15.83.46 1.14l2.28 2.28c.63.63 1.65.63 2.28 0 .63-.63.63-1.65 0-2.28L23 17.5c2.21 0 4-1.79 4-4 0-2.05-1.53-3.76-3.56-3.97l1.07-1.07c.63-.63.63-1.65 0-2.28-.63-.63-1.65-.63-2.28 0z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Cloud Services</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive cloud infrastructure solutions including deployment, management, and optimization on AWS, Azure, and Google Cloud Platform.
              </p>
            </div>
          </div>

          {/* Data Engineering */}
          <div className="p-12 border-b border-r border-white/10 flex gap-6">
            <div className="w-16 h-16 bg-emerald-600/20 rounded flex items-center justify-center flex-shrink-0 text-emerald-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19V5m0 0L5 9m4-4l4-4m6 8v6m0 0l-4-4m4 4l4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Data Engineering</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                End-to-end data engineering solutions including data pipeline design, ETL/ELT processes, data warehousing, and real-time analytics architecture.
              </p>
            </div>
          </div>

          {/* SAP Solutions */}
          <div className="p-12 border-b border-white/10 flex gap-6">
            <div className="w-16 h-16 bg-orange-600/20 rounded flex items-center justify-center flex-shrink-0 text-orange-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">SAP Solutions</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enterprise resource planning implementation, customization, and support for SAP ERP systems including module configuration and system integration.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-24 border-t border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">Driving Technological Advancements</h3>
            <div className="h-0.5 w-12 bg-coral mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { val: '4', label: 'Years of Expertise' },
              { val: '3', label: 'Technology Partnerships' },
              { val: '50+', label: 'Engineering Team' },
              { val: '3', label: 'Global Presence' },
              { val: '2', label: 'Industry Awards' }
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-5xl font-bold text-coral mb-2">{s.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
