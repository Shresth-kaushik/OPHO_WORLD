import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Handshake, TrendingUp, Target, Users, Lightbulb, ArrowRight } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const ConnectCreateEvolve: React.FC = () => {
  const [activeSection, setActiveSection] = useState('connect');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle section navigation from URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['connect', 'create', 'evolve'].includes(hash)) {
      setActiveSection(hash);
      // Scroll to section after a brief delay
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const sections = [
    {
      id: 'connect',
      title: 'Connect',
      icon: Handshake,
      meaning: 'Build authentic relationships across industries, institutions, and individuals through strategic partnerships, digital presence, and integrated platforms.',
      transformation: 'Converts fragmented potential into unified value networks, enabling visibility, trust, and seamless access.',
      features: [
        'Strategic Partnership Development',
        'Digital Presence Optimization',
        'Integrated Platform Solutions',
        'Cross-Industry Networking',
        'Trust Building Frameworks',
        'Seamless Access Systems'
      ],
      benefits: [
        'Enhanced Visibility',
        'Stronger Trust Networks',
        'Unified Value Creation',
        'Strategic Alignment',
        'Seamless Integration',
        'Sustainable Partnerships'
      ],
      image: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbm5lY3R8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 'create',
      title: 'Create',
      icon: Settings,
      meaning: 'Design innovative, need-based, and insight-driven solutions that solve real problems across sectors and domains.',
      transformation: 'Transforms ideas into scalable offerings through co-innovation, agile execution, and market relevance.',
      features: [
        'Innovation Design Thinking',
        'Need-Based Solution Development',
        'Insight-Driven Architecture',
        'Cross-Sector Problem Solving',
        'Co-Innovation Platforms',
        'Agile Execution Frameworks'
      ],
      benefits: [
        'Scalable Innovation',
        'Market-Relevant Solutions',
        'Agile Development',
        'Cross-Sector Impact',
        'Sustainable Growth',
        'Competitive Advantage'
      ],
      image: 'https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlYXRlfGVufDB8fDB8fHww'
    },
    {
      id: 'evolve',
      title: 'Evolve',
      icon: TrendingUp,
      meaning: 'Continuously adapt, refine, and elevate value propositions through feedback, learning, and technological shifts.',
      transformation: 'Evolves static capabilities into future-ready, intelligent, and sustainable systems that lead markets.',
      features: [
        'Continuous Adaptation Systems',
        'Value Proposition Refinement',
        'Feedback-Driven Learning',
        'Technology Shift Management',
        'Future-Ready Architecture',
        'Market Leadership Strategies'
      ],
      benefits: [
        'Future-Ready Systems',
        'Intelligent Adaptation',
        'Market Leadership',
        'Sustainable Innovation',
        'Continuous Improvement',
        'Competitive Evolution'
      ],
      image: 'https://images.unsplash.com/photo-1558851651-cc2771faea1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXZvbHZlfGVufDB8fDB8fHww'
    }
  ];

  const currentSection = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}

      {/* Dynamic Section Content */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-gradient-to-br from-primary-950 via-primary-dark to-primary-medium' : 'bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950'} relative overflow-hidden`}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-accent-purple to-primary-600 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={`${index % 2 === 0 ? 'order-1' : index === 1 ? 'order-1' : 'order-2'}`}>
                <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <section.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-medium text-white/80 uppercase tracking-wider">{section.title}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  <span className="text-white">{index + 1}. </span>
                  <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">
                    {section.title.toUpperCase()}
                  </span>
                </h2>

                {/* Meaning */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-400" />
                    Meaning
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {section.meaning}
                  </p>
                </div>

                {/* Transformation */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary-400" />
                    Transformation
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {section.transformation}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 0 ? 'order-2' : index === 1 ? 'order-2' : 'order-1'}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
                  
                  {/* Floating icon overlay */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-primary-400" />
                  </div>
                </div>
              </div>
            </div>

           
         
          </div>
        </section>
      ))}

      {/* GTM Summary Strategy */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-accent-purple to-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/20 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">GTM Summary Strategy</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Start by <span className="text-primary-400 font-semibold">connecting</span> with high-impact partners and users → <span className="text-accent-cyan font-semibold">create</span> meaningful, tech-enabled solutions around their pain points → rapidly <span className="text-green-400 font-semibold">evolve</span> based on engagement metrics, market shifts, and innovation cycles.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ConnectCreateEvolve;