import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight, Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      // You can add actual subscription logic here
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/ophoworld/', label: 'Facebook' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/ophoworld', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/world.png" 
                alt="OphoWorld Logo" 
                className="h-12 w-auto mr-3"
              />
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI, cloud, and data solutions. Transform your 
              organization into a smarter, more agile enterprise.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <a href="mailto:contact@ophoworld.com" className="hover:text-white transition-colors">
                  info@ophotech.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <a href="tel:+18885796686" className="hover:text-white transition-colors">
                  +1 (888) 579-6686
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                <span>2302 - 228 Queens Quay W Downtown, Toronto M5J2X1, Canada</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Team', href: '/careers' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: 'Unified Enterprise Stack', href: '/solution/unified-enterprise-stack' },
                { name: 'Multi-Tenant Architecture', href: '/solution/multi-tenant-architecture' },
                { name: 'Industry Agnostic', href: '/solution/industry-agnostic' },
                { name: 'Universal Deployment', href: '/solution/universal-deployment' },
                { name: 'Cross-Vertical Deployment', href: '/solution/cross-vertical-deployment' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Case Studies', href: '/resources#case-studies' },
                { name: 'White Papers', href: '/resources#white-papers' },
                { name: 'Documentation', href: '/resources#documentation' },
    
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
                { name: 'Data Protection & Compliance', href: '/data-protection' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-2xl">
            <h3 className="text-white font-semibold text-xl mb-3">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Get the latest insights on AI, cloud technologies, and digital transformation.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubscribing ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 OphoWorld. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm mr-4">Follow us:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;