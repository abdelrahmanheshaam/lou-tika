import { Product, CateringEventItem, B2BCaseStudy, Testimonial, JobOpening, ClientLogo } from '../types';

export const HERO_SPOTLIGHT_PRODUCT: Product = {
  id: 'lt-spotlight-01',
  title: 'Artisanal Kobeba Cream of Pistachio',
  slug: 'kobeba-cream-pistachio',
  subtitle: 'Hand-shaped fine bulgur crust stuffed with prime minced meat & pistachio emulsion',
  price: 380,
  category: 'pate-terrines',
  categoryLabel: 'Ready-to-Cook Favorites',
  frozenImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
  cookedImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85',
  shortDescription: 'Signature handmade kobeba filled with premium seasoned meat, toasted pine nuts, and rich pistachio cream.',
  theIdeaBehindIt: 'From our kitchen to your freezer: prepared for real life — made to keep at home, cook easily, and serve beautifully.',
  prepTimeMinutes: 12,
  cookingMethod: 'Deep fry from frozen at 175°C for 6-8 minutes or air fry at 180°C for 12 minutes until golden crisp',
  portionSize: '1 Kilo pack (~20 pieces)',
  netWeight: '1,000g',
  allergens: ['Gluten', 'Pistachios'],
  featured: true
};

export const MARKET_PRODUCTS: Product[] = [
  HERO_SPOTLIGHT_PRODUCT,
  {
    id: 'lt-prod-02',
    title: 'Artisanal Sambousek Cheese Blend',
    slug: 'sambousek-cheese',
    subtitle: 'Crisp hand-folded dough with aged white cheeses, mint & black nigella seeds',
    price: 290,
    category: 'pastas',
    categoryLabel: 'Ready-to-Cook Favorites',
    frozenImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    cookedImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Flaky pastry pockets packed with creamy cheese infusion that melts gently without leaking.',
    theIdeaBehindIt: 'Engineered dough lamination prevents sogginess while holding in aromatic olive oil and mint notes.',
    prepTimeMinutes: 8,
    cookingMethod: 'Fry directly from frozen for 4 minutes or brush with oil and bake at 200°C for 10 minutes',
    portionSize: '1 Kilo pack (~24 pieces)',
    netWeight: '1,000g',
    allergens: ['Dairy', 'Gluten'],
    featured: true
  },
  {
    id: 'lt-prod-03',
    title: 'Stuffed Vine Leaves (Waraq Enab)',
    slug: 'stuffed-vine-leaves',
    subtitle: 'Hand-rolled Egyptian vine leaves with pomegranate molasses & herb rice',
    price: 320,
    category: 'confit',
    categoryLabel: 'Ready-to-Cook Favorites',
    frozenImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    cookedImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Tender baby grape leaves stuffed with fragrant Egyptian rice, mint, dill, lemon, and tangy pomegranate glaze.',
    theIdeaBehindIt: 'Pre-steamed and tightly rolled so every bite delivers melt-in-the-mouth tenderness without hours of prep.',
    prepTimeMinutes: 15,
    cookingMethod: 'Simmer gently with a splash of broth and lemon juice for 15 minutes',
    portionSize: '1 Kilo pack (~40 pieces)',
    netWeight: '1,000g',
    allergens: [],
    featured: true
  },
  {
    id: 'lt-prod-04',
    title: 'Artisanal Macaroni Béchamel',
    slug: 'macaroni-bechamel',
    subtitle: 'Golden baked pasta with seasoned beef ragù & velvety French béchamel sauce',
    price: 360,
    category: 'pastas',
    categoryLabel: 'Ready-to-Cook Favorites',
    frozenImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=800&q=80',
    cookedImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'A beloved family classic elevated with cultured butter, nutmeg-infused cream, and prime minced beef.',
    theIdeaBehindIt: 'Assembled in oven-safe ceramic-ready trays so you go from freezer to dinner table effortlessly.',
    prepTimeMinutes: 30,
    cookingMethod: 'Bake covered at 190°C for 25 mins, uncover for 5 mins to brown crust',
    portionSize: 'Generous 4-6 servings',
    netWeight: '1,200g',
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    featured: true
  },
  {
    id: 'lt-prod-05',
    title: 'Marinated Shish Tawook Skewers',
    slug: 'shish-tawook',
    subtitle: 'Tender chicken thighs in Lebanese yogurt, sumac, garlic & smoked paprika marinade',
    price: 420,
    category: 'sous-vide',
    categoryLabel: 'Ready-to-Cook Favorites',
    frozenImage: 'https://images.unsplash.com/photo-1514944298352-f41753c15383?auto=format&fit=crop&w=800&q=80',
    cookedImage: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Free-range chicken skewers infused with 24-hour garlic-lemon marinade, ready for grill, skillet or oven.',
    theIdeaBehindIt: 'Vacuum-infused marinade penetrates the meat fibers deep so it stays impossibly juicy when pan-seared.',
    prepTimeMinutes: 14,
    cookingMethod: 'Grill or pan-sear on high heat for 12-14 minutes, turning frequently',
    portionSize: '1 Kilo pack (8 large skewers)',
    netWeight: '1,000g',
    allergens: ['Dairy'],
    featured: false
  },
  {
    id: 'lt-prod-06',
    title: 'Authentic Cairo Hawawshi Loaves',
    slug: 'cairo-hawawshi',
    subtitle: 'Spiced minced beef in artisanal baladi bread seasoned with coriander, peppers & lamb fat',
    price: 340,
    category: 'sous-vide',
    categoryLabel: 'Ready-to-Cook Favorites',
    frozenImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    cookedImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Egypt’s quintessential street delicacy perfected with artisan baladi dough and juicy spiced beef filling.',
    theIdeaBehindIt: 'Double-sealed to lock in aromatics; toasts to a shatteringly crisp exterior with juicy interior.',
    prepTimeMinutes: 16,
    cookingMethod: 'Bake in oven wrapped in parchment for 14 mins, finish on direct grill for 2 mins',
    portionSize: 'Pack of 4 whole stuffed loaves',
    netWeight: '800g',
    allergens: ['Gluten'],
    featured: false
  }
];

