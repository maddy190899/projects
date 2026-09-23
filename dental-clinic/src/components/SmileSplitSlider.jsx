import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, ChevronRight } from 'lucide-react';

export const SmileSplitSlider = ({
  title = "Case 1042: Full Upper Arch 10 Feldspathic Veneers",
  category = "Cosmetic Porcelain Veneers",
  preOpDetails = "Pre-Op: Enamel fluorosis, incisal wear, 3.5mm midline diastema, reverse smile line (Shade A3.5)",
  postOpDetails = "Post-Op: 10 Micro-thin (0.25mm) hand-layered feldspathic porcelain veneers, golden proportion smile arc (Shade BL1)",
  duration = "2 Clinical Visits • 10 Days",
  doctor = "Dr. Elena Rostova, DMD, FAACD"
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-950/40 text-xs font-mono text-sky-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {category}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        <div className="text-left sm:text-right font-mono text-xs">
          <div className="text-emerald-400 font-semibold">{duration}</div>
          <div className="text-slate-400 text-[11px] mt-0.5">{doctor}</div>
        </div>
      </div>

      {/* Interactive Split Viewport Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700/60 bg-slate-950"
      >
        {/* POST-OP LAYER (Revealed / Full Canvas) */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-sky-950/30 to-slate-900 flex items-center justify-center p-4">
          <svg className="w-full h-full max-w-[560px]" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="postOpVeneers" x1="100" y1="50" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="0.6" stopColor="#F0F9FF" />
                <stop offset="1" stopColor="#E0F2FE" />
              </linearGradient>
              <linearGradient id="postGumGrad" x1="100" y1="80" x2="400" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6" />
                <stop offset="1" stopColor="#FB7185" />
              </linearGradient>
            </defs>

            {/* Symmetrical Healthy Gum Contour */}
            <path d="M70 120 C 120 100, 160 105, 200 95 C 230 88, 270 88, 300 95 C 340 105, 380 100, 430 120" stroke="url(#postGumGrad)" strokeWidth="8" strokeLinecap="round" opacity="0.9" />

            {/* Radiant Post-Op Teeth (Perfect Golden Ratio alignment) */}
            {/* Right Premolars & Canine */}
            <rect x="100" y="115" width="30" height="75" rx="7" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.2" />
            <rect x="135" y="110" width="32" height="85" rx="7" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.2" />
            <rect x="172" y="105" width="36" height="95" rx="8" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.4" />
            {/* Right Central Incisor (#8) */}
            <rect x="213" y="98" width="44" height="116" rx="9" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.8" />
            {/* Left Central Incisor (#9) */}
            <rect x="261" y="98" width="44" height="116" rx="9" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.8" />
            {/* Left Canine & Premolars */}
            <rect x="310" y="105" width="36" height="95" rx="8" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.4" />
            <rect x="351" y="110" width="32" height="85" rx="7" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.2" />
            <rect x="388" y="115" width="30" height="75" rx="7" fill="url(#postOpVeneers)" stroke="#38BDF8" strokeWidth="1.2" />

            {/* Translucent Enamel Glaze Reflection */}
            <path d="M220 110 L 245 110 L 242 180 L 222 180 Z" fill="#FFFFFF" opacity="0.75" />
            <path d="M268 110 L 293 110 L 290 180 L 270 180 Z" fill="#FFFFFF" opacity="0.75" />

            {/* Ideal Incisal Smile Arc */}
            <path d="M95 180 C 170 230, 330 230, 405 180" stroke="#0EA5E9" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.6" />
          </svg>

          {/* Post-Op Label */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs flex items-center gap-1.5 shadow-lg backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5" />
            POST-OP: SHADE BL1 (FINAL RESTORATION)
          </div>
        </div>

        {/* PRE-OP LAYER (Clipped via width = sliderPos) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-[0_0_20px_rgba(56,189,248,0.5)] bg-slate-950"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 flex items-center justify-center p-4 min-w-[320px] sm:min-w-[700px]">
            <svg className="w-full h-full max-w-[560px]" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="preOpTeeth" x1="100" y1="50" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEF3C7" />
                  <stop offset="0.6" stopColor="#FDE68A" />
                  <stop offset="1" stopColor="#D97706" />
                </linearGradient>
              </defs>

              {/* Uneven Gum Line */}
              <path d="M70 110 C 130 125, 170 100, 205 110 C 235 115, 275 95, 305 115 C 345 100, 385 125, 430 110" stroke="#E11D48" strokeWidth="7" strokeLinecap="round" opacity="0.75" />

              {/* Pre-Op Irregular & Gapped Teeth with Fluorosis Discoloration */}
              <rect x="105" y="125" width="28" height="60" rx="4" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1" />
              <rect x="138" y="120" width="29" height="70" rx="4" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1" />
              {/* Crooked Lateral */}
              <rect x="174" y="118" width="30" height="76" rx="4" transform="rotate(-4 174 118)" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1" />
              {/* Diastema Gap Between Centrals (Notice space 210 to 240) */}
              <rect x="210" y="115" width="36" height="88" rx="4" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1.2" />
              {/* 3.5mm GAP */}
              <rect x="254" y="115" width="36" height="88" rx="4" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1.2" />
              {/* Crowded Left Lateral */}
              <rect x="296" y="120" width="30" height="74" rx="4" transform="rotate(5 296 120)" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1" />
              <rect x="332" y="122" width="28" height="68" rx="4" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1" />
              <rect x="365" y="128" width="26" height="58" rx="4" fill="url(#preOpTeeth)" stroke="#B45309" strokeWidth="1" />

              {/* Fluorosis Mottled Stains */}
              <ellipse cx="225" cy="145" rx="8" ry="4" fill="#B45309" opacity="0.4" />
              <ellipse cx="270" cy="155" rx="7" ry="5" fill="#B45309" opacity="0.4" />
              <ellipse cx="190" cy="150" rx="6" ry="3" fill="#B45309" opacity="0.3" />
            </svg>

            {/* Pre-Op Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs shadow-lg backdrop-blur-md">
              PRE-OP: SHADE A3.5 (SEVERE DIASTEMA & WEAR)
            </div>
          </div>
        </div>

        {/* Center Draggable Handle Bar */}
        <div
          className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-sky-500 border-2 border-white shadow-xl flex items-center justify-center text-white">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Clinical Notes Footer */}
      <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
          <span className="font-mono text-amber-400 font-semibold uppercase block mb-1">Pre-Operative Diagnosis</span>
          <p className="text-slate-300 leading-relaxed">{preOpDetails}</p>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
          <span className="font-mono text-emerald-400 font-semibold uppercase block mb-1">Procedural Resolution</span>
          <p className="text-slate-300 leading-relaxed">{postOpDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default SmileSplitSlider;
