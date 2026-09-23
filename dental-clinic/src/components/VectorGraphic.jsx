import React from 'react';

// Precision Dental Tooth Logo Mark with Enamel Glow
export const DentalToothIcon = ({ className = "w-8 h-8", glow = true }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="toothGrad" x1="6" y1="4" x2="30" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="0.3" stopColor="#38BDF8" />
        <stop offset="0.75" stopColor="#0EA5E9" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="rootGrad" x1="12" y1="18" x2="24" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" stopOpacity="0.8" />
        <stop offset="1" stopColor="#14B8A6" stopOpacity="0.4" />
      </linearGradient>
      <filter id="toothGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Enamel Crown & Root Silhouette */}
    <path
      d="M10.5 4.5C6.5 4.5 3 8 3 13C3 18.2 5.5 24 7.5 29C8.5 31.5 10.5 33 13 33C14.8 33 16 32 17 30C17.5 29 18 27.5 18 25C18 27.5 18.5 29 19 30C20 32 21.2 33 23 33C25.5 33 27.5 31.5 28.5 29C30.5 24 33 18.2 33 13C33 8 29.5 4.5 25.5 4.5C22.2 4.5 20.2 6.5 18 6.5C15.8 6.5 13.8 4.5 10.5 4.5Z"
      stroke="url(#toothGrad)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter={glow ? "url(#toothGlow)" : undefined}
      fill="rgba(14, 165, 233, 0.08)"
    />
    {/* Micro-Enamel Highlight Line */}
    <path
      d="M8 12C8 9 10 7.5 13 7.5M28 12C28 9 26 7.5 23 7.5"
      stroke="#BAE6FD"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Interior Pulp Chamber & Biomimetic Canal Accents */}
    <path
      d="M14 16C14 19 13.5 24 12 28M22 16C22 19 22.5 24 24 28"
      stroke="url(#rootGrad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 3"
    />
    <circle cx="18" cy="14" r="1.5" fill="#38BDF8" />
  </svg>
);

// High-Fidelity Anatomical Dental Implant Cross-Section Diagram
export const DentalImplantGraphic = ({ className = "w-full h-auto" }) => (
  <svg className={className} viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="crownGrad" x1="80" y1="20" x2="240" y2="150" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F8FAFC" />
        <stop offset="0.3" stopColor="#E2E8F0" />
        <stop offset="0.8" stopColor="#CBD5E1" />
        <stop offset="1" stopColor="#94A3B8" />
      </linearGradient>
      <linearGradient id="titaniumGrad" x1="120" y1="180" x2="200" y2="380" gradientUnits="userSpaceOnUse">
        <stop stopColor="#94A3B8" />
        <stop offset="0.2" stopColor="#E2E8F0" />
        <stop offset="0.5" stopColor="#64748B" />
        <stop offset="0.8" stopColor="#CBD5E1" />
        <stop offset="1" stopColor="#475569" />
      </linearGradient>
      <linearGradient id="goldAbutment" x1="130" y1="130" x2="190" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" stopOpacity="0.9" />
        <stop offset="0.6" stopColor="#CA8A04" stopOpacity="0.9" />
        <stop offset="1" stopColor="#A16207" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="boneLatticeGrad" x1="40" y1="200" x2="280" y2="390" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0EA5E9" stopOpacity="0.25" />
        <stop offset="1" stopColor="#14B8A6" stopOpacity="0.1" />
      </linearGradient>
      <radialGradient id="laserGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
      </radialGradient>
      <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Background Soft Glow */}
    <ellipse cx="160" cy="210" rx="130" ry="170" fill="url(#laserGlow)" />

    {/* Trabecular Bone Tissue Bed (Osseointegration Zone) */}
    <rect x="30" y="180" width="260" height="210" rx="20" fill="url(#boneLatticeGrad)" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
    
    {/* Trabecular Bone Micro-Mesh Lines */}
    <g opacity="0.4" stroke="#38BDF8" strokeWidth="1">
      <path d="M40 220 C 70 230, 90 205, 120 225" />
      <path d="M200 225 C 230 210, 255 235, 280 220" />
      <path d="M35 270 C 65 260, 95 285, 120 270" />
      <path d="M200 270 C 230 285, 255 260, 285 275" />
      <path d="M45 320 C 75 330, 95 310, 120 325" />
      <path d="M200 325 C 225 315, 255 335, 275 320" />
      <circle cx="65" cy="245" r="3" fill="#38BDF8" opacity="0.6" />
      <circle cx="255" cy="250" r="3" fill="#14B8A6" opacity="0.6" />
      <circle cx="80" cy="305" r="2.5" fill="#38BDF8" opacity="0.6" />
      <circle cx="240" cy="300" r="2.5" fill="#14B8A6" opacity="0.6" />
    </g>

    {/* Gingival Gum Margin Contours */}
    <path
      d="M30 180 C 80 175, 120 185, 135 155 C 145 135, 175 135, 185 155 C 200 185, 240 175, 290 180"
      stroke="#F472B6"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Monolithic Zirconia Crown Restoration */}
    <path
      d="M100 40 C 100 25, 120 15, 160 15 C 200 15, 220 25, 220 40 C 225 70, 225 110, 205 145 C 195 160, 185 162, 160 162 C 135 162, 125 160, 115 145 C 95 110, 95 70, 100 40 Z"
      fill="url(#crownGrad)"
      stroke="#F1F5F9"
      strokeWidth="2"
      filter="drop-shadow(0 4px 12px rgba(0,0,0,0.4))"
    />
    {/* Crown Optical Light Translucency Reflection */}
    <path
      d="M125 30 C 120 50, 118 80, 122 120 C 120 100, 123 50, 140 32 C 132 30, 128 30, 125 30 Z"
      fill="#FFFFFF"
      opacity="0.6"
    />

    {/* Custom Titanium / Gold Nitride Abutment */}
    <path
      d="M142 142 L 178 142 L 172 178 L 148 178 Z"
      fill="url(#goldAbutment)"
      stroke="#CA8A04"
      strokeWidth="1.5"
    />
    <rect x="156" y="125" width="8" height="25" fill="#64748B" rx="1" />

    {/* Screw-Retained Titanium Implant Fixture with Thread Geometry */}
    <g>
      {/* Implant Body */}
      <path
        d="M142 178 L 178 178 L 175 350 C 175 365, 145 365, 145 350 Z"
        fill="url(#titaniumGrad)"
        stroke="#94A3B8"
        strokeWidth="1.8"
      />
      {/* Micro-Threads (Cervical Collar) */}
      <line x1="140" y1="188" x2="180" y2="188" stroke="#38BDF8" strokeWidth="1.5" />
      <line x1="140" y1="195" x2="180" y2="195" stroke="#38BDF8" strokeWidth="1.5" />
      <line x1="141" y1="202" x2="179" y2="202" stroke="#38BDF8" strokeWidth="1.5" />

      {/* Deep Spiral Self-Tapping Threads */}
      <path d="M137 215 L 183 222 L 178 226 L 142 220 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
      <path d="M137 235 L 183 242 L 178 246 L 142 240 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
      <path d="M138 255 L 182 262 L 177 266 L 143 260 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
      <path d="M139 275 L 181 282 L 176 286 L 144 280 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
      <path d="M140 295 L 180 302 L 175 306 L 145 300 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
      <path d="M141 315 L 179 322 L 174 326 L 146 320 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
      <path d="M143 335 L 177 342 L 173 345 L 147 340 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1" />

      {/* Apical Vents for Bone Healing */}
      <ellipse cx="160" cy="348" rx="6" ry="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
    </g>

    {/* Technical Measurement Callouts & Telemetry Markers */}
    <g className="text-xs font-mono">
      {/* Crown Callout */}
      <line x1="225" y1="80" x2="270" y2="80" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="270" cy="80" r="3" fill="#0EA5E9" />
      <text x="210" y="70" fill="#38BDF8" fontSize="10" fontWeight="600" textAnchor="end">Zirconia E.max (A1)</text>

      {/* Abutment Callout */}
      <line x1="95" y1="160" x2="140" y2="160" stroke="#CA8A04" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="95" cy="160" r="3" fill="#CA8A04" />
      <text x="90" y="163" fill="#FDE047" fontSize="10" fontWeight="600" textAnchor="end">Custom Ti-Base</text>

      {/* Osseointegration Metric */}
      <line x1="220" y1="280" x2="270" y2="280" stroke="#10B981" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="270" cy="280" r="3" fill="#10B981" />
      <text x="278" y="278" fill="#34D399" fontSize="10" fontWeight="600">ISQ: 84 (High Stability)</text>
      <text x="278" y="292" fill="#94A3B8" fontSize="9">Grade 5 Ti-6Al-4V</text>

      {/* Sub-crestal depth */}
      <line x1="90" y1="340" x2="140" y2="340" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 3" />
      <circle cx="90" cy="340" r="3" fill="#0EA5E9" />
      <text x="85" y="343" fill="#38BDF8" fontSize="10" fontWeight="600" textAnchor="end">3.5mm Sub-crestal</text>
    </g>
  </svg>
);

// 3D Digital Smile Design Proportion Vector
export const SmileDesignProportionVector = ({ className = "w-full h-auto" }) => (
  <svg className={className} viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="archGrad" x1="40" y1="120" x2="360" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.5" stopColor="#0EA5E9" />
        <stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
    </defs>

    {/* Calibrated Golden Ratio Grid Lines */}
    <g opacity="0.3" stroke="#38BDF8" strokeWidth="1">
      <line x1="200" y1="20" x2="200" y2="220" strokeDasharray="4 4" />
      <line x1="40" y1="120" x2="360" y2="120" strokeDasharray="2 4" />
      <line x1="80" y1="40" x2="80" y2="200" strokeDasharray="2 4" />
      <line x1="320" y1="40" x2="320" y2="200" strokeDasharray="2 4" />
      <line x1="140" y1="50" x2="140" y2="190" strokeDasharray="2 4" />
      <line x1="260" y1="50" x2="260" y2="190" strokeDasharray="2 4" />
    </g>

    {/* Incisal Smile Arc Curve (Matches Lower Lip Contour) */}
    <path
      d="M50 85 C 110 160, 200 175, 200 175 C 200 175, 290 160, 350 85"
      stroke="url(#archGrad)"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Central & Lateral Incisor Outlines */}
    {/* Left Central (#9) */}
    <rect x="202" y="70" width="34" height="68" rx="6" fill="rgba(14, 165, 233, 0.12)" stroke="#38BDF8" strokeWidth="1.8" />
    {/* Right Central (#8) */}
    <rect x="164" y="70" width="34" height="68" rx="6" fill="rgba(14, 165, 233, 0.12)" stroke="#38BDF8" strokeWidth="1.8" />
    {/* Left Lateral (#10) */}
    <rect x="240" y="76" width="28" height="58" rx="5" fill="rgba(20, 184, 166, 0.1)" stroke="#14B8A6" strokeWidth="1.6" />
    {/* Right Lateral (#7) */}
    <rect x="132" y="76" width="28" height="58" rx="5" fill="rgba(20, 184, 166, 0.1)" stroke="#14B8A6" strokeWidth="1.6" />
    {/* Left Canine (#11) */}
    <rect x="272" y="84" width="24" height="54" rx="5" fill="rgba(56, 189, 248, 0.08)" stroke="#38BDF8" strokeWidth="1.4" />
    {/* Right Canine (#6) */}
    <rect x="104" y="84" width="24" height="54" rx="5" fill="rgba(56, 189, 248, 0.08)" stroke="#38BDF8" strokeWidth="1.4" />

    {/* Golden Ratio Annotations */}
    <text x="200" y="210" fill="#38BDF8" fontSize="11" fontFamily="monospace" textAnchor="middle">Φ 1.618 Central Incisor Proportion (80% W/L)</text>
    <text x="200" y="45" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">Facial Midline Inter-pupillary Alignment</text>
  </svg>
);

// Volumetric CBCT 3D Scan Diagnostic Icon
export const CBCTVoxelIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cbctGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="url(#cbctGrad)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M3 7V17L12 22V12" stroke="url(#cbctGrad)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M21 7V17L12 22" stroke="url(#cbctGrad)" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" fill="#38BDF8" fillOpacity="0.4" />
    <line x1="7.5" y1="4.5" x2="16.5" y2="9.5" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="1 2" />
  </svg>
);

// Hydrophotonic Laser Periodontic Vector
export const WaterlaseLaserIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="#14B8A6" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(20, 184, 166, 0.15)" />
    <circle cx="12" cy="12" r="2" fill="#38BDF8" />
    <line x1="12" y1="6" x2="12" y2="18" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="6" y1="12" x2="18" y2="12" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Ceramic Veneer Precision Blade Icon
export const VeneerPrecisionIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14C4 8 8 4 14 4C18 4 20 6 20 10C20 16 16 20 10 20C6 20 4 18 4 14Z" stroke="#38BDF8" strokeWidth="1.7" strokeLinejoin="round" fill="rgba(56, 189, 248, 0.1)" />
    <path d="M8 8L16 16M14 6L18 10" stroke="#BAE6FD" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// Clear Invisible Orthodontics Aligner Icon
export const AlignerIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 16C4 10 7 5 12 5C17 5 20 10 21 16" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 14C6 11 8.5 8 12 8C15.5 8 18 11 19 14" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    <circle cx="7" cy="13" r="1.5" fill="#38BDF8" />
    <circle cx="12" cy="7" r="1.5" fill="#38BDF8" />
    <circle cx="17" cy="13" r="1.5" fill="#38BDF8" />
  </svg>
);

// Subtle Clinical Ambient Grid Background
export const AuraGridBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dentalGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
        <circle cx="0" cy="0" r="1.2" fill="rgba(56, 189, 248, 0.3)" />
      </pattern>
      <radialGradient id="auraGlowGrad" cx="50%" cy="15%" r="65%">
        <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.16" />
        <stop offset="45%" stopColor="#14B8A6" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#070B10" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#dentalGridPattern)" />
    <rect width="100%" height="100%" fill="url(#auraGlowGrad)" />
  </svg>
);
