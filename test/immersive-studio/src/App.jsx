import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import InteractiveHero from './components/InteractiveHero';
import SelectedWork from './components/SelectedWork';
import InteractiveCanvasLab from './components/InteractiveCanvasLab';
import StudioCapabilities from './components/StudioCapabilities';
import RecognitionAwards from './components/RecognitionAwards';
import StudioManifesto from './components/StudioManifesto';
import InquiryDrawer from './components/InquiryDrawer';
import Footer from './components/Footer';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [cursorText, setCursorText] = useState('');

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#09090b] text-[#f4f3ef] selection:bg-white selection:text-black relative bg-noise">
        
        {/* Custom Magnetic Cursor */}
        <CustomCursor cursorText={cursorText} />

        {/* Global Editorial Navbar */}
        <Navbar 
          onOpenInquiry={() => setInquiryOpen(true)} 
          setCursorText={setCursorText} 
        />

        {/* Editorial Main Flow */}
        <main>
          {/* Hero Section with Interactive Liquid Canvas */}
          <InteractiveHero 
            onOpenInquiry={() => setInquiryOpen(true)} 
            setCursorText={setCursorText} 
          />

          {/* 01: Selected Commissions (Hover Reveal List + Grid) */}
          <SelectedWork 
            setCursorText={setCursorText} 
            onOpenInquiry={() => setInquiryOpen(true)} 
          />

          {/* 02: Interactive Canvas Lab (Procedural Shader Physics Console) */}
          <InteractiveCanvasLab 
            setCursorText={setCursorText} 
          />

          {/* 03: Disciplinary Architecture & Specification Matrix */}
          <StudioCapabilities 
            setCursorText={setCursorText} 
            onOpenInquiry={() => setInquiryOpen(true)} 
          />

          {/* 04: International Recognition & Press Quotes */}
          <RecognitionAwards />

          {/* 05: Studio Manifesto & Founding Partners */}
          <StudioManifesto />
        </main>

        {/* Global Footer */}
        <Footer 
          onOpenInquiry={() => setInquiryOpen(true)} 
          setCursorText={setCursorText} 
        />

        {/* Commission / Inquiry Drawer */}
        <InquiryDrawer 
          isOpen={inquiryOpen} 
          onClose={() => setInquiryOpen(false)} 
        />

      </div>
    </SmoothScroll>
  );
}
