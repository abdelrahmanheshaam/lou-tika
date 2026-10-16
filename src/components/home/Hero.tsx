import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Calendar } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'catering' | 'market' | 'b2b' | 'about') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#121A16] border-b border-[#233D33]">
      
      {/* Background Video using Autoplay & Muted iframe (No blur) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[160%] h-[160%] min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
          src="https://www.youtube-nocookie.com/embed/dt7SBUvNW6s?autoplay=1&mute=1&controls=0&loop=1&playlist=dt7SBUvNW6s&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Lou & Tika Culinary Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />

        {/* Clean, dark overlay layer without any blur to make content appear clearly */}
        <div className="absolute inset-0 bg-black/55 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/65 z-[1]" />
      </div>

      {/* Hero Content - Clean, High Contrast & Centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-24 pb-16 my-auto">
        
      

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-bold text-white tracking-tight leading-[1.08] max-w-4xl drop-shadow-md">
          FOOD WITH <br />
          <span className="italic font-bold text-[#E5C378]">AN IDEA BEHIND IT.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-xl text-stone-200 font-normal max-w-xl leading-relaxed drop-shadow-sm">
          From the table, to the brand, to your home.
        </p>

        {/* Action CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary Action Button */}
          <button
            onClick={() => onNavigate('catering')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#BA933E] hover:bg-[#A58032] text-white flex items-center justify-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Book Event Catering</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>

          {/* Secondary Action Button */}
          <button
            onClick={() => onNavigate('market')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 flex items-center justify-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#E5C378]" />
            <span>Shop Ready-To-Cook Market</span>
          </button>
        </div>

        {/* Editorial Sub-bar from Brand Dossier */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-stone-300 pt-8 border-t border-white/20">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E5C378]" />
            Founded by Sherif & Rasha
          </span>
          <span className="text-[#E5C378]">•</span>
          <span>Thematic Tableware Collection</span>
          <span className="text-[#E5C378]">•</span>
          <span>From Our Kitchen To Your Freezer</span>
        </div>

      </div>

    </section>
  );
};
