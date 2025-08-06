import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Lightbulb, Repeat } from "lucide-react";
import DemoModal from './DemoModal';

export default function InnovationPotential() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* ───────── path definitions ───────── */
  const dnaStrand1 =
    "M 250 450 C 200 420, 200 380, 250 350 C 300 320, 300 280, 250 250 C 200 220, 200 180, 250 150 C 300 120, 300 80, 250 50";
  const dnaStrand2 =
    "M 250 450 C 300 420, 300 380, 250 350 C 200 320, 200 280, 250 250 C 300 220, 300 180, 250 150 C 200 120, 200 80, 250 50";

  const crossBars = [
    { x1: 220, y1: 400, x2: 280, y2: 400 },
    { x1: 280, y1: 350, x2: 220, y2: 350 },
    { x1: 220, y1: 300, x2: 280, y2: 300 },
    { x1: 280, y1: 250, x2: 220, y2: 250 },
    { x1: 220, y1: 200, x2: 280, y2: 200 },
    { x1: 280, y1: 150, x2: 220, y2: 150 },
    { x1: 220, y1: 100, x2: 280, y2: 100 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-950 opacity-50"></div>

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12">
        {/* Left: Title and Button */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none tracking-tight mb-6 sm:mb-8">
            <span className="block text-white mb-2 sm:mb-3">INNOVATION</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 relative">
              POTENTIAL
              <div className="mt-6 sm:mt-8 w-32 sm:w-48 lg:w-60 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm mx-auto lg:mx-0"></div>
            </span>
          </h1>

        </div>

        {/* Right: DNA Helix Diagram */}
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
            fill="none"
            stroke="#4A90E2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Glow layers */}
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glow effects */}
            {isVisible && (
              <>
                <path
                  d={dnaStrand1}
                  strokeWidth="15"
                  filter="url(#glow)"
                  opacity="0.3"
                  className="animate-pulse"
                />
                <path
                  d={dnaStrand2}
                  strokeWidth="15"
                  filter="url(#glow)"
                  opacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
              </>
            )}

            {/* Main DNA strands */}
            <path
              d={dnaStrand1}
              strokeDasharray="100 1000"
              className={`transition-all duration-2000 ${
                isVisible ? 'stroke-dashoffset-0 opacity-100' : 'stroke-dashoffset-1000 opacity-0'
              }`}
              filter="url(#subtleGlow)"
            />
            <path
              d={dnaStrand2}
              strokeDasharray="100 1000"
              className={`transition-all duration-2000 ${
                isVisible ? 'stroke-dashoffset-0 opacity-100' : 'stroke-dashoffset-1000 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
              filter="url(#subtleGlow)"
            />

            {/* Cross-bars */}
            {crossBars.map((bar, i) => (
              <line
                key={i}
                x1={bar.x1}
                y1={bar.y1}
                x2={bar.x2}
                y2={bar.y2}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 stroke-dashoffset-0' : 'opacity-0 stroke-dashoffset-100'
                }`}
                style={{ transitionDelay: `${2 + i * 0.1}s` }}
                strokeDasharray="100"
              />
            ))}

          </svg>

          {/* Info Points */}
          <div
            className={`absolute top-[10%] right-[5%] sm:right-[10%] flex items-center gap-2 text-xs sm:text-sm md:text-base transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '2.5s' }}
          >
            <Link 
              to="/innovation-potential/data-sharing-research-hubs"
              className="rounded-full bg-cyan-500/20 p-2 sm:p-3 lg:p-4 backdrop-blur-sm border border-cyan-400/30 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <Lightbulb className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
            <div className="text-left">
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight">
                Data sharing &
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight">
                research hubs
              </p>
            </div>
          </div>

          <div
            className={`absolute top-[45%] left-[5%] flex items-center gap-2 text-xs sm:text-sm md:text-base transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '2.7s' }}
          >
            <Link 
              to="/innovation-potential/ip-development-feedback"
              className="rounded-full bg-cyan-500/20 p-2 sm:p-3 lg:p-4 backdrop-blur-sm border border-cyan-400/30 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                <span className="text-xs font-bold text-cyan-400">IP</span>
              </div>
            </Link>
            <div className="text-left">
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight">
                IP development &
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight">
                innovation loop feedback
              </p>
            </div>
          </div>

          <div
            className={`absolute bottom-[15%] left-[5%] flex items-center gap-2 text-xs sm:text-sm md:text-base transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '2.9s' }}
          >
            <Link 
              to="/innovation-potential/aiml-solution-co-creation"
              className="rounded-full bg-cyan-500/20 p-2 sm:p-3 lg:p-4 backdrop-blur-sm border border-cyan-400/30 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                <span className="text-xs font-bold text-cyan-400">Ω</span>
              </div>
            </Link>
            <div className="text-left">
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight">
                AI/ML powered
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight">
                solution co-creation
              </p>
            </div>
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .stroke-dashoffset-0 {
          stroke-dashoffset: 0;
        }
        
        .stroke-dashoffset-100 {
          stroke-dashoffset: 100;
        }
        
        .stroke-dashoffset-1000 {
          stroke-dashoffset: 1000;
        }
      `}</style>
    </section>
  );
}