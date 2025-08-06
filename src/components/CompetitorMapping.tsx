import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link as LinkIcon, User, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import DemoModal from './DemoModal';

export default function CompetitorMappingAnimation() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Triangle corners
  const topX = 300, topY = 100;
  const bottomLeftX = 100, bottomLeftY = 450;
  const bottomRightX = 500, bottomRightY = 450;

  const centerX = (topX + bottomLeftX + bottomRightX) / 3;
  const centerY = (topY + bottomLeftY + bottomRightY) / 3;

  // Helper for node positioning
  const asPercent = (x: number, y: number) => ({
    left: `${(x / 600) * 100}%`,
    top: `${(y / 600) * 100}%`,
    transform: "translate(-50%, -50%)",
  });

  // For animating moving dash lines
  const dashLength = 24;
  const gapLength = 16;
  const dashArray = `${dashLength},${gapLength}`;

  // Controls for dash offset animation
  const line1 = useAnimation();
  const line2 = useAnimation();
  const line3 = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    // Animate infinite looping dash offset for each line
    line1.start({ strokeDashoffset: [0, -40], transition: { repeat: Infinity, duration: 1.2, ease: "linear" } });
    line2.start({ strokeDashoffset: [0, -40], transition: { repeat: Infinity, duration: 1.2, ease: "linear" } });
    line3.start({ strokeDashoffset: [0, -40], transition: { repeat: Infinity, duration: 1.2, ease: "linear" } });
  }, [line1, line2, line3]);

  // Animation variants
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } } 
  };
  
  const textVariants = { 
    hidden: { x: -100, opacity: 0 }, 
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } 
  };
  
  const underlineVariants = { 
    hidden: { width: 0, opacity: 0 }, 
    visible: { width: "100%", opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.5 } } 
  };
  
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 2.8 } },
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
          <motion.div className="mt-4 sm:mt-6 lg:mt-8 w-32 sm:w-48 lg:w-60 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm" variants={underlineVariants} />
          
        </div>

        {/* Right Section: Diagram */}
        <div className="relative flex h-[400px] sm:h-[500px] lg:h-[600px] w-full items-center justify-center px-4 lg:px-0">
          {/* Triangle SVG with moving dashed lines */}
          
          <svg className="absolute h-full w-full max-w-full" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
            {/* Central COMPETITOR text */}
            <text
              x="300"
              y="300"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white font-bold text-4xl sm:text-5xl md:text-6xl opacity-80"
              style={{ fontSize: '30px' }}
            >
              COMPETITOR
            </text>
          </svg>

          {/* Nodes at Corners */}
          {/* TOP: Ecosystem mapping */}
          <motion.div
            className="absolute flex flex-col items-center text-center"
            style={asPercent(topX-50, topY)}
            variants={nodeVariants}
            initial="hidden"
            animate={["visible", "pulse"]}
          >
            <Link 
              to="/competitor-mapping/ecosystem-mapping"
              className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              <LinkIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </Link>
            <p className="mt-1 text-xs sm:text-sm text-white-300 font-medium max-w-[80px] sm:max-w-none leading-tight">Ecosystem mapping</p>
          </motion.div>
          {/* LEFT: Benchmarking best practices */}
          <motion.div
            className="absolute flex flex-col items-center text-center"
            style={asPercent(bottomLeftX-70, bottomLeftY-30)}
            variants={nodeVariants}
            initial="hidden"
            animate={["visible", "pulse"]}
          >
            <Link 
              to="/competitor-mapping/benchmarking-best-practices"
              className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              <User className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </Link>
            <p className="mt-1 text-xs sm:text-sm text-white-300 font-medium max-w-[80px] sm:max-w-none leading-tight">Benchmarking best practices</p>
          </motion.div>
          {/* RIGHT: Disruption strategy with foresight analytic */}
          <motion.div
            className="absolute flex flex-col items-center text-center"
            style={asPercent(bottomRightX-70, bottomRightY-30)}
            variants={nodeVariants}
            initial="hidden"
            animate={["visible", "pulse"]}
          >
            <Link 
              to="/competitor-mapping/disruption-strategy"
              className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-900/80 shadow-2xl hover:bg-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              <LineChart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </Link>
            <p className="mt-1 text-xs sm:text-sm text-white-300 font-medium max-w-[80px] sm:max-w-none leading-tight">
              Disruption strategy<br />with foresight analytic
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}