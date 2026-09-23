import React, { useState } from 'react';
import { capabilitiesData } from '../data/projectsData';
import { BentoCard } from './BentoCard';
import { Zap } from 'lucide-react';
import { sound } from '../utils/soundEngine';

export const CapabilityMatrix = () => {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span>02 // ENGINEERING REPERTOIRE</span>
          </div>
          <h2 className="type-h2 font-display font-extrabold uppercase text-text-primary tracking-tight">
            Creative Capabilities
          </h2>
        </div>
        <p className="type-body text-text-secondary max-w-md font-sans font-light">
          We bridge the chasm between avant-garde visual aesthetics and low-level GPU systems engineering. Every capability is battle-tested at enterprise scale.
        </p>
      </div>

      {/* Interactive Bento Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {capabilitiesData.map((cap, index) => {
          const isPrimary = index === activeCapability;
          return (
            <BentoCard
              key={cap.code}
              colSpan="col-span-1"
              glow={isPrimary}
              onClick={() => {
                sound.playTactile(480 + index * 80, 0.04);
                setActiveCapability(index);
              }}
              className="cursor-pointer transition-all duration-300"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-accent-primary uppercase tracking-wider">
                      {cap.code}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-canvas-surface border border-border-subtle text-[11px] font-mono text-text-muted">
                      {cap.metric}
                    </span>
                  </div>

                  <h3 className="type-h3 font-display font-bold text-text-primary tracking-tight mb-3">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed font-sans font-light">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border-subtle">
                  <div className="text-[11px] font-mono uppercase text-text-muted mb-3 tracking-wider">
                    Core Technical Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cap.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>
          );
        })}
      </div>

      {/* Live Benchmark Callout Strip */}
      <div className="mt-12 rounded-3xl bg-canvas-card border border-border-subtle p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-inner-bevel">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-canvas-surface border border-border-medium flex items-center justify-center text-accent-primary shrink-0">
            <Zap className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-base font-display font-bold text-text-primary uppercase tracking-tight">
              Strict 60/120 FPS Framerate Budget
            </h4>
            <p className="text-xs md:text-sm text-text-secondary mt-1">
              Zero main-thread blocking operations. Lenis scroll ticks synchronized with requestAnimationFrame and off-screen canvas workers.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 font-mono text-xs shrink-0">
          <div className="text-center">
            <div className="text-text-muted text-[10px] uppercase">LCP Standard</div>
            <div className="text-accent-primary text-xl font-bold font-display">&lt; 0.8s</div>
          </div>
          <div className="h-8 w-px bg-border-subtle" />
          <div className="text-center">
            <div className="text-text-muted text-[10px] uppercase">INP Threshold</div>
            <div className="text-accent-cyan text-xl font-bold font-display">&lt; 20ms</div>
          </div>
          <div className="h-8 w-px bg-border-subtle" />
          <div className="text-center">
            <div className="text-text-muted text-[10px] uppercase">CLS Target</div>
            <div className="text-accent-violet text-xl font-bold font-display">0.000</div>
          </div>
        </div>
      </div>
    </section>
  );
};
