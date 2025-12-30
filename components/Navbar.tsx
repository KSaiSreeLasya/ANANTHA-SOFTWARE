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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white via-white to-white backdrop-blur-sm border-b border-slate-200 shadow-sm" style={{boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center gap-8">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95 group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdd826854f6f44d3b95695750dd149fd4%2F69ef4033ddb2424b84ea4261dc960c9c?format=webp&width=1200"
                alt="ASOCSEMI"
                className="h-14 w-auto filter brightness-110 group-hover:brightness-130 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg"></div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-12 flex items-center space-x-2">
              {navItems.map((item: any, index: number) => (
                <a
                  key={item.id}
                  href={item.external ? item.href : `#${item.id}`}
                  onClick={item.external ? undefined : (e) => handleLinkClick(e, item.id)}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`px-6 py-2.5 text-sm font-semibold transition-all duration-500 relative group border-b-2 rounded-xl overflow-hidden ${
                    activePage === item.id
                      ? 'text-secondary border-b-secondary bg-gradient-to-br from-yellow-50 to-yellow-25 shadow-md shadow-secondary/10'
                      : 'text-slate-600 border-b-transparent hover:text-secondary hover:border-b-secondary/50 hover:bg-gradient-to-br from-yellow-50 to-white hover:shadow-sm hover:shadow-secondary/5'
                  }`}
                  style={{animation: `fadeInUp 0.6s ease-out ${0.06 * index}s backwards`}}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg rounded-lg -z-10"></div>
                  <span className="relative z-10 flex items-center justify-center">{item.label}</span>
                  {activePage === item.id && (
                    <div className="absolute -bottom-0.5 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-accent to-secondary animate-glow rounded-full" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.7)'}}></div>
                  )}
                </a>
              ))}

              <div className="ml-8 flex items-center space-x-4 pl-8 border-l border-secondary/25">
                {user ? (
                  <>
                    <div className="flex items-center space-x-3 text-slate-700 group cursor-default px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-50 to-white border border-secondary/25 hover:border-secondary/40 transition-all duration-500 hover:shadow-sm hover:shadow-secondary/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-secondary to-accent animate-pulse-scale"></div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary group-hover:text-yellow-600 transition-colors duration-500">{getUserDisplayName()}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-semibold text-slate-600 hover:text-secondary transition-all duration-500 group relative px-5 py-2.5 rounded-xl hover:bg-yellow-50 border border-transparent hover:border-secondary/25 hover:shadow-sm hover:shadow-secondary/5"
                    >
                      <span className="relative z-10">Logout</span>
                      <div className="absolute bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-accent group-hover:w-[calc(100%-10px)] transition-all duration-500 rounded-full"></div>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onNavigate('login')}
                      className="flex items-center text-xs font-bold text-secondary hover:text-yellow-600 transition-all duration-500 group relative px-7 py-3 rounded-xl hover:bg-gradient-to-br hover:from-secondary/15 hover:to-secondary/8 border border-secondary/40 hover:border-secondary/60 uppercase tracking-wider hover:shadow-md hover:shadow-secondary/15"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg rounded-lg -z-10"></div>
                      <svg className="w-4 h-4 mr-2.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="relative z-10">Log In</span>
                      <div className="absolute bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-accent group-hover:w-[calc(100%-14px)] transition-all duration-500 rounded-full"></div>
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
              className="p-2 text-text-muted hover:text-primary transition-colors duration-400 group"
            >
              <svg className="h-6 w-6 transition-transform duration-400 group-hover:scale-110" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-200 animate-slide-in-down" style={{boxShadow: '0 8px 32px rgba(31, 111, 235, 0.08)'}}>
          <div className="px-4 pt-3 pb-8 space-y-2">
            {navItems.map((item: any, index: number) => (
              <a
                key={item.id}
                href={item.external ? item.href : `#${item.id}`}
                onClick={item.external ? undefined : (e) => handleLinkClick(e, item.id)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`block px-4 py-3.5 text-base font-semibold transition-all duration-500 group relative border-l-3 rounded-r-lg ${
                  activePage === item.id
                    ? 'text-secondary border-l-secondary bg-gradient-to-r from-yellow-100 to-yellow-50'
                    : 'text-gray-600 hover:text-secondary border-l-transparent hover:border-l-secondary/60 hover:bg-gradient-to-r from-yellow-50 to-white'
                }`}
                style={{animation: `slideInLeft 0.5s ease-out ${0.06 * index}s backwards`}}
              >
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
            <div className="pt-6 border-t border-secondary/30 flex flex-col space-y-3">
              {user ? (
                <>
                  <div className="px-4 py-3.5 flex items-center space-x-2.5 text-gray-700 group cursor-default rounded-lg bg-yellow-100 border border-secondary/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-secondary to-accent animate-pulse-scale"></div>
                    <span className="text-xs font-semibold uppercase tracking-wider group-hover:text-secondary transition-colors duration-500">{getUserDisplayName()}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-3.5 text-gray-600 font-semibold hover:text-secondary transition-all duration-500 group relative rounded-lg hover:bg-yellow-50 border border-transparent hover:border-secondary/35 uppercase text-xs tracking-wider"
                  >
                    Logout
                    <div className="absolute bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-accent group-hover:w-8 transition-all duration-500 rounded-full"></div>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => onNavigate('login')}
                  className="text-left px-4 py-3.5 text-secondary font-bold hover:text-orange-600 transition-all duration-500 group relative rounded-lg hover:bg-yellow-50 border border-secondary/30 uppercase text-xs tracking-wider"
                >
                  Log In
                  <div className="absolute bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-secondary to-accent group-hover:w-12 transition-all duration-500 rounded-full"></div>
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
