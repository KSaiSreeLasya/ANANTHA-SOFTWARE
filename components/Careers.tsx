import React, { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { getClientIp, getUserAgent } from '../lib/ipService';
import { sendCareerApplicationEmail } from '../services/emailService';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    day: '',
    month: '',
    year: '',
    linkedin: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setErrorMsg('Please upload your resume.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // 1. Upload Resume to Storage
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = fileName; // Just filename, bucket is 'resumes'

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, resumeFile);

      if (uploadError) throw uploadError;

      // 2. Get Public URL (or path)
      const { data: { publicUrl } } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath);

      // 3. Construct Date string (YYYY-MM-DD)
      const startDate = formData.year && formData.month && formData.day
        ? `${formData.year}-${formData.month.padStart(2, '0')}-${formData.day.padStart(2, '0')}`
        : null;

      // 4. Get IP address and user agent
      const ipAddress = await getClientIp();
      const userAgent = getUserAgent();

      // 5. Insert into career_applications table
      const { error: insertError } = await supabase
        .from('career_applications')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          start_date: startDate,
          resume_url: publicUrl,
          linkedin_url: formData.linkedin,
          ip_address: ipAddress,
          user_agent: userAgent
        }]);

      if (insertError) {
        console.error('Insert error details:', {
          message: insertError.message,
          code: insertError.code,
          details: insertError.details,
          hint: insertError.hint,
          full: insertError
        });
        throw insertError;
      }

      // Send email notification
      await sendCareerApplicationEmail(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.phone,
        formData.position,
        formData.linkedin
      );

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Full submission error:', error);
      const errorMessage = error?.message || error?.error_description || 'Unknown error';
      console.log('Error object:', error);
      setErrorMsg(`Error submitting application: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding relative overflow-hidden" style={{backgroundColor: '#FFFFF0'}}>
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-primary/8 via-transparent to-transparent rounded-full blur-3xl opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-accent/8 via-transparent to-transparent rounded-full blur-3xl opacity-40 animate-float"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center animate-fade-in-up">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">Join Our Team</p>
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">Career Opportunities</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">Be part of a team revolutionizing technology, engineering, and innovation. We're building the future, one project at a time.</p>
        </div>

        <div className="gradient-card p-12 rounded-2xl card-hover border-primary/30 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white">Application Form</h3>
            <p className="text-text-muted mt-2">Fill out the form below and join our growing team of innovators.</p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-20 animate-scale-in">
              <div className="w-24 h-24 bg-gradient-to-br from-tertiary/30 to-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-glow shadow-lg shadow-tertiary/30">
                 <svg className="w-12 h-12 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">Application Received!</h3>
              <p className="text-text-secondary font-medium">Our HR team will review your profile and reach out within 2-3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {errorMsg && (
                <div className="bg-red-500/20 border border-red-500/40 text-red-300 p-4 rounded-lg text-sm font-medium">
                  {errorMsg}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">First name *</label>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    className="gradient-card w-full rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Last name *</label>
                  <input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="gradient-card w-full rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="gradient-card w-full rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="gradient-card w-full rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Position *</label>
                <select
                  required
                  value={formData.position}
                  onChange={e => setFormData({...formData, position: e.target.value})}
                  className="gradient-card w-full rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all appearance-none"
                >
                  <option value="" className="bg-black">Select Position</option>
                  <option value="vlsi" className="bg-black">VLSI Engineer</option>
                  <option value="software" className="bg-black">Software Developer</option>
                  <option value="ai" className="bg-black">AI/ML Engineer</option>
                  <option value="intern" className="bg-black">Technical Intern</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Start Date</label>
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="number"
                    placeholder="Day"
                    value={formData.day}
                    onChange={e => setFormData({...formData, day: e.target.value})}
                    className="gradient-card rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                  />
                  <select
                    value={formData.month}
                    onChange={e => setFormData({...formData, month: e.target.value})}
                    className="gradient-card rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all appearance-none"
                  >
                    <option value="" className="bg-black">Month</option>
                    {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((m, i) => (
                      <option key={m} value={m} className="bg-black">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder="Year"
                    value={formData.year}
                    onChange={e => setFormData({...formData, year: e.target.value})}
                    className="gradient-card rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">UPLOAD RESUME *</label>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                   <input
                     type="file"
                     ref={fileInputRef}
                     onChange={handleFileChange}
                     className="hidden"
                     accept=".pdf,.doc,.docx"
                   />
                   <button
                     type="button"
                     onClick={() => fileInputRef.current?.click()}
                     className="btn-primary btn-primary-outline rounded-lg px-6 py-3 flex items-center justify-center space-x-2 text-xs w-full md:w-auto"
                   >
                      <span className="text-lg">{resumeFile ? '✓' : '+'}</span>
                      <span>{resumeFile ? resumeFile.name : 'Upload File'}</span>
                   </button>
                   <span className="text-xs text-gray-500 md:whitespace-nowrap">PDF, DOC, DOCX up to 5MB</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Link to LinkedIn</label>
                <input
                  type="url"
                  placeholder="https://"
                  value={formData.linkedin}
                  onChange={e => setFormData({...formData, linkedin: e.target.value})}
                  className="gradient-card w-full rounded-lg px-4 py-3 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary btn-primary-solid rounded-lg w-full py-4 mt-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Apply Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
