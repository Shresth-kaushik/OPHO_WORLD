import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      title: 'Global Clients',
      description: 'Worldwide Enterprise Partners',
      icon: Users
    },
    {
      title: 'Expert Team',
      description: 'Industry Specialists',
      icon: Target
    },
    {
      title: 'AI Solutions',
      description: 'Innovative Technologies',
      icon: Lightbulb
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Section Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Users className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">About OphoWorld</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight animate-fade-in-up animation-delay-200">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">Story</span>
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-4 mb-8 animate-fade-in-up animation-delay-400">
              <p className="text-lg text-white/90 leading-relaxed">
                Founded in 2019,  the leader in global technology solutions and we are passionate about 
                infusing intelligence into every business decision. We believe by having visibility to the right 
                information early, businesses can directly impact success and profitability, and optimize all aspects 
                across the technology lifecycle.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up animation-delay-600">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in-up animation-delay-400">
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="OphoWorld team collaboration and innovation"
                className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
              
              {/* Floating accent elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-500 flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 glass-effect p-3 max-w-xs">
                <p className="text-white text-sm font-medium">
                  OphoWorld: Driving innovation, security, and scalable business growth
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary-600/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;