import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Menu, X, Database, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'market' | 'catering' | 'b2b' | 'about' | 'careers') => void;
  onOpenWpInspector: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenWpInspector }) => {
  const { totalItems, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'catering', label: 'Catering' },
    { id: 'b2b', label: 'Food Innovation' },
    { id: 'market', label: 'Market (Ready-to-Cook)' },
    { id: 'about', label: 'About Us' },
    { id: 'careers', label: 'Careers & Contact' },
  ] as const;

  const handleNavClick = (id: typeof navLinks[number]['id']) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E8E1D5] shadow-xs py-3.5'
          : 'bg-[#FAF6F0]/80 backdrop-blur-xs py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo & Tagline */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#233D33] flex items-center justify-center text-[#FAF6F0] font-serif-luxury text-sm font-semibold tracking-tighter shadow-xs">
              L&T
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-serif-luxury font-bold tracking-wider text-[#182C24] group-hover:text-[#785C1C] transition-colors leading-none">
                Lou & Tika
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#BA933E] uppercase mt-0.5 hidden sm:block font-semibold">
                Food with an idea behind it
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white p-1 rounded-full border border-[#E8E1D5] shadow-2xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  currentPage === link.id
                    ? 'bg-[#233D33] text-[#FAF6F0] font-medium shadow-xs'
                    : 'text-[#5E6963] hover:text-[#233D33] hover:bg-[#FAF6F0]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenWpInspector}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E8E1D5] text-[11px] font-mono text-[#5E6963] hover:border-[#BA933E] hover:text-[#233D33] transition-colors shadow-2xs"
              title="Inspect Headless WordPress & Architecture"
            >
              <Database className="w-3 h-3 text-[#BA933E]" />
              <span>Headless WP</span>
            </button>

            <button
              onClick={toggleCart}
              className="relative p-2.5 rounded-full bg-white border border-[#E8E1D5] hover:border-[#233D33] text-[#233D33] transition-colors shadow-2xs"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#BA933E] text-white text-[9px] font-mono font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white border border-[#E8E1D5] text-[#233D33]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E1D5] px-6 py-5 space-y-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-mono tracking-wider flex items-center justify-between ${
                currentPage === link.id ? 'bg-[#233D33] text-white font-semibold' : 'text-[#5E6963] hover:bg-[#FAF6F0]'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-40" />
            </button>
          ))}
          <div className="pt-2 border-t border-[#E8E1D5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWpInspector();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-[#FAF6F0] border border-[#E8E1D5] text-xs font-mono text-[#233D33] flex items-center justify-center gap-2"
            >
              <Database className="w-3.5 h-3.5 text-[#BA933E]" />
              <span>Headless WordPress Architecture</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
