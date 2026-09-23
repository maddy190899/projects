import { motion } from 'motion/react';

// Semantic Crisp Vector Brand Logos (Zero image placeholders, 100% semantic SVGs)
export function ClientLogos() {
  const brands = [
    {
      name: "Stripe",
      svg: (
        <svg viewBox="0 0 60 25" className="h-6 w-auto fill-current">
          <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32c-1.21.57-2.85.89-4.66.89-4.24 0-6.71-2.48-6.71-6.73 0-4.04 2.4-6.8 6.22-6.8 3.86 0 5.96 2.76 5.96 6.72v1zm-4.14-2.61c0-1.42-.76-2.31-2.04-2.31-1.24 0-2.03.9-2.14 2.31h4.18zM36.19 20V6.78h4.03v1.89c.98-1.4 2.32-2.11 3.96-2.11 3.09 0 5.09 2.29 5.09 6.23 0 4.1-2.07 6.44-5.18 6.44-1.6 0-2.87-.67-3.87-1.95V24h-4.03v-4zm4.03-6.73c0 2.21 1.15 3.56 2.89 3.56 1.76 0 2.89-1.37 2.89-3.56 0-2.17-1.13-3.56-2.89-3.56-1.74 0-2.89 1.35-2.89 3.56zM28.02 6.78h4.05V20h-4.05V6.78zm0-4.71h4.05v3.18h-4.05V2.07zM20.2 11.23c-1.63-.5-2.46-.96-2.46-1.76 0-.82.78-1.39 2.09-1.39 1.39 0 2.87.53 4.07 1.25V5.77C22.65 5.14 21.05 4.8 19.5 4.8c-3.79 0-6.19 2.01-6.19 5.17 0 2.92 1.94 4.3 4.54 5.09 1.83.56 2.46 1.07 2.46 1.88 0 .93-.9 1.54-2.33 1.54-1.67 0-3.48-.68-4.83-1.64v3.66c1.55.72 3.32 1.09 4.97 1.09 4.07 0 6.45-2.02 6.45-5.32 0-2.73-1.87-4.14-4.37-4.99zM7.18 9.53V6.78H2.49v-4.7L0 2.65v4.13h-2.4v2.75H0V16c0 2.92 1.77 4.19 4.45 4.19 1.21 0 2.22-.24 2.87-.63v-2.88c-.53.25-1.25.4-1.99.4-1.09 0-1.46-.53-1.46-1.65V9.53h3.31z"/>
        </svg>
      )
    },
    {
      name: "Linear",
      svg: (
        <svg viewBox="0 0 100 24" className="h-5 w-auto fill-current">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z" fill="currentColor"/>
          <text x="30" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" letterSpacing="2">LINEAR</text>
        </svg>
      )
    },
    {
      name: "Vercel",
      svg: (
        <svg viewBox="0 0 115 24" className="h-5 w-auto fill-current">
          <path d="M12 1L24 22H0L12 1z" />
          <text x="32" y="18" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1.5">VERCEL</text>
        </svg>
      )
    },
    {
      name: "Supabase",
      svg: (
        <svg viewBox="0 0 130 26" className="h-6 w-auto fill-current">
          <path d="M13.2 0L2.1 13.9c-.6.8 0 1.9 1 1.9h9.1L9.1 25.5c-.5 1 .8 1.9 1.6 1.1L22.8 11.7c.6-.8 0-1.9-1-1.9h-9.2l3.4-9.1c.4-.9-.8-1.8-1.6-.7z" fill="url(#supaGrad)"/>
          <defs>
            <linearGradient id="supaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#24E395"/>
              <stop offset="100%" stopColor="#3ECF8E"/>
            </linearGradient>
          </defs>
          <text x="30" y="18" fontFamily="sans-serif" fontSize="14" fontWeight="700" letterSpacing="1">SUPABASE</text>
        </svg>
      )
    },
    {
      name: "OpenAI",
      svg: (
        <svg viewBox="0 0 110 24" className="h-5 w-auto fill-current">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="4 2"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <text x="28" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" letterSpacing="1.5">OPENAI</text>
        </svg>
      )
    },
    {
      name: "Figma",
      svg: (
        <svg viewBox="0 0 95 24" className="h-5 w-auto fill-current">
          <path d="M5 2h5v5H5a2.5 2.5 0 0 1 0-5zm5 5h5v5h-5V7zm0 5h5a2.5 2.5 0 0 1 0 5h-5v-5zm-5-5h5v5H5a2.5 2.5 0 0 1 0-5zm0 10h5v2.5A2.5 2.5 0 0 1 7.5 22 2.5 2.5 0 0 1 5 19.5V17z" fill="currentColor"/>
          <text x="24" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" letterSpacing="1.5">FIGMA</text>
        </svg>
      )
    },
    {
      name: "Raycast",
      svg: (
        <svg viewBox="0 0 110 24" className="h-5 w-auto fill-current">
          <path d="M2 12l5-5 5 5-5 5-5-5zm10-5l5-5 5 5-5 5-5-5zm0 10l5-5 5 5-5 5-5-5z" fill="#FF6363"/>
          <text x="28" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" letterSpacing="1.5">RAYCAST</text>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full overflow-hidden py-10 border-y border-white/5 bg-slate-950/40 relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#090A0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#090A0F] to-transparent z-10 pointer-events-none" />
      
      <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-mono-code mb-6">
        Trusted by High-Growth Unicorns & Forward-Thinking Digital Enterprises
      </p>

      <div className="flex gap-12 items-center justify-around flex-wrap max-w-6xl mx-auto px-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
        {brands.map((brand, i) => (
          <div key={i} className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer p-2">
            {brand.svg}
          </div>
        ))}
      </div>
    </div>
  );
}

// Interactive 3D Spatial Wireframe Visualizer
export function SpatialWireframe({ activeAngle = 0 }) {
  return (
    <div className="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-purple-500/20 rounded-full blur-2xl animate-pulse-glow" />
      
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full relative z-10 overflow-visible"
      >
        <defs>
          <linearGradient id="cyberLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Orbit Rings */}
        <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="56" stroke="rgba(6,182,212,0.15)" strokeWidth="1.2" fill="none" />
        
        {/* Kinetic Isometric Polyhedron */}
        <g transform={`rotate(${activeAngle} 100 100)`}>
          {/* Top Hex Face */}
          <polygon points="100,30 150,55 150,115 100,140 50,115 50,55" fill="rgba(6, 182, 212, 0.05)" stroke="url(#cyberLineGrad)" strokeWidth="1.5" />
          
          {/* Internal Wireframe Axis */}
          <line x1="100" y1="30" x2="100" y2="140" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50" y1="55" x2="150" y2="115" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50" y1="115" x2="150" y2="55" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Core Sphere */}
          <circle cx="100" cy="100" r="16" fill="rgba(6, 182, 212, 0.2)" stroke="#06B6D4" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="6" fill="#38BDF8" />

          {/* Interactive Floating Vertices */}
          <circle cx="100" cy="30" r="4.5" fill="#06B6D4" />
          <circle cx="150" cy="55" r="4.5" fill="#818CF8" />
          <circle cx="150" cy="115" r="4.5" fill="#C084FC" />
          <circle cx="100" cy="140" r="4.5" fill="#38BDF8" />
          <circle cx="50" cy="115" r="4.5" fill="#818CF8" />
          <circle cx="50" cy="55" r="4.5" fill="#06B6D4" />
        </g>
      </svg>
    </div>
  );
}

// Interactive Radial Gauge for Performance Score (100/100 Lighthouse)
export function PerformanceDial({ score = 100, label = "Lighthouse Score" }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * score) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#10B981"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold font-mono-code text-white">{score}</span>
          <span className="text-[10px] uppercase font-mono-code text-emerald-400 font-semibold tracking-wider">Pass</span>
        </div>
      </div>
      <span className="text-xs text-slate-400 mt-2 font-medium">{label}</span>
    </div>
  );
}
