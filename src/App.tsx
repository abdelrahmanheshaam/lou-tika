/**
 * Lou & Tika — High-End Culinary Atelier Web Application
 * Brand Philosophy: "Food with an idea behind it"
 * 
 * Theme: Light, serene, distraction-free, and elegant.
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './components/home/Home';
import { MarketView } from './components/market/MarketView';
import { CateringView } from './components/catering/CateringView';
import { InnovationView } from './components/b2b/InnovationView';
import { AboutView } from './components/about/AboutView';
import { CareersContactView } from './components/careers/CareersContactView';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { LegalModal, LegalDocType } from './components/mandatory/LegalModal';
import { WordPressInspectorModal } from './components/headless-wp/WordPressInspectorModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'market' | 'catering' | 'b2b' | 'about' | 'careers'>('home');
  const [legalModalState, setLegalModalState] = useState<{ isOpen: boolean; doc: LegalDocType }>({
    isOpen: false,
    doc: 'faq',
  });
  const [isWpInspectorOpen, setIsWpInspectorOpen] = useState(false);

  const navigateToPage = (page: typeof currentPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegal = (doc: LegalDocType) => {
    setLegalModalState({ isOpen: true, doc });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAFAF8] text-stone-900 flex flex-col font-sans selection:bg-[#B89047]/20 selection:text-stone-900">
        
        {/* Navigation Bar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateToPage}
          onOpenWpInspector={() => setIsWpInspectorOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {currentPage === 'home' && <Home onNavigate={navigateToPage} />}
          {currentPage === 'market' && <MarketView />}
          {currentPage === 'catering' && <CateringView />}
          {currentPage === 'b2b' && <InnovationView />}
          {currentPage === 'about' && <AboutView />}
          {currentPage === 'careers' && <CareersContactView />}
        </main>

        {/* Global Footer */}
        <Footer
          onNavigate={navigateToPage}
          onOpenLegal={handleOpenLegal}
          onOpenWpInspector={() => setIsWpInspectorOpen(true)}
        />

        {/* Slide-out Cart Drawer */}
        <CartDrawer />

        {/* Regional Checkout Modal with Trust Badges */}
        <CheckoutModal />

        {/* Mandatory Legal & FAQ Modal */}
        <LegalModal
          isOpen={legalModalState.isOpen}
          initialDoc={legalModalState.doc}
          onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
        />

        {/* Headless WordPress Architecture & Folder Structure Inspector */}
        <WordPressInspectorModal
          isOpen={isWpInspectorOpen}
          onClose={() => setIsWpInspectorOpen(false)}
        />

      </div>
    </CartProvider>
  );
}
