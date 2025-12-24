import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { getClientIp, getUserAgent } from '../lib/ipService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Get IP address and user agent
      const ipAddress = await getClientIp();
      const userAgent = getUserAgent();

      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            ip_address: ipAddress,
            user_agent: userAgent
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      const errorMessage = error?.message || error?.error_description || JSON.stringify(error);
      setErrorMsg(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-coral/5 via-transparent to-transparent rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-coral font-bold tracking-[0.3em] uppercase text-xs mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight">
              Ready to start your <br />
              <span className="text-gradient">digital journey?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-12 font-medium leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours to discuss how we can help your business grow.
            </p>

            <div className="space-y-6">
              <div className="gradient-card p-6 rounded-xl card-hover group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-coral/20 p-3 rounded-lg group-hover:bg-coral/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold mb-1 group-hover:text-coral transition-colors duration-300">Email Us</h4>
                    <p className="text-gray-400 text-sm">contact@ananthasoftware.in</p>
                  </div>
                </div>
              </div>

              <div className="gradient-card p-6 rounded-xl card-hover group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal/20 p-3 rounded-lg group-hover:bg-teal/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold mb-1 group-hover:text-teal transition-colors duration-300">Visit Our Office</h4>
                    <p className="text-gray-400 text-sm">Financial District, Hyderabad,<br />Telangana-500032</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-card rounded-2xl p-8 md:p-12 card-hover text-white">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 animate-glow">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">Message Sent!</h3>
                <p className="text-gray-300 font-medium">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="bg-red-500/20 border border-red-500/40 text-red-300 p-4 rounded-lg text-sm font-medium">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all resize-none"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button
                  disabled={isSubmitting}
                  className={`btn-primary btn-primary-solid rounded-lg w-full py-4 mt-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <p className="text-coral font-bold tracking-[0.3em] uppercase text-xs mb-4">Visit Us</p>
          <h3 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tight">
            Find Us on the Map
          </h3>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7644279365327!2d78.33665267599429!3d17.423089283470294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8de7c6d9d223%3A0x82e8892a719cbebd!2sASOCSEMI%20by%20ANANTHA%20SOFTWARE%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1766569883600!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[500px]"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
