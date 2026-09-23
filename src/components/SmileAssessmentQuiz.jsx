import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RefreshCcw, Stethoscope } from 'lucide-react';

export const SmileAssessmentQuiz = ({ onBookWithPlan }) => {
  const [step, setStep] = useState(1);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [timeline, setTimeline] = useState('');
  const [anxietyLevel, setAnxietyLevel] = useState('low');
  const [recommendation, setRecommendation] = useState(null);

  const concernsList = [
    { id: 'discoloration', label: 'Deep Staining / Fluorosis', badge: 'Aesthetic' },
    { id: 'chipped', label: 'Chipped / Worn Incisal Edges', badge: 'Structural' },
    { id: 'missing', label: 'Missing Tooth / Failing Bridge', badge: 'Implant' },
    { id: 'crowding', label: 'Crowded / Crooked Teeth', badge: 'Orthodontic' },
    { id: 'gummy', label: 'Excessive Gingival Display (Gummy Smile)', badge: 'Periodontic' },
    { id: 'tmj', label: 'Jaw Clenching / TMJ Pain / Wear', badge: 'Functional' },
  ];

  const handleToggleConcern = (id) => {
    setSelectedConcerns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleGeneratePlan = () => {
    let recs = [];
    if (selectedConcerns.includes('missing')) {
      recs.push({
        title: 'Computer-Guided Titanium / Zirconia Implant',
        tech: 'Planmeca 3D CBCT + 5-Axis Zirconia Milling',
        visits: '2 Visits (Immediate Provisional Load)',
        code: 'D6010'
      });
    }
    if (selectedConcerns.includes('discoloration') || selectedConcerns.includes('chipped')) {
      recs.push({
        title: 'Micro-Thin Hand-Layered Feldspathic Porcelain Veneers',
        tech: 'Digital Smile Design (DSD) Biometric Mapping',
        visits: '2 Visits (Zero Sensitivity Protocol)',
        code: 'D2962'
      });
    }
    if (selectedConcerns.includes('crowding')) {
      recs.push({
        title: 'Diamond Apex Invisalign® Airway Orthodontics',
        tech: '3Shape TRIOS 5 3D Optical Scan',
        visits: 'Predictable 4-9 Months Accelerated Trajectory',
        code: 'D8090'
      });
    }
    if (selectedConcerns.includes('gummy')) {
      recs.push({
        title: 'BIOLASE Waterlase Hydrophotonic Laser Gingival Recontouring',
        tech: '2780nm Er,Cr:YSGG Cold Laser (No Scalpels, No Sutures)',
        visits: '1 Visit (Same-Day Rapid Epithelial Healing)',
        code: 'D4212'
      });
    }
    if (recs.length === 0) {
      recs.push({
        title: 'Comprehensive 3D Digital Diagnostic & Guided Biofilm Therapy',
        tech: 'Airflow Prophylaxis Master + AI Caries Segmentation',
        visits: '1 Visit (60 Minutes Comprehensive Consultation)',
        code: 'D0150'
      });
    }

    setRecommendation({
      treatments: recs,
      sedationAdvised: anxietyLevel === 'high' ? 'IV Twilight Sleep Sedation (Board-Certified MD)' : 'Local Anesthetic with NuCalm Neuro-Acoustic Relaxation',
      estimatedDays: timeline === 'immediate' ? 'Express 72-Hour Turnaround Available' : 'Custom Curated Timeline'
    });
    setStep(3);
  };

  const resetQuiz = () => {
    setSelectedConcerns([]);
    setTimeline('');
    setAnxietyLevel('low');
    setRecommendation(null);
    setStep(1);
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-sky-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Virtual Smile Architecture Simulator</h3>
            <p className="text-xs text-slate-400">Algorithmic clinical pathway based on your biometric priorities</p>
          </div>
        </div>

        <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-800 text-sky-400 border border-slate-700">
          Step {step} of 3
        </span>
      </div>

      {step === 1 && (
        <div>
          <h4 className="text-sm font-semibold text-slate-200 mb-3">
            Select any smile characteristics or clinical symptoms you would like to address:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {concernsList.map((item) => {
              const active = selectedConcerns.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => handleToggleConcern(item.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-xs transition-all ${
                    active
                      ? 'border-sky-500 bg-sky-950/40 text-white shadow-md shadow-sky-950/30'
                      : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center ${
                        active ? 'border-sky-400 bg-sky-500 text-white' : 'border-slate-600'
                      }`}
                    >
                      {active && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              disabled={selectedConcerns.length === 0}
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <span>Next: Comfort & Preferences</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="space-y-5 mb-6">
            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-2">
                Desired Treatment Timeline:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'immediate', label: 'Immediate / Next 2 Weeks' },
                  { id: 'month', label: 'Within 1-2 Months' },
                  { id: 'flexible', label: 'Exploring Options / Flexible' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTimeline(t.id)}
                    className={`p-3 rounded-xl border text-xs text-center transition-all ${
                      timeline === t.id
                        ? 'border-sky-500 bg-sky-950/40 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-2">
                Dental Anxiety & Comfort Level:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'low', label: 'Relaxed (Local Anesthesia)' },
                  { id: 'moderate', label: 'Mild Anxiety (Nitrous Oxide)' },
                  { id: 'high', label: 'High Phobia (IV Twilight Sleep)' },
                ].map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setAnxietyLevel(a.id)}
                    className={`p-3 rounded-xl border text-xs text-center transition-all ${
                      anxietyLevel === a.id
                        ? 'border-teal-500 bg-teal-950/40 text-teal-200 font-semibold'
                        : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
            >
              Back
            </button>
            <button
              disabled={!timeline}
              onClick={handleGeneratePlan}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 disabled:opacity-40 transition-all shadow-md shadow-sky-500/20"
            >
              <span>Synthesize Clinical Protocol</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 3 && recommendation && (
        <div className="space-y-5">
          <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-sky-400 uppercase font-semibold">
                Synthesized Treatment Architecture
              </span>
              <span className="text-[10px] font-mono text-slate-400">{recommendation.estimatedDays}</span>
            </div>

            <div className="space-y-3 mt-3">
              {recommendation.treatments.map((tr, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold text-white">{tr.title}</h5>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded">
                      {tr.code}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Tech: {tr.tech}</div>
                  <div className="text-[11px] text-teal-400 mt-0.5">Timeline: {tr.visits}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Sedation Strategy:</span>
              <span className="text-teal-300 font-semibold">{recommendation.sedationAdvised}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Recalculate Priorities</span>
            </button>

            <button
              onClick={() => onBookWithPlan && onBookWithPlan(recommendation)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 transition-all shadow-lg shadow-sky-500/25"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Lock Priority Consultation with this Protocol</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmileAssessmentQuiz;
