export interface ProductIngredientLayer {
  id: string;
  name: string;
  description: string;
  origin: string;
  technique: string;
  image: string;
  offsetY: number;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  price: number;
  category: 'pate-terrines' | 'sous-vide' | 'pastas' | 'desserts' | 'confit';
  categoryLabel: string;
  frozenImage: string;
  cookedImage: string;
  shortDescription: string;
  theIdeaBehindIt: string;
  prepTimeMinutes: number;
  cookingMethod: string;
  portionSize: string;
  allergens: string[];
  netWeight: string;
  featured?: boolean;
  layers?: ProductIngredientLayer[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CateringEventItem {
  id: string;
  title: string;
  category: 'Gala' | 'Private Dining' | 'Corporate' | 'Weddings';
  guests: string;
  location: string;
  image: string;
  highlight: string;
  description: string;
}

export interface B2BCaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  culinarySolution: string;
  impact: string;
  keyMetric: string;
  metricLabel: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  rating: number;
  avatar: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface ClientLogo {
  name: string;
  logo: string;
  role: string;
}
