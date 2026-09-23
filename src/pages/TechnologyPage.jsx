import React, { useState } from 'react';
import { 
  Cpu, 
  Eye, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Crosshair, 
  Sliders, 
  Radio, 
  AlertTriangle 
} from 'lucide-react';
import { CBCTVoxelIcon, WaterlaseLaserIcon, DentalToothIcon } from '../components/VectorGraphic';

export const TechnologyPage = ({ onOpenBooking }) => {
  const [interactiveMode, setInteractiveMode] = useState('mesh'); // 'mesh' | 'photo'
  const [aiOverlayActive, setAiOverlayActive] = useState(true);

  const technologies = [
    {
      name: 'Planmeca Viso® G7 3D CBCT Volumetric Tomograph',
      category: 'Diagnostic Radiology',
      specs: '0.075mm Isotropic Voxels • 77% Dose Reduction (Ultra Low Dose™)',
      desc: 'Provides full 360-degree craniofacial volumetric reconstruction. Enables precise assessment of maxillary sinus floors, mandibular alveolar nerves, and trabecular micro-architecture for virtual surgical navigation.',
      telemetry: [
        { label: 'Spatial Resolution', val: '75 Microns' },
        { label: 'Reconstruction Time', val: '18 Seconds' },
        { label: 'FOV Range', val: '3x3cm to 30x30cm' }
      ]
    },
    {
      name: '3Shape TRIOS® 5 Wireless 3D Optical Scanner',
      category: 'Digital Impression System',
      specs: 'Zero-Powder • 2,400 FPS Confocal Imaging • ScanSwitch™ Motion',
      desc: 'Replaces uncomfortable traditional impression goop. Captures true-color 3D surface topography with sub-10 micron geometric accuracy in under 45 seconds per complete dental arch.',
      telemetry: [
        { label: 'Scan Speed', val: '42 Sec / Arch' },
        { label: 'Color Accuracy', val: '100% True-Shade' },
        { label: 'Radiation Exposure', val: '0.00 μSv (Optical Only)' }
      ]
    },
    {
      name: 'CEREC Primemill 5-Axis In-Clinic Robotic Lab',
      category: 'Subtractive CAD/CAM Robotics',
      specs: 'Dual-Spindle High-Speed Wet/Dry Machining • 14-Min Cycle',
      desc: 'Milling monolithic zirconia and lithium disilicate restorations directly within our clinical laboratory while patients wait, completely eliminating temporary crowns and multi-week lab delays.',
      telemetry: [
        { label: 'Marginal Precision', val: '< 12 Microns' },
        { label: 'Turnaround Time', val: '14 Mins' },
        { label: 'Material Library', val: 'Zirconia / E.max / Hybrid' }
      ]
    },
    {
      name: 'BIOLASE Waterlase iPlus 2,780nm Hydrophotonic Laser',
      category: 'Tissue Regeneration & Microsurgery',
      specs: 'Er,Cr:YSGG Cold Laser • Atomized Water Droplet Cavitation',
      desc: 'Energizes pressurized water droplets to micro-cleave hard tissue (teeth and bone) without thermal vibration or micro-cracks. Eliminates the need for traditional dental needles in 88% of restorative cases.',
      telemetry: [
        { label: 'Needle-Free Rate', val: '88% of Procedures' },
        { label: 'Thermal Pulp Rise', val: '0.0°C (Non-Thermal)' },
        { label: 'Bacterial Cleansing', val: '99.9% Eradication' }
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-400 mb-4">
          <Cpu className="w-3.5 h-3.5" />
          CLINICAL HARDWARE & BIOTECHNOLOGY SUITE
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Robotics, 3D Optics & Computer Vision.
        </h1>
        <p className="text-slate-300 text-base mt-4 leading-relaxed">
          We engineered our clinical workflow around micron-level tolerances, replacing guesswork with surgical guides, real-time AI pathology segmentation, and hospital-grade cleanrooms.
        </p>
      </div>

      {/* Interactive AI Diagnostics & Computer Vision Simulator */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-950/40 text-xs font-mono text-teal-300 mb-2">
              <Crosshair className="w-3.5 h-3.5" />
              FDA-CLEARED COMPUTER VISION PLATFORM
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Second Opinion® AI Radiographic Pathology Detection
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Neural networks analyze bitewing and periapical radiographs in real-time to detect incipient interproximal demineralization before it becomes visible to the naked human eye.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-300">AI Bounding Boxes:</span>
            <button
              onClick={() => setAiOverlayActive(!aiOverlayActive)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                aiOverlayActive 
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30' 
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {aiOverlayActive ? 'ACTIVE (OVERLAY ON)' : 'DISABLED (RAW X-RAY)'}
            </button>
          </div>
        </div>

        {/* Digital Radiograph Screen Simulation */}
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl bg-black border border-slate-700 overflow-hidden flex items-center justify-center p-4">
          {/* Simulated Radiograph Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

          {/* SVG Radiograph Render of 4 Posterior Teeth */}
          <svg className="w-full h-full max-w-[640px]" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="boneBed" x1="0" y1="200" x2="0" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#475569" stopOpacity="0.7" />
                <stop offset="1" stopColor="#1E293B" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="radiopaqueEnamel" x1="0" y1="50" x2="0" y2="250" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8FAFC" stopOpacity="0.85" />
                <stop offset="0.6" stopColor="#94A3B8" stopOpacity="0.75" />
                <stop offset="1" stopColor="#64748B" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Alveolar Bone Crest Line */}
            <path d="M40 210 Q 180 205, 300 215 T 560 210 L 560 350 L 40 350 Z" fill="url(#boneBed)" />

            {/* Tooth #18 (Second Molar) */}
            <g>
              <path d="M60 80 Q 90 60, 140 75 Q 155 120, 145 220 L 130 320 Q 120 330, 110 320 L 105 230 L 95 320 Q 85 330, 75 320 L 65 210 Z" fill="url(#radiopaqueEnamel)" stroke="#CBD5E1" strokeWidth="1" />
              {/* Pulp Chamber & Root Canals */}
              <path d="M90 120 Q 105 100, 115 120 L 110 280 M 85 280 L 92 140" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Tooth #19 (First Molar with Existing Porcelain Inlay) */}
            <g>
              <path d="M165 72 Q 210 55, 260 70 Q 275 120, 265 215 L 255 320 Q 245 330, 235 320 L 225 225 L 210 320 Q 200 330, 190 320 L 175 210 Z" fill="url(#radiopaqueEnamel)" stroke="#CBD5E1" strokeWidth="1" />
              {/* Inlay */}
              <rect x="185" y="65" width="55" height="35" rx="3" fill="#FFFFFF" opacity="0.95" stroke="#38BDF8" strokeWidth="1" />
              {/* Pulp Chamber */}
              <path d="M205 118 Q 220 100, 230 118 L 235 280 M 205 280 L 210 140" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Tooth #20 (Second Premolar) */}
            <g>
              <path d="M285 85 Q 315 70, 350 82 Q 360 130, 350 215 L 340 310 Q 330 320, 320 310 L 305 220 Q 295 150, 285 85 Z" fill="url(#radiopaqueEnamel)" stroke="#CBD5E1" strokeWidth="1" />
              {/* Pulp Canal */}
              <line x1="322" y1="110" x2="328" y2="290" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Tooth #21 (First Premolar) */}
            <g>
              <path d="M375 90 Q 405 75, 440 88 Q 450 135, 440 215 L 430 305 Q 420 315, 410 305 L 395 220 Q 385 150, 375 90 Z" fill="url(#radiopaqueEnamel)" stroke="#CBD5E1" strokeWidth="1" />
              {/* Pulp Canal */}
              <line x1="412" y1="115" x2="418" y2="285" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* AI Computer Vision Overlays */}
            {aiOverlayActive && (
              <g className="font-mono text-xs">
                {/* Detection 1: Interproximal Caries on #20 Distal Surface */}
                <rect x="272" y="98" width="22" height="30" rx="3" fill="none" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="272" cy="98" r="3" fill="#F43F5E" />
                <path d="M260 112 L 230 112" stroke="#F43F5E" strokeWidth="1.5" />
                <rect x="80" y="98" width="145" height="42" rx="6" fill="rgba(15, 23, 42, 0.9)" stroke="#F43F5E" strokeWidth="1" />
                <text x="90" y="114" fill="#F43F5E" fontSize="11" fontWeight="bold">CARIES DETECTED</text>
                <text x="90" y="130" fill="#CBD5E1" fontSize="10">E2 Enamel Layer (99.4% conf)</text>

                {/* Detection 2: Margin Overhang on Inlay #19 */}
                <rect x="235" y="70" width="18" height="24" rx="3" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M255 82 L 290 82" stroke="#F59E0B" strokeWidth="1.5" />
                <rect x="295" y="65" width="140" height="38" rx="6" fill="rgba(15, 23, 42, 0.9)" stroke="#F59E0B" strokeWidth="1" />
                <text x="305" y="80" fill="#F59E0B" fontSize="10" fontWeight="bold">MARGIN INTEGRITY</text>
                <text x="305" y="94" fill="#CBD5E1" fontSize="9">0.2mm Marginal Gap</text>

                {/* Detection 3: Bone Level Measurement */}
                <line x1="262" y1="215" x2="285" y2="215" stroke="#10B981" strokeWidth="2" />
                <line x1="262" y1="205" x2="262" y2="225" stroke="#10B981" strokeWidth="1.5" />
                <line x1="285" y1="205" x2="285" y2="225" stroke="#10B981" strokeWidth="1.5" />
                <text x="274" y="240" fill="#34D399" fontSize="10" textAnchor="middle" fontWeight="bold">1.4mm (Normal)</text>
              </g>
            )}
          </svg>

          {/* Telemetry Indicator */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
            <span className="text-teal-400 font-bold">MODEL:</span> Second Opinion® Neural Net v4.2 • ResNet-101 Backbone
          </div>
        </div>
      </section>

      {/* Hardware Deep Dive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((t, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider">
                  {t.category}
                </span>
                <span className="font-mono text-[10px] text-teal-400 bg-teal-950/40 px-2.5 py-0.5 rounded border border-teal-500/20">
                  CLINICAL GRADE
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{t.name}</h3>
              <p className="text-xs font-mono text-sky-300 mb-4">{t.specs}</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {t.desc}
              </p>

              {/* Specs Telemetry Row */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-center mb-6">
                {t.telemetry.map((tel, i) => (
                  <div key={i}>
                    <div className="text-[10px] font-mono text-slate-400">{tel.label}</div>
                    <div className="text-xs font-bold font-mono text-white mt-0.5">{tel.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-sky-500 hover:border-sky-500 hover:text-white text-xs font-semibold text-slate-200 transition-all"
            >
              Schedule Scan & Diagnostics
            </button>
          </div>
        ))}
      </div>

      {/* Cleanroom & Sterilization Rigor Section */}
      <section className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/30 text-xs font-mono text-sky-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            HOSPITAL OPERATORY INFECTION PROTOCOL
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            ISO-13485 Cleanroom Sterilization & Medical Air Purity
          </h3>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            Our surgical operatories adhere to the same stringent microbial defense standards as hospital open-heart suites. We utilize Class B fractionated pre-vacuum autoclaves, continuous spore testing, and negative/positive pressure isolation suites to protect immunocompromised patients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="text-teal-400 font-mono text-[10px] font-bold uppercase mb-1">AIRBORNE DEFENSE</div>
              <div className="text-base font-bold text-white font-mono">HEPA 14 Filters</div>
              <div className="text-slate-400 mt-1">16 complete room air exchanges per hour with UV-C irradiation.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="text-sky-400 font-mono text-[10px] font-bold uppercase mb-1">AUTOCLAVE CYCLES</div>
              <div className="text-base font-bold text-white font-mono">Tuttnauer Class B</div>
              <div className="text-slate-400 mt-1">Fractionated pre-vacuum pulse eradicates 100% of bacterial endospores.</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="text-emerald-400 font-mono text-[10px] font-bold uppercase mb-1">WATERLINE PURITY</div>
              <div className="text-base font-bold text-white font-mono">&lt; 10 CFU/mL</div>
              <div className="text-slate-400 mt-1">Multi-stage reverse osmosis water lines exceed CDC standards by 50x.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
