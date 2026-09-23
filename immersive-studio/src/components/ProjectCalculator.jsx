import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Zap, Sparkles, Check, TrendingUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const ProjectCalculator = ({ onProceedToBrief }) => {
  const [scope, setScope] = useState('flagship');
  const [kineticTier, setKineticTier] = useState('cinema');
  const [timeline, setTimeline] = useState('standard');

  const SCOPES = [
    {
      id: 'flagship',
      title: 'Flagship Web Experience',
      desc: 'Haute visual art direction, bespoke typography, and high-impact storytelling for global leaders.',
      basePrice: 35000,
      baseWeeks: 6,
      lift: '+180% - 240%',
    },
    {
      id: 'webgl',
      title: '3D WebGL & Configurator',
      desc: 'Interactive 3D digital twins, real-time spatial product showcases, and custom GLSL shader physics.',
      basePrice: 55000,
      baseWeeks: 8,
      lift: '+240% - 320%',
    },
    {
      id: 'saas',
      title: 'High-Growth SaaS & Telemetry',
      desc: 'Bento-grid data topologies, reactive dashboards, and cognitive-friction-reduced onboarding funnels.',
      basePrice: 45000,
      baseWeeks: 7,
      lift: '+200% - 280%',
    },
    {
      id: 'commerce',
      title: 'Haute Luxury E-Commerce',
      desc: 'Sensory product storytelling, headless checkout, and micro-kinetic haptic escapements.',
      basePrice: 50000,
      baseWeeks: 8,
      lift: '+220% - 310%',
    },
  ];

  const KINETIC_TIERS = [
    { id: 'essential', label: 'Essential Kinetic (Lenis + GSAP micro-reveals)', multiplier: 1.0 },
    { id: 'cinema', label: 'Cinema-Grade (Parallax planes + magnetic physics + line masks)', multiplier: 1.25 },
    { id: 'spatial', label: 'Full Spatial Immersion (Custom WebGL shaders + procedural audio)', multiplier: 1.5 },
  ];

  const TIMELINES = [
    { id: 'rapid', label: 'Accelerated Sprint (4-6 weeks)', fee: 1.2 },
    { id: 'standard', label: 'Standard Haute Craft (8-10 weeks)', fee: 1.0 },
    { id: 'comprehensive', label: 'Multi-Phase Global Rollout (12-16 weeks)', fee: 1.35 },
  ];

  const selectedScopeObj = SCOPES.find((s) => s.id === scope) || SCOPES[0];
  const selectedKineticObj = KINETIC_TIERS.find((k) => k.id === kineticTier) || KINETIC_TIERS[1];
  const selectedTimelineObj = TIMELINES.find((t) => t.id === timeline) || TIMELINES[1];

  const calculatedCost = Math.round(
    selectedScopeObj.basePrice * selectedKineticObj.multiplier * selectedTimelineObj.fee
  );

  const formattedCost = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(calculatedCost);

  return (
    <div className="rounded-3xl bg-canvas-card border border-border-subtle p-6 sm:p-10 shadow-card-elevated">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent-volt/10 border border-accent-volt/20 flex items-center justify-center text-accent-volt">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-volt block">
            [ INTERACTIVE SCOPE ESTIMATOR ]
          </span>
          <h3 className="type-h3 font-display font-semibold text-text-primary">
            Project Architecture & Investment Model
          </h3>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-2xl">
        Select your foundational requirements below to generate instant architectural scope projections, anticipated conversion multipliers, and estimated production schedules.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Scope */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
              1. Digital Architecture Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SCOPES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setScope(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    scope === item.id
                      ? 'bg-accent-volt/10 border-accent-volt text-text-primary shadow-glow-volt/20'
                      : 'bg-canvas-surface border-border-subtle text-text-secondary hover:border-border-focus'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-semibold text-sm text-text-primary">
                      {item.title}
                    </span>
                    {scope === item.id && (
                      <span className="w-2 h-2 rounded-full bg-accent-volt" />
                    )}
                  </div>
                  <p className="text-xs text-text-muted leading-snug">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Kinetic Motion Tier */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
              2. Kinetic Choreography & Physics
            </label>
            <div className="space-y-2">
              {KINETIC_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setKineticTier(tier.id)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    kineticTier === tier.id
                      ? 'bg-accent-volt/10 border-accent-volt text-text-primary'
                      : 'bg-canvas-surface border-border-subtle text-text-secondary hover:border-border-focus'
                  }`}
                >
                  <span className="text-xs font-mono">{tier.label}</span>
                  {kineticTier === tier.id && <Check className="w-4 h-4 text-accent-volt" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Timeline Cadence */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
              3. Desired Production Cadence
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {TIMELINES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTimeline(t.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    timeline === t.id
                      ? 'bg-accent-volt/10 border-accent-volt text-text-primary'
                      : 'bg-canvas-surface border-border-subtle text-text-secondary hover:border-border-focus'
                  }`}
                >
                  <span className="text-xs font-mono block">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Calculation Projection Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-border-focus shadow-inner-bevel relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-volt/5 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
                PROJECTED INVESTMENT
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent-volt/10 text-accent-volt border border-accent-volt/20">
                PROPOSAL ESTIMATE
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl sm:text-4xl font-display font-bold text-accent-volt tracking-tight mb-1">
                {formattedCost}
              </div>
              <p className="text-xs font-mono text-text-muted">
                Fixed-cost milestone model with zero hidden engineering variance.
              </p>
            </div>

            {/* Projection Metrics */}
            <div className="space-y-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-secondary flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-accent-volt" />
                  Anticipated Conversion Lift:
                </span>
                <span className="text-text-primary font-semibold">{selectedScopeObj.lift}</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-secondary flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-accent-volt" />
                  Target Frame Budget:
                </span>
                <span className="text-text-primary font-semibold">60/120 fps GPU Composited</span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-secondary flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-volt" />
                  Core Web Vitals SLA:
                </span>
                <span className="text-text-primary font-semibold">LCP &lt; 0.9s · CLS 0.00</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border-subtle">
            <MagneticButton
              variant="primary"
              onClick={() => onProceedToBrief({ scope: selectedScopeObj.title, investment: formattedCost, cadence: selectedTimelineObj.label })}
              className="w-full py-4 text-xs"
            >
              <span>Lock This Scope into Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};
