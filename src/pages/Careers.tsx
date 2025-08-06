import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  Globe, 
  MapPin, 
  Home, 
  Lightbulb,
  BookOpen,
  UserCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Target,
} from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Careers: React.FC = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      quote: "Working at OphoWorld has been transformative. The learning opportunities and collaborative environment have accelerated my career in AI.",
      author: "Sarah Johnson",
      position: "Senior AI Engineer",
      avatar: "SJ"
    },
    {
      quote: "The innovation culture here is incredible. We're constantly pushing boundaries and creating solutions that make a real impact.",
      author: "Michael Chen",
      position: "Lead Data Scientist",
      avatar: "MC"
    },
    {
      quote: "The mentorship program and learning budget have helped me grow exponentially. This is where careers are built.",
      author: "Emily Rodriguez",
      position: "Cloud Solutions Architect",
      avatar: "ER"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleApplyNow = () => {
    navigate('/careers-application');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className="relative h-[24rem] md:h-[28rem] lg:h-[32rem] rounded-3xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/40"></div>
            
            <div className="relative h-full flex items-center px-8 lg:px-12">
              <div className="max-w-4xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
                  <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in-up leading-tight">
                  Shape the Future of{' '}
                  <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                    Technology
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200 mb-8">
                  Join our mission to revolutionize how businesses leverage AI, cloud, and data technologies. 
                  Build solutions that matter, work with brilliant minds, and grow your career in an environment 
                  that values innovation, diversity, and continuous learning.
                </p>

                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
                  <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
                  <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at OphoWorld */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Life at <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">OphoWorld</span>
            </h2>
            <p className="text-lg text-gray-300">
              Discover what makes our workplace special through the eyes of our team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Video Section */}
            <div className="relative">
              <div className="glass-effect rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl">
                <div 
                  className="relative h-80 bg-cover bg-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Life at OphoWorld - Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-lg mb-1">Life at OphoWorld</h3>
                    <p className="text-gray-300 text-sm">Experience our innovative workplace culture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Testimonials */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">What Our Team Says</h3>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative h-48">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                  >
                    <blockquote className="text-white italic text-lg leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Culture Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Innovation First</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We embrace cutting-edge technologies and creative solutions to solve complex business challenges.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Continuous Learning</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We invest in our team's growth through training, conferences, and hands-on AI projects.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Collaborative Spirit</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We believe the best solutions come from diverse perspectives working together.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Work-Life Balance</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We support flexible work arrangements that help our team thrive personally and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEI Initiatives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DEI <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">Initiatives</span>
            </h2>
            <p className="text-lg text-gray-300">
              Highlights the company's commitment to diversity and inclusion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Inclusive Hiring */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inclusive Hiring</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Diverse leadership representation across all levels of the organization.
              </p>
            </div>

            {/* Equal Opportunities */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Equal Opportunities</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Commitment to pay equity and equal advancement opportunities for all employees.
              </p>
            </div>

            {/* Community Impact */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Impact</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Mentoring underrepresented students in STEM through our outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remote + Onsite Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Remote + <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">Onsite Options</span>
            </h2>
            <p className="text-lg text-gray-300">
              Offers flexibility in work arrangements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Remote Work Benefits */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Remote Work Benefits</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Global Flexibility</h4>
                    <p className="text-gray-300 text-sm">Work from anywhere with reliable internet connection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Home Office Setup</h4>
                    <p className="text-gray-300 text-sm">Budget for ergonomic workspace equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Flexible Hours</h4>
                    <p className="text-gray-300 text-sm">Core hours with flexibility for different time zones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Virtual Team Building</h4>
                    <p className="text-gray-300 text-sm">Regular online events and collaboration sessions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Office Locations */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Global Office Locations</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span className="text-white font-medium">2302 - 228 Queens Quay W Downtown, Toronto M5J2X1 Canada</span>
                  </div>
                  <span className="text-gray-400 text-sm">Headquarters</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span className="text-white font-medium">5565 Silver Creek Valley Rd Suite#600 San Jose CA 95138</span>
                  </div>
                  <span className="text-gray-400 text-sm">Operations</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span className="text-white font-medium">New Delhi, India</span>
                  </div>
                  <span className="text-gray-400 text-sm">Operations</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span className="text-white font-medium">Andorra la Vella, Andorra</span>
                  </div>
                  <span className="text-gray-400 text-sm">Europe Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Learning Culture */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Learning <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="text-lg text-gray-300">
              Emphasizes continuous learning and innovation in AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation Labs */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation Labs</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                20% time dedicated to exploring cutting-edge AI research and experimental projects.
              </p>
            </div>

            {/* Learning Budget */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Learning Budget</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Annual learning budget for courses, conferences, and certifications in AI and emerging technologies.
              </p>
            </div>

            {/* AI Mentorship */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Mentorship</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                1:1 mentorship program pairing junior developers with AI experts and industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-effect rounded-3xl p-12 backdrop-blur-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Take the next step in your career journey. Complete your profile and explore opportunities 
              that match your skills and aspirations.
            </p>
            <button
              onClick={handleApplyNow}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-3 mx-auto"
            >
              <Users className="w-5 h-5" />
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;