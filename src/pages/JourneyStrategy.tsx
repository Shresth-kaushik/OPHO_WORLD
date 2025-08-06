import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Layers, 
  Lock, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight,
  Building2,
  Cloud,
  Shield,
  Zap,
  Target,
  Users,
  Brain,
  Globe
} from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const JourneyStrategy: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Client Value Journey Data
  const journeySteps = [
    {
      title: 'Content & Communication',
      subtitle: 'Strategy Reports, CX Communication',
      icon: MessageSquare,
      description: 'We begin by understanding your vision and crafting strategic communication frameworks that align with your business objectives and stakeholder expectations.',
      details: [
        'Strategic messaging development and brand positioning',
        'Stakeholder communication plans and engagement strategies',
        'Content strategy frameworks and editorial guidelines',
        'Brand voice development and messaging consistency'
      ]
    },
    {
      title: 'Assessment & Research',
      subtitle: 'GAP Analysis, SWOT Analysis',
      icon: BarChart3,
      description: 'Comprehensive analysis of your current state, identifying opportunities and challenges to create a detailed roadmap for digital transformation.',
      details: [
        'Current state assessment and capability mapping',
        'Market opportunity analysis and competitive landscape',
        'Risk assessment and mitigation strategy development',
        'Performance benchmarking and KPI establishment'
      ]
    },
    {
      title: 'Solution Design',
      subtitle: 'AI-driven Blueprint, Risk-Aware Architecture',
      icon: Settings,
      description: 'Custom solution architecture designed with AI capabilities and comprehensive risk mitigation strategies tailored to your specific business needs.',
      details: [
        'AI-powered solution blueprints and system architecture',
        'Risk-aware design patterns and security frameworks',
        'Scalability planning and performance optimization',
        'Technology stack selection and integration planning'
      ]
    },
    {
      title: 'Development & Deployment',
      subtitle: 'SaaS/PaaS Models, Custom Platforms',
      icon: Layers,
      description: 'Implementation of scalable solutions using modern cloud architectures and agile deployment methodologies for optimal performance and reliability.',
      details: [
        'Cloud-native development and microservices architecture',
        'Agile deployment processes and CI/CD pipeline setup',
        'Performance optimization and load testing',
        'Quality assurance testing and security validation'
      ]
    },
    {
      title: 'Security Enablement',
      subtitle: 'Cyber Hygiene, Threat Detection Systems',
      icon: Lock,
      description: 'Comprehensive security implementation ensuring your digital assets are protected with enterprise-grade cybersecurity measures and compliance frameworks.',
      details: [
        'Zero-trust security architecture implementation',
        'Advanced threat monitoring and detection systems',
        'Compliance framework setup and audit preparation',
        'Security training programs and awareness campaigns'
      ]
    },
    {
      title: 'Support & Evolution',
      subtitle: 'AI Model Updates, Strategic Consulting',
      icon: TrendingUp,
      description: 'Ongoing support and continuous improvement through AI model optimization, strategic business consulting, and performance analytics.',
      details: [
        'Continuous system monitoring and performance optimization',
        'AI model refinement and algorithm improvements',
        'Strategic business consulting and growth planning',
        'Advanced analytics and business intelligence insights'
      ]
    }
  ];

  // Strategic Holdings Data
  const strategicItems = [
    {
      id: 'saas-paas-deployment',
      icon: Cloud,
      title: 'SaaS and PaaS Deployment Models',
      subtitle: 'Cloud Solutions, Scalability',
      description: 'Comprehensive cloud deployment strategies that enable organizations to leverage Software-as-a-Service and Platform-as-a-Service models for enhanced scalability and operational efficiency.',
      solutions: [
        'SaaS Application Development',
        'PaaS Platform Integration',
        'Cloud-Native Architecture',
        'Scalable Infrastructure Design',
        'Multi-Tenant Solutions',
        'API-First Development'
      ],
      benefits: [
        'Rapid Deployment',
        'Cost-Effective Scaling',
        'Reduced Infrastructure Overhead',
        'Enhanced Flexibility',
        'Improved Time-to-Market',
        'Seamless Integration'
      ]
    },
    {
      id: 'business-research-analysis',
      icon: TrendingUp,
      title: 'Business Research & Analysis',
      subtitle: 'Market Trends, Consumer Behavior',
      description: 'In-depth business research and analytical services that provide actionable insights into market trends, consumer behavior patterns, and competitive landscapes.',
      solutions: [
        'Market Trend Analysis',
        'Consumer Behavior Studies',
        'Competitive Intelligence',
        'Industry Benchmarking',
        'Customer Journey Mapping',
        'Market Segmentation Analysis'
      ],
      benefits: [
        'Data-Driven Decision Making',
        'Market Opportunity Identification',
        'Consumer Insight Generation',
        'Competitive Advantage',
        'Risk Mitigation',
        'Strategic Planning Support'
      ]
    },
    {
      id: 'ai-enabled-enterprise',
      icon: Brain,
      title: 'AI-Enabled Enterprise Solutions',
      subtitle: 'AI Integration, Automation',
      description: 'Advanced artificial intelligence solutions that transform enterprise operations through intelligent automation, machine learning integration, and cognitive computing capabilities.',
      solutions: [
        'AI Integration Platforms',
        'Intelligent Process Automation',
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'Cognitive Computing Solutions'
      ],
      benefits: [
        'Operational Efficiency',
        'Automated Decision Making',
        'Enhanced Productivity',
        'Predictive Capabilities',
        'Cost Optimization',
        'Innovation Acceleration'
      ]
    },
    {
      id: 'go-to-market-strategy',
      icon: Target,
      title: 'Go-to-Market Strategy & Product Enablement',
      subtitle: 'Marketing Strategies, Product Development',
      description: 'Comprehensive go-to-market strategies and product enablement services that accelerate market entry, optimize product positioning, and drive sustainable growth.',
      solutions: [
        'Market Entry Strategies',
        'Product Positioning',
        'Marketing Campaign Development',
        'Sales Enablement Tools',
        'Product Development Support',
        'Channel Strategy Optimization'
      ],
      benefits: [
        'Faster Market Penetration',
        'Optimized Product-Market Fit',
        'Enhanced Brand Positioning',
        'Increased Revenue Generation',
        'Improved Customer Acquisition',
        'Sustainable Growth'
      ]
    },
    {
      id: 'swot-gap-analysis',
      icon: BarChart3,
      title: 'SWOT & GAP Analysis',
      subtitle: 'Strengths, Weaknesses',
      description: 'Comprehensive SWOT and GAP analysis services that identify organizational strengths, weaknesses, opportunities, and threats while highlighting performance gaps and improvement areas.',
      solutions: [
        'Strengths Assessment',
        'Weakness Identification',
        'Opportunity Mapping',
        'Threat Analysis',
        'Performance Gap Analysis',
        'Strategic Recommendations'
      ],
      benefits: [
        'Strategic Clarity',
        'Performance Optimization',
        'Risk Awareness',
        'Opportunity Identification',
        'Competitive Positioning',
        'Informed Decision Making'
      ]
    },
    {
      id: 'market-intelligence',
      icon: Globe,
      title: 'Market Intelligence & Strategic Positioning',
      subtitle: 'Competitive Analysis, Market Segmentation',
      description: 'Advanced market intelligence and strategic positioning services that provide deep competitive analysis, market segmentation insights, and strategic positioning recommendations.',
      solutions: [
        'Competitive Analysis',
        'Market Segmentation',
        'Strategic Positioning',
        'Market Research',
        'Industry Intelligence',
        'Positioning Strategy Development'
      ],
      benefits: [
        'Competitive Advantage',
        'Market Leadership',
        'Strategic Differentiation',
        'Market Share Growth',
        'Brand Positioning',
        'Strategic Clarity'
      ]
    },
    {
      id: 'industry-reports',
      icon: Building2,
      title: 'Industry Reports, Insights & Policy Advisories',
      subtitle: 'Policy Analysis, Industry Insights',
      description: 'Comprehensive industry reports, strategic insights, and policy advisory services that provide deep industry knowledge, regulatory guidance, and strategic recommendations.',
      solutions: [
        'Industry Analysis Reports',
        'Policy Impact Assessment',
        'Regulatory Compliance Guidance',
        'Industry Trend Analysis',
        'Strategic Insights',
        'Policy Advisory Services'
      ],
      benefits: [
        'Industry Expertise',
        'Regulatory Compliance',
        'Strategic Guidance',
        'Risk Mitigation',
        'Policy Alignment',
        'Informed Decision Making'
      ]
    }
  ];

  // Auto-play functionality for journey
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, journeySteps.length]);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % journeySteps.length);
    setIsAutoPlaying(false);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
    setIsAutoPlaying(false);
  };

  const goToStep = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const currentStep = journeySteps[activeStep];
  const currentItem = strategicItems[activeItem];
  const IconComponent = currentItem.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>


      {/* Header Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Value Journey & Strategic Holdings
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive approach to value delivery and strategic solution enablement
            </p>
          </div>
        </div>
      </section>

      {/* Client Value Journey Section */}
      <section className="py-16 bg-gradient-to-br from-primary-950 via-primary-dark to-primary-medium relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-600/20 to-primary-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <TrendingUp className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Client Value Journey</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
              <span className="text-white">Client Value </span>
              <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              How We Deliver Value, Every Step of the Way
            </p>
          </div>

          {/* Main Content Area */}
          <div className="mb-20">
            {/* Content Display */}
            <div className="relative min-h-[500px] mb-16">
              <div className="glass-effect rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 backdrop-blur-xl">
                {/* Content Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg">
                    <currentStep.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-bold rounded-full border border-primary-500/30">
                        {String(activeStep + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        {currentStep.title}
                      </h3>
                    </div>
                    <p className="text-primary-400 font-medium text-base md:text-lg uppercase tracking-wider">
                      {currentStep.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Description */}
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">
                  {currentStep.description}
                </p>

                {/* Key Deliverables */}
                <div>
                  <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-500"></div>
                    Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentStep.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/20"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-white/80 group-hover:text-white/90 transition-colors duration-300 font-medium leading-relaxed text-sm md:text-base">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Navigation Controls */}
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prevStep}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="text-center">
                  <div className="text-sm text-white/60 mb-1">Step</div>
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {String(activeStep + 1).padStart(2, '0')} / {String(journeySteps.length).padStart(2, '0')}
                  </div>
                </div>
                
                <button
                  onClick={nextStep}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Timeline Container */}
              <div className="relative px-2 md:px-8 pt-8">
                {/* Timeline Line */}
                <div className="absolute top-16 left-2 right-2 md:left-0 md:right-0 h-0.5 bg-white/20"></div>
                
                {/* Progress Line */}
                <div 
                  className="absolute top-16 left-2 md:left-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 transition-all duration-1000 ease-out"
                  style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }}
                ></div>

                {/* Timeline Steps */}
                <div className="relative overflow-x-auto scrollbar-hide pt-4">
                  <div className="flex justify-between items-start min-w-max md:min-w-0 px-2 md:px-0" style={{ minWidth: '600px' }}>
                  {journeySteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center group cursor-pointer flex-1 min-w-0 pb-4" onClick={() => goToStep(index)}>
                      {/* Step Circle */}
                      <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 mb-4 ${
                        index === activeStep
                          ? 'bg-gradient-to-r from-primary-400 to-primary-500 border-white shadow-lg shadow-primary-500/30 scale-110'
                          : index < activeStep
                            ? 'bg-primary-500 border-primary-400'
                            : 'bg-white/10 border-white/30 hover:border-white/50 hover:scale-105'
                      }`}>
                        <step.icon className={`w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 transition-colors duration-500 ${
                          index <= activeStep ? 'text-white' : 'text-white/60'
                        }`} />
                        
                        {/* Step Number */}
                        <div className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-500 ${
                          index === activeStep
                            ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-white'
                            : index < activeStep
                              ? 'bg-primary-500 text-white'
                              : 'bg-white/20 text-white/60'
                        }`}>
                          {index + 1}
                        </div>
                      </div>

                      {/* Step Label */}
                      <div className="text-center w-20 md:w-32 px-1 mt-2">
                        <div className={`text-xs md:text-sm font-semibold mb-1 transition-colors duration-500 leading-tight ${
                          index === activeStep
                            ? 'text-transparent bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text'
                            : index < activeStep
                              ? 'text-primary-400'
                              : 'text-white/60 group-hover:text-white/80'
                        }`}>
                          {step.title}
                        </div>
                        <div className={`text-xs transition-colors duration-500 leading-tight hidden md:block ${
                          index === activeStep ? 'text-white/90' : 'text-white/50'
                        }`}>
                          {step.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>

              {/* Auto-play Indicator */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isAutoPlaying 
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30' 
                      : 'bg-white/10 text-white/60 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {isAutoPlaying ? 'Auto-playing' : 'Click to auto-play'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Holdings Section */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-dark to-primary-medium relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Building2 className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Strategic Holdings</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
              <span className="text-white">
              Strategic Holding &{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Solution Enabler
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Delivering specialized technology solutions across diverse industries, helping organizations 
              transform their operations and achieve sustainable growth through innovative solutions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Navigation */}
            <div className="lg:col-span-2 space-y-4">
              {strategicItems.map((item, index) => {
                const ItemIcon = item.icon;
                const isActive = activeItem === index;
                
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(index)}
                    className={`
                      group cursor-pointer p-4 md:p-6 rounded-2xl border transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-400/50 scale-105' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }
                      backdrop-blur-sm
                    `}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`
                        p-2 md:p-3 rounded-xl transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                          : 'bg-white/10 text-gray-300 group-hover:bg-white/20'
                        }
                      `}>
                        <ItemIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`
                          font-semibold transition-colors duration-300 text-sm md:text-base
                          ${isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'}
                        `}>
                          {item.title}
                        </h3>
                        <p className={`
                          text-xs md:text-sm transition-colors duration-300
                          ${isActive ? 'text-blue-300' : 'text-gray-400 group-hover:text-gray-300'}
                        `}>
                          {item.subtitle}
                        </p>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 h-full">
                {/* Content Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {currentItem.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm md:text-base uppercase tracking-wider">
                      {currentItem.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                  {currentItem.description}
                </p>

                {/* Solutions and Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Key Solutions */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-blue-500" />
                      <h4 className="text-base md:text-lg font-semibold text-white">Key Solutions</h4>
                    </div>
                    <div className="space-y-3">
                      {currentItem.solutions.map((solution, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-300 text-sm md:text-base">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <h4 className="text-base md:text-lg font-semibold text-white">Key Benefits</h4>
                    </div>
                    <div className="space-y-3">
                      {currentItem.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-gray-300 text-sm md:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JourneyStrategy;