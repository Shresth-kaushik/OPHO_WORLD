import React, { useState } from 'react';
import { Building2, Cloud, Shield, Zap, TrendingUp, Users, Brain, Target, BarChart3, Globe } from 'lucide-react';

const StrategicHolding = () => {
  const [activeItem, setActiveItem] = useState(0);

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

  const currentItem = strategicItems[activeItem];
  const IconComponent = currentItem.icon;

  return (
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
                    group cursor-pointer p-6 rounded-2xl border transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-400/50 scale-105' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }
                    backdrop-blur-sm
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      p-3 rounded-xl transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                        : 'bg-white/10 text-gray-300 group-hover:bg-white/20'
                      }
                    `}>
                      <ItemIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`
                        font-semibold transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'}
                      `}>
                        {item.title}
                      </h3>
                      <p className={`
                        text-sm transition-colors duration-300
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full">
              {/* Content Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {currentItem.title}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {currentItem.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {currentItem.description}
              </p>

              {/* Solutions and Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Key Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-blue-500" />
                    <h4 className="text-lg font-semibold text-white">Key Solutions</h4>
                  </div>
                  <div className="space-y-3">
                    {currentItem.solutions.map((solution, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <h4 className="text-lg font-semibold text-white">Key Benefits</h4>
                  </div>
                  <div className="space-y-3">
                    {currentItem.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-gray-300">{benefit}</span>
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
  );
};

export default StrategicHolding;