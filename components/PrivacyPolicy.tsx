import React from 'react';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Spheres */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-bl from-secondary/18 via-secondary/8 to-secondary/3 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-float"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-tr from-accent/12 to-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black text-text mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>Privacy Policy</h1>
          <p className="text-text-secondary text-lg font-light" style={{letterSpacing: '0.3px'}}>How we protect your information</p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-secondary/14 to-secondary/6 rounded-2xl p-8 md:p-12 border border-secondary/40 backdrop-blur-xl space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Introduction</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              Anantha Software Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-accent mb-2">Personal Information</h3>
                <p className="text-text-secondary leading-relaxed text-base font-light">
                  When you create an account, sign up for newsletters, or contact us, we may collect:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3 font-light">
                  <li>Name and email address</li>
                  <li>Company name and job title</li>
                  <li>Phone number</li>
                  <li>Payment information (processed securely)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-accent mb-2">Automatically Collected Information</h3>
                <p className="text-text-secondary leading-relaxed text-base font-light">
                  When you visit our website, we automatically collect certain information about your device and browsing activity, including:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3 font-light">
                  <li>IP address and user agent</li>
                  <li>Browser and device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral source</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">How We Use Your Information</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Providing and improving our services</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Processing your transactions and sending related information</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Sending promotional communications (with your consent)</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Responding to your inquiries and support requests</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Analyzing usage patterns to improve user experience</span>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Data Security</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              We implement comprehensive technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Third-Party Sharing */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Third-Party Sharing</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Service providers who assist us in operating our website</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Legal authorities when required by law</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Business partners with your explicit consent</span>
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Cookies</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              We use cookies and similar tracking technologies to track activity and enhance your experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Your Rights</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Access your personal information</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Correct inaccurate information</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Request deletion of your data</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Opt-out of marketing communications</span>
              </li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="space-y-4 bg-primary/12 rounded-xl p-6 border border-primary/30">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-text-secondary font-light">
                <span className="font-bold text-secondary">Email:</span> privacy@ananthasoftware.com
              </p>
              <p className="text-text-secondary font-light">
                <span className="font-bold text-secondary">Address:</span> WeWork Rajapushpa Summit, Financial District, Hyderabad, Telangana 500032
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <p className="text-xs text-text-muted uppercase tracking-widest font-bold pt-6 border-t border-secondary/30">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12 flex justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-3 border-2 border-secondary text-secondary font-bold rounded-lg uppercase tracking-wider text-sm transition-all duration-500 hover:bg-gradient-to-r hover:from-secondary/20 hover:to-secondary/10 hover:shadow-lg hover:shadow-secondary/40 hover:scale-105 active:scale-95"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
