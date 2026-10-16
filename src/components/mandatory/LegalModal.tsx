import React, { useState } from 'react';
import { FAQS } from '../../data/mockData';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

export type LegalDocType = 'faq' | 'terms' | 'privacy' | 'returns';

interface LegalModalProps {
  initialDoc: LegalDocType;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ initialDoc, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialDoc);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#182C24]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#FAF6F0] border border-[#E8E1D5] rounded-3xl overflow-hidden shadow-2xl text-[#1E2824] max-h-[90vh] flex flex-col">
        
        {/* Header with Tab Navigation */}
        <div className="p-6 border-b border-[#E8E1D5] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pr-4">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                activeTab === 'faq'
                  ? 'bg-[#233D33] text-white border-[#233D33] font-semibold'
                  : 'bg-[#FAF6F0] text-[#5E6963] border-[#E8E1D5] hover:text-[#233D33]'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('returns')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                activeTab === 'returns'
                  ? 'bg-[#233D33] text-white border-[#233D33] font-semibold'
                  : 'bg-[#FAF6F0] text-[#5E6963] border-[#E8E1D5] hover:text-[#233D33]'
              }`}
            >
              Cold-Chain & Returns
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                activeTab === 'terms'
                  ? 'bg-[#233D33] text-white border-[#233D33] font-semibold'
                  : 'bg-[#FAF6F0] text-[#5E6963] border-[#E8E1D5] hover:text-[#233D33]'
              }`}
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                activeTab === 'privacy'
                  ? 'bg-[#233D33] text-white border-[#233D33] font-semibold'
                  : 'bg-[#FAF6F0] text-[#5E6963] border-[#E8E1D5] hover:text-[#233D33]'
              }`}
            >
              Privacy & Discretion
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#E8E1D5] flex items-center justify-center text-[#5E6963] hover:text-[#233D33] transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
          {activeTab === 'faq' && (
            <div className="space-y-4">
              <div className="mb-6">
                <span className="text-xs font-mono text-[#BA933E] uppercase font-semibold">FREQUENTLY ASKED QUESTIONS</span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#182C24] mt-1">Understanding Lou & Tika</h3>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white border border-[#E8E1D5] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-[#182C24] hover:text-[#BA933E] transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaqIndex === i ? (
                        <ChevronUp className="w-4 h-4 text-[#BA933E]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#5E6963]" />
                      )}
                    </button>
                    {openFaqIndex === i && (
                      <div className="px-5 pb-5 text-xs text-[#4B5563] leading-relaxed font-normal border-t border-[#E8E1D5] pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'returns' && (
            <div className="space-y-4 text-xs text-[#4B5563] leading-relaxed font-normal">
              <div className="mb-6">
                <span className="text-xs font-mono text-[#BA933E] uppercase font-semibold">COLD-CHAIN POLICY</span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#182C24] mt-1">Freezer Delivery & Quality Assurances</h3>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E1D5]">
                <h4 className="text-sm font-bold text-[#182C24] mb-1">1. Frozen Delivery Guarantee</h4>
                <p>All Lou & Tika market provisions are delivered in thermally insulated boxes. Please transfer items to your home freezer immediately upon receipt to preserve optimal texture and freshness.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E1D5]">
                <h4 className="text-sm font-bold text-[#182C24] mb-1">2. Perishable Item Replacements</h4>
                <p>In the unlikely event an item arrives thawed or damaged, notify our concierge within 2 hours of delivery for a prompt complimentary replacement or refund.</p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4 text-xs text-[#4B5563] leading-relaxed font-normal">
              <div className="mb-6">
                <span className="text-xs font-mono text-[#BA933E] uppercase font-semibold">LEGAL TERMS</span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#182C24] mt-1">Terms of Service</h3>
              </div>
              <p>Welcome to Lou & Tika Catering & Food Innovation. By using our services, ordering ready-to-cook products, or commissioning bespoke events, you agree to our standard service charters.</p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4 text-xs text-[#5E6963] leading-relaxed font-light">
              <div className="mb-6">
                <span className="text-xs font-mono text-[#BA933E] uppercase font-semibold">DISCRETION & PRIVACY</span>
                <h3 className="text-2xl font-serif-luxury font-medium text-[#233D33] mt-1">Client Confidentiality</h3>
              </div>
              <p>Discretion is paramount at Lou & Tika. We do not disclose client identities, private event venues, or personal contact details to third-party marketing services.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E8E1D5] bg-white flex justify-between items-center text-xs font-mono text-[#5E6963]">
          <span>Lou & Tika Governance • 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#233D33] text-white hover:bg-[#182C24] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
