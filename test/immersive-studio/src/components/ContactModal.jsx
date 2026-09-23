import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, CheckCircle2, Clock, Calendar, Mail, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, initialConfig }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$25k - $40k',
    scope: 'Spatial 3D & WebGL',
    message: '',
    timeline: 'Within 4-8 weeks'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialConfig) {
      setFormData(prev => ({
        ...prev,
        scope: initialConfig.projectType || prev.scope,
        budget: initialConfig.estimatedRange || prev.budget,
        timeline: initialConfig.timeline || prev.timeline,
        message: `Estimated sprint configuration: ${initialConfig.addons?.join(', ') || 'Custom architecture'}`
      }));
    }
  }, [initialConfig]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration Blast
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06B6D4', '#818CF8', '#C084FC', '#38BDF8']
        });
      } catch {
        // Fallback if canvas-confetti is restricted
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0C1019] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>DISCOVERY PROTOCOL</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
              Initiate Your <span className="gradient-text-accent">Studio Sprint</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Connect directly with our lead creative technologists. No sales middlemen. You will receive an architectural breakdown within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Thorne"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Thorne Capital"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Under $20,000">Under $20,000</option>
                    <option value="$20,000 - $35,000">$20,000 - $35,000</option>
                    <option value="$35,000 - $60,000">$35,000 - $60,000</option>
                    <option value="$60,000+">$60,000+ (Comprehensive Flagship)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                  Core Architectural Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Spatial 3D & WebGL', 'High-Speed React App', 'Luxury E-Commerce', 'AI / Data Visualizer'].map((scope) => (
                    <button
                      type="button"
                      key={scope}
                      onClick={() => setFormData({ ...formData, scope })}
                      className={`p-2.5 rounded-xl text-center text-xs font-mono-code transition-all cursor-pointer border ${
                        formData.scope === scope
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                          : 'bg-white/[0.02] text-slate-400 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                  Brief Project Overview & Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the product vision, performance requirements, and launch goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-101 flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <span>Synthesizing Sprint Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Project Brief to Studio</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono-code text-slate-500 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Mutual NDA Supported
                </span>
                <span>•</span>
                <span>Direct Lead Architect Response</span>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Sprint Brief Dispatched!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mt-2">
                Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Our lead creative technologist Marcus Vance has received your parameters for <span className="text-purple-400 font-semibold">{formData.scope}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs font-mono-code text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Target Scope:</span>
                <span className="text-cyan-300">{formData.scope}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Investment Range:</span>
                <span className="text-emerald-300">{formData.budget}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Discovery Window:</span>
                <span className="text-purple-300">Under 24 Hours Response</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
