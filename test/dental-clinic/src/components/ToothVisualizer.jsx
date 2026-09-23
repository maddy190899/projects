import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shield, AlertTriangle, CheckCircle, Info, Stethoscope } from 'lucide-react';

const CONDITIONS = [
  {
    id: 'healthy',
    title: 'Healthy Tooth & Sound Enamel',
    badge: 'Optimal Baseline',
    color: 'emerald',
    description: 'Thick translucent crystalline enamel matrix protecting underlying ivory dentin and vital vascular pulp tissue with zero micro-fractures.',
    action: 'Preserve with bi-annual ultrasonic prophylaxis & remineralizing fluoride glaze.',
    layers: {
      enamel: { status: 'Intact & Mineralized', color: '#E2E8F0', stroke: '#0D9488' },
      dentin: { status: 'Firm Ivory Structure', color: '#FEF08A' },
      pulp: { status: 'Active Blood Flow & Nerve Vitality', color: '#F43F5E' },
      bone: { status: 'Dense Trabecular Bone Support', color: '#CBD5E1' }
    }
  },
  {
    id: 'cavity',
    title: 'Interproximal Cavity / Enamel Decay',
    badge: 'Requires Immediate Care',
    color: 'amber',
    description: 'Acid-producing bacteria have breached the outer enamel shield and are softening the vulnerable tubular dentin layer towards the nerve.',
    action: 'Micro-invasive biomimetic composite resin filling in a single 30-min visit.',
    layers: {
      enamel: { status: 'Demineralized Cavitation Area', color: '#CBD5E1', stroke: '#F59E0B' },
      dentin: { status: 'Bacterial Acid Penetration', color: '#FDE047' },
      pulp: { status: 'Early Inflammatory Warning', color: '#FB7185' },
      bone: { status: 'Normal Bone Level', color: '#CBD5E1' }
    }
  },
  {
    id: 'infection',
    title: 'Deep Pulpitis / Root Apex Abscess',
    badge: 'Urgent Care',
    color: 'rose',
    description: 'Bacterial ingress into the nerve chamber causes acute pressure, sensitivity to temperature, and potential periapical bone absorption.',
    action: 'Painless 3D microscope root canal therapy using computerized Wand® anesthesia.',
    layers: {
      enamel: { status: 'Compromised Structure', color: '#94A3B8', stroke: '#E11D48' },
      dentin: { status: 'Deep Necrotic Tunneling', color: '#CA8A04' },
      pulp: { status: 'Infected / Irreversible Pulpitis', color: '#BE123C' },
      bone: { status: 'Periapical Radiolucency (Bone Loss)', color: '#94A3B8' }
    }
  },
  {
    id: 'restored',
    title: 'CEREC® Same-Day Zirconia Restoration',
    badge: 'Aura Premium Solution',
    color: 'teal',
    description: 'High-translucency monolithic zirconia crown precision-milled to 15-micron accuracy, hermetically sealed to safeguard natural roots forever.',
    action: 'Finished in 60 minutes. Zero temporary crowns, zero second appointments.',
    layers: {
      enamel: { status: 'Precision Zirconia Armor', color: '#FFFFFF', stroke: '#0D9488' },
      dentin: { status: 'Biomimetic Hybrid Base', color: '#FEF08A' },
      pulp: { status: 'Hermetically Sealed & Quiescent', color: '#14B8A6' },
      bone: { status: 'Regenerated Healthy Bone', color: '#E2E8F0' }
    }
  }
];

