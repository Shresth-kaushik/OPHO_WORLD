import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as LinkIcon, User, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import DemoModal from './DemoModal';

export default function CompetitorMappingAnimation() {
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/competitor-mapping/ecosystem-mapping');
  };

  // Animation variants
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } } 
  };
  
  const textVariants = { 
    hidden: { x: -100, opacity: 0 }, 
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } 
  };
  
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 1.5 } },
    pulse: { scale: [1, 1.04, 1], opacity: [0.9, 1, 0.9], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 text-white">
      <motion.div
        className="grid w-full max-w-6xl grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section: Title */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4 lg:px-0">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight" variants={textVariants}>
            COMPETITOR
          </motion.h1>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-blue-400" variants={textVariants}>
            MAPPING
          </motion.h1>
          <motion.div className="mt-4 sm:mt-6 lg:mt-8 w-32 sm:w-48 lg:w-60 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm" variants={textVariants} />
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={textVariants}
          >
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
          </motion.div>
        </div>

        {/* Right Section: Circular Diagram */}
        <div className="relative flex h-[400px] sm:h-[500px] lg:h-[600px] w-full items-center justify-center px-4 lg:px-0">
          {/* Central COMPETITOR text */}
          <div className="absolute z-10 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white opacity-80">
              COMPETITOR
            </h2>
          </div>

          {/* Circular Animation Container */}
          <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
            {/* Animated Circle */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
                
                <filter id="circleGlow" x="-50%" y="-50%" width="200%" height="200%">
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
                r="160" 
                fill="none" 
                stroke="url(#circleGradient)" 
                strokeWidth="3"
                filter="url(#circleGlow)"
                opacity="0.6"
              />

              {/* Animated dashed overlay */}
              {isVisible && (
                <circle 
                  cx="200" 
                  cy="200" 
                  r="160" 
                  fill="none" 
                  stroke="#22d3ee" 
                  strokeWidth="2"
                  strokeDasharray="15 25"
                  opacity="0.8"
                  className="animate-spin"
                  style={{ 
                    animation: 'spin 12s linear infinite',
                    transformOrigin: '200px 200px'
                  }}
                />
              )}

              {/* Flowing particles */}
              {isVisible && Array.from({ length: 6 }).map((_, i) => (
                <circle
                  key={i}
                  r="3"
                  fill="#22d3ee"
                  opacity="0.9"
                  style={{
                    animation: `flowParticle${i + 1} 8s ease-in-out infinite`,
                    animationDelay: `${i * 1.3}s`
                  }}
                >
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    begin={`${i * 1.3}s`}
                  >
                    <mpath href="#circularPath" />
                  </animateMotion>
                </circle>
              ))}

              {/* Hidden path for particle animation */}
              <path
                id="circularPath"
                d="M 360 200 A 160 160 0 1 1 40 200 A 160 160 0 1 1 360 200"
                fill="none"
                stroke="transparent"
              />
            </svg>

            {/* TOP: Ecosystem mapping */}
            <motion.div
              className="absolute flex flex-col items-center text-center"
              style={{
                left: '35%',
                top: '5%',
                transform: 'translate(-50%, -50%)'
              }}
              variants={nodeVariants}
              initial="hidden"
              animate={["visible", "pulse"]}
            >
              <Link 
                to="/competitor-mapping/ecosystem-mapping"
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group mb-3"
              >
                <LinkIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              </Link>
              <Link 
                to="/competitor-mapping/ecosystem-mapping"
                className="text-sm sm:text-base lg:text-lg text-white font-medium max-w-[120px] sm:max-w-[140px] leading-tight hover:text-blue-400 transition-colors duration-300 cursor-pointer text-center"
              >
                Ecosystem mapping
              </Link>
            </motion.div>

            {/* BOTTOM LEFT: Benchmarking best practices */}
            <motion.div
              className="absolute flex flex-col items-center text-center"
              style={{
                left: '10%',
                top: '80%',
                transform: 'translate(-50%, -50%)'
              }}
              variants={nodeVariants}
              initial="hidden"
              animate={["visible", "pulse"]}
            >
              <Link 
                to="/competitor-mapping/benchmarking-best-practices"
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group mb-3"
              >
                <User className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              </Link>
              <Link 
                to="/competitor-mapping/benchmarking-best-practices"
                className="text-sm sm:text-base lg:text-lg text-white font-medium max-w-[120px] sm:max-w-[140px] leading-tight hover:text-blue-400 transition-colors duration-300 cursor-pointer text-center"
              >
                Benchmarking best practices
              </Link>
            </motion.div>

            {/* BOTTOM RIGHT: Disruption strategy with foresight analytic */}
            <motion.div
              className="absolute flex flex-col items-center text-center"
              style={{
                left: '75%',
                top: '70%',
                transform: 'translate(-50%, -50%)'
              }}
              variants={nodeVariants}
              initial="hidden"
              animate={["visible", "pulse"]}
            >
              <Link 
                to="/competitor-mapping/disruption-strategy"
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer group mb-3"
              >
                <LineChart className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              </Link>
              <Link 
                to="/competitor-mapping/disruption-strategy"
                className="text-sm sm:text-base lg:text-lg text-white font-medium max-w-[120px] sm:max-w-[140px] leading-tight hover:text-blue-400 transition-colors duration-300 cursor-pointer text-center"
              >
                Disruption strategy with foresight analytic
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

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
          0% { transform: rotate(0deg) translateX(160px) rotate(0deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(160px) rotate(-360deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle2 {
          0% { transform: rotate(60deg) translateX(160px) rotate(-60deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(420deg) translateX(160px) rotate(-420deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle3 {
          0% { transform: rotate(120deg) translateX(160px) rotate(-120deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(480deg) translateX(160px) rotate(-480deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle4 {
          0% { transform: rotate(180deg) translateX(160px) rotate(-180deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(540deg) translateX(160px) rotate(-540deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle5 {
          0% { transform: rotate(240deg) translateX(160px) rotate(-240deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(600deg) translateX(160px) rotate(-600deg); opacity: 0.4; }
        }
        
        @keyframes flowParticle6 {
          0% { transform: rotate(300deg) translateX(160px) rotate(-300deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(660deg) translateX(160px) rotate(-660deg); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}