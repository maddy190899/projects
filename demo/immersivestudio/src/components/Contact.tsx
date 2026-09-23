import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  UploadCloud,
  FileText,
  X,
  Check,
  AlertCircle,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AnimatedCheckmark } from './SvgAssets';

interface ContactProps {
  preFilledData?: {
    projectType: string;
    timeline: string;
    investmentEstimate: number;
    tier: string;
  } | null;
}

export const Contact: React.FC<ContactProps> = ({ preFilledData }) => {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('3D Web Experience / Configurator');
  const [budgetTier, setBudgetTier] = useState('$70k - $120k');
  const [timeline, setTimeline] = useState('8 Weeks');
  const [message, setMessage] = useState('');

  // Drag and drop files mockup
  const [files, setFiles] = useState<{ name: string; size: string }[]>([
    { name: 'Architecture_RFP_2026.pdf', size: '2.4 MB' },
  ]);
  const [isDragging, setIsDragging] = useState(false);

  // Validation & Submission States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  // Sync pre-filled data from Estimator
  useEffect(() => {
    if (preFilledData) {
      if (preFilledData.projectType) setProjectType(preFilledData.projectType);
      if (preFilledData.timeline) setTimeline(preFilledData.timeline);
      if (preFilledData.tier) setBudgetTier(preFilledData.tier);
      if (preFilledData.investmentEstimate) {
        setMessage(
          `Configured via Studio Estimator: ~\$${preFilledData.investmentEstimate.toLocaleString()} USD target investment for ${
            preFilledData.projectType
          }.`
        );
      }
    }
  }, [preFilledData]);

  // Email regex
  const isValidEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleAddSampleFile = () => {
    setFiles((prev) => [
      ...prev,
      { name: `Design_Brief_V${prev.length + 1}.pdf`, size: '3.8 MB' },
    ]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!company.trim()) newErrors.company = 'Company name is required';
    if (!message.trim()) newErrors.message = 'Please provide brief project objectives';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate real enterprise network API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = `IMM-${Math.floor(1000 + Math.random() * 9000)}-Q3`;
      setTicketRef(randomRef);

      // Launch Confetti Celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#8B5CF6', '#10B981', '#ffffff'],
      });
    }, 1200);
  };

  const budgetTiers = [
    'Core Sprint ($45k - $70k)',
    'Flagship Build ($70k - $120k)',
    'Enterprise Custom ($120k+)',
    'Quarterly Retainer',
  ];

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>Production-Ready Project Ingestion</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
          Initiate <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Your Engagement
          </span>
        </h2>
        <p className="text-slate-400 mt-4 text-sm sm:text-base font-light max-w-2xl mx-auto">
          We accept a maximum of three flagship commissions per quarter to ensure partner-level
          focus and zero compromises on architectural excellence.
        </p>
      </div>

      {/* Main Form Container */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#0c0e15]/90 border border-white/10 shadow-2xl backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Client Contacts */}
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    01 // Principal Contact &amp; Organization
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elena Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/70 border ${
                          errors.name ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-white text-sm outline-none transition-colors placeholder:text-slate-600 font-sans`}
                      />
                      {errors.name && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@enterprise.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/70 border ${
                          errors.email ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-white text-sm outline-none transition-colors placeholder:text-slate-600 font-sans`}
                      />
                      {errors.email && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Company / Project *
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Aetheria Labs"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/70 border ${
                          errors.company ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                        } text-white text-sm outline-none transition-colors placeholder:text-slate-600 font-sans`}
                      />
                      {errors.company && (
                        <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                          {errors.company}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Budget Tier Chips */}
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    02 // Target Capital Allocation
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetTiers.map((tier) => {
                      const isSelected = budgetTier === tier;
                      return (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudgetTier(tier)}
                          className={`p-3 rounded-xl border text-xs font-mono font-medium transition-all duration-200 text-center ${
                            isSelected
                              ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                              : 'bg-slate-900/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Technical Brief Narrative */}
                <div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    03 // Project Scope &amp; Deliverables *
                  </h3>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current tech stack, desired launch milestones, and performance objectives..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-900/70 border ${
                      errors.message ? 'border-rose-500' : 'border-white/10 focus:border-cyan-400'
                    } text-white text-sm outline-none transition-colors placeholder:text-slate-600 font-sans leading-relaxed`}
                  />
                  {errors.message && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Section 4: Drag & Drop RFP File Upload Zone Mockup */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-mono tracking-widest uppercase text-cyan-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      04 // Specifications &amp; RFP Documents (Optional)
                    </h3>
                    <button
                      type="button"
                      onClick={handleAddSampleFile}
                      className="text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      + Add Sample Attachment
                    </button>
                  </div>

                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleFileDrop}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                      isDragging
                        ? 'border-cyan-400 bg-cyan-950/20'
                        : 'border-white/10 hover:border-white/20 bg-slate-950/40'
                    }`}
                  >
                    <UploadCloud className="w-8 h-8 text-cyan-400 mx-auto mb-2 opacity-80" />
                    <p className="text-xs font-mono text-slate-300">
                      Drag and drop design decks, Figma links, or RFPs here
                    </p>
                    <span className="text-[11px] font-mono text-slate-500 block mt-1">
                      Supports PDF, GLTF, MP4, FIGMA (Up to 100MB)
                    </span>
                  </div>

                  {/* Attached Files List */}
                  {files.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {files.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/60 border border-white/5 text-xs font-mono text-slate-300"
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span className="truncate">{file.name}</span>
                            <span className="text-slate-500 text-[10px]">({file.size})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(idx)}
                            className="p-1 hover:text-rose-400 text-slate-500 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Guaranteed Partner SLA: Response within 6 hours</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                        <span>Transmitting Specification...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation View with Animated SVG Checkmark */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center space-y-6"
              >
                {/* Bespoke Animated SVG Checkmark */}
                <AnimatedCheckmark size={80} />

                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                    Transmission Acknowledged
                  </span>
                  <h3 className="text-3xl font-display font-extrabold text-white">
                    Brief Queued for Partner Review
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto mt-2 font-light">
                    Our technical lead and design director have received your scope submission. You
                    will receive an architectural response with initial milestones by 14:00 UTC.
                  </p>
                </div>

                {/* Ticket Receipt Chip */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 font-mono text-xs text-left max-w-md w-full space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dispatch Reference:</span>
                    <span className="text-emerald-400 font-bold">{ticketRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span className="text-slate-300">{name} ({email})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Framework:</span>
                    <span className="text-cyan-400">{projectType}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 uppercase tracking-wider underline underline-offset-4"
                >
                  Submit Another Commission
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
