import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import InteractiveHero from './components/InteractiveHero';
import InteractiveCards from './components/InteractiveCards';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ToothVisualizer from './components/ToothVisualizer';
import TechnologySuite from './components/TechnologySuite';
import CostEstimator from './components/CostEstimator';
import Specialists from './components/Specialists';
import SmileAssessmentQuiz from './components/SmileAssessmentQuiz';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import EmergencyModal from './components/EmergencyModal';
import { Calendar, PhoneCall, Sparkles, ShieldAlert } from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingData(data);
    setBookingOpen(true);
  };

  const handleOpenEmergency = () => {
    setEmergencyOpen(true);
  };

  const handleQuizComplete = (rec) => {
    handleOpenBooking({
      procedure: rec.protocol,
      doctor: rec.doctor
    });
  };

  const handleTreatmentSelect = (treatment) => {
    handleOpenBooking({
      procedure: treatment.title
    });
  };

  const handleDoctorSelect = (doctor) => {
    handleOpenBooking({
      doctor: `${doctor.name} (${doctor.role.split('•')[0].trim()})`
    });
  };

  const handleEstimateSelect = (estimate) => {
    handleOpenBooking({
      procedure: estimate.procedure,
      notes: `Estimated Insurance Plan: ${estimate.plan}. Out-of-pocket: $${estimate.estimatedTotal} ($${estimate.monthly}/mo)`
    });
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
        
        {/* Navigation */}
        <Navbar 
          onOpenBooking={() => handleOpenBooking()} 
          onEmergencyClick={handleOpenEmergency} 
        />

        {/* Hero Section */}
        <main>
          <InteractiveHero 
            onOpenBooking={() => handleOpenBooking()}
            onTakeQuiz={() => {
              const el = document.getElementById('quiz');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Curated Procedures (Bento Grid) */}
          <InteractiveCards onSelectTreatment={handleTreatmentSelect} />

          {/* Before & After Transformations Slider */}
          <BeforeAfterSlider onBookConsultation={() => handleOpenBooking()} />

          {/* Interactive Tooth Anatomy & Diagnostics */}
          <ToothVisualizer onBookConsultation={() => handleOpenBooking()} />

          {/* Technology & Sensory Comfort Retreat */}
          <TechnologySuite onBookConsultation={() => handleOpenBooking()} />

          {/* Treatment Cost & Insurance Estimator */}
          <CostEstimator onBookWithEstimate={handleEstimateSelect} />

          {/* Specialists & Ivy League Faculty */}
          <Specialists onBookDoctor={handleDoctorSelect} />

          {/* 60-Second Smile Assessment Quiz */}
          <SmileAssessmentQuiz onCompleteQuiz={handleQuizComplete} />

          {/* Verified Patient Stories */}
          <ReviewsSection />
        </main>

        {/* Footer & FAQ */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Modals */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          initialData={bookingData}
        />

        <EmergencyModal
          isOpen={emergencyOpen}
          onClose={() => setEmergencyOpen(false)}
          onScheduleEmergency={() => {
            setEmergencyOpen(false);
            handleOpenBooking({ procedure: 'Emergency Dental Relief (Today)' });
          }}
        />

        {/* Floating Quick Action Bar (Mobile & Desktop) */}
        <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
          <button
            onClick={handleOpenEmergency}
            className="p-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-xl shadow-rose-600/30 transition-all hover:scale-105 cursor-pointer flex items-center justify-center"
            title="Emergency Dental Hotline"
          >
            <ShieldAlert className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleOpenBooking()}
            className="px-5 py-3.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-teal-700/30 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-teal-200" />
            <span className="hidden sm:inline">Book Consultation</span>
            <span className="sm:hidden">Book Visit</span>
          </button>
        </div>

      </div>
    </SmoothScroll>
  );
}
