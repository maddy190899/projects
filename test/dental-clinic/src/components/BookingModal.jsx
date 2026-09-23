import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  Building,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

const SERVICES = [
  'Porcelain Veneers & Smile Makeover',
  'Swiss Straumann® Dental Implant',
  'Invisalign® 3D ClinCheck Scan',
  'Concierge Prophylaxis & Exam',
  'Philips Zoom! Laser Whitening',
  'Emergency Dental Relief (Today)'
];

const DOCTORS = [
  'First Available Ivy League Specialist',
  'Dr. Julian Sterling, DDS (Prosthodontist)',
  'Dr. Elena Vance, DMD (Orthodontist)',
  'Dr. Marcus Chen, DDS (Implant Surgeon)',
  'Dr. Sofia Alvarez, DMD (Biomimetic Aesthetics)'
];

const TIME_SLOTS = [
  '9:00 AM',
  '10:30 AM',
  '11:45 AM',
  '1:30 PM',
  '3:15 PM',
  '4:45 PM'
];

export default function BookingModal({ isOpen, onClose, initialData = null }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(SERVICES[0]);
  const [doctor, setDoctor] = useState(DOCTORS[0]);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 9:00 AM');
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insurance: 'Delta Dental PPO',
    anxietyPref: 'None (Standard)',
    notes: ''
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (initialData.procedure) setService(initialData.procedure);
      if (initialData.doctor) setDoctor(initialData.doctor);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  const handleClose = () => {
    setIsConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
      >
        {/* Header Bar */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
              <Calendar className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">Reserve Concierge Visit</h3>
              <p className="text-xs text-teal-300 font-medium">Aura Dental Studio • San Francisco</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isConfirmed ? (
          <div className="p-6 sm:p-8">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step === 1 ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'}`}>1</span>
                <span className="text-xs font-semibold text-slate-700">Treatment</span>
              </div>
              <div className="w-8 h-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step === 2 ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'}`}>2</span>
                <span className="text-xs font-semibold text-slate-700">Doctor & Time</span>
              </div>
              <div className="w-8 h-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step === 3 ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'}`}>3</span>
                <span className="text-xs font-semibold text-slate-700">Your Info</span>
              </div>
            </div>

            {/* Step 1: Treatment */}
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Select Requested Procedure
                </h4>
                <div className="space-y-2">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv}
                      onClick={() => setService(srv)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        service === srv
                          ? 'border-teal-600 bg-teal-50/70 text-teal-950 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{srv}</span>
                      {service === srv && <Check className="w-4 h-4 text-teal-700" />}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Next: Select Doctor & Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Doctor & Time */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Attending Specialist
                  </h4>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-teal-600 bg-slate-50"
                  >
                    {DOCTORS.map((doc) => (
                      <option key={doc} value={doc}>{doc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Available Appointment Times
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          selectedTime === t
                            ? 'border-teal-600 bg-teal-700 text-white'
                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200/80 text-xs text-teal-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Includes complimentary Trios 5 digital 3D scans & bite telemetry analysis.</span>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 rounded-xl text-slate-600 text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Next: Patient Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Patient Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Katherine Reynolds"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="katherine@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(415) 890-2345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Dental Insurance
                    </label>
                    <input
                      type="text"
                      placeholder="Delta Dental, Cigna, MetLife, or Self-Pay"
                      value={formData.insurance}
                      onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Sensory / Anxiety Comfort
                    </label>
                    <select
                      value={formData.anxietyPref}
                      onChange={(e) => setFormData({ ...formData, anxietyPref: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-teal-600 bg-white"
                    >
                      <option value="None (Standard)">Standard Luxury Suite</option>
                      <option value="Bose Noise Canceling">Bose Noise Canceling Headphones</option>
                      <option value="Nitrous Sedation">Nitrous Oxide (Laughing Gas)</option>
                      <option value="Twilight Sleep">Twilight IV Conscious Sedation</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 rounded-xl text-slate-600 text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-teal-700/20"
                  >
                    <span>Confirm Consultation</span>
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-700">
                Reservation Confirmed
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                A confirmation text & calendar invite have been sent to <span className="font-semibold text-slate-900">{formData.phone || '(415) 890-2345'}</span>.
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900 text-right">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-bold text-slate-900 text-right">{doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time:</span>
                <span className="font-bold text-teal-700 text-right">{selectedTime} Tomorrow</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-bold text-slate-900 text-right">450 Sutter St, Suite 1400, SF</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
