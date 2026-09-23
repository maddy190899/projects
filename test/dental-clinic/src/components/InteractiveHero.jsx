import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  PhoneCall, 
  Award,
  ChevronRight
} from 'lucide-react';
import { PulseBadge } from './LottieAnimation';
import { DentalLogo } from './VectorGraphic';

const HEADLINE_ROTATIONS = [
  "Bespoke Smile Architecture.",
  "Painless Precision Dentistry.",
  "Guided Swiss Implants.",
  "Concierge Comfort Suites."
];

export default function InteractiveHero({ onOpenBooking, onTakeQuiz }) {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINE_ROTATIONS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50">
      {/* Decorative Atmospheric Radial Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-teal-200/25 via-emerald-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Typography & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <PulseBadge 
                icon={Sparkles} 
                label="Ranked #1 Aesthetic Dental Studio in SF 2024-2026" 
                pulseColor="bg-emerald-500" 
              />
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                Open Today: Walk-ins & Emergencies Welcome
              </span>
            </div>

            {/* Kinetic Headline */}
            <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                Natural Confidence. <br />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 font-serif italic"
                  >
                    {HEADLINE_ROTATIONS[headlineIndex]}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </div>

            {/* Subhead Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Step into a new standard of dental wellness. Combining Swiss Straumann® titanium implants, handcrafted porcelain veneers, and soothing zero-anxiety suites equipped with noise-canceling Bose audio and twilight sedation.
            </p>

            {/* Dual Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-base shadow-lg shadow-teal-700/25 transition-all cursor-pointer group"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Book First Visit & 3D Scan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onTakeQuiz}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Smile Assessment (60s)</span>
              </motion.button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Google Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Patient" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Patient" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Patient" />
                </div>
                <div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-slate-800">4.98 / 5</span>
                  </div>
                  <p className="text-xs text-slate-500">2,450+ Verified Reviews</p>
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>100% Digital • Zero Goop Impressions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Clinic Imagery & Floating Live Telemetry Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] sm:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" 
                  alt="Aura Dental Studio Modern Operatory" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10" />

                {/* Overlaid Clinic Status Bar */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800">
                      <DentalLogo className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">450 Sutter St, Suite 1400</p>
                      <p className="text-[11px] text-teal-700 font-medium">Union Square • San Francisco</p>
                    </div>
                  </div>
                  <a 
                    href="tel:5553827645" 
                    className="p-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 transition-colors"
                    title="Call Clinic"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Floating Live Badge 1: Next Slot */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-8 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping relative">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 absolute inset-0"></span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Next Available</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">Today at 3:15 PM</p>
                </div>
              </motion.div>

              {/* Floating Live Badge 2: 3D Precision Scan */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-1/3 -right-4 sm:-right-8 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Trios 5 Wireless</p>
                  <p className="text-[11px] text-slate-500">100% Digital 3D Impressions</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Realistic Metric Telemetry Strip */}
      <div className="mt-16 sm:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div className="text-center sm:text-left sm:border-r border-slate-100 sm:pr-6">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">18,400+</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Smiles Transformed in SF</p>
          </div>
          <div className="text-center sm:text-left md:border-r border-slate-100 sm:pr-6">
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-700 font-display">99.4%</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Implant Integration Rate</p>
          </div>
          <div className="text-center sm:text-left sm:border-r border-slate-100 sm:pr-6">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">0% Pain</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Computerized Wand® Anesthesia</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-700 font-display">&lt; 7 Mins</p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Zero-Wait Lounge Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
