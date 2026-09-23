import React, { useState } from 'react';
import { 
  PhoneCall, 
  AlertTriangle, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  MapPin, 
  Send 
} from 'lucide-react';
import { DentalToothIcon } from '../components/VectorGraphic';

export const EmergencyPage = ({ onOpenBooking }) => {
  const [selectedEmergency, setSelectedEmergency] = useState('knocked-out');
  const [triageSubmitted, setTriageSubmitted] = useState(false);
  const [triageForm, setTriageForm] = useState({
    name: '',
    phone: '',
    symptoms: '',
    painScale: '8'
  });

  const emergencyProtocols = {
    'knocked-out': {
      title: 'Knocked-Out Permanent Tooth (Dental Avulsion)',
      urgency: 'CRITICAL: 60-Minute Golden Re-Implantation Window',
      steps: [
        'Handle the tooth ONLY by the white crown. NEVER touch, scrape, or disinfect the sensitive biological root cells.',
        'If dirty, rinse briefly (max 10 seconds) with cold whole milk or patient saliva. Do NOT scrub with soap or water.',
        'If possible, gently slip the tooth back into its socket and bite down gently on a clean cloth or handkerchief.',
        'If reinsertion is not possible, store the tooth submerged in cold whole milk or Hank\'s Balanced Salt Solution (Save-A-Tooth).',
        'Call our on-call maxillofacial trauma surgeon immediately at (800) 843-AURA.'
      ],
      dangerWarning: 'Cells on the periodontal ligament begin expiring after 60 minutes without proper physiological hydration.'
    },
    'abscess': {
      title: 'Severe Acute Throbbing Pain or Facial Swelling',
      urgency: 'URGENT: Risk of Facial Cellulitis / Ludwig\'s Angina',
      steps: [
        'Apply cold compresses to the outside of the cheek in 15-minute intervals. NEVER apply heating pads or aspirin directly to gum tissue.',
        'Rinse gently with warm saline water (1/2 teaspoon salt in 8 oz water) to draw out exudate.',
        'Sleep elevated with two pillows to reduce cephalic blood pressure and alleviate throbbing pressure.',
        'Take Ibuprofen (400-600mg) combined with Acetaminophen (500mg) if medically cleared, pending clinical intervention.',
        'Report to our surgical suite for 3D CBCT diagnosis and pain-free emergency pulpectomy or laser drainage.'
      ],
      dangerWarning: 'If swelling impairs swallowing or extends toward the eye or throat, proceed immediately to the nearest hospital ER.'
    },
    'broken': {
      title: 'Severely Fractured Tooth or Lost Crown / Bridge',
      urgency: 'MODERATE-HIGH: Nerve Exposure & Pulpitis Prevention',
      steps: [
        'Collect any fractured ceramic or tooth fragments and store them in clean moist gauze or saline.',
        'Avoid chewing on that side and avoid very hot or cold liquids if sensitive dentin or pulp is exposed.',
        'If a crown came off intact, coat the inside with a tiny dab of toothpaste or temporary dental cement (available at pharmacies) and slip it gently over the prep.',
        'Call our office for same-day robotic CEREC milling and restoration re-bonding.'
      ],
      dangerWarning: 'Do not use household superglues or chemical adhesives under any circumstances.'
    },
    'bleeding': {
      title: 'Persistent Post-Trauma Soft Tissue Bleeding',
      urgency: 'URGENT: Hemostasis & Suturing Protocol',
      steps: [
        'Apply firm, continuous direct pressure with sterile cotton gauze over the bleeding site for a full 20 minutes without lifting.',
        'If bleeding persists, bite firmly on a dampened black tea bag. The natural tannic acid acts as a powerful local vasoconstrictor.',
        'Remain calm and sit upright to lower cranial blood pressure.',
        'Contact our emergency surgical suite immediately for laser coagulation or micro-suturing.'
      ],
      dangerWarning: 'If bleeding saturates gauze within seconds and does not stop after 30 minutes of continuous pressure, call 911 or dispatch emergency.'
    }
  };

  const handleTriageSubmit = (e) => {
    e.preventDefault();
    setTriageSubmitted(true);
  };

  return (
    <div className="space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-950/40 text-xs font-mono text-rose-400 mb-4 animate-pulse">
          <ShieldAlert className="w-3.5 h-3.5" />
          24/7 DENTAL TRAUMA & EMERGENCY TRIAGE
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Immediate Urgent Dental Relief.
        </h1>
        <p className="text-slate-300 text-base mt-4 leading-relaxed">
          Dental emergencies cannot wait. Our on-call surgical team in Beverly Hills, Manhattan, and Zurich is available 24/7 for acute trauma, severe pain, and emergency tooth re-implantation.
        </p>

        {/* 1-Tap Emergency Hotline CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:8008432872"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-sm text-white bg-rose-600 hover:bg-rose-500 shadow-xl shadow-rose-900/40 transition-all active:scale-[0.98]"
          >
            <PhoneCall className="w-5 h-5 animate-bounce" />
            <span>CALL EMERGENCY DISPATCH: (800) 843-AURA</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-xs text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors"
          >
            Request Urgent Same-Day Slot Online
          </button>
        </div>
      </div>

      {/* Interactive Emergency Condition Selector & First-Aid Protocol */}
      <section className="p-6 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
        <div className="mb-6">
          <span className="font-mono text-xs text-rose-400 uppercase">IMMEDIATE FIRST-AID DECISION TREE</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Select Your Emergency Condition:
          </h2>
        </div>

        {/* Condition Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { id: 'knocked-out', label: 'Knocked-Out Tooth (Avulsion)' },
            { id: 'abscess', label: 'Severe Throbbing / Swelling' },
            { id: 'broken', label: 'Broken Tooth or Lost Crown' },
            { id: 'bleeding', label: 'Persistent Tissue Bleeding' },
          ].map((cond) => (
            <button
              key={cond.id}
              onClick={() => setSelectedEmergency(cond.id)}
              className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all ${
                selectedEmergency === cond.id
                  ? 'border-rose-500 bg-rose-950/40 text-white shadow-lg shadow-rose-950/30'
                  : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cond.label}
            </button>
          ))}
        </div>

        {/* Selected Protocol Display */}
        {emergencyProtocols[selectedEmergency] && (
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
              <h3 className="text-xl font-bold text-white">
                {emergencyProtocols[selectedEmergency].title}
              </h3>
              <span className="font-mono text-xs text-rose-400 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30">
                {emergencyProtocols[selectedEmergency].urgency}
              </span>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-slate-400 font-semibold uppercase block">
                Crucial Step-by-Step Instructions:
              </span>
              {emergencyProtocols[selectedEmergency].steps.map((st, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{st}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{emergencyProtocols[selectedEmergency].dangerWarning}</span>
            </div>
          </div>
        )}
      </section>

      {/* Instant Digital Emergency Intake Triage Form */}
      <section className="p-6 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-mono text-xs text-sky-400 uppercase">INSTANT DOCTOR NOTIFICATION</span>
            <h3 className="text-2xl font-bold text-white mt-1">Submit Emergency Triage Form</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Submitting this form immediately alerts our on-call dental surgeon pager system with your symptoms and contact number.
            </p>
          </div>

          {!triageSubmitted ? (
            <form onSubmit={handleTriageSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-200 block mb-1.5">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. David Miller"
                    value={triageForm.name}
                    onChange={(e) => setTriageForm({ ...triageForm, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-200 block mb-1.5">Direct Mobile Phone *</label>
                  <input
                    required
                    type="tel"
                    placeholder="(310) 555-0199"
                    value={triageForm.phone}
                    onChange={(e) => setTriageForm({ ...triageForm, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">Pain Severity (1 to 10)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={triageForm.painScale}
                    onChange={(e) => setTriageForm({ ...triageForm, painScale: e.target.value })}
                    className="flex-1 accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <span className="font-mono text-base font-bold text-rose-400 w-12 text-center">
                    {triageForm.painScale} / 10
                  </span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                  Describe Symptoms & When It Started *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Tooth knocked loose after collision; severe throbbing when drinking cold water..."
                  value={triageForm.symptoms}
                  onChange={(e) => setTriageForm({ ...triageForm, symptoms: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-rose-600 hover:bg-rose-500 transition-all shadow-lg shadow-rose-900/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Emergency Alert to On-Call Doctor</span>
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-white">Emergency Alert Dispatched</h4>
              <p className="text-xs text-slate-300">
                Our on-call surgeon has been paged. Please keep your phone <strong className="text-white font-mono">{triageForm.phone}</strong> active. You will receive an immediate callback within 5-10 minutes.
              </p>
              <div className="pt-2">
                <a
                  href="tel:8008432872"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call (800) 843-AURA Directly</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EmergencyPage;
