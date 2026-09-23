import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Boxes,
  Zap
} from 'lucide-react';

const projectTypes = [
  { id: 'webgl', name: 'Spatial 3D & WebGL', base: 18000, weeks: 6, desc: 'Three.js / WebGL immersive world, dynamic shaders, particle physics' },
  { id: 'webapp', name: 'High-Frequency React App', base: 22000, weeks: 7, desc: 'React 19, sub-millisecond edge API routing, real-time WebSockets' },
  { id: 'ecommerce', name: 'Headless Luxury E-Com', base: 26000, weeks: 8, desc: 'Shopify Headless + Stripe custom, 3D product inspection' },
  { id: 'ai-interface', name: 'Generative AI & Data UI', base: 24000, weeks: 7, desc: 'Streaming token UI, canvas node mesh, real-time analytics' },
];

const featureAddons = [
  { id: 'glsl', name: 'Bespoke GLSL Shaders & 3D Modeling', price: 5500 },
  { id: 'audio', name: 'Web Audio Synthesizer & Sound FX', price: 2800 },
  { id: 'cms', name: 'Headless Multi-Region CMS Setup', price: 4200 },
  { id: 'loc', name: 'Global Edge Geo-Routing & Multi-Lang', price: 3600 },
  { id: 'security', name: 'Enterprise SOC-2 Architecture Audit', price: 4800 },
];

const timelineMultipliers = [
  { id: 'standard', name: 'Standard Sprint', factor: 1.0, weeksOffset: 0, tag: 'Standard Cadence' },
  { id: 'express', name: 'Accelerated Sprint', factor: 1.18, weeksOffset: -2, tag: 'High Velocity (Priority)' },
  { id: 'comprehensive', name: 'Multi-Phase Retainer', factor: 1.35, weeksOffset: 4, tag: 'Ongoing Iteration' },
];

export default function CostEstimator({ onBookWithConfig }) {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedAddons, setSelectedAddons] = useState(['glsl', 'cms']);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineMultipliers[0]);

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = featureAddons.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const rawTotal = (selectedType.base + addonsTotal) * selectedTimeline.factor;
  const minEst = Math.round(rawTotal * 0.95 / 100) * 100;
  const maxEst = Math.round(rawTotal * 1.1 / 100) * 100;

  const totalWeeks = Math.max(3, selectedType.weeks + selectedTimeline.weeksOffset);

  const handleBook = () => {
    const configData = {
      projectType: selectedType.name,
      addons: selectedAddons.map(id => featureAddons.find(a => a.id === id)?.name),
      timeline: selectedTimeline.name,
      estimatedRange: `$${minEst.toLocaleString()} - $${maxEst.toLocaleString()}`,
      estimatedWeeks: totalWeeks
    };
    onBookWithConfig(configData);
  };

  return (
    <section id="estimator" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white mb-4">
            Interactive Project <span className="gradient-text-accent">Scope Estimator</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Configure your technical requirements to generate an instantaneous engineering estimate and sprint schedule.
          </p>
        </div>

        {/* Estimator Engine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Span 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 mb-4">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center font-bold">1</span>
                <span>SELECT PLATFORM ARCHITECTURE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-950/40" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-heading font-bold text-sm ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                          {type.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {type.desc}
                      </p>
                      <p className="text-xs font-mono-code text-slate-300 mt-3">
                        From ${type.base.toLocaleString()}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono-code text-purple-400 mb-4">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center font-bold">2</span>
                <span>CUSTOM CAPABILITY EXTENSIONS</span>
              </div>
              <div className="space-y-3">
                {featureAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isChecked 
                          ? "bg-purple-950/30 border-purple-500/60 text-white" 
                          : "bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-colors ${
                          isChecked ? "bg-purple-600 border-purple-500 text-white" : "border-white/20 bg-white/5"
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono-code text-purple-300">+${addon.price.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline & Sprint Speed */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 mb-4">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold">3</span>
                <span>TIMELINE VELOCITY</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineMultipliers.map((tm) => {
                  const isSelected = selectedTimeline.id === tm.id;
                  return (
                    <button
                      key={tm.id}
                      onClick={() => setSelectedTimeline(tm)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-emerald-950/40 border-emerald-500 text-white" 
                          : "bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/20"
                      }`}
                    >
                      <p className={`text-xs font-bold font-heading mb-1 ${isSelected ? 'text-emerald-300' : 'text-white'}`}>
                        {tm.name}
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono-code">{tm.tag}</p>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Calculation Summary Card (Span 5) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent">
              <div className="bg-[#0C1019] rounded-[22px] p-6 sm:p-8 border border-white/10 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono-code uppercase text-slate-400">Live Synthesis</span>
                  <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    SOW Preview
                  </span>
                </div>

                {/* Big Price Display */}
                <div>
                  <p className="text-xs text-slate-400 font-mono-code">Estimated Investment</p>
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-1">
                    ${minEst.toLocaleString()} <span className="text-slate-500 text-2xl font-normal">—</span> ${maxEst.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono-code mt-1">
                    Fixed-bid or Milestone-based SLA guarantees included.
                  </p>
                </div>

                {/* Sprint Metrics */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Duration</p>
                      <p className="text-sm font-bold text-white font-mono-code">~{totalWeeks} Weeks</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Dedicated Pod</p>
                      <p className="text-sm font-bold text-white font-mono-code">4 Specialists</p>
                    </div>
                  </div>
                </div>

                {/* Pod Composition */}
                <div className="space-y-2 text-xs text-slate-300 font-mono-code">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Assigned Engineering Pod:</p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Lead Creative Technologist & 3D Shaders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>Senior React 19 / Next.js Architect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Motion Choreographer & UI Systems Lead</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Dedicated QA & Core Web Vitals Auditor</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={handleBook}
                  className="w-full py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:shadow-xl hover:shadow-cyan-500/20 transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Lock Configuration & Schedule Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  Zero obligation. 100% intellectual property ownership upon completion.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
