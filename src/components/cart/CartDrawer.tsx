import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    deliveryFee,
    finalTotal,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    freeShippingThreshold,
    setIsCheckoutOpen,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) {
      setInputCode('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const progressToFreeShip = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeededForFreeShip = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#182C24]/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] border-l border-[#E8E1D5] text-[#1E2824] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E8E1D5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#233D33] flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#182C24]">Market Basket</h3>
                <span className="text-[11px] font-mono text-[#5E6963]">
                  {items.length} {items.length === 1 ? 'ready-to-cook item' : 'ready-to-cook items'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#E8E1D5] flex items-center justify-center text-[#5E6963] hover:text-[#233D33] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery indicator */}
          <div className="px-6 py-3 bg-[#F4EFE6] border-b border-[#E8E1D5]">
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span className="text-[#5E6963]">
                {amountNeededForFreeShip === 0 ? (
                  <span className="text-[#233D33] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#BA933E]" /> Free Cold-Chain Delivery Applied
                  </span>
                ) : (
                  <span>Add {amountNeededForFreeShip} EGP for free delivery</span>
                )}
              </span>
              <span className="text-[#BA933E] font-bold">{progressToFreeShip}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E8E1D5] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#BA933E] transition-all duration-300"
                style={{ width: `${progressToFreeShip}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-white border border-[#E8E1D5] flex items-center justify-center text-[#5E6963] mb-4 shadow-xs">
                  <ShoppingBag className="w-6 h-6 text-[#BA933E]" />
                </div>
                <h4 className="text-lg font-serif-luxury font-medium text-[#233D33]">Your Basket is Empty</h4>
                <p className="text-xs text-[#5E6963] max-w-xs mt-1">
                  Stock your freezer with Kobeba, Sambousek, and Vine Leaves prepared for real life.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl btn-brand-green text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  Browse Ready-To-Cook Market
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-4 rounded-2xl bg-white border border-[#E8E1D5] flex gap-4 transition-all shadow-xs"
                >
                  <img
                    src={item.product.frozenImage}
                    alt={item.product.title}
                    className="w-20 h-20 rounded-xl object-cover border border-[#E8E1D5] shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#182C24] truncate leading-snug">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#5E6963] hover:text-red-700 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#5E6963] truncate mt-0.5">
                        {item.product.portionSize}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8E1D5]">
                      <div className="flex items-center gap-2 bg-[#FAF6F0] px-2 py-1 rounded-lg border border-[#E8E1D5]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-[#5E6963] hover:text-[#233D33]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-medium px-1 text-[#233D33]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-[#5E6963] hover:text-[#233D33]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-serif-luxury font-semibold text-[#233D33]">
                        {item.product.price * item.quantity} <span className="text-[10px] font-sans text-[#5E6963]">EGP</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E8E1D5] bg-white space-y-4">
              {/* Promo code */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F4EFE6] border border-[#BA933E]/40 text-xs">
                    <span className="text-[#233D33] font-mono flex items-center gap-1.5 font-semibold">
                      <Tag className="w-3.5 h-3.5 text-[#BA933E]" /> Code "{appliedPromo}" Active
                    </span>
                    <button
                      onClick={removePromoCode}
                      className="text-xs text-[#5E6963] hover:text-[#233D33] underline font-mono"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. VIP15)"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="flex-1 bg-[#FAF6F0] border border-[#E8E1D5] rounded-xl px-3 py-2 text-xs text-[#1E2824] placeholder-[#5E6963] focus:outline-none focus:border-[#233D33]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#233D33] text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoMessage && (
                  <p className={`text-[11px] mt-1 font-mono ${promoMessage.isError ? 'text-red-700' : 'text-emerald-700'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs font-mono text-[#5E6963] pt-2 border-t border-[#E8E1D5]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#233D33] font-semibold">{subtotal} EGP</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#BA933E] font-semibold">
                    <span>Discount</span>
                    <span>-{discount} EGP</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Cold-Chain Delivery</span>
                  <span className="text-[#233D33] font-semibold">
                    {deliveryFee === 0 ? 'FREE' : `${deliveryFee} EGP`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif-luxury text-[#233D33] pt-2 border-t border-[#E8E1D5] font-semibold">
                  <span className="font-sans font-medium text-xs">Total Due</span>
                  <span className="text-xl text-[#233D33]">{finalTotal} EGP</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 rounded-xl btn-brand-green flex items-center justify-center gap-2 text-xs font-semibold tracking-wider font-mono uppercase shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5E6963] font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Cryo-Lock Insulated Packing Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
