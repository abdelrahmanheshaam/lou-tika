import React from 'react';
import { ArrowRight, Waves } from 'lucide-react';

export interface CategoryCardProps {
  categoryNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  waveVariant?: 1 | 2 | 3;
  onAction: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryNumber,
  title,
  subtitle,
  description,
  image,
  buttonText,
  waveVariant = 1,
  onAction,
}) => {
  // Unique wave SVG paths for each category card to give an organic, out-of-the-box rhythm
  const wavePaths = {
    1: "M0,32 C120,60 220,10 340,42 C440,68 520,20 600,36 L600,80 L0,80 Z",
    2: "M0,45 C140,15 240,65 360,25 C460,-5 540,55 600,30 L600,80 L0,80 Z",
    3: "M0,25 C100,55 200,-5 320,38 C420,70 500,15 600,45 L600,80 L0,80 Z",
  };

  return (
    <div
      onClick={onAction}
      className="group relative cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-2"
    >
      {/* Outer Wavy Sculpted Card Container */}
      <div className="relative w-full overflow-hidden bg-white border border-[#E8E1D5] shadow-sm hover:shadow-xl hover:border-[#BA933E]/60 transition-all duration-500 rounded-[36px_18px_40px_18px] sm:rounded-[44px_22px_48px_22px] flex flex-col justify-between h-full">
        
        {/* Top Image Section with Organic Fluid Top Corner */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6F0]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Top Wavy Category Pill */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/95 text-[#233D33] border border-[#E8E1D5] font-bold shadow-xs">
              <Waves className="w-3 h-3 text-[#BA933E]" />
              {categoryNumber}
            </span>
          </div>

          {/* Organic Fluid Wavy SVG Divider - Seamlessly melts image into card surface */}
          <div className="absolute -bottom-1 inset-x-0 z-10 pointer-events-none">
            <svg
              className="w-full h-10 sm:h-12 text-white fill-current transition-transform duration-500 group-hover:scale-y-110"
              viewBox="0 0 600 80"
              preserveAspectRatio="none"
            >
              <path d={wavePaths[waveVariant]} />
            </svg>
          </div>
        </div>

        {/* Card Body with Wavy Accents */}
        <div className="p-6 sm:p-7 pt-2 flex-1 flex flex-col justify-between bg-white relative z-20">
          <div>
            {/* Primary Category Title (Dominant Bold) */}
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#112019] tracking-wide group-hover:text-[#785C1C] transition-colors leading-tight">
                {title}
              </h3>
            </div>

            {/* Subtitle / Pitch with bolder weight and darker warmer tone */}
            <p className="text-xs font-mono uppercase tracking-wide text-[#785C1C] font-bold mb-3">
              {subtitle}
            </p>

            {/* High Readability Description with standard Regular (400) weight, comfortable secondary text */}
            <p className="text-[13px] sm:text-sm text-[#4B5563] font-normal leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Bottom Action Area with Animated Wavy Line */}
          <div className="pt-4 border-t border-[#E8E1D5]/60 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#233D33] font-bold group-hover:text-[#BA933E] transition-colors">
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </span>

            {/* Decorative wavy micro-indicator */}
            <svg
              className="w-8 h-2 text-[#E8E1D5] group-hover:text-[#BA933E] transition-colors fill-none stroke-current stroke-2"
              viewBox="0 0 32 8"
            >
              <path d="M0,4 Q4,0 8,4 T16,4 T24,4 T32,4" />
            </svg>
          </div>
        </div>

      </div>

      {/* Subtle organic back-shadow aura on hover */}
      <div className="absolute inset-0 -z-10 rounded-[44px_22px_48px_22px] bg-[#BA933E]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};
