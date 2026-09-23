import React from 'react';
import { motion } from 'framer-motion';

// ==========================================
// 1. BESPOKE ANIMATED LOGO
// ==========================================
export const StudioLogo: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 36,
}) => {
  return (
    <motion.div
      className={`relative inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Ambient Glow */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 blur-md"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <svg
          viewBox="0 0 100 100"
          className="relative z-10 w-full h-full drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Outer Rotating Hexagonal Geometry */}
          <motion.polygon
            points="50,6 88,28 88,72 50,94 12,72 12,28"
            stroke="url(#logoGrad1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />

          {/* Inner Counter-Rotating Prismatic Frame */}
          <motion.polygon
            points="50,22 74,36 74,64 50,78 26,64 26,36"
            stroke="url(#logoGrad2)"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '50px', originY: '50px' }}
          />

          {/* Dynamic Core Node */}
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="#00F0FF"
            animate={{
              scale: [0.8, 1.25, 0.8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="filter drop-shadow-[0_0_8px_#00F0FF]"
          />

          {/* Center Crossbeams */}
          <line x1="50" y1="32" x2="50" y2="42" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="50" y1="58" x2="50" y2="68" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="50" x2="42" y2="50" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="58" y1="50" x2="68" y2="50" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-display font-bold tracking-tight text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">
          immersive<span className="text-cyan-400 font-mono font-medium">studio</span>
        </span>
        <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono -mt-1">
          LAB // 2026.Q3
        </span>
      </div>
    </motion.div>
  );
};

// ==========================================
// 2. SOUNDWAVE / ACTIVITY PULSE VISUALIZER
// ==========================================
export const SoundwavePulse: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const bars = [16, 28, 42, 24, 38, 50, 32, 46, 20, 35, 48, 22];

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
      {/* Pulsing Green LED */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>

      {/* Dynamic Audio Bars */}
      <div className="flex items-center gap-[2.5px] h-4">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            className="w-[2.5px] rounded-full bg-gradient-to-t from-emerald-600 to-cyan-400"
            animate={
              active
                ? {
                    height: [`${height * 0.3}px`, `${height * 0.9}px`, `${height * 0.4}px`],
                  }
                : { height: '3px' }
            }
            transition={{
              duration: 0.9 + (i % 4) * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.08,
            }}
          />
        ))}
      </div>

      <span className="text-xs font-mono font-semibold tracking-wide text-emerald-400 uppercase">
        Studio Status: Active &amp; Taking Q3 Projects
      </span>
    </div>
  );
};

// ==========================================
// 3. ANIMATED SERVICE ICONS
// ==========================================

// A. Rotating Code Brackets & Matrix (Spatial Computing / Web Engineering)
export const ServiceIconBrackets: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  return (
    <div className="relative w-14 h-14 rounded-xl bg-cyan-950/40 border border-cyan-500/30 p-2.5 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {/* Left bracket */}
        <motion.path
          d="M 22 15 L 14 30 L 22 45"
          stroke="#00F0FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: isHovered ? -3 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        />
        {/* Right bracket */}
        <motion.path
          d="M 38 15 L 46 30 L 38 45"
          stroke="#00F0FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: isHovered ? 3 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        />
        {/* Slash divider */}
        <motion.line
          x1="33"
          y1="14"
          x2="27"
          y2="46"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ rotate: isHovered ? [0, 15, -15, 0] : 0 }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          style={{ originX: '30px', originY: '30px' }}
        />
        {/* Floating orbit ring */}
        <motion.circle
          cx="30"
          cy="30"
          r="26"
          stroke="#00F0FF"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.4"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '30px', originY: '30px' }}
        />
      </svg>
    </div>
  );
};

// B. Pulsing Neural Node Network (AI / Creative Intelligence / Real-time Data)
export const ServiceIconNeural: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  return (
    <div className="relative w-14 h-14 rounded-xl bg-purple-950/40 border border-purple-500/30 p-2.5 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {/* Connection rays */}
        <line x1="30" y1="30" x2="16" y2="16" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="30" y1="30" x2="44" y2="16" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="30" y1="30" x2="48" y2="38" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="30" y1="30" x2="18" y2="42" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="16" y1="16" x2="44" y2="16" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.4" />
        <line x1="44" y1="16" x2="48" y2="38" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.4" />
        <line x1="48" y1="38" x2="18" y2="42" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.4" />
        <line x1="18" y1="42" x2="16" y2="16" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.4" />

        {/* Outer nodes */}
        <motion.circle
          cx="16"
          cy="16"
          r="4"
          fill="#8B5CF6"
          animate={{ scale: isHovered ? [1, 1.4, 1] : 1 }}
          transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.circle
          cx="44"
          cy="16"
          r="4.5"
          fill="#EC4899"
          animate={{ scale: isHovered ? [1, 1.4, 1] : 1 }}
          transition={{ duration: 1.2, delay: 0.2, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.circle
          cx="48"
          cy="38"
          r="4"
          fill="#00F0FF"
          animate={{ scale: isHovered ? [1, 1.4, 1] : 1 }}
          transition={{ duration: 1.2, delay: 0.4, repeat: isHovered ? Infinity : 0 }}
        />
        <motion.circle
          cx="18"
          cy="42"
          r="3.5"
          fill="#3B82F6"
          animate={{ scale: isHovered ? [1, 1.4, 1] : 1 }}
          transition={{ duration: 1.2, delay: 0.6, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Central heavy synapse */}
        <motion.circle
          cx="30"
          cy="30"
          r="6.5"
          fill="#A855F7"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          animate={{
            scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
            fill: isHovered ? ['#A855F7', '#EC4899', '#A855F7'] : '#A855F7',
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

// C. Expanding 3D Wireframe Cube (WebGL & 3D Interactive Environments)
export const ServiceIconCube: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  return (
    <div className="relative w-14 h-14 rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-2.5 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <motion.g
          animate={{
            rotateY: isHovered ? 180 : 0,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          style={{ originX: '30px', originY: '30px' }}
        >
          {/* Top isometric diamond */}
          <polygon
            points="30,12 47,21 30,30 13,21"
            fill="#10B981"
            fillOpacity="0.25"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Left panel */}
          <polygon
            points="13,21 30,30 30,48 13,39"
            fill="#059669"
            fillOpacity="0.4"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Right panel */}
          <polygon
            points="30,30 47,21 47,39 30,48"
            fill="#047857"
            fillOpacity="0.55"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Orbit indicator */}
        <motion.circle
          cx="30"
          cy="30"
          r="24"
          stroke="#34D399"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          strokeOpacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '30px', originY: '30px' }}
        />
      </svg>
    </div>
  );
};

// D. Precision Radar / Telemetry Scanner (High-Frequency Fintech & Performance)
export const ServiceIconRadar: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  return (
    <div className="relative w-14 h-14 rounded-xl bg-rose-950/40 border border-rose-500/30 p-2.5 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {/* Concentric targets */}
        <circle cx="30" cy="30" r="8" stroke="#F43F5E" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="30" cy="30" r="16" stroke="#F43F5E" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="30" cy="30" r="24" stroke="#F43F5E" strokeWidth="1.5" strokeOpacity="0.7" />

        {/* Crosshairs */}
        <line x1="30" y1="4" x2="30" y2="56" stroke="#F43F5E" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="4" y1="30" x2="56" y2="30" stroke="#F43F5E" strokeWidth="1" strokeOpacity="0.3" />

        {/* Sweep radar beam */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: isHovered ? 2 : 4, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '30px', originY: '30px' }}
        >
          <line x1="30" y1="30" x2="54" y2="30" stroke="#FB7185" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M 30 30 L 52 14 A 24 24 0 0 1 54 30 Z"
            fill="url(#radarGradient)"
            opacity="0.35"
          />
        </motion.g>

        <defs>
          <radialGradient id="radarGradient" cx="30" cy="30" r="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB7185" />
            <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="30" cy="30" r="2.5" fill="#FFE4E6" />
      </svg>
    </div>
  );
};

// ==========================================
// 4. ANIMATED SECTION DIVIDERS & GEOMETRIC MATRICES
// ==========================================
export const KineticDivider: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  return (
    <div className="relative w-full h-24 overflow-hidden pointer-events-none select-none my-6">
      <svg
        className="w-full h-full preserve-3d"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="30%" stopColor="#00F0FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#00F0FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Harmonic Sine Wave 1 */}
        <motion.path
          d={
            reverse
              ? "M0,60 C360,120 720,0 1080,90 C1260,135 1380,30 1440,60"
              : "M0,60 C360,0 720,120 1080,30 C1260,-15 1380,90 1440,60"
          }
          stroke="url(#dividerGrad)"
          strokeWidth="1.5"
          fill="none"
          animate={{
            d: reverse
              ? [
                  "M0,60 C360,120 720,0 1080,90 C1260,135 1380,30 1440,60",
                  "M0,40 C360,90 720,20 1080,110 C1260,60 1380,10 1440,40",
                  "M0,60 C360,120 720,0 1080,90 C1260,135 1380,30 1440,60",
                ]
              : [
                  "M0,60 C360,0 720,120 1080,30 C1260,-15 1380,90 1440,60",
                  "M0,80 C360,30 720,100 1080,10 C1260,70 1380,110 1440,80",
                  "M0,60 C360,0 720,120 1080,30 C1260,-15 1380,90 1440,60",
                ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Harmonic Sine Wave 2 (Dashed secondary trace) */}
        <motion.path
          d="M0,60 C320,100 680,20 1040,80 C1240,110 1360,40 1440,60"
          stroke="#8B5CF6"
          strokeWidth="1"
          strokeDasharray="6 8"
          strokeOpacity="0.3"
          fill="none"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 5. ANIMATED SUCCESS CHECKMARK SVG
// ==========================================
export const AnimatedCheckmark: React.FC<{ size?: number }> = ({ size = 64 }) => {
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* Glow circle */}
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          stroke="#10B981"
          strokeWidth="3"
          fill="rgba(16, 185, 129, 0.1)"
          initial={{ pathLength: 0, scale: 0.8 }}
          animate={{ pathLength: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Check stroke */}
        <motion.path
          d="M24 41 L34 52 L56 28"
          fill="none"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
};
