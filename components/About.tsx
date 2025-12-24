import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-coral font-bold tracking-[0.3em] uppercase text-xs mb-4">About Anantha Software</p>
          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase tracking-tight">About Us</h2>
          <div className="divider-coral w-12 mx-auto mb-8"></div>
          <p className="text-coral font-bold tracking-widest uppercase text-sm mb-8">Finding Inspiration in Every Turn</p>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium text-lg">
            ANANTHA SOFTWARE was founded in 2021 by a group of VLSI-DV Engineers & software developers with a passion for creating innovative solutions. Over the years, we have grown into a leading VLSI-SOC & IP service providers and software development company, serving clients in a wide range of industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="gradient-card p-10 rounded-xl card-hover text-center md:text-right group">
            <h3 className="text-5xl font-black text-white/10 uppercase tracking-[0.2em] mb-4 group-hover:text-coral/30 transition-colors duration-300">EXPERTISE</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Our team consists of experienced software developers and designers who have worked on a variety of projects. We have expertise in a range of technologies and tools, including cloud computing, machine learning, and blockchain technology.
            </p>
          </div>
          <div className="gradient-card p-10 rounded-xl card-hover text-center md:text-left group">
            <h3 className="text-5xl font-black text-white/10 uppercase tracking-[0.2em] mb-4 group-hover:text-coral/30 transition-colors duration-300">QUALITY</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              We are committed to delivering high-quality software solutions to our clients. Our team follows best practices in software development and testing to ensure that our clients receive a reliable and bug-free product.
            </p>
          </div>
        </div>

        <div className="gradient-card p-14 rounded-2xl backdrop-blur-md card-hover group">
           <h3 className="text-4xl font-bold mb-6 text-center group-hover:text-coral transition-colors duration-300">Training the Best</h3>
           <div className="divider-coral w-12 mx-auto mb-12"></div>
           <div className="space-y-6 text-gray-300 text-sm leading-relaxed font-medium">
              <p>Training candidates on domains like VLSI, AI, and supporting hardware and software is a strategic investment for any technology-focused organization. It equips the workforce with specialized skills, enabling them to work on complex projects and remain at the forefront of innovation. Providing training offers several benefits, including customization to fit company-specific needs and fostering a culture of continuous learning. It also allows for cross-functional collaboration, encouraging employees to share knowledge across teams.</p>
              <p>Keeping trained candidates "on the bench" — ready to be deployed when needed — ensures flexibility in resource management. This approach can reduce project downtime and provide a pool of skilled talent for new or unexpected projects, ultimately contributing to a more agile and adaptable organization.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
