import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronDown, ExternalLink, Users, Package, Truck } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Prevent body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen]);

  const navigate = useNavigate();

  const partnerOptions = [
    {
      id: 'customers',
      title: 'For customers',
      description: 'Solutions and services for our valued customers',
      icon: <Users className="w-5 h-5" />,
      href: 'https://portal-dashboard-sigma.vercel.app/'
    },
    {
      id: 'vendors',
      title: 'For vendors',
      description: 'Partnership opportunities for technology vendors',
      icon: <Package className="w-5 h-5" />,
      href: '/contact'
    },
    {
      id: 'suppliers',
      title: 'For suppliers',
      description: 'Collaboration opportunities for service suppliers',
      icon: <Truck className="w-5 h-5" />,
      href: '/contact'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const websites = [
    {
      name: 'OphoTech',
      description: 'Technology Solutions & Innovation',
      url: 'https://stellar-kelpie-d06cc0.netlify.app/',
    },
    {
      name: 'OphoDigital',
      description: 'Digital Transformation & Services',
      url: 'https://radiant-sfogliatella-1938a8.netlify.app',
    },
    {
      name: 'OphoSecure',
      description: 'Cybersecurity & Protection Solutions',
      url: 'https://elegant-biscotti-53e2a2.netlify.app',
    }
  ];

  const toggleLogoDropdown = () => {
    setIsLogoDropdownOpen(!isLogoDropdownOpen);
  };

  const handleWebsiteNavigation = (url: string) => {
    if (url !== '#') {
      window.open(url, '_blank');
    }
    setIsLogoDropdownOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Enterprise Structure', href: '/enterprise-structure' },
    { label: 'Value Journey', href: '/journey-strategy' },

  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo with Dropdown */}
          <div className="relative logo-dropdown-container">
            <button
              onClick={toggleLogoDropdown}
              onMouseEnter={() => setIsLogoDropdownOpen(true)}
              className="flex items-center gap-2 group transition-all duration-200 hover:scale-105"
            >
              <img 
                src="/world.png" 
                alt="OphoWorld" 
                className="h-10 w-auto transition-all duration-200 group-hover:brightness-110"
              />
              <ChevronDown className={`w-4 h-4 text-gray-300 transition-all duration-200 ${
                isLogoDropdownOpen ? 'rotate-180 text-primary-400' : 'group-hover:text-white'
              }`} />
            </button>

            {/* Dropdown Menu */}
            {isLogoDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-80 bg-gray-900 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl shadow-black/20 overflow-hidden animate-fade-in-up z-50"
                onMouseLeave={() => setIsLogoDropdownOpen(false)}
              >
                <div className="p-2">
                  <div className="text-xs text-gray-400 px-4 py-2 font-semibold uppercase tracking-wider">
                    Opho Ecosystem
                  </div>
                  {websites.map((website, index) => (
                    <button
                      key={index}
                      onClick={() => handleWebsiteNavigation(website.url)}
                      className="w-full text-left p-4 rounded-xl transition-all duration-200 group hover:bg-white/10 hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-semibold mb-1 flex items-center gap-2 text-white group-hover:text-primary-400">
                            {website.name}
                          </div>
                          <div className="text-sm text-gray-400 group-hover:text-gray-300">
                            {website.description}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primary-400 transition-colors duration-200" />
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="bg-white/5 px-4 py-3 border-t border-white/10">
                  <p className="text-xs text-gray-400 text-center">
                    Connect • Create • Evolve
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link-hover text-base font-medium text-white/90 transition-colors duration-300"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Authentication Section - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={handleContactClick}
              className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-150"
              aria-label="Partner with OphoWorld"
            >
             GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 group"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-primary-dark/98 backdrop-blur-xl transition-all duration-300 ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}>
          <div className="p-8">
            <div className="space-y-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-base font-medium text-white/90 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile Authentication */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;