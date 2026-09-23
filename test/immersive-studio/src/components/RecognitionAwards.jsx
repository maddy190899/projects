import { motion } from 'motion/react';
import { Award, Star, ExternalLink } from 'lucide-react';

const awardsList = [
  { year: "2026", title: "Awwwards Site of the Month", client: "Balenciaga Spatial Runway", category: "Spatial WebGL" },
  { year: "2026", title: "FWA of the Month", client: "Polestar Configurator", category: "Real-time 3D" },
  { year: "2025", title: "D&AD Graphite Pencil", client: "Rimowa Exploration Archive", category: "Digital Craft" },
  { year: "2025", title: "Cannes Lions Bronze Cyber", client: "Spotify Neural Visualizer", category: "Web Audio DSP" },
  { year: "2025", title: "Awwwards Studio of the Month", client: "Immersive Studio Practice", category: "Agency Honor" },
  { year: "2024", title: "FWA of the Day (12x)", client: "Various Flagship Commissions", category: "Creative Engineering" }
];

const pressQuotes = [
  {
    quote: "Immersive Studio has redefined the boundary between haute couture luxury and high-frequency browser execution.",
    source: "WALLPAPER* MAGAZINE",
    issue: "Design Awards 2026"
  },
  {
    quote: "One of the vanishingly few digital studios capable of authoring custom GLSL shaders that don't incinerate mobile battery life.",
    source: "WIRED UK",
    issue: "The Next Web Architects"
  },
  {
    quote: "Their focus on bespoke craft over template commodification represents the future of independent digital production.",
    source: "FAST COMPANY",
    issue: "Innovation by Design"
  }
];

export default function RecognitionAwards() {
  return (
    <section id="recognition" className="py-32 px-6 sm:px-10 max-w-[1600px] mx-auto border-t border-chalk">
      
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-chalk">
        <div>
          <span className="font-mono-tag text-xs text-zinc-500 uppercase tracking-widest block mb-2">
            [ 04 / JURY & INDUSTRY RECOGNITION ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            AWARDS & <span className="font-serif-editorial font-normal text-zinc-400">press</span>
          </h2>
        </div>

        <span className="font-mono-tag text-xs text-emerald-400">
          34× FWA • 14× AWWWARDS • 3× D&AD PENCILS
        </span>
      </div>

      {/* Awards Ledger Table */}
      <div className="border border-chalk mb-20 divide-y divide-chalk">
        {awardsList.map((item, i) => (
          <div 
            key={i}
            className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-6 sm:gap-10">
              <span className="font-mono-tag text-xs text-zinc-500 w-12">{item.year}</span>
              <h4 className="text-base sm:text-lg font-display font-bold text-white">{item.title}</h4>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-12 font-mono-tag text-xs text-zinc-400">
              <span className="text-zinc-200">{item.client}</span>
              <span className="text-zinc-500 border border-chalk px-2.5 py-0.5">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Press Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pressQuotes.map((p, i) => (
          <div key={i} className="p-8 border border-chalk flex flex-col justify-between space-y-6">
            <p className="text-zinc-300 font-serif-editorial text-lg sm:text-xl leading-relaxed">
              "{p.quote}"
            </p>
            <div className="pt-4 border-t border-chalk flex items-baseline justify-between font-mono-tag text-xs">
              <span className="font-bold text-white uppercase">{p.source}</span>
              <span className="text-zinc-500">{p.issue}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
