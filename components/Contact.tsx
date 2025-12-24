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
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-medium">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-xl text-white font-bold text-lg transition-all shadow-lg active:scale-95 ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/20'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
