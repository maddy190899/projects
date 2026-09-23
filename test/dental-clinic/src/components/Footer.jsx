import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  Heart,
  Car
} from 'lucide-react';
import { DentalLogo } from './VectorGraphic';

const FAQS = [
  {
    question: "Do porcelain veneers ruin or damage my natural teeth?",
    answer: "No. At Aura Dental, we specialize in 'minimal-prep' or 'prepless' porcelain veneers. Using 3D digital planning and Carl Zeiss surgical microscopes, we only polish the micro-surface of your enamel (typically 0.2mm to 0.3mm—roughly the thickness of a contact lens). Over 95% of your natural, healthy enamel remains intact."
  },
  {
    question: "Is dental implant surgery painful?",
    answer: "Most patients are amazed to learn that dental implant placement involves less discomfort than a routine extraction! We utilize the computer-regulated Wand® STA anesthesia and 3D robotic surgical stents, meaning the implant is positioned precisely without large surgical incisions. We also offer nitrous oxide and twilight sedation for complete relaxation."
  },
  {
    question: "Which insurance plans do you accept?",
    answer: "We are an in-network or preferred premier provider for major PPO insurances, including Delta Dental Premier/PPO, MetLife, Cigna DPPO, Guardian, and Aetna. For patients without insurance, we offer our Aura In-House Dental Club (20% off all care) and 0% APR financing through CareCredit® and LendingClub."
  },
  {
    question: "Where is Aura Dental located, and is parking validated?",
    answer: "We are located at 450 Sutter Street, Suite 1400, in the historic medical-dental skyscraper just two blocks from Union Square, San Francisco. We provide 2 hours of validated valet parking directly in the 450 Sutter Garage for all surgical and cosmetic appointments."
  },
  {
    question: "What constitutes a dental emergency, and do you take same-day patients?",
    answer: "Severe toothaches, chipped or knocked-out front teeth, broken crowns, or swollen gums are considered dental emergencies. We reserve designated VIP emergency slots every day from 8:00 AM to 7:00 PM. Call our emergency hotline at (415) 382-SMILE for immediate same-day relief."
  }
];

export default function Footer({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <footer className="bg-slate-950 text-white relative border-t border-slate-800">
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-800">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Frequently Asked Clinical Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Answers for Your Peace of Mind
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Everything you need to know about our biological dental techniques, pricing, and comfort suites.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-semibold text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-400 shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Main Clinic Directory & Hours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-900/60 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <DentalLogo className="w-6 h-6" light />
              </div>
              <div>
                <span className="text-lg font-bold font-serif tracking-tight text-white block">
                  AURA DENTAL STUDIO
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-teal-400 block">
                  Advanced Implantology & Aesthetics
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              San Francisco&apos;s premier boutique dental clinic combining Swiss robotic implants, artisan veneers, and sensory comfort suites. Designed to eliminate dental fear forever.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium">ADA Member</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium">AACD Fellow</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium">ICOI Diplomate</span>
            </div>
          </div>

          {/* Col 2: Clinic Location & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
              San Francisco Studio
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>450 Sutter St, Suite 1400, San Francisco, CA 94108 (Union Square Medical Bldg)</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Car className="w-4 h-4 text-teal-400 shrink-0" />
                <span>2-Hour Validated Valet Parking on Premises</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:4153827645" className="hover:text-white transition-colors">(415) 382-SMILE / (415) 382-7645</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:concierge@auradental.com" className="hover:text-white transition-colors">concierge@auradental.com</a>
              </p>
            </div>
          </div>

          {/* Col 3: Clinical Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
              Hours of Care
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Monday – Thursday:</span>
                <span className="font-semibold text-white">8:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span className="font-semibold text-white">8:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-semibold text-white">9:00 AM – 3:00 PM</span>
              </div>
              <div className="flex justify-between text-teal-400 pt-1 border-t border-slate-800">
                <span>Sunday Emergencies:</span>
                <span className="font-bold">On-Call Priority</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs transition-all cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Aura Dental Studio & Implantology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">HIPAA Compliance</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Accessibility</a>
          </div>
        </div>

      </div>

    </footer>
  );
}
