import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowUpRight, 
  Check, 
  Smile, 
  Activity, 
  Zap, 
  Scan, 
  Layers,
  HeartHandshake
} from 'lucide-react';

const TREATMENTS = [
  {
    id: 'veneers',
    title: 'Minimal-Prep Porcelain Veneers',
    category: 'Cosmetic Dentistry',
    badge: 'Popular for Smile Makeovers',
    description: 'Ultra-thin (0.3mm) custom ceramic facings handcrafted by master ceramists to correct gaps, chips, and deep staining while preserving natural enamel.',
    metrics: [
      { label: 'Enamel Preserved', value: '95%+' },
      { label: 'Visits Required', value: '2 Sessions' },
      { label: 'Warranty', value: '15 Years' }
    ],
    startingPrice: '$1,150 / tooth',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    tags: ['E-Max Ceramic', 'Digital Smile Design', 'Natural Translucency'],
    colSpan: 'lg:col-span-8',
    highlight: true
  },
  {
    id: 'implants',
    title: 'Guided Swiss Straumann® Implants',
    category: 'Restorative Surgery',
    badge: 'Lifetime Durability',
    description: 'Robotic-guided 3D placement replacing missing teeth from root to crown with biocompatible grade-4 titanium & custom zirconia.',
    metrics: [
      { label: 'Success Rate', value: '99.4%' },
      { label: 'Procedure Time', value: '45 mins' },
      { label: 'Bone Healing', value: 'Fast SLA' }
    ],
    startingPrice: '$2,200',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tags: ['3D CBCT Guided', 'Immediate Load', 'Painless Wand®'],
    colSpan: 'lg:col-span-4',
    highlight: false
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Diamond Plus Studio',
    category: 'Clear Orthodontics',
    badge: 'Top 1% Provider in SF',
    description: 'Invisible orthodontic aligners powered by ClinCheck 6.0 AI simulation to correct deep bites, crowding, and relapse with zero metal brackets.',
    metrics: [
      { label: 'Avg Duration', value: '7.8 Months' },
      { label: 'Tray Changes', value: 'Every 7 Days' },
      { label: 'Office Visits', value: 'Virtual + 4 Visits' }
    ],
    startingPrice: '$3,400',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    tags: ['SmartTrack Material', 'Remote Dental Monitoring', 'Free Retainers'],
    colSpan: 'lg:col-span-4',
    highlight: false
  },
  {
    id: 'whitening',
    title: 'Philips Zoom!® Laser WhiteSpeed',
    category: 'Instant Whitening',
    badge: 'Same-Day Transformation',
    description: 'Cold-light blue LED activated peroxide technology that lifts decades of coffee, wine, and tea discoloration in just 45 minutes with built-in ACP enamel protection.',
    metrics: [
      { label: 'Shade Lift', value: 'Up to 8 Shades' },
      { label: 'Duration', value: '45 Minutes' },
      { label: 'Sensitivity', value: 'Zero with Relief Gel' }
    ],
    startingPrice: '$395',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    tags: ['Laser Activated', 'Enamel Safe', 'Custom Take-Home Tray'],
    colSpan: 'lg:col-span-4',
    highlight: false
  },
  {
    id: 'cerec',
    title: 'CEREC® Same-Day Zirconia Crowns',
    category: 'Digital Prosthetics',
    badge: 'One Visit • No Goop Trays',
    description: 'In-office optical 3D scanning and sub-micron robotic milling. Walk in with a fractured tooth and walk out 60 minutes later with a permanent ceramic restoration.',
    metrics: [
      { label: 'Scan Time', value: '90 Seconds' },
      { label: 'Milling Time', value: '18 Minutes' },
      { label: 'Temporary Crown', value: 'Never Needed' }
    ],
    startingPrice: '$980',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    tags: ['Diamond Milled', '100% Metal Free', 'Same-Day Departure'],
    colSpan: 'lg:col-span-4',
    highlight: false
  }
];

export default function InteractiveCards({ onSelectTreatment }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ['All', 'Cosmetic Dentistry', 'Restorative Surgery', 'Clear Orthodontics', 'Instant Whitening', 'Digital Prosthetics'];

  const filtered = activeCategory === 'All' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === activeCategory);

  const handleMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredCard(id);
  };

  return (
    <section id="treatments" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Curated Dental Procedures
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Engineered for Beauty. <br className="hidden sm:inline" />
            <span className="text-teal-700 italic font-serif">Preserved for Life.</span>
          </h2>
        </div>
        <p className="max-w-md text-slate-600 text-sm sm:text-base leading-relaxed">
          Every procedure at Aura Dental is planned using 3D high-resolution optical tomography, biomimetic tooth preservation, and zero-anxiety pain protocols.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onMouseMove={(e) => handleMouseMove(e, item.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`${item.colSpan} relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group`}
            style={{
              background: hoveredCard === item.id 
                ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.06), transparent 70%), #ffffff`
                : '#ffffff'
            }}
          >
            {/* Top Image or Header */}
            <div className="relative">
              <div className="h-60 sm:h-72 w-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-sm">
                    {item.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-900/80 backdrop-blur-md text-xs font-medium text-teal-200 border border-teal-500/30">
                    From {item.startingPrice}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-teal-300 font-semibold mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content & Metrics */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Realistic Telemetry / Metric Pills */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 mb-6 bg-slate-50/50 rounded-2xl p-3">
                {item.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs text-slate-500 font-medium truncate">{m.label}</p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Tag Pills & Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectTreatment && onSelectTreatment(item)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold transition-all group-hover:shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