export const CATERING_GALLERY: CateringEventItem[] = [
  {
    id: 'cat-01',
    title: 'Pyramids of Giza Gala Buffet',
    category: 'Gala',
    guests: '300 Guests',
    location: 'Giza Plateau, Cairo',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80',
    highlight: 'Thematic buffet with our private collection: bespoke ceramics, antique silver, clay, and desert lanterns.',
    description: 'More than a buffet — part of the event. Serving pieces and live moments working together under starlight.'
  },
  {
    id: 'cat-02',
    title: 'Botanical Garden Wedding Celebration',
    category: 'Weddings',
    guests: '450 Guests',
    location: 'Citadel Vista, Cairo',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
    highlight: 'Live stations, artisanal finger food, and visual table styling that guests stopped to photograph.',
    description: 'We don’t just design the menu; we build a visual world around it with florals, runners, and custom serving pieces.'
  },
  {
    id: 'cat-03',
    title: 'Executive Corporate Salon',
    category: 'Corporate',
    guests: '80 VIP Leaders',
    location: 'Zamalek Heritage Villa',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    highlight: 'Curated open buffet balancing creativity, presentation, and seamless corporate scheduling.',
    description: 'Meet → Listen → Design → Budget → Refine: Delivering the most value without losing the experience.'
  },
  {
    id: 'cat-04',
    title: 'Private Waterfront Villa Dining',
    category: 'Private Dining',
    guests: '24 Guests',
    location: 'North Coast Mediterranean Retreat',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    highlight: 'Intimate multi-course table setting with clay, wood, and handcrafted tableware from our collection.',
    description: 'Every table tells a story. An unforgettable dinner curated directly by Sherif & Rasha.'
  }
];

