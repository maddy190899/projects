import React from 'react';
import { motion } from 'motion/react';
import { DentalToothIcon, DentalImplantGraphic } from './VectorGraphic';
import { DynamicMotionGraphic } from './LottieAnimation';
import { Sparkles, ShieldCheck, Clock, ArrowRight, Activity, Calendar, Stethoscope, PhoneCall } from 'lucide-react';

export const InteractiveHero = ({
  onBookClick,
  onExploreClick,
  onEmergencyClick,
  onNavigate
}) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Dynamic Ambient Radiant Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Kinetic Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Live Clinical Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              BEVERLY HILLS • MANHATTAN • ZURICH
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/30 text-xs text-teal-300 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>ISO-13485 CERTIFIED SURGICAL LAB</span>
            </div>
          </motion.div>

          {/* Kinetic Headline powered by motion/react */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
          >
            Sculpting{' '}
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Biomechanical
            </span>{' '}
            Perfection & Radiant Smile Architecture.
          </motion.h1>

          {/* Authentic Clinical Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
          >
            Where biomimetic restorative artistry converges with guided robotic implantology. 
            We engineer ultra-precise monolithic zirconia and handmade feldspathic porcelain veneers calibrated to sub-12 micron tolerances in a serene, pain-free surgical sanctuary.
          </motion.p>

          {/* Dual Action Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <button
              onClick={onBookClick}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule VIP Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 hover:border-sky-500/40 transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <Stethoscope className="w-4 h-4 text-sky-400" />
              <span>Treatments & Surgeries</span>
            </button>

            <button
              onClick={onEmergencyClick}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-rose-300 bg-rose-950/30 hover:bg-rose-950/60 border border-rose-500/30 hover:border-rose-500/50 transition-all duration-200"
              title="24/7 Dental Emergency Triage Hotline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>24/7 Emergency Triage</span>
            </button>
          </motion.div>

          {/* Verified Clinical Parameters Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80"
          >
            <div>
              <div className="text-2xl font-bold font-mono text-white tracking-tight">99.8%</div>
              <div className="text-xs text-slate-400 mt-0.5">10-Yr Implant Integration</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-sky-400 tracking-tight">&lt; 12μm</div>
              <div className="text-xs text-slate-400 mt-0.5">Micro-Margin Fit Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-teal-400 tracking-tight">18,400+</div>
              <div className="text-xs text-slate-400 mt-0.5">Smiles Biometrically Scanned</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white tracking-tight">0% Pain</div>
              <div className="text-xs text-slate-400 mt-0.5">Twilight Sleep Sedation</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Biological Implant / Robotic Anatomy Showcase */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-6 border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-sky-950/40"
          >
            {/* Header of Schematic */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">GUIDED SURGICAL ANATOMY</h3>
                  <p className="text-[10px] font-mono text-slate-400">CBCT 3D VOLUMETRIC MAPPING</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE CAD/CAM FEED
              </div>
            </div>

            {/* High-Fidelity Anatomical Vector Graphic */}
            <div className="relative w-full max-w-[340px] mx-auto py-2">
              <DentalImplantGraphic className="w-full h-auto drop-shadow-2xl" />
            </div>

            {/* Live Interactive Spec Bar */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-xl bg-slate-950/40 border border-slate-800/60">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Substrate</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Ti-6Al-4V ELI</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/40 border border-slate-800/60">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Prosthetic</div>
                <div className="text-xs font-semibold text-sky-300 mt-0.5">Zirconia 5Y-PSZ</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/40 border border-slate-800/60">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Torque Rating</div>
                <div className="text-xs font-semibold text-teal-300 mt-0.5">45 N·cm Locked</div>
              </div>
            </div>

            {/* Embedded Lottie / Motion Accent Badge */}
            <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-sky-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-sky-500/20 flex items-center justify-center">
                <DentalToothIcon className="w-4 h-4" glow={false} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Full-Arch Same Day</div>
                <div className="text-[10px] text-sky-400 font-mono">Immediate Load Protocol</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHero;
