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
              <button className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center text-text-secondary hover:text-white hover:border-primary bg-gradient-to-br from-primary/15 to-primary/8 hover:from-primary/30 hover:to-primary/15 transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/50 group active:scale-95 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
            <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold group hover:text-text-secondary transition-colors duration-500">
               Work with us — <button onClick={() => onNavigate('careers')} className="text-secondary hover:text-yellow-300 transition-colors duration-400 font-bold">View Openings</button>
            </p>
          </div>
        </div>

        <div className="pt-16 border-t border-primary/25 flex flex-col md:flex-row justify-between items-center text-[10px] text-text-muted uppercase tracking-widest space-y-5 md:space-y-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <p className="font-bold hover:text-primary transition-colors duration-500">© 2024 Anantha Software Solutions. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <button className="text-text-muted hover:text-secondary transition-all duration-500 font-bold border-b-2 border-transparent hover:border-secondary hover:text-secondary px-2 py-1">Privacy Policy</button>
            <button className="text-text-muted hover:text-secondary transition-all duration-500 font-bold border-b-2 border-transparent hover:border-secondary hover:text-secondary px-2 py-1">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
