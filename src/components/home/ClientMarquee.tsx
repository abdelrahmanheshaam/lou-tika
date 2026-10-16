import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CLIENT_LOGOS } from '../../data/mockData';

interface LogoOpticalConfig {
  containerWidth: string;
  imgHeightClass: string;
  extraFilter?: string;
  extraImgClass?: string;
}

// Optical sizing calibration: accounts for differing whitespace margins in source PNGs/JPEGs
// so every brand mark has the exact same visual height (~48px-54px) and prominent scale
const OPTICAL_CONFIGS: Record<string, LogoOpticalConfig> = {
  'Heinz': {
    containerWidth: 'w-40 sm:w-48',
    imgHeightClass: 'h-[92px] sm:h-[110px]',
    extraFilter: 'brightness(0.3) contrast(1.5)',
  },
  'Lamar': {
    containerWidth: 'w-44 sm:w-52',
    imgHeightClass: 'h-[145px] sm:h-[170px]',
  },
  'PepsiCo': {
    containerWidth: 'w-44 sm:w-52',
    imgHeightClass: 'h-[140px] sm:h-[165px]',
  },
  'Beko': {
    containerWidth: 'w-32 sm:w-36',
    imgHeightClass: 'h-[50px] sm:h-[58px]',
    extraImgClass: 'w-[50px] sm:w-[58px] rounded-2xl shadow-xs border border-[#007AC2]/30 object-cover',
  },
  'Juhayna': {
    containerWidth: 'w-48 sm:w-56',
    imgHeightClass: 'h-[46px] sm:h-[52px]',
  },
  'Nescafé': {
    containerWidth: 'w-48 sm:w-56',
    imgHeightClass: 'h-[165px] sm:h-[195px]',
  },
  "Kellogg's": {
    containerWidth: 'w-44 sm:w-52',
    imgHeightClass: 'h-[78px] sm:h-[92px]',
  },
};

export const ClientMarquee: React.FC = () => {
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeInnerRef.current) return;

    const inner = marqueeInnerRef.current;
    // With 3 repeated sets of logos, scrolling 1/3 provides a seamless infinite loop
    const totalWidth = inner.scrollWidth / 3;

    const tween = gsap.to(inner, {
      x: -totalWidth,
      duration: 32,
      ease: 'none',
      repeat: -1,
    });

    const handleMouseEnter = () => tween.pause();
    const handleMouseLeave = () => tween.play();

    inner.addEventListener('mouseenter', handleMouseEnter);
    inner.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tween.kill();
      inner.removeEventListener('mouseenter', handleMouseEnter);
      inner.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Repeat logos 3 times for a completely seamless loop on any screen width
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative w-full py-14 sm:py-20 bg-[#FAF6F0] border-b border-[#E8E1D5] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <span className="text-xs font-mono tracking-[0.25em] text-[#785C1C] uppercase font-bold block mb-2">
          TRUSTED FOOD INNOVATION & CORPORATE PARTNERS
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#182C24]">
          Making The Product Live Beyond The Pack
        </h3>
        <p className="text-xs sm:text-sm text-[#4B5563] font-normal mt-1.5 max-w-xl mx-auto">
          Recipe development, brand activations, and culinary engineering for leading food & beverage brands.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade gradients matching brand cream background */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAF6F0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAF6F0] to-transparent z-10 pointer-events-none" />

        <div
          ref={marqueeInnerRef}
          className="flex items-center whitespace-nowrap will-change-transform py-2"
        >
          {duplicatedLogos.map((client, idx) => {
            const config = OPTICAL_CONFIGS[client.name] || {
              containerWidth: 'w-40 sm:w-48',
              imgHeightClass: 'h-14 sm:h-16',
            };

            return (
              <div
                key={`${client.name}-${idx}`}
                className={`inline-flex items-center justify-center shrink-0 h-24 sm:h-28 ${config.containerWidth} px-3 cursor-default group overflow-hidden`}
                title={`${client.name} — ${client.role}`}
              >
                {/* Optically calibrated brand logo */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${config.imgHeightClass} w-auto max-w-none object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${
                    config.extraImgClass || ''
                  }`}
                  style={config.extraFilter ? { filter: config.extraFilter } : undefined}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


