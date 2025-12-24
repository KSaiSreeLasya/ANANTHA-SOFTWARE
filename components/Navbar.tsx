import React, { useState } from 'react';
import { useAuth } from '../lib/authContext';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userProfile, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      onNavigate('home');
      setIsOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
      // Navigate to home even if logout fails
      onNavigate('home');
      setIsOpen(false);
    }
  };

  const getUserDisplayName = () => {
    if (userProfile?.first_name && userProfile?.last_name) {
      return `${userProfile.first_name} ${userProfile.last_name}`;
    }
    return user?.email || 'User';
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Vision', id: 'vision' },
    { label: 'About us', id: 'about' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
    { label: 'ASOCSEMI', id: 'asocsemi', external: true, href: 'https://www.asocsemi.com/' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-color-bg via-color-bg to-color-bg/95 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdd826854f6f44d3b95695750dd149fd4%2F69ef4033ddb2424b84ea4261dc960c9c?format=webp&width=1200"
                alt="Anantha Software"
                className="h-16 w-auto filter brightness-110 group-hover:brightness-125 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item: any, index: number) => (
                <a
                  key={item.id}
                  href={item.external ? item.href : `#${item.id}`}
                  onClick={item.external ? undefined : (e) => handleLinkClick(e, item.id)}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`px-3.5 py-2 text-sm font-semibold transition-all duration-400 relative group border-b-2 ${
                    activePage === item.id
                      ? 'text-primary border-b-primary'
                      : 'text-text-muted border-b-transparent hover:text-primary hover:border-b-primary/50'
                  }`}
                  style={{animation: `fadeInUp 0.6s ease-out ${0.06 * index}s backwards`}}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activePage === item.id && (
                    <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary animate-glow" style={{boxShadow: '0 0 10px rgba(31, 111, 235, 0.4)'}}></div>
                  )}
                </a>
              ))}

              <div className="ml-8 flex items-center space-x-4 pl-8 border-l border-primary/20">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 text-text-secondary group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-scale"></div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors duration-400">{getUserDisplayName()}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-400 group relative"
                    >
                      <span className="relative z-10">Logout</span>
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-400"></div>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onNavigate('login')}
                      className="flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-all duration-400 group relative"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Log In
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-400"></div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/15 transition-all duration-400 active:scale-90 border border-transparent hover:border-primary/30 group"
            >
              <svg className="h-6 w-6 transition-transform duration-400 group-hover:rotate-90" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-primary/8 via-primary/4 to-transparent border-b border-primary/20 animate-slide-in-down">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navItems.map((item: any, index: number) => (
              <a
                key={item.id}
                href={item.external ? item.href : `#${item.id}`}
                onClick={item.external ? undefined : (e) => handleLinkClick(e, item.id)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`block px-4 py-3.5 text-base font-semibold rounded-lg transition-all duration-400 group relative overflow-hidden ${
                  activePage === item.id
                    ? 'text-primary bg-primary/12 border-l-2 border-primary shadow-lg shadow-primary/20'
                    : 'text-text-muted hover:text-primary hover:bg-primary/10 border-l-2 border-transparent hover:border-primary/50'
                }`}
                style={{animation: `slideInLeft 0.5s ease-out ${0.06 * index}s backwards`}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
            <div className="pt-6 border-t border-primary/20 flex flex-col space-y-3">
              {user ? (
                <>
                  <div className="px-4 py-3 flex items-center space-x-2.5 rounded-lg bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 group cursor-default">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse-scale"></div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-primary transition-colors duration-400">{getUserDisplayName()}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-3 text-text-muted font-medium hover:text-primary hover:bg-primary/12 transition-all duration-400 rounded-lg border border-transparent hover:border-primary/30"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => onNavigate('login')}
                  className="text-left px-4 py-3 text-primary font-semibold hover:bg-primary/15 transition-all duration-400 rounded-lg border border-primary/30 hover:border-primary/60"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
