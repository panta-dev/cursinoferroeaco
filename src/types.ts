export interface Product {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string[];
  applications: string[];
  advantages: string[];
  whatsappMessage: string;
  badge?: string;
  category: 'estrutural' | 'vergalhoes' | 'complementares';
  imageTag: string;
  imageUrl?: string;
}

export interface AudiencePersona {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  heroSubtitle: string;
  imageUrl?: string;
  highlightBadge?: string;
  stats?: { value: string; label: string }[];
  painPoints: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  operationalBenefits: string[];
  customCopyPillar?: { title: string; desc: string }[];
  ctaText: string;
  whatsappMessage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  workType: string;
  product: string;
  deadline: string;
  message: string;
  projectFile?: File | null;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  street: string;
  number: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  fullAddress: string;
  phone: string;
  whatsapp: string;
  whatsappRaw: string; // e.g. "551150730006"
  email: string;
  workingHours: string;
  deliveryArea: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface TrackingConfig {
  gtmId: string;
  ga4MeasurementId: string;
  googleAdsConversionId: string;
  googleAdsConversionLabel: string;
  metaPixelId: string;
  isProduction: boolean;
}
