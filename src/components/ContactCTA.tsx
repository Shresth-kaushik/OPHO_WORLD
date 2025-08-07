import React from 'react';
import { Mail, Phone, Building2, Star, MessageCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <MessageCircle className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="text-white">Get in Touch / Partner </span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your enterprise? Let OphoWorld drive your next wave of innovation, security, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-effect rounded-2xl p-8 h-fit">
            <h3 className="text-xl font-bold text-white mb-6">Start Your Transformation</h3>
            <div className="relative">
              <iframe
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=cjIz-JKnN0WX3m6KSYlSypM9eRCXMTJOuXULqCVk14hUNEFVNjBIVlBTVzMxTjFKSklSVVFIRFkxRy4u&embed=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="OphoWorld Contact Form"
                allowFullScreen
              >
                Loading...
              </iframe>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/80">contact@ophoworld.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary