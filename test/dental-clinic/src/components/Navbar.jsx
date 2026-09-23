import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Clock, MapPin, Menu, X, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { DentalLogo } from './VectorGraphic';

export default function Navbar({ onOpenBooking, onEmergencyClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Procedures', href: '#treatments' },
    { label: 'Before & After', href: '#before-after' },
    { label: '3D Diagnostics', href: '#technology' },
    { label: 'Cost Estimator', href: '#cost-estimator' },
    { label: 'Specialists', href: '#specialists' },
    { label: 'Patient Stories', href: '#reviews' },
    { label: 'Smile Quiz', href: '#quiz' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      
      {/* Top Clinical Status & Emergency Bar */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-bold">Open Today:</span>
              <span className="text-slate-300 hidden sm:inline">8:00 AM – 7:00 PM • Same-Day Dental Emergencies</span>
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>450 Sutter St, Union Square, SF</span>
            </span>

            <a
              href="tel:4153827645"
              className="flex items-center gap-1.5 text-teal-300 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>(415) 382-SMILE</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
          : 'bg-white/70 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/70 flex items-center justify-center text-teal-700 shadow-sm group-hover:scale-105 transition-transform">
              <DentalLogo className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold font-serif tracking-tight text-slate-900 block leading-tight">
                AURA DENTAL
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-teal-700 block">
                Studio & Advanced Implants
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-teal-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Triggers */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onEmergencyClick}
              className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200/80 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              <span>Emergency</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-700/20 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Book Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-teal-700 text-white text-xs font-semibold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl space-y-4"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-slate-800 py-1.5 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-teal-700 text-white font-semibold text-sm shadow-md"
                >
                  Schedule Appointment
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEmergencyClick();
                  }}
                  className="w-full py-3 rounded-xl bg-rose-50 text-rose-700 font-semibold text-sm border border-rose-200"
                >
                  Dental Emergency Care (Same-Day)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}
