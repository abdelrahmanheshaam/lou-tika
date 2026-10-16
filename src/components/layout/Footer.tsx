import React, { useState } from 'react';
import { LegalDocType } from '../mandatory/LegalModal';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'market' | 'catering' | 'b2b' | 'about' | 'careers') => void;
  onOpenLegal: (doc: LegalDocType) => void;
  onOpenWpInspector: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal, onOpenWpInspector }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#233D33] text-[#FAF6F0] pt-16 pb-12 border-t border-[#182C24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-serif-luxury text-sm font-semibold text-[#BA933E] border border-white/15">
                L&T
              </div>
              <span className="text-xl font-serif-luxury font-bold tracking-wider text-white">
                Lou & Tika
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-[#BA933E] font-semibold">
              Catering • Food Innovation • Ready-To-Cook
            </p>

            <p className="text-xs text-[#FAF6F0]/85 font-normal leading-relaxed max-w-sm">
              Founded by Sherif and Rasha. Bringing food, ideas, and presentation together — from the table, to the brand, to your home.
            </p>

            <div className="pt-1 text-xs font-mono text-[#FAF6F0]/60">
              New Cairo Atelier • Private Thematic Collection
            </div>
          </div>

          {/* Pillars (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C378] font-bold">
              The Three Pillars
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#FAF6F0]/80">
              <li>
                <button onClick={() => onNavigate('catering')} className="hover:text-white transition-colors">
                  Haute Catering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-white transition-colors">
                  Food Innovation (B2B)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('market')} className="hover:text-white transition-colors">
                  Ready-to-Cook Market
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Sherif & Rasha
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">
                  Careers & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C378] font-bold">
              Policies & Support
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#FAF6F0]/80">
              <li>
                <button onClick={() => onOpenLegal('faq')} className="hover:text-white transition-colors text-left">
                  FAQ & Ordering Guide
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('returns')} className="hover:text-white transition-colors text-left">
                  Cold-Chain & Return Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors text-left">
                  Privacy & Client Discretion
                </button>
              </li>
              <li>
                <button onClick={onOpenWpInspector} className="text-[#BA933E] hover:underline transition-colors text-left flex items-center gap-1 font-medium">
                  <span>Headless WP Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C378] font-bold">
              Atelier Journal
            </h4>
            <p className="text-xs text-[#FAF6F0]/85 font-normal leading-relaxed">
              Receive seasonal recipe releases, corporate innovation briefs, and invitations to tasting salons.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-[#FAF6F0] text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BA933E] shrink-0" />
                <span>Thank you. You are on the registry.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5 pt-1">
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-[#FAF6F0]/50 focus:outline-none focus:border-[#BA933E]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#BA933E] text-white rounded-xl text-xs hover:bg-[#A58032] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Regional Trust Badges Bar */}
        <div className="py-6 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FAF6F0]/70">
            <ShieldCheck className="w-4 h-4 text-[#BA933E]" />
            <span>Authorized Payment & Installment Gateways:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-[#FAF6F0]">
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 font-medium">Kashier</span>
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-[#BA933E] font-bold">valU Installments</span>
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 font-medium">Souhoola</span>
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15">E-Wallets & InstaPay</span>
            <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-[#FAF6F0]/70">Visa • Mastercard</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#FAF6F0]/60 gap-3">
          <div>
            © 2026 Lou & Tika Catering & Food Innovation. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Cairo, Egypt</span>
            <span>•</span>
            <span className="text-[#BA933E]">“Food with an idea behind it”</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
