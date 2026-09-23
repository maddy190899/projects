import React, { useState } from 'react';
import { 
  Sparkles, 
  Stethoscope, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Activity, 
  Sliders 
} from 'lucide-react';
import { DentalToothIcon } from '../components/VectorGraphic';

export const TreatmentsPage = ({ onOpenBooking, onPreSelectTreatment }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProcedureModal, setActiveProcedureModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'implants', label: 'Guided Dental Implants' },
    { id: 'cosmetic', label: 'Cosmetic Veneers & DSD' },
    { id: 'ortho', label: 'Airway Orthodontics' },
    { id: 'perio', label: 'Laser Periodontics' },
    { id: 'surgery', label: 'Sedation & Oral Surgery' },
    { id: 'preventative', label: 'Biomimetic Preventative' },
  ];

  const procedures = [
    {
      id: 'implant-single',
      category: 'implants',
      name: 'Single Tooth Guided Zirconia/Titanium Implant',
      tagline: 'Permanent bio-compatible root & crown replacement with sub-millimeter precision.',
      indications: 'Isolated missing tooth, cracked tooth with non-restorable root fracture, failing endodontic root canal.',
      protocol: [
        'High-resolution Planmeca 3D CBCT bone volume & nerve mapping',
        'Virtual surgical guide 3D printing for flapless osteotomy',
        'Placement of Straumann Roxolid® / Zirconia implant fixture (ISQ > 80)',
        'Delivery of screw-retained custom monolithic zirconia crown with micro-translucent glaze'
      ],
      duration: '2 Clinical Visits • 3-4 Months Osseointegration',
      anesthesia: 'Local Anesthesia or Twilight IV Sedation',
      longevity: 'Lifetime Implant Warranty (40+ Years)',
      price: '$3,800 – $4,600 (Complete with Abutment & Crown)',
      code: 'D6010 / D6057'
    },
    {
      id: 'all-on-4',
      category: 'implants',
      name: 'All-on-4 / All-on-6 Immediate Load Full Arch Restoration',
      tagline: 'Transform an entire failing arch into fixed monolithic zirconia teeth in a single day.',
      indications: 'Terminal dentition, severe periodontal bone resorption, loose painful teeth, failing bridges, ill-fitting dentures.',
      protocol: [
        'Complete 3D CBCT craniofacial surgical planning & smile design',
        'Extraction of compromised teeth & robotic placement of 4 to 6 strategic angled implants',
        'Immediate delivery of fixed, screw-retained high-strength hybrid provisional teeth same day',
        'Final delivery of precision-milled Katana™ Pre-shaded multilayer zirconia arch'
      ],
      duration: 'Same-Day Teeth Delivery • 1-Day Surgery',
      anesthesia: 'Board-Certified MD Anesthesiologist Twilight Sleep',
      longevity: 'Lifetime Titanium Warranty / 10-Yr Zirconia Arch',
      price: '$24,500 – $29,000 per arch (All-Inclusive Surgical & Restorative)',
      code: 'D6078 / D6114'
    },
    {
      id: 'veneers-feldspathic',
      category: 'cosmetic',
      name: 'Micro-Thin Hand-Layered Feldspathic Porcelain Veneers',
      tagline: 'Artisanal 0.2mm ceramic laminates that capture natural enamel translucency with minimal or zero prep.',
      indications: 'Severe tetracycline staining, fluorosis, enamel hypoplasia, diastemas (gaps), worn irregular incisal edges.',
      protocol: [
        'Digital Smile Design (DSD) 3D facial biometric simulation & trial smile test drive',
        'Conservative enamel smoothing (under 0.3mm enamel preservation protocol)',
        'Master ceramist hand-layering in our internal Beverly Hills / Manhattan laboratory',
        'Adhesive biomimetic bonding using dual-cure resin cements under dental rubber dam isolation'
      ],
      duration: '2 Visits • 7 to 10 Days',
      anesthesia: 'Local Anesthesia (Zero sensitivity protocol)',
      longevity: '20+ Years with Regular Biofilm Care',
      price: '$2,200 – $2,900 per veneer',
      code: 'D2962'
    },
    {
      id: 'invisalign-apex',
      category: 'ortho',
      name: 'Diamond Apex Invisalign® & Airway Orthodontics',
      tagline: 'Gentle, accelerated clear aligner biomechanics that widen the maxillary arch and expand nocturnal airway.',
      indications: 'Crowded or overlapped teeth, deep bite, crossbite, open bite, mild obstructive sleep apnea (OSA).',
      protocol: [
        '3Shape TRIOS 5 intraoral digital scanning with zero radiation',
        'ClinCheck 3D computerized biomechanical movement simulation',
        'SmartTrack medical polymer aligners delivered with custom composite micro-attachments',
        'Vivera retainers & sleep airway compliance monitoring'
      ],
      duration: '4 to 12 Months (40% faster than standard braces)',
      anesthesia: 'Non-Invasive (Zero Anesthesia Required)',
      longevity: 'Lifetime Alignment with Vivera Retainers',
      price: '$4,500 – $7,200 (Comprehensive Full Case)',
      code: 'D8090'
    },
    {
      id: 'lanap-laser',
      category: 'perio',
      name: 'LANAP® Hydrophotonic Regenerative Laser Periodontics',
      tagline: 'FDA-cleared laser protocol for periodontal regeneration without scalpels, cutting, or stitches.',
      indications: 'Deep periodontal pockets (5mm+), bleeding gums, periodontitis bone loss, peri-implantitis.',
      protocol: [
        'Periodontal probing depth and digital volumetric bone assessment',
        'BIOLASE Waterlase pulsed laser micro-vaporizes diseased sulcular epithelium and pathogens',
        'Ultrasonic piezoelectric calculus debridement without damaging root cementum',
        'Secondary laser pass initiates a stable fibrin clot to seal pocket and stimulate stem cell osteogenesis'
      ],
      duration: '1 to 2 Sessions (Full Mouth) • 60-90 Minutes',
      anesthesia: 'Local Anesthesia or Conscious Sedation',
      longevity: 'Permanent Periodontal Arrest with 6-mo Biofilm Hygiene',
      price: '$1,800 – $4,200 (Quadrant to Full Mouth)',
      code: 'D4249 / D4341'
    },
    {
      id: 'sedation-twilight',
      category: 'surgery',
      name: 'MD-Administered Twilight IV Sleep Sedation',
      tagline: 'Complete tranquility for patients with high dental phobia or undergoing comprehensive surgical transformations.',
      indications: 'Severe dental anxiety, sensitive gag reflex, multiple surgical extractions, lengthy cosmetic rehabilitations.',
      protocol: [
        'Pre-operative medical history clearance with board-certified anesthesiologist',
        'Intravenous administration of titratable amnestic agents (Propofol / Midazolam / Fentanyl)',
        'Continuous hospital-grade hemodynamic monitoring (ECG, Pulse Oximetry, NIBP, Capnography)',
        'Gradual gentle emergence in private circadian recovery lounge with complimentary VIP transport coordination'
      ],
      duration: 'Covers entire surgical procedure duration',
      anesthesia: 'Moderate to Deep Conscious Sedation',
      longevity: 'Zero Post-Operative Anxiety Recall',
      price: '$950 – $1,600 (Based on surgical duration)',
      code: 'D9222 / D9223'
    },
    {
      id: 'preventative-airflow',
      category: 'preventative',
      name: 'Guided Biofilm Therapy (GBT) & Airflow Prophylaxis',
      tagline: 'Swiss-engineered painless hygiene utilizing warm water, erythritol powder, and zero scraping.',
      indications: 'Routine 6-month wellness cleanings, implant maintenance, sensitive teeth, orthodontic maintenance.',
      protocol: [
        'Bacterial biofilm disclosing agent stains plaque bright blue for complete visibility',
        'EMS Airflow® delivery of heated water (37°C) and micro-fine erythritol powder to erase all biofilm',
        'Piezon® NO PAIN ultrasonic technology gently lifts calcified calculus',
        'Application of biomimetic hydroxyapatite paste to remineralize enamel'
      ],
      duration: '50 Minutes Comprehensive Wellness Appointment',
      anesthesia: '100% Painless (Zero Anesthesia Needed)',
      longevity: 'Recommended Every 6 Months',
      price: '$280 – $380 (Included in VIP Membership)',
      code: 'D1110 / D4346'
    },
    {
      id: 'cosmetic-bonding',
      category: 'cosmetic',
      name: 'Biomimetic Direct Composite Artistry',
      tagline: 'Single-visit microscopic sculpting of fractured incisal edges and diastemas with multi-shaded nano-hybrids.',
      indications: 'Small chips, minor gaps, black triangles between teeth, uneven incisal lengths.',
      protocol: [
        'Micro-abrasion and selective enamel etching to ensure chemical bond strength',
        'Layering of dentin, body, and translucent incisal composite pastes under dental loupes',
        'Multi-stage diamond polishing to attain high vitreous gloss matching adjacent natural enamel'
      ],
      duration: 'Single Visit • 45 Minutes per Tooth',
      anesthesia: 'Local Anesthesia (Often zero anesthesia needed)',
      longevity: '7 to 10 Years with Annual Glaze Touchups',
      price: '$650 – $950 per tooth',
      code: 'D2331 / D2332'
    }
  ];

  const filteredProcedures = procedures.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.indications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-400 mb-4">
          <Stethoscope className="w-3.5 h-3.5" />
          CLINICAL PROCEDURES & SURGICAL CODING
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Comprehensive Dental Disciplines.
        </h1>
        <p className="text-slate-300 text-base mt-4 leading-relaxed">
          Explore our itemized clinical offerings, transparent pricing schedules, and procedural protocols engineered around biomimetic tissue preservation.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search procedure, indication..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      {/* Procedures Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProcedures.map((proc) => (
          <div
            key={proc.id}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 group shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="font-mono text-[10px] text-sky-400 px-2.5 py-0.5 rounded bg-sky-950/60 border border-sky-500/20">
                    ADA {proc.code}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-sky-300 transition-colors">
                    {proc.name}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                {proc.tagline}
              </p>

              {/* Indications */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5 text-xs">
                <span className="font-mono text-[10px] text-teal-400 font-semibold uppercase block mb-1">
                  Clinical Indications
                </span>
                <p className="text-slate-300 leading-relaxed">{proc.indications}</p>
              </div>

              {/* Step Protocol */}
              <div className="space-y-2 mb-6">
                <span className="font-mono text-[10px] text-slate-400 font-semibold uppercase block">
                  Surgical / Restorative Protocol:
                </span>
                {proc.protocol.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-sky-400 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>

              {/* Telemetry Row */}
              <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-800 pt-4 mb-6">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Duration</span>
                  <span className="text-slate-200 font-medium">{proc.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Anesthesia</span>
                  <span className="text-slate-200 font-medium">{proc.anesthesia}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Warranty</span>
                  <span className="text-emerald-400 font-medium">{proc.longevity}</span>
                </div>
                <div className="pt-2">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Fee Schedule</span>
                  <span className="text-sky-300 font-mono font-bold">{proc.price}</span>
                </div>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onPreSelectTreatment(proc.name);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 transition-all shadow-md shadow-sky-500/20"
              >
                <span>Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Matrix: Porcelain Veneers vs Composite Bonding */}
      <section className="p-6 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
        <div className="mb-6">
          <span className="font-mono text-xs text-sky-400 uppercase">AESTHETIC DECISION FRAMEWORK</span>
          <h3 className="text-2xl font-bold text-white mt-1">Porcelain Veneers vs. Composite Bonding</h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Understanding material science to guide the optimal restorative investment for your smile.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4 text-sky-400">Micro-Thin Feldspathic Porcelain</th>
                <th className="py-3 px-4 text-teal-400">Direct Composite Resin Bonding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Stain & Discoloration Resistance</td>
                <td className="py-3.5 px-4 text-sky-300">100% Impervious to Coffee, Red Wine & Tobacco</td>
                <td className="py-3.5 px-4 text-slate-400">Porous matrix; requires annual repolishing</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Expected Clinical Longevity</td>
                <td className="py-3.5 px-4 text-emerald-400 font-bold">20 to 25+ Years</td>
                <td className="py-3.5 px-4 text-slate-400">5 to 8 Years</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Natural Light Translucency</td>
                <td className="py-3.5 px-4 text-sky-300">Identical to organic deep enamel prisms</td>
                <td className="py-3.5 px-4 text-slate-400">Moderate translucency; slightly more opaque</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Enamel Reduction Protocol</td>
                <td className="py-3.5 px-4 text-sky-300">0.2mm to 0.3mm (Minimal / Prepless)</td>
                <td className="py-3.5 px-4 text-teal-300">Zero Reduction (Additive only)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-white">Number of Clinical Appointments</td>
                <td className="py-3.5 px-4 text-slate-300">2 Visits (Digital Scan & Delivery)</td>
                <td className="py-3.5 px-4 text-teal-300">1 Visit (Sculpted in single session)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
