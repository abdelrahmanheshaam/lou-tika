import React from 'react';
import { CategoryCard } from './CategoryCard';
import { Waves, Sparkles } from 'lucide-react';

interface CategoriesSectionProps {
  onNavigate: (page: 'catering' | 'b2b' | 'market') => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      id: 'catering' as const,
      categoryNumber: '01',
      title: 'CATERING',
      subtitle: 'More Than A Buffet. Part Of The Event.',
      description:
        'Finger food, open buffets, live stations, weddings, and corporate banquets. We don’t just design the menu — we build a visual world around it with our private styling collection of ceramics, silver, glass, and clay.',
      image:
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
      buttonText: 'Explore Catering',
      waveVariant: 1 as const,
    },
    {
      id: 'b2b' as const,
      categoryNumber: '02',
      title: 'FOOD INNOVATION',
      subtitle: 'We Turn Products Into Experiences.',
      description:
        'Recipe development, menu creation, serving rituals, brand activations, and food-led marketing for Heinz, Lamar, Nestlé, and regional partners. We make the product live beyond the pack.',
      image:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      buttonText: 'Discover Innovation',
      waveVariant: 2 as const,
    },
    {
      id: 'market' as const,
      categoryNumber: '03',
      title: 'READY-TO-COOK',
      subtitle: 'From Our Kitchen To Your Freezer.',
      description:
        'Chef-led favorites, prepared for real life: Kobeba, Sambousek, Stuffed Vine Leaves, Shish Tawook, Hawawshi, and Macaroni Béchamel. Made to keep at home, cook easily, and serve beautifully.',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      buttonText: 'Shop Ready-To-Cook',
      waveVariant: 3 as const,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FAF6F0] overflow-hidden">
      
      {/* Decorative Wavy Background Ambient Accents */}
      <div className="absolute top-0 inset-x-0 h-16 pointer-events-none opacity-40">
        <svg
          className="w-full h-full text-[#E8E1D5] fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Creative & Calm Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">


          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#182C24] tracking-tight">
            Three Ways To Experience It
          </h2>
          <p className="mt-3.5 text-[#4B5563] text-sm sm:text-base font-normal leading-relaxed">
            From the table, to the brand, to your home. Discover how our culinary philosophy comes to life across each dimension.
          </p>

          {/* Minimalist Wavy Accent Divider */}
          <div className="flex justify-center mt-5">
            <svg
              className="w-24 h-3 text-[#BA933E] stroke-current fill-none stroke-2"
              viewBox="0 0 96 12"
            >
              <path d="M0,6 Q12,0 24,6 T48,6 T72,6 T96,6" />
            </svg>
          </div>
        </div>

        {/* The 3 Creative Wavy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-9 items-stretch">
          {pillars.map((pillar) => (
            <CategoryCard
              key={pillar.id}
              categoryNumber={pillar.categoryNumber}
              title={pillar.title}
              subtitle={pillar.subtitle}
              description={pillar.description}
              image={pillar.image}
              buttonText={pillar.buttonText}
              waveVariant={pillar.waveVariant}
              onAction={() => onNavigate(pillar.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
