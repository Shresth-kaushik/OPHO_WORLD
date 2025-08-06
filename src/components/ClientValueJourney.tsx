import React, { useState, useEffect } from 'react';
import { MessageSquare, BarChart3, Settings, Layers, Lock, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const ClientValueJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-play functionality
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

  return (
    <section 
      id="journey" 
      className="py-20 bg-gradient-to-br from-primary-950 via-primary-dark to-primary-medium relative overflow-hidden"
    >
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
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
            <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl">
              {/* Content Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg">
                  <currentStep.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-bold rounded-full border border-primary-500/30">
                      {String(activeStep + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {currentStep.title}
                    </h3>
                  </div>
                  <p className="text-primary-400 font-medium text-lg uppercase tracking-wider">
                    {currentStep.subtitle}
                  </p>
                </div>
              </div>

              {/* Content Description */}
              <p className="text-white/90 text-xl leading-relaxed mb-10">
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
                      <span className="text-white/80 group-hover:text-white/90 transition-colors duration-300 font-medium leading-relaxed">
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
                <div className="text-2xl font-bold text-white">
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
                    <div className={`relative w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 mb-4 ${
                      index === activeStep
                        ? 'bg-gradient-to-r from-primary-400 to-primary-500 border-white shadow-lg shadow-primary-500/30 scale-110'
                        : index < activeStep
                          ? 'bg-primary-500 border-primary-400'
                          : 'bg-white/10 border-white/30 hover:border-white/50 hover:scale-105'
                    } md:w-16 md:h-16 w-12 h-12`}>
                      <step.icon className={`w-5 h-5 md:w-7 md:h-7 transition-colors duration-500 ${
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
                      <div className={`text-sm font-semibold mb-1 transition-colors duration-500 ${
                        index === activeStep
                          ? 'text-transparent bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text'
                          : index < activeStep
                            ? 'text-primary-400'
                            : 'text-white/60 group-hover:text-white/80'
                      } text-xs md:text-sm leading-tight`}>
                        {step.title}
                      </div>
                      <div className={`text-xs transition-colors duration-500 leading-tight ${
                        index === activeStep ? 'text-white/90' : 'text-white/50'
                      } hidden md:block`}>
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
  );
};

export default ClientValueJourney;