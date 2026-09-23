import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import InteractiveHero from './components/InteractiveHero';
import { ClientLogos } from './components/VectorGraphic';
import PortfolioShowcase from './components/PortfolioShowcase';
import InteractiveCards from './components/InteractiveCards';
import ServicesStack from './components/ServicesStack';
import CostEstimator from './components/CostEstimator';
import TestimonialsMetrics from './components/TestimonialsMetrics';
import StudioTeam from './components/StudioTeam';
import ProcessFaq from './components/ProcessFaq';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedEstimatorConfig, setSelectedEstimatorConfig] = useState(null);

  const handleOpenQuoteModal = () => {
    setSelectedEstimatorConfig(null);
    setIsQuoteModalOpen(true);
  };

  const handleBookWithConfig = (configData) => {
    setSelectedEstimatorConfig(configData);
    setIsQuoteModalOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] relative selection:bg-cyan-500/20 selection:text-cyan-300">
        
        {/* Navigation Bar */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Hero Section */}
        <main>
          <InteractiveHero 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />

          {/* Semantic Real Client Logos Vector Banner */}
          <ClientLogos />

          {/* Selected Work & Real Image Portfolio */}
          <PortfolioShowcase />

          {/* Asymmetric Bento Architecture Grid */}
          <InteractiveCards />

          {/* Disciplinary Capabilities & Architecture */}
          <ServicesStack />

          {/* Interactive Project Cost & Scope Estimator */}
          <CostEstimator onBookWithConfig={handleBookWithConfig} />

          {/* Quantitative Metrics & Executive Testimonials */}
          <TestimonialsMetrics />

          {/* Studio Leadership & Physical Workshop Showcase */}
          <StudioTeam />

          {/* 4-Stage Protocol & Interactive FAQ Accordion */}
          <ProcessFaq onOpenQuoteModal={handleOpenQuoteModal} />
        </main>

        {/* Footer */}
        <Footer onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Consultation / Proposal Modal */}
        <ContactModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)}
          initialConfig={selectedEstimatorConfig}
        />

      </div>
    </SmoothScroll>
  );
}
