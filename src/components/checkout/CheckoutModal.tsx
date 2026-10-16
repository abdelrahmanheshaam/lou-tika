import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ShieldCheck, Lock, CheckCircle2, CreditCard, Smartphone, ArrowRight, X } from 'lucide-react';

interface CheckoutModalProps {
  onSuccessClose?: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ onSuccessClose }) => {
  const { isCheckoutOpen, setIsCheckoutOpen, items, subtotal, discount, deliveryFee, finalTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'kashier' | 'valu' | 'souhoola' | 'ewallet' | 'cod'>('kashier');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Cairo',
    district: 'New Cairo / 5th Settlement',
    deliverySlot: 'Tomorrow Morning (10:00 AM - 1:00 PM)',
    valuInstallmentMonths: '6 Months (0% Interest)',
    walletNumber: '',
  });

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `LT-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setOrderComplete(true);
      clearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#182C24]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#FAF6F0] border border-[#E8E1D5] rounded-3xl overflow-hidden shadow-2xl text-[#1E2824]">
        
        {/* Top Header */}
        <div className="p-6 border-b border-[#E8E1D5] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#233D33] flex items-center justify-center text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-serif-luxury font-bold text-[#182C24]">Lou & Tika Secure Checkout</h2>
              <span className="text-[11px] font-mono text-[#5E6963]">
                Cold-Chain Concierge Delivery
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#E8E1D5] flex items-center justify-center text-[#5E6963] hover:text-[#233D33] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {orderComplete ? (
          <div className="p-8 sm:p-14 text-center flex flex-col items-center bg-white">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#BA933E] font-semibold">
              Order Confirmed & Prepared
            </span>
            <h3 className="text-3xl font-serif-luxury text-[#182C24] font-bold mt-1">
              Order Reference #{orderId}
            </h3>
            <p className="text-sm text-[#5E6963] max-w-md mt-3 leading-relaxed">
              We have dispatched your order details to <strong className="text-[#233D33]">{shippingInfo.email || 'your email'}</strong>. Your provisions are being packed in dry ice to ensure zero thaw.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8E1D5] text-xs font-mono text-left max-w-md w-full space-y-2">
              <div className="flex justify-between">
                <span className="text-[#5E6963]">Recipient</span>
                <span className="text-[#233D33] font-semibold">{shippingInfo.firstName} {shippingInfo.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5E6963]">Delivery Slot</span>
                <span className="text-[#233D33]">{shippingInfo.deliverySlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5E6963]">Gateway</span>
                <span className="text-[#BA933E] uppercase font-bold">{paymentMethod}</span>
              </div>
              <div className="flex justify-between border-t border-[#E8E1D5] pt-2 font-semibold">
                <span className="text-[#233D33]">Total Paid</span>
                <span className="text-[#233D33] text-sm">{finalTotal} EGP</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCheckoutOpen(false);
                if (onSuccessClose) onSuccessClose();
              }}
              className="mt-8 px-8 py-3.5 rounded-xl btn-brand-green text-xs font-mono uppercase font-semibold"
            >
              Return to Atelier
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Delivery & Payment Details */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Contact & Address */}
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-[#233D33] font-bold mb-3">
                    01. Delivery Coordinates
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      required
                      placeholder="First Name *"
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                      className="bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Last Name *"
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                      className="bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      className="bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile (+20...) *"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      className="bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    />
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Street Address, Building, Apartment *"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] mb-3 focus:outline-none focus:border-[#233D33]"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={shippingInfo.district}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, district: e.target.value })}
                      className="bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    >
                      <option value="New Cairo / 5th Settlement">New Cairo / 5th Settlement</option>
                      <option value="Zamalek & Downtown">Zamalek & Downtown</option>
                      <option value="Maadi & Degla">Maadi & Degla</option>
                      <option value="Sheikh Zayed & 6th of October">Sheikh Zayed & 6th of October</option>
                      <option value="Heliopolis & Nasr City">Heliopolis & Nasr City</option>
                      <option value="North Coast (Seasonal Express)">North Coast (Seasonal Express)</option>
                    </select>

                    <select
                      value={shippingInfo.deliverySlot}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, deliverySlot: e.target.value })}
                      className="bg-white border border-[#E8E1D5] rounded-xl px-4 py-2.5 text-xs text-[#1E2824] focus:outline-none focus:border-[#233D33]"
                    >
                      <option value="Tomorrow Morning (10:00 AM - 1:00 PM)">Tomorrow Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Tomorrow Evening (4:00 PM - 8:00 PM)">Tomorrow Evening (4:00 PM - 8:00 PM)</option>
                      <option value="Same-Day Express Concierge (Next 4h)">Same-Day Express Concierge (Next 4h)</option>
                    </select>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-[#233D33] font-bold">
                      02. Payment Gateway
                    </h3>
                    <span className="text-[10px] font-mono text-[#5E6963]">Central Bank of Egypt Regulated</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Kashier */}
                    <div
                      onClick={() => setPaymentMethod('kashier')}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === 'kashier'
                          ? 'bg-white border-[#233D33] ring-1 ring-[#233D33] shadow-xs'
                          : 'bg-white border-[#E8E1D5] hover:border-[#BA933E]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-xs text-[#233D33]">Kashier Gateway</div>
                        <CreditCard className="w-4 h-4 text-[#BA933E]" />
                      </div>
                      <div className="text-[10px] font-mono text-[#5E6963] mt-1">Visa • Mastercard • Meeza</div>
                    </div>

                    {/* ValU */}
                    <div
                      onClick={() => setPaymentMethod('valu')}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === 'valu'
                          ? 'bg-white border-[#233D33] ring-1 ring-[#233D33] shadow-xs'
                          : 'bg-white border-[#E8E1D5] hover:border-[#BA933E]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-xs text-[#233D33] flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-blue-600 text-white font-bold text-[9px]">valU</span>
                          <span>Installments</span>
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-[#5E6963] mt-1">Buy Now, Pay Later (up to 60m)</div>
                    </div>

                    {/* Souhoola */}
                    <div
                      onClick={() => setPaymentMethod('souhoola')}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === 'souhoola'
                          ? 'bg-white border-[#233D33] ring-1 ring-[#233D33] shadow-xs'
                          : 'bg-white border-[#E8E1D5] hover:border-[#BA933E]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-xs text-[#233D33] flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-amber-600 text-white font-bold text-[9px]">Souhoola</span>
                          <span>Financing</span>
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-[#5E6963] mt-1">Consumer Finance Network</div>
                    </div>

                    {/* E-Wallets */}
                    <div
                      onClick={() => setPaymentMethod('ewallet')}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === 'ewallet'
                          ? 'bg-white border-[#233D33] ring-1 ring-[#233D33] shadow-xs'
                          : 'bg-white border-[#E8E1D5] hover:border-[#BA933E]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-xs text-[#233D33]">Mobile E-Wallets</div>
                        <Smartphone className="w-4 h-4 text-[#BA933E]" />
                      </div>
                      <div className="text-[10px] font-mono text-[#5E6963] mt-1">Vodafone Cash • InstaPay</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E8E1D5] flex flex-col justify-between shadow-xs">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-[#233D33] font-bold mb-4 border-b border-[#E8E1D5] pb-2">
                    Order Summary ({items.length} items)
                  </h3>

                  <div className="space-y-3 max-h-56 overflow-y-auto pr-1 mb-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-xs font-mono">
                        <div className="truncate pr-2">
                          <span className="text-[#233D33] font-medium">{item.product.title}</span>
                          <span className="text-[#5E6963] block text-[10px]">Qty: {item.quantity}</span>
                        </div>
                        <span className="text-[#1E2824] font-semibold shrink-0">{item.product.price * item.quantity} EGP</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs font-mono border-t border-[#E8E1D5] pt-3 text-[#5E6963]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-[#233D33]">{subtotal} EGP</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-[#BA933E] font-semibold">
                        <span>Discount</span>
                        <span>-{discount} EGP</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span className="text-[#233D33]">{deliveryFee === 0 ? 'FREE' : `${deliveryFee} EGP`}</span>
                    </div>
                    <div className="flex justify-between text-base font-serif-luxury text-[#233D33] pt-2 border-t border-[#E8E1D5] font-semibold">
                      <span className="text-sm font-sans font-medium">Total Due</span>
                      <span className="text-xl text-[#233D33]">{finalTotal} EGP</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 rounded-xl btn-brand-green flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold shadow-md"
                  >
                    {isProcessing ? (
                      <span>Connecting with {paymentMethod.toUpperCase()}...</span>
                    ) : (
                      <>
                        <span>Authorize Payment • {finalTotal} EGP</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="pt-3 border-t border-[#E8E1D5] flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-[#5E6963]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Kashier 3D-Secure • valU • Souhoola • InstaPay</span>
                  </div>
                </div>

              </div>

            </div>
          </form>
        )}

      </div>
    </div>
  );
};
