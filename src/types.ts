export interface Statistic {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: string;
  deliverables: string[];
}

export interface ClientBrand {
  id: string;
  name: string;
  category: string;
  description: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  badge?: string;
}

export type ProjectCategory = 
  | 'All'
  | 'Commercial Video'
  | 'Social Media Content'
  | 'Brand Campaign'
  | 'Event Documentation'
  | 'Creative Photography';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  platform: string;
  thumbnail: string;
  videoUrl?: string;
  externalUrl: string;
  year: string;
  deliverables: string[];
  summary: string;
}

export interface ViralContentItem {
  id: string;
  title: string;
  platform: 'Instagram Reel' | 'TikTok';
  views: string;
  rawViews: number;
  url: string;
  thumbnail: string;
  reachHighlight: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}
