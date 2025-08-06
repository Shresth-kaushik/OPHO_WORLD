import React from 'react';
import { Brain, Shield, Globe, Settings } from 'lucide-react';

const TechnicalArchitecture: React.FC = () => {
  const modules = [
    {
      title: 'OphoTech',
      icon: Brain,
      items: ['SaaS/PaaS Solutions', 'LLMs/ML Models', 'Platform Build', 'Product Enablers']
    },
    {
      title: 'OphoSecure',
      icon: Shield,
      items: ['Cyber Tools & APIs', 'Compliance Engines', 'Threat Hunting', 'Zero Trust Systems']
    },
    {
      title: 'OphoDigital',
      icon: Globe,
      items: ['Content Pipelines', 'Strategic Analysis', 'CX Documentation', 'Visual Dashboards']
    }
  ];

  return (
    <section id="architecture" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Settings className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Technical Architecture</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="text-white">Modular Technical </span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Architecture</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Composable Solutions for Every Business Need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <module.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
              <ul className="space-y-2 text-white/80">
                {module.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            OphoWorld HQ orchestrates these modules for end-to-end enterprise enablement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;