"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Handshake, Settings } from 'lucide-react';

const ICONS = [
  {
    icon: Settings,
    cx: 80,
    cy: 100,
    label: "Create",
    desc: "Create",
  },
  {
    icon: Handshake,
    cx: 180,
    cy: 290,
    label: "Connect",
    desc: "Connect",
  },
  {
    icon: TrendingUp,
    cx: 290,
    cy: 100,
    label: "Evolve",
    desc: "Evolve",
  },
];

const centroid = ICONS.reduce(
  (acc, pt) => ({
    cx: acc.cx + pt.cx / 3,
    cy: acc.cy + pt.cy / 3,
  }),
  { cx: 0, cy: 0 }
);

export default function AnimatedPyramidHub() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  // --- Color Constants --- //
  const PRIMARY_BLUE = "#1A2B5B";
  const ACCENT_CYAN = "#00E9FF";
  const SECONDARY_BLUE = "#176BFF";
  const PYRAMID_INDIGO = "#3B3DBB";
  const BG_DARK = "#040920";
  const LABEL_COLOR = "#e6e6eaff";
  const LIGHT_ACCENT_CYAN = "#7CF7FF";
  const SOFT_GLOW_SHADOW = "0 0 32px #16F3FFC0";
  const RING_BORDER_DARK = "#2A395B";
  const RING_DASH_COLOR = "#5BC0F8";
  const PYRAMID_INNER_LIGHT = "#E0FFFF";
  const ICON_CIRCLE_GRADIENT =
    "radial-gradient(circle at 50% 50%, #30508D 0%, #1A2B5B 100%)";

  const pulseVariants = {
    animate: {
      boxShadow: [SOFT_GLOW_SHADOW, "0 0 54px 16px #00E9FF40", SOFT_GLOW_SHADOW],
      scale: 1,
      y: 0,
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" as const },
    },
    hover: {
      scale: 1.18,
      y: -12,
      boxShadow: `0 0 70px 25px ${ACCENT_CYAN}90, 0 0 140px 40px ${LIGHT_ACCENT_CYAN}60`,
      transition: { duration: 0.32, type: "spring" },
    },
  };

  const lineVariants = {
    animate: {
      strokeDashoffset: [48, 0],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // --- PYRAMID 3D ANIMATION --- //
  const pyramidVariants = {
    animate: {
      rotateY: [0, 360],
      boxShadow: `0 0 30px 5px ${PYRAMID_INDIGO}aa, 0 0 60px 10px ${PYRAMID_INNER_LIGHT}40`,
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
    hover: {
      scale: 1.11,
      boxShadow: `0 0 80px 20px ${ACCENT_CYAN}cc, 0 0 150px 40px ${LIGHT_ACCENT_CYAN}80`,
      transition: { duration: 0.28 },
    },
  };

  const dashedRingVariants = {
    animate: {
      strokeDashoffset: [0, 62.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const ringPulseVariants = {
    animate: {
      scale: [1, 1.18, 1],
      opacity: [0.77, 1, 0.77],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: [1.05, 1.22, 1.05],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.0,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  const handleIconClick = (index: number) => {
    const sectionMap = ['create', 'connect', 'evolve'];
    navigate(`/connect-create-evolve#${sectionMap[index]}`);
  };

  // --- PYRAMID SVG --- //
  const pyramidPath = `M${centroid.cx},${centroid.cy} L${ICONS[0].cx},${ICONS[0].cy} L${ICONS[1].cx},${ICONS[1].cy} L${ICONS[2].cx},${ICONS[2].cy} Z`;
  const pyramidSideFills = [
    `M${centroid.cx},${centroid.cy} L${ICONS[0].cx},${ICONS[0].cy} L${ICONS[1].cx},${ICONS[1].cy} Z`,
    `M${centroid.cx},${centroid.cy} L${ICONS[1].cx},${ICONS[1].cy} L${ICONS[2].cx},${ICONS[2].cy} Z`,
    `M${centroid.cx},${centroid.cy} L${ICONS[2].cx},${ICONS[2].cy} L${ICONS[0].cx},${ICONS[0].cy} Z`,
  ];
  const sideColors = [
    "rgba(58,86,180,0.84)", // left
    "rgba(47,104,185,0.66)", // right
    "rgba(20,60,170,0.47)", // back
  ];

  return (
    <div
      className="min-h-[440px] w-full flex items-center justify-center relative select-none overflow-hidden"
      style={{ background: `radial-gradient(circle at 50% 50%, ${PRIMARY_BLUE} 0%, ${BG_DARK} 100%)` }}
    >
      {/* Subtle background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${ACCENT_CYAN} 0%, transparent 70%)`,
          scale: 1.5,
        }}
        animate={{
          scale: [1.5, 1.6, 1.5],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        }}
      />

      {/* --- Animated Pyramid --- */}
      <svg
        width={400}
        height={340}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%] pointer-events-none"
        style={{ zIndex: 2 }}
      >
        {/* Animated lines from centroid to icons */}
        {ICONS.map((pt, idx) => (
          <motion.line
            key={pt.label + "-line"}
            x1={centroid.cx}
            y1={centroid.cy}
            x2={pt.cx}
            y2={pt.cy}
            stroke={hovered === idx ? ACCENT_CYAN : SECONDARY_BLUE}
            strokeWidth={hovered === idx ? 5 : 3.2}
            strokeDasharray="12 10"
            initial={{ opacity: 0.9, strokeDashoffset: 48 }}
            animate="animate"
            variants={lineVariants}
            style={{
              filter:
                hovered === idx
                  ? `drop-shadow(0 0 26px ${ACCENT_CYAN}AA)`
                  : `drop-shadow(0 0 8px ${SECONDARY_BLUE}99)`,
              transition: "all 0.3s cubic-bezier(.7,.2,.3,1)",
            }}
          />
        ))}
        {/* Animated pyramid sides */}
        {pyramidSideFills.map((d, i) => (
          <motion.path
            key={i + "-side"}
            d={d}
            fill={sideColors[i]}
            animate={{
              opacity: hovered === null || hovered === i ? 0.92 : 0.62,
              filter:
                hovered === i
                  ? `drop-shadow(0 0 18px ${ACCENT_CYAN}90)`
                  : `drop-shadow(0 0 5px ${PYRAMID_INDIGO}60)`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        ))}
        {/* Pyramid core highlight */}
        <motion.circle
          cx={centroid.cx}
          cy={centroid.cy + 5}
          r={hovered === null ? 17 : 27}
          fill={PYRAMID_INNER_LIGHT}
          style={{
            filter: hovered !== null
              ? `blur(16px) opacity(0.64)`
              : `blur(12px) opacity(0.55)`,
            transition: "all 0.28s cubic-bezier(.7,.2,.3,1)",
          }}
        />
      </svg>

      {/* Icons + labels */}
      <div className="relative w-[400px] h-[340px] flex items-center justify-center" style={{ zIndex: 4 }}>
        {ICONS.map((pt, idx) => (
          <motion.div
            key={pt.label + "-icon"}
            className="absolute group cursor-pointer"
            style={{
              left: pt.cx - 48,
              top: pt.cy - 48,
              width: 96,
              height: 96,
              borderRadius: 9999,
              background: ICON_CIRCLE_GRADIENT,
              border: `2.3px solid ${hovered === idx ? ACCENT_CYAN : RING_BORDER_DARK}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 30,
              filter:
                hovered === idx
                  ? `drop-shadow(0 0 50px ${ACCENT_CYAN}A8) drop-shadow(0 0 18px ${SECONDARY_BLUE}88)`
                  : `drop-shadow(0 0 20px ${SECONDARY_BLUE}40)`,
              transition: "filter 0.28s cubic-bezier(.72,.2,.44,1), border-color 0.28s cubic-bezier(.72,.2,.44,1)",
            }}
            variants={pulseVariants}
            animate={hovered === idx ? "hover" : "animate"}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleIconClick(idx)}
            tabIndex={0}
            role="button"
            aria-label={`Navigate to ${pt.label} section`}
          >
            {/* Animated inner dashed ring */}
            <svg
              width={68}
              height={68}
              style={{
                position: "absolute",
                left: 14,
                top: 14,
                pointerEvents: "none",
                zIndex: 1,
              }}
            >
              <motion.circle
                cx={34}
                cy={34}
                r={30}
                fill="none"
                stroke={hovered === idx ? ACCENT_CYAN : RING_DASH_COLOR}
                strokeWidth={hovered === idx ? 4 : 2.2}
                strokeDasharray="10 7"
                variants={dashedRingVariants}
                animate="animate"
                style={{
                  filter: hovered === idx
                    ? `drop-shadow(0 0 12px ${ACCENT_CYAN}BB)`
                    : `drop-shadow(0 0 4px ${RING_DASH_COLOR}70)`,
                  transition: "all 0.21s cubic-bezier(.72,.2,.44,1)",
                }}
              />
              {/* Pulsing filled ring */}
              <motion.circle
                cx={34}
                cy={34}
                r={22}
                fill="none"
                stroke={hovered === idx ? LIGHT_ACCENT_CYAN : ACCENT_CYAN + '55'}
                strokeWidth={2.7}
                variants={ringPulseVariants}
                animate={hovered === idx ? "hover" : "animate"}
                style={{
                  filter: hovered === idx
                    ? `drop-shadow(0 0 18px ${LIGHT_ACCENT_CYAN}88)`
                    : `drop-shadow(0 0 6px ${ACCENT_CYAN}30)`,
                  transition: "all 0.21s cubic-bezier(.72,.2,.44,1)",
                }}
              />
            </svg>
            {/* Icon in center */}
            <pt.icon
              size={44}
              color={hovered === idx ? ACCENT_CYAN : SECONDARY_BLUE}
              strokeWidth={2.6}
              style={{ position: "relative", zIndex: 2 }}
            />
            {/* Always-visible label under icon */}
            <span className="absolute left-1/2 -translate-x-1/2 top-[108%] w-max text-sm md:text-base font-bold" style={{ color: LABEL_COLOR, letterSpacing: 0.03, textShadow: "0 2px 8px #e6edfa" }}>
              {pt.label}
            </span>
            {/* Tooltip/label on hover */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={hovered === idx ? { opacity: 1, y: 54 } : { opacity: 0, y: 14 }}
              className="absolute left-1/2 -translate-x-1/2 text-center text-base font-semibold py-1 px-3 rounded-xl shadow-xl mt-6 select-none pointer-events-none hidden sm:block"
              style={{
                minWidth: 90,
                zIndex: 40,
                fontWeight: 600,
                letterSpacing: 0.18,
                color: ACCENT_CYAN,
                border: `1.2px solid ${ACCENT_CYAN}`,
                boxShadow: `0 2px 24px ${ACCENT_CYAN}33`,
                background: `#0A1433E0`,
              }}
            >
              {pt.desc}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}