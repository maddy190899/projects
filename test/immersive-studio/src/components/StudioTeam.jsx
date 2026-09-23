import { motion } from 'motion/react';
import { Users, Award, Shield, Sparkles, Terminal, Code2 } from 'lucide-react';

const teamMembers = [
  {
    name: "Marcus Vance",
    role: "Founder & Creative Technologist",
    bio: "Former design engineering lead at Apple and MIT Media Lab fellow. Pioneered spatial web browser frameworks.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    specialty: "Spatial WebGL & Creative Direction",
    experience: "14+ Years"
  },
  {
    name: "Elena Rostova",
    role: "Head of 3D & GLSL Shaders",
    bio: "Ex-Epic Games demoscene veteran. Specialized in progressive procedural mesh compression and GPU memory optimization.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    specialty: "GLSL Fragment Physics & Three.js",
    experience: "11+ Years"
  },
  {
    name: "David Chen",
    role: "Principal Systems & Cloud Architect",
    bio: "Architected multi-region edge routing systems serving tens of millions of concurrent requests without downtime.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    specialty: "Edge Compute & React 19 Concurrency",
    experience: "12+ Years"
  },
  {
    name: "Aria Montgomery",
    role: "Director of Motion & Design Tokens",
    bio: "Awwwards Annual Judge and author of design token synchronization specs for high-growth tech platforms.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    specialty: "Physics Micro-interactions & Design Tokens",
    experience: "9+ Years"
  }
];

export default function StudioTeam() {
  return (
    <section id="studio" className="py-24 relative bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>THE CRAFTSPEOPLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white mb-4">
            The Minds Behind <span className="gradient-text-accent">Immersive Studio</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A boutique syndicate of senior creative technologists, GLSL shader engineers, and design system purists.
          </p>
        </div>

        {/* Studio Workspace Real Image Showcase */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 mb-16">
          <div className="relative aspect-[21/9] w-full bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              alt="Immersive Studio Creative Engineering Workshop"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-black/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono-code text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  Global Physical Presence: San Francisco & Zurich
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-2">
                  Where Spatial Ideas Turn Into Production Code
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-code text-slate-300 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10">
                  Dual High-Precision Display Rigs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid (100% Real High-Res Portraits) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Real Portrait Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1019] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 right-3 text-[10px] font-mono-code px-2 py-0.5 rounded bg-black/70 text-slate-300 border border-white/10">
                  {member.experience}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-mono-code text-cyan-300 block mb-0.5">
                    {member.specialty}
                  </span>
                  <h4 className="text-lg font-bold font-heading text-white">
                    {member.name}
                  </h4>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs font-mono-code text-purple-400 mb-2 font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Studio Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <Award className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="text-base font-bold font-heading text-white mb-2">Zero Cookie-Cutter Templates</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every interface, 3D interaction, and layout is constructed from scratch to reflect your company's singular identity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <Terminal className="w-6 h-6 text-purple-400 mb-3" />
            <h4 className="text-base font-bold font-heading text-white mb-2">Clean, Documented Codebases</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict TypeScript typings, component storybooks, and frictionless handoff to internal engineering teams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <Shield className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="text-base font-bold font-heading text-white mb-2">Guaranteed Delivery Milestones</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We work in focused 2-week agile sprints with staged staging environments and weekly interactive reviews.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
