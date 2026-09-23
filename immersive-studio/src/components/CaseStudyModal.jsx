import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink, CheckCircle, Cpu, Zap, Activity } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const CaseStudyModal = ({ caseStudy, onClose, onStartProject }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-canvas-surface border border-border-focus rounded-3xl shadow-card-elevated overflow-y-auto z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="sticky top-0 bg-canvas-surface/90 backdrop-blur-md px-6 py-4 border-b border-border-subtle flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent-volt/10 text-accent-volt border border-accent-volt/20">
                {caseStudy.category}
              </span>
              <span className="text-xs font-mono text-text-muted">CLIENT: {caseStudy.client}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-volt"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Header info */}
            <div>
              <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-volt block mb-2">
                [ CASE STUDY DEEP DIVE · {caseStudy.year} ]
              </span>
              <h2 className="type-h2 font-display font-bold text-text-primary tracking-tight mb-4">
                {caseStudy.title}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                {caseStudy.tagline}
              </p>
            </div>

            {/* Hero Visual */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-border-subtle group">
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {caseStudy.awards?.map((award, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-1.5"
                    >
                      <Award className="w-3.5 h-3.5 text-accent-volt" />
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted mb-4">
                Empirical Business & Performance Results
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-canvas-card border border-border-subtle shadow-inner-bevel"
                  >
                    <div className="type-h3 font-display font-bold text-accent-volt mb-1">
                      {res.metric}
                    </div>
                    <div className="text-xs font-mono text-text-secondary">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Summary */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-border-subtle">
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted">
                  The Engineering & Design Challenge
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {caseStudy.summary}
                </p>
                <div className="p-6 rounded-2xl bg-canvas-card/60 border border-border-subtle relative mt-6">
                  <span className="text-3xl text-accent-volt font-serif absolute top-3 left-4 opacity-50">“</span>
                  <p className="text-sm italic text-text-primary leading-relaxed pl-6 mb-4">
                    {caseStudy.testimonial.quote}
                  </p>
                  <div className="pl-6 text-xs font-mono">
                    <span className="text-text-primary font-semibold block">{caseStudy.testimonial.author}</span>
                    <span className="text-text-muted">{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted mb-3">
                    Technical Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-canvas-base border border-border-subtle text-xs font-mono text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-accent-volt/5 border border-accent-volt/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-accent-volt mb-2 font-semibold">
                    Core Web Vitals Benchmark
                  </h4>
                  <ul className="text-xs font-mono space-y-1.5 text-text-secondary">
                    <li className="flex justify-between">
                      <span>Largest Contentful Paint:</span>
                      <span className="text-text-primary font-semibold">0.82s</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Interaction to Next Paint:</span>
                      <span className="text-text-primary font-semibold">42ms</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cumulative Layout Shift:</span>
                      <span className="text-text-primary font-semibold">0.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-text-muted">
                READY TO ACHIEVE SIMILAR GROWTH BENCHMARKS?
              </span>
              <MagneticButton
                variant="primary"
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
              >
                <span>Engage on a Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
