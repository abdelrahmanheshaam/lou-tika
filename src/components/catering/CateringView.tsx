import React, { useState } from 'react';
import { CATERING_GALLERY } from '../../data/mockData';
import { CateringEventItem } from '../../types';
import { 
  UtensilsCrossed, 
  Wine, 
  Users, 
  ChefHat, 
  Sparkles, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  MapPin, 
  Camera, 
  X,
  Calendar,
  Clock,
  Sparkle
} from 'lucide-react';

export const CateringView: React.FC = () => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<CateringEventItem | null>(null);

  // Multi-step form state
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [recentlyBouncedCard, setRecentlyBouncedCard] = useState<string | null>(null);

  // Set 'Weddings & Engagements' as selected by default per design specification
  const [formData, setFormData] = useState({
    eventType: 'Weddings & Engagements',
    guestCount: '75-200 Guests',
    eventDate: '',
    location: '',
    budgetPerGuest: '2,500 - 4,000 EGP',
    culinaryStyle: 'Thematic Buffet with Styled Serving Pieces',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    specialRequirements: '',
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const galleryCategories = ['All', 'Gala', 'Weddings', 'Corporate', 'Private Dining'];

  const filteredGallery = selectedGalleryCategory === 'All'
    ? CATERING_GALLERY
    : CATERING_GALLERY.filter((item) => item.category === selectedGalleryCategory);

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleCardSelect = (title: string) => {
    setFormData((prev) => ({ ...prev, eventType: title }));
    setRecentlyBouncedCard(title);
    setTimeout(() => setRecentlyBouncedCard(null), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Step definitions with custom expressive icons and labels
  const stepsConfig = [
    { num: 1, label: '01. Event Format', icon: Wine, desc: 'Setup style' },
    { num: 2, label: '02. Guest Count', icon: Users, desc: 'Scale & venue' },
    { num: 3, label: '03. Culinary Style', icon: ChefHat, desc: 'Menu & cloche' },
    { num: 4, label: '04. Budget & Vibe', icon: Sparkles, desc: 'Details & notes' },
  ];

  // 2x2 Interactive Event Formats for Step 1
  const eventFormats = [
    {
      id: 'finger-food',
      title: 'Finger Food & Open Buffet',
      desc: 'Handcrafted canapés, hot bites, and artisanal cold displays with themed presentation',
      tag: 'Cocktail & Social',
      iconContainer: 'bg-[#FDF6E2] text-[#B88728] border-[#F3E2BD]',
      renderIcon: (isHovered: boolean, isBounced: boolean) => (
        <svg 
          className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 ${
            isBounced ? 'scale-125 -translate-y-1' : isHovered ? 'scale-110' : ''
          }`} 
          viewBox="0 0 32 32" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Appetizer skewer & canapé tray */}
          <ellipse cx="16" cy="22" rx="13" ry="5" />
          <path d="M7 21v-3c0-1.5 4-3 9-3s9 1.5 9 3v3" />
          <line x1="11" y1="8" x2="11" y2="17" />
          <circle cx="11" cy="7.5" r="2.5" fill="currentColor" fillOpacity="0.25" />
          <circle cx="11" cy="12.5" r="1.5" fill="currentColor" fillOpacity="0.4" />
          <line x1="21" y1="9" x2="21" y2="17" />
          <circle cx="21" cy="8.5" r="2.2" fill="currentColor" fillOpacity="0.25" />
          <circle cx="21" cy="13" r="1.5" fill="currentColor" fillOpacity="0.4" />
          <path d="M16 10v7" />
          <circle cx="16" cy="9.5" r="1.8" fill="currentColor" fillOpacity="0.3" />
        </svg>
      )
    },
    {
      id: 'weddings',
      title: 'Weddings & Engagements',
      desc: 'Bespoke culinary experience with full aesthetic tableware, florals & live stations',
      tag: 'Flagship Celebration',
      iconContainer: 'bg-[#FBEFEA] text-[#C26D55] border-[#F5DACD]',
      renderIcon: (isHovered: boolean, isBounced: boolean) => (
        <svg 
          className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 ${
            isBounced ? 'scale-125 -translate-y-1' : isHovered ? 'scale-110' : ''
          }`} 
          viewBox="0 0 32 32" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Two interlocking wedding rings with floral diamond accent */}
          <circle cx="12" cy="18" r="7" />
          <circle cx="20" cy="18" r="7" />
          <path d="M12 7l2 4-2 2-2-2 2-4z" fill="currentColor" fillOpacity="0.35" />
          <path d="M23 9.5l1.5 2-1.5 1.5-1.5-1.5L23 9.5z" fill="currentColor" fillOpacity="0.25" />
          <path d="M5 26c2-2 5-2 7 0" />
          <path d="M20 26c2-2 5-2 7 0" />
        </svg>
      )
    },
    {
      id: 'corporate',
      title: 'Corporate Catering',
      desc: 'Executive lunches, board meetings, brand activations, and cocktail celebrations',
      tag: 'Executive & Brand',
      iconContainer: 'bg-[#EEF4F0] text-[#1E2F23] border-[#D5E5DB]',
      renderIcon: (isHovered: boolean, isBounced: boolean) => (
        <svg 
          className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 ${
            isBounced ? 'scale-125 -translate-y-1' : isHovered ? 'scale-110' : ''
          }`} 
          viewBox="0 0 32 32" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Executive Dining Cloche & Briefcase */}
          <path d="M5 22h22" />
          <path d="M6 22a10 10 0 0 1 20 0" />
          <path d="M16 12V9" />
          <circle cx="16" cy="8" r="2" fill="currentColor" fillOpacity="0.35" />
          <path d="M4 25h24a1 1 0 0 0 1-1v-2H3v2a1 1 0 0 0 1 1z" fill="currentColor" fillOpacity="0.15" />
        </svg>
      )
    },
    {
      id: 'private',
      title: 'Private Residence Dining',
      desc: 'Intimate villa dinners, celebrations, and personalized multi-course table settings',
      tag: 'Curated Villa Dining',
      iconContainer: 'bg-[#F7F2EB] text-[#8C6D46] border-[#EAE0D1]',
      renderIcon: (isHovered: boolean, isBounced: boolean) => (
        <svg 
          className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 ${
            isBounced ? 'scale-125 -translate-y-1' : isHovered ? 'scale-110' : ''
          }`} 
          viewBox="0 0 32 32" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Chandelier over intimate dining villa setting */}
          <path d="M16 4v5" />
          <path d="M11 9h10" />
          <path d="M8 13c1.5-2 4-4 8-4s6.5 2 8 4" />
          <circle cx="10" cy="14" r="1.5" fill="currentColor" />
          <circle cx="16" cy="15" r="1.5" fill="currentColor" />
          <circle cx="22" cy="14" r="1.5" fill="currentColor" />
          <path d="M5 23h22" />
          <path d="M7 23v5" />
          <path d="M25 23v5" />
          <path d="M13 23v5" />
          <path d="M19 23v5" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1E2F23] min-h-screen">
      
      {/* ================= 1. VIDEO HERO BANNER ================= */}
      <section className="relative w-full h-[290px] sm:h-[350px] md:h-[390px] flex items-center justify-center overflow-hidden bg-[#121A16] border-b border-[#1E2F23]">
        
        {/* Background Video using Autoplay & Muted iframe */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[160%] h-[160%] min-w-[100vw] min-h-[100%] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
            src="https://www.youtube-nocookie.com/embed/dt7SBUvNW6s?autoplay=1&mute=1&controls=0&loop=1&playlist=dt7SBUvNW6s&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Lou & Tika Catering Culinary Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />

          {/* Clean, dark overlay layers */}
          <div className="absolute inset-0 bg-black/60 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121A16] via-black/40 to-black/65 z-[1]" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-8 pb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs tracking-widest text-[#D4AF37] uppercase font-mono font-semibold mb-3.5 shadow-md">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#D4AF37]" />
            MORE THAN A BUFFET • PART OF THE EVENT
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-white tracking-tight leading-tight drop-shadow-md">
            Your Event. Your People. <br className="hidden sm:inline" />
            <span className="italic text-[#D4AF37] font-bold">Your Budget.</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-stone-200 font-normal max-w-lg leading-relaxed drop-shadow-sm">
            It starts with a conversation. Bespoke menus and visual styling curated by Sherif & Rasha.
          </p>

          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono font-semibold text-[#D4AF37]/90 tracking-wider">
            <span>MEET</span>
            <span className="text-white/40">→</span>
            <span>LISTEN</span>
            <span className="text-white/40">→</span>
            <span>DESIGN</span>
            <span className="text-white/40">→</span>
            <span>BUDGET</span>
            <span className="text-white/40">→</span>
            <span>REFINE</span>
          </div>
        </div>
      </section>

      {/* ================= 2. DIRECTLY UNDERNEATH: INTERACTIVE MULTI-STEP CATERING PLANNER ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20 pb-20">
        
        <div id="catering-form" className="rounded-3xl bg-[#FAF8F5] border border-[#EADBCC] p-6 sm:p-12 md:p-14 shadow-[0_16px_50px_rgba(30,47,35,0.08)]">
          
          {/* Header Section (Centered) */}
          <div className="text-center max-w-2xl mx-auto mb-11">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EADBCC] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#D4AF37] font-bold mb-3 shadow-2xs">
              <Sparkle className="w-3 h-3 text-[#D4AF37]" />
              IT STARTS WITH A CONVERSATION
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-[38px] font-serif-luxury font-bold text-[#1E2F23] tracking-tight leading-tight">
              Plan Your Catering With Sherif & Rasha
            </h2>
            
            <p className="text-xs sm:text-sm text-[#4B5563] font-normal mt-3 leading-relaxed max-w-xl mx-auto">
              We meet our clients, understand the occasion, the guests, the food they love, and what they want to spend — balancing creativity, quantity, and budget to deliver the most value without losing the experience.
            </p>
          </div>

          {/* Interactive 4-Step Progress Bar (With Animated Icons & Labels) */}
          <div className="relative max-w-2xl mx-auto mb-12 px-2 sm:px-4">
            
            {/* Background connecting track line */}
            <div className="absolute top-6 sm:top-7 left-10 right-10 sm:left-14 sm:right-14 h-[2px] bg-[#EADBCC] z-0" />
            
            {/* Animated active progress line */}
            <div 
              className="absolute top-6 sm:top-7 left-10 sm:left-14 h-[2px] bg-gradient-to-r from-[#1E2F23] via-[#D4AF37] to-[#1E2F23] transition-all duration-500 ease-out z-0"
              style={{
                width: `${((currentStep - 1) / 3) * 100}%`,
                maxWidth: 'calc(100% - 5rem)'
              }}
            />

            {/* Stepper Nodes */}
            <div className="relative z-10 flex items-start justify-between">
              {stepsConfig.map((step) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.num;
                const isCompleted = currentStep > step.num;

                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setCurrentStep(step.num)}
                    className="group flex flex-col items-center focus:outline-none transition-all duration-300"
                  >
                    {/* Node Circle with Micro-Interactions */}
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#1E2F23] text-[#D4AF37] ring-4 ring-[#1E2F23]/15 shadow-lg scale-105 border border-[#D4AF37]/50'
                          : isCompleted
                          ? 'bg-[#2D4A36] text-[#FAF8F5] shadow-xs hover:scale-105'
                          : 'bg-[#FAF8F5] text-[#717E76] border border-[#EADBCC] hover:border-[#D4AF37] hover:text-[#1E2F23] hover:scale-105 shadow-2xs'
                      }`}
                    >
                      <IconComponent 
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-115 ${
                          isActive 
                            ? 'scale-110 drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]' 
                            : ''
                        }`} 
                      />
                    </div>

                    {/* Step Label below node */}
                    <div className="mt-2.5 text-center">
                      <span 
                        className={`block text-[11px] sm:text-xs font-mono font-bold tracking-wider transition-colors ${
                          isActive
                            ? 'text-[#1E2F23]'
                            : isCompleted
                            ? 'text-[#2D4A36]'
                            : 'text-[#717E76] group-hover:text-[#1E2F23]'
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="hidden sm:block text-[10px] text-[#8C9690] font-sans font-normal mt-0.5">
                        {step.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Form Submission Message */}
          {formSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center bg-white rounded-3xl border border-[#EADBCC] p-8 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5 shadow-xs">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#1E2F23] font-bold">
                Conversation Initiated
              </h3>
              <p className="text-sm text-[#4B5563] max-w-md mt-2.5 leading-relaxed font-normal">
                Thank you, <strong className="text-[#1E2F23] font-semibold">{formData.clientName || 'valued host'}</strong>. Sherif and Rasha have received your catering vision for <strong className="text-[#1E2F23] font-semibold">{formData.eventType}</strong> and will connect with your bespoke menu and table styling blueprint.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setCurrentStep(1);
                }}
                className="mt-8 px-8 py-3.5 rounded-xl bg-[#1E2F23] hover:bg-[#2A4232] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                Plan Another Occasion
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* ================= STEP 1: SELECT EVENT FORMAT ================= */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  
                  {/* Step Header */}
                  <div className="border-b border-[#EADBCC] pb-3.5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#1E2F23] font-bold">
                        Step 1: Select Event Format
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5E6963] font-sans mt-0.5">
                        Choose the style of culinary setup for your gathering
                      </p>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#D4AF37] uppercase tracking-wider">
                      Selected: {formData.eventType}
                    </span>
                  </div>

                  {/* 2x2 Interactive Selection Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {eventFormats.map((format) => {
                      const isSelected = formData.eventType === format.title;
                      const isBounced = recentlyBouncedCard === format.title;

                      return (
                        <div
                          key={format.id}
                          onClick={() => handleCardSelect(format.title)}
                          className={`group relative rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                            isSelected
                              ? 'bg-[#FAF6F0] border-2 border-[#1E2F23] shadow-md ring-1 ring-[#1E2F23]/20'
                              : 'bg-white border border-[#EADBCC] hover:border-[#D4AF37] hover:bg-[#FAF8F5] hover:shadow-md'
                          }`}
                        >
                          {/* Top Row: Icon container & Selected Checkmark */}
                          <div className="flex items-start justify-between mb-4">
                            
                            {/* Bespoke interactive icon in soft-tinted container */}
                            <div 
                              className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${format.iconContainer}`}
                            >
                              {format.renderIcon(false, isBounced)}
                            </div>

                            {/* Checkmark Indicator */}
                            {isSelected ? (
                              <div className="w-6 h-6 rounded-full bg-[#1E2F23] text-white flex items-center justify-center shadow-xs animate-in zoom-in-50 duration-200">
                                <Check className="w-3.5 h-3.5 text-[#D4AF37] stroke-[3]" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full border border-[#D5CCC0] group-hover:border-[#BA933E] transition-colors" />
                            )}
                          </div>

                          {/* Card Content */}
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <h4 className="text-base sm:text-lg font-serif-luxury font-bold text-[#1E2F23]">
                                {format.title}
                              </h4>
                            </div>

                            <p className="text-xs sm:text-[13px] text-[#4B5563] font-normal leading-relaxed">
                              {format.desc}
                            </p>
                          </div>

                          {/* Subtle pill tag */}
                          <div className="mt-4 pt-3 border-t border-[#EADBCC]/60 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-[#8C9690] uppercase tracking-wider">{format.tag}</span>
                            {isSelected && (
                              <span className="text-[#1E2F23] font-bold uppercase tracking-wider flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                Active Selection
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              )}

              {/* ================= STEP 2: GUEST COUNT, DATE & VENUE ================= */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  
                  <div className="border-b border-[#EADBCC] pb-3.5">
                    <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#1E2F23] font-bold">
                      Step 2: Guest Count, Date & Venue
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6963] font-sans mt-0.5">
                      Help us size the culinary team, stations, and setup requirements
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2 font-bold tracking-wider">
                      Estimated Guest Scale
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['10-30 Guests', '30-75 Guests', '75-200 Guests', '200-500+ Guests'].map((g) => (
                        <button
                          type="button"
                          key={g}
                          onClick={() => setFormData({ ...formData, guestCount: g })}
                          className={`p-3.5 rounded-xl border text-xs font-mono transition-all ${
                            formData.guestCount === g
                              ? 'bg-[#1E2F23] text-[#D4AF37] border-[#1E2F23] font-bold shadow-xs'
                              : 'bg-white border-[#EADBCC] text-[#5E6963] hover:border-[#D4AF37] hover:text-[#1E2F23]'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2 font-bold tracking-wider">
                        Target Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-white border border-[#EADBCC] rounded-xl px-4 py-3 text-sm text-[#1E2824] focus:outline-none focus:border-[#1E2F23]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2 font-bold tracking-wider">
                        Venue / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. New Cairo Villa, Zamalek, Sahel, Giza"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-white border border-[#EADBCC] rounded-xl px-4 py-3 text-sm text-[#1E2824] placeholder-[#5E6963]/60 focus:outline-none focus:border-[#1E2F23]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 3: CULINARY STYLE & PRESENTATION ================= */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  
                  <div className="border-b border-[#EADBCC] pb-3.5">
                    <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#1E2F23] font-bold">
                      Step 3: Culinary Style & Service Format
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6963] font-sans mt-0.5">
                      Tailored to deliver the most memorable presentation for your event
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2.5 font-bold tracking-wider">
                      Presentation Direction
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { title: 'Thematic Buffet with Styled Pieces', desc: 'Curated mix of ceramics, silver, clay, florals & wooden risers' },
                        { title: 'Interactive Live Cooking Stations', desc: 'Chefs preparing artisanal dishes live in front of guests' },
                        { title: 'Plated Multi-Course Villa Experience', desc: 'Intimate fine dining rhythm with dedicated courses' },
                        { title: 'Canapés & Cocktail Service', desc: 'Passed trays with curated pairing dips and signature bites' },
                      ].map((style) => (
                        <div
                          key={style.title}
                          onClick={() => setFormData({ ...formData, culinaryStyle: style.title })}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.culinaryStyle === style.title
                              ? 'bg-[#FAF6F0] border-2 border-[#1E2F23] shadow-xs'
                              : 'bg-white border-[#EADBCC] hover:border-[#D4AF37]'
                          }`}
                        >
                          <div className="text-xs font-mono font-bold text-[#1E2F23]">{style.title}</div>
                          <div className="text-[11px] text-[#4B5563] font-normal mt-1 leading-relaxed">{style.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2.5 font-bold tracking-wider">
                      Target Budget Per Guest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {[
                        { label: '1,500 - 2,500 EGP', desc: 'Finger food & artisanal light buffet presentation' },
                        { label: '2,500 - 4,000 EGP', desc: 'Full open buffet with live cooking stations and styled tableware' },
                        { label: '4,000+ EGP', desc: 'Signature bespoke gala & custom thematic serving pieces' },
                      ].map((b) => (
                        <div
                          key={b.label}
                          onClick={() => setFormData({ ...formData, budgetPerGuest: b.label })}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.budgetPerGuest === b.label
                              ? 'bg-[#FAF6F0] border-2 border-[#1E2F23] ring-1 ring-[#1E2F23] shadow-xs'
                              : 'bg-white border-[#EADBCC] hover:border-[#D4AF37]'
                          }`}
                        >
                          <div className="text-xs font-mono font-bold text-[#1E2F23]">{b.label}</div>
                          <div className="text-[11px] text-[#4B5563] font-normal mt-1 leading-relaxed">{b.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* ================= STEP 4: BUDGET & VIBE (CONTACT & OCCASION) ================= */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  
                  <div className="border-b border-[#EADBCC] pb-3.5">
                    <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#1E2F23] font-bold">
                      Step 4: Contact Information & Occasion Vibe
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6963] font-sans mt-0.5">
                      Where can Sherif & Rasha reach out with your proposal?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2 font-bold tracking-wider">
                        Host Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Youssef Nabil"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        className="w-full bg-white border border-[#EADBCC] rounded-xl px-4 py-3 text-sm text-[#1E2824] focus:outline-none focus:border-[#1E2F23]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2 font-bold tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="youssef@example.com"
                        value={formData.clientEmail}
                        onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                        className="w-full bg-white border border-[#EADBCC] rounded-xl px-4 py-3 text-sm text-[#1E2824] focus:outline-none focus:border-[#1E2F23]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2 font-bold tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+20 100..."
                        value={formData.clientPhone}
                        onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                        className="w-full bg-white border border-[#EADBCC] rounded-xl px-4 py-3 text-sm text-[#1E2824] focus:outline-none focus:border-[#1E2F23]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#1E2F23] mb-2 font-bold tracking-wider">
                      Occasion Vision & Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the event occasion, guest preferences, or specific styling ideas..."
                      value={formData.specialRequirements}
                      onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                      className="w-full bg-white border border-[#EADBCC] rounded-xl p-3 text-xs text-[#1E2824] placeholder-[#5E6963]/60 focus:outline-none focus:border-[#1E2F23]"
                    />
                  </div>

                </div>
              )}

              {/* Step Controls (Footer) */}
              <div className="flex items-center justify-between pt-6 border-t border-[#EADBCC]">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 rounded-xl bg-white border border-[#EADBCC] text-[#1E2F23] text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 hover:bg-[#FAF6F0] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-3.5 rounded-xl bg-[#1E2F23] hover:bg-[#2A4232] text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 shadow-sm transition-all"
                  >
                    Next Step <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-[#1E2F23] hover:bg-[#2A4232] text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-2 shadow-md transition-all"
                  >
                    Start The Conversation <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </div>

      {/* ================= 3. THEMATIC BUFFET FEATURE (VISUAL WORLD) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1E2F23] text-[#FAF8F5] border border-[#2D4A36] shadow-lg mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#1E2F23] text-[10px] font-mono uppercase tracking-widest font-bold inline-block mb-3">
                THEMATIC CATERING
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white mb-3 tracking-tight">
                We Build A Visual World Around It
              </h2>
              <p className="text-[#FAF8F5]/90 text-sm font-normal leading-relaxed mb-4">
                Our own styling collection lets every buffet speak the language of its event — ceramics, silver, glass, clay, wood, lanterns, florals, runners, and unexpected pieces mixed differently every time.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <Camera className="w-4 h-4 text-[#D4AF37]" />
                <span>The best sign? Guests often stop to take pictures beside the buffet.</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/15 aspect-[16/10] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80"
                alt="Lou & Tika Thematic Buffet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= 4. INSPIRATION GALLERY ================= */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADBCC] pb-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#1E2F23]">
                Event Portfolio & Inspiration
              </h2>
              <p className="text-xs text-[#5E6963] font-mono mt-0.5">
                Finger food • Open buffets • Live stations • Weddings & engagements • Corporate catering
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGalleryCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedGalleryCategory === cat
                      ? 'bg-[#1E2F23] text-[#D4AF37] border-[#1E2F23] font-semibold shadow-xs'
                      : 'bg-white text-[#5E6963] border-[#EADBCC] hover:border-[#D4AF37] hover:text-[#1E2F23]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((event) => (
              <div
                key={event.id}
                onClick={() => setActiveLightboxItem(event)}
                className="rounded-3xl overflow-hidden border border-[#EADBCC] cursor-pointer bg-white group hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/95 text-[#B88728] border border-[#EADBCC] font-bold shadow-xs">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#5E6963] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{event.location}</span>
                    <span>•</span>
                    <span>{event.guests}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#1E2F23] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] font-normal mt-1.5 line-clamp-2 leading-relaxed">
                    {event.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          onClick={() => setActiveLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white border border-[#EADBCC] rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/10] w-full overflow-hidden bg-stone-900">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#FAF8F5]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] font-semibold mb-1">
                <span>{activeLightboxItem.category}</span>
                <span>•</span>
                <span>{activeLightboxItem.location}</span>
                <span>•</span>
                <span>{activeLightboxItem.guests}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#1E2F23] mb-2">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed">
                {activeLightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
