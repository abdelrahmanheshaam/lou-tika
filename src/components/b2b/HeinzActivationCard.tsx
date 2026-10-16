import React from 'react';
import { Sparkles, Camera, Flame, Share2, Award, ExternalLink } from 'lucide-react';

export const HeinzActivationCard: React.FC = () => {
  return (
    <div className="w-full rounded-3xl bg-[#FAF7F2] border border-[#EADBCC] shadow-[0_16px_50px_rgba(24,44,36,0.07)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(24,44,36,0.12)] hover:border-[#BA933E]/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        
        {/* ================= LEFT HALF: Visual Context (The Experiential Montage) ================= */}
        <div className="lg:col-span-6 relative p-3 sm:p-4 lg:p-5 flex flex-col justify-between bg-[#F4EFE6]/60 border-b lg:border-b-0 lg:border-r border-[#EADBCC]">
          
          {/* 4-Panel Photo Collage Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full min-h-[380px] sm:min-h-[460px] lg:min-h-full">
            
            {/* Panel 1 (Top-Left): Packed outdoor beach event & Heinz booth by the sea */}
            <div className="relative rounded-2xl overflow-hidden group shadow-sm bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
                alt="North Coast Beach Event Heinz Pop-up"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#E23727]/90 text-white text-[9px] font-mono font-bold tracking-wider uppercase backdrop-blur-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Beach Pavilion
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-medium leading-tight drop-shadow-sm">
                North Coast Mediterranean Coast
              </div>
            </div>

            {/* Panel 2 (Top-Right): Chefs grilling burgers outdoors with smoke */}
            <div className="relative rounded-2xl overflow-hidden group shadow-sm bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
                alt="Live grilling open air burger station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#182C24]/85 text-[#BA933E] text-[9px] font-mono font-bold tracking-wider uppercase backdrop-blur-xs flex items-center gap-1 border border-[#BA933E]/40">
                <Flame className="w-3 h-3 text-amber-400" />
                Live Grills
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-medium leading-tight drop-shadow-sm">
                Chefs Crafting Slider Bites
              </div>
            </div>

            {/* Panel 3 (Bottom-Left): Gathering around the coastal pop-up station */}
            <div className="relative rounded-2xl overflow-hidden group shadow-sm bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=80"
                alt="Crowd gathering at coastal activation booth"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-medium leading-tight drop-shadow-sm">
                High-Energy Coastal Footfall
              </div>
            </div>

            {/* Panel 4 (Bottom-Right): Up-close handheld Beach Burger Bites with dipping sauces */}
            <div className="relative rounded-2xl overflow-hidden group shadow-sm bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
                alt="Handheld Beach Burger Bites with Heinz sauces"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#E23727] text-white text-[9px] font-mono font-bold tracking-wider uppercase shadow-xs">
                Sauce Rituals
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-medium leading-tight drop-shadow-sm">
                Custom Dipping Pairings
              </div>
            </div>

          </div>

          {/* Overlaid Badge (Bottom-Left of left half) */}
          <div className="mt-3 lg:mt-0 lg:absolute lg:bottom-7 lg:left-7 z-20">
            <div className="rounded-2xl bg-[#182C24]/92 text-white backdrop-blur-md border border-[#BA933E]/50 shadow-[0_12px_32px_rgba(0,0,0,0.35)] p-4 sm:p-5 flex items-center gap-4 max-w-sm">
              <div className="w-12 h-12 rounded-xl bg-[#BA933E]/20 border border-[#BA933E]/40 flex items-center justify-center shrink-0 text-[#BA933E]">
                <Award className="w-6 h-6 text-[#BA933E]" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#BA933E] leading-none tracking-tight">
                  45K+
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white/95 uppercase mt-1 leading-snug">
                  EXPERIENTIAL SAMPLES SERVED
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT HALF: The Development Timeline (How It Happened) ================= */}
        <div className="lg:col-span-6 p-6 sm:p-9 lg:p-11 flex flex-col justify-between bg-[#FAF7F2]">
          
          <div>
            {/* Header Section */}
            <div className="mb-7 pb-5 border-b border-[#EADBCC]/80">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EADBCC] text-[10px] sm:text-[11px] tracking-widest text-[#BA933E] uppercase font-mono font-bold mb-3 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E23727]" />
                CASE 01 • FMCG & BRAND ACTIVATIONS
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-serif-luxury font-bold text-[#182C24] tracking-tight leading-tight">
                HEINZ <span className="font-sans font-normal text-lg sm:text-xl text-[#5E6963]">(Kraft Heinz Egypt)</span>
              </h3>
              
              <p className="mt-2 text-sm sm:text-base font-light text-[#4B5563] leading-relaxed">
                Transforming Grocery Condiments into a 45K+ North Coast Beach Ritual
              </p>
            </div>

            {/* Vertical Development Timeline */}
            <div className="relative pl-10 sm:pl-12 space-y-7">
              
              {/* Vertical Connecting Line */}
              <div className="absolute left-4 sm:left-4.5 top-3 bottom-4 w-[2px] bg-gradient-to-b from-[#BA933E] via-[#BA933E]/70 to-[#184628] border-l border-dashed border-[#BA933E]/80" />

              {/* Timeline Phase 1: The Challenge */}
              <div className="relative group">
                {/* Node 1: Shelf / Bottle Icon */}
                <div className="absolute -left-10 sm:-left-12 top-0.5 w-8 h-8 rounded-full bg-[#FAF6F0] border-2 border-[#BA933E] shadow-xs flex items-center justify-center text-[#BA933E] group-hover:scale-110 transition-transform">
                  {/* Custom bottle & shelf SVG icon */}
                  <svg className="w-4 h-4 text-[#BA933E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3h6v3H9z" />
                    <path d="M10 6v3a4 4 0 0 1-2 3.46V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.54A4 4 0 0 1 14 9V6" />
                    <line x1="3" y1="21" x2="21" y2="21" />
                  </svg>
                </div>

                <div className="bg-white/90 border border-[#EADBCC] rounded-2xl p-4 shadow-2xs hover:border-[#BA933E]/60 transition-colors">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200/80 mb-2">
                    THE CHALLENGE
                  </div>
                  <p className="text-xs sm:text-sm text-[#374151] font-medium leading-relaxed">
                    Turn grocery shelf sauces into memorable summer beach culinary rituals.
                  </p>
                </div>
              </div>

              {/* Timeline Phase 2: The Solution (Detailed Development) */}
              <div className="relative group">
                {/* Node 2: Sparkle / Flame Active Node */}
                <div className="absolute -left-10 sm:-left-12 top-0.5 w-8 h-8 rounded-full bg-[#E23727] text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Flame className="w-4 h-4 text-white" />
                </div>

                <div className="bg-white border-2 border-[#E23727]/30 rounded-2xl p-4.5 shadow-xs hover:border-[#E23727]/70 transition-colors">
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-900 border border-rose-200/80 mb-1.5">
                    THE SOLUTION
                  </div>
                  <h4 className="text-base sm:text-lg font-serif-luxury font-bold text-[#182C24] mb-3">
                    The ‘Beach Burger Bites’ Concept
                  </h4>
                  
                  {/* 3 Horizontal colorful capsule-shaped tag pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-950 border border-amber-200 shadow-2xs">
                      <span>🍔</span>
                      <span>Signature Handheld Sliders</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-950 border border-rose-200 shadow-2xs">
                      <span>🥫</span>
                      <span>Customized Sauce Rituals</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-950 border border-sky-200 shadow-2xs">
                      <span>🏖️</span>
                      <span>North Coast Live Stations</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline Phase 3: The Impact (Highlight Box) */}
              <div className="relative group">
                {/* Node 3: Camera / Social Share Impact Node */}
                <div className="absolute -left-10 sm:-left-12 top-0.5 w-8 h-8 rounded-full bg-[#184628] text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-4 h-4 text-emerald-200" />
                </div>

                {/* Enclosed rounded container with soft natural sage-green background */}
                <div className="bg-[#EBF2EC] border border-[#C5DBC8] rounded-2xl p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#184628]">
                      IMPACT & OUTCOME
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#184628]" />
                    <span className="text-[10px] font-mono text-[#2D5A3A] font-semibold">Flagship Activation</span>
                  </div>
                  <p className="text-base sm:text-lg font-serif-luxury font-bold text-[#14341F] leading-snug">
                    Over 45,000 live samples served, sparking massive viral social sharing & guest photography.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Metadata */}
          <div className="mt-8 pt-5 border-t border-[#EADBCC] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-[11px] font-mono font-medium text-[#5E6963] border border-[#EADBCC] shadow-2xs hover:border-[#BA933E] transition-colors">
                #BeachBurgerBites
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[11px] font-mono font-medium text-[#5E6963] border border-[#EADBCC] shadow-2xs hover:border-[#BA933E] transition-colors">
                #BrandActivation
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[11px] font-mono font-medium text-[#5E6963] border border-[#EADBCC] shadow-2xs hover:border-[#BA933E] transition-colors">
                #RecipeDevelopment
              </span>
            </div>
            
            <div className="text-xs font-mono text-[#BA933E] font-semibold flex items-center gap-1.5">
              <span>Lou & Tika Culinary Lab</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
