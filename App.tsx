import React, { useState, useEffect } from 'react';
import { AuthProvider } from './lib/authContext';
import { useSeo } from './lib/useSeo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Vision from './components/Vision';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

const App: React.FC = () => {
  // Use state to track the current "page"
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });

  // Update SEO meta tags based on current page
  useSeo(currentPage);

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
      case 'login':
        return <Login onNavigate={navigateTo} />;
      case 'signup':
        return <Signup onNavigate={navigateTo} />;
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
            <div className="bg-gradient-to-b from-[#0a0a0a] via-[#0f1419] to-[#0a0a0a] py-32 border-t border-primary/10 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/8 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float" style={{animation: 'float 20s ease-in-out infinite'}}></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/8 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-slow" style={{animation: 'floatSlow 25s ease-in-out infinite'}}></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="inline-block mb-8 animate-fade-in-up" style={{animationDuration: '0.8s'}}>
                  <div className="px-6 py-2 text-primary text-xs font-semibold uppercase tracking-widest border border-primary/30 rounded-full bg-primary/8 backdrop-blur-sm">
                    Our Core Strength
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s', animationDuration: '0.8s'}}>
                  <span className="text-gradient inline-block" style={{backgroundImage: 'linear-gradient(135deg, #1f6feb 0%, #00d4ff 50%, #8b5cf6 100%)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Excellence in Engineering</span>
                </h2>

                <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 animate-fade-in-up rounded-full" style={{animationDelay: '0.2s', animationDuration: '0.8s', boxShadow: '0 0 20px rgba(31, 111, 235, 0.4)'}}></div>

                <p className="text-text-secondary max-w-3xl mx-auto leading-relaxed text-lg animate-fade-in-up group" style={{animationDelay: '0.3s', animationDuration: '0.8s'}}>
                  Anantha Software is a global leader in Silicon Engineering and Integrated Solutions.
                  We specialize in VLSI, AI/ML development, and bespoke software applications, driving innovation across industries.
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg -z-10 pointer-events-none"></div>
                </p>

                <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.4s', animationDuration: '0.8s'}}>
                  <button
                    onClick={() => navigateTo('services')}
                    className="px-12 py-5 border-2 border-primary text-primary font-bold rounded-lg uppercase tracking-widest text-sm transition-all duration-400 relative group overflow-hidden hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 bg-gradient-to-r from-primary/5 to-primary/2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <span className="relative z-10">Explore Our Expertise</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="relative min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-coral selection:text-white">
        <Navbar activePage={currentPage} onNavigate={navigateTo} />

        <main className="flex-grow pt-20">
          <div key={currentPage} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {renderContent()}
          </div>
        </main>

        <Footer onNavigate={navigateTo} />
      </div>
    </AuthProvider>
  );
};

export default App;
