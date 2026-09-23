import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Zap,
  Activity,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { SERVICES } from '../data/studioData';
import { ProjectCalculator } from '../components/ProjectCalculator';

export const ServicesPage = ({ setActivePage, onScopeSelected }) => {
  const PROCESS_STEPS = [
    {
      step: '01',
      title: 'Neuro-Perceptual & Behavioral Modeling',
      desc: 'We map user attention funnels through Gestalt grouping and cognitive load theory, defining clear visual pathways that eliminate friction.',
    },
    {
      step: '02',
      title: 'Kinetic Prototyping & Physics Setup',
      desc: 'Choreographing custom deceleration curves, Lenis scroll virtualization, and GPU layer isolation before writing production code.',
    },
    {
      step: '03',
      title: 'Haute Full-Stack Engineering',
      desc: 'Developing on React with zero placeholders, handcrafted SVG assets, and custom WebGL shaders for tactile depth.',
    },
    {
      step: '04',
      title: 'Vitals SLA & Worldwide Edge Launch',
      desc: 'Auditing sub-second LCP, zero layout shift (CLS 0.00), WCAG 2.2 AA accessibility, and deploying with global CDN caching.',
    },
  ];

  return (
    <div className="space-y-32 pt-28 sm:pt-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
          [ CAPABILITIES & ARCHITECTURAL DISCIPLINES ]
        </span>
        <h1 className="type-hero font-display font-bold text-text-primary tracking-tight mb-6">
          SERVICES & CAPABILITIES
        </h1>
        <p className="text-text-secondary type-body max-w-2xl leading-relaxed font-light">
          We combine the visual audacity of high-fashion art direction with the algorithmic precision of systems engineering.
        </p>
      </div>

      {/* Services Breakdown List */}
      <div className="space-y-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-border-subtle hover:border-border-muted transition-all duration-300 shadow-luxury-sm hover:shadow-luxury-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <span className="text-2xl font-mono text-accent-electric font-bold block mb-2">
                  {service.number}
                </span>
                <h2 className="type-h3 font-display font-bold text-text-primary mb-4">
                  {service.title}
                </h2>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-electric/10 text-accent-electric border border-accent-electric/20 text-xs font-mono font-medium">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{service.impact}</span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-text-secondary type-body leading-relaxed font-light">
                  {service.description}
                </p>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted mb-4">
                    Core Engineering Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-canvas-muted border border-border-subtle text-xs font-mono text-text-primary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Scope Calculator Section */}
      <section className="pt-6">
        <ProjectCalculator
          onProceedToBrief={(config) => {
            onScopeSelected(config);
            setActivePage('contact');
            if (window.__lenis) {
              window.__lenis.scrollTo(0, { immediate: true });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
      </section>

      {/* Production Methodology & Process */}
      <section>
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
            [ METHODOLOGY ]
          </span>
          <h2 className="type-h2 font-display font-bold text-text-primary">
            The 4-Stage Architectural Protocol
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-border-subtle shadow-luxury-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-accent-electric text-lg font-bold block mb-4">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-base text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-subtle text-[11px] font-mono text-text-muted">
                PHASE 0{i + 1} VERIFIED
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
