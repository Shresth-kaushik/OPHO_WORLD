import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap, Layers, Settings, Globe, Users } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const SolutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToSolutions = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to solutions section
    setTimeout(() => {
      const solutionsSection = document.querySelector('#solutions');
      if (solutionsSection) {
        solutionsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };
  const solutionData: { [key: string]: any } = {
    'unified-enterprise-stack': {
      title: 'Unified Enterprise Stack',
      subtitle: 'AI, Security, and Content',
      description: 'Comprehensive integration of artificial intelligence, cybersecurity, and content management systems that creates a seamless digital ecosystem for modern enterprises.',
      image: 'https://plus.unsplash.com/premium_photo-1733317239304-a6bf462a2596?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      technologies: ['Machine Learning', 'Zero Trust Security', 'Cloud Native', 'API-First Architecture'],
      detailedContent: {
        overview: 'Our Unified Enterprise Stack represents a paradigm shift in how organizations approach digital transformation. By integrating AI, security, and content management into a single cohesive platform, we eliminate the traditional silos that hinder business efficiency.',
        keyCapabilities: [
          'Intelligent Process Automation: Leverage machine learning algorithms to automate complex business processes',
          'Integrated Security Framework: Built-in security measures that protect data at every layer',
          'Content Intelligence: AI-driven content analysis and management capabilities',
          'Real-time Analytics: Comprehensive dashboards providing actionable business insights'
        ],
        useCases: [
          'Enterprise Resource Planning (ERP) modernization',
          'Customer Relationship Management (CRM) enhancement',
          'Supply Chain Optimization',
          'Digital Workplace Transformation'
        ]
      }
    },
    'multi-tenant-architecture': {
      title: 'Multi-Tenant Architecture',
      subtitle: 'Scalable and API-Driven',
      description: 'Built for scale with modern microservices architecture and comprehensive API ecosystem that supports unlimited growth and flexibility.',
      image: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      technologies: ['Kubernetes', 'Docker', 'REST APIs', 'GraphQL', 'Microservices'],
      detailedContent: {
        overview: 'Our Multi-Tenant Architecture is designed to support organizations of all sizes, from startups to global enterprises. The platform scales automatically based on demand while maintaining strict data isolation and security.',
        keyCapabilities: [
          'Dynamic Resource Allocation: Automatically adjust computing resources based on real-time demand',
          'API-First Design: Comprehensive API ecosystem enabling seamless integrations',
          'Container Orchestration: Advanced container management for optimal performance',
          'Data Isolation: Secure multi-tenant data separation with enterprise-grade privacy'
        ],
        useCases: [
          'SaaS Platform Development',
          'Multi-Client Service Delivery',
          'Enterprise Application Modernization',
          'Cloud Migration Projects'
        ]
      }
    },
    'industry-agnostic': {
      title: 'Industry Agnostic',
      subtitle: 'Domain-Deep Expertise',
      description: 'Flexible solutions that adapt to any industry while maintaining deep domain knowledge and regulatory compliance requirements.',
      image: 'https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      technologies: ['Low-Code Platform', 'Workflow Engine', 'Compliance Tools', 'Integration Hub'],
      detailedContent: {
        overview: 'Our Industry Agnostic approach means that while our core platform remains consistent, we provide deep customization capabilities that address the unique needs of different industries, from healthcare to finance to manufacturing.',
        keyCapabilities: [
          'Industry Templates: Pre-configured solutions for major industry verticals',
          'Compliance Automation: Built-in regulatory compliance for various industries',
          'Custom Workflow Design: Flexible workflow engines that adapt to industry processes',
          'Integration Ecosystem: Extensive library of industry-specific integrations'
        ],
        useCases: [
          'Healthcare Management Systems',
          'Financial Services Platforms',
          'Manufacturing Operations',
          'Retail and E-commerce Solutions'
        ]
      }
    },
    'universal-deployment': {
      title: 'Universal Deployment',
      subtitle: 'Startups to Government',
      description: 'Scalable solutions designed for organizations of all sizes and complexity levels, from agile startups to large government institutions.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      technologies: ['RBAC', 'SSO', 'SAML', 'OAuth', 'Multi-Factor Auth'],
      detailedContent: {
        overview: 'Universal Deployment ensures that our solutions can be implemented across any organization size or type. Whether you\'re a startup looking for rapid deployment or a government agency requiring strict compliance, our platform adapts to your needs.',
        keyCapabilities: [
          'Scalable Architecture: Grows with your organization from 10 to 10,000+ users',
          'Security Frameworks: Multiple security standards including government-grade protocols',
          'Flexible Licensing: Various pricing and licensing models to fit any budget',
          'Compliance Ready: Built-in compliance for various regulatory requirements'
        ],
        useCases: [
          'Startup Technology Platforms',
          'Mid-Market Enterprise Solutions',
          'Large Corporation Deployments',
          'Government and Public Sector Projects'
        ]
      }
    },
    'cross-vertical-deployment': {
      title: 'Cross-Vertical Deployment',
      subtitle: 'Build Once, Deploy Everywhere',
      description: 'Unified platform that adapts to multiple business verticals without code duplication, enabling rapid expansion across markets.',
      image: 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      technologies: ['CI/CD', 'Infrastructure as Code', 'Container Orchestration', 'DevOps'],
      detailedContent: {
        overview: 'Cross-Vertical Deployment enables organizations to leverage a single platform across multiple business units or market segments. This approach significantly reduces development costs while maintaining consistency and quality.',
        keyCapabilities: [
          'Modular Design: Reusable components that can be configured for different verticals',
          'Automated Deployment: CI/CD pipelines that enable rapid deployment across environments',
          'Configuration Management: Centralized configuration system for multi-vertical deployments',
          'Performance Optimization: Automated performance tuning for different deployment scenarios'
        ],
        useCases: [
          'Multi-Brand Enterprise Platforms',
          'Franchise Management Systems',
          'Multi-Market Product Launches',
          'Global Enterprise Deployments'
        ]
      }
    }
  };

  const solution = solutionData[id || ''];

  if (!solution) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = solution.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 text-white">
      <NavigationBar />
      
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <button
          onClick={handleBackToSolutions}
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Solutions
        </button>
      </div>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{solution.title}</h1>
                  <p className="text-primary-400 font-medium text-lg">{solution.subtitle}</p>
                </div>
              </div>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {solution.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-12">
              {solution.detailedContent.overview}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary-400" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {solution.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                      <CheckCircle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary-400" />
                  Business Benefits
                </h3>
                <div className="space-y-4">
                  {solution.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-white/90 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.detailedContent.keyCapabilities.map((capability: string, index: number) => {
              const [title, description] = capability.split(': ');
              return (
                <div key={index} className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/80 leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.detailedContent.useCases.map((useCase: string, index: number) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your business with {solution.title}. Contact us to learn more about how we can help you achieve your goals.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/30"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SolutionDetail;