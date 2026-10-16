import React, { useState } from 'react';
import { MARKET_PRODUCTS } from '../../data/mockData';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Eye, Flame, Snowflake, Clock, Check, Sparkles, Filter, Info, ChefHat } from 'lucide-react';

export const MarketView: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [forceViewMode, setForceViewMode] = useState<'hover' | 'always-cooked' | 'always-frozen'>('hover');
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Ready-to-Cook' },
    { id: 'pate-terrines', label: 'Kobeba & Specialties' },
    { id: 'pastas', label: 'Sambousek & Béchamel' },
    { id: 'confit', label: 'Vine Leaves & Stuffed' },
    { id: 'sous-vide', label: 'Shish Tawook & Meats' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? MARKET_PRODUCTS
    : MARKET_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    addToCart(product, 1);
    setRecentlyAddedId(product.id);
    setTimeout(() => setRecentlyAddedId(null), 2000);
  };

  return (
    <div className="w-full bg-[#FAF6F0] text-[#1E2824] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from PDF Page 8 & 9 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D5] text-xs tracking-widest text-[#BA933E] uppercase font-mono font-semibold mb-4 shadow-xs">
            <Snowflake className="w-3.5 h-3.5 text-[#BA933E]" />
            FROM OUR KITCHEN TO YOUR FREEZER
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-[#182C24] tracking-tight">
            Lou & Tika Market
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed">
            Chef-led favorites, prepared for real life — made to keep at home, cook easily, and serve beautifully. Stock your freezer. Set your table. Make it yours.
          </p>

          {/* View Mode Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-[#E8E1D5] text-xs font-mono shadow-xs">
            <span className="px-3 py-1 text-[#5E6963]">Presentation:</span>
            <button
              onClick={() => setForceViewMode('hover')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                forceViewMode === 'hover' ? 'bg-[#233D33] text-white font-medium shadow-xs' : 'text-[#5E6963] hover:text-[#233D33]'
              }`}
            >
              Hover to Reveal Cooked
            </button>
            <button
              onClick={() => setForceViewMode('always-frozen')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                forceViewMode === 'always-frozen' ? 'bg-[#233D33] text-white font-medium shadow-xs' : 'text-[#5E6963] hover:text-[#233D33]'
              }`}
            >
              Ready-to-Cook Pack
            </button>
            <button
              onClick={() => setForceViewMode('always-cooked')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                forceViewMode === 'always-cooked' ? 'bg-[#233D33] text-white font-medium shadow-xs' : 'text-[#5E6963] hover:text-[#233D33]'
              }`}
            >
              Plated Finish
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-[#233D33] text-[#FAF6F0] border-[#233D33] font-semibold shadow-xs'
                  : 'bg-white text-[#5E6963] border-[#E8E1D5] hover:border-[#BA933E] hover:text-[#233D33]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isHovered = hoveredProduct === product.id;
            const showCooked =
              forceViewMode === 'always-cooked' ||
              (forceViewMode === 'hover' && isHovered);

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => setSelectedProductModal(product)}
                className="brand-card-light rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer group bg-white border border-[#E8E1D5]"
              >
                {/* Image Container with Hover Reveal */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={product.frozenImage}
                    alt={`${product.title} (Ready to cook)`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      showCooked ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                    }`}
                  />
                  <img
                    src={product.cookedImage}
                    alt={`${product.title} (Cooked)`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      showCooked ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase backdrop-blur-md border ${
                      showCooked
                        ? 'bg-[#BA933E]/90 border-[#BA933E] text-white font-semibold'
                        : 'bg-white/95 border-[#E8E1D5] text-[#233D33] font-semibold'
                    }`}>
                      {showCooked ? 'Plated & Golden' : 'Ready-to-Cook'}
                    </span>

                    {product.featured && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#233D33] text-white font-semibold">
                        Signature
                      </span>
                    )}
                  </div>

                  {/* Bottom Bar */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[11px] font-mono text-[#1E2824] border border-[#E8E1D5]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3 h-3 text-[#BA933E]" />
                      {product.prepTimeMinutes} mins prep
                    </span>
                    <span className="text-[#BA933E] font-semibold flex items-center gap-1">
                      {showCooked ? 'Cooked View' : 'Hover for Plated'}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Sub-header / Category Label with bolder weight, darker warm tone, legible tracking */}
                    <div className="text-[11px] font-mono uppercase tracking-wide text-[#785C1C] font-bold mb-1.5">
                      {product.categoryLabel}
                    </div>

                    {/* Prominent Bold Serif Product Title (Dominant Hierarchy) */}
                    <h3 className="text-2xl sm:text-[26px] font-serif-luxury font-bold text-[#112019] group-hover:text-[#785C1C] transition-colors leading-tight">
                      {product.title}
                    </h3>

                    {/* Secondary Description Paragraph (Clean Regular 400, Significantly Smaller than Heading) */}
                    <p className="text-xs sm:text-[13px] text-[#4B5563] font-normal leading-relaxed mt-2 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-6 pt-4 border-t border-[#E8E1D5] flex items-center justify-between">
                    <div>
                      {/* Price Label with bolder weight, darker warm tone, and clean tracking */}
                      <span className="text-[11px] font-mono text-[#785C1C] font-bold uppercase tracking-wide block">
                        PRICE
                      </span>
                      {/* Price Value in bold luxury serif */}
                      <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#112019] mt-0.5">
                        {product.price} <span className="text-xs font-sans text-gray-700 font-bold">EGP</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProductModal(product);
                        }}
                        className="p-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#E8E1D5] text-[#233D33] transition-colors"
                        title="View details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className={`px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                          recentlyAddedId === product.id
                            ? 'bg-emerald-700 text-white'
                            : 'btn-brand-green'
                        }`}
                      >
                        {recentlyAddedId === product.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5 text-[#BA933E]" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#FAF6F0] border border-[#E8E1D5] p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-[#233D33] hover:bg-[#E8E1D5] flex items-center justify-center"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="rounded-2xl overflow-hidden border border-[#E8E1D5] aspect-square bg-white">
                  <img
                    src={selectedProductModal.cookedImage}
                    alt={selectedProductModal.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-3 rounded-xl bg-white border border-[#E8E1D5] text-center">
                    <span className="text-[10px] font-mono text-[#5E6963] uppercase">Portion</span>
                    <p className="text-xs font-semibold text-[#233D33] mt-0.5">{selectedProductModal.portionSize}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#E8E1D5] text-center">
                    <span className="text-[10px] font-mono text-[#5E6963] uppercase">Net Weight</span>
                    <p className="text-xs font-semibold text-[#233D33] mt-0.5">{selectedProductModal.netWeight}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wide text-[#785C1C] font-bold mb-1.5">
                    {selectedProductModal.categoryLabel}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#112019]">
                    {selectedProductModal.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed mt-2.5">
                    {selectedProductModal.shortDescription}
                  </p>
                  <p className="text-xs sm:text-[13px] text-gray-600 font-normal mt-1.5">
                    {selectedProductModal.subtitle}
                  </p>

                  <div className="mt-4 p-4 rounded-xl bg-white border border-[#E8E1D5]">
                    <div className="text-xs font-mono text-[#785C1C] uppercase flex items-center gap-1.5 mb-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> From Our Kitchen To Your Freezer
                    </div>
                    <p className="text-[13px] text-[#2D3748] font-serif-luxury italic leading-relaxed">
                      "{selectedProductModal.theIdeaBehindIt}"
                    </p>
                  </div>

                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-start gap-2 text-[#1E2824]">
                      <Flame className="w-4 h-4 text-[#BA933E] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#233D33]">Cooking Method: </span>
                        <span className="text-[#374151] font-medium">{selectedProductModal.cookingMethod}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#1E2824]">
                      <Clock className="w-4 h-4 text-[#BA933E] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#233D33]">Prep Time: </span>
                        <span className="text-[#374151] font-medium">{selectedProductModal.prepTimeMinutes} minutes directly from freezer</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E1D5] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#785C1C] font-bold uppercase tracking-wide block">PRICE</span>
                    <div className="text-2xl sm:text-3xl font-serif-luxury text-[#182C24] font-semibold mt-0.5">
                      {selectedProductModal.price} <span className="text-xs font-sans text-gray-700 font-bold">EGP</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleAddToCart(selectedProductModal);
                      setSelectedProductModal(null);
                    }}
                    className="px-6 py-3 rounded-xl btn-brand-green text-xs font-mono uppercase tracking-wider font-semibold"
                  >
                    Add To Basket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
