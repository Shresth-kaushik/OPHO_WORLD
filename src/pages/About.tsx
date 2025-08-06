import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, MapPin, Award, Globe, User, ArrowLeft } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client Success',
      description: 'Your success is our success. We build lasting partnerships through exceptional service and results.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business relationships.'
    }
  ];

  const leadership = [
    {
      name: 'Mr. Bhavneet',
      position: 'Founder',
      image: '/member_3.jpeg',
      bio: 'Visionary entrepreneur with extensive experience in organizational leadership, AI, and strategic innovation',
      expertise: ['Organizational Leadership', 'Artificial Intelligence (AI)', 'Strategic Visionary', 'Team Building', 'Creativity and Innovation'],
      id: 'bhavneet'
    },
    {
      name: 'Mr. Shivender Sofat',
      position: 'Advisory Board Member',
      image: '/member_1.jpeg',
      bio: 'CPA, CFE, FCA - Seasoned finance professional with extensive US & India experience',
      expertise: ['Corporate Finance', 'Taxation', 'Audit & Compliance'],
      id: 'shivender-sofat'
    },
    {
      name: 'Mr. Rajvir Singh',
      position: 'Advisory Board Member',
      image: '/member_2.jpeg',
      bio: 'ICS 1991 - Retired as Addl.Dy CAG at Special Secretary level, Government of India',
      expertise: ['Government Administration', 'Legal Affairs', 'Financial Audit', 'Sports Development'],
      id: 'rajvir-singh'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>


      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-1 lg:order-1">
              {/* Decorative line */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
                <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                  Story
                </span>
              </h1>
              
              {/* Bottom decorative element */}
              <div className="flex items-center mb-8">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
                <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                Founded in 2019, Opho World is the leader in global technology solutions and we are passionate about infusing intelligence into every business decision. We believe by having visibility to the right information early, businesses can directly impact success and profitability, and optimize all aspects across the technology lifecycle.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="order-2 lg:order-2 w-full">
              <div className="relative w-full">
                <div className="glass-effect overflow-hidden border border-white/20 backdrop-blur-xl rounded-lg">
                  <img
                    src="/cce_world.png"
                    alt="OphoWorld team collaboration and innovation"
                    className="w-full h-auto max-h-[70vh] object-cover aspect-video sm:aspect-[4/3] md:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="glass-effect rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-center">
              {activeTab === 'mission' && (
                <div className="animate-fade-in-up">
                  <Target className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    At OphoWorld, our mission is to revolutionize the way businesses leverage technology to achieve their goals. We are committed to delivering exceptional AI-enabled enterprise solutions that exceed client expectations, enhance operational efficiency, and drive sustainable growth. Through continuous innovation and strategic partnerships, we strive to be the trusted partner for businesses seeking to thrive in the digital age.
                  </p>
                </div>
              )}
              
              {activeTab === 'vision' && (
                <div className="animate-fade-in-up">
                  <Eye className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Our vision at OphoWorld is to be at the forefront of AI and cybersecurity innovation, shaping the future of enterprise technology worldwide. We envision a world where businesses harness the full potential of artificial intelligence, secure digital transformation, and strategic intelligence to solve complex challenges, drive innovation, and create lasting value. By empowering organizations with our unified ecosystem of OphoTech, OphoSecure, and OphoDigital solutions, we aspire to drive positive change and shape a brighter, more secure, and connected future.
                  </p>
                </div>
              )}
              
              {activeTab === 'values' && (
                <div className="animate-fade-in-up">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                          {value.icon}
                        </div>
                        <h5 className="text-lg font-bold text-white mb-3">{value.title}</h5>
                        <p className="text-sm text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-300">Meet the visionaries driving our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {leadership.map((leader, index) => (
              <Link
                key={index}
                to={`/team/${leader.id}`}
                className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/20 text-center group hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer no-underline flex flex-col h-full"
              >
                <div className="relative mb-6">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover object-top border-4 border-primary-500/30 group-hover:border-primary-500 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center border-4 border-primary-500/30 group-hover:border-primary-500 transition-all duration-300">
                      <User className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">{leader.name}</h4>
                <p className="text-primary-400 font-semibold mb-3">{leader.position}</p>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">{leader.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {leader.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 pt-4 text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors mt-auto">
                  View Full Profile →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;