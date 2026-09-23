import React from 'react';
import { DentalToothIcon } from './VectorGraphic';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award, 
  Lock, 
  ArrowUpRight 
} from 'lucide-react';

export const Footer = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      {/* Upper Footer: Global Suites & Contact */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Narrative */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                <DentalToothIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white">AURA DENTAL SUITE</span>
                <span className="block text-[10px] font-mono text-sky-400 uppercase">
                  Biomimetic Architecture & Surgical Suite
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              An internationally accredited centre for complex reconstructive implantology, computer-guided bone regeneration, and microscopic porcelain cosmetic dentistry.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                AACD ACCREDITED
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                ICOI DIPLOMATE
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                ISO-13485 CERTIFIED
              </span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase font-mono text-xs tracking-wider">
              Clinical Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('treatments')} className="hover:text-white transition-colors">
                  Treatments & Surgeries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology')} className="hover:text-white transition-colors">
                  In-House Robotics & CBCT
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Smile Before & After
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-white transition-colors">
                  Surgeons & Specialists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">
                  Fee Schedule & Financing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('emergency')} className="text-rose-400 hover:text-rose-300 transition-colors">
                  24/7 Dental Emergency
                </button>
              </li>
            </ul>
          </div>

          {/* Global Suites */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase font-mono text-xs tracking-wider">
              Clinical Suites
            </h4>
            <div className="space-y-3 text-[11px]">
              <div>
                <strong className="text-slate-200 block">Beverly Hills Surgical Suite</strong>
                <p className="text-slate-400">9400 Wilshire Blvd, Suite 820</p>
                <p className="text-slate-400">Beverly Hills, CA 90212</p>
                <p className="text-sky-400 font-mono mt-0.5">(310) 843-9200</p>
              </div>
              <div>
                <strong className="text-slate-200 block">Manhattan Executive Suite</strong>
                <p className="text-slate-400">630 Fifth Ave, Suite 1940</p>
                <p className="text-slate-400">Rockefeller Center, NY 10111</p>
                <p className="text-sky-400 font-mono mt-0.5">(212) 581-3000</p>
              </div>
              <div>
                <strong className="text-slate-200 block">Zurich Medical District</strong>
                <p className="text-slate-400">Bahnhofstrasse 42</p>
                <p className="text-slate-400">8001 Zürich, Switzerland</p>
                <p className="text-sky-400 font-mono mt-0.5">+41 44 212 90 00</p>
              </div>
            </div>
          </div>

          {/* Operating Hours & Emergency */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase font-mono text-xs tracking-wider">
              Clinical Hours
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span>Mon – Thu:</span>
                <span className="text-white font-mono">7:30 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span className="text-white font-mono">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-mono">9:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between text-rose-400 font-semibold pt-1 border-t border-slate-900">
                <span>Emergency 24/7:</span>
                <span className="font-mono">On-Call Surgical Team</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-sm"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Compliance Strip */}
      <div className="border-t border-slate-900 py-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-teal-400" />
          <span>HIPAA Compliant • 256-bit SSL Encrypted Telehealth • OSHA Infection Control Level 4</span>
        </div>

        <div>
          © {new Date().getFullYear()} Aura Advanced Dental Architecture & Surgical Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
