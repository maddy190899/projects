import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  Layers,
  Clock,
  Monitor,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Plus,
} from 'lucide-react';

interface EstimatorProps {
  onPreFillInquiry: (data: {
    projectType: string;
    timeline: string;
    platforms: string[];
    investmentEstimate: number;
    tier: string;
  }) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onPreFillInquiry }) => {
  // Project Types with baseline pricing
  const projectTypes = [
    {
      id: 'design-system',
      title: 'Design System & Motion Kit',
      basePrice: 35000,
      description: 'Design tokens, Figma UI kit, React component library, Framer motion presets.',
    },
    {
      id: '3d-web-experience',
      title: '3D Web Experience / Configurator',
      basePrice: 55000,
      description: 'Three.js / WebGL shaders, Draco compressed 3D assets, dynamic lighting & sound.',
    },
    {
      id: 'fullstack-app',
      title: 'Full-Stack Flagship Application',
      basePrice: 75000,
      description: 'React Server Components, edge database, real-time sync, auth & billing.',
    },
    {
      id: 'spatial-os',
      title: 'Spatial WebGPU Operating Interface',
      basePrice: 95000,
      description: 'Vision Pro Spatial WebXR, WebGPU compute shaders, 60 FPS spatial compositor.',
    },
  ];

  // Timelines
  const timelines = [
    { id: 'rapid', label: 'Rapid Sprint (4 Weeks)', multiplier: 1.25, note: 'Dedicated dual-squad priority' },
    { id: 'standard', label: 'Standard Delivery (8 Weeks)', multiplier: 1.0, note: 'Comprehensive architecture' },
    { id: 'thorough', label: 'Extended Enterprise (12+ Weeks)', multiplier: 1.15, note: 'Multi-platform integration' },
    { id: 'retainer', label: 'Quarterly Dedicated Retainer', multiplier: 1.4, note: 'Continuous iterative release' },
  ];

  // Platforms
  const platforms = [
    { id: 'web', label: 'Modern Web (Desktop & Tablet)', cost: 0 },
    { id: 'mobile', label: 'iOS & Android PWA / Mobile Web', cost: 12000 },
    { id: 'spatial', label: 'Spatial WebXR / Apple Vision Pro', cost: 22000 },
    { id: 'multi-display', label: 'Multi-Monitor / High-DPI Wall HUD', cost: 18000 },
  ];

  // Architectural Addons
  const addOnsList = [
    { id: 'glsl', label: 'Custom GLSL Post-Processing Shaders', cost: 8500 },
    { id: 'rust-wasm', label: 'Rust / WebAssembly High-Throughput Engine', cost: 15000 },
    { id: 'audio', label: 'Adaptive Spatial WebAudio Soundtrack & SFX', cost: 6500 },
    { id: 'analytics', label: 'Sub-Millisecond Edge Telemetry & Analytics', cost: 9500 },
  ];

  // State
  const [selectedType, setSelectedType] = useState(projectTypes[1].id);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1].id);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['web', 'mobile']);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['glsl']);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((p) => p !== id)
          : prev
        : [...prev, id]
    );
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  // Calculation
  const totalEstimate = useMemo(() => {
    const pType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];
    const tLine = timelines.find((t) => t.id === selectedTimeline) || timelines[1];

    let platformSum = 0;
    selectedPlatforms.forEach((pid) => {
      const p = platforms.find((item) => item.id === pid);
      if (p) platformSum += p.cost;
    });

    let addonSum = 0;
    selectedAddons.forEach((aid) => {
      const a = addOnsList.find((item) => item.id === aid);
      if (a) addonSum += a.cost;
    });

    const subtotal = pType.basePrice + platformSum + addonSum;
    return Math.round(subtotal * tLine.multiplier);
  }, [selectedType, selectedTimeline, selectedPlatforms, selectedAddons]);

  const handlePreFill = () => {
    const typeObj = projectTypes.find((t) => t.id === selectedType);
    const timelineObj = timelines.find((t) => t.id === selectedTimeline);
    const tier =
      totalEstimate > 120000
        ? 'Enterprise Custom ($120k+)'
        : totalEstimate > 70000
        ? 'Flagship Build ($70k - $120k)'
        : 'Core Sprint ($45k - $70k)';

    onPreFillInquiry({
      projectType: typeObj?.title || 'Custom Engineering',
      timeline: timelineObj?.label || '8 Weeks',
      platforms: selectedPlatforms,
      investmentEstimate: totalEstimate,
      tier,
    });

    // Smooth scroll down to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Gradients */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Scope &amp; Investment Estimator</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
          Transparent Scope. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Predictable Investment.
          </span>
        </h2>
        <p className="text-slate-400 mt-4 text-sm sm:text-base font-light max-w-2xl mx-auto">
          Configure your requirements in real time. We work on fixed-scope flagship milestones with
          zero surprise overages and guaranteed delivery dates.
        </p>
      </div>

      {/* Estimator Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-8 space-y-8 bg-[#0b0d13]/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          {/* 1. Project Type */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Step 01 // Select Core Engagement Architecture</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                        : 'bg-slate-900/40 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-display font-bold text-sm text-white">{type.title}</span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-500">
                          From ${(type.basePrice / 1000).toFixed(0)}k
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Platform Targets */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Step 02 // Deployment Target Platforms</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {platforms.map((p) => {
                const isSelected = selectedPlatforms.includes(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => togglePlatform(p.id)}
                    className={`text-left p-3.5 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-800/80 border-cyan-500/60 text-white'
                        : 'bg-slate-900/30 border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected ? 'bg-cyan-400 border-cyan-400 text-slate-950' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium">{p.label}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {p.cost === 0 ? 'Included' : `+$${(p.cost / 1000).toFixed(0)}k`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Timeline Selection */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Step 03 // Production Timeline &amp; Velocity</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {timelines.map((time) => {
                const isSelected = selectedTimeline === time.id;
                return (
                  <button
                    key={time.id}
                    onClick={() => setSelectedTimeline(time.id)}
                    className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900/30 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-bold text-white block mb-1">{time.label}</span>
                    <span className="text-[10px] font-mono text-slate-400">{time.note}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Specialized Engineering Addons */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Step 04 // Performance &amp; Hardware Add-ons</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addOnsList.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`text-left p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-purple-950/30 border-purple-500/50 text-white'
                        : 'bg-slate-900/30 border-white/10 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected
                            ? 'bg-purple-500 border-purple-500 text-slate-950'
                            : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium">{addon.label}</span>
                    </div>
                    <span className="text-[11px] font-mono text-purple-400">
                      +${(addon.cost / 1000).toFixed(1)}k
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Investment Terminal */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#131722] to-[#0c0e14] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
              <span className="text-slate-400 uppercase">Live Scope Model</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED ESTIMATE
              </span>
            </div>

            {/* Price Readout with Animated Motion Numbers */}
            <div className="py-6 text-center">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Estimated Capital Investment
              </span>
              <motion.div
                key={totalEstimate}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight"
              >
                ${totalEstimate.toLocaleString()}
                <span className="text-cyan-400 text-lg sm:text-xl font-normal ml-1 font-mono">
                  USD
                </span>
              </motion.div>
              <span className="text-[11px] font-mono text-slate-400 block mt-2">
                Guaranteed Fixed-Fee Milestone Delivery
              </span>
            </div>

            {/* Scope Summary Details */}
            <div className="space-y-3 py-4 border-y border-white/10 font-mono text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Core Architecture:</span>
                <span className="text-right text-slate-200 font-semibold truncate max-w-[180px]">
                  {projectTypes.find((t) => t.id === selectedType)?.title}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Platforms:</span>
                <span className="text-right text-slate-200">
                  {selectedPlatforms.length} Ecosystems
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Velocity:</span>
                <span className="text-right text-cyan-400 font-semibold">
                  {timelines.find((t) => t.id === selectedTimeline)?.label}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Add-on Modules:</span>
                <span className="text-right text-purple-400">
                  {selectedAddons.length} Modules Active
                </span>
              </div>
            </div>

            {/* Action Button: Pre-fill and scroll to Contact */}
            <div className="pt-6">
              <button
                onClick={handlePreFill}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
              >
                <span>Lock In Scope &amp; Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500 mt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>NDA &amp; Intellectual Property Protection Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
