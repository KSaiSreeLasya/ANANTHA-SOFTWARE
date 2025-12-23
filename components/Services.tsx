
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] py-24 wavy-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4">
            EMPOWERING THE FUTURE OF TECHNOLOGY AND ENGINEERING
          </h2>
          <div className="h-1 w-20 bg-coral mx-auto mb-4"></div>
          <p className="text-gray-400 uppercase text-xs tracking-[0.4em]">Our Services</p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10">
          {/* Integrated Hardware/Software */}
          <div className="p-12 border-b border-r border-white/10 flex gap-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded flex items-center justify-center flex-shrink-0 text-blue-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 11V16M12 11L12 11.01M12 11L15 8M12 11L9 8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Integrated Hardware and Software Solutions</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                At Anantha Software, we specialize in developing integrated hardware and software solutions that support the semiconductor, AI/ML, and IoT industries across many domains such as consumer durables, storage, automotive, wireless, and data center.
              </p>
            </div>
          </div>

          {/* Silicon Engineering */}
          <div className="p-12 border-b border-white/10 flex gap-6">
            <div>
              <h4 className="text-xl font-bold mb-4">Silicon Engineering</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Architecture</li>
                <li>• RTL Design & Integration</li>
                <li>• Design Verification</li>
                <li>• FPGA Prototyping and Emulation</li>
                <li>• Design For Test (DFT)</li>
                <li>• Physical Design</li>
                <li>• Analog & Mixed Signal</li>
              </ul>
            </div>
          </div>

          {/* AI/ML Development */}
          <div className="p-12 border-b border-r border-white/10 flex gap-6">
            <div className="w-16 h-16 bg-red-600/20 rounded flex items-center justify-center flex-shrink-0 text-red-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Advanced AI/ML Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team excels in advanced AI/ML development, leveraging cutting-edge technologies to accelerate data science and provide valuable insights for your business.
              </p>
            </div>
          </div>

          {/* Advanced AI/ML - Tech Stack */}
          <div className="p-12 border-b border-white/10">
            <h4 className="text-xl font-bold mb-4">Advanced AI/ML Development</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-white mb-1">AI and Edge AI</p>
                <p className="text-xs text-gray-500">- NLP, LLM, RESPONSIBLE AI, GENERATIVE AI....</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Cloud Technologies</p>
                <p className="text-xs text-gray-500">- Azure, AWS, Zoho, G-suite...</p>
              </div>
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
