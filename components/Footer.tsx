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
          <div className="space-y-6">
            <div className="cursor-pointer hover:opacity-90 transition-opacity transform hover:scale-105 duration-300" onClick={() => onNavigate('home')}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdd826854f6f44d3b95695750dd149fd4%2F69ef4033ddb2424b84ea4261dc960c9c?format=webp&width=1200"
                alt="Anantha Software"
                className="h-24 w-auto"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-wider font-medium">
              SOLUTIONS PVT LTD,<br />
              <span className="text-gray-500">WeWork Rajapushpa Summit,</span><br />
              <span className="text-gray-500">Financial District, Hyderabad,</span><br />
              <span className="text-gray-500">Telangana 500032.</span>
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs text-gray-400 uppercase tracking-widest hover:text-coral transition-all duration-300 hover:translate-x-1"
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
            {newsletterSuccess ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 p-4 rounded-lg text-xs text-center font-medium animate-pulse-subtle">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
                {newsletterError && (
                  <div className="bg-red-500/20 border border-red-500/40 text-red-400 p-3 rounded-lg text-xs text-center font-medium">
                    {newsletterError}
                  </div>
                )}
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="gradient-card px-4 py-3 outline-none focus:border-coral w-full text-white text-xs rounded-lg"
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="btn-primary btn-primary-solid rounded-lg w-full text-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex space-x-4 mb-8">
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-coral hover:border-coral hover:bg-white/5 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
               Work with us — <button onClick={() => onNavigate('careers')} className="text-coral hover:text-teal transition-colors duration-300">View Openings</button>
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest space-y-4 md:space-y-0">
          <p className="font-medium">© 2024 Anantha Software Solutions. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <button className="text-gray-400 hover:text-coral transition-colors duration-300 font-medium">Privacy Policy</button>
            <button className="text-gray-400 hover:text-coral transition-colors duration-300 font-medium">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
