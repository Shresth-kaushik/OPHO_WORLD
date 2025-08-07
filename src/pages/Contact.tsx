import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  MessageCircle, 
  Users, 
  Globe, 
  FileText, 
  Send, 
  Upload,
  X,
  CheckCircle,
  Clock
} from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [quickFormData, setQuickFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    file: null as File | null
  });
  const [partnershipFormData, setPartnershipFormData] = useState({
    name: '',
    email: '',
    company: '',
    partnershipType: 'technology',
    message: ''
  });
  const [helpDeskOpen, setHelpDeskOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quick form submitted:', quickFormData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setQuickFormData({ name: '', email: '', company: '', message: '', file: null });
  };

  const handlePartnershipFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership form submitted:', partnershipFormData);
    alert('Thank you for your partnership inquiry! Our business development team will contact you soon.');
    setPartnershipFormData({ name: '', email: '', company: '', partnershipType: 'technology', message: '' });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setQuickFormData((prev) => ({ ...prev, file }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

     

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for partnerships, support, or general inquiries. 
            We're here to help you transform your business with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Contact Sections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Partnership Inquiries */}
            <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border border-white/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Partnership Inquiries</h2>
                  <p className="text-sm sm:text-base text-gray-300">Email address for partnership and media inquiries.</p>
                </div>
              </div>

              <form onSubmit={handlePartnershipFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={partnershipFormData.name}
                    onChange={(e) => setPartnershipFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={partnershipFormData.email}
                    onChange={(e) => setPartnershipFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={partnershipFormData.company}
                  onChange={(e) => setPartnershipFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  required
                />
                
                <textarea
                  placeholder="Tell us about your partnership proposal..."
                  rows={3}
                  value={partnershipFormData.message}
                  onChange={(e) => setPartnershipFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-sm sm:text-base"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>

            {/* Help Desk */}
            <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border border-white/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Help Desk</h2>
                  <p className="text-sm sm:text-base text-gray-300">Live chat or chatbot powered by SmartOps LLM.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-base text-white font-semibold">Support Form Available</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                    Submit your technical questions, account issues, or general support requests through our dedicated support form.
                  </p>
                  <button
                    onClick={() => setHelpDeskOpen(true)}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Open Support Form
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white/10 rounded-lg p-3 sm:p-4 text-center">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-sm sm:text-base text-white font-semibold">24/7</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Form Access</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 sm:p-4 text-center">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-sm sm:text-base text-white font-semibold">{"< 24 hrs"}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border border-white/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Global Offices</h2>
                  <p className="text-sm sm:text-base text-gray-300">Our office locations worldwide.</p>
                </div>
              </div>

              {/* Compact Office Names List */}
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-2 sm:p-3 text-center border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-sm sm:text-base font-bold text-white mb-1">2302 - 228 Queens Quay W Downtown, Toronto M5J2X1</div>
                  <div className="text-xs sm:text-sm text-gray-400">Canada</div>
                  <div className="text-xs text-primary-400 mt-1">Headquarters</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-2 sm:p-3 text-center border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-sm sm:text-base font-bold text-white mb-1">5565 Silver Creek Valley Rd Suite#600 San Jose CA 95138</div>
                  <div className="text-xs sm:text-sm text-gray-400">USA</div>
                  <div className="text-xs text-primary-400 mt-1">Operations</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-2 sm:p-3 text-center border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-sm sm:text-base font-bold text-white mb-1">New Delhi</div>
                  <div className="text-xs sm:text-sm text-gray-400">India</div>
                  <div className="text-xs text-primary-400 mt-1">Operations</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-2 sm:p-3 text-center border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <div className="text-sm sm:text-base font-bold text-white mb-1">Andorra la Vella</div>
                  <div className="text-xs sm:text-sm text-gray-400">Andorra</div>
                  <div className="text-xs text-primary-400 mt-1">Europe Operations</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl border border-white/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Quick Contact Form</h2>
                  <p className="text-sm sm:text-base text-gray-300">Form for inquiries with message and file upload.</p>
                </div>
              </div>

              <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={quickFormData.name}
                    onChange={(e) => setQuickFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={quickFormData.email}
                    onChange={(e) => setQuickFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  value={quickFormData.company}
                  onChange={(e) => setQuickFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                />
                <textarea
                  placeholder="Your message..."
                  rows={3}
                  value={quickFormData.message}
                  onChange={(e) => setQuickFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-sm sm:text-base"
                  required
                ></textarea>
                
                {/* File Upload */}
                <div className="border-2 border-dashed border-white/20 rounded-lg p-4 sm:p-6 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mx-auto mb-2" />
                    <p className="text-sm sm:text-base text-gray-300 mb-1">
                      {quickFormData.file ? quickFormData.file.name : 'Click to upload file'}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">PDF, DOC, TXT, JPG, PNG (Max 10MB)</p>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      {helpDeskOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-4xl h-[90vh] bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 rounded-2xl border border-white/20 flex flex-col">
            {/* Form Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Support Form</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Available</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setHelpDeskOpen(false)}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Embedded Microsoft Form */}
            <div className="flex-1 p-4">
              <iframe
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=cjIz-JKnN0WX3m6KSYlSypM9eRCXMTJOuXULqCVk14hUNEFVNjBIVlBTVzMxTjFKSklSVVFIRFkxRy4u&embed=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="OphoWorld Support Form"
              >
                Loading support form...
              </iframe>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Contact;