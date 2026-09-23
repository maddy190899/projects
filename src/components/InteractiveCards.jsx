import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  CBCTVoxelIcon, 
  WaterlaseLaserIcon, 
  VeneerPrecisionIcon, 
  AlignerIcon, 
  DentalToothIcon,
  SmileDesignProportionVector
} from './VectorGraphic';
import { 
  Cpu, 
  Eye, 
  Activity, 
  Sparkles, 
  Gauge, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

// Bento Card with Mouse-Following Radial Glow Highlight
const BentoCard = ({ children, className = "", onClick }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-3xl p-6 sm:p-7 border border-slate-800 bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-950/20 group ${className}`}
    >
      {/* Mouse-Following Radial Light */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.12), transparent 80%)`
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export const InteractiveCards = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState('bone');

  return (
    <section id="technology-bento" className="py-20 border-t border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/30 text-xs font-mono text-sky-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            SURGICAL & BIOMIMETIC INFRASTRUCTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Next-Generation Dental Engineering.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Every clinical decision is calibrated through ultra-low dose volumetric imaging, robotic 5-axis milling, and hydrophotonic laser biology.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>IN-CLINIC ROBOTICS LAB: ONLINE</span>
        </div>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        {/* Card 1: 3D CBCT Volumetric Navigation (Large - 7 cols) */}
        <BentoCard className="lg:col-span-7 flex flex-col justify-between min-h-[380px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <CBCTVoxelIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-sky-400 uppercase">Volumetric Imaging</span>
                  <h3 className="text-xl font-bold text-white">Planmeca Viso G7 3D CBCT</h3>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                0.075mm Voxels
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Full craniofacial multi-planar reconstruction allows sub-millimeter mapping of alveolar bone density, inferior alveolar nerve pathways, and maxillary sinus floors with 77% lower radiation dose than medical CTs.
            </p>

            {/* Interactive Telemetry Tab Switcher */}
            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('bone')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'bone' 
                        ? 'bg-sky-500 text-white font-semibold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Bone Density (HU)
                  </button>
                  <button
                    onClick={() => setActiveTab('nerve')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'nerve' 
                        ? 'bg-sky-500 text-white font-semibold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Nerve Canal Safezone
                  </button>
                  <button
                    onClick={() => setActiveTab('sinus')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'sinus' 
                        ? 'bg-sky-500 text-white font-semibold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Sinus Floor Depth
                  </button>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  GUIDED ACCURACY 99.9%
                </div>
              </div>

              {activeTab === 'bone' && (
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Trabecular Density</div>
                    <div className="text-base font-bold text-sky-400 font-mono mt-0.5">850 HU</div>
                    <div className="text-[9px] text-emerald-400">Type II Dense Bed</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Cortical Plate Thickness</div>
                    <div className="text-base font-bold text-teal-400 font-mono mt-0.5">2.4 mm</div>
                    <div className="text-[9px] text-slate-400">Buccal Wall Preserved</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Primary Stability ISQ</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">84 / 100</div>
                    <div className="text-[9px] text-emerald-400">Immediate Load Approved</div>
                  </div>
                </div>
              )}

              {activeTab === 'nerve' && (
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Mandibular Canal Clearance</div>
                    <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">3.4 mm</div>
                    <div className="text-[9px] text-emerald-400">&gt;2.0mm Safety Threshold</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Mental Foramen Margin</div>
                    <div className="text-base font-bold text-sky-400 font-mono mt-0.5">4.8 mm</div>
                    <div className="text-[9px] text-slate-400">Zero Paresthesia Risk</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Surgical Sleeve Offset</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">8.0 mm</div>
                    <div className="text-[9px] text-sky-400">Titanium Master Ring</div>
                  </div>
                </div>
              )}

              {activeTab === 'sinus' && (
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Sub-Antral Height</div>
                    <div className="text-base font-bold text-teal-400 font-mono mt-0.5">11.6 mm</div>
                    <div className="text-[9px] text-emerald-400">No Sinus Lift Required</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Schneiderian Membrane</div>
                    <div className="text-base font-bold text-sky-400 font-mono mt-0.5">1.1 mm</div>
                    <div className="text-[9px] text-slate-400">Intact & Healthy</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">Ostium Patency</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">100% Open</div>
                    <div className="text-[9px] text-emerald-400">Optimal Airflow</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>Radiation Protocol: Planmeca Ultra Low Dose™</span>
            <span className="font-mono text-sky-400">ALARA Standard Certified</span>
          </div>
        </BentoCard>

        {/* Card 2: In-House Robotic CAD/CAM Milling (5 cols) */}
        <BentoCard className="lg:col-span-5 flex flex-col justify-between min-h-[380px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <VeneerPrecisionIcon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-teal-400 uppercase">Robotic Prosthetics</span>
                  <h3 className="text-xl font-bold text-white">CEREC Primemill 5-Axis</h3>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-teal-950/40 text-teal-300 border border-teal-500/20">
                14-Min Cycle
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Diamond-coated carbide burs mill monolithic porcelain veneers and zirconia restorations right in our clinic suite while you relax in our private cinema lounge.
            </p>

            <div className="space-y-2.5 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Marginal Fit Tolerance:</span>
                <span className="font-mono font-bold text-sky-400">&lt; 12 Microns</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-teal-400 h-full w-[96%]" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400">Translucency Multi-Gradient:</span>
                <span className="font-mono font-bold text-teal-400">5Y-PSZ Aesthetic</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full w-[92%]" />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>Material: Lithium Disilicate & Katana Zirconia</span>
            <span className="font-mono text-teal-400">Same-Day Delivery</span>
          </div>
        </BentoCard>

        {/* Card 3: 3D Digital Smile Design Architecture (4 cols) */}
        <BentoCard className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase">Aesthetic Harmony</span>
                <h3 className="text-lg font-bold text-white">Digital Smile Design (DSD)</h3>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Biometric facial mapping calculates your golden proportion incisal smile arc before a single tooth is touched. Try your final smile in real life before committing.
            </p>

            <div className="py-2">
              <SmileDesignProportionVector className="w-full h-auto opacity-90" />
            </div>
          </div>

          <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>Golden Ratio Index: 1.618:1.0</span>
            <span className="font-mono text-purple-400">Phi Calibrated</span>
          </div>
        </BentoCard>

        {/* Card 4: Waterlase Laser Periodontics (4 cols) */}
        <BentoCard className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <WaterlaseLaserIcon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">Hydrophotonic Surgery</span>
                <h3 className="text-lg font-bold text-white">BIOLASE Waterlase iPlus</h3>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Harnesses energized water droplets and 2,780nm laser energy for needle-free cavity treatment, LANAP regenerative gum therapy, and zero-trauma osseous sculpting.
            </p>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Needle-Free</div>
                <div className="text-base font-bold text-cyan-400 font-mono mt-0.5">88% of cases</div>
                <div className="text-[9px] text-slate-400">No Numbness</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Bacterial Eradication</div>
                <div className="text-base font-bold text-teal-400 font-mono mt-0.5">99.9% P.gingivalis</div>
                <div className="text-[9px] text-teal-400">Micro-Vaporized</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>Zero Scalpels • Zero Sutures</span>
            <span className="font-mono text-cyan-400">Rapid 24h Healing</span>
          </div>
        </BentoCard>

        {/* Card 5: Diamond Apex Invisalign & Sedation Sanctuary (4 cols) */}
        <BentoCard className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <AlignerIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase">Airway Orthodontics</span>
                <h3 className="text-lg font-bold text-white">Diamond Apex Invisalign®</h3>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Craniofacial expansion optimizes both smile aesthetics and nocturnal airway passage. Treat deep bites, open bites, and severe crowding in 40% less clinical time.
            </p>

            <div className="space-y-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Aligner Stage Precision:</span>
                <span className="font-mono font-bold text-emerald-400">0.25mm / tray</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Airway Volume Expansion:</span>
                <span className="font-mono font-bold text-sky-400">+28.4% Mean</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Twilight Sedation Option:</span>
                <span className="font-mono font-bold text-teal-300">Board-Cert MD</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
            <span>Provider Ranking: Top 1% Worldwide</span>
            <span className="font-mono text-emerald-400">Diamond Apex 2026</span>
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default InteractiveCards;
