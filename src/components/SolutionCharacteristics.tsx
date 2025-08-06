import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Settings, Globe, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import DemoModal from './DemoModal';

const SolutionCharacteristics: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const characteristics = [
    {
      id: 'unified-enterprise-stack',
      title: 'Unified Enterprise Stack',
      subtitle: 'AI, Security, and Content',
      description: 'Comprehensive integration of artificial intelligence, cybersecurity, and content management systems.',
      icon: Layers,
      features: [
        'AI-powered automation and decision making',
        'Enterprise-grade security protocols',
        'Unified content management platform',
        'Real-time data synchronization'
      ],
      benefits: [
        'Reduced operational complexity',
        'Enhanced security posture',
        'Improved productivity by 40%',
        'Seamless workflow integration'
      ],
      technologies: ['Machine Learning', 'Zero Trust Security', 'Cloud Native', 'API-First Architecture']
    },
    {
      id: 'multi-tenant-architecture',
      title: 'Multi-Tenant Architecture',
      subtitle: 'Scalable and API-Driven',
      description: 'Built for scale with modern microservices architecture and comprehensive API ecosystem.',
      icon: Settings,
      features: [
        'Microservices-based architecture',
        'RESTful and GraphQL APIs',
        'Auto-scaling infrastructure',
        'Multi-tenant data isolation'
      ],
      benefits: [
        'Infinite scalability potential',
        'Faster time-to-market',
        'Cost-effective resource utilization',
        'Enhanced system reliability'
      ],
      technologies: ['Kubernetes', 'Docker', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      id: 'industry-agnostic',
      title: 'Industry Agnostic',
      subtitle: 'Domain-Deep Expertise',
      description: 'Flexible solutions that adapt to any industry while maintaining deep domain knowledge.',
      icon: Globe,
      features: [
        'Configurable industry templates',
        'Regulatory compliance frameworks',
        'Custom workflow engines',
        'Industry-specific integrations'
      ],
      benefits: [
        'Faster implementation cycles',
        'Reduced customization costs',
        'Compliance-ready solutions',
        'Industry best practices built-in'
      ],
      technologies: ['Low-Code Platform', 'Workflow Engine', 'Compliance Tools', 'Integration Hub']
    },
    {
      id: 'universal-deployment',
      title: 'Universal Deployment',
      subtitle: 'Startups to Government',
      description: 'Scalable solutions designed for organizations of all sizes and complexity levels.',
      icon: Users,
      features: [
        'Flexible pricing models',
        'Scalable user management',
        'Enterprise security standards',
        'Government-grade compliance'
      ],
      benefits: [
        'Cost-effective for all sizes',
        'Seamless scaling capabilities',
        'Enterprise-ready from day one',
        'Regulatory compliance built-in'
      ],
      technologies: ['RBAC', 'SSO', 'SAML', 'OAuth', 'Multi-Factor Auth']
    },
    {
      id: 'cross-vertical-deployment',
      title: 'Cross-Vertical Deployment',
      subtitle: 'Build Once, Deploy Everywhere',
      description: 'Unified platform that adapts to multiple business verticals without code duplication.',
      icon: Zap,
      features: [
        'Modular component library',
        'Configuration-driven customization',
        'Automated deployment pipelines',
        'Cross-platform compatibility'
      ],
      benefits: [
        'Reduced development time by 60%',
        'Consistent user experience',
        'Lower maintenance overhead',
        'Faster market expansion'
      ],
      technologies: ['CI/CD', 'Infrastructure as Code', 'Container Orchestration', 'DevOps']
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-primary-950 via-primary-dark to-primary-medium relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-accent-cyan to-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-primary-600 to-accent-purple rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Zap className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Solution Characteristics</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
            <span className="text-white">What Sets Us </span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Apart</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Our unique approach combines cutting-edge technology with proven methodologies to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characteristics.map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 relative overflow-hidden cursor-pointer flex flex-col h-full"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm text-primary-400 mb-4 font-medium">
                  {item.subtitle}
                </p>
                
                <p className="text-base text-white/80 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300 flex-grow">
                  {item.description}
                </p>

                {/* Key highlights */}
                <div className="space-y-2 mb-8">
                  {item.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Learn more button */}
                <div className="mt-auto">
                  <Link
                    to={`/solution/${item.id}`}
                    className="flex items-center text-primary-400 hover:text-white transition-all duration-300 transform hover:translate-x-1 group/btn backdrop-blur-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10 hover:border-primary-400/50"
                  >
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Experience the OphoWorld Difference</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Join hundreds of enterprises who have transformed their operations with our comprehensive solutions
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/30 inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Demo Modal */}
        <DemoModal 
          isOpen={isDemoModalOpen} 
          onClose={() => setIsDemoModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default SolutionCharacteristics;
