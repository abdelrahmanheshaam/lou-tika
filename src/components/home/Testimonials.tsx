import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  const prev = useCallback(() => {
    setCurrentIndex((c) => (c === 0 ? total - 1 : c - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrentIndex((c) => (c === total - 1 ? 0 : c + 1));
  }, [total]);

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="py-20 sm:py-28 bg-[#FAF6F0] border-b border-[#E8E1D5] overflow-hidden select-none focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Customer testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#785C1C] font-bold block mb-2">
            WHAT PEOPLE SAY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#182C24] tracking-tight">
            Voices From Our Shared Table
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563] font-normal max-w-xl mx-auto">
            Honest notes from hosts, event choreographers, and dining partners who gathered around Lou & Tika.
          </p>
        </div>

        {/* 3D Coverflow Stage */}
        <div
          className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[430px] md:h-[400px] flex items-center justify-center overflow-visible"
          style={{
            perspective: '1100px',
            perspectiveOrigin: 'center center',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {TESTIMONIALS.map((item, index) => {
            // Calculate shortest circular offset from active item
            let offset = (index - currentIndex) % total;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = isActive || isLeft || isRight;

            // Coverflow 3D Transform & Styles
            let transformStyle = '';
            let opacity = 0;
            let blur = 'blur(8px)';
            let zIndex = 0;
            let pointerEvents: 'auto' | 'none' = 'none';
            let cursor = 'default';

            if (isActive) {
              transformStyle = 'translateX(-50%) translateY(0px) scale(1) rotateY(0deg)';
              opacity = 1;
              blur = 'blur(0px)';
              zIndex = 30;
              pointerEvents = 'auto';
              cursor = 'default';
            } else if (isLeft) {
              transformStyle = 'translateX(calc(-50% - 56%)) scale(0.85) rotateY(24deg)';
              opacity = 0.45;
              blur = 'blur(4px)';
              zIndex = 15;
              pointerEvents = 'auto';
              cursor = 'pointer';
            } else if (isRight) {
              transformStyle = 'translateX(calc(-50% + 56%)) scale(0.85) rotateY(-24deg)';
              opacity = 0.45;
              blur = 'blur(4px)';
              zIndex = 15;
              pointerEvents = 'auto';
              cursor = 'pointer';
            } else {
              // Queued / Far cards
              transformStyle = `translateX(calc(-50% + ${
                offset < 0 ? '-115%' : '115%'
              })) scale(0.7) rotateY(${offset < 0 ? '35deg' : '-35deg'})`;
              opacity = 0;
              blur = 'blur(8px)';
              zIndex = 0;
              pointerEvents = 'none';
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isLeft) prev();
                  if (isRight) next();
                }}
                className={`absolute top-0 left-1/2 w-[88%] sm:w-[520px] md:w-[580px] rounded-2xl bg-white p-7 sm:p-10 border transition-all duration-500 ${
                  isActive
                    ? 'border-[#BA933E]/40 shadow-[0_22px_55px_rgba(24,44,36,0.13)]'
                    : 'border-[#E8E1D5] shadow-[0_8px_24px_rgba(24,44,36,0.06)]'
                }`}
                style={{
                  transform: transformStyle,
                  opacity,
                  filter: blur,
                  zIndex,
                  pointerEvents,
                  cursor,
                  transition:
                    'transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms cubic-bezier(0.25, 1, 0.5, 1), filter 500ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 500ms cubic-bezier(0.25, 1, 0.5, 1), border-color 500ms cubic-bezier(0.25, 1, 0.5, 1)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform, opacity, filter',
                }}
                aria-hidden={!isActive}
              >
                {/* Card Header: Quote Badge + Star Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#785C1C] border border-[#E8E1D5] flex items-center justify-center shadow-xs">
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex items-center gap-1" aria-label={`${item.rating || 5} out of 5 stars`}>
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#BA933E] text-[#BA933E]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg sm:text-xl md:text-2xl font-serif-luxury font-bold text-[#182C24] leading-relaxed mb-8 italic">
                  "{item.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-5 border-t border-[#E8E1D5]">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#BA933E]/50 shadow-xs"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#182C24] leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-xs text-[#4B5563] font-mono mt-0.5">
                        {item.title} • <span className="text-[#785C1C] font-bold">{item.organization}</span>
                      </p>
                    </div>
                  </div>

                  {/* Active Card Quick Marker */}
                  {isActive && (
                    <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-[#785C1C] bg-[#FAF6F0] px-2.5 py-1 rounded-sm border border-[#E8E1D5] font-semibold">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls & Pagination */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Arrow Buttons & Counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#233D33] hover:text-white text-[#233D33] flex items-center justify-center transition-all duration-300 border border-[#E8E1D5] shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#BA933E]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-[#182C24] px-3 tracking-wider">
              0{currentIndex + 1} / 0{total}
            </span>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#233D33] hover:text-white text-[#233D33] flex items-center justify-center transition-all duration-300 border border-[#E8E1D5] shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#BA933E]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  idx === currentIndex
                    ? 'w-7 bg-[#BA933E]'
                    : 'w-2 bg-[#D9CFBF] hover:bg-[#BA933E]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Subtle Hint */}
        <p className="mt-4 text-center text-xs font-mono text-[#5E6963] tracking-wide">
          Click side cards, use arrows, or swipe to explore
        </p>
      </div>
    </section>
  );
};

