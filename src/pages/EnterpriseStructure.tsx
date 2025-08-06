import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Rocket, Zap, Layers } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const EnterpriseStructure: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const layers = [
    {
      title: 'Strategy Layer',
      description: 'Vision-Mission Alignment, Portfolio Investment & Innovation, Partnerships & Global Expansion, Compliance, Ethics & IP Management',
      icon: Target,
      items: [
        'Vision-Mission Alignment',
        'Portfolio Investment & Innovation',
        'Partnerships & Global Expansion',
        'Compliance, Ethics & IP Management'
      ]
    },
    {
      title: 'Delivery Layer',
      description: 'Customized PaaS/SaaS, GAP + SWOT Digital Strategies, AI-Based Consulting, 360° Product/Market Enablement',
      icon: Rocket,
      items: [
        'Customized PaaS/SaaS',
        'GAP + SWOT Digital Strategies',
        'AI-Based Consulting',
        '360° Product/Market Enablement'
      ]
    },
    {
      title: 'Enablement Layer',
      description: 'AI/Tech Enablement, Cybersecurity, Digital Intelligence',
      icon: Zap,
      items: [
        'AI/Tech Enablement',
        'Cybersecurity',
        'Digital Intelligence'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

    
      {/* Header Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-primary-400" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Enterprise Structure
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our Three-Layered Approach to Enterprise Success
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-purple to-primary-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="space-y-12">
            {layers.map((layer, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Layer Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300">
                    <layer.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 hover:text-transparent hover:bg-gradient-to-r hover:from-primary-400 hover:to-accent-cyan hover:bg-clip-text transition-all duration-300">
                      {layer.title}
                    </h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-4xl">
                      {layer.description}
                    </p>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="ml-22">
                  <div className={`grid gap-4 ${
                    layer.items.length === 4 
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {layer.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="glass-effect rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group border border-white/10 hover:border-primary-400/30"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-accent-cyan transition-colors duration-300"></div>
                          <span className="text-white/90 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Separator line (except for last item) */}
                {index < layers.length - 1 && (
                  <div className="mt-12 flex justify-center">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto border border-white/10 hover:border-primary-400/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Discover how our three-layered approach can drive your business forward
              </p>
              <Link 
                to="/#contact"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/30 inline-block"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EnterpriseStructure;