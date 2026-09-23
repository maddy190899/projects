import React, { useState } from 'react';
import { DentalToothIcon } from './VectorGraphic';
import { 
  PhoneCall, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  ShieldAlert, 
  ChevronDown, 
  Sparkles 
} from 'lucide-react';

export const Navigation = ({
  currentPage = 'home',
  onNavigate,
  onOpenBooking,
  activeLocation = 'Beverly Hills',
  onChangeLocation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Treatments & Surgeries' },
    { id: 'technology', label: 'Technology Lab' },
    { id: 'gallery', label: 'Smile Gallery' },
    { id: 'doctors', label: 'Specialists' },
    { id: 'pricing', label: 'Pricing & Financing' },
    { id: 'emergency', label: '24/7 Emergency', highlight: true },
  ];

  const locations = [
    { city: 'Beverly Hills', address: '9400 Wilshire Blvd, Suite 820', phone: '(310) 843-9200' },
    { city: 'Manhattan', address: '630 Fifth Ave, Rockefeller Center', phone: '(212) 581-3000' },
    { city: 'Zurich', address: 'Bahnhofstrasse 42, 8001 Zürich', phone: '+41 44 212 90 00' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      {/* Top Clinical Utility Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 border-b border-slate-900 text-[11px] font-mono text-slate-400 bg-slate-950/90 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Suite: <strong className="text-white">{activeLocation}</strong></span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>

            {locationDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50">
                {locations.map((loc) => (
                  <button
                    key={loc.city}
                    onClick={() => {
                      onChangeLocation(loc.city);
                      setLocationDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-colors ${
                      activeLocation === loc.city ? 'bg-sky-500/10 text-sky-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-bold">{loc.city}</div>
                    <div className="text-[10px] text-slate-400 truncate">{loc.address}</div>
                    <div className="text-[10px] text-sky-400 mt-0.5">{loc.phone}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPERATING THEATRES: ACTIVE</span>
          </div>

          <div className="text-slate-500 hidden lg:inline-block">
            ISO-13485 ACCREDITED • IN-HOUSE 5-AXIS CEREC ROBOTICS
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('emergency')}
            className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Emergency Hotline: (800) 843-AURA</span>
          </button>
          <a
            href="tel:3108439200"
            className="text-slate-300 hover:text-white transition-colors"
          >
            (310) 843-9200
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-teal-500/10 border border-sky-500/30 flex items-center justify-center transition-transform group-hover:scale-105">
            <DentalToothIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
              <span>AURA</span>
              <span className="font-normal text-xs text-sky-400 tracking-wider">DENTAL SUITE</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest hidden sm:block">
              Architecture & Surgical Institute
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all py-1.5 px-1 relative ${
                  isActive
                    ? 'text-sky-400 font-bold'
                    : link.highlight
                    ? 'text-rose-400 hover:text-rose-300'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Triggers */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 transition-all shadow-md shadow-sky-500/20 active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950 px-6 py-6 space-y-4">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left p-3 rounded-xl text-sm font-medium transition-all ${
                  currentPage === link.id
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    : link.highlight
                    ? 'text-rose-400 hover:bg-rose-950/20'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-sky-500 hover:bg-sky-400 text-center"
            >
              Book Consultation Now
            </button>
            <a
              href="tel:8008432872"
              className="block w-full py-2.5 rounded-xl font-mono text-xs text-rose-300 bg-rose-950/40 border border-rose-500/30 text-center"
            >
              Emergency Hotline: (800) 843-AURA
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
