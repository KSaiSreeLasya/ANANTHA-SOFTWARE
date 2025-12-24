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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Company Info */}
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="cursor-pointer group transition-all transform duration-500 hover:scale-110" onClick={() => onNavigate('home')}>
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdd826854f6f44d3b95695750dd149fd4%2F69ef4033ddb2424b84ea4261dc960c9c?format=webp&width=1200"
                  alt="Anantha Software"
                  className="h-24 w-auto group-hover:brightness-125 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl"></div>
              </div>
            </div>
            <p className="text-xs text-text-muted leading-relaxed uppercase tracking-wider font-medium hover:text-text-secondary transition-colors duration-500">
              SOLUTIONS PVT LTD,<br />
              <span className="text-text-muted/70">WeWork Rajapushpa Summit,</span><br />
              <span className="text-text-muted/70">Financial District, Hyderabad,</span><br />
              <span className="text-text-muted/70">Telangana 500032.</span>
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link, idx) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs text-text-muted uppercase tracking-widest hover:text-primary transition-all duration-400 hover:translate-x-1 group relative px-3 py-2 rounded-md hover:bg-primary/10"
                    style={{animation: `slideInLeft 0.5s ease-out ${0.05 * idx}s backwards`}}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm rounded-md -z-10"></div>
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-400"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Stay Updated</h4>
            {newsletterSuccess ? (
              <div className="bg-gradient-to-r from-tertiary/30 to-tertiary/10 border border-tertiary/40 text-tertiary p-4 rounded-lg text-xs text-center font-medium animate-pulse-scale shadow-lg shadow-tertiary/20">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
                {newsletterError && (
                  <div className="bg-red-500/20 border border-red-500/40 text-red-400 p-3 rounded-lg text-xs text-center font-medium animate-pulse-smooth">
                    {newsletterError}
                  </div>
                )}
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="gradient-card px-4 py-3 outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/30 w-full text-white text-xs rounded-lg transition-all duration-400"
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="btn-primary btn-primary-solid rounded-lg w-full text-[10px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-400 hover:shadow-lg hover:shadow-primary/30"
                >
                  {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>

          {/* Social */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex space-x-4 mb-8">
              <button className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-text-muted hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-400 transform hover:scale-125 hover:shadow-lg hover:shadow-primary/30 group active:scale-95">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
            <p className="text-[10px] text-text-muted uppercase tracking-widest font-semibold hover:text-text-secondary transition-colors duration-500">
               Work with us — <button onClick={() => onNavigate('careers')} className="text-primary hover:text-secondary transition-colors duration-400 font-bold">View Openings</button>
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center text-[10px] text-text-muted uppercase tracking-widest space-y-4 md:space-y-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <p className="font-medium hover:text-primary transition-colors duration-500">© 2024 Anantha Software Solutions. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <button className="text-text-muted hover:text-primary transition-all duration-400 font-medium border-b border-transparent hover:border-primary">Privacy Policy</button>
            <button className="text-text-muted hover:text-primary transition-all duration-400 font-medium border-b border-transparent hover:border-primary">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
