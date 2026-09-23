import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [prefilledScope, setPrefilledScope] = useState(null);

  // Sync with browser URL hash or history for natural wayfinding
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'work', 'services', 'philosophy', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProjectWithScope = (scopeData) => {
    setPrefilledScope(scopeData);
    handlePageChange('contact');
  };

  return (
    <SmoothScroll>
      {/* Interactive custom cursor follower */}
      <CustomCursor />

      {/* Atmospheric tactile noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 tactile-noise" aria-hidden="true" />

      {/* Global High-Craft Navbar */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Semantic Main Content with Smooth Page Transitions */}
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <HomePage
                setActivePage={handlePageChange}
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              />
            </motion.div>
          )}

          {activePage === 'work' && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkPage
                setActivePage={handlePageChange}
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              />
            </motion.div>
          )}

          {activePage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServicesPage
                setActivePage={handlePageChange}
                onScopeSelected={handleStartProjectWithScope}
              />
            </motion.div>
          )}

          {activePage === 'philosophy' && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <PhilosophyPage setActivePage={handlePageChange} />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactPage prefilledScope={prefilledScope} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={() => handlePageChange('contact')}
      />

      {/* Haute Global Footer */}
      <Footer setActivePage={handlePageChange} />
    </SmoothScroll>
  );
}

export default App;
