import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ArrowRight, RotateCcw, ShieldCheck, Heart, Clock, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

const QUESTIONS = [
  {
    id: 1,
    title: "What is your primary smile goal?",
    subtitle: "Select the primary enhancement or restorative need you wish to address.",
    options: [
      { id: 'whiten', text: 'Brighten discoloration & lift deep stains', tag: 'Aesthetic' },
      { id: 'align', text: 'Straighten teeth, close gaps or fix overlap', tag: 'Orthodontic' },
      { id: 'replace', text: 'Replace missing teeth or repair broken crowns', tag: 'Implantology' },
      { id: 'makeover', text: 'Full Hollywood smile transformation (Veneers)', tag: 'Cosmetic Studio' },
      { id: 'clean', text: 'Comprehensive exam, ultrasonic clean & health check', tag: 'Preventive' }
    ]
  },
  {
    id: 2,
    title: "What is your desired timeline?",
    subtitle: "We reserve VIP same-day slots for expedited cases and events.",
    options: [
      { id: 'immediate', text: 'Immediate • Within the next 7 days', tag: 'Priority' },
      { id: 'wedding', text: 'Preparing for a wedding, photoshoot, or event', tag: 'Target Date' },
      { id: 'short', text: 'Within the next 1 to 3 months', tag: 'Standard' },
      { id: 'exploring', text: 'Flexible timeline • Exploring options', tag: 'Consultation' }
    ]
  },
  {
    id: 3,
    title: "How do you feel about dental visits?",
    subtitle: "We tailor comfort protocols to your exact sensory preferences.",
    options: [
      { id: 'calm', text: 'Completely comfortable with routine visits', tag: 'Standard Suite' },
      { id: 'mild', text: 'A bit tense • Appreciate calm pacing & Bose audio', tag: 'Gentle Care' },
      { id: 'anxious', text: 'High dental anxiety • Interested in twilight / nitrous sedation', tag: 'Sedation Suite' }
    ]
  }
];

export default function SmileAssessmentQuiz({ onCompleteQuiz }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (optionId) => {
    const newAnswers = { ...answers, [QUESTIONS[currentStep].id]: optionId };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  // Derive personalized recommendation
  const getRecommendation = () => {
    const goal = answers[1];
    if (goal === 'makeover') {
      return {
        protocol: 'Handcrafted Porcelain Veneers & Digital Smile Design',
        doctor: 'Dr. Julian Sterling, DDS (Harvard Prosthodontist)',
        duration: '2 Visits (10 days total)',
        perk: '$250 First-Visit Clinical Assessment Credit Applied'
      };
    } else if (goal === 'align') {
      return {
        protocol: 'Invisalign® Diamond Plus Clear Aligner Protocol',
        doctor: 'Dr. Elena Vance, DMD, MS (UPenn Orthodontist)',
        duration: '6 to 9 Months with 3D ClinCheck',
        perk: 'Complimentary In-Office Laser Whitening Included'
      };
    } else if (goal === 'replace') {
      return {
        protocol: 'Swiss Straumann® 3D Guided Implant Architecture',
        doctor: 'Dr. Marcus Chen, DDS (Columbia Implant Surgeon)',
        duration: 'Same-day guided placement',
        perk: 'Lifetime Implant Integrity Warranty'
      };
    } else if (goal === 'whiten') {
      return {
        protocol: 'Philips Zoom!® Laser WhiteSpeed + Custom Take-Home Gel',
        doctor: 'Dr. Sofia Alvarez, DMD (Cosmetic & Restorative)',
        duration: 'Single 45-Minute Session',
        perk: 'Up to 8 shades brighter guarantee'
      };
    } else {
      return {
        protocol: 'Aura Concierge Ultrasonic Prophylaxis & 3D Scan',
        doctor: 'Senior Clinical Hygiene Team',
        duration: '60-Minute Comprehensive Visit',
        perk: 'Zero-Wait Lounge Guarantee'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="quiz" className="py-24 bg-gradient-to-b from-slate-50 to-teal-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            60-Second Smile Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Discover Your Personalized Smile Blueprint
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Answer 3 quick clinical questions to preview treatment protocols, timelines, and claim a courtesy consultation credit.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 relative overflow-hidden">
          
          {/* Progress Bar */}
          {!isFinished && (
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
                <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Completed</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-teal-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Question Stage */}
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                    {QUESTIONS[currentStep].title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {QUESTIONS[currentStep].subtitle}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {QUESTIONS[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option.id)}
                      className="w-full p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/50 transition-all text-left flex items-center justify-between group cursor-pointer"
                    >
                      <div className="pr-4">
                        <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-teal-900 block">
                          {option.text}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-teal-100 group-hover:text-teal-800">
                          {option.tag}
                        </span>
                        <div className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-teal-600 group-hover:bg-teal-600 flex items-center justify-center text-white transition-all">
                          <Check className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Results Stage */
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto shadow-inner">
                  <Award className="w-8 h-8 text-teal-700" />
                </div>

                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-teal-700">
                    Assessment Completed
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
                    Your Personalized Clinical Blueprint
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                    Based on your clinical goals and preferences, our senior specialists recommend the following concierge protocol:
                  </p>
                </div>

                {/* Recommendation Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-teal-900 text-white text-left shadow-lg space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-800 pb-4">
                    <div>
                      <p className="text-xs text-teal-300 uppercase tracking-wider font-semibold">Recommended Protocol</p>
                      <h4 className="text-lg sm:text-xl font-bold font-serif text-white">{rec.protocol}</h4>
                    </div>
                    <span className="self-start sm:self-center px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-semibold">
                      VIP Staging
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-teal-400 font-medium">Attending Specialist</p>
                      <p className="font-semibold text-white mt-0.5">{rec.doctor}</p>
                    </div>
                    <div>
                      <p className="text-teal-400 font-medium">Estimated Timeframe</p>
                      <p className="font-semibold text-white mt-0.5">{rec.duration}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-teal-800/80 border border-teal-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-teal-300 font-bold uppercase">Promo Voucher Included</p>
                      <p className="text-xs font-semibold text-white">Code: <span className="text-amber-300 font-mono tracking-wider">AURA-SMILE-250</span></p>
                    </div>
                    <span className="text-xs font-bold text-amber-300">{rec.perk}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => onCompleteQuiz && onCompleteQuiz(rec)}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-lg shadow-teal-700/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Claim Voucher & Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retake Quiz</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
