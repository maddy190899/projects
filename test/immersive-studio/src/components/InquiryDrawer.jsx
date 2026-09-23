import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InquiryDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    scope: 'Spatial WebGL & 3D Experience',
    budget: '$50,000 - $100,000',
    timeline: 'Q4 2026',
    brief: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#a1a1aa', '#10b981']
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="bg-[#0e0e11] border border-chalk max-w-2xl w-full p-8 sm:p-12 relative my-auto shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white border border-chalk hover:border-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="border-b border-chalk pb-6 mb-8">
              <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-2">
                [ DIRECT EXECUTIVE DISCOVERY ]
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
                Initiate a <span className="font-serif-editorial font-normal text-zinc-400">Commission</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-mono-tag mt-2">
                We review briefs within 24 hours. No sales representatives; you converse directly with founding creative partners.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono-tag text-xs text-zinc-400 uppercase mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Thorne"
                    className="w-full px-4 py-3 bg-zinc-950 border border-chalk text-white text-sm focus:border-white focus:outline-none transition-colors font-mono-tag"
                  />
                </div>

                <div>
                  <label className="block font-mono-tag text-xs text-zinc-400 uppercase mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@company.com"
                    className="w-full px-4 py-3 bg-zinc-950 border border-chalk text-white text-sm focus:border-white focus:outline-none transition-colors font-mono-tag"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono-tag text-xs text-zinc-400 uppercase mb-2">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Thorne Capital"
                    className="w-full px-4 py-3 bg-zinc-950 border border-chalk text-white text-sm focus:border-white focus:outline-none transition-colors font-mono-tag"
                  />
                </div>

                <div>
                  <label className="block font-mono-tag text-xs text-zinc-400 uppercase mb-2">
                    Target Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-chalk text-white text-sm focus:border-white focus:outline-none transition-colors font-mono-tag"
                  >
                    <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000+">$100,000+ (Full Spatial Flagship)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono-tag text-xs text-zinc-400 uppercase mb-2">
                  Primary Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Spatial WebGL & 3D Experience',
                    'React 19 Web Platform',
                    'Headless Digital Storefront',
                    'Interactive Sound & Micro-interactions'
                  ].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setFormData({ ...formData, scope: s })}
                      className={`p-3 text-left font-mono-tag text-xs border transition-colors cursor-pointer ${
                        formData.scope === s ? 'bg-white text-black border-white font-bold' : 'border-chalk text-zinc-400 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono-tag text-xs text-zinc-400 uppercase mb-2">
                  Project Brief & Objectives
                </label>
                <textarea
                  rows={3}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Outline the core objective, creative benchmark, and desired launch date..."
                  className="w-full px-4 py-3 bg-zinc-950 border border-chalk text-white text-sm focus:border-white focus:outline-none transition-colors font-mono-tag"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-white text-black font-mono-tag text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <span>TRANSMITTING BRIEF TO PARTNERS...</span>
                ) : (
                  <>
                    <span>SUBMIT COMMISSION BRIEF</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 font-mono-tag text-[11px] text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mutual Non-Disclosure Agreement Guaranteed</span>
              </div>

            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-6">
            <span className="w-12 h-12 rounded-full border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </span>
            <h3 className="text-3xl font-display font-bold text-white">
              Brief Received in Paris & SF.
            </h3>
            <p className="text-zinc-400 font-mono-tag text-xs max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-bold">{formData.name}</span>. Lead creative partner Marcus Vance will review your brief for <span className="text-white font-bold">{formData.scope}</span> and reach out within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-white text-black font-mono-tag text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
