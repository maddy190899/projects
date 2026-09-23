import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from './MagneticButton';
import { sound } from '../utils/soundEngine';

export const InquiryModal = ({ isOpen, onClose, initialScope }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Spatial Web & WebGL Flagship',
    timeline: 'Standard (8–10 Weeks)',
    budget: '$50k - $100k',
    brief: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (initialScope) {
      setFormData(prev => ({
        ...prev,
        brief: `Configured Deliverables:\n• ${initialScope.deliverables.join('\n• ')}\n\nVelocity Horizon: ${initialScope.timeline}\nEstimated Range: ${initialScope.budgetRange}`,
        timeline: initialScope.timeline || prev.timeline,
        budget: initialScope.budgetRange || prev.budget
      }));
    }
  }, [initialScope]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSuccess();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D2FF00', '#00F0FF', '#ffffff', '#9D4EDD']
      });
    } catch {}

    const ref = `IMM-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setReferenceCode(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
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

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl bg-canvas-card border border-border-medium rounded-3xl shadow-2xl p-6 md:p-10 max-h-[90vh] overflow-y-auto"
          data-lenis-prevent
        >
          {/* Close button */}
          <button
            onClick={() => {
              sound.playTactile(450, 0.03);
              onClose();
            }}
            className="absolute top-6 right-6 p-2 rounded-full bg-canvas-surface border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-focus transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <span className="text-xs font-mono text-accent-primary uppercase tracking-widest px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20">
                  ENGAGEMENT APPLICATION // Q3-Q4
                </span>
                <h2 className="type-h3 font-display font-extrabold uppercase text-text-primary mt-3 tracking-tight">
                  Initiate Project Brief
                </h2>
                <p className="text-xs md:text-sm text-text-secondary font-sans mt-1">
                  Tell us about your product, visual goals, or technical architecture. Every submission is handled under mutual non-disclosure.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-muted mb-1.5 uppercase tracking-wider text-[10px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-text-muted mb-1.5 uppercase tracking-wider text-[10px]">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vance@horizonlabs.ai"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-muted mb-1.5 uppercase tracking-wider text-[10px]">
                      Organization / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Horizon Labs"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-text-muted mb-1.5 uppercase tracking-wider text-[10px]">
                      Primary Domain Scope
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                    >
                      <option>Spatial Web & WebGL Flagship</option>
                      <option>Composable Headless E-commerce</option>
                      <option>AI Data Telemetry & Tensor Shaders</option>
                      <option>High-Performance Creative Direction</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-muted mb-1.5 uppercase tracking-wider text-[10px]">
                      Target Release Horizon
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                    >
                      <option>Hyper-Sprint (4–6 Weeks)</option>
                      <option>Standard Velocity (8–10 Weeks)</option>
                      <option>Deep R&D Flagship (12–16 Weeks)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-muted mb-1.5 uppercase tracking-wider text-[10px]">
                      Anticipated Capital Commitment
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                    >
                      <option>$35,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $250,000</option>
                      <option>$250,000+ (Enterprise Retainer)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-text-muted mb-1.5 uppercase tracking-wider text-[10px]">
                    Technical Brief & Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your vision, target audience, performance requirements, or desired shader aesthetics..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-canvas-surface border border-border-subtle text-text-primary focus:border-accent-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-text-muted text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-accent-primary" />
                    <span>Automatic Mutual NDA Active</span>
                  </div>

                  <MagneticButton
                    variant="primary"
                    size="md"
                    type="submit"
                  >
                    <span>Transmit Brief</span>
                    <Send className="w-3.5 h-3.5 ml-2" />
                  </MagneticButton>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 text-accent-primary mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-accent-primary uppercase tracking-widest px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20">
                  DISPATCH CONFIRMED
                </span>
                <h3 className="type-h3 font-display font-extrabold uppercase text-text-primary mt-3">
                  Brief Received by Studio Partners
                </h3>
                <p className="text-xs md:text-sm text-text-secondary max-w-md mx-auto mt-2 font-sans">
                  Your inquiry has been routed to our founding partners. We review engineering bandwidth and will respond with our preliminary architecture review within 3 business hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-canvas-surface border border-border-subtle max-w-sm mx-auto font-mono text-xs space-y-2">
                <div className="flex justify-between text-text-muted">
                  <span>DISPATCH REF:</span>
                  <span className="text-accent-primary font-bold">{referenceCode}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>SLA RESPONSE:</span>
                  <span className="text-text-primary">&lt; 3 Hours</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>NDA STATUS:</span>
                  <span className="text-accent-cyan">Executed</span>
                </div>
              </div>

              <div className="pt-4">
                <MagneticButton
                  variant="outline"
                  size="md"
                  onClick={handleReset}
                >
                  <span>Return to Studio</span>
                </MagneticButton>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
