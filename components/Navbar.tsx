
import React, { useState } from 'react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Vision', id: 'vision' },
    { label: 'About us', id: 'about' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
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
            className="flex-shrink-0 flex flex-col cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <span className="text-xl font-bold tracking-tighter text-white uppercase group-hover:text-coral transition-colors">
              ANANTHA SOFTWARE
            </span>
            <span className="text-[10px] tracking-[0.3em] text-coral font-semibold uppercase -mt-1">
              Engineering Future
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activePage === item.id
                      ? 'text-coral'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="ml-4 flex items-center space-x-6 border-l border-white/10 pl-6 h-6">
                <button className="flex items-center text-sm font-medium text-gray-300 hover:text-white">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Log In
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="border border-white/30 text-white px-6 py-2 rounded text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
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
        <div className="lg:hidden bg-[#0a0a0a] border-b border-white/10 shadow-2xl animate-in fade-in duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`block px-4 py-4 text-base font-semibold ${
                  activePage === item.id ? 'text-coral bg-white/5' : 'text-gray-300 hover:text-coral'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-white/5 flex flex-col space-y-4">
              <button className="text-left px-4 py-3 text-gray-400 font-medium">Log In</button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-coral py-4 rounded-xl text-white font-bold text-center uppercase tracking-widest shadow-lg shadow-coral/20"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