export const B2B_CASE_STUDIES: B2BCaseStudy[] = [
  {
    id: 'b2b-01',
    client: 'Heinz (Kraft Heinz Egypt)',
    industry: 'FMCG & Brand Activations',
    challenge: 'Heinz needed to turn their sauces and condiments from grocery shelf items into memorable summer beach culinary rituals.',
    culinarySolution: 'Created the "Beach Burger Bites" activation concept — developing signature handheld sliders, customized sauce rituals, and live cooking stations on the North Coast.',
    impact: 'Over 45,000 live samples served; viral social sharing with guests photographing the branded food experience.',
    keyMetric: '45K+',
    metricLabel: 'Experiential Samples Served',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    tags: ['Beach Burger Bites', 'Brand Activation', 'Recipe Development']
  },
  {
    id: 'b2b-02',
    client: 'Lamar (Lamar Aqua & Dairy)',
    industry: 'Beverages & Innovation',
    challenge: 'Launch Lamar Aqua Coconut Water into the modern Egyptian lifestyle market with food-led excitement.',
    culinarySolution: 'Formulated branded mocktails, tropical pairings, and dessert syrups celebrating coconut water hydration rituals across pop-up events.',
    impact: 'Established Lamar Aqua as the premier cocktail/mocktail mixer in high-end cafés and coastal beach clubs.',
    keyMetric: '#1',
    metricLabel: 'Lifestyle Beverage Innovation',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    tags: ['Lamar Aqua', 'Beverage Rituals', 'Food-Led Marketing']
  },
  {
    id: 'b2b-03',
    client: 'Nestlé / Nescafé',
    industry: 'Coffee & Consumer Goods',
    challenge: 'Elevate instant coffee consumption into an engaging, multi-sensory culinary ritual for millennial and Gen-Z consumers.',
    culinarySolution: 'Developed signature coffee-infused pastries, iced pairings, and cafeteria presentation rituals for corporate headquarters and brand pop-ups.',
    impact: 'Transformed routine coffee breaks into high-retention experiential brand moments.',
    keyMetric: '3X',
    metricLabel: 'Engagement Lift',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Nescafé Rituals', 'Cafeteria Innovation', 'Product to Experience']
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: 'Heinz',
    logo: 'https://payment.littleegypttours.com/wp-content/uploads/2026/10/images-removebg-preview-1.png',
    role: 'Beach Burger Bites & Activations',
  },
  {
    name: 'Lamar',
    logo: 'https://payment.littleegypttours.com/wp-content/uploads/2026/10/images__1_-removebg-preview.png',
    role: 'Aqua & Beverage Innovation',
  },
  {
    name: 'PepsiCo',
    logo: 'https://payment.littleegypttours.com/wp-content/uploads/2026/10/5d90a28f0162a116548844-removebg-preview.png',
    role: 'Brand & Event Activations',
  },
  {
    name: 'Beko',
    logo: 'https://payment.littleegypttours.com/wp-content/uploads/2026/10/beko.jpg',
    role: 'Kitchen Appliance Collaborations',
  },
  {
    name: 'Juhayna',
    logo: 'https://payment.littleegypttours.com/wp-content/uploads/2026/10/juhaynalogo-removebg-preview.png',
    role: 'Dairy & Culinary Concepts',
  },
  {
    name: 'Nescafé',
    logo: 'https://payment.littleegypttours.com/wp-content/uploads/2026/10/nescafea-removebg-preview.png',
    role: 'Recipe & Serving Rituals',
  },
  {
    name: "Kellogg's",
    logo: 'https://payment.littleegypttours.com/wp-content/uploads/2026/10/Kelloggs-Logo-removebg-preview.png',
    role: 'Breakfast & Snack Innovation',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Lou & Tika don’t just cater an event; they build a visual world around it. The buffet was a work of art, and guests literally lined up to take pictures beside the food.',
    author: 'Karim El-Ganzoury',
    title: 'Managing Partner',
    organization: 'Luxury Events Cairo',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    quote: 'Their frozen range is a revelation. Our freezer is always stocked with their Kobeba and Vine Leaves. The taste is pure homemade love with hotel-quality polish.',
    author: 'Mariam Radwan',
    title: 'Food Connoisseur & Host',
    organization: 'Cairo Private Dining Circle',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    quote: 'Sherif & Rasha helped our brand transition from just a packaged product on shelves to an unforgettable tasting experience. Their culinary marketing instincts are second to none.',
    author: 'Tarek Mansour',
    title: 'Brand Marketing Director',
    organization: 'Regional FMCG Leader',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-4',
    quote: 'The tablescape for our seaside celebration in El Gouna was breathtaking. Every plate felt like an intimate story of Mediterranean & Egyptian heritage crafted with utmost precision.',
    author: 'Nourhan El-Shazly',
    title: 'Private Event Host',
    organization: 'El Gouna Gathering',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-5',
    quote: 'From custom recipe formulation to live activation choreography, Lou & Tika consistently raise the bar for food innovation in Egypt. True culinary visionaries.',
    author: 'Hossam Fahmy',
    title: 'Managing Director',
    organization: 'Apex Hospitality Group',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Head Catering Chef & Presentation Specialist',
    department: 'Catering & Events',
    type: 'Full-time',
    location: 'Lou & Tika Atelier, New Cairo',
    description: 'Lead open buffet choreography, live stations, and thematic event execution alongside founders Sherif & Rasha.',
    requirements: ['5+ years high-end banquet & catering experience', 'Keen eye for tablescapes, ceramics, and food styling', 'Passion for hospitable storytelling']
  },
  {
    id: 'job-2',
    title: 'Culinary R&D & Recipe Developer',
    department: 'Food Innovation',
    type: 'Full-time',
    location: 'Lou & Tika Kitchen Lab, Cairo',
    description: 'Develop new product recipes, serving rituals, and brand activation menus for FMCG partners (Heinz, Lamar, Nestlé).',
    requirements: ['Culinary degree or equivalent experience in food innovation', 'Deep understanding of shelf-life, flavors, and consumer trends', 'Creative presentation skills']
  },
  {
    id: 'job-3',
    title: 'Market Production & Cold-Chain Lead',
    department: 'Ready-to-Cook Market',
    type: 'Full-time',
    location: 'Lou & Tika Production Facility, Cairo',
    description: 'Oversee artisanal production of Kobeba, Sambousek, and ready-to-cook favorites with strict quality and hygiene standards.',
    requirements: ['HACCP / Food Safety certification', 'Experience in batch cooking and flash-freezing protocols', 'Attention to handcrafted detail']
  }
];

