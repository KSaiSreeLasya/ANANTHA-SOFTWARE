import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { getClientIp, getUserAgent } from '../lib/ipService';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Vision', id: 'vision' },
    { label: 'About Us', id: 'about' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">ANANTHA SOFTWARE</span>
              <span className="text-[10px] tracking-[0.3em] text-coral font-semibold uppercase -mt-1">Engineering Future</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
              SOLUTIONS PVT LTD,<br />
              WeWork Rajapushpa Summit,<br />
              Financial District, Hyderabad,<br />
              Telangana 500032.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    className="text-xs text-gray-500 uppercase tracking-widest hover:text-coral transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Stay Updated</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:border-coral w-full text-white text-xs"
              />
              <button className="bg-white/10 text-white px-6 py-3 rounded text-[10px] font-black hover:bg-white hover:text-black transition-all uppercase tracking-[0.2em] w-full">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex space-x-4 mb-8">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-coral hover:border-coral">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
               Work with us — <button onClick={() => onNavigate('careers')} className="text-coral hover:underline">View Openings</button>
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2024 Anantha Software Solutions. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
