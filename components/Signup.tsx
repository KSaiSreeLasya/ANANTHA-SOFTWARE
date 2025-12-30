import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/authContext';

interface SignupProps {
  onNavigate: (page: string) => void;
  onAuthSuccess?: () => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate, onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    agreeToTerms: false,
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return false;
    }
    return true;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Sign up with Supabase
      const { error: signUpError, data } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            company: formData.company,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
      } else if (data?.user) {
        // Insert user profile data
        const { error: insertError } = await supabase.from('users').insert([
          {
            id: data.user.id,
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            company: formData.company,
            created_at: new Date().toISOString(),
          },
        ]);

        if (insertError) {
          setError('Account created but profile setup failed: ' + insertError.message);
        } else {
          // Show success message and redirect
          if (onAuthSuccess) {
            onAuthSuccess();
          }
          onNavigate('home');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] pt-32 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      {/* Animated Background Spheres */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/25 via-primary/12 to-primary/5 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-float-slow"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-bl from-secondary/20 via-secondary/10 to-secondary/3 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-tr from-accent/15 to-accent/5 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header - Enhanced */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight" style={{letterSpacing: '-0.02em'}}>Create Account</h1>
          <p className="text-text-secondary text-lg md:text-xl font-light" style={{letterSpacing: '0.3px'}}>Join our community today</p>
        </div>

        {/* Signup Form - Enhanced */}
        <form onSubmit={handleSignup} className="space-y-6 bg-gradient-to-br from-secondary/14 to-secondary/6 rounded-3xl p-8 md:p-12 border border-secondary/40 backdrop-blur-xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {/* Animated Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-5 py-4 rounded-2xl text-sm animate-in fade-in font-medium uppercase tracking-wide">
              {error}
            </div>
          )}

          {/* First Name & Last Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                required
                className="w-full px-4 py-3 bg-gradient-to-br from-primary/12 to-primary/6 border border-secondary/40 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-500 backdrop-blur-sm font-medium text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
                required
                className="w-full px-4 py-3 bg-gradient-to-br from-primary/12 to-primary/6 border border-secondary/40 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-500 backdrop-blur-sm font-medium text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              className="w-full px-5 py-3.5 bg-gradient-to-br from-primary/12 to-primary/6 border border-secondary/40 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-500 backdrop-blur-sm font-medium"
            />
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              Company (Optional)
            </label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              className="w-full px-5 py-3.5 bg-gradient-to-br from-primary/12 to-primary/6 border border-secondary/40 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-500 backdrop-blur-sm font-medium"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="w-full px-5 py-3.5 bg-gradient-to-br from-primary/12 to-primary/6 border border-secondary/40 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-500 backdrop-blur-sm font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-secondary transition-colors duration-300"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.596 3.596m16.807 16.807L9.172 9.172" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-xs text-text-muted/70 mt-2 font-medium">At least 8 characters</p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="w-full px-5 py-3.5 bg-gradient-to-br from-primary/12 to-primary/6 border border-secondary/40 rounded-xl text-text placeholder-text-muted/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-500 backdrop-blur-sm font-medium"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-secondary transition-colors duration-300"
              >
                {showConfirmPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-4.753 4.753m4.753-4.753L3.596 3.596m16.807 16.807L9.172 9.172" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start text-sm text-text-secondary hover:text-secondary cursor-pointer transition-colors duration-300 font-medium group">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="w-4 h-4 bg-secondary/20 border border-secondary/50 rounded text-secondary focus:ring-secondary cursor-pointer accent-secondary mt-1 flex-shrink-0"
            />
            <span className="ml-3">
              I agree to the{' '}
              <button type="button" onClick={() => onNavigate('terms')} className="text-secondary hover:text-accent transition-colors duration-300 font-bold">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" onClick={() => onNavigate('privacy')} className="text-secondary hover:text-accent transition-colors duration-300 font-bold">
                Privacy Policy
              </button>
            </span>
          </label>

          {/* Sign Up Button - Premium Style */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-secondary to-accent text-primary font-bold rounded-xl hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm transform hover:scale-105 active:scale-95 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <span className="relative z-10">
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </span>
          </button>

          {/* Divider */}
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary/25"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-gradient-to-br from-secondary/14 to-secondary/6 text-text-secondary font-bold uppercase tracking-wider">or</span>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-text-secondary font-medium">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('login')}
              className="text-secondary hover:text-accent transition-colors duration-300 font-bold uppercase tracking-wider"
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
