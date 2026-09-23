import React from 'react';

export const CyberShieldIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
      <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path 
      d="M12 2L3 7V12C3 17.5228 6.84297 22.4578 12 23.9238C17.157 22.4578 21 17.5228 21 12V7L12 2Z" 
      stroke="url(#shieldGrad)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      filter="url(#glowFilter)"
    />
    <path 
      d="M9 12L11 14L15 10" 
      stroke="#60A5FA" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const NeuralCoreIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="coreGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="0.5" stopColor="#A855F7" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="3" fill="url(#coreGrad)" />
    <circle cx="12" cy="4" r="2" stroke="#60A5FA" strokeWidth="1.5" />
    <circle cx="20" cy="12" r="2" stroke="#A855F7" strokeWidth="1.5" />
    <circle cx="12" cy="20" r="2" stroke="#EC4899" strokeWidth="1.5" />
    <circle cx="4" cy="12" r="2" stroke="#3B82F6" strokeWidth="1.5" />
    <path d="M12 6V9M12 15V18M6 12H9M15 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
  </svg>
);

export const TensorFlowIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tensorGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <path d="M4 7L12 2.5L20 7V17L12 21.5L4 17V7Z" stroke="url(#tensorGrad)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 2.5V12M12 12L20 7M12 12L4 7M12 12V21.5" stroke="url(#tensorGrad)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const EdgeNodeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="2" stroke="#34D399" strokeWidth="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="2" stroke="#38BDF8" strokeWidth="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="2" stroke="#A78BFA" strokeWidth="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="2" stroke="#F472B6" strokeWidth="1.5" />
    <path d="M10 6.5H14M17.5 10V14M14 17.5H10M6.5 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CosmicGridBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="0" cy="0" r="1" fill="rgba(96, 165, 250, 0.4)" />
      </pattern>
      <radialGradient id="meshGradient" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#08090A" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#gridPattern)" />
    <rect width="100%" height="100%" fill="url(#meshGradient)" />
  </svg>
);
