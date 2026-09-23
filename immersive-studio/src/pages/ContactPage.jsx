import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  RotateCcw
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

export const ContactPage = ({ prefilledScope }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    scope: prefilledScope?.scope || 'Flagship Web Experience',
    motionLevel: 'Cinema-Grade Kinetics',
    budget: prefilledScope?.investment || '$50,000 - $80,000',
    timeline: prefilledScope?.cadence || 'Standard Haute Craft (8-10 weeks)',
    fullName: '',
    email: '',
    brief: '',
  });

  const SCOPE_OPTIONS = [
    'Flagship Web Experience',
    '3D WebGL Configurator',
    'High-Growth SaaS Telemetry',
    'Haute Luxury E-Commerce',
  ];

  const BUDGET_TIERS = [
    '$35,000 - $50,000',
    '$50,000 - $80,000',
    '$80,000 - $120,000',
    '$120,000+',
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else {
      triggerPeakEndCelebration();
      setIsSubmitted(true);
    }
  };

  const triggerPeakEndCelebration = () => {
    try {
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0055FF', '#111114', '#FAF9F6', '#D97706'],
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  return (
    <div className="space-y-24 pt-28 sm:pt-36 px-6 md:px-12 max-w-7xl mx-auto pb-20">
      {/* Header */}
      <div className="max-w-4xl">
        <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-3">
          [ INITIATE COLLABORATION ]
        </span>
        <h1 className="type-hero font-display font-bold text-text-primary tracking-tight mb-6">
          START A PROJECT
        </h1>
        <p className="text-text-secondary type-body max-w-2xl leading-relaxed font-light">
          Submit your project parameters through our structured briefing wizard. All submissions receive executive partner review within 4 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Zeigarnik Briefing Wizard */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white border border-border-subtle p-6 sm:p-12 shadow-luxury-md relative overflow-hidden">
            {/* Zeigarnik Step Progress Header (01/04) */}
            {!isSubmitted && (
              <div className="pb-8 mb-8 border-b border-border-subtle">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    ZEIGARNIK BRIEFING PROGRESS:
                  </span>
                  <span className="font-mono text-sm font-bold text-accent-electric">
                    0{currentStep} / 04
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-canvas-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent-electric"
                    initial={{ width: '25%' }}
                    animate={{ width: `${(currentStep / 4) * 100}%` }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            )}

            {/* Wizard Form View */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleNext}
                  className="space-y-8"
                >
                  {/* Step 1: Enterprise Profile */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono text-accent-electric uppercase tracking-wider block mb-1">
                          STAGE 01
                        </span>
                        <h2 className="type-h3 font-display font-bold text-text-primary">
                          Brand & Organization Profile
                        </h2>
                        <p className="text-xs text-text-secondary mt-1 font-light">
                          Identify the venture and market category you aim to lead.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                            Company or Brand Entity *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            placeholder="e.g. Aether Spatial Systems"
                            className="w-full bg-canvas-muted border border-border-muted rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-ink font-mono shadow-luxury-sm"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                            Current Web Domain or Reference
                          </label>
                          <input
                            type="url"
                            value={formData.website}
                            onChange={(e) =>
                              setFormData({ ...formData, website: e.target.value })
                            }
                            placeholder="https://yourcompany.com"
                            className="w-full bg-canvas-muted border border-border-muted rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-ink font-mono shadow-luxury-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Architecture Scope */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono text-accent-electric uppercase tracking-wider block mb-1">
                          STAGE 02
                        </span>
                        <h2 className="type-h3 font-display font-bold text-text-primary">
                          Architectural Scope & Kinetics
                        </h2>
                        <p className="text-xs text-text-secondary mt-1 font-light">
                          Choose the digital medium and level of interactive immersion required.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                          Primary Engineering Scope
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SCOPE_OPTIONS.map((opt) => (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => setFormData({ ...formData, scope: opt })}
                              className={`p-4 rounded-xl border text-left text-xs font-mono transition-all ${
                                formData.scope === opt
                                  ? 'bg-accent-ink text-white border-black shadow-luxury-sm'
                                  : 'bg-canvas-muted border-border-subtle text-text-secondary hover:border-border-muted hover:text-text-primary'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{opt}</span>
                                {formData.scope === opt && (
                                  <span className="w-2 h-2 rounded-full bg-accent-electric" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Investment & Cadence */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono text-accent-electric uppercase tracking-wider block mb-1">
                          STAGE 03
                        </span>
                        <h2 className="type-h3 font-display font-bold text-text-primary">
                          Investment Envelope & Launch Cadence
                        </h2>
                        <p className="text-xs text-text-secondary mt-1 font-light">
                          Transparent allocation ensures tailored staffing of senior technologists.
                        </p>
                      </div>

                      <div>
                        <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">
                          Anticipated Capital Allocation (USD)
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {BUDGET_TIERS.map((tier) => (
                            <button
                              type="button"
                              key={tier}
                              onClick={() => setFormData({ ...formData, budget: tier })}
                              className={`p-4 rounded-xl border text-left text-xs font-mono transition-all ${
                                formData.budget === tier
                                  ? 'bg-accent-ink text-white border-black shadow-luxury-sm'
                                  : 'bg-canvas-muted border-border-subtle text-text-secondary hover:border-border-muted hover:text-text-primary'
                              }`}
                            >
                              <span className="font-semibold block">{tier}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Executive Stakeholder Contacts */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-mono text-accent-electric uppercase tracking-wider block mb-1">
                          STAGE 04
                        </span>
                        <h2 className="type-h3 font-display font-bold text-text-primary">
                          Stakeholder Contacts & Objective
                        </h2>
                        <p className="text-xs text-text-secondary mt-1 font-light">
                          Our partners will directly reply with an architectural proposal.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                              Your Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={(e) =>
                                setFormData({ ...formData, fullName: e.target.value })
                              }
                              placeholder="Elena Rostova"
                              className="w-full bg-canvas-muted border border-border-muted rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-ink font-mono shadow-luxury-sm"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                              Corporate Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="elena@enterprise.com"
                              className="w-full bg-canvas-muted border border-border-muted rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-ink font-mono shadow-luxury-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                            Brief Narrative or Specific Requirements
                          </label>
                          <textarea
                            rows={4}
                            value={formData.brief}
                            onChange={(e) =>
                              setFormData({ ...formData, brief: e.target.value })
                            }
                            placeholder="Describe your core business objectives, desired visual direction, or upcoming milestones..."
                            className="w-full bg-canvas-muted border border-border-muted rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-ink font-mono shadow-luxury-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                        className="px-5 py-3 rounded-full text-xs font-mono uppercase text-text-secondary hover:text-text-primary transition-colors"
                      >
                        ← Back
                      </button>
                    ) : (
                      <div />
                    )}

                    <MagneticButton variant="primary" type="submit" className="py-4 px-8 text-xs">
                      <span>{currentStep === 4 ? 'Submit Studio Brief' : 'Next Stage'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                /* Peak-End Confirmed Moment */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-electric/10 text-accent-electric flex items-center justify-center mx-auto shadow-luxury-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-eyebrow text-accent-electric block mb-2">
                      [ BRIEF RECEIVED · TICKET #IMM-2026-849 ]
                    </span>
                    <h2 className="type-h2 font-display font-bold text-text-primary mb-3">
                      Thank You, {formData.fullName || 'Partner'}.
                    </h2>
                    <p className="text-sm text-text-secondary max-w-lg mx-auto leading-relaxed font-light">
                      Your project brief for <strong className="text-text-primary font-medium">{formData.company || 'your venture'}</strong> has been assigned to our Executive Creative Director. Expect a confidential architectural review within 4 business hours.
                    </p>
                  </div>

                  {/* Parameter Review Card */}
                  <div className="max-w-md mx-auto p-5 rounded-2xl bg-canvas-muted border border-border-subtle text-left font-mono text-xs space-y-2 shadow-luxury-sm">
                    <div className="flex justify-between border-b border-border-subtle pb-2">
                      <span className="text-text-muted">Scope:</span>
                      <span className="text-text-primary font-semibold">{formData.scope}</span>
                    </div>
                    <div className="flex justify-between border-b border-border-subtle pb-2">
                      <span className="text-text-muted">Budget Tier:</span>
                      <span className="text-text-primary font-semibold">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Contact:</span>
                      <span className="text-accent-ink font-semibold">{formData.email}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit another brief</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Direct Office Coordinates & SLA */}
        <div className="lg:col-span-4 space-y-6">
          {/* SLA Card */}
          <div className="p-6 rounded-3xl bg-white border border-border-subtle shadow-luxury-sm space-y-3">
            <div className="flex items-center gap-2 text-accent-electric">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                Direct Partner SLA
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              We respond to all verified enterprise inquiries in &lt; 4 hours with an initial architectural assessment and timeline matrix.
            </p>
          </div>

          {/* Direct Email */}
          <div className="p-6 rounded-3xl bg-white border border-border-subtle shadow-luxury-sm space-y-3">
            <span className="text-xs font-mono uppercase tracking-eyebrow text-text-muted block">
              Direct Contact
            </span>
            <div className="font-mono text-sm text-text-primary">
              <a
                href="mailto:partners@immersive.studio"
                className="hover:text-accent-electric transition-colors block font-semibold"
              >
                partners@immersive.studio
              </a>
              <span className="text-xs text-text-muted block mt-1">+1 (212) 840-2910</span>
            </div>
          </div>

          {/* Global Studio Hubs */}
          <div className="p-6 rounded-3xl bg-white border border-border-subtle shadow-luxury-sm space-y-4">
            <span className="text-xs font-mono uppercase tracking-eyebrow text-text-muted block">
              Studio Locations
            </span>
            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-text-primary font-semibold block">NEW YORK</span>
                <span className="text-text-muted">420 Hudson St, TriBeCa, NY 10014</span>
              </div>
              <div>
                <span className="text-text-primary font-semibold block">LONDON</span>
                <span className="text-text-muted">18 Shoreditch High St, London E1 6PG</span>
              </div>
              <div>
                <span className="text-text-primary font-semibold block">TOKYO</span>
                <span className="text-text-muted">5-7-2 Minami-Aoyama, Minato-ku, Tokyo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
