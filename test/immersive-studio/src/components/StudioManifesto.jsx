import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Shield, Users } from 'lucide-react';

const partners = [
  {
    name: "Marcus Vance",
    role: "Founding Partner / Creative Technologist",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
    pedigree: "Formerly Apple Design Group & MIT Spatial Computing. Directed 40+ international WebGL flagships."
  },
  {
    name: "Elena Rostova",
    role: "Partner / Head of 3D & GLSL Shaders",
    location: "Zurich / Tokyo",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
    pedigree: "Demoscene shader pioneer. Author of progressive Draco WebGL mesh decompression standards."
  },
  {
    name: "David Chen",
    role: "Partner / Principal Systems Architect",
    location: "San Francisco",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
    pedigree: "Built multi-region low-latency edge architectures processing tens of millions of concurrent requests."
  }
];

export default function StudioManifesto() {
  return (
    <section id="manifesto" className="py-32 px-6 sm:px-10 max-w-[1600px] mx-auto border-t border-chalk">
      
      {/* Manifesto Headline */}
      <div className="max-w-5xl mb-24">
        <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-4">
          [ 05 / OUR ANCHOR & PHILOSOPHY ]
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
          The digital world is drowning in <span className="font-serif-editorial font-normal text-zinc-400">homogenized commodity</span>. We build the enduring antidote.
        </h2>
        
        <p className="mt-8 text-zinc-400 text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
          When every company uses the same generic templates and AI copy, true differentiation comes from uncompromising craft: mathematical shader precision, typography with cultural tension, and experiences that linger in the memory.
        </p>
      </div>

      {/* Leadership Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {partners.map((partner, i) => (
          <div key={i} className="border border-chalk p-6 bg-zinc-950 flex flex-col justify-between group">
            {/* Real Black & White Portrait */}
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-chalk mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-full object-cover img-editorial-zoom"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 font-mono-tag text-[10px] text-zinc-300">
                LOC / {partner.location}
              </div>
            </div>

            <div>
              <span className="font-mono-tag text-[11px] text-zinc-500 block mb-1">
                {partner.role}
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {partner.name}
              </h3>
              <p className="text-xs font-mono-tag text-zinc-400 leading-relaxed">
                {partner.pedigree}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Physical Studio Coordinates */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-chalk divide-y sm:divide-y-0 sm:divide-x divide-chalk p-8 bg-zinc-950/40">
        <div>
          <span className="font-mono-tag text-xs text-zinc-500 uppercase block mb-1">STUDIO 01 / PARIS</span>
          <p className="font-display font-bold text-lg text-white">Rue Saint-Honoré</p>
          <p className="font-mono-tag text-xs text-zinc-400 mt-1">75001 Paris, France</p>
        </div>

        <div className="pt-6 sm:pt-0 sm:pl-8">
          <span className="font-mono-tag text-xs text-zinc-500 uppercase block mb-1">STUDIO 02 / SAN FRANCISCO</span>
          <p className="font-display font-bold text-lg text-white">Howard Street</p>
          <p className="font-mono-tag text-xs text-zinc-400 mt-1">Mission District, CA 94105</p>
        </div>

        <div className="pt-6 sm:pt-0 sm:pl-8">
          <span className="font-mono-tag text-xs text-zinc-500 uppercase block mb-1">STUDIO 03 / TOKYO</span>
          <p className="font-display font-bold text-lg text-white">Minato City</p>
          <p className="font-mono-tag text-xs text-zinc-400 mt-1">Roppongi, Tokyo 106-0032</p>
        </div>
      </div>

    </section>
  );
}
