import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { getClientIp, getUserAgent } from '../lib/ipService';
import { sendContactEmail } from '../lib/emailService';

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

      // Save to Supabase
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

      // Send email notification
      try {
        await sendContactEmail(formData.name, formData.email, formData.message);
      } catch (emailError) {
        console.warn('Email notification failed, but form was saved', emailError);
      }

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
    <div className="section-padding bg-gradient-to-b from-color-bg via-color-bg-light to-color-bg text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-primary/8 via-transparent to-transparent rounded-full blur-3xl opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-accent/8 via-transparent to-transparent rounded-full blur-3xl opacity-40 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tight">
            Ready to start your <br />
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">digital journey?</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
            Connect with our team and discover how we can help transform your vision into reality. We're here to listen and collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative gradient-card p-8 rounded-2xl card-hover border-primary/30">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-400">Email Us</h4>
                    <p className="text-text-muted group-hover:text-text-secondary transition-colors duration-400">contact@ananthasoftware.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative gradient-card p-8 rounded-2xl card-hover border-primary/30">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors duration-400">Visit Our Office</h4>
                    <p className="text-text-muted group-hover:text-text-secondary transition-colors duration-400">
                      WeWork Rajapushpa Summit<br />
                      Financial District, Hyderabad<br />
                      Telangana 500032
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="gradient-card rounded-2xl p-8 md:p-12 card-hover border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              {isSuccess ? (
                <div className="relative h-full flex flex-col items-center justify-center text-center py-12 animate-scale-in">
                  <div className="w-24 h-24 bg-gradient-to-br from-tertiary/30 to-tertiary/10 rounded-full flex items-center justify-center mb-8 animate-glow shadow-lg shadow-tertiary/30">
                    <svg className="w-12 h-12 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold mb-3 text-white">Message Sent!</h3>
                  <p className="text-text-secondary font-medium">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  {errorMsg && (
                    <div className="bg-red-500/20 border border-red-500/40 text-red-300 p-4 rounded-lg text-sm font-medium animate-pulse-smooth">
                      {errorMsg}
                    </div>
                  )}
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3 rounded-lg bg-primary/5 border border-primary/20 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-400 placeholder-text-muted/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-lg bg-primary/5 border border-primary/20 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-400 placeholder-text-muted/50"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3 rounded-lg bg-primary/5 border border-primary/20 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-400 resize-none placeholder-text-muted/50"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    disabled={isSubmitting}
                    className={`btn-primary btn-primary-solid rounded-lg w-full py-4 mt-4 font-bold uppercase tracking-widest transition-all duration-400 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-primary/30'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
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
