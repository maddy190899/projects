import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight, ShieldCheck, Clock, Zap, Cpu, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { sound } from '../utils/soundEngine';

const DELIVERABLES = [
  { id: 'webgl', label: '3D WebGL / WebGPU Spatial Flagship', sprints: 4, basePrice: 42000, desc: 'Instanced meshes, PBR shaders, 120fps GPU canvas' },
  { id: 'headless', label: 'Composable Headless Architecture (Next.js 15)', sprints: 3, basePrice: 28000, desc: 'Sub-millisecond TTFB, Shopify/Sanity integration' },
  { id: 'shaders', label: 'Bespoke GLSL Shaders & Fluid Dynamics', sprints: 2, basePrice: 19000, desc: 'Custom raymarching, liquid dispersion, chromatic aberration' },
  { id: 'audio', label: 'Web Audio API Synthesizer & Spatial Sound', sprints: 2, basePrice: 14000, desc: 'Procedural soundscapes, interactive frequency modulation' },
  { id: 'ai', label: 'Real-time AI Tensor / Vector Observatory', sprints: 3, basePrice: 32000, desc: 'WebSocket stream ingestion, 3D point-cloud topographies' },
  { id: 'brand', label: 'Editorial Direction & Custom 3D Typography', sprints: 2, basePrice: 18000, desc: 'High-fashion editorial copy, monoline vector system' },
];

const TIMELINES = [
  { id: 'accelerated', label: 'Hyper-Sprint (4–6 Weeks)', multiplier: 1.25, team: '6 Dedicated Engineers + 2 Directors' },
  { id: 'standard', label: 'Standard Velocity (8–10 Weeks)', multiplier: 1.0, team: '4 Dedicated Engineers + 1 Director' },
  { id: 'enterprise', label: 'Deep R&D Flagship (12–16 Weeks)', multiplier: 0.95, team: 'Full Studio Squad + Shaders Lab' },
];

