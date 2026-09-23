import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, ShieldCheck, CreditCard, Check, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

const PROCEDURES = [
  { id: 'veneers', name: 'Porcelain Veneers (E-Max / Feldspathic)', basePrice: 1150, unit: 'per tooth', insuranceRate: 0.15, maxQty: 10, defaultQty: 4 },
  { id: 'implants', name: 'Swiss Straumann® Dental Implant (Fixture + Abutment + Crown)', basePrice: 2200, unit: 'per implant', insuranceRate: 0.50, maxQty: 4, defaultQty: 1 },
  { id: 'invisalign', name: 'Invisalign® Comprehensive Clear Aligners', basePrice: 3400, unit: 'full arch case', insuranceRate: 0.35, maxQty: 1, defaultQty: 1 },
  { id: 'whitening', name: 'Philips Zoom!® In-Office Laser Whitening', basePrice: 395, unit: 'full smile session', insuranceRate: 0.0, maxQty: 1, defaultQty: 1 },
  { id: 'crown', name: 'CEREC® Same-Day Zirconia Crown', basePrice: 980, unit: 'per tooth', insuranceRate: 0.50, maxQty: 4, defaultQty: 1 },
  { id: 'cleaning', name: 'Concierge Deep Prophylaxis & 3D Intraoral Exam', basePrice: 240, unit: 'per appointment', insuranceRate: 0.80, maxQty: 1, defaultQty: 1 }
];

const INSURANCE_PLANS = [
  { id: 'delta', name: 'Delta Dental Premier / PPO', coverageFactor: 1.0, badge: 'In-Network Tier 1' },
  { id: 'metlife', name: 'MetLife PDP Plus', coverageFactor: 0.95, badge: 'In-Network Tier 1' },
  { id: 'cigna', name: 'Cigna Total DPPO', coverageFactor: 0.90, badge: 'In-Network Tier 1' },
  { id: 'aura-club', name: 'Aura VIP Dental Concierge Membership', coverageFactor: 0.85, isClub: true, badge: '20% Guaranteed Flat Discount' },
  { id: 'none', name: 'No Insurance / Private Pay (0% APR Financing)', coverageFactor: 0, badge: 'Pre-Approved Financing' }
];

