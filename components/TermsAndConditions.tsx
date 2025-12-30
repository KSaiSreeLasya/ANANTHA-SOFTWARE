import React from 'react';

interface TermsAndConditionsProps {
  onNavigate: (page: string) => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Spheres */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-bl from-secondary/18 via-secondary/8 to-secondary/3 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-float"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-tr from-accent/12 to-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-black text-text mb-6 tracking-tight" style={{letterSpacing: '-0.02em'}}>Terms and Conditions</h1>
          <p className="text-text-secondary text-lg font-light" style={{letterSpacing: '0.3px'}}>Please read carefully before using our services</p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-secondary/14 to-secondary/6 rounded-2xl p-8 md:p-12 border border-secondary/40 backdrop-blur-xl space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {/* Agreement to Terms */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">1. Agreement to Terms</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              By accessing and using this website and any services provided by Anantha Software Solutions, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Use License */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">2. Use License</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) from Anantha Software Solutions for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Modify or copy the materials</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Use the materials for any commercial purpose or for any public display</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Attempt to decompile or reverse engineer any software contained on the website</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Remove any copyright or other proprietary notations from the materials</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Transfer the materials to another person or "mirror" the materials on any other server</span>
              </li>
            </ul>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">3. Disclaimer of Warranties</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              The materials on Anantha Software Solutions' website are provided on an 'as is' basis. Anantha Software Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Limitations of Liability */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">4. Limitations of Liability</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              In no event shall Anantha Software Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Anantha Software Solutions' website, even if Anantha Software Solutions or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Accuracy of Materials */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">5. Accuracy of Materials</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              The materials appearing on Anantha Software Solutions' website could include technical, typographical, or photographic errors. Anantha Software Solutions does not warrant that any of the materials on its website are accurate, complete, or current. Anantha Software Solutions may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          {/* Materials on Website */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">6. Materials on Website</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              Anantha Software Solutions has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Anantha Software Solutions of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          {/* Modifications to Terms */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">7. Modifications to Terms</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              Anantha Software Solutions may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">8. Governing Law</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          {/* User Accounts */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">9. User Accounts</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light mb-4">
              If you create an account on our website, you are responsible for:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Maintaining the confidentiality of your account credentials</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Notifying us immediately of any unauthorized use</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">All activities conducted through your account</span>
              </li>
            </ul>
          </section>

          {/* Prohibited Conduct */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">10. Prohibited Conduct</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light mb-4">
              You agree not to:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Violate any applicable laws or regulations</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Infringe upon any intellectual property rights</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Harass, abuse, or threaten other users</span>
              </li>
              <li className="flex gap-3 text-text-secondary">
                <span className="text-secondary font-bold flex-shrink-0">•</span>
                <span className="font-light">Engage in any form of hacking or unauthorized access</span>
              </li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="space-y-4 bg-primary/12 rounded-xl p-6 border border-primary/30">
            <h2 className="text-3xl font-bold text-secondary uppercase tracking-wide">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed text-base font-light mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="space-y-2">
              <p className="text-text-secondary font-light">
                <span className="font-bold text-secondary">Email:</span> legal@ananthasoftware.com
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

export default TermsAndConditions;