export const ProjectCalculator = ({ onTransferScope }) => {
  const [selectedDeliverables, setSelectedDeliverables] = useState(['webgl', 'headless', 'shaders']);
  const [selectedTimeline, setSelectedTimeline] = useState('standard');

  const toggleDeliverable = (id) => {
    sound.playTactile(640, 0.03);
    if (selectedDeliverables.includes(id)) {
      if (selectedDeliverables.length > 1) {
        setSelectedDeliverables(selectedDeliverables.filter(item => item !== id));
      }
    } else {
      setSelectedDeliverables([...selectedDeliverables, id]);
    }
  };

  const calculation = useMemo(() => {
    const activeItems = DELIVERABLES.filter(d => selectedDeliverables.includes(d.id));
    const rawSprints = activeItems.reduce((acc, curr) => acc + curr.sprints, 0);
    const rawCost = activeItems.reduce((acc, curr) => acc + curr.basePrice, 0);

    const timelineObj = TIMELINES.find(t => t.id === selectedTimeline);
    const multiplier = timelineObj ? timelineObj.multiplier : 1.0;

    const totalEstimate = Math.round((rawCost * multiplier) / 1000) * 1000;
    const estMin = Math.round(totalEstimate * 0.9);
    const estMax = Math.round(totalEstimate * 1.15);

    return {
      sprints: Math.max(4, Math.round(rawSprints * 0.75)), // Concurrent sprint overlap
      estMin,
      estMax,
      deliverableCount: activeItems.length,
      team: timelineObj.team
    };
  }, [selectedDeliverables, selectedTimeline]);

  const handleExport = () => {
    sound.playSuccess();
    const summary = {
      deliverables: DELIVERABLES.filter(d => selectedDeliverables.includes(d.id)).map(d => d.label),
      timeline: TIMELINES.find(t => t.id === selectedTimeline).label,
      budgetRange: `$${calculation.estMin.toLocaleString()} - $${calculation.estMax.toLocaleString()}`,
      sprints: calculation.sprints
    };
    onTransferScope(summary);
  };

  return (
    <section id="calculator" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span>03 // TRANSPARENT SCOPING ENGINE</span>
          </div>
          <h2 className="type-h2 font-display font-extrabold uppercase text-text-primary tracking-tight">
            Configure Your Project Scope
          </h2>
        </div>
        <p className="type-body text-text-secondary max-w-md font-sans font-light">
          Real-time engineering scope estimator. Select your required architecture modules and velocity to generate transparent sprint parameters and ballpark budgets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Selectors */}
        <div className="lg:col-span-7 space-y-8">
          {/* Deliverables selector */}
          <div className="rounded-3xl bg-canvas-card border border-border-subtle p-6 md:p-8">
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Step 1 // Architecture & Deliverables</span>
              <span className="text-accent-primary">{selectedDeliverables.length} Selected</span>
            </div>

            <div className="space-y-3">
              {DELIVERABLES.map((deliv) => {
                const isChecked = selectedDeliverables.includes(deliv.id);
                return (
                  <div
                    key={deliv.id}
                    onClick={() => toggleDeliverable(deliv.id)}
                    onMouseEnter={() => sound.playHover()}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                      isChecked
                        ? 'bg-canvas-cardElevated border-accent-primary shadow-glow-salient/10'
                        : 'bg-canvas-surface/60 border-border-subtle hover:border-border-medium'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${isChecked ? 'bg-accent-primary text-black' : 'border border-border-medium'}`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold ${isChecked ? 'text-text-primary' : 'text-text-secondary'}`}>
                          {deliv.label}
                        </span>
                        <span className="text-xs font-mono text-accent-primary">
                          +{deliv.sprints} wks
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-1 font-mono">
                        {deliv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Velocity & Timeline selector */}
          <div className="rounded-3xl bg-canvas-card border border-border-subtle p-6 md:p-8">
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
              Step 2 // Production Velocity & Release Horizon
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TIMELINES.map((t) => {
                const active = selectedTimeline === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => {
                      sound.playTactile(580, 0.03);
                      setSelectedTimeline(t.id);
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      active
                        ? 'bg-canvas-cardElevated border-accent-cyan shadow-glow-cyan/10'
                        : 'bg-canvas-surface/60 border-border-subtle hover:border-border-medium'
                    }`}
                  >
                    <div className="text-xs font-bold text-text-primary mb-2">
                      {t.label}
                    </div>
                    <div className="text-[11px] font-mono text-text-muted">
                      {t.team}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Real-Time Scope Card */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="rounded-3xl bg-canvas-card border border-border-medium shadow-card-elevated p-6 md:p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-primary/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between text-xs font-mono text-text-muted uppercase pb-4 border-b border-border-subtle">
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-accent-primary" />
                Live Scope Assessment
              </span>
              <span className="text-accent-primary font-bold">REAL-TIME ESTIMATE</span>
            </div>

            {/* Estimated Investment Range */}
            <div className="py-6 border-b border-border-subtle">
              <div className="text-[11px] font-mono text-text-muted uppercase mb-1">
                Estimated Capital Commitment
              </div>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-accent-primary tracking-tight">
                ${calculation.estMin.toLocaleString()} – ${calculation.estMax.toLocaleString()}
              </div>
              <div className="text-xs font-mono text-text-secondary mt-1">
                Fixed-price milestone disbursements based on deliverables.
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="py-6 space-y-4 border-b border-border-subtle font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-text-muted flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-cyan" /> Target Production Horizon
                </span>
                <span className="text-text-primary font-bold">~{calculation.sprints} Sprints</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-accent-primary" /> Framerate Commitment
                </span>
                <span className="text-text-primary font-bold">60 / 120 FPS Locked</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-muted" /> Codebase Ownership
                </span>
                <span className="text-text-primary font-bold">100% Perpetual IP</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-accent-violet" /> Core Web Vitals Guarantee
                </span>
                <span className="text-text-primary font-bold">95+ Lighthouse</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <MagneticButton
                variant="primary"
                size="lg"
                onClick={handleExport}
                className="w-full"
              >
                <span>Lock In Scope & Book Brief</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </MagneticButton>
              <p className="text-[11px] font-mono text-center text-text-muted mt-3">
                No credit card required. Formal NDA & Architecture Blueprint included upon discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
