import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Handshake, MessageCircle, UserRound, Activity } from "lucide-react";
import DemoModal from './DemoModal';

// Path definitions for each node connection
const paths = [
  {
    d: "M 200 200 L 80 80",
    label: "Engage diverse voices & user feedback",
    icon: MessageCircle,
    nodeClass: "left-0 top-0",
    color: "#60a5fa",
    route: "/customer-intelligence/engage-diverse-voices"
  },
  {
    d: "M 200 200 L 200 480",
    label: "Persona-building, design thinking integration",
    icon: UserRound,
    nodeClass: "-translate-x-1/2 bottom-0 left-1/2",
    color: "#60a5fa",
    route: "/customer-intelligence/persona-building-design-thinking"
  },
  {
    d: "M 200 200 L 320 80",
    label: "Personalization models + lifetime engagement",
    icon: Activity,
    nodeClass: "right-0 top-0",
    color: "#60a5fa",
    route: "/customer-intelligence/personalization-models-engagement"
  },
];

// Utility to get length of SVG path
function getPathLength(d: string) {
  if (typeof window === "undefined") return 1;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const pathElem = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElem.setAttribute("d", d);
  svg.appendChild(pathElem);
  return pathElem.getTotalLength();
}

// Flowing dashed line component
function FlowingDashedPath({
  d,
  color = "#60a5fa",
  strokeWidth = 2.5,
  dashArray = "25 35",
  duration = 1.8,
}: {
  d: string;
  color?: string;
  strokeWidth?: number;
  dashArray?: string;
  duration?: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const dashCycle = dashArray
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b, 0);

    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed / (duration * 1000)) % 1;
      setDashOffset(-dashCycle * progress);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [dashArray, duration]);

  return (
    <path
      ref={pathRef}
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={dashArray}
      strokeDashoffset={dashOffset}
      opacity={0.85}
      strokeLinecap="round"
    />
  );
}

// Line with glowing dot flowing along
function FlowLineWithDot({
  d,
  color = "#60a5fa",
  dashArray = "25 35",
  duration = 1.8,
}: {
  d: string;
  color?: string;
  dashArray?: string;
  duration?: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [dotPosition, setDotPosition] = useState({ x: 200, y: 200 });

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!pathRef.current) return;

      const elapsed = timestamp - startTime;
      const progress = (elapsed / (duration * 1000)) % 1;
      const length = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(progress * length);
      
      setDotPosition({ x: point.x, y: point.y });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [duration]);

  return (
    <>
      {/* Hidden path for calculations */}
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="transparent"
        strokeWidth={0}
      />
      {/* Flowing dashed line */}
      <FlowingDashedPath d={d} color={color} dashArray={dashArray} duration={duration} />
      {/* Glowing dot */}
      <circle
        r="7"
        fill={color}
        cx={dotPosition.x}
        cy={dotPosition.y}
        style={{
          filter: "drop-shadow(0 0 18px #60a5fa)",
        }}
      />
    </>
  );
}

export default function CustomerIntelligence() {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* Title Section */}
      <header className="flex-1 flex items-center justify-center lg:justify-start px-8 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-0 pb-8 lg:pb-0">
        <div className="max-w-lg text-center lg:text-left lg:ml-16 xl:ml-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none tracking-tight">
            <span className="block text-white mb-2 sm:mb-3">CUSTOMER</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500">
              INTELLIGENCE
            </span>
          </h1>
          <div className="mt-6 sm:mt-8 w-32 sm:w-48 lg:w-60 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm mx-auto lg:mx-0"></div>
        
        </div>
      </header>

      {/* Diagram Section */}
      <div className="flex-1 flex items-center justify-center relative p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
        <div className="relative flex h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] items-center justify-center">
          {/* Central Handshake Icon */}
          <div
            className={`absolute z-10 text-blue-400 transition-all duration-800 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
            }`}
            style={{ transitionDelay: '1.5s' }}
          >
            <div className="rounded-full bg-blue-400 p-3 sm:p-4 text-white shadow-[0_0_25px_0_rgba(0,191,255,0.7)]">
              <Handshake className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" strokeWidth={1.5} />
            </div>
          </div>

          {/* SVG Lines with flowing animation */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>

              <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {paths.map((path, i) => (
              <g key={i}>
                {/* Base line */}
                <path
                  d={path.d}
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  fill="none"
                  filter="url(#lineGlow)"
                  className="sm:stroke-[6px]"
                />
                {/* Flowing line */}
                {isVisible && (
                  <FlowLineWithDot
                    d={path.d}
                    color={path.color}
                    dashArray="25 35"
                    duration={1.8}
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Node 1 - Top Left */}
          <div
            className={`absolute ${paths[0].nodeClass} flex flex-col items-center text-center transition-all duration-800 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1.9s' }}
          >
            <Link 
              to={paths[0].route}
              className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-blue-400 bg-slate-900 p-2 shadow-[0_0_25px_0_rgba(0,191,255,0.7)] animate-pulse hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" strokeWidth={1.5} />
            </Link>
            <p className="mt-2 max-w-[100px] sm:max-w-[120px] text-xs sm:text-sm md:text-base text-white/90 leading-tight">
              {paths[0].label}
            </p>
          </div>

          {/* Node 2 - Bottom Center */}
          <div
            className={`absolute ${paths[1].nodeClass} flex flex-col items-center text-center transition-all duration-800 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '2.1s' }}
          >
            <p className="mb-2 max-w-[100px] sm:max-w-[120px] text-xs sm:text-sm md:text-base text-white/90 leading-tight">
              {paths[1].label}
            </p>
            <Link 
              to={paths[1].route}
              className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-blue-400 bg-slate-900 p-2 shadow-[0_0_25px_0_rgba(0,191,255,0.7)] animate-pulse hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <UserRound className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Node 3 - Top Right */}
          <div
            className={`absolute ${paths[2].nodeClass} flex flex-col items-center text-center transition-all duration-800 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '2.3s' }}
          >
            <Link 
              to={paths[2].route}
              className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-blue-400 bg-slate-900 p-2 shadow-[0_0_25px_0_rgba(0,191,255,0.7)] animate-pulse hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              <Activity className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" strokeWidth={1.5} />
            </Link>
            <p className="mt-2 max-w-[100px] sm:max-w-[120px] text-xs sm:text-sm md:text-base text-white/90 leading-tight">
              {paths[2].label}
            </p>
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
        @keyframes flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -70; }
        }
      `}</style>
    </section>
  );
};