import React from 'react';

const Vision: React.FC = () => {
  return (
    <div className="section-padding relative" style={{backgroundColor: '#FFFFFF'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 animate-fade-in-up">
          <p className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">Our Foundation</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight text-text">Our Mission</h2>
          <div className="divider w-16 mb-8"></div>
          <p className="text-lg text-text-secondary max-w-4xl leading-relaxed font-medium hover:text-text transition-colors duration-500">
            At Anantha Software, we specialize in developing integrated hardware and software solutions that support the semiconductor, AI/ML, and IoT industries across many domains such as consumer durables, storage, automotive, wireless, and data center. Our mission is to provide cutting-edge technological solutions that drive innovation and empower businesses to achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          <div className="relative h-[400px] flex items-center justify-center p-12 bg-gradient-to-br from-secondary/12 to-white rounded-2xl overflow-hidden card-hover group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
             <div className="absolute inset-0 opacity-35 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
             <h3 className="relative text-3xl font-bold tracking-widest uppercase z-10 text-center text-text group-hover:text-secondary transition-colors duration-500">Our Story</h3>
          </div>
          <div className="gradient-card p-12 flex flex-col justify-center rounded-2xl card-hover animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             <p className="text-text-secondary text-sm leading-relaxed font-medium group-hover:text-text transition-colors duration-500">
                Anantha Software was founded with the vision of revolutionizing the technology and engineering landscape. Our journey began with a passion for creating impactful solutions that redefine industry standards. Today, we stand as a team dedicated to excellence, constantly pushing boundaries to deliver unmatched quality and reliability in every project we undertake.
             </p>
          </div>

          <div className="gradient-card p-12 flex flex-col justify-center rounded-2xl card-hover order-2 md:order-1 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
             <p className="text-text-secondary text-sm leading-relaxed font-medium group-hover:text-text transition-colors duration-500">
                Anantha Software is led by a team of experienced professionals who bring a wealth of knowledge and expertise to the table. Our leadership is committed to driving the company forward with a focus on innovation, collaboration, and customer satisfaction. Together, we strive to shape the future of technology and engineering services, setting new benchmarks for excellence.
             </p>
          </div>
          <div className="relative h-[400px] flex items-center justify-center p-12 bg-gradient-to-bl from-accent/15 to-white rounded-2xl overflow-hidden card-hover group order-1 md:order-2 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <div className="absolute inset-0 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Leadership" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
             <h3 className="relative text-3xl font-bold tracking-widest uppercase text-right z-10 text-center md:text-right text-text group-hover:text-accent transition-colors duration-500">Experienced Leadership</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
