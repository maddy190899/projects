import React, { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { InteractiveCanvas } from './components/InteractiveCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ShowcaseModal } from './components/ShowcaseModal';
import { CapabilityMatrix } from './components/CapabilityMatrix';
import { ProjectCalculator } from './components/ProjectCalculator';
import { StudioRadar } from './components/StudioRadar';
import { Laboratory } from './components/Laboratory';
import { Philosophy } from './components/Philosophy';
import { Testimonials } from './components/Testimonials';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { projectsData } from './data/projectsData';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [initialScope, setInitialScope] = useState(null);
  const [soundActive, setSoundActive] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);

  const handleOpenCaseStudyById = (id) => {
    const project = projectsData.find(p => p.id === id) || projectsData[0];
    setSelectedProject(project);
  };

  const handleCommissionBuild = (projectName) => {
    setSelectedProject(null);
    setInitialScope({
      deliverables: [`Bespoke Flagship based on ${projectName}`],
      timeline: 'Standard Velocity (8–10 Weeks)',
      budgetRange: '$50,000 - $100,000'
    });
    setInquiryOpen(true);
  };

  const handleTransferScope = (scopeData) => {
    setInitialScope(scopeData);
    setInquiryOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-canvas-base text-text-primary tactile-noise relative selection:bg-accent-primary selection:text-black">
        {/* Dynamic interactive canvas particle & grid layer */}
        <InteractiveCanvas />

        {/* Global Navigation */}
        <Navbar
          onOpenInquiry={() => {
            setInitialScope(null);
            setInquiryOpen(true);
          }}
          soundActive={soundActive}
          setSoundActive={setSoundActive}
          motionReduced={motionReduced}
          setMotionReduced={setMotionReduced}
        />

        {/* Main Content Flow */}
        <main>
          {/* Hero Section */}
          <Hero
            onOpenInquiry={() => {
              setInitialScope(null);
              setInquiryOpen(true);
            }}
            onOpenCaseStudy={handleOpenCaseStudyById}
          />

          {/* 01: Selected Flagship Works */}
          <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />

          {/* 02: Capabilities Matrix */}
          <CapabilityMatrix />

          {/* 03: Interactive Scope & Architecture Configurator */}
          <ProjectCalculator onTransferScope={handleTransferScope} />

          {/* 04: Studio Telemetry Observatory & Live Hardware GPU Monitor */}
          <StudioRadar />

          {/* 05: Experimental Lab */}
          <Laboratory />

          {/* 06: 4-Sprint Protocol & Leadership Team */}
          <Philosophy />

          {/* 07: Client Proof & Verified Endorsements */}
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer
          onOpenInquiry={() => {
            setInitialScope(null);
            setInquiryOpen(true);
          }}
        />

        {/* In-Depth Case Study Modal */}
        <ShowcaseModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          onCommissionBuild={handleCommissionBuild}
        />

        {/* Interactive Engagement Brief Drawer */}
        <InquiryModal
          isOpen={inquiryOpen}
          onClose={() => setInquiryOpen(false)}
          initialScope={initialScope}
        />
      </div>
    </SmoothScroll>
  );
}

export default App;
