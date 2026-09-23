import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Star, Filter } from 'lucide-react';
import { SmileSplitSlider } from '../components/SmileSplitSlider';
import { DentalToothIcon } from '../components/VectorGraphic';

export const SmileGalleryPage = ({ onOpenBooking, onPreSelectTreatment }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const cases = [
    {
      id: 'case-1042',
      category: 'veneers',
      title: 'Case 1042: Upper Arch Micro-Thin Feldspathic Veneers',
      badge: 'Porcelain Veneers',
      preOp: 'Pre-Op: Enamel fluorosis, incisal wear, 3.5mm central diastema, reverse smile line (Shade A3.5).',
      postOp: 'Post-Op: 10 Micro-thin (0.25mm) hand-layered feldspathic porcelain veneers with golden ratio smile curve (Shade BL1).',
      duration: '2 Clinical Visits • 10 Days Total',
      doctor: 'Dr. Elena Rostova, DMD, FAACD'
    },
    {
      id: 'case-1088',
      category: 'implants',
      title: 'Case 1088: Full-Arch Immediate Load All-on-4 Zirconia',
      badge: 'Full Arch Implants',
      preOp: 'Pre-Op: Severe generalized periodontitis, terminal dentition with severe mobility (Grade III), painful mastication.',
      postOp: 'Post-Op: 4 Guided Straumann Roxolid implants supporting screw-retained monolithic Katana multilayer zirconia arch.',
      duration: 'Same-Day Teeth Delivery • 1-Day Surgery',
      doctor: 'Dr. Alistair Vance, DDS, MS, FICOI'
    },
    {
      id: 'case-1124',
      category: 'ortho',
      title: 'Case 1124: Airway-Expansion Invisible Orthodontics',
      badge: 'Invisalign Apex',
      preOp: 'Pre-Op: Severe anterior crowding (7mm arch deficiency), deep overbite (85%), narrow high-vaulted palate, mouth breathing.',
      postOp: 'Post-Op: 26 Aligner stages using SmartForce biomechanics; arch expanded by 4.2mm, overbite corrected to 15%, nasal airway volume expanded by 31%.',
      duration: '7 Months • 14 In-Clinic Telemetry Checks',
      doctor: 'Dr. Marcus Sterling, DDS, MS'
    },
    {
      id: 'case-1159',
      category: 'laser',
      title: 'Case 1159: Waterlase Laser Gingival Sculpting & Bonding',
      badge: 'Laser Periodontics',
      preOp: 'Pre-Op: Excessive gingival display (5.5mm "gummy smile"), asymmetrical gum margins, chipped central incisors.',
      postOp: 'Post-Op: Closed-flap hydrophotonic osseous and soft-tissue recontouring via BIOLASE Waterlase + 4 direct biomimetic composite edge veneers.',
      duration: 'Single Visit • 90 Minutes Total',
      doctor: 'Dr. Claire Chen, DDS & Dr. Elena Rostova, DMD'
    }
  ];

  const filteredCases = cases.filter(
    (c) => activeFilter === 'all' || c.category === activeFilter
  );

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          BEFORE & AFTER CLINICAL ARCHIVE
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Documented Smile Transformations.
        </h1>
        <p className="text-slate-300 text-base mt-4 leading-relaxed">
          Examine real patient restorations. Drag the vertical divider on any case to inspect pre-operative diagnoses versus final restorative outcomes.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-slate-800">
        {[
          { id: 'all', label: 'All Cases' },
          { id: 'veneers', label: 'Porcelain Veneers' },
          { id: 'implants', label: 'Full-Arch Implants' },
          { id: 'ortho', label: 'Airway Invisalign' },
          { id: 'laser', label: 'Laser Gingival Sculpting' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === tab.id
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cases List */}
      <div className="space-y-12">
        {filteredCases.map((c) => (
          <div key={c.id} className="space-y-4">
            <SmileSplitSlider
              title={c.title}
              category={c.badge}
              preOpDetails={c.preOp}
              postOpDetails={c.postOp}
              duration={c.duration}
              doctor={c.doctor}
            />

            <div className="flex justify-end pr-2">
              <button
                onClick={() => {
                  onPreSelectTreatment(c.title);
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-slate-800 hover:bg-sky-500 hover:text-white border border-slate-700 transition-all shadow-sm"
              >
                <span>Consult for a Similar Smile Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shade Matching & Translucency Lab Explainer */}
      <section className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs text-sky-400 uppercase font-semibold">
              COLORIMETRY & SPECTROPHOTOMETRY
            </span>
            <h3 className="text-2xl font-bold text-white">
              Shade Science: From VITA Classical to Bleach 1 (BL1)
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every porcelain veneer and zirconia crown is measured using intraoral spectrophotometers to analyze value, chroma, and hue across 16 optical zones. We replicate the organic incisal halos, amber mamelons, and opalescent blue translucency of virgin youthful teeth.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Shade BL1 (Hollywood Ultra)</span>
              <span className="text-sky-300 font-bold">100% Reflective Value</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Shade OM1 / BL2 (Natural Bright)</span>
              <span className="text-teal-300 font-bold">Opalescent Halo</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Shade A1 (Natural Youth Enamel)</span>
              <span className="text-slate-200 font-bold">Standard Classical</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmileGalleryPage;
