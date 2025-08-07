import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Mail } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cookie className="w-8 h-8 text-primary-400" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Cookie Policy
              </h1>
            </div>
            <p className="text-lg text-gray-300">
              Learn about how we use cookies and similar tracking technologies on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-6 md:p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            
            {/* Main Title */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Opho World Cookie Policy</h2>
              <p className="text-sm text-gray-400 italic">Last Revised July 22, 2025</p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed">
                Opho World Inc. ("Opho World", "we", or "us") uses cookies and similar tracking technologies on 
                our website https://www.ophoworld.com (the "Website") to enhance your browsing experience, 
                analyze website usage, and improve our services. This Cookie Policy explains what cookies 
                are, how and why we use them, and your choices regarding cookies.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* What Are Cookies? */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">What Are Cookies?</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files stored on your device when you visit a website. Cookies enable the 
                  website to recognize your device, remember your preferences, and help us understand how you 
                  interact with our website and services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Cookies may be "session cookies" (which expire when you close your browser) or "persistent 
                  cookies" (which remain on your device for a set period or until deleted).
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Types of Cookies We Use */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Types of Cookies We Use</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Opho World uses the following types of cookies on our Website:
              </p>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-white/5 rounded-lg p-4 md:p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">1. Essential Cookies:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies are necessary for the Website to function properly and cannot be switched off in 
                    our systems. They are usually set in response to your actions, such as logging in, filling out 
                    forms, or setting your privacy preferences.
                  </p>
                </div>

                {/* Performance and Analytics Cookies */}
                <div className="bg-white/5 rounded-lg p-4 md:p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">2. Performance and Analytics Cookies:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the 
                    performance of our Website. They help us understand how visitors interact with our pages, 
                    which pages are most or least popular, and how users navigate the site. All information 
                    collected by these cookies is aggregated and anonymous.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="bg-white/5 rounded-lg p-4 md:p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">3. Functional Cookies:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies enable enhanced functionality and personalization, such as remembering your 
                    preferences and settings. If you do not allow these cookies, some features of the site may not 
                    function properly.
                  </p>
                </div>

                {/* Targeting and Advertising Cookies */}
                <div className="bg-white/5 rounded-lg p-4 md:p-6 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">4. Targeting and Advertising Cookies:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies may be set through our Website by our advertising partners to build a profile of 
                    your interests and show you relevant advertisements on other sites. They do not store directly 
                    personal information, but are based on uniquely identifying your browser and internet device.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Third-Party Cookies */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Third-Party Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                We may allow select third parties (such as analytics providers, advertising partners, or social 
                media services) to set cookies through our Website to assist us in analyzing usage and 
                improving our marketing efforts. These third parties may collect information about your online 
                activities over time and across different websites.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Your Cookie Choices */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Your Cookie Choices</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  When you first visit our Website, you may be given the option to accept or decline non-essential 
                  cookies via our cookie banner or settings tool. You can also control cookies at any time by 
                  adjusting your browser settings to block or delete cookies. However, please note that disabling 
                  cookies may affect the functionality of the Website.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  To learn more about managing cookies, visit{' '}
                  <a 
                    href="https://www.allaboutcookies.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    www.allaboutcookies.org
                  </a>{' '}
                  or the help section of your browser.
                </p>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Do Not Track:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Some browsers offer a "Do Not Track" (DNT) feature. Opho Tech honors DNT signals and limits 
                    tracking where possible.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Updates to This Cookie Policy */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Updates to This Cookie Policy</h3>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy to reflect changes to our practices or for other operational, 
                legal, or regulatory reasons. Please review this page periodically for the latest information.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Contact Us */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us at:
                </p>

                <div className="bg-white/5 rounded-lg p-4 md:p-6 border border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary-400 mt-0.5" />
                      <div>
                        <p className="text-white font-semibold">Opho World Inc.</p>
                        <p className="text-gray-300">2302 - 228 Queens Quay W Downtown, Toronto M5J2X1</p>
                        <p className="text-gray-300">Canada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary-400" />
                      <a 
                       href="mailto:info@ophotech.com" 
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                       info@ophotech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-gray-600">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-4">Questions About This Cookie Policy?</h4>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Cookie Policy or our cookie practices, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                   href="mailto:info@ophotech.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Privacy Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;