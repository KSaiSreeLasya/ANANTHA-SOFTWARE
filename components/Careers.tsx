import React, { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { getClientIp, getUserAgent } from '../lib/ipService';

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
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-coral font-bold tracking-[0.3em] uppercase text-xs mb-4">Join Our Team</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Career Opportunities</h2>
          <div className="divider-coral w-12 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Come work with us and be part of a team that's revolutionizing technology and engineering</p>
        </div>
        <div className="gradient-card p-12 rounded-2xl">
          <h3 className="text-2xl font-bold mb-10 text-white">Application Form</h3>

          {isSubmitted ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
              <p className="text-gray-400">Our HR team will review your profile and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm">
                  {errorMsg}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">First name *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Last name *</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral transition-colors" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral transition-colors" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Position *</label>
                <select 
                  required 
                  value={formData.position}
                  onChange={e => setFormData({...formData, position: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral transition-colors appearance-none"
                >
                  <option value="" className="bg-black">Select Position</option>
                  <option value="vlsi" className="bg-black">VLSI Engineer</option>
                  <option value="software" className="bg-black">Software Developer</option>
                  <option value="ai" className="bg-black">AI/ML Engineer</option>
                  <option value="intern" className="bg-black">Technical Intern</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Start Date</label>
                <div className="grid grid-cols-3 gap-4">
                  <input 
                    type="number" 
                    placeholder="Day" 
                    value={formData.day}
                    onChange={e => setFormData({...formData, day: e.target.value})}
                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral" 
                  />
                  <select 
                    value={formData.month}
                    onChange={e => setFormData({...formData, month: e.target.value})}
                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral appearance-none"
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
                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">UPLOAD RESUME *</label>
                <div className="flex items-center space-x-4">
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
                     className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all text-xs font-bold border border-white/5"
                   >
                      <span>{resumeFile ? '✓' : '+'}</span>
                      <span>{resumeFile ? resumeFile.name : 'Upload File'}</span>
                   </button>
                   <span className="text-[10px] text-gray-600">PDF, DOC, DOCX up to 5MB</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Link to LinkedIn</label>
                <input 
                  type="url" 
                  placeholder="https://" 
                  value={formData.linkedin}
                  onChange={e => setFormData({...formData, linkedin: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-coral transition-colors" 
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-bold text-sm uppercase tracking-widest transition-all rounded-full ${
                  isSubmitting ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-white/20 hover:bg-white text-black'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Apply'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
