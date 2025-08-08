import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Pause, Play } from "lucide-react";
import DemoModal from './DemoModal';

/* ───────── types & constants ───────── */
interface Pt {
  id: number;
  text: string;
  cx: number;
  cy: number;
  route: string;
}

const POINTS: Pt[] = [
  { id: 0, text: "Deep industry scans\n& signal tracking",        cx: 40,  cy: 420, route: "/market-gaps-trends/deep-industry-scans" },
  { id: 1, text: "Ideation labs,\nAI-enhanced\nprototyping",      cx: 320, cy: 260, route: "/market-gaps-trends/ideation-labs-prototyping" },
  { id: 2, text: "Continuous\nmonitoring +\nadaptive innovation", cx: 540, cy: 120, route: "/market-gaps-trends/continuous-monitoring-innovation" },
];

const CURVE_OFFSET = 60;           // bezier "strength"
const AUTO_ADVANCE_MS = 2_500;

/* ───────── helpers ───────── */
const makeSmoothPath = (pts: Pt[]) =>
  pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.cx} ${p.cy}`;
    const prev = pts[i - 1];
    return (
      acc +
      ` C ${prev.cx + CURVE_OFFSET} ${prev.cy - CURVE_OFFSET}` +
      ` ${p.cx - CURVE_OFFSET} ${p.cy + CURVE_OFFSET}` +
      ` ${p.cx} ${p.cy}`
    );
  }, "");

/* ───────── component ───────── */
const MarketGapsTrends: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const pathD = makeSmoothPath(POINTS);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate(POINTS[0].route);
  };
  /* ── auto-advance that pauses when off-screen ── */
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Set isVisible to true when component mounts
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;           // honour OS setting

    const id = setInterval(
      () => setActive((p) => (p + 1) % POINTS.length),
      AUTO_ADVANCE_MS
    );

    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  /* ── intersection observer ⇒ pause when scrolled away ── */
  useEffect(() => {
    if (!rootRef.current) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // Animation continues regardless of intersection
      },
      { threshold: 0.3 }
    );
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  const FLOW_MS = 1000;

  /* ── keyboard shortcuts ── */
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive((p) => (p + 1) % POINTS.length);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((p) => (p - 1 + POINTS.length) % POINTS.length);
    }
  };

  /* ───────── jsx ───────── */
  return (
    <section
      ref={rootRef}
      tabIndex={0}
      onKeyDown={handleKey}
      className="outline-none focus-visible:ring-4 focus-visible:ring-cyan-500 relative overflow-hidden
                 flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
    >
      {/* decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* ── title ── */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-8 xl:ml-24 px-8 sm:px-6 lg:px-8 pt-48 pb-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none tracking-tight mb-6 sm:mb-8">
            <span className="block text-white mb-2 sm:mb-3">MARKET GAPS &</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 relative">
              TRENDS
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

      {/* ── chart ── */}
      <div className="flex-1 flex items-center justify-center relative p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
        <div className="w-full h-full max-w-2xl sm:max-w-3xl max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] relative">
          {/* SVG */}
          <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
            {/* defs */}
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>

              <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="circleGradient">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </radialGradient>
            </defs>

            {/* bezier line */}
            <path
              d={pathD}
              stroke="url(#lineGradient)"
              strokeWidth="8"
              fill="none"
              filter="url(#lineGlow)"
              className="sm:stroke-[10px]"
            />

            {/* flowing dash overlay */}
            {!prefersReducedMotion && (
              <path
                d={pathD}
                stroke="#22d3ee"
                strokeWidth="10"
                fill="none"
                strokeDasharray="25 35"
                opacity={0.4}
                style={{ animation: `flow ${FLOW_MS / 1000}s linear infinite` }}
                className="sm:stroke-[12px]"
              />
            )}

            {/* points */}
            {POINTS.map((p, i) => (
              <g key={p.id}>
                {/* pulse ring */}
                {active === i && (
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r="35"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    opacity="0.35"
                    className="animate-ping sm:r-[45] sm:stroke-[3]"
                  />
                )}

                {/* outer coloured */}
                <circle
                  cx={p.cx}
                  cy={p.cy}
                  r={active === i ? 22 : 18}
                  fill="url(#circleGradient)"
                  filter="url(#lineGlow)"
                  className="transition-all duration-500 cursor-pointer sm:r-[25] sm:[&.active]:r-[30]"
                  onClick={() => {
                    setActive(i);
                  }}
                  role="button"
                  aria-label={`Step ${i + 1}: ${p.text.replace(/\n/g, " ")}`}
                  style={{
                    r: active === i ? (window.innerWidth >= 640 ? 30 : 22) : (window.innerWidth >= 640 ? 25 : 18)
                  }}
                />

                {/* inner white */}
                <circle
                  cx={p.cx}
                  cy={p.cy}
                  r={active === i ? 9 : 7}
                  fill="white"
                  className="transition-all duration-500 pointer-events-none sm:r-[10] sm:[&.active]:r-[12]"
                  style={{
                    r: active === i ? (window.innerWidth >= 640 ? 12 : 9) : (window.innerWidth >= 640 ? 10 : 7)
                  }}
                />

                {/* number / check */}
                <text
                  x={p.cx}
                  y={p.cy + 3}
                  textAnchor="middle"
                  className={`font-bold text-xs pointer-events-none sm:text-sm ${
                    active > i ? "fill-green-800" : "fill-slate-900"
                  }`}
                  dy="0.1em"
                >
                  {active > i ? "✓" : i + 1}
                </text>

                {/* bulb on point 2 */}
                {i === 1 && active === i && (
                  <g>
                    <circle
                      cx={p.cx + 15}
                      cy={p.cy - 15}
                      r="12"
                      fill="#22d3ee"
                      filter="url(#lineGlow)"
                      className="sm:cx-[p.cx + 20] sm:cy-[p.cy - 20] sm:r-[15]"
                      style={{
                        cx: p.cx + (window.innerWidth >= 640 ? 20 : 15),
                        cy: p.cy - (window.innerWidth >= 640 ? 20 : 15),
                        r: window.innerWidth >= 640 ? 15 : 12
                      }}
                    />
                    <foreignObject
                      x={p.cx + 9}
                      y={p.cy - 21}
                      width="12"
                      height="12"
                      className="sm:x-[p.cx + 12] sm:y-[p.cy - 28] sm:w-4 sm:h-4"
                      style={{
                        x: p.cx + (window.innerWidth >= 640 ? 12 : 9),
                        y: p.cy - (window.innerWidth >= 640 ? 28 : 21),
                        width: window.innerWidth >= 640 ? 16 : 12,
                        height: window.innerWidth >= 640 ? 16 : 12
                      }}
                    >
                      <Lightbulb className="w-3 h-3 text-white sm:w-4 sm:h-4" />
                    </foreignObject>
                  </g>
                )}
              </g>
            ))}
          </svg>

          {/* labels */}
          {POINTS.map((p, i) => (
            <Link
              to={p.route}
              key={p.id}
              className={`absolute font-semibold text-sm sm:text-base lg:text-lg whitespace-pre-line leading-tight select-none
                          transition-colors duration-500 max-w-[140px] sm:max-w-[180px] lg:max-w-[200px] cursor-pointer hover:text-blue-400
               ${
                 active === i
                   ? "text-white"
                   : active > i
                   ? "text-green-100"
                   : "text-slate-400"
               }`}
              style={{
                left: `${(p.cx / 800) * 100}%`,
                top: `${(p.cy / 500) * 100}%`,
                transform: window.innerWidth >= 1024 
                  ? "translate(44px, -50%)" 
                  : window.innerWidth >= 640 
                    ? "translate(36px, -50%)" 
                    : "translate(28px, -50%)",
              }}
            >
              {p.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

      {/* keyframes */}
      <style jsx>{`
        @keyframes flow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -70; }
        }
      `}</style>
    </section>
  );
};

export default MarketGapsTrends;