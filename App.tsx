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
            <div className="bg-gradient-to-b from-white via-gray-50 to-white py-44 border-t border-gray-200 relative overflow-hidden" style={{boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.06)'}}>
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/12 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-float" style={{animation: 'float 22s ease-in-out infinite'}}></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/12 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float-slow" style={{animation: 'floatSlow 28s ease-in-out infinite'}}></div>
                <div className="absolute top-1/2 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-40" style={{animation: 'float 24s ease-in-out infinite 3s'}}></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="inline-block mb-12 animate-fade-in-up" style={{animationDuration: '0.8s'}}>
                  <div className="px-8 py-3.5 text-secondary text-xs font-bold uppercase tracking-widest border border-secondary/50 rounded-full bg-gradient-to-r from-secondary/14 to-secondary/6 backdrop-blur-xl" style={{boxShadow: '0 0 40px rgba(251, 191, 36, 0.25)'}}>
                    Our Core Strength
                  </div>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 uppercase tracking-tight animate-fade-in-up" style={{animationDelay: '0.1s', animationDuration: '0.8s', lineHeight: '1.1', letterSpacing: '-0.02em'}}>
                  <span className="text-gradient inline-block" style={{backgroundImage: 'linear-gradient(120deg, #fbbf24 0%, #14b8a6 50%, #3b82f6 100%)', backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradient-shift 8s ease infinite'}}>Excellence in Engineering</span>
                </h2>

                <div className="h-2 w-40 bg-gradient-to-r from-secondary via-accent to-primary mx-auto mb-16 animate-fade-in-up rounded-full" style={{animationDelay: '0.2s', animationDuration: '0.8s', boxShadow: '0 0 40px rgba(251, 191, 36, 0.4)'}}></div>

                <div className="group relative animate-fade-in-up" style={{animationDelay: '0.3s', animationDuration: '0.8s'}}>
                  <p className="text-text-secondary max-w-4xl mx-auto leading-relaxed text-lg md:text-xl font-light" style={{letterSpacing: '0.4px', fontWeight: '300'}}>
                    Anantha Software is a global leader in Silicon Engineering and Integrated Solutions.
                    We specialize in VLSI, AI/ML development, and bespoke software applications, driving innovation across industries.
                  </p>
                  <div className="absolute -inset-8 bg-gradient-to-r from-secondary/0 via-secondary/12 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 blur-2xl rounded-xl -z-10 pointer-events-none"></div>
                </div>

                <div className="mt-24 animate-fade-in-up" style={{animationDelay: '0.4s', animationDuration: '0.8s'}}>
                  <button
                    onClick={() => navigateTo('services')}
                    className="px-16 py-6 border-2.5 border-secondary text-secondary font-bold rounded-2xl uppercase tracking-wider text-sm transition-all duration-600 relative group overflow-hidden hover:bg-gradient-to-r hover:from-secondary/22 hover:to-secondary/12 hover:shadow-lg hover:shadow-secondary/40 hover:scale-110 active:scale-95 bg-gradient-to-r from-secondary/10 to-secondary/4"
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
      <div className="relative min-h-screen flex flex-col bg-white text-gray-900 selection:bg-coral selection:text-white">
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
