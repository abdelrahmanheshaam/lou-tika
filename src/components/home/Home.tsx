import React from 'react';
import { Hero } from './Hero';
import { CategoriesSection } from './CategoriesSection';
import { ClientMarquee } from './ClientMarquee';
import { Testimonials } from './Testimonials';
import { ArrowRight, ShoppingBag, UtensilsCrossed, Sparkles, Heart } from 'lucide-react';

export interface HomeProps {
  onNavigate: (page: 'catering' | 'market' | 'b2b' | 'about') => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FAF6F0] text-[#1E2824]">
      
      {/* 1. Official PDF Hero */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Three Ways To Experience It: Catering, Food Innovation, Ready-to-Cook */}
      <CategoriesSection onNavigate={onNavigate} />

      {/* 3. FMCG Brands & Corporate Partners Marquee (Placed directly under Three Ways To Experience It) */}
      <ClientMarquee />

      {/* 4. Thematic Styling Feature Section (Page 5 from PDF: Deep Pine Green Canvas) */}
      <section className="py-20 sm:py-28 bg-[#233D33] text-[#FAF6F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#BA933E] text-white text-xs font-mono tracking-widest uppercase font-semibold">
                THEMATIC CATERING
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
                We Don't Just <br />
                Design The Menu. <br />
                <span className="text-[#BA933E] italic">We Build A Visual World Around It.</span>
              </h2>

              <p className="text-[#FAF6F0]/90 text-sm sm:text-base font-normal leading-relaxed">
                Our own styling collection lets every buffet speak the language of its event — ceramics, silver, glass, clay, wood, lanterns, florals, runners and unexpected pieces mixed differently every time.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('catering')}
                  className="px-7 py-3.5 rounded-xl bg-white text-[#233D33] hover:bg-[#FAF6F0] font-mono uppercase text-xs tracking-wider font-semibold flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Explore Thematic Catering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Styling Collection Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                  alt="Lou & Tika Private Styling Collection"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182C24]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#182C24]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-[#FAF6F0]">
                  <span>Atelier Collection • Ceramics, Clay & Glass</span>
                  <span className="text-[#BA933E]">Every Table Tells A Story</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The Founders Story Snapshot (Page 2 from PDF) */}
      <section className="py-20 sm:py-24 bg-[#F4EFE6] border-y border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BA933E] font-semibold block mb-2.5">
            TWO BACKGROUNDS. ONE SHARED TABLE.
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#182C24]">
            Founded by Sherif and Rasha
          </h2>
          <p className="mt-4 text-[#4B5563] text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            Sherif brings extensive experience across food, tourism and hospitality. Rasha brings a background in marketing, creativity and artistic direction. Together, they built a business where food, ideas and presentation constantly evolve.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8E1D5] text-xs font-mono text-[#BA933E]">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>“Lou” and “Tika” are the family nicknames of their daughters, Leila and Tia</span>
          </div>
        </div>
      </section>

      {/* 6. Testimonials & Accolades */}
      <Testimonials />

      {/* 7. Closing Call To Action (Page 10 from PDF) */}
      <section className="py-20 sm:py-24 bg-[#FAF6F0] border-t border-[#E8E1D5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BA933E] font-semibold block mb-3">
            CATERING • FOOD INNOVATION • LOU & TIKA MARKET
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#182C24] leading-tight">
            One Brand. <br />
            <span className="italic text-[#BA933E]">Three Ways To Experience It.</span>
          </h2>
          <p className="mt-4 text-[#4B5563] text-sm sm:text-base font-normal max-w-lg mx-auto leading-relaxed">
            From the table, to the brand, to your home. Ready to plan an event or stock your freezer?
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigate('catering')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-brand-green text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Book Event Catering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('market')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border border-[#233D33] text-[#233D33] hover:bg-[#233D33] hover:text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#BA933E]" />
              <span>Order From The Market</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
