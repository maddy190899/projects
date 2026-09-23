import React from 'react';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  MapPin, 
  Sparkles,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { DentalToothIcon } from '../components/VectorGraphic';

export const DoctorsPage = ({ onOpenBooking, onPreSelectDoctor }) => {
  const doctors = [
    {
      name: 'Dr. Alistair Vance, DDS, MS, FICOI',
      role: 'Chief of Oral Implantology & Reconstructive Surgery',
      location: 'Manhattan & Beverly Hills',
      education: 'Harvard School of Dental Medicine (DDS) • Stanford Surgical Residency',
      fellowships: 'Diplomate & Master, International Congress of Oral Implantologists (ICOI)',
      focus: 'All-on-4 / All-on-6 Immediate Load, 3D CBCT Guided Surgery, Zygomatic Implants, Sub-Millimeter Osteotomy',
      cases: '6,200+ Implants Placed (99.8% 10-Yr Survival)',
      bio: 'Trained at Harvard and Stanford, Dr. Vance pioneered computer-guided flapless implant protocols that dramatically reduce patient recovery time from weeks to hours. He consults internationally on biomaterial osseointegration.',
      imageBg: 'from-sky-900/40 to-slate-900'
    },
    {
      name: 'Dr. Elena Rostova, DMD, FAACD',
      role: 'Master of Aesthetic & Biomimetic Prosthodontics',
      location: 'Beverly Hills & Zurich',
      education: 'University of Pennsylvania (DMD) • Post-Doctoral Biomimetic Fellowship (Geneva)',
      fellowships: 'Accredited Fellow, American Academy of Cosmetic Dentistry (AACD)',
      focus: 'Micro-Thin 0.2mm Feldspathic Porcelain Veneers, Digital Smile Design (DSD), Biomimetic Enamel Preservation',
      cases: '14,000+ Custom Ceramic Veneers Delivered',
      bio: 'Dr. Rostova combines the technical rigor of biomimetic enamel conservation with the fine artistry of European master ceramists. Her work is celebrated for its organic, light-refracting realism.',
      imageBg: 'from-teal-900/40 to-slate-900'
    },
    {
      name: 'Dr. Marcus Sterling, DDS, MS',
      role: 'Director of Airway & Invisible Orthodontics',
      location: 'Beverly Hills & Manhattan',
      education: 'Columbia University (DDS) • UCLA Orthodontic Specialty & Master of Science',
      fellowships: 'Diamond Apex Invisalign® Provider (Top 1% Worldwide) • AAO Fellow',
      focus: 'Airway-Centered Expansion, Non-Extraction Clear Aligners, Accelerated Biomechanics, Sleep Apnea Appliances',
      cases: '3,800+ Completed Aligner Transformations',
      bio: 'Dr. Sterling focuses on craniofacial harmony and airway patency. Rather than extracting healthy premolars, he utilizes computerized arch expansion to enhance facial symmetry and optimize nocturnal oxygenation.',
      imageBg: 'from-purple-900/40 to-slate-900'
    },
    {
      name: 'Dr. Claire Chen, DDS, MS',
      role: 'Board-Certified Periodontist & Soft Tissue Regenerative Surgeon',
      location: 'Beverly Hills & Zurich',
      education: 'UCSF School of Dentistry (DDS) • Periodontics Specialty Residency & MS',
      fellowships: 'Diplomate, American Board of Periodontology (ABP)',
      focus: 'LANAP® Laser Regeneration, Minimally Invasive Pinhole Gum Grafting, PRF Autologous Stem Cell Bio-grafting',
      cases: '4,500+ Regenerative Periodontal Procedures',
      bio: 'A diplomate of the American Board of Periodontology, Dr. Chen specializes in hydrophotonic laser surgery that eradicates disease without incisions or scalpels, preserving the natural gingival architecture.',
      imageBg: 'from-cyan-900/40 to-slate-900'
    },
    {
      name: 'Dr. Julian Mercer, MD, DDS',
      role: 'Chief of Dental Anesthesiology & Patient Vital Sanctuary',
      location: 'All Suites (Beverly Hills, Manhattan, Zurich)',
      education: 'Johns Hopkins University School of Medicine (MD) • Anesthesiology Residency',
      fellowships: 'American Society of Dentist Anesthesiologists (ASDA)',
      focus: 'Moderate-to-Deep Twilight IV Conscious Sedation, Advanced Cardiovascular Monitoring, Zero-Anxiety Care',
      cases: '8,000+ Surgical Sedation Procedures Monitored',
      bio: 'Dr. Mercer ensures every patient undergoing reconstructive surgery experiences total tranquility and absolute medical safety with continuous ICU-grade monitoring and zero post-procedure nausea.',
      imageBg: 'from-emerald-900/40 to-slate-900'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-400 mb-4">
          <Award className="w-3.5 h-3.5" />
          BOARD-CERTIFIED FACULTY & SURGEONS
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Pioneering Dental Specialists.
        </h1>
        <p className="text-slate-300 text-base mt-4 leading-relaxed">
          Our clinicians hold dual appointments at elite academic medical centres, leading groundbreaking research in robotic implantology, biomimetic ceramics, and laser tissue regeneration.
        </p>
      </div>

      {/* Accreditations Strip */}
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center text-xs font-mono text-slate-400">
        <div>HARVARD DENTAL MEDICINE</div>
        <div>STANFORD MEDICINE</div>
        <div>UPENN DENTAL MEDICINE</div>
        <div>COLUMBIA UNIVERSITY</div>
        <div>ICOI DIPLOMATE</div>
        <div>AACD ACCREDITED</div>
      </div>

      {/* Doctors Profiles Roster */}
      <div className="space-y-8">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col lg:flex-row gap-8 items-start justify-between hover:border-sky-500/40 transition-all duration-300 shadow-xl"
          >
            {/* Left: Avatar Vector & Clinical Badge */}
            <div className="flex flex-col items-center sm:items-start shrink-0">
              <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${doc.imageBg} border border-slate-700 flex items-center justify-center p-4 relative shadow-lg`}>
                <DentalToothIcon className="w-14 h-14" />
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-sky-500 text-white shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-3 text-center sm:text-left">
                <span className="font-mono text-[10px] text-teal-400 px-2 py-0.5 rounded bg-teal-950/40 border border-teal-500/20">
                  {doc.cases}
                </span>
                <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1 justify-center sm:justify-start">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  <span>{doc.location}</span>
                </div>
              </div>
            </div>

            {/* Middle: Credentials & Bio */}
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {doc.name}
                </h3>
                <p className="text-xs font-mono text-sky-400 mt-0.5">{doc.role}</p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {doc.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-[11px]">{doc.education}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <Award className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-[11px]">{doc.fellowships}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px]">
                <strong className="text-slate-300 font-mono uppercase block mb-1">Clinical Mastery:</strong>
                <span className="text-slate-400">{doc.focus}</span>
              </div>
            </div>

            {/* Right: Direct Consultation Action */}
            <div className="shrink-0 w-full lg:w-48 flex flex-col justify-center gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-6">
              <button
                onClick={() => {
                  onPreSelectDoctor(doc.name);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 transition-all shadow-md shadow-sky-500/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule with Doctor</span>
              </button>

              <div className="text-center font-mono text-[10px] text-emerald-400 mt-1">
                Consultation Slots Open This Month
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
