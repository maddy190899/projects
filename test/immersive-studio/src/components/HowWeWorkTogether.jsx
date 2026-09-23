import { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, Heart, Sparkles, Smile, ShieldCheck, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: "01",
    icon: "☕",
    title: "A warm drink & honest listening",
    subtitle: "No aggressive sales pitches or corporate jargon",
    description: "We grab a tea or coffee, listen to where you started, where you want to go, and what keeps you up at night. We only take on projects where we know we can make a heartfelt, transformative difference."
  },
  {
    num: "02",
    icon: "🎨",
    title: "Sketches you can actually touch",
    subtitle: "Clickable prototypes on your phone in days",
    description: "We don't hide behind 50-page slide decks. Within the first two weeks, you'll be playing with interactive prototypes directly on your phone, feeling the typography, colors, and motion with your own thumbs."
  },
  {
    num: "03",
    icon: "✨",
    title: "Handmade code with zero bloat",
    subtitle: "Crafted for speed, accessibility & delight",
    description: "Every button and animation is crafted with patience. We test extensively on older laptops and spotty cellular connections to make sure your visitors always experience a lightning-fast, buttery-smooth visit."
  },
  {
    num: "04",
    icon: "🥂",
    title: "Launch day celebration & lasting care",
    subtitle: "We don't disappear once the site is live",
    description: "We pop champagne, guide you through editing your content with simple recorded video notes, and remain on speed-dial. Many of our clients have been with us for 4+ years."
  }
];

export default function HowWeWorkTogether() {
  return (
    <section id="how-it-feels" className="py-24 px-6 max-w-6xl mx-auto border-t border-stone-200/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-semibold mb-3">
            <Smile className="w-3.5 h-3.5 text-emerald-700" />
            <span>The Human Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-human font-bold text-stone-900 tracking-tight">
            How it actually feels <br />
            <span className="italic font-normal text-stone-500 font-human">to create together.</span>
          </h2>
        </div>

        <p className="max-w-md text-stone-600 text-sm leading-relaxed">
          Building a website should be an energizing, creative milestone for your business—never an exhausting corporate headache.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="clay-card rounded-2xl p-6 bg-white flex flex-col justify-between group hover:shadow-lg transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{step.icon}</span>
                <span className="font-handwriting text-stone-400 text-xl font-bold">
                  Step {step.num}
                </span>
              </div>

              <h3 className="font-human font-bold text-lg text-stone-900 mb-1 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs font-semibold text-amber-800 mb-3">
                {step.subtitle}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full human transparency</span>
            </div>
          </div>
        ))}
      </div>

      {/* Human Promise Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
          </div>
          <div>
            <h4 className="font-human font-bold text-stone-900 text-base">
              Our "No Bullshit" Studio Promise
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Transparent fixed budgets, zero surprise fees, and genuine friendship from day one to launch day.
            </p>
          </div>
        </div>

        <span className="font-handwriting text-stone-500 text-lg shrink-0">
          Signed with care, The Immersive Team ✍️
        </span>
      </div>

    </section>
  );
}
