import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Play, Calendar, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleScheduleDemo = () => {
    // Close modal first
    onClose();
    
    // Navigate to contact page
    navigate('/contact');
  };

  const handleContinueBrowsing = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleBackdropClick}
      ></div>
      
      {/* Modal Container - Fixed height with scroll */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video Section - Fixed height */}
        <div className="relative bg-black rounded-t-2xl overflow-hidden flex-shrink-0">
          <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            {!isVideoPlaying ? (
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1754039984985-ef607d80113a?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Demo"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ) : (
              <div className="w-full h-full relative">
                <div className="w-full h-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1754039984985-ef607d80113a?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Demo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                OphoWorld Demo
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                See how we transform businesses with our integrated technology solutions.
                Watch real implementations and results from our client success stories.
              </p>
            </div>

            {/* Demo Features */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-xl font-bold text-primary-400 mb-2">01</div>
                <h3 className="text-base font-semibold text-white mb-2">Security Implementation</h3>
                <p className="text-sm text-gray-400">Enterprise-grade security deployment and monitoring systems with real-time threat detection</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-xl font-bold text-primary-400 mb-2">02</div>
                <h3 className="text-base font-semibold text-white mb-2">AI Automation Setup</h3>
                <p className="text-sm text-gray-400">Intelligent workflow automation and process optimization with machine learning capabilities</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-xl font-bold text-primary-400 mb-2">03</div>
                <h3 className="text-base font-semibold text-white mb-2">Performance Analytics</h3>
                <p className="text-sm text-gray-400">Real-time insights and predictive business intelligence with customizable dashboards</p>
              </div>
            </div>

            {/* Additional Demo Information */}
            <div className="bg-gray-800/30 rounded-lg p-6 mb-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">What You'll See in This Demo:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Live Dashboard Setup</h4>
                      <p className="text-sm text-gray-400">Real-time configuration of analytics dashboards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">AI Model Deployment</h4>
                      <p className="text-sm text-gray-400">Step-by-step AI solution implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Security Protocols</h4>
                      <p className="text-sm text-gray-400">Enterprise security implementation walkthrough</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Cloud Migration</h4>
                      <p className="text-sm text-gray-400">Seamless cloud infrastructure transition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">Performance Metrics</h4>
                      <p className="text-sm text-gray-400">Real-time monitoring and optimization results</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-medium">ROI Analysis</h4>
                      <p className="text-sm text-gray-400">Measurable business impact demonstration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleScheduleDemo}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
              >
                <Calendar className="w-4 h-4" />
                Schedule Live Demo
              </button>
              
              <button
                onClick={handleContinueBrowsing}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 transition-all duration-300 hover:scale-105"
              >
                Continue Browsing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;