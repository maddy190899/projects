import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Scan, 
  Cpu, 
  Sparkles, 
  Eye, 
  Headphones, 
  Tv, 
  Coffee, 
  Feather, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { IntraoralScanWave } from './VectorGraphic';

const TECH_ITEMS = [
  {
    icon: Scan,
    title: 'Trios 5® Wireless 3D Scanner',
    subtitle: 'Zero Putty Impressions',
    description: 'Captures 3,000 frames per second in photorealistic natural color. Eliminates gag-inducing impression trays while generating an exact digital twin of your dentition.',
    stat: '90-Sec Scan'
  },
  {
    icon: Cpu,
    title: 'Ultra-Low Radiation 3D CBCT',
    subtitle: 'Micro-Voxel Bone Mapping',
    description: 'Provides true 3D volumetric views of jawbone density, nerve canals, and sinus floors with 85% less radiation than standard hospital medical CT scans.',
    stat: '0.075mm Accuracy'
  },
  {
    icon: Feather,
    title: 'The Wand® Computerized STA',
    subtitle: 'Virtually Painless Anesthesia',
    description: 'Microprocessor-regulated flow delivery delivers anesthetic below patient pain thresholds. Numbs only the single tooth being treated without numbing your entire face or lips.',
    stat: '100% Gentle'
  },
  {
    icon: Eye,
    title: 'Carl Zeiss Surgical Microscopes',
    subtitle: '25x Optical Micro-Aesthetics',
    description: 'Enables our prosthodontists to refine veneer margins and root canal cleaning with micro-surgical precision, preserving sound natural tooth enamel.',
    stat: '25x Magnification'
  }
];

const COMFORT_AMENITIES = [
  {
    icon: Headphones,
    name: 'Bose QuietComfort® Audio',
    desc: 'Block all ambient clinic sounds with premium noise-canceling headphones.'
  },
  {
    icon: Tv,
    name: 'Ceiling 4K OLED Netflix Screens',
    desc: 'Stream your favorite movies and shows while reclining comfortably.'
  },
  {
    icon: Feather,
    name: 'Memory Foam Heated Suites',
    desc: 'Ergonomically contoured chairs with gentle warmth and weighted blankets.'
  },
  {
    icon: Coffee,
    name: 'Concierge Refreshment Lounge',
    desc: 'Organic cold-pressed juices, espresso, and warm scented facial towels.'
  }
];

export default function TechnologySuite({ onBookConsultation }) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-teal-600" />
            Cutting-Edge Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
            Digital Precision Meets Spa-Grade Comfort
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We have replaced traditional dental friction with 100% digital workflows, silent instrumentation, and sensory-soothing suites designed specifically for anxiety-prone patients.
          </p>
        </div>

        {/* 4 Clinical Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TECH_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{item.stat}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Zero-Anxiety Comfort Bar */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Zero-Anxiety Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-snug">
                Dentistry That Feels Like a Wellness Retreat
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you have avoided the dentist for 6 months or 10 years, our non-judgmental environment and sensory amenities will make you forget you are in a clinic.
              </p>

              <div className="pt-2">
                <button
                  onClick={onBookConsultation}
                  className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Experience Anxiety-Free Care</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMFORT_AMENITIES.map((amenity, aIdx) => {
                const AIcon = amenity.icon;
                return (
                  <div key={aIdx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
                      <AIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{amenity.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-normal">{amenity.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
