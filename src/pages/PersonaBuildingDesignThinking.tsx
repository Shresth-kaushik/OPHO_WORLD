import React, { useEffect } from 'react';
import { UserRound, Target, Users, CheckCircle, Zap } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const PersonaBuildingDesignThinking: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const businessImpacts = [
    {
      title: 'Higher conversion',
      description: 'Persona-driven targeting increases conversion rates by up to 35%',
      percentage: '35%'
    },
    {
      title: 'Efficient marketing spend',
      description: 'Focused campaigns reduce costs by 20% while maximizing ROI',
      percentage: '20%'
    },
    {
      title: 'Enhanced customer experience',
      description: 'Design thinking improves usability scores by 40%',
      percentage: '40%'
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
                <UserRound className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Customer Intelligence</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Persona-Building &{' '}
                <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">
                  Design Thinking Integration
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                OphoWorld combines AI-powered data analytics with design thinking workshops to create detailed, 
                dynamic customer personas that guide solution design and marketing strategies.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERlc2lnbiUyMFRoaW5raW5nfGVufDB8fDB8fHww"
                  alt="Persona-Building & Design Thinking Integration"
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
              This integrated approach ensures solutions and campaigns resonate with target segments, improving 
              conversion rates and customer satisfaction while reducing resource wastage on misaligned efforts.
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
              OphoWorld's persona and design thinking framework empowers clients to deliver tailored, impactful 
              customer experiences.
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

export default PersonaBuildingDesignThinking;