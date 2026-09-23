export function DentalLogo({ className = "w-10 h-10", light = false }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Aura Dental Studio Crest"
    >
      <defs>
        <linearGradient id="auraGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
        <linearGradient id="auraShine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0D9488" stopOpacity="0.2" />
        </linearGradient>
        <filter id="auraGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Hexagonal Shield Ring */}
      <path
        d="M32 4L54 16V36C54 48 44 57 32 60C20 57 10 48 10 36V16L32 4Z"
        stroke="url(#auraGold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={light ? "rgba(255,255,255,0.06)" : "rgba(13,148,136,0.04)"}
      />

      {/* Inner Stylized Molar / Radiant Crown */}
      <path
        d="M23 20C21.5 20 20 22 20 25C20 30 22 35 24 41C25 44 27.5 45 29 42C30.5 39 31.5 33 32 30C32.5 33 33.5 39 35 42C36.5 45 39 44 40 41C42 35 44 30 44 25C44 22 42.5 20 41 20C38 20 36 24 32 24C28 24 26 20 23 20Z"
        fill="url(#auraGold)"
      />

      {/* Reflective Specular Sparkle Highlight */}
      <path
        d="M26 23C27.5 23 29 25 29.5 27C28 27.5 26 27 25 25.5C24.5 24.5 25 23.5 26 23Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
      <circle cx="45" cy="19" r="1.5" fill="#5EEAD4" filter="url(#auraGlow)" />
      <circle cx="19" cy="35" r="1.2" fill="#2DD4BF" opacity="0.6" />
    </svg>
  );
}

export function ImplantVector({ className = "w-48 h-64" }) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Swiss Precision Dental Implant Schematic"
    >
      <defs>
        <linearGradient id="ceramicCrown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="titaniumGrade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="30%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#CBD5E1" />
          <stop offset="70%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="laserGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0D9488" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* Optical Precision Guide Grid */}
      <line x1="20" y1="90" x2="180" y2="90" stroke="#0D9488" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      <line x1="20" y1="140" x2="180" y2="140" stroke="#0D9488" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="100" cy="90" r="3" fill="#0D9488" />

      {/* Ceramic Crown (Top) */}
      <path
        d="M72 25C75 18 85 12 100 12C115 12 125 18 128 25C132 35 136 60 134 82C133 90 125 94 100 94C75 94 67 90 66 82C64 60 68 35 72 25Z"
        fill="url(#ceramicCrown)"
        stroke="#CBD5E1"
        strokeWidth="2"
      />
      {/* Crown Glaze Highlight */}
      <path
        d="M80 25C84 30 87 50 86 75"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Titanium Abutment Connection */}
      <path
        d="M86 94H114V112C114 116 110 120 106 122H94C90 120 86 116 86 112V94Z"
        fill="#475569"
      />
      <rect x="90" y="112" width="20" height="6" rx="2" fill="#0D9488" />

      {/* Titanium Screw Implant Body with Osseointegration Micro-Threads */}
      <path
        d="M82 124H118L112 245C111 254 106 260 100 260C94 260 89 254 88 245L82 124Z"
        fill="url(#titaniumGrade)"
      />

      {/* Micro-Threads */}
      {[136, 148, 160, 172, 184, 196, 208, 220, 232, 244].map((y, i) => (
        <path
          key={y}
          d={`M${82 + (i * 0.6)} ${y}L${118 - (i * 0.6)} ${y - 4}`}
          stroke="#334155"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}

      {/* Active Laser Fusion Halo */}
      <ellipse cx="100" cy="180" rx="45" ry="60" fill="url(#laserGlow)" pointerEvents="none" />
    </svg>
  );
}

export function IntraoralScanWave({ className = "w-full h-32" }) {
  return (
    <svg
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0D9488" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0D9488" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* 3D Wave Gridlines */}
      <path
        d="M0 100 C 150 40, 250 160, 400 100 C 550 40, 650 160, 800 100"
        stroke="#0D9488"
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.6"
      />
      <path
        d="M0 120 C 150 60, 250 180, 400 120 C 550 60, 650 180, 800 120 L 800 200 L 0 200 Z"
        fill="url(#scanGrad)"
      />
    </svg>
  );
}
