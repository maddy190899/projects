import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Download,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DentalToothIcon } from './VectorGraphic';

export const BookingModal = ({ isOpen, onClose, initialTreatment = null }) => {
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState(initialTreatment || 'Cosmetic Smile Consultation (Veneers / DSD)');
  const [location, setLocation] = useState('Beverly Hills • 9400 Wilshire Blvd');
  const [doctor, setDoctor] = useState('Dr. Elena Rostova, DMD (Aesthetic Prosthodontics)');
  const [selectedDate, setSelectedDate] = useState('2026-09-28');
  const [selectedTime, setSelectedTime] = useState('10:15 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sedationPref: 'Local Anesthesia Only',
    insurance: 'Self-Pay / CareCredit 0% Financing',
    notes: ''
  });
  const [bookingRef, setBookingRef] = useState(null);

  if (!isOpen) return null;

  const treatments = [
    { name: 'Cosmetic Smile Consultation (Veneers / DSD)', fee: 'Complimentary Digital Scan' },
    { name: 'Guided Dental Implant Evaluation & 3D CBCT', fee: 'Full Volumetric Mapping' },
    { name: 'Diamond Apex Invisalign® Airway Analysis', fee: '3Shape TRIOS 5 Scan' },
    { name: 'BIOLASE Laser Periodontic Assessment', fee: 'Hydrophotonic Exam' },
    { name: 'Emergency Triage & Immediate Pain Relief', fee: 'Priority Same-Day Slot' },
    { name: 'Routine 3D Diagnostic & Biofilm Hygiene', fee: 'Airflow Therapy' }
  ];

  const locations = [
    { name: 'Beverly Hills • 9400 Wilshire Blvd, Suite 820', phone: '(310) 843-9200' },
    { name: 'Manhattan • 630 Fifth Ave, Rockefeller Center', phone: '(212) 581-3000' },
    { name: 'Zurich Medical District • Bahnhofstrasse 42', phone: '+41 44 212 90 00' }
  ];

  const doctors = [
    'Dr. Elena Rostova, DMD, FAACD (Aesthetic Prosthodontics)',
    'Dr. Alistair Vance, DDS, MS, FICOI (Chief Implant Surgeon)',
    'Dr. Marcus Sterling, DDS, MS (Airway Orthodontics)',
    'Dr. Claire Chen, DDS (Board Certified Periodontist)',
    'First Available Senior Clinical Specialist'
  ];

  const timeSlots = [
    '09:00 AM', '10:15 AM', '11:30 AM', '01:45 PM', '03:00 PM', '04:15 PM', '05:30 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'AURA-2026-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);
    setStep(4);
  };

  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Aura Dental Suite//NONSGML v1.0//EN\nBEGIN:VEVENT\nSUMMARY:Aura Dental Consultation - ${treatment}\nDESCRIPTION:Appointment with ${doctor} at ${location}. Reference: ${bookingRef}\nDTSTART:20260928T101500Z\nDTEND:20260928T111500Z\nLOCATION:${location}\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `aura-appointment-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-700/80 bg-slate-900 shadow-2xl p-6 sm:p-8 my-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-5 mb-6 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
            <DentalToothIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">VIP Clinical Consultation Booking</h3>
            <p className="text-xs text-slate-400 font-mono">
              AURA ADVANCED DENTAL SUITE • ENCRYPTED PATIENT PORTAL
            </p>
          </div>
        </div>

        {/* Wizard Steps Indicator */}
        {step < 4 && (
          <div className="flex items-center justify-between mb-8 px-2">
            {[
              { num: 1, label: 'Procedure' },
              { num: 2, label: 'Doctor & Date' },
              { num: 3, label: 'Patient Info' },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                    step === s.num
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                      : step > s.num
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {s.num}
                </div>
                <span className={`text-xs font-medium ${step === s.num ? 'text-white' : 'text-slate-400'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Select Procedure */}
        {step === 1 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">
              Select Your Primary Clinical Focus:
            </h4>
            <div className="space-y-2.5 mb-6">
              {treatments.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setTreatment(t.name)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-xs transition-all ${
                    treatment === t.name
                      ? 'border-sky-500 bg-sky-950/40 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="font-medium">{t.name}</span>
                  <span className="text-[11px] font-mono text-sky-400">{t.fee}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-sky-500 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/25"
              >
                <span>Continue to Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Location, Doctor & Timeslot */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-2">
                Select Suite Location:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {locations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setLocation(loc.name)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      location === loc.name
                        ? 'border-sky-500 bg-sky-950/40 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[11px] mb-1">
                      <MapPin className="w-3 h-3" />
                      {loc.name.split('•')[0]}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{loc.phone}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-2">
                Specialist / Surgeon Preference:
              </label>
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
              >
                {doctors.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-2">
                  Preferred Date:
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-09-24"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-2">
                  Available Time Slots:
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {timeSlots.map((ts) => (
                    <button
                      key={ts}
                      onClick={() => setSelectedTime(ts)}
                      className={`py-2 rounded-lg text-[11px] font-mono transition-all ${
                        selectedTime === ts
                          ? 'bg-sky-500 text-white font-semibold'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {ts}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-sky-500 hover:bg-sky-400 transition-all shadow-md shadow-sky-500/25"
              >
                <span>Continue to Patient Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Patient Form & Sedation Options */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Victoria Sterling"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="victoria@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">Mobile Phone *</label>
                <input
                  required
                  type="tel"
                  placeholder="(310) 555-0192"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">Sedation Preference</label>
                <select
                  value={formData.sedationPref}
                  onChange={(e) => setFormData({ ...formData, sedationPref: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                >
                  <option value="Local Anesthesia Only">Local Anesthesia (No Sedation)</option>
                  <option value="Nitrous Oxide (Laughing Gas)">Nitrous Oxide (Conscious Calm)</option>
                  <option value="Oral Conscious Sedation">Oral Conscious Sedation (Twilight)</option>
                  <option value="Board-Certified MD IV Sedation">Board-Certified MD Deep Twilight IV Sedation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-1.5">Insurance / Billing Method</label>
              <select
                value={formData.insurance}
                onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
              >
                <option value="Self-Pay / CareCredit 0% Financing">Self-Pay / CareCredit 0% APR Financing</option>
                <option value="Aura VIP Concierge Membership Member">Aura VIP Concierge Membership</option>
                <option value="Delta Dental Premier PPO">Delta Dental Premier PPO</option>
                <option value="Cigna Dental Radius PPO">Cigna Dental Radius PPO</option>
                <option value="MetLife PDP Plus">MetLife PDP Plus</option>
                <option value="Guardian DentalGuard">Guardian DentalGuard</option>
                <option value="Out-of-Network Private Concierge Claim">Out-of-Network Private Concierge Claim</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                Clinical Notes / Dental History (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention any existing veneers, past root canals, or specific aesthetic desires..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="flex justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 transition-all shadow-lg shadow-sky-500/25"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Confirm & Lock Appointment</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Confirmed State */}
        {step === 4 && (
          <div className="text-center py-4 space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                RESERVATION CONFIRMED
              </span>
              <h4 className="text-2xl font-bold text-white mt-2">Appointment Secured</h4>
              <p className="text-xs font-mono text-sky-400 mt-1">REFERENCE CODE: {bookingRef}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Patient:</span>
                <span className="text-white font-medium">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Procedure:</span>
                <span className="text-sky-300 font-medium">{treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Surgeon:</span>
                <span className="text-slate-200 font-medium">{doctor.split('(')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Date & Slot:</span>
                <span className="text-teal-300 font-mono">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Suite:</span>
                <span className="text-slate-200 truncate">{location}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={downloadICS}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Add to Apple / Google Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-sky-500 hover:bg-sky-400 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
