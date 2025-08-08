import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link as LinkIcon, Lightbulb, Flag } from 'lucide-react';
import DemoModal from './DemoModal';

const LeadershipEnablement: React.FC = () => {
  const navigate = useNavigate();
  const pathRef = useRef<SVGPathElement>(null);
  const [dashSegment, setDashSegment] = useState({ x1: 100, y1: 400, x2: 120, y2: 400 });
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Step-like path data to match the image exactly
  const svgPathData = "M 80 420 L 180 420 L 180 350 L 280 350 L 280 280 L 380 280 L 380 210 L 480 210 L 480 140";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/leadership-enablement/cross-bu-knowledge');
  };
  // Initialize path length
  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
    }
  }, []);

  // Animate dash segment along the path
  useEffect(() => {
    if (!pathRef.current || !isAnimating) return;
    
    const path = pathRef.current;
    const len = pathLength || path.getTotalLength();
    let startTime: number | null = null;
    let rafId: number | null = null;
    
    const dashLength = 30;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 3000; // 3s duration
      const prog = Math.min(elapsed, 1);
      setProgress(prog);

      if (prog > 0) {
        const curLen = len * prog;
        const segStart = Math.max(curLen - dashLength / 2, 0);
        const segEnd = Math.min(curLen + dashLength / 2, len);

        try {
          const startPoint = path.getPointAtLength(segStart);
          const endPoint = path.getPointAtLength(segEnd);
          setDashSegment({ 
            x1: startPoint.x, 
            y1: startPoint.y, 
            x2: endPoint.x, 
            y2: endPoint.y 
          });
        } catch (error) {
          console.warn('Path calculation error:', error);
        }
      }

      if (prog < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => rafId && cancelAnimationFrame(rafId);
  }, [isAnimating, pathLength]);

  // Animate the background dashed line
  useEffect(() => {
    if (!pathLength) return;
    
    let rafId: number | null = null;
    let lastTimestamp: number | null = null;
    const dashSpeed = 80;

    const animateDash = (timestamp: number) => {
      if (lastTimestamp) {
        const dt = (timestamp - lastTimestamp) / 1000;
        setDashOffset((prev) => (prev + dashSpeed * dt) % 40);
      }
      lastTimestamp = timestamp;
      rafId = requestAnimationFrame(animateDash);
    };

    rafId = requestAnimationFrame(animateDash);
    return () => rafId && cancelAnimationFrame(rafId);
  }, [pathLength]);

  // Master animation sequence
  useEffect(() => {
    const animateSequence = async () => {
      // Reset everything
      setProgress(0);
      setIsAnimating(false);
      
      // Small delay before starting
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Start path animation and dash movement
      setIsAnimating(true);
      
      // Restart after 10 seconds
      setTimeout(animateSequence, 10000);
    };

    animateSequence();
  }, []);

  return (
    <section id="leadership-enablement" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12">
        {/* Left: Title */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none tracking-tight mb-6 sm:mb-8">
            <span className="block text-white mb-2 sm:mb-3">LEADERSHIP</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 relative">
              ENABLEMENT
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

        {/* Right: Staircase Diagram */}
        <div className="relative w-full max-w-2xl h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
          <svg viewBox="0 0 600 500" className="absolute h-full w-full">
            {/* Background dashed path */}
            <path
              d={svgPathData}
              fill="none"
              stroke="rgba(6, 182, 212, 0.3)"
              strokeWidth="3"
              strokeDasharray="20 20"
              strokeDashoffset={-dashOffset}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Main animated path */}
            <path
              ref={pathRef}
              d={svgPathData}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-3000 ${
                isAnimating ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))",
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength * (1 - progress)
              }}
            />
            
            {/* Moving dash indicator */}
            {progress > 0 && (
              <line
                x1={dashSegment.x1}
                y1={dashSegment.y1}
                x2={dashSegment.x2}
                y2={dashSegment.y2}
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
                }}
              />
            )}
            
            {/* Goal flag */}
            <g
              className={`transition-all duration-600 ${
                progress > 0.8 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '2.5s' }}
            >
              <Flag 
                x={485} 
                y={120} 
                width={48} 
                height={48}
                className="fill-cyan-400 text-cyan-400"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(6, 182, 212, 0.6))"
                }}
              />
            </g>
          </svg>

          {/* Stage 1: Cross-BU knowledge exchange */}
          <div
            className={`absolute flex items-center gap-2 sm:gap-4 transition-all duration-600 ${
              progress > 0.2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ left: "10%", top: "75%", transitionDelay: '1s' }}
          >
            <Link 
              to="/leadership-enablement/cross-bu-knowledge"
              className="rounded-full bg-cyan-500/20 p-2 sm:p-3 lg:p-4 backdrop-blur-sm border border-blue-400 bg-gray-900/80 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer group"
            >
              <LinkIcon className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
            
            <Link 
              to="/leadership-enablement/cross-bu-knowledge"
              className=" group text-left hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
             
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight  transition-colors duration-300 group-hover:text-blue-400">
                Cross-BU knowledge
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight  transition-colors duration-300 group-hover:text-blue-400">
                exchange
              </p>
                
            </Link>
          </div>

          {/* Stage 2: Mentorship + strategic foresight */}
          <div
            className={`absolute flex items-center gap-2 sm:gap-4 transition-all duration-600 ${
              progress > 0.5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ left: "30%", top: "55%", transitionDelay: '1.5s' }}
          >
            <Link 
              to="/leadership-enablement/mentorship-foresight"
              className="rounded-full bg-cyan-500/20 p-2 sm:p-3 lg:p-4 backdrop-blur-sm border border-blue-400 bg-gray-900/80 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer group hover:text-blue-400"
            >
              <Lightbulb className=" text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link 
              to="/leadership-enablement/mentorship-foresight"
              className="group text-left hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                Mentorship +
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                strategic foresight
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                development
              </p>
            </Link>
          </div>

          {/* Stage 3: Thought leadership */}
          <div
            className={`absolute flex items-center gap-2 sm:gap-4 transition-all duration-600 ${
              progress > 0.8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ left: "50%", top: "25%", transitionDelay: '2s' }}
          >
            <Link 
              to="/leadership-enablement/thought-leadership"
              className="rounded-full bg-cyan-500/20 p-2 sm:p-3 lg:p-4 backdrop-blur-sm border border-blue-400 bg-gray-900/80 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer group"
            >
              <Flag className="text-cyan-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link 
              to="/leadership-enablement/thought-leadership"
              className="group text-left hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                Thought
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                leadership
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                & scalable
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-tight group-hover:text-blue-400 transition-colors duration-300">
                governance
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
    </section>
  );
};

export default LeadershipEnablement;