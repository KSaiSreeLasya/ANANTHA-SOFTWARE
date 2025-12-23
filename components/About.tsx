
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">About Us</h2>
          <p className="text-coral font-bold tracking-widest uppercase text-sm">Finding Inspiration in Every Turn</p>
          <p className="mt-8 text-gray-400 max-w-4xl mx-auto leading-relaxed">
            ANANTHA SOFTWARE was founded in 2021 by a group of VLSI-DV Engineers & software developers with a passion for creating innovative solutions. Over the years, we have grown into a leading VLSI -SOC & IP service providers and software development company, serving clients in a wide range of industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="text-center md:text-right">
            <h3 className="text-3xl font-black text-white/20 uppercase tracking-[0.2em] mb-4">EXPERTISE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our team consists of experienced software developers and designers who have worked on a variety of projects. We have expertise in a range of technologies and tools, including cloud computing, machine learning, and blockchain technology.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-white/20 uppercase tracking-[0.2em] mb-4">QUALITY</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are committed to delivering high-quality software solutions to our clients. Our team follows best practices in software development and testing to ensure that our clients receive a reliable and bug-free product.
            </p>
          </div>
        </div>

        <div className="bg-white/5 p-12 rounded-3xl backdrop-blur-sm border border-white/5">
           <h3 className="text-3xl font-bold mb-6 text-center">Training the best</h3>
           <div className="h-0.5 w-12 bg-white/20 mx-auto mb-10"></div>
           <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
              <p>Training candidates on domains like VLSI, AI, and supporting hardware and software is a strategic investment for any technology-focused organization. It equips the workforce with specialized skills, enabling them to work on complex projects and remain at the forefront of innovation. Providing training offers several benefits, including customization to fit company-specific needs and fostering a culture of continuous learning. It also allows for cross-functional collaboration, encouraging employees to share knowledge across teams.</p>
              <p>Keeping trained candidates "on the bench" — ready to be deployed when needed — ensures flexibility in resource management. This approach can reduce project downtime and provide a pool of skilled talent for new or unexpected projects, ultimately contributing to a more agile and adaptable organization.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
