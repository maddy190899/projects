import { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MoveHorizontal, Check, User, Clock, Award } from 'lucide-react';

const CASES = [
  {
    id: 'case-veneers',
    title: 'Minimal-Prep Porcelain Veneers',
    patient: 'Claire M., 29 • Interior Architect',
    condition: 'Enamel fluorosis, deep staining & central diastema (gap)',
    outcome: 'Custom feldspathic hand-layered porcelain in Bleach Shade BL2. Full harmonic contour.',
    doctor: 'Dr. Julian Sterling, DDS',
    duration: '2 Appointments (10 Days)',
    beforeImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    stats: [
      { label: 'Shade Improvement', value: '+8 Levels' },
      { label: 'Enamel Removed', value: '< 0.3mm' },
      { label: 'Gum Symmetry', value: 'Perfected' }
    ]
  },
  {
    id: 'case-invisalign',
    title: 'Invisalign® SmartTrack Realignment',
    patient: 'David R., 34 • Tech Founder',
    condition: 'Class II deep bite with severe lower incisor crowding',
    outcome: 'Complete non-extraction alignment using 3D ClinCheck predictive staging.',
    doctor: 'Dr. Elena Vance, DMD, MS',
    duration: '7.5 Months (30 Aligners)',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    stats: [
      { label: 'Aligner Trays', value: '30 Trays' },
      { label: 'Extraction', value: 'Zero' },
      { label: 'Wear Time', value: '22 hrs/day' }
    ]
  },
  {
    id: 'case-implants',
    title: 'Swiss Straumann® Single & Bridge Restorations',
    patient: 'Elena S., 48 • Executive',
    condition: 'Fractured premolar and missing lower first molar',
    outcome: 'Immediate 3D guided implant placement with monolithic zirconia crown.',
    doctor: 'Dr. Marcus Chen, DDS',
    duration: 'Single Surgical Session',
    beforeImg: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    stats: [
      { label: 'Osseointegration', value: '100% Solid' },
      { label: 'Chewing Force', value: 'Full Restore' },
      { label: 'Longevity', value: 'Lifetime' }
    ]
  }
];

export default function BeforeAfterSlider({ onBookConsultation }) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeCase = CASES[activeCaseIndex];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Documented Clinical Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Before & After Transformations
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Drag the interactive slider horizontally to reveal the precision of our aesthetic smile architects. All cases photographed in our San Francisco operatory under clinical macro lighting.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-md">
            {CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCaseIndex === idx
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/40'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Container */}
          <div className="lg:col-span-8">
            <div 
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/80 select-none cursor-ew-resize group"
            >
              {/* After Image (Full width background) */}
              <img 
                src={activeCase.afterImg} 
                alt={`${activeCase.title} - After Treatment`} 
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-teal-300 border border-teal-500/40 text-xs font-bold uppercase tracking-wider">
                After: Radiance Restored
              </div>

              {/* Before Image (Clipped by slider position) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={activeCase.beforeImg} 
                  alt={`${activeCase.title} - Before Treatment`} 
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ 
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
                  Before Treatment
                </div>
              </div>

              {/* Draggable Divider Line */}
              <div 
                className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-teal-500 cursor-grab active:cursor-grabbing">
                  <MoveHorizontal className="w-5 h-5 text-teal-800" />
                </div>
              </div>

              {/* Bottom Instructions Helper */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md text-slate-300 text-xs flex items-center gap-2 pointer-events-none">
                <MoveHorizontal className="w-3.5 h-3.5 text-teal-400" />
                <span>Drag left or right to compare</span>
              </div>
            </div>
          </div>

          {/* Case Clinical Metadata & Doctor Commentary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-md space-y-5">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-teal-400 font-semibold">Clinical Case Study</span>
                <h3 className="text-2xl font-bold font-serif mt-1">{activeCase.title}</h3>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-teal-400" />
                  {activeCase.patient}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/40">
                  <span className="text-slate-400 block font-semibold text-[11px] uppercase tracking-wide">Diagnosis</span>
                  <p className="mt-0.5">{activeCase.condition}</p>
                </div>
                <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/20">
                  <span className="text-teal-300 block font-semibold text-[11px] uppercase tracking-wide">Aura Treatment Protocol</span>
                  <p className="mt-0.5">{activeCase.outcome}</p>
                </div>
              </div>

              {/* Clinical Telemetry Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {activeCase.stats.map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 text-center">
                    <p className="text-[10px] text-slate-400 uppercase font-medium">{s.label}</p>
                    <p className="text-xs sm:text-sm font-bold text-teal-300 mt-1">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  {activeCase.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-teal-400" />
                  {activeCase.doctor}
                </span>
              </div>

              <button
                onClick={onBookConsultation}
                className="w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/20 cursor-pointer text-center"
              >
                Schedule Similar Transformation
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
