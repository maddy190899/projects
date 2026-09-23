export interface Metric {
  label: string;
  value: string;
  change?: string;
}

export interface DesignToken {
  name: string;
  value: string;
  category: 'color' | 'typography' | 'motion' | 'spatial';
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  category: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  deviceType: 'browser' | 'laptop' | 'zoomable';
  coverImage: string;
  detailImages: string[];
  metrics: Metric[];
  techStack: string[];
  liveUrl?: string;
  designTokens: DesignToken[];
  wireframeNodes: { x: number; y: number; label: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  iconType: 'brackets' | 'neural' | 'cube' | 'radar';
  metrics: string;
}

export interface EstimatorState {
  projectType: string;
  timeline: string;
  platform: string[];
  fidelity: 'mvp' | 'flagship' | 'enterprise';
  addons: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  budgetTier: string;
  projectType: string;
  timeline: string;
  estimatedInvestment: number;
  message: string;
  attachments: string[];
}
