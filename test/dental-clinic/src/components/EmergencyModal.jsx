import { motion } from 'motion/react';
import { X, ShieldAlert, Phone, Clock, AlertCircle, ArrowRight, MapPin } from 'lucide-react';

export default function EmergencyModal({ isOpen, onClose, onScheduleEmergency }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-rose-200 overflow-hidden my-8"
      >
        {/* Urgent Header */}
        <div className="p-6 bg-rose-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">Same-Day Dental Emergency</h3>
              <p className="text-xs text-rose-100 font-medium">On-Call Surgical Team • San Francisco</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-rose-200 hover:text-white hover:bg-rose-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs sm:text-sm text-rose-950 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Immediate Doctor Hotline is Active</p>
              <p className="mt-0.5 text-rose-800">
                If you are experiencing severe acute pain, swelling, or facial trauma, call our priority clinical triage team directly.
              </p>
            </div>
          </div>

          {/* Quick Call Action */}
          <a
            href="tel:4153827645"
            className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-rose-600/30 transition-all text-center"
          >
            <Phone className="w-5 h-5" />
            <span>Call (415) 382-SMILE Now</span>
          </a>

          {/* Emergency First-Aid Guidelines */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Immediate Critical First-Aid Steps
            </h4>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <p className="font-bold text-slate-900">Knocked-Out Permanent Tooth:</p>
              <p className="text-slate-600">
                Hold only by the crown (never touch the root). Place in cold milk or in cheek pouch. Arrive within 60 minutes for highest reimplantation survival.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <p className="font-bold text-slate-900">Severe Throbbing Nerve Pain / Abscess:</p>
              <p className="text-slate-600">
                Rinse gently with warm salt water. Do not apply aspirin directly to gums (causes acid burn). Take ibuprofen and head to our clinic.
              </p>
            </div>
          </div>

          {/* Location & Priority Reservation */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>450 Sutter St, Suite 1400 (Union Square)</span>
            </span>

            <button
              onClick={() => {
                onClose();
                onScheduleEmergency();
              }}
              className="text-teal-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Book Emergency Slot Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
