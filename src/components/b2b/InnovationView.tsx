import React, { useState } from 'react';
import { B2B_CASE_STUDIES } from '../../data/mockData';
import { HeinzActivationCard } from './HeinzActivationCard';
import { Building2, FileText, Download, CheckCircle, ArrowRight, Sparkles, TrendingUp, Award, Layers } from 'lucide-react';

export const InnovationView: React.FC = () => {
  const [downloadEmail, setDownloadEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showDossierPreview, setShowDossierPreview] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;
    setDownloadSuccess(true);
  };

  return (
    <div className="w-full bg-[#FAF6F0] text-[#1E2824] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from PDF Page 6 & 7 */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] text-xs tracking-widest text-[#BA933E] uppercase font-mono font-semibold mb-4 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#BA933E]" />
            FOOD INNOVATION • WE TURN PRODUCTS INTO EXPERIENCES
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-[#182C24] tracking-tight">
            From Brief To Bite.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
            Different brands. Different products. Different audiences. One approach: make the product live beyond the pack. We start with the product — then ask what people can taste, see, share, and remember.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-[#233D33] font-semibold">
            <span className="px-3 py-1 rounded-full bg-white border border-[#E8E1D5]">Recipe Development</span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#E8E1D5]">Menu Creation</span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#E8E1D5]">Serving Rituals</span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#E8E1D5]">Brand Activations</span>
            <span className="px-3 py-1 rounded-full bg-white border border-[#E8E1D5]">Food-Led Marketing</span>
          </div>
        </div>

        {/* Section: Case Studies from PDF (Heinz, Lamar, Nestlé) */}
        <div className="mb-24">
          <div className="border-b border-[#E8E1D5] pb-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#182C24]">
              Featured Brand Activations & Case Studies
            </h2>
            <p className="text-xs font-mono text-[#5E6963] mt-1">
              Real-world culinary engineering for FMCG and beverage giants
            </p>
          </div>

          <div className="space-y-10">
            {B2B_CASE_STUDIES.map((study, idx) => {
              if (study.id === 'b2b-01') {
                return <HeinzActivationCard key={study.id} />;
              }

              return (
                <div
                  key={study.id}
                  className="rounded-3xl bg-white border border-[#E8E1D5] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:border-[#BA933E] transition-all"
                >
                {/* Visual Image */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto bg-stone-100">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 p-3.5 rounded-2xl bg-[#233D33]/90 text-white backdrop-blur-md border border-white/10 text-left">
                    <div className="text-2xl font-serif-luxury text-[#BA933E] font-bold">
                      {study.keyMetric}
                    </div>
                    <div className="text-[10px] font-mono text-white/80 uppercase tracking-wider">
                      {study.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Narrative */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#BA933E] font-semibold">
                        Case 0{idx + 1}
                      </span>
                      <span className="text-[#E8E1D5]">•</span>
                      <span className="text-xs font-mono text-[#5E6963]">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#182C24] mb-5">
                      {study.client}
                    </h3>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8E1D5]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#BA933E] block mb-1 font-bold">
                          The Challenge
                        </span>
                        <p className="text-[#374151] font-normal leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-[#233D33]/30">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#233D33] block mb-1 font-bold">
                          Culinary Solution
                        </span>
                        <p className="text-[#374151] font-normal leading-relaxed">{study.culinarySolution}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E8E1D5]">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 block mb-1 font-bold">
                          Impact & Outcome
                        </span>
                        <p className="text-[#374151] font-normal leading-relaxed">{study.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8E1D5] flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-[#FAF6F0] text-[11px] font-mono text-[#5E6963] border border-[#E8E1D5]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Company Profile 2026 Download (Page 1 from PDF) */}
        <div className="relative rounded-3xl bg-[#233D33] text-[#FAF6F0] p-8 sm:p-14 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#BA933E] font-semibold mb-2">
                <FileText className="w-3.5 h-3.5" />
                COMPANY PROFILE / 2026
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif-luxury font-medium text-white mb-3">
                Download Lou & Tika Company Profile
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF6F0]/80 font-light leading-relaxed mb-6">
                Explore our full capabilities: Thematic Catering, Visual Styling Collections, Food Innovation rituals, and Ready-to-cook provisions.
              </p>

              {downloadSuccess ? (
                <div className="p-5 rounded-2xl bg-white/10 border border-white/20 text-[#FAF6F0] text-xs">
                  <div className="flex items-center gap-2 font-semibold mb-1 text-[#BA933E]">
                    <CheckCircle className="w-4 h-4" />
                    <span>Company Profile Dispatched to {downloadEmail}</span>
                  </div>
                  <p className="text-[#FAF6F0]/80">
                    A copy has been routed to your inbox. You can also view the digital presentation preview below.
                  </p>
                  <button
                    onClick={() => setShowDossierPreview(true)}
                    className="mt-3 px-4 py-2 rounded-xl bg-[#BA933E] text-white font-mono uppercase tracking-wider text-[11px] font-medium"
                  >
                    Open Digital Presentation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Company / Brand Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-[#FAF6F0]/50 focus:outline-none focus:border-[#BA933E]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email Address *"
                      value={downloadEmail}
                      onChange={(e) => setDownloadEmail(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs text-white placeholder-[#FAF6F0]/50 focus:outline-none focus:border-[#BA933E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#BA933E] hover:bg-[#A58032] text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Get Company Profile (PDF)</span>
                  </button>
                </form>
              )}
            </div>

            {/* Profile Visual Mockup */}
            <div className="md:col-span-5 flex justify-center">
              <div
                onClick={() => setShowDossierPreview(true)}
                className="w-56 h-72 rounded-2xl bg-[#182C24] border border-[#BA933E]/50 p-6 flex flex-col justify-between shadow-2xl relative cursor-pointer group hover:scale-105 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#BA933E]/20 flex items-center justify-center text-[#BA933E] font-mono text-xs font-bold">
                  LT
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#BA933E] font-semibold">
                    Lou & Tika
                  </span>
                  <h4 className="text-base font-serif-luxury text-white mt-1">
                    Company Profile / 2026
                  </h4>
                  <p className="text-[10px] text-[#FAF6F0]/70 mt-1">
                    Food with an idea behind it
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#BA933E] flex items-center justify-between border-t border-white/10 pt-2">
                  <span>10 Pages</span>
                  <span>Click to Preview</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Presentation Preview Modal */}
      {showDossierPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#E8E1D5] rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl text-[#1E2824]">
            <button
              onClick={() => setShowDossierPreview(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-[#233D33] hover:bg-[#E8E1D5] flex items-center justify-center"
            >
              ✕
            </button>

            <span className="text-xs font-mono uppercase text-[#BA933E] font-semibold mb-1 block">
              Lou & Tika • Company Profile 2026
            </span>
            <h3 className="text-2xl font-serif-luxury text-[#233D33] mb-4 font-medium">
              Food With An Idea Behind It.
            </h3>

            <div className="space-y-4 text-xs text-[#1E2824] font-light leading-relaxed">
              <div className="p-4 rounded-xl bg-white border border-[#E8E1D5]">
                <strong className="text-[#233D33] block mb-1">Founders: Sherif & Rasha</strong>
                <p>Husband-and-wife partners. Sherif brings hospitality & food experience; Rasha brings marketing & creative direction. “Lou” & “Tika” are nicknames of their daughters Leila and Tia.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D5]">
                <strong className="text-[#233D33] block mb-1">Thematic Catering & Visual World</strong>
                <p>Private styling collection of ceramics, silver, glass, clay, wood, lanterns, florals, and runners mixed differently for every single event.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D5]">
                <strong className="text-[#233D33] block mb-1">Food Innovation</strong>
                <p>Collaborating with Heinz, Lamar, Nestlé, Juhayna, and PepsiCo to turn packaged products into multi-sensory culinary rituals.</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E1D5] flex justify-end">
              <button
                onClick={() => setShowDossierPreview(false)}
                className="px-6 py-2.5 rounded-xl btn-brand-green text-xs font-mono uppercase font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
