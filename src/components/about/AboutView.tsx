import React from 'react';
import { Sparkles, Heart, Utensils, Award, Users } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF6F0] text-[#1E2824] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from PDF Page 2 */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] text-xs tracking-widest text-[#BA933E] uppercase font-mono font-semibold mb-4 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#BA933E]" />
            TWO BACKGROUNDS • ONE SHARED TABLE
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-[#182C24] tracking-tight">
            The Story Behind <br />
            <span className="italic text-[#BA933E]">Lou & Tika</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
            Lou & Tika was founded by husband-and-wife partners Sherif and Rasha. Together, they built a business where food, ideas, and presentation constantly evolve.
          </p>
        </div>

        {/* The Founders Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founders Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-xl bg-white aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                  alt="Sherif and Rasha — Founders of Lou & Tika"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182C24]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E1D5] flex items-center justify-between shadow-xs">
                  <div>
                    <h4 className="text-base font-serif-luxury font-bold text-[#182C24]">Sherif & Rasha</h4>
                    <p className="text-[11px] font-mono text-[#BA933E] font-semibold">Founders & Creative Directors</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BA933E] font-semibold block">
                PARTNERS IN LIFE & CULINARY ART
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#182C24] leading-snug">
                Where Food, Ideas, and Presentation Constantly Evolve.
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
                <strong className="text-[#182C24] font-bold">Sherif</strong> brings extensive experience across food, tourism, and hospitality — understanding the logistics, operational flow, and taste precision required to execute banquets without compromise.
              </p>

              <p className="text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
                <strong className="text-[#182C24] font-bold">Rasha</strong> brings a rich background in marketing, creativity, and artistic direction — directing the styling collections, table choreography, and narrative that make every buffet an unforgettable work of art.
              </p>

              {/* The Name Origin Card */}
              <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5] text-[#233D33]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#BA933E] font-semibold mb-1">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>The Origin of "Lou & Tika"</span>
                </div>
                <p className="text-sm font-serif-luxury italic text-[#1E2824] leading-relaxed">
                  “Lou” and “Tika” are the beloved family nicknames of their daughters, <strong>Leila</strong> and <strong>Tia</strong>. The business was born from their family table and extends that warmth to every client.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#5E6963]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA933E]" />
                  Food Tourism Lineage
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA933E]" />
                  Creative & Artistic Direction
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BA933E]" />
                  Handcrafted Ready-to-Cook Provisions
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Section: The Core Philosophy */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#233D33] text-[#FAF6F0] text-center max-w-4xl mx-auto shadow-lg">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BA933E] font-semibold block mb-4">
            OUR PHILOSOPHY
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white mb-6">
            "Food With An Idea Behind It."
          </h3>
          <p className="text-[#FAF6F0]/90 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            From the table, to the brand, to your home. Whether catering a wedding with our private styling collection, engineering an experiential beverage ritual for a global brand, or packaging ready-to-cook kobeba for your freezer, every bite starts with an idea.
          </p>
          <div className="mt-8 flex justify-center items-center gap-6 text-xs font-mono text-[#BA933E]">
            <span>CATERING</span>
            <span>•</span>
            <span>FOOD INNOVATION</span>
            <span>•</span>
            <span>LOU & TIKA MARKET</span>
          </div>
        </div>

      </div>
    </div>
  );
};
