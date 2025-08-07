import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Shield, Globe, ArrowRight, ExternalLink, Zap, Target, Settings, TrendingUp, X } from 'lucide-react';

const EcosystemOverview: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const ecosystemComponents = [
    {
      title: 'OphoTech',
      subtitle: 'Technology & AI Enablement Arm',
      description: 'Empowers businesses to integrate scalable, secure, and intelligent systems across product lines',
      icon: Brain,
      items: [
        { name: 'AI/ML Solutions', desc: 'Advanced artificial intelligence and machine learning implementations' },
        { name: 'Data Science as a Service', desc: 'Comprehensive data analytics and insights platform' },
        { name: 'AI-driven Product Transformation', desc: 'Intelligent product evolution and digital transformation' },
        { name: 'Network Partner Integration', desc: 'Seamless integration with technology partners and ecosystems' },
        { name: 'SaaS/PaaS Technical Deployment', desc: 'Cloud-native software and platform deployment solutions' },
        { name: 'End-to-End Digital Architecture', desc: 'Complete digital infrastructure design and implementation' }
      ],
      link: 'https://stellar-kelpie-d06cc0.netlify.app/'
    },
    {
      title: 'OphoSecure',
      subtitle: 'Cybersecurity and Protection Unit',
      description: 'Provides digital trust, system integrity, and business continuity through robust cyber protection',
      icon: Shield,
      items: [
        { name: 'Custom Cybersecurity Tools', desc: 'Tailored security frameworks and protection systems' },
        { name: 'Vulnerability & Threat Monitoring', desc: 'Continuous threat detection and vulnerability assessment' },
        { name: 'Risk Intelligence Systems', desc: 'Advanced risk analysis and intelligence gathering' },
        { name: 'Regulatory Compliance Services', desc: 'Comprehensive compliance management and reporting' },
        { name: 'SOC-as-a-Service (Security Ops)', desc: '24/7 security operations center services' }
      ],
      link: 'https://resilient-lolly-baca8c.netlify.app'
    },
    {
      title: 'OphoDigital',
      subtitle: 'Content, Intelligence & Storytelling Unit',
      description: 'Delivers strategic messaging, intelligence documentation, and multi-perspective narratives',
      icon: Globe,
      items: [
        { name: '360° Content Creation (Text, Visual, Video)', desc: 'Comprehensive multimedia content development' },
        { name: 'Business Model Mapping', desc: 'Strategic business framework design and analysis' },
        { name: 'Perspective Analysis', desc: 'Multi-dimensional viewpoint analysis and insights' },
        { name: 'Strategic Reports', desc: 'In-depth strategic analysis and market intelligence' },
        { name: 'Case Studies, Whitepapers', desc: 'Professional documentation and thought leadership content' },
        { name: 'CX-Driven Campaigns', desc: 'Customer experience focused marketing campaigns' }
      ],
      link: 'https://resilient-lolly-baca8c.netlify.app'
    }
  ];

  const openModal = (index: number) => {
    setSelectedComponent(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedComponent(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="ecosystem" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Zap className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Ecosystem Overview</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-200">
            <span className="text-white">OphoWorld </span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 mb-8">
            A unified ecosystem of specialized solutions designed to transform your business through AI, security, and strategic intelligence
          </p>

          {/* Ecosystem Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Specialized Units</div>
              <div className="text-sm text-white/60">Complete Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">Projects Delivered</div>
              <div className="text-sm text-white/60">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-cyan mb-1">Enterprise Clients</div>
              <div className="text-sm text-white/60">Global Partners</div>
            </div>
          </div>

          {/* Action Buttons */}
       
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ecosystemComponents.map((component, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transition-all duration-500"
              onClick={() => openModal(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className="glass-effect rounded-3xl p-8 h-full transition-all duration-500 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:-translate-y-2 hover:scale-[1.02]">
                
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                    hoveredCard === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    <component.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="transition-all duration-500 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-cyan group-hover:bg-clip-text transition-all duration-300">
                    {component.title}
                  </h3>
                  
                  <p className="text-primary-400 font-medium mb-4 text-sm uppercase tracking-wider">
                    {component.subtitle}
                  </p>
                  
                  <p className="text-white/80 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {component.description}
                  </p>
                </div>

                {/* Action */}
                <div className="flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium mr-2">Click to explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedComponent !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl scrollbar-hide">
            {/* Header */}
            <div className="sticky top-0 bg-gray-800 p-6 border-b border-white/10 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white">
                  {React.createElement(ecosystemComponents[selectedComponent].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{ecosystemComponents[selectedComponent].title}</h3>
                  <p className="text-primary-400 font-medium">{ecosystemComponents[selectedComponent].subtitle}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Role & Responsibility */}
              <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-400" />
                  Role & Responsibility
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {ecosystemComponents[selectedComponent].subtitle}
                </p>
              </div>

              {/* Key Offerings */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-400" />
                  Key Offerings
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ecosystemComponents[selectedComponent].items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <h5 className="font-semibold text-white mb-2 text-sm">{item.name}</h5>
                      <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Value */}
              <div className="mb-8 p-6 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-xl border border-primary-400/20">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  Strategic Value
                </h4>
                <p className="text-white/90 leading-relaxed font-medium">
                  {ecosystemComponents[selectedComponent].description}
                </p>
              </div>

              {/* Detailed Service Breakdown */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary-400" />
                  Service Categories
                </h4>
                <div className="space-y-3">
                  {ecosystemComponents[selectedComponent].items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-white mb-1 text-sm">{item.name}</h5>
                        <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    window.open(ecosystemComponents[selectedComponent].link, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:scale-[1.02] hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Explore {ecosystemComponents[selectedComponent].title}</span>
                </button>
                
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EcosystemOverview;