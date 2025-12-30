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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

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
      case 'privacy':
        return <PrivacyPolicy onNavigate={navigateTo} />;
      case 'terms':
        return <TermsAndConditions onNavigate={navigateTo} />;
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
            <div className="bg-gradient-to-b from-white via-white to-white py-44 border-t border-slate-200 relative overflow-hidden" style={{boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8)'}}>
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{animation: 'float 26s ease-in-out infinite'}}></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-float-slow" style={{animation: 'floatSlow 32s ease-in-out infinite'}}></div>
                <div className="absolute top-1/2 right-10 w-72 h-72 bg-primary/8 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{animation: 'float 28s ease-in-out infinite 3s'}}></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="inline-block mb-12 animate-fade-in-up" style={{animationDuration: '0.7s'}}>
                  <div className="px-8 py-3.5 text-secondary text-xs font-bold uppercase tracking-widest border border-secondary/35 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/4 backdrop-blur-sm" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.2)'}}>
                    Our Core Strength
                  </div>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 uppercase tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s', animationDuration: '0.7s', lineHeight: '1.1', letterSpacing: '-0.02em'}}>
                  <span className="text-gradient inline-block" style={{backgroundImage: 'linear-gradient(120deg, #fbbf24 0%, #14b8a6 50%, #3b82f6 100%)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradient-shift 8s ease infinite'}}>Excellence in Engineering</span>
                </h2>

                <div className="h-2 w-40 bg-gradient-to-r from-secondary via-accent to-primary mx-auto mb-16 animate-fade-in-up rounded-full" style={{animationDelay: '0.2s', animationDuration: '0.7s', boxShadow: '0 0 25px rgba(251, 191, 36, 0.25)'}}></div>

                <div className="group relative animate-fade-in-up" style={{animationDelay: '0.3s', animationDuration: '0.7s'}}>
                  <p className="text-text-secondary max-w-4xl mx-auto leading-relaxed text-lg md:text-xl font-normal" style={{letterSpacing: '0.3px', fontWeight: '400'}}>
                    Anantha Software is a global leader in Silicon Engineering and Integrated Solutions.
                    We specialize in VLSI, AI/ML development, and bespoke software applications, driving innovation across industries.
                  </p>
                  <div className="absolute -inset-8 bg-gradient-to-r from-secondary/0 via-secondary/8 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-2xl rounded-xl -z-10 pointer-events-none"></div>
                </div>

                <div className="mt-24 animate-fade-in-up" style={{animationDelay: '0.4s', animationDuration: '0.7s'}}>
                  <button
                    onClick={() => navigateTo('services')}
                    className="px-16 py-6 border-2.5 border-secondary text-secondary font-bold rounded-2xl uppercase tracking-wider text-sm transition-all duration-600 relative group overflow-hidden hover:bg-gradient-to-r hover:from-secondary/18 hover:to-secondary/10 hover:shadow-md hover:shadow-secondary/30 hover:scale-105 active:scale-98 bg-gradient-to-r from-secondary/8 to-secondary/3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Explore Our Expertise
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
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
      <div className="relative min-h-screen flex flex-col bg-white text-slate-900 selection:bg-secondary selection:text-white">
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