export const FAQS = [
  {
    q: 'What is the philosophy behind "Food with an idea behind it"?',
    a: 'Every recipe and event at Lou & Tika starts with an idea: from the table, to the brand, to your home. We believe food is not just nutrition or decoration, but a sensory medium that connects people, sparks conversation, and creates lasting memories.'
  },
  {
    q: 'What are the three ways to experience Lou & Tika?',
    a: 'One brand, three ways to experience it: 1) Catering (Open buffets, live stations, finger foods, weddings & corporate events), 2) Food Innovation (Recipe creation, brand activations, and food-led marketing for FMCG brands like Heinz, Lamar, and Nestlé), and 3) Lou & Tika Market (Ready-to-cook chef favorites like Kobeba, Sambousek, Vine Leaves, and Macaroni Béchamel delivered to your freezer).'
  },
  {
    q: 'Who are the founders of Lou & Tika?',
    a: 'Lou & Tika was founded by husband-and-wife partners Sherif and Rasha. Sherif brings extensive experience across food, tourism, and hospitality. Rasha brings a background in marketing, creativity, and artistic direction. “Lou” and “Tika” are the family nicknames of their daughters, Leila and Tia!'
  },
  {
    q: 'What makes Lou & Tika catering different?',
    a: 'We don’t just design the menu — we build a visual world around it. Our own private styling collection lets every buffet speak the unique language of its event: ceramics, antique silver, glass, clay, wood, lanterns, florals, runners, and unexpected pieces mixed differently every single time.'
  },
  {
    q: 'How does your catering consultation process work?',
    a: '“Your Event. Your People. Your Budget.” It starts with a conversation: MEET → LISTEN → DESIGN → BUDGET → REFINE. We meet our clients, understand the occasion, guests, food preferences, and target budget, then balance creativity and quantity to deliver maximum value without losing the experience.'
  }
];