export default function CostEstimator({ onBookWithEstimate }) {
  const [selectedProcId, setSelectedProcId] = useState('veneers');
  const [quantity, setQuantity] = useState(4);
  const [selectedPlanId, setSelectedPlanId] = useState('delta');
  const [financingMonths, setFinancingMonths] = useState(24);

  const currentProc = PROCEDURES.find(p => p.id === selectedProcId) || PROCEDURES[0];
  const currentPlan = INSURANCE_PLANS.find(p => p.id === selectedPlanId) || INSURANCE_PLANS[0];

  // Recalculate quantity if switching procedures
  const handleProcChange = (newProcId) => {
    const proc = PROCEDURES.find(p => p.id === newProcId);
    setSelectedProcId(newProcId);
    setQuantity(proc.defaultQty);
  };

  const calculations = useMemo(() => {
    const subtotal = currentProc.basePrice * quantity;
    let estimatedInsurance = 0;

    if (currentPlan.isClub) {
      // Aura club gives flat 20% discount
      estimatedInsurance = subtotal * 0.20;
    } else if (currentPlan.id !== 'none') {
      estimatedInsurance = subtotal * currentProc.insuranceRate * currentPlan.coverageFactor;
    }

    const estimatedOutOfPocket = Math.max(0, subtotal - estimatedInsurance);
    const monthlyPayment = Math.round(estimatedOutOfPocket / financingMonths);

    return {
      subtotal,
      estimatedInsurance: Math.round(estimatedInsurance),
      estimatedOutOfPocket: Math.round(estimatedOutOfPocket),
      monthlyPayment
    };
  }, [currentProc, quantity, currentPlan, financingMonths]);

  return (
    <section id="cost-estimator" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Clinical Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight">
            Treatment Cost & Insurance Estimator
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            No surprise billing. Select your procedure and insurance tier to see your estimated out-of-pocket investment and 0% APR financing options.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 backdrop-blur-md space-y-6">
            
            {/* Step 1: Select Procedure */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                1. Select Dental Treatment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROCEDURES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleProcChange(p.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedProcId === p.id
                        ? 'border-teal-500 bg-teal-950/60 shadow-md text-white'
                        : 'border-slate-700 hover:border-slate-600 bg-slate-900/60 text-slate-300'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-semibold">{p.name}</p>
                    <p className="text-xs text-teal-400 mt-1 font-mono">${p.basePrice.toLocaleString()} {p.unit}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity slider if applicable */}
            {currentProc.maxQty > 1 && (
              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-teal-400">
                    2. Quantity / Teeth to Treat
                  </label>
                  <span className="text-sm font-bold text-white bg-slate-700 px-3 py-1 rounded-lg font-mono">
                    {quantity} {quantity === 1 ? 'Unit' : 'Units'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={currentProc.maxQty}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Unit</span>
                  <span>{currentProc.maxQty} Units</span>
                </div>
              </div>
            )}

            {/* Step 3: Insurance Plan Selector */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                {currentProc.maxQty > 1 ? '3' : '2'}. Select Insurance or Membership
              </label>
              <div className="space-y-2">
                {INSURANCE_PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedPlanId === plan.id
                        ? 'border-teal-500 bg-teal-950/60 text-white'
                        : 'border-slate-700 hover:border-slate-600 bg-slate-900/60 text-slate-300'
                    }`}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold">{plan.name}</p>
                      <p className="text-[11px] text-teal-400 mt-0.5">{plan.badge}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedPlanId === plan.id ? 'border-teal-400 bg-teal-500 text-slate-950' : 'border-slate-600'
                    }`}>
                      {selectedPlanId === plan.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Financing Duration */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
                0% APR Financing Term
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[12, 24, 36].map((months) => (
                  <button
                    key={months}
                    onClick={() => setFinancingMonths(months)}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      financingMonths === months
                        ? 'border-teal-500 bg-teal-600 text-white'
                        : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {months} Months (0% APR)
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time Calculation Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-teal-950/80 to-slate-800/90 rounded-3xl p-6 sm:p-8 border border-teal-500/30 backdrop-blur-md shadow-2xl space-y-6">
            
            <div className="border-b border-teal-800/80 pb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-teal-400">
                Estimated Breakdown
              </span>
              <h3 className="text-2xl font-bold font-serif text-white mt-1">
                {currentProc.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Estimated based on standard in-network fee schedules.
              </p>
            </div>

            {/* Line items */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Standard Procedure Value ({quantity}x)</span>
                <span className="font-mono">${calculations.subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-teal-400">
                <span>Estimated Insurance / VIP Credit</span>
                <span className="font-mono">-${calculations.estimatedInsurance.toLocaleString()}</span>
              </div>

              <div className="pt-3 border-t border-slate-700 flex justify-between items-baseline">
                <div>
                  <span className="text-base font-bold text-white block">Estimated Out-of-Pocket</span>
                  <span className="text-[11px] text-slate-400">Before any additional flexible spending (HSA/FSA)</span>
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-mono">
                  ${calculations.estimatedOutOfPocket.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Monthly Financing Box */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-teal-500/20 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-teal-400 font-semibold mb-1">
                <CreditCard className="w-4 h-4" />
                <span>CareCredit® / LendingClub 0% APR Plan</span>
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1">
                ${calculations.monthlyPayment} <span className="text-sm font-sans text-slate-400">/ month</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                For {financingMonths} months with zero down payment upon instant approval.
              </p>
            </div>

            {/* Action Trigger */}
            <button
              onClick={() => onBookWithEstimate && onBookWithEstimate({
                procedure: currentProc.name,
                plan: currentPlan.name,
                estimatedTotal: calculations.estimatedOutOfPocket,
                monthly: calculations.monthlyPayment
              })}
              className="w-full py-4 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Lock In Estimate & Reserve Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>HSA / FSA Cards Accepted • No Credit Impact Pre-Check</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
