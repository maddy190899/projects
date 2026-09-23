import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    phase: "Discovery & 3D Prototyping",
    tagline: "Uncovering the sensory core of your product",
    description: "We don't do static PDFs. Within the first 7 days, we spin up interactive browser prototypes exploring WebGL shaders, camera paths, typography scale, and performance constraints.",
    duration: "Week 1 - 2"
  },
  {
    step: "02",
    phase: "Spatial Architecture & Design Tokens",
    tagline: "Locking down pixel-perfection & performance budgets",
    description: "Every color, spacing unit, and spring physics curve is synchronized between Figma and code tokens. 3D geometry is decimated and compressed into progressive web formats.",
    duration: "Week 3 - 4"
  },
  {
    step: "03",
    phase: "Kinetic Engineering & Integration",
    tagline: "Crafting bulletproof React 19 & WebGL code",
    description: "We build out the full application with Lenis smooth scrolling, Motion physics, custom headless CMS hooks, and API integrations with sub-50ms latency guarantees.",
    duration: "Week 5 - 7"
  },
  {
    step: "04",
    phase: "Global Edge Launch & Handover",
    tagline: "Deploying with zero downtime & 100/100 Lighthouse",
    description: "We deploy to 300+ worldwide edge nodes, run automated stress tests, pass Core Web Vitals audits, and provide thorough recorded video walkthroughs and clean Git repositories.",
    duration: "Week 8"
  }
];

const faqs = [
  {
    question: "Do 3D WebGL experiences slow down mobile phones or drain battery?",
    answer: "Never with our architecture. We implement custom GLSL fragment shaders with strict draw-call limits (under 10 per scene) and automatic framerate throttling when the browser tab is idle or the device is on low-power mode. Mobile users receive 60FPS fluid interactions with zero thermal throttling."
  },
  {
    question: "How does the engagement and intellectual property ownership work?",
    answer: "You own 100% of all intellectual property, Git repositories, 3D assets, custom shaders, and design tokens upon milestone completion. We provide comprehensive documentation and Storybooks so your in-house team can easily maintain and expand the codebase."
  },
  {
    question: "Can our marketing team edit text and images without touching code?",
    answer: "Absolutely. We seamlessly integrate headless CMS platforms (Sanity, Contentful, or Strapi) where your team can modify copy, launch new campaigns, and upload assets without risking breakage of the 3D canvas or motion layers."
  },
  {
    question: "What is your typical project timeline and investment?",
    answer: "Most custom WebGL and high-frequency web application builds range from 4 to 8 weeks, with investments typically between $18,000 and $40,000 depending on 3D asset complexity, custom shader requirements, and backend integration scope. We provide fixed-price milestones with guaranteed SLA delivery."
  },
  {
    question: "Can Immersive Studio collaborate with our existing in-house engineers?",
    answer: "Yes. Many enterprise clients bring us on as a specialized creative engineering strike-team to craft their flagship marketing platform or 3D web configurator while their internal developers focus on core backend services."
  }
];

export default function ProcessFaq({ onOpenQuoteModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>HOW WE DELIVER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white mb-4">
            Engineering Protocol & <span className="gradient-text-accent">Clarity</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested 4-stage sprint methodology that eliminates surprises, delays, and scope creep.
          </p>
        </div>

        {/* 4-Stage Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {processSteps.map((step) => (
            <div 
              key={step.step}
              className="glass-panel rounded-3xl p-6 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-heading text-cyan-400 group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-1">
                  {step.phase}
                </h3>
                <p className="text-xs font-mono-code text-cyan-300/80 mb-3">
                  {step.tagline}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono-code text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Downtime Gate</span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">Frequently Addressed Inquiries</h3>
              <p className="text-xs font-mono-code text-slate-400">Clear Answers on Pricing, Engineering & Collaboration</p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i}
                  className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white font-heading">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-mono-code">
              Have a custom architectural inquiry?
            </span>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Consult with a Lead Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
