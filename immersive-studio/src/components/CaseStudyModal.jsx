import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink, Activity, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const CaseStudyModal = ({ caseStudy, onClose, onStartProject }) => {
  useEffect(() => {
    if (!caseStudy) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Save previous overflow
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-text-primary/40 backdrop-blur-md"
      />

      {/* Modal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-canvas-surface border border-border-muted rounded-3xl shadow-luxury-lg overflow-y-auto z-10 flex flex-col"
      >
        {/* Top Navigation Bar */}
        <div className="sticky top-0 bg-canvas-surface/90 backdrop-blur-md px-6 py-4 border-b border-border-subtle flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent-ink text-white font-medium">
              {caseStudy.category}
            </span>
            <span className="text-xs font-mono text-text-muted">CLIENT: {caseStudy.client}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-canvas-muted hover:bg-border-subtle text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Header Info */}
          <div>
            <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-2">
              [ ARCHITECTURAL SPECIFICATION · {caseStudy.year} ]
            </span>
            <h2 className="type-h2 font-display font-bold text-text-primary tracking-tight mb-4">
              {caseStudy.title}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl font-light">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-border-subtle group bg-canvas-muted">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {caseStudy.awards?.map((award, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-xs font-mono text-text-primary font-medium flex items-center gap-1.5 shadow-luxury-sm"
                  >
                    <Award className="w-3.5 h-3.5 text-accent-electric" />
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted mb-4">
              Empirical Business Outcomes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.results.map((res, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-canvas-muted border border-border-subtle shadow-luxury-sm"
                >
                  <div className="type-h3 font-display font-bold text-accent-ink mb-1">
                    {res.metric}
                  </div>
                  <div className="text-xs font-mono text-text-secondary">{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative & Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-border-subtle">
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-eyebrow text-text-muted">
                Executive Overview
              </h3>
              <p className="text-text-secondary leading-relaxed font-light">
                {caseStudy.summary}
              </p>
              <div className="p-6 rounded-2xl bg-canvas-muted border border-border-subtle relative mt-6">
                <span className="text-4xl text-accent-electric/30 font-serif absolute top-2 left-4 select-none">“</span>
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
                  Technical Architecture
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-canvas-muted border border-border-subtle text-xs font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-canvas-muted border border-border-subtle">
                <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary mb-2 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-accent-electric" />
                  Performance Benchmark
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
              READY TO ACCELERATE YOUR CATEGORY REPUTATION?
            </span>
            <MagneticButton
              variant="primary"
              onClick={() => {
                onClose();
                onStartProject();
              }}
            >
              <span>Initiate Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
