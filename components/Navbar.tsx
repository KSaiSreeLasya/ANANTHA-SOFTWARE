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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => onNavigate('home')}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fdd826854f6f44d3b95695750dd149fd4%2F69ef4033ddb2424b84ea4261dc960c9c?format=webp&width=1200"
              alt="Anantha Software"
              className="h-20 w-auto filter brightness-110"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-0.5">
              {navItems.map((item: any, index: number) => (
                <a
                  key={item.id}
                  href={item.external ? item.href : `#${item.id}`}
                  onClick={item.external ? undefined : (e) => handleLinkClick(e, item.id)}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 relative group ${
                    activePage === item.id
                      ? 'text-primary'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                  style={{animation: `fadeInUp 0.5s ease-out ${0.05 * index}s backwards`}}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{item.label}</span>
                  {activePage === item.id && (
                    <div className="absolute bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-glow"></div>
                  )}
                </a>
              ))}

              <div className="ml-6 flex items-center space-x-3 border-l border-white/10 pl-6">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2.5 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse-smooth group-hover:animate-glow"></div>
                      <span className="text-sm font-medium text-text-secondary group-hover:text-primary transition-colors duration-300">{getUserDisplayName()}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-medium text-text-muted hover:text-primary transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/10 group"
                    >
                      <span className="relative z-10">Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onNavigate('login')}
                      className="flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-all duration-300 px-4 py-2 rounded-lg hover:bg-primary/10 group"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Log In
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
              className="p-2.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300 active:scale-90"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
        <div className="lg:hidden bg-gradient-to-b from-primary/5 to-transparent border-b border-primary/20 animate-fade-in-up">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navItems.map((item: any, index: number) => (
              <a
                key={item.id}
                href={item.external ? item.href : `#${item.id}`}
                onClick={item.external ? undefined : (e) => handleLinkClick(e, item.id)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`block px-4 py-3.5 text-base font-semibold rounded-lg transition-all duration-300 group ${
                  activePage === item.id
                    ? 'text-primary bg-primary/10 border-l-2 border-primary'
                    : 'text-text-muted hover:text-primary hover:bg-primary/10'
                }`}
                style={{animation: `slideInLeft 0.4s ease-out ${0.05 * index}s backwards`}}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-primary/20 flex flex-col space-y-3">
              {user ? (
                <>
                  <div className="px-4 py-3 flex items-center space-x-2.5 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse-smooth"></div>
                    <span className="text-sm font-medium text-text-secondary">{getUserDisplayName()}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-3 text-text-muted font-medium hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => onNavigate('login')}
                  className="text-left px-4 py-3 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 rounded-lg"
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
