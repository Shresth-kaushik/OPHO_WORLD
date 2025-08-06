import React from 'react';
import { Brain, Shield, Globe, Building } from 'lucide-react';

const SubsidiaryFunctions: React.FC = () => {
  const subsidiaries = [
    {
      title: 'OphoTech',
      role: 'Technology & AI Enablement Arm',
      icon: Brain,
      offerings: [
        'AI/ML Solutions',
        'Data Science as a Service',
        'AI-driven Product Transformation',
        'Network Partner Integration',
        'SaaS/PaaS Technical Deployment',
        'End-to-End Digital Architecture'
      ],
      strategicValue: 'Empowers businesses to integrate scalable, secure, and intelligent systems across product lines'
    },
    {
      title: 'OphoSecure',
      role: 'Cybersecurity and Protection Unit',
      icon: Shield,
      offerings: [
        'Custom Cybersecurity Tools',
        'Vulnerability & Threat Monitoring',
        'Risk Intelligence Systems',
        'Regulatory Compliance Services',
        'SOC-as-a-Service (Security Ops)'
      ],
      strategicValue: 'Provides digital trust, system integrity, and business continuity through robust cyber protection'
    },
    {
      title: 'OphoDigital',
      role: 'Content, Intelligence & Storytelling Unit',
      icon: Globe,
      offerings: [
        '360° Content Creation (Text, Visual, Video)',
        'Business Model Mapping',
        'Perspective Analysis',
        'Strategic Reports',
        'Case Studies, Whitepapers',
        'CX-Driven Campaigns'
      ],
      strategicValue: 'Delivers strategic messaging, intelligence documentation, and multi-perspective narratives'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-dark to-primary-medium">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Building className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Subsidiary Functions</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="text-white">Subsidiary Units & Enterprise </span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Functions</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Roles, Offerings, and Strategic Value
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              className="glass-effect p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <subsidiary.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{subsidiary.title}</h3>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">{subsidiary.role}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Offerings</h4>
                  <ul className="text-sm text-white/80 space-y-1">
                    {subsidiary.offerings.map((offering, offeringIndex) => (
                      <li key={offeringIndex} className="leading-relaxed">• {offering}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Strategic Value</h4>
                  <p className="text-sm text-white/80 leading-relaxed">{subsidiary.strategicValue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidiaryFunctions;