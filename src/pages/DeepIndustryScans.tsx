import React, { useEffect } from 'react';
import { Search, Target, Users, CheckCircle, Zap } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const DeepIndustryScans: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const businessImpacts = [
    {
      title: 'Increased foresight',
      description: 'Early detection of market signals reduces business risks by 30%',
      percentage: '30%'
    },
    {
      title: 'Faster decision-making',
      description: 'Clients shorten their strategic planning cycles by 25% using timely insights',
      percentage: '25%'
    },
    {
      title: 'Revenue growth',
      description: 'Targeted opportunity identification contributes to an average 20% increase in new business initiatives',
      percentage: '20%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Search className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Market Gaps & Trends</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Deep Industry Scans &{' '}
                <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">
                  Signal Tracking
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                OphoWorld leverages AI-driven market intelligence tools to conduct comprehensive industry scans, 
                competitive analysis, and real-time signal tracking to identify emerging trends, risks, and 
                opportunities for clients across sectors.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0JTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D"
                  alt="Deep Industry Scans & Signal Tracking"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Business Case */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary-400" />
              Strategic Business Case
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              By integrating multi-source data and advanced analytics, OphoWorld delivers actionable insights 
              that enable businesses to anticipate market shifts, optimize strategic decisions, and mitigate 
              risks effectively. This proactive approach enhances client responsiveness and competitive positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Business Impact
            </h2>
            <p className="text-lg text-gray-300">
              OphoWorld's continuous industry scanning capability empowers clients with superior market 
              intelligence, driving smarter and faster business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessImpacts.map((impact, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{impact.percentage}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 capitalize">{impact.title}</h3>
                <p className="text-gray-300 leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeepIndustryScans;