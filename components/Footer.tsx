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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitting(true);
    setNewsletterError('');

    try {
      const ipAddress = await getClientIp();
      const userAgent = getUserAgent();

      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{
          email: newsletterEmail,
          ip_address: ipAddress,
          user_agent: userAgent
        }]);

      if (error) {
        if (error.code === '23505') {
          setNewsletterError('This email is already subscribed!');
        } else {
          throw error;
        }
      } else {
        setNewsletterSuccess(true);
        setNewsletterEmail('');
        setTimeout(() => setNewsletterSuccess(false), 5000);
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      setNewsletterError('Failed to subscribe. Please try again.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] border-t border-white/10 pt-24 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Company Info - Enhanced */}
          <div className="space-y-8 animate-fade-in-up group" style={{animationDelay: '0.1s'}}>
            <div className="cursor-pointer transition-all transform duration-600 hover:scale-110 hover:-translate-y-2" onClick={() => onNavigate('home')}>
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdd826854f6f44d3b95695750dd149fd4%2F69ef4033ddb2424b84ea4261dc960c9c?format=webp&width=1200"
                  alt="Anantha Software"
                  className="h-24 w-auto group-hover:brightness-150 transition-all duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 rounded-lg blur-2xl"></div>
              </div>
            </div>
            <p className="text-xs text-text-muted leading-relaxed uppercase tracking-widest font-medium group-hover:text-text-secondary transition-colors duration-600">
               ANANTHA SOFTWARE SOLUTIONS<br />
              <span className="text-text-muted/70 text-[10px]">WeWork Rajapushpa Summit,</span><br />
              <span className="text-text-muted/70 text-[10px]">Financial District, Hyderabad,</span><br />
              <span className="text-text-muted/70 text-[10px]">Telangana 500032.</span>
            </p>
          </div>

          {/* Quick Navigation - Enhanced */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-white font-bold mb-10 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link, idx) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs text-text-muted uppercase tracking-widest hover:text-primary transition-all duration-500 hover:translate-x-2 group relative px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/8"
                    style={{animation: `slideInLeft 0.6s ease-out ${0.06 * idx}s backwards`}}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg rounded-lg -z-10"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-2 transition-all duration-500"></span>
                      {link.label}
                    </span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Enhanced */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="text-white font-bold mb-10 text-sm uppercase tracking-widest">Stay Updated</h4>
            {newsletterSuccess ? (
              <div className="bg-gradient-to-r from-tertiary/35 to-tertiary/12 border border-tertiary/50 text-tertiary p-5 rounded-xl text-xs text-center font-bold animate-pulse-scale shadow-lg shadow-tertiary/25 uppercase tracking-wide">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form className="space-y-4 group" onSubmit={handleNewsletterSubmit}>
                {newsletterError && (
                  <div className="bg-red-500/25 border border-red-500/50 text-red-300 p-4 rounded-lg text-xs text-center font-bold animate-pulse-smooth uppercase tracking-wide">
                    {newsletterError}
                  </div>
                )}
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="gradient-card px-5 py-3.5 outline-none focus:border-primary focus:shadow-xl focus:shadow-primary/40 w-full text-white text-xs rounded-lg transition-all duration-500 placeholder:text-text-muted/50 focus:bg-gradient-to-br focus:from-primary/10 focus:to-primary/5"
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="btn-primary btn-primary-solid rounded-lg w-full text-[11px] font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
                >
                  {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>

          {/* Social - Enhanced */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="text-white font-bold mb-10 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex space-x-5 mb-10">
              <a href="https://www.linkedin.com/company/anantha-software/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center text-text-secondary hover:text-white hover:border-primary bg-gradient-to-br from-primary/15 to-primary/8 hover:from-primary/30 hover:to-primary/15 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/50 group active:scale-95 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center text-text-secondary hover:text-white hover:border-primary bg-gradient-to-br from-primary/15 to-primary/8 hover:from-primary/30 hover:to-primary/15 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/50 group active:scale-95 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center text-text-secondary hover:text-white hover:border-primary bg-gradient-to-br from-primary/15 to-primary/8 hover:from-primary/30 hover:to-primary/15 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/50 group active:scale-95 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.603-2.368 1.353-.75.75-1.09 1.589-1.353 2.368-.267.788-.468 1.658-.6 2.936-.057 1.28-.072 1.687-.072 4.947s.015 3.667.072 4.947c.132 1.278.333 2.148.6 2.936.263.779.603 1.618 1.353 2.368.75.75 1.589 1.09 2.368 1.353.788.267 1.658.468 2.936.6 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.278-.132 2.148-.333 2.936-.6.779-.263 1.618-.603 2.368-1.353.75-.75 1.09-1.589 1.353-2.368.267-.788.468-1.658.6-2.936.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.132-1.278-.333-2.148-.6-2.936-.263-.779-.603-1.618-1.353-2.368-.75-.75-1.589-1.09-2.368-1.353-.788-.267-1.658-.468-2.936-.6C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.064 1.17.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.055 1.266.064 1.645.064 4.849s-.009 3.585-.064 4.849c-.054 1.17-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.266.055-1.645.064-4.849.064s-3.585-.009-4.849-.064c-1.17-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.055-1.266-.064-1.645-.064-4.849s.009-3.585.064-4.849c.054-1.17.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.266-.055 1.645-.064 4.849-.064l0 0zm0 3.678c-3.401 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.401-2.757-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.915-10.514c-.794 0-1.438-.645-1.438-1.438s.645-1.438 1.438-1.438 1.438.645 1.438 1.438-.645 1.438-1.438 1.438z"/></svg>
              </a>
            </div>
            <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold group hover:text-text-secondary transition-colors duration-500">
               Work with us — <button onClick={() => onNavigate('careers')} className="text-secondary hover:text-yellow-300 transition-colors duration-400 font-bold">View Openings</button>
            </p>
          </div>
        </div>

        <div className="pt-16 border-t border-primary/25 flex flex-col md:flex-row justify-between items-center text-[10px] text-text-muted uppercase tracking-widest space-y-5 md:space-y-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <p className="font-bold hover:text-primary transition-colors duration-500">© 2024 Anantha Software Solutions. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <button onClick={() => onNavigate('privacy')} className="text-text-muted hover:text-secondary transition-all duration-500 font-bold border-b-2 border-transparent hover:border-secondary hover:text-secondary px-2 py-1">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="text-text-muted hover:text-secondary transition-all duration-500 font-bold border-b-2 border-transparent hover:border-secondary hover:text-secondary px-2 py-1">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