export default function ToothVisualizer({ onBookConsultation }) {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS[0]);
  const [activeLayer, setActiveLayer] = useState('enamel');

  return (
    <section id="technology" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
            Interactive Patient Education
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Explore Tooth Anatomy & Biomimetic Diagnostics
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Select a clinical scenario below to see how our micro-invasive digital procedures protect and rebuild your natural tooth structure at every anatomical level.
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {CONDITIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCondition(c)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedCondition.id === c.id
                  ? 'border-teal-600 bg-teal-50/60 shadow-md shadow-teal-700/5'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                  selectedCondition.id === c.id ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {c.badge}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">{c.title}</h4>
            </button>
          ))}
        </div>

        {/* Interactive Anatomy Viewer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/80 p-6 sm:p-10 rounded-3xl border border-slate-200">
          
          {/* Left: Procedural SVG Cross-Section Graphic */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
            
            {/* Layer Highlight Indicator */}
            <div className="w-full flex items-center justify-between text-xs text-slate-500 mb-4 pb-2 border-b border-slate-100">
              <span className="font-semibold text-slate-700">Digital Cross-Section (3D Tomography)</span>
              <span className="text-teal-700 font-medium">Click zones to inspect</span>
            </div>

            {/* Custom SVG Tooth Cross-Section */}
            <svg
              viewBox="0 0 300 400"
              className="w-64 h-80 sm:w-72 sm:h-96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="toothGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Surrounding Gingiva (Gum tissue) */}
              <path
                d="M30 180C50 170 80 190 100 195C120 200 180 200 200 195C220 190 250 170 270 180V380H30V180Z"
                fill="#FECDD3"
                opacity="0.45"
              />

              {/* Alveolar Jawbone Structure */}
              <path
                d="M40 230C70 220 110 235 150 235C190 235 230 220 260 230V380H40V230Z"
                fill={selectedCondition.layers.bone.color}
                opacity="0.6"
              />

              {/* Outer Enamel Shell / Crown */}
              <motion.path
                d="M75 100C75 40 105 20 150 20C195 20 225 40 225 100C225 140 215 175 205 185C195 195 180 195 175 185C170 175 160 175 150 175C140 175 130 175 125 185C120 195 105 195 95 185C85 175 75 140 75 100Z"
                fill={selectedCondition.layers.enamel.color}
                stroke={selectedCondition.layers.enamel.stroke || "#94A3B8"}
                strokeWidth="4"
                filter="url(#toothGlow)"
                className="cursor-pointer transition-all duration-300"
                onClick={() => setActiveLayer('enamel')}
              />

              {/* Dentin Core */}
              <motion.path
                d="M90 110C90 60 115 45 150 45C185 45 210 60 210 110C210 160 195 230 190 320C185 345 175 355 168 355C160 355 155 330 150 310C145 330 140 355 132 355C125 355 115 345 110 320C105 230 90 160 90 110Z"
                fill={selectedCondition.layers.dentin.color}
                stroke="#EAB308"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onClick={() => setActiveLayer('dentin')}
              />

              {/* Dental Pulp & Neurovascular Canal */}
              <motion.path
                d="M135 120C135 95 142 85 150 85C158 85 165 95 165 120C165 150 162 200 170 300C171 315 167 325 165 325C163 325 160 315 158 290C155 240 145 240 142 290C140 315 137 325 135 325C133 325 129 315 130 300C138 200 135 150 135 120Z"
                fill={selectedCondition.layers.pulp.color}
                className="cursor-pointer transition-all duration-300"
                onClick={() => setActiveLayer('pulp')}
              />

              {/* Decay / Cavity Specular Spot (Conditionally shown) */}
              {selectedCondition.id === 'cavity' && (
                <ellipse cx="195" cy="115" rx="16" ry="12" fill="#78350F" opacity="0.85" />
              )}

              {/* Pulpitis Inflammation Radiance (Conditionally shown) */}
              {selectedCondition.id === 'infection' && (
                <>
                  <circle cx="150" cy="110" r="22" fill="#BE123C" opacity="0.6" className="animate-ping" />
                  <circle cx="165" cy="328" r="14" fill="#991B1B" opacity="0.8" />
                  <circle cx="135" cy="328" r="14" fill="#991B1B" opacity="0.8" />
                </>
              )}

              {/* Zirconia Shimmer Highlight (Conditionally shown) */}
              {selectedCondition.id === 'restored' && (
                <path
                  d="M100 60C110 50 135 40 160 40C180 40 200 50 205 60"
                  stroke="#5EEAD4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )}
            </svg>

            {/* Quick Layer Switcher */}
            <div className="flex gap-2 mt-4 text-xs font-semibold">
              <button 
                onClick={() => setActiveLayer('enamel')} 
                className={`px-3 py-1 rounded-lg transition-colors ${activeLayer === 'enamel' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                1. Enamel
              </button>
              <button 
                onClick={() => setActiveLayer('dentin')} 
                className={`px-3 py-1 rounded-lg transition-colors ${activeLayer === 'dentin' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                2. Dentin
              </button>
              <button 
                onClick={() => setActiveLayer('pulp')} 
                className={`px-3 py-1 rounded-lg transition-colors ${activeLayer === 'pulp' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                3. Pulp & Nerve
              </button>
            </div>
          </div>

          {/* Right: Clinical Diagnostic Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                  Clinical Diagnosis
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                {selectedCondition.title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {selectedCondition.description}
              </p>
            </div>

            {/* Layer Status Breakdown */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <Shield className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Enamel Layer Status</p>
                  <p className="text-xs text-slate-500 mt-0.5">{selectedCondition.layers.enamel.status}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Dentin Structural Core</p>
                  <p className="text-xs text-slate-500 mt-0.5">{selectedCondition.layers.dentin.status}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Pulp & Nerve Chamber</p>
                  <p className="text-xs text-slate-500 mt-0.5">{selectedCondition.layers.pulp.status}</p>
                </div>
              </div>
            </div>

            {/* Treatment Recommendation Card */}
            <div className="p-5 rounded-2xl bg-teal-900 text-white">
              <p className="text-xs uppercase font-semibold tracking-wider text-teal-300">
                Recommended Clinical Action
              </p>
              <p className="text-sm font-medium mt-1 leading-snug">
                {selectedCondition.action}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={onBookConsultation}
                  className="px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  Schedule Diagnostic Scan
                </button>
                <span className="text-xs text-teal-200">Covered by Most PPO Plans</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
