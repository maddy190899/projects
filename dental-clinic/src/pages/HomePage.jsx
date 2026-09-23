import React from 'react';
import { motion } from 'motion/react';
import { InteractiveHero } from '../components/InteractiveHero';
import { InteractiveCards } from '../components/InteractiveCards';
import { SmileSplitSlider } from '../components/SmileSplitSlider';
import { SmileAssessmentQuiz } from '../components/SmileAssessmentQuiz';
import { DentalToothIcon, SmileDesignProportionVector } from '../components/VectorGraphic';
import { 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  ArrowRight, 
  Star, 
  Activity, 
  CheckCircle2, 
  Award,
  Video,
  Eye,
  HeartHandshake
} from 'lucide-react';

export const HomePage = ({
  onOpenBooking,
  onNavigate,
  onPreSelectTreatment
}) => {
  const specialties = [
    {
      title: 'Guided Dental Implants',
      desc: 'All-on-4, single tooth, and zygomatic restorations planned via 3D CBCT with immediate load titanium/zirconia.',
      rate: '99.8% Integration Rate',
      code: 'SURG-01',
      id: 'implants'
    },
    {
      title: 'Hand-Layered Porcelain Veneers',
      desc: 'Micro-thin (0.2mm) feldspathic ceramics that preserve 95%+ of natural enamel while creating radiant golden proportions.',
      rate: 'Sub-12μm Precision',
      code: 'AESTH-02',
      id: 'veneers'
    },
    {
      title: 'Diamond Apex Invisalign®',
      desc: 'Airway-centered clear aligners optimizing both bite aesthetics and deep nocturnal oxygenation.',
      rate: 'Top 1% Provider',
      code: 'ORTHO-03',
      id: 'invisalign'
    },
    {
      title: 'Hydrophotonic Laser Periodontics',
      desc: 'LANAP regenerative gum therapy utilizing BIOLASE Waterlase. Zero scalpels, zero sutures, pain-free tissue restoration.',
      rate: '24h Epithelial Healing',
      code: 'PERIO-04',
      id: 'laser'
    },
  ];

  const testimonials = [
    {
      name: 'Julian Vance',
      role: 'Founding Partner, Vance Capital',
      location: 'Manhattan Suite',
      procedure: 'Immediate Load Zirconia Implant (#9 Anterior)',
      rating: 5,
      date: 'August 2026',
      quote: 'Suffered a severe traumatic incisor fracture during an equestrian event. Dr. Vance placed an immediate-load titanium implant and milled a custom zirconia crown within hours. The micro-translucency is indistinguishable from my natural dentition.',
      doctor: 'Dr. Alistair Vance, DDS, MS'
    },
    {
      name: 'Sophia De Luca',
      role: 'Creative Director & Architectural Designer',
      location: 'Beverly Hills Suite',
      procedure: '10 Upper Feldspathic Porcelain Veneers (Shade BL1)',
      rating: 5,
      date: 'July 2026',
      quote: 'As an architect, I am obsessed with proportions. Dr. Rostova calibrated my smile curve using Digital Smile Design golden ratios. No bulky look—they have the organic depth of natural young enamel. Unmatched artistry.',
      doctor: 'Dr. Elena Rostova, DMD, FAACD'
    },
    {
      name: 'Marcus Lindqvist',
      role: 'Software Principal & Triathlete',
      location: 'Zurich Medical District',
      procedure: 'LANAP Laser Periodontics & Full Mouth Prophylaxis',
      rating: 5,
      date: 'September 2026',
      quote: 'I had severe dental anxiety from childhood trauma. Aura provided IV twilight sedation monitored by an MD anesthesiologist. I fell into a gentle sleep and woke up with pristine periodontal pockets and zero postoperative soreness.',
      doctor: 'Dr. Claire Chen, DDS & Dr. Julian Mercer, MD'
    }
  ];

  return (
    <div className="space-y-24">
      {/* 1. Kinetic Hero Header */}
      <InteractiveHero
        onBookClick={onOpenBooking}
        onExploreClick={() => onNavigate('treatments')}
        onEmergencyClick={() => onNavigate('emergency')}
        onNavigate={onNavigate}
      />

      {/* 2. Bento Grid Telemetry & Clinical Infrastructure */}
      <InteractiveCards
        onSelectCategory={(cat) => {
          onNavigate('technology');
        }}
      />

      {/* 3. Interactive Before & After Smile Visualizer */}
      <section className="relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              CLINICAL SMILE CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Biometric Smile Transformations.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-2">
              Slide the central divider horizontally to inspect micro-enamel texture, gum symmetry, and diastema closure in real clinical cases.
            </p>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold font-mono text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>VIEW ALL 85+ DOCUMENTED CASES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <SmileSplitSlider
          title="Case 1042: Upper Arch Micro-Thin Feldspathic Veneers"
          category="Aesthetic Cosmetic Restorations"
          preOpDetails="Pre-Op: Enamel hypocalcification, severe incisal wear, 3.5mm central diastema, Shade A3.5."
          postOpDetails="Post-Op: 10 Custom hand-layered porcelain veneers with natural mamelons and high translucency, Shade BL1."
          duration="2 Visits • 10 Days Total"
          doctor="Dr. Elena Rostova, DMD, FAACD"
        />
      </section>

      {/* 4. Interactive Smile Assessment Quiz */}
      <section className="relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/40 text-xs font-mono text-teal-300 mb-3">
            <Activity className="w-3.5 h-3.5" />
            INSTANT CLINICAL TRIAGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Design Your Personalized Treatment Roadmap.
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Select your smile concerns to calculate procedure options, sedation protocols, and estimated clinical visits in seconds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <SmileAssessmentQuiz
            onBookWithPlan={(plan) => {
              onPreSelectTreatment('Custom Synthesized Treatment Plan');
              onOpenBooking();
            }}
          />
        </div>
      </section>

      {/* 5. Core Surgical Specialties Directory */}
      <section className="relative pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/30 text-xs font-mono text-sky-400 mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              SPECIALIZED DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Surgical Precision Across Every Dimension.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('treatments')}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors"
          >
            <span>Explore All 24 Procedures</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between hover:border-sky-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/20">
                    {spec.code}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                    {spec.rate}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {spec.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {spec.desc}
                </p>
              </div>

              <button
                onClick={() => {
                  onPreSelectTreatment(spec.title);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-950/60 hover:bg-sky-500 hover:border-sky-500 hover:text-white text-xs font-semibold text-slate-300 transition-all"
              >
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Real Patient Case Testimonials */}
      <section className="relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/30 text-xs font-mono text-teal-300 mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              VERIFIED OUTCOMES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Testimonials from Restored Smiles.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-2">
              Patients share their experiences navigating complex reconstructive surgery and aesthetic restorations with our team.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="font-mono text-xs text-white ml-2">4.99 / 5.0 (640+ Audited Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between relative shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 px-2 py-0.5 rounded bg-slate-800">
                    {t.location}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-1 rounded bg-teal-950/40 border border-teal-500/20 text-[10px] font-mono text-teal-300 mb-4">
                  {t.procedure}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{t.date}</span>
                <span className="font-semibold text-slate-300">{t.doctor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Comfort Amenities & Surgical Sanctuary */}
      <section className="relative p-8 sm:p-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-sky-950/30 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              PATIENT SANCTUARY EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Anxiety-Free, Private Luxury Surgical Suites.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We eliminated the sterile clinical anxiety of traditional dental offices. Enjoy private treatment suites equipped with 4K ceiling cinema screens, Bose noise-canceling headphones, NuCalm neuroacoustic deep relaxation, and dedicated MD anesthesiologist twilight sleep sedation.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Pain Guarantee Protocol</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>HEPA 14 Positive Pressure Cleanrooms</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Private VIP Ingress & Departure</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Circadian Recovery Lounge</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/60 border border-slate-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Experience Virtual Clinic Walkthrough</h3>
              <p className="text-xs text-slate-400 mt-1">
                Tour our Beverly Hills and Manhattan surgical operatories and CAD/CAM robotics laboratory.
              </p>
            </div>
            <button
              onClick={() => onNavigate('technology')}
              className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/20"
            >
              Explore Robotics Lab
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
