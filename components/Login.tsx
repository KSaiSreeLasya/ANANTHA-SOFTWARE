import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/authContext';

interface LoginProps {
  onNavigate: (page: string) => void;
  onAuthSuccess?: () => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { checkAuth } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
      } else {
        // Refresh auth context
        await checkAuth();

        // Show success alert
        await Swal.fire({
          title: 'Login Successful!',
          text: 'Welcome back to Anantha Software',
          icon: 'success',
          confirmButtonColor: '#ff6b4a',
          timer: 2000,
          timerProgressBar: true,
        });

        // Redirect to home
        if (onAuthSuccess) {
          onAuthSuccess();
        }
        onNavigate('home');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Welcome Back</h1>
          <p className="text-gray-400 text-lg">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm animate-in fade-in">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all duration-300"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral/50 transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
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
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400 hover:text-white cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 bg-white/5 border border-white/10 rounded text-coral focus:ring-coral cursor-pointer"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <button
              type="button"
              onClick={() => onNavigate('forgot-password')}
              className="text-coral hover:text-coral/80 transition-colors font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-coral text-white font-bold rounded-lg hover:bg-coral/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0a0a0a] text-gray-400">or</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-400">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('signup')}
              className="text-coral font-medium hover:text-coral/80 transition-colors"
            >
              Sign up
            </button>
          </p>
        </form>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          By signing in, you agree to our{' '}
          <a href="#" className="text-coral hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-coral hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
