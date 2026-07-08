export type ActiveTab = 'home' | 'products' | 'pricing' | 'docs' | 'support';

export interface HardwareSpec {
  id: string;
  name: string;
  vram: string;
  interconnect: string;
  fp16Tflops: string;
  priceHourly: number;
  priceReserved: number;
  availability: 'Instant' | 'High Demand' | 'Limited';
  badge?: string;
  idealFor: string;
}

export interface PathwayCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  highlightColor: string;
}

export interface DocCategory {
  id: string;
  title: string;
  icon: string;
  articleCount: number;
  description: string;
  articles: { title: string; readTime: string; tag: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
