import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Leaf, Recycle } from 'lucide-react';
import DemoModal from './DemoModal';

const SustainabilityGaps: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/sustainability-gaps/esg-data-aggregation');
  };
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12">
        {/* Left: Title and Button */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none tracking-tight mb-6 sm:mb-8">
            <span className="block text-white mb-2 sm:mb-3">SUSTAINABILITY</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 relative">
              GAPS
              <div className="mt-6 sm:mt-8 w-32 sm:w-48 lg:w-60 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm mx-auto lg:mx-0"></div>
            </span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/30"
            >
              Let's Connect
            </button>
            <button
              onClick={handleLearnMore}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Sustainability Diagram */}
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          {/* Central Circle with Leaf Icon */}
          <div
            className={`absolute z-10 transition-all duration-800 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
            }`}
            style={{ transitionDelay: '1.5s' }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-blue-200 ]">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
            </div>
          </div>

          {/* Circular Flow Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="sustainabilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
              
              <filter id="sustainabilityGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main circular path */}
            <circle 
              cx="200" 
              cy="200" 
              r="120" 
              fill="none" 
              stroke="url(#sustainabilityGradient)" 
              strokeWidth="4"
              filter="url(#sustainabilityGlow)"
              className="sm:stroke-[6px]"
            />

            {/* Animated dashed overlay */}
            {isVisible && (
              <circle 
                cx="200" 
                cy="200" 
                r="120" 
                fill="none" 
                stroke="#22c55e" 
                strokeWidth="3"
                strokeDasharray="15 25"
                opacity="0.6"
                className="animate-spin sm:stroke-[4px]"
                style={{ 
                  animation: 'spin 8s linear infinite',
                  transformOrigin: '200px 200px'
                }}
              />
            )}

            {/* Flowing particles */}
            {isVisible && Array.from({ length: 8 }).map((_, i) => (
              <circle
                key={i}
                r="2.5"
                fill="#22d3ee"
                opacity="0.8"
                style={{
                  animation: `flowParticle${i + 1} 6s ease-in-out infinite`,
                  animationDelay: `${i * 0.75}s`
                }}
              >
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  begin={`${i * 0.75}s`}
                >
                  <mpath href="#circularPath" />
                </animateMotion>
              </circle>
            ))}

            {/* Hidden path for particle animation */}
            <path
              id="circularPath"
              d="M 320 200 A 120 120 0 1 1 80 200 A 120 120 0 1 1 320 200"
              fill="none"
              stroke="transparent"
            />
          </svg>

          {/* Leaf Elements with Labels */}
          <div
            className={`absolute top-[10%] right-[5%] sm:right-[10%] flex items-center gap-2 text-xs sm:text-sm md:text-base transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '2.5s' }}
          >
            <Link 
              to="/sustainability-gaps/circular-economy-compliance"
              className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 hover:bg-cyan-500/30 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group"
            >
              <Recycle className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link 
              to="/sustainability-gaps/circular-economy-compliance"
              className=" mt-1 text-xs sm:text-lg text-white font-medium max-w-[80px] sm:max-w-none leading-tight hover:text-blue-400 transition-colors duration-300 cursor-pointer text-center"
            >
              <p>Circular economy &</p>
              <p>compliance alignment</p>
            </Link>
          </div>

          <div
            className={`absolute top-[45%] left-[10%] flex items-center gap-2 text-xs sm:text-sm md:text-base transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '2.8s' }}
          >
            <Link 
              to="/sustainability-gaps/green-product-pathways"
              className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 hover:bg-cyan-500/30 shadow-2xl  transition-all duration-300 cursor-pointer "
            >
              <Leaf className=" text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link 
              to="/sustainability-gaps/green-product-pathways"
              className=" group text-left hover:text-blue-400 transition-colors duration-300 cursor-pointer border-blue-400 "
            >
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                Green 
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
               product
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
               pathways
              </p>
            </Link>
          </div>

          <div
            className={`absolute top-[45%] right-[-4%] flex items-center gap-2 text-xs sm:text-sm md:text-base transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '3.1s' }}
          >
            <Link 
              to="/sustainability-gaps/esg-data-aggregation"
              className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 hover:bg-cyan-500/30 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group"
            >
              <BarChart3 className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link 
              to="/sustainability-gaps/esg-data-aggregation"
              className="group text-left hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                ESG data
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                aggregation
              </p>
            </Link>
          </div>

        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes flowParticle1 {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle2 {
          0% { transform: rotate(45deg) translateX(120px) rotate(-45deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(405deg) translateX(120px) rotate(-405deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle3 {
          0% { transform: rotate(90deg) translateX(120px) rotate(-90deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(450deg) translateX(120px) rotate(-450deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle4 {
          0% { transform: rotate(135deg) translateX(120px) rotate(-135deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(495deg) translateX(120px) rotate(-495deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle5 {
          0% { transform: rotate(180deg) translateX(120px) rotate(-180deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(540deg) translateX(120px) rotate(-540deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle6 {
          0% { transform: rotate(225deg) translateX(120px) rotate(-225deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(585deg) translateX(120px) rotate(-585deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle7 {
          0% { transform: rotate(270deg) translateX(120px) rotate(-270deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(630deg) translateX(120px) rotate(-630deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle8 {
          0% { transform: rotate(315deg) translateX(120px) rotate(-315deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(675deg) translateX(120px) rotate(-675deg); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default SustainabilityGaps;