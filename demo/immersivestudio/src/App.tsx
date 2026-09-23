import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Estimator } from './components/Estimator';
import { StudioDNA } from './components/StudioDNA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ShowreelModal } from './components/ShowreelModal';

export const App: React.FC = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [preFilledData, setPreFilledData] = useState<{
    projectType: string;
    timeline: string;
    investmentEstimate: number;
    tier: string;
  } | null>(null);

  const handleOpenBrief = () => {
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForBrief = (projectTitle: string) => {
    setPreFilledData({
      projectType: `${projectTitle} Architecture Framework`,
      timeline: '8 Weeks (Standard)',
      investmentEstimate: 85000,
      tier: 'Flagship Build ($70k - $120k)',
    });
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPreFilledData({
      projectType: serviceName,
      timeline: '8 Weeks',
      investmentEstimate: 65000,
      tier: 'Flagship Build ($70k - $120k)',
    });
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillInquiry = (data: {
    projectType: string;
    timeline: string;
    platforms: string[];
    investmentEstimate: number;
    tier: string;
  }) => {
    setPreFilledData(data);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar
        onOpenBrief={handleOpenBrief}
        onOpenShowreel={() => setShowreelOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartBrief={handleOpenBrief}
          onOpenShowreel={() => setShowreelOpen(true)}
        />

        {/* Real Client Work & Realistic Device Frames */}
        <Projects onSelectProjectForBrief={handleSelectProjectForBrief} />

        {/* Specialized Disciplines & Animated SVG Icons */}
        <Services onSelectService={handleSelectService} />

        {/* Interactive Scope & Investment Estimator */}
        <Estimator onPreFillInquiry={handlePreFillInquiry} />

        {/* Studio DNA & First Principles */}
        <StudioDNA />

        {/* Production-Ready Inquiry Form */}
        <Contact preFilledData={preFilledData} />
      </main>

      {/* Footer & Hubs */}
      <Footer />

      {/* Embedded 2026 Showreel Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onSelectProjectForBrief={handleSelectProjectForBrief}
      />
    </div>
  );
};

export default App;
