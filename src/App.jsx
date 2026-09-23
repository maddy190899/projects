import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { AuraGridBackground } from './components/VectorGraphic';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { SmileGalleryPage } from './pages/SmileGalleryPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { PricingPage } from './pages/PricingPage';
import { EmergencyPage } from './pages/EmergencyPage';

import { PhoneCall, ShieldAlert, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeLocation, setActiveLocation] = useState('Beverly Hills');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedTreatment, setPreSelectedTreatment] = useState(null);
  const [preSelectedDoctor, setPreSelectedDoctor] = useState(null);
  const [toast, setToast] = useState(null);

  // Sync with browser URL hash for true multi-page deep linking & history navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'treatments', 'technology', 'gallery', 'doctors', 'pricing', 'emergency'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 4000);
  };

  const handleOpenBooking = (treatment = null, doctor = null) => {
    setPreSelectedTreatment(treatment);
    setPreSelectedDoctor(doctor);
    setIsBookingOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden">
        {/* Subtle Ambient Procedural Vectors & Radial Glows */}
        <AuraGridBackground />

        {/* Top Atmosphere Light Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-sky-500/15 via-teal-500/08 to-transparent blur-3xl pointer-events-none" />

        {/* Global Navigation Header */}
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
          activeLocation={activeLocation}
          onChangeLocation={(loc) => {
            setActiveLocation(loc);
            showToast(`Active Suite switched to ${loc}`);
          }}
        />

        {/* Main Multi-Page View Container */}
        <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          {currentPage === 'home' && (
            <HomePage
              onOpenBooking={() => handleOpenBooking()}
              onNavigate={handleNavigate}
              onPreSelectTreatment={(t) => handleOpenBooking(t)}
            />
          )}

          {currentPage === 'treatments' && (
            <TreatmentsPage
              onOpenBooking={() => handleOpenBooking()}
              onPreSelectTreatment={(t) => handleOpenBooking(t)}
            />
          )}

          {currentPage === 'technology' && (
            <TechnologyPage
              onOpenBooking={() => handleOpenBooking()}
            />
          )}

          {currentPage === 'gallery' && (
            <SmileGalleryPage
              onOpenBooking={() => handleOpenBooking()}
              onPreSelectTreatment={(t) => handleOpenBooking(t)}
            />
          )}

          {currentPage === 'doctors' && (
            <DoctorsPage
              onOpenBooking={() => handleOpenBooking()}
              onPreSelectDoctor={(d) => handleOpenBooking(null, d)}
            />
          )}

          {currentPage === 'pricing' && (
            <PricingPage
              onOpenBooking={() => handleOpenBooking()}
              onPreSelectTreatment={(t) => handleOpenBooking(t)}
            />
          )}

          {currentPage === 'emergency' && (
            <EmergencyPage
              onOpenBooking={() => handleOpenBooking('Emergency Triage & Pain Relief')}
            />
          )}
        </main>

        {/* Floating Emergency Triage Quick Access Button */}
        {currentPage !== 'emergency' && (
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={() => handleNavigate('emergency')}
              className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-2xl shadow-rose-950/60 border border-rose-400/40 transition-all hover:scale-105 active:scale-95"
            >
              <ShieldAlert className="w-4 h-4 animate-bounce" />
              <span>24/7 Dental Emergency</span>
            </button>
          </div>
        )}

        {/* Global Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialTreatment={preSelectedTreatment}
        />

        {/* System Toast Notification */}
        {toast && (
          <div className="fixed bottom-6 left-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 border border-sky-500/40 text-xs text-white shadow-2xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span>{toast}</span>
          </div>
        )}
      </div>
    </SmoothScroll>
  );
}
