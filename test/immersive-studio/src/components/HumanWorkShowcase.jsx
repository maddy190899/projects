import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Heart, Sparkles, X, Coffee, Check, ExternalLink } from 'lucide-react';

const humanProjects = [
  {
    id: "bloom-bakery",
    title: "Bloom & Folk Botanical Bakery",
    client: "Sarah & Leo's Family Bakery",
    tagline: "Artisan sourdough, edible botanicals & neighborhood warmth",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    color: "from-amber-50 to-orange-50",
    accentBadge: "Family Owned • Local Craft",
    humanNote: "We spent two mornings in Sarah's kitchen learning how the sourdough rests so the digital ordering felt as warm as stepping through their bakery door.",
    outcome: "+280% local weekend pre-orders with zero phone call bottlenecks",
    techCraft: ["React 19", "Instant Mobile Checkout", "Hand-drawn SVG Icons", "Sub-0.3s Loading"],
    fullStory: "Sarah and Leo had been baking out of an old brick oven for six years. During the pandemic, their phone lines were overwhelmed with weekend orders. They didn't want a cold, generic delivery app; they wanted an online home where customers could read about the local flour farmers, see today's fresh bread rotation, and pre-order with a smile. We hand-coded an intuitive calendar picker that feels effortless for grandparents and foodies alike."
  },
  {
    id: "kinship-ceramics",
    title: "Kinship Handmade Stoneware",
    client: "Marcus & Hana's Pottery Atelier",
    tagline: "Slow-crafted ceramic dinnerware shaped on Oregon clay wheels",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80",
    color: "from-stone-50 to-amber-50",
    accentBadge: "Tactile 3D Clay Viewer",
    humanNote: "We created a lightweight 3D glaze preview so buyers can rotate the mugs and see how morning sunlight reflects off the speckled stoneware.",
    outcome: "Small seasonal batches now sell out in under 12 minutes",
    techCraft: ["Lightweight Three.js", "PBR Glaze Shaders", "Shopify Headless", "Zero Mobile Lag"],
    fullStory: "Ceramics are deeply physical. You hold a mug every single morning. Marcus and Hana worried that selling online would lose the touch of the glaze. We created an interactive 3D model that loads progressively in under 300 kilobytes. You can drag your finger to rotate the cup, tilt it to catch the light, and feel the natural imperfections of handmade craft."
  },
  {
    id: "wildwood-coffee",
    title: "Wildwood Direct-Trade Roasters",
    client: "Ethical Coffee Collective",
    tagline: "Small-batch specialty beans with an interactive brewing guide",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    color: "from-amber-50 to-stone-50",
    accentBadge: "Interactive Brew Calculator",
    humanNote: "We built an interactive pour-over ratio slider with step-by-step timer animations that make morning coffee brewing a mindful ritual.",
    outcome: "+320% rise in recurring bean subscriptions",
    techCraft: ["Interactive Pour-over Calculator", "Framer Motion", "Tailwind", "Stripe"],
    fullStory: "Great coffee is about care for the farming cooperatives in Colombia and Ethiopia. Wildwood wanted their customers to understand the altitude, harvest notes, and best brew ratios. We designed an interactive brewing stopwatch right on each bean's product page that walks coffee lovers through bloom times and pour pulses."
  },
  {
    id: "slow-architecture",
    title: "The Slow Architecture Collective",
    client: "Sustainable Timber Studio",
    tagline: "Carbon-neutral wooden cabins with interactive daylight mapping",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    color: "from-emerald-50 to-stone-50",
    accentBadge: "Eco-Conscious Web Architecture",
    humanNote: "We stripped all third-party tracking bloat so this site emits less than 0.16g of CO2 per visit, practicing the very eco-values the architects preach.",
    outcome: "100/100 Green Hosting & Sustainability Index",
    techCraft: ["Solar-Powered Hosting", "Interactive Daylight Slider", "SVG Floorplans", "Zero Bloat"],
    fullStory: "The architects build cabins that sit gently on the earth without cutting down native trees. They needed a portfolio that reflected that quiet integrity. We engineered an interactive daylight simulator where prospective homeowners can slide the time of day and see natural light spill through timber rafters."
  }
];

export default function HumanWorkShowcase({ onOpenChat }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto border-t border-stone-200/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Handmade Web Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-human font-bold text-stone-900 tracking-tight">
            Work we put our <br />
            <span className="italic font-normal text-[#E05A47] font-human">whole hearts into.</span>
          </h2>
        </div>

        <p className="max-w-md text-stone-600 text-sm leading-relaxed">
          Each of these websites was built for real people we respect and admire. We didn't rush them through a template mill; we crafted bespoke experiences that reflect their personal devotion to their craft.
        </p>
      </div>

      {/* Projects Grid (Warm Card Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {humanProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="clay-card rounded-2xl overflow-hidden cursor-pointer group bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
          >
            {/* Real Project Warm Photography */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-stone-800 shadow-xs">
                {project.accentBadge}
              </div>

              {/* Client Note pill */}
              <div className="absolute bottom-4 right-4 bg-stone-900/80 backdrop-blur-md text-amber-50 px-3 py-1 rounded-full text-xs font-medium shadow-xs">
                {project.outcome}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="font-handwriting text-amber-800 text-lg block mb-1">
                  for {project.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-human font-bold text-stone-900 group-hover:text-[#E05A47] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* The Human Quote from our Studio */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/50 mb-6">
                  <p className="font-handwriting text-stone-700 text-base leading-snug">
                    💬 "{project.humanNote}"
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techCraft.slice(0, 2).map((tech, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[11px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-stone-800 group-hover:text-[#E05A47] flex items-center gap-1 transition-colors">
                  <span>Read Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Case Study Friendly Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#FAF7F2] border border-stone-200 rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/80 border border-stone-200 text-stone-700 hover:text-stone-900 hover:bg-white transition-colors cursor-pointer shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Banner */}
              <div className="relative aspect-[16/9] w-full bg-stone-100 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-white text-stone-800 text-xs font-semibold shadow-xs">
                    {selectedProject.client}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-human font-bold text-stone-900 mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Result Pill */}
                <div className="p-4 rounded-2xl bg-amber-100/60 border border-amber-200 flex items-center gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block font-mono">
                      Real World Outcome:
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-stone-900">
                      {selectedProject.outcome}
                    </span>
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono mb-2">
                    The Human Story
                  </h4>
                  <p className="text-stone-700 text-base leading-relaxed">
                    {selectedProject.fullStory}
                  </p>
                </div>

                {/* What We Hand-Coded */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono mb-3">
                    Crafted Deliverables
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {selectedProject.techCraft.map((tech, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white border border-stone-200 text-xs font-medium text-stone-700 text-center shadow-xs">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-handwriting text-stone-600 text-lg">
                    Have a project you care deeply about?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenChat();
                    }}
                    className="btn-warm-primary px-6 py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Coffee className="w-4 h-4" />
                    <span>Let's Talk About It Over Coffee</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
