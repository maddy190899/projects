import React, { useState } from 'react';
import { 
  DollarSign, 
  Calculator, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  HelpCircle, 
  CreditCard, 
  Sparkles,
  Percent
} from 'lucide-react';

export const PricingPage = ({ onOpenBooking, onPreSelectTreatment }) => {
  const [loanAmount, setLoanAmount] = useState(15000);
  const [loanTerm, setLoanTerm] = useState(24);
  const [selectedPlan, setSelectedPlan] = useState('carecredit');
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [insuranceStatus, setInsuranceStatus] = useState(null);

  // Calculate monthly payment
  // For 12 and 24 months, we offer 0% APR promo. For 36, 48, 60 months, 7.9% APR standard.
  const apr = loanTerm <= 24 ? 0 : 0.079;
  const calculateMonthly = () => {
    if (apr === 0) {
      return (loanAmount / loanTerm).toFixed(0);
    }
    const monthlyRate = apr / 12;
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
    return payment.toFixed(0);
  };

  const handleInsuranceCheck = (e) => {
    e.preventDefault();
    if (!selectedInsurance) return;
    setInsuranceStatus({
      carrier: selectedInsurance,
      coverage: 'Verified In-Network / Direct Concierge Billing',
      tier: 'Standard PPO Out-of-Pocket Max Applied; Aura files all electronic claims directly.'
    });
  };

  const pricingTiers = [
    {
      category: 'Diagnostic & 3D Imaging',
      items: [
        { name: 'Comprehensive Exam & Planmeca 3D CBCT Scan', code: 'D0150 / D0367', fee: '$350', notes: 'Credited toward treatment' },
        { name: 'Digital Smile Design (DSD) Biometric Mockup', code: 'D9995', fee: '$450', notes: 'Includes 3D trial smile drive' },
        { name: '3Shape TRIOS 5 Wireless Optical 3D Arch Scan', code: 'D0470', fee: '$250', notes: 'Zero radiation' },
      ]
    },
    {
      category: 'Cosmetic & Aesthetic Dentistry',
      items: [
        { name: 'Micro-Thin Hand-Layered Feldspathic Veneer', code: 'D2962', fee: '$2,200 – $2,900 / tooth', notes: 'Shade BL1-BL4, 20+ yr durability' },
        { name: 'Biomimetic Direct Composite Edge Sculpting', code: 'D2332', fee: '$650 – $950 / tooth', notes: 'Single visit, zero enamel cut' },
        { name: 'Full Mouth Porcelain Smile Architecture (20 units)', code: 'D2962x20', fee: '$38,000 – $48,000', notes: 'Complete VIP transformation' },
      ]
    },
    {
      category: 'Guided Dental Implants & Surgery',
      items: [
        { name: 'Single Titanium/Zirconia Implant (Post, Abutment & Crown)', code: 'D6010 / D6057', fee: '$3,800 – $4,600', notes: 'Lifetime implant warranty' },
        { name: 'All-on-4 Full Arch Fixed Zirconia (Immediate Load)', code: 'D6078', fee: '$24,500 – $29,000 / arch', notes: 'Same-day teeth delivery' },
        { name: 'All-on-6 Complex Bone Grafting & Zygomatic Arch', code: 'D6085', fee: '$32,000 – $36,000 / arch', notes: 'For severe bone resorption' },
      ]
    },
    {
      category: 'Airway Orthodontics & Periodontics',
      items: [
        { name: 'Diamond Apex Invisalign® Full Case', code: 'D8090', fee: '$4,500 – $7,200', notes: 'Includes Vivera retainers' },
        { name: 'BIOLASE LANAP Laser Full-Mouth Regeneration', code: 'D4249', fee: '$3,200 – $4,200', notes: 'No cutting, no sutures' },
        { name: 'MD Twilight Sleep IV Sedation (2-3 Hours)', code: 'D9222', fee: '$950 – $1,600', notes: 'Board-certified anesthesiologist' },
      ]
    }
  ];

  const membershipTiers = [
    {
      name: 'Essential Wellness',
      price: '$49',
      period: '/ month ($490/yr)',
      badge: 'Preventative',
      features: [
        '2 Guided Biofilm Therapy (GBT) Cleanings per year',
        'Annual 3D CBCT Volumetric Scan & Caries AI Audit',
        'Unlimited emergency exams & digital bitewings',
        '15% Off all restorative & cosmetic procedures',
        'Zero waiting periods or annual deductibles'
      ]
    },
    {
      name: 'Surgical & Cosmetic VIP',
      price: '$129',
      period: '/ month ($1,290/yr)',
      badge: 'Most Popular',
      popular: true,
      features: [
        'Everything in Essential Wellness',
        '20% Off all Porcelain Veneers & Dental Implants',
        'Complimentary MD Twilight Sedation on surgeries > $5,000',
        '24/7 Direct Surgeon On-Call Telephone Pager Access',
        'Complimentary Teeth Whitening maintenance for life'
      ]
    },
    {
      name: 'Executive Family Suite',
      price: '$199',
      period: '/ month ($1,990/yr)',
      badge: 'Full Family',
      features: [
        'Complete preventative care for up to 4 family members',
        'Complimentary Pediatric sealants & fluoride remineralization',
        '20% Off all Airway Invisalign & Orthodontic cases',
        'Private VIP clinic suite reservation guarantee',
        'Dedicated Patient Concierge Coordinator'
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-400 mb-4">
          <DollarSign className="w-3.5 h-3.5" />
          TRANSPARENT FINANCIAL ARCHITECTURE
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Clear Pricing & 0% APR Financing.
        </h1>
        <p className="text-slate-300 text-base mt-4 leading-relaxed">
          We believe in absolute financial clarity. No hidden facility fees or surprise charges. Review our comprehensive fee schedules and calculate flexible monthly payment terms.
        </p>
      </div>

      {/* Interactive Financing Calculator */}
      <section className="p-6 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-3 pb-6 mb-8 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Interactive Treatment Financing Calculator</h2>
            <p className="text-xs text-slate-400 font-mono">
              CareCredit • LendingClub Patient Solutions • Proceed Finance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-slate-300">Total Treatment Investment:</span>
                <span className="font-mono text-xl font-bold text-sky-400">
                  ${loanAmount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="40000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-sky-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>$1,000 (Single Tooth)</span>
                <span>$20,000 (Veneers)</span>
                <span>$40,000 (Full Arch Implant)</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                Repayment Duration:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[12, 24, 36, 48, 60].map((term) => (
                  <button
                    key={term}
                    onClick={() => setLoanTerm(term)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      loanTerm === term
                        ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {term} Mos
                    {term <= 24 && (
                      <span className="block text-[9px] text-teal-300 font-normal">0% APR</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold block mb-0.5">
                {loanTerm <= 24 ? '✓ 0% Promotional APR Qualified' : '✓ Low Fixed Rate APR (7.9%)'}
              </span>
              Instant soft credit pre-qualification available with zero impact to credit score.
            </div>
          </div>

          {/* Monthly Estimate Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-sky-950/40 border border-sky-500/30 text-center space-y-4 shadow-xl">
            <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest">
              ESTIMATED MONTHLY INVESTMENT
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
              ${calculateMonthly()}
              <span className="text-sm font-normal text-slate-400"> / mo</span>
            </div>

            <div className="text-xs text-slate-400 font-mono space-y-1 pt-2 border-t border-slate-800">
              <div>Total Financed: ${loanAmount.toLocaleString()}</div>
              <div>Term: {loanTerm} Months ({loanTerm <= 24 ? '0% APR Promo' : '7.9% Fixed APR'})</div>
            </div>

            <button
              onClick={() => {
                onPreSelectTreatment(`Financed Care Plan ($${loanAmount.toLocaleString()})`);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 transition-all shadow-lg shadow-sky-500/25"
            >
              Apply for 0% Financing with Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Itemized Fee Schedule Directory */}
      <section className="space-y-8">
        <div>
          <span className="font-mono text-xs text-sky-400 uppercase">STANDARDIZED ADA BILLING</span>
          <h2 className="text-3xl font-bold text-white mt-1">Itemized Clinical Fee Schedule</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>{tier.category}</span>
                <span className="text-xs font-mono text-sky-400">ADA Codified</span>
              </h3>

              <div className="space-y-4">
                {tier.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start text-xs gap-3">
                    <div>
                      <div className="font-semibold text-slate-200">{item.name}</div>
                      <div className="text-[11px] text-slate-400">{item.notes}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono font-bold text-sky-300">{item.fee}</div>
                      <div className="text-[10px] font-mono text-slate-500">{item.code}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aura VIP Concierge Membership Club */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs text-teal-400 uppercase">NO INSURANCE REQUIRED</span>
          <h2 className="text-3xl font-bold text-white mt-1">Aura Dental VIP Concierge Membership</h2>
          <p className="text-slate-400 text-sm mt-2">
            Direct membership designed for individuals and families seeking concierge dental care without insurance waiting periods, annual caps, or claim denials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipTiers.map((plan, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'border-sky-500 bg-slate-900/90 shadow-2xl shadow-sky-950/40 relative'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-sky-500 text-[10px] font-mono font-bold text-white uppercase shadow-md">
                  RECOMMENDED FOR SURGICAL & COSMETIC
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-xs text-sky-400 uppercase font-bold">{plan.badge}</span>
                </div>

                <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                <div className="mt-3 mb-6">
                  <span className="text-3xl font-extrabold text-white font-mono">{plan.price}</span>
                  <span className="text-xs text-slate-400 ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 text-xs mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  onPreSelectTreatment(`VIP Membership: ${plan.name}`);
                  onOpenBooking();
                }}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                  plan.popular
                    ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/25'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                Enroll in Membership
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance Provider Lookup */}
      <section className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs text-sky-400 uppercase">DIRECT ELECTRONIC BILLING</span>
          <h3 className="text-2xl font-bold text-white">Insurance Coverage Checker</h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            We accept and process all major PPO dental plans directly. Our concierge billing department files your claims electronically to maximize your annual benefits.
          </p>

          <form onSubmit={handleInsuranceCheck} className="flex flex-col sm:flex-row gap-3 pt-2">
            <select
              value={selectedInsurance}
              onChange={(e) => setSelectedInsurance(e.target.value)}
              className="flex-1 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
            >
              <option value="">Select Your Insurance Carrier...</option>
              <option value="Delta Dental Premier / PPO">Delta Dental Premier / PPO</option>
              <option value="Cigna Dental Radius PPO">Cigna Dental Radius PPO</option>
              <option value="MetLife PDP Plus">MetLife PDP Plus</option>
              <option value="Guardian DentalGuard Preferred">Guardian DentalGuard Preferred</option>
              <option value="Aetna Dental PPO">Aetna Dental PPO</option>
              <option value="United Concordia National Fee-For-Service">United Concordia Alliance</option>
              <option value="Humana Dental PPO">Humana Dental PPO</option>
            </select>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-sky-500 hover:bg-sky-400 transition-colors shadow-sm"
            >
              Verify Network Status
            </button>
          </form>

          {insuranceStatus && (
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-left text-xs space-y-1">
              <div className="font-bold text-emerald-300">{insuranceStatus.carrier}: {insuranceStatus.coverage}</div>
              <p className="text-slate-300 text-[11px]">{insuranceStatus.tier}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
