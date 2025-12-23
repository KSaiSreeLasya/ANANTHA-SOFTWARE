
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Vision from './components/Vision';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  // Use state to track the current "page"
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  // Function to handle navigation globally
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo(0, 0);
  };

  // Sync state if user uses browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== currentPage) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  // Component switcher
  const renderContent = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'vision':
        return <Vision />;
      case 'about':
        return <About />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <Hero navigateTo={navigateTo} />
            <div className="bg-[#0a0a0a] py-24 border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-coral mb-6 uppercase tracking-[0.2em]">Excellence in Engineering</h2>
                <div className="h-1 w-20 bg-coral mx-auto mb-10"></div>
                <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                  Anantha Software is a global leader in Silicon Engineering and Integrated Solutions. 
                  We specialize in VLSI, AI/ML development, and bespoke software applications.
                </p>
                <div className="mt-12">
                  <button 
                    onClick={() => navigateTo('services')}
                    className="px-10 py-4 border border-coral text-coral font-bold rounded-full hover:bg-coral hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
                  >
                    Explore Our Expertise
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-coral selection:text-white">
      <Navbar activePage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-grow pt-20">
        <div key={currentPage} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {renderContent()}
        </div>
      </main>

      <Footer onNavigate={navigateTo} />
      <ChatBot />
    </div>
  );
};

export default App;
