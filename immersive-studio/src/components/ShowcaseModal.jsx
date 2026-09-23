import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Activity, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { sound } from '../utils/soundEngine';

export const ShowcaseModal = ({ project, isOpen, onClose, onCommissionBuild }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playTactile(450, 0.03);
            onClose();
          }}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-canvas-card border border-border-medium rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-border-subtle bg-canvas-surface/80">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-accent-primary uppercase tracking-widest px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {project.client} // {project.year}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Tabs */}
              <div className="hidden sm:flex items-center gap-1 bg-canvas-base rounded-full p-1 border border-border-subtle text-xs font-mono">
                <button
                  onClick={() => { sound.playHover(); setActiveTab('overview'); }}
                  className={`px-3 py-1 rounded-full transition-colors ${activeTab === 'overview' ? 'bg-accent-primary text-black font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => { sound.playHover(); setActiveTab('architecture'); }}
                  className={`px-3 py-1 rounded-full transition-colors ${activeTab === 'architecture' ? 'bg-accent-primary text-black font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => { sound.playHover(); setActiveTab('simulation'); }}
                  className={`px-3 py-1 rounded-full transition-colors ${activeTab === 'simulation' ? 'bg-accent-primary text-black font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  Telemetry Edge
                </button>
              </div>

              <button
                onClick={() => {
                  sound.playTactile(450, 0.03);
                  onClose();
                }}
                className="p-2 rounded-full bg-canvas-base border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-focus transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content - Scrollable with Lenis preventive touch */}
          <div className="overflow-y-auto p-6 md:p-10 space-y-8" data-lenis-prevent>
            {/* Title & Tagline */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="type-h2 font-display font-extrabold text-text-primary uppercase tracking-tight">
                  {project.title}
                </h2>
                {project.awards.map((award, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-canvas-surface border border-border-subtle text-[11px] font-mono text-accent-cyan"
                  >
                    <Award className="w-3.5 h-3.5" /> {award}
                  </span>
                ))}
              </div>
              <p className="text-base text-accent-primary font-mono">{project.tagline}</p>
            </div>

            {/* Tab Views */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Hero imagery preview */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-border-subtle group">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-base/90 via-canvas-base/20 to-transparent pointer-events-none" />
                  
                  {/* Overlay Metric Badges */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-canvas-card/85 backdrop-blur-md border border-border-subtle rounded-xl p-3"
                      >
                        <div className="text-[10px] font-mono text-text-muted uppercase">{m.label}</div>
                        <div className="text-lg font-bold font-display text-accent-primary">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Narrative & Testimonial */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted">The Strategic Challenge</h3>
                    <p className="type-body text-text-secondary leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="pt-4">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">Key Deliverables</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-text-primary">
                            <CheckCircle className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Client Testimonial Card */}
                  <div className="md:col-span-5 bg-canvas-surface rounded-2xl p-6 border border-border-subtle flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider mb-3">
                        Verified Client Endorsement
                      </div>
                      <blockquote className="text-sm italic text-text-primary leading-relaxed font-serif">
                        "{project.testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-text-primary">{project.testimonial.author}</div>
                        <div className="text-[11px] text-text-muted font-mono">{project.testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-canvas-surface border border-border-subtle">
                  <h3 className="text-sm font-mono text-accent-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> Technical Architecture & Graphics Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-canvas-card border border-border-medium text-xs font-mono text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-canvas-card border border-border-subtle">
                      <div className="text-text-muted mb-1">GPU Compositing</div>
                      <div className="text-accent-primary font-bold">100% Off-Main-Thread</div>
                      <div className="text-[11px] text-text-secondary mt-1">GLSL fragment shaders with instanced matrices</div>
                    </div>
                    <div className="p-4 rounded-xl bg-canvas-card border border-border-subtle">
                      <div className="text-text-muted mb-1">State & Hydration</div>
                      <div className="text-accent-cyan font-bold">Selective Island Hydration</div>
                      <div className="text-[11px] text-text-secondary mt-1">Zero unneeded client JavaScript execution</div>
                    </div>
                    <div className="p-4 rounded-xl bg-canvas-card border border-border-subtle">
                      <div className="text-text-muted mb-1">Asset Streaming</div>
                      <div className="text-accent-violet font-bold">Draco Compressed GLB</div>
                      <div className="text-[11px] text-text-secondary mt-1">Under 8MB initial geometry payload</div>
                    </div>
                  </div>
                </div>

                {/* Secondary Image showcase */}
                <div className="rounded-2xl overflow-hidden aspect-[21/9] border border-border-subtle">
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} Architecture`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {activeTab === 'simulation' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-canvas-surface border border-border-subtle">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-mono text-accent-cyan uppercase tracking-wider flex items-center gap-2">
                      <Activity className="w-4 h-4 text-accent-cyan" /> Live Production Telemetry HUD
                    </h3>
                    <span className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-[10px] font-mono text-accent-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
                      EDGE CLUSTER ONLINE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-canvas-card border border-border-subtle">
                      <div className="text-text-muted">Edge Status</div>
                      <div className="text-text-primary font-bold mt-1">{project.liveSimulation.status}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-canvas-card border border-border-subtle">
                      <div className="text-text-muted">Anycast Routing</div>
                      <div className="text-text-primary font-bold mt-1">{project.liveSimulation.region}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-canvas-card border border-border-subtle">
                      <div className="text-text-muted">CDN Throughput</div>
                      <div className="text-accent-primary font-bold mt-1">{project.liveSimulation.bandwidth}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-canvas-card border border-border-subtle">
                      <div className="text-text-muted">SLA Availability</div>
                      <div className="text-accent-cyan font-bold mt-1">{project.liveSimulation.uptime}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-canvas-card border border-border-subtle font-mono text-xs space-y-2 text-text-secondary">
                  <div className="text-text-muted uppercase text-[10px]">// Live Audit Telemetry Log</div>
                  <div className="text-accent-primary">✔ LCP: 0.58s [Passed Good]</div>
                  <div className="text-accent-primary">✔ INP: 14ms [Passed 99th Percentile]</div>
                  <div className="text-accent-primary">✔ CLS: 0.000 [Zero Cumulative Shift]</div>
                  <div className="text-text-primary">✔ WebGL Context Loss Recovery: Enabled & Verified</div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 md:px-8 py-5 border-t border-border-subtle bg-canvas-surface flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-text-secondary">
              Want an architecture tailored for your product?
            </div>
            <div className="flex items-center gap-3">
              <MagneticButton
                variant="primary"
                size="sm"
                onClick={() => {
                  sound.playSuccess();
                  onCommissionBuild(project.title);
                }}
              >
                <span>Commission Similar Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
