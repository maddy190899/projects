import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Calendar, Star, CheckCircle, ArrowUpRight } from 'lucide-react';

const DOCTORS = [
  {
    id: 'dr-sterling',
    name: 'Dr. Julian Sterling, DDS, FACP',
    role: 'Clinical Director & Board-Certified Prosthodontist',
    education: 'Harvard School of Dental Medicine',
    residency: 'Columbia University Medical Center • 16+ Years Experience',
    specialties: ['Digital Smile Design', 'Feldspathic Veneers', 'Full-Mouth Rehabilitation'],
    rating: 4.99,
    reviewsCount: 840,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    quote: 'Natural aesthetics are not about artificial perfection; they are about harmonic proportions that seamlessly complement each unique facial structure.'
  },
  {
    id: 'dr-vance',
    name: 'Dr. Elena Vance, DMD, MS',
    role: 'Diamond Plus Orthodontic Specialist',
    education: 'University of Pennsylvania School of Dental Medicine',
    residency: 'UCSF Orthodontic Biomechanics • 12+ Years Experience',
    specialties: ['Invisalign® Diamond Plus', 'Surgical Orthodontics', 'Airway Orthodontics'],
    rating: 4.98,
    reviewsCount: 710,
    image: 'https://images.unsplash.com/photo-1594824813576-92f7680df8e4?auto=format&fit=crop&w=800&q=80',
    quote: 'With 3D ClinCheck technology, we eliminate the guesswork from tooth movement, delivering healthier bites in half the traditional timeline.'
  },
  {
    id: 'dr-chen',
    name: 'Dr. Marcus Chen, DDS, ICOI',
    role: 'Oral & Maxillofacial Implant Surgeon',
    education: 'Columbia University College of Dental Medicine',
    residency: 'NYU Langone Implantology Fellow • 14+ Years Experience',
    specialties: ['All-on-4 / All-on-6 Zirconia', 'Straumann 3D Navigation', 'Bone Regeneration'],
    rating: 4.97,
    reviewsCount: 650,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    quote: 'Sub-millimeter robotic accuracy ensures that your implants fuse seamlessly with bone, giving you the natural bite strength of original teeth.'
  },
  {
    id: 'dr-alvarez',
    name: 'Dr. Sofia Alvarez, DMD',
    role: 'Aesthetic & Biomimetic Restorative Dentist',
    education: 'UCLA School of Dentistry',
    residency: 'USC Biomimetic Adhesive Institute • 9+ Years Experience',
    specialties: ['Biomimetic Bonding', 'Laser Teeth Whitening', 'Anxiety-Free Pediatric Care'],
    rating: 4.99,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    quote: 'Preserving natural tooth structure through adhesive biomimetics allows us to solve dental issues with virtually zero tooth grinding.'
  }
];

export default function Specialists({ onBookDoctor }) {
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0]);

  return (
    <section id="specialists" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-teal-600" />
              Ivy League & Board-Certified
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
              Meet Our Renowned Dental Surgeons & Artists
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-sm sm:text-base leading-relaxed">
            Our team brings together leaders in surgical implantology, digital smile design, and orthodontics trained at the nation&apos;s most prestigious dental institutions.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
            >
              <div>
                {/* Doctor Portrait with Real Unsplash Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{doc.rating}</span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider block">
                      {doc.role}
                    </span>
                    <h3 className="text-lg font-bold font-serif leading-tight mt-0.5">
                      {doc.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-4">
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p className="flex items-center gap-1.5 font-medium text-slate-800">
                      <GraduationCap className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      {doc.education}
                    </p>
                    <p className="text-[11px] text-slate-500 pl-5">
                      {doc.residency}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {doc.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs italic text-slate-500 border-l-2 border-teal-500 pl-3 leading-relaxed">
                    &ldquo;{doc.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookDoctor && onBookDoctor(doc)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-teal-700 hover:text-white border border-slate-200 text-slate-900 text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {doc.name.split(',')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
