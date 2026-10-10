import React from 'react';
import { CheckCircle, ShieldCheck, HeartHandshake, FileText } from 'lucide-react';
/* 
  [CHANDA PORTAL IMPORTS - COMMENTED OUT TEMPORARILY]
  import { useState } from 'react';
  import { Sparkles } from 'lucide-react';
  import confetti from 'canvas-confetti';
*/
import { BUDGET_ITEMS, BUDGET_METADATA, INCOME_SOURCES, BudgetItem } from '../data/budgetData';
import { AlpanaBadge } from './AlpanaBadge';

export const Page4Budget: React.FC = () => {
  /*
  ==============================================================================
  [COMMUNITY CHANDA / DONATION PORTAL CODE - TEMPORARILY COMMENTED OUT]
  Per committee instructions, online chanda is currently disabled for 70th year prep.
  The complete implementation is preserved below. To re-enable:
  1. Uncomment the state and helpers below.
  2. Uncomment the JSX form inside the container.
  ==============================================================================

  const [pledgeAmount, setPledgeAmount] = useState<number>(1001);
  const [pledgeName, setPledgeName] = useState<string>('');
  const [isPledged, setIsPledged] = useState<boolean>(false);

  // Suggested donation tiers
  const donationTiers = [
    { amount: 501, labelBn: '৫০১ টাকা', sponsorBn: '১৫ জনের শালপাতায় মহাপ্রসাদ ভোগ' },
    { amount: 1001, labelBn: '১,০০১ টাকা', sponsorBn: 'সন্ধিপূজার ১০৮ মাটির প্রদীপ ও সলতে' },
    { amount: 2501, labelBn: '২,৫০১ টাকা', sponsorBn: 'দুঃস্থ শিশুদের নতুন শারদীয় বস্ত্রদান' },
    { amount: 5001, labelBn: '৫,০০১ টাকা', sponsorBn: 'একদিন সম্পূর্ণ ভোগ ও চন্দননগরের আলো' },
  ];

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgeName.trim() || pledgeAmount <= 0) return;

    setIsPledged(true);

    // Festive confetti burst
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.65 },
      colors: ['#ffd98a', '#c9a24b', '#b3261e', '#ffffff'],
    });
  };

  const getSponsorshipMeaning = (amt: number) => {
    if (amt >= 5000) return 'একদিনের সর্বজনীন ভোগ এবং চন্দননগরের একটি আলোক তোরণ পরিচালনা।';
    if (amt >= 2500) return 'দুঃস্থ শিশুদের ৫ সেট নতুন বস্ত্র ও প্রবীণদের চক্ষু পরীক্ষা তহবিল।';
    if (amt >= 1000) return 'সন্ধিপূজার ১০৮টি মাটির প্রদীপ, খাঁটি ঘি ও ১০৮ নীলপদ্ম উপহার।';
    return '২৫ জন ভক্তের জন্য বিশুদ্ধ গোবিন্দভোগ চালের খিচুড়ি ও পায়েস সেবা।';
  };
  ==============================================================================
  */

  return (
    <section id="page-budget" style={{ padding: '6rem 0', background: 'var(--ink-950)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <AlpanaBadge size={32} petals={14} rings={2} color="#ffd98a" strokeWidth={1.5} />
            <span className="section-tag">৪র্থ অধ্যায় · আর্থিক স্বচ্ছতা ও হিসাব</span>
            <AlpanaBadge size={32} petals={14} rings={2} color="#ffd98a" strokeWidth={1.5} />
          </div>
          <h2 className="section-title font-bn">বার্ষিক বাজেট ও প্রকাশ্য আয়-ব্যয়</h2>
          <p className="section-desc">
            আমাদের বিশ্বাস — জনগণের চাঁদা ও পৃষ্ঠপোষকদের অনুদানের প্রতিটি পয়সার পুঙ্খানুপুঙ্খ হিসাব সর্বসাধারণের জন্য উন্মুক্ত থাকা উচিত।
          </p>
        </div>

        {/* Master Budget Highlight Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.8) 0%, rgba(35, 12, 16, 0.85) 100%)',
            border: '1px solid var(--gold)',
            borderRadius: '16px',
            padding: '2.5rem',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-gold)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={14} />
              অর্থবর্ষ {BUDGET_METADATA.fiscalYear} অনুমোদিত বাজেট (৭০তম বর্ষ)
            </span>

            <h3 className="font-bn" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--cream)', fontWeight: 700, lineHeight: 1.1 }}>
              {BUDGET_METADATA.formattedTotalBn}
            </h3>
            <span className="font-ui" style={{ fontSize: '1.1rem', color: 'var(--gold-light)', display: 'block', marginTop: '0.25rem' }}>
              Total Estimated Expenditure: {BUDGET_METADATA.formattedTotalEn}
            </span>

            <p className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)', marginTop: '0.85rem', lineHeight: 1.6 }}>
              {BUDGET_METADATA.auditPledgeBn}
            </p>
          </div>

          <div
            style={{
              background: 'rgba(7, 9, 21, 0.65)',
              border: '1px solid var(--ink-border)',
              borderRadius: '12px',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <FileText size={20} color="#ffd98a" />
              <h4 className="font-bn" style={{ fontSize: '1.15rem', color: 'var(--cream)' }}>
                চার্টার্ড অ্যাকাউন্ট্যান্ট অডিট সংসাপত্র
              </h4>
            </div>

            <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>
              নিরীক্ষক সংস্থা: <strong style={{ color: 'var(--cream)' }}>{BUDGET_METADATA.auditedByBn}</strong>
            </p>

            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={16} color="#74d99f" />
              <span className="font-ui" style={{ fontSize: '0.85rem', color: '#74d99f' }}>
                Financial Books 100% Tax Compliant & Verified
              </span>
            </div>
          </div>
        </div>

        {/* 8-Part Categorical Expenditures Breakdown */}
        <div style={{ marginBottom: '4.5rem' }}>
          <h3 className="font-bn" style={{ fontSize: '1.9rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
            খাতভিত্তিক বিস্তারিত ব্যয়ের তালিকা
          </h3>
          <p className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)', marginBottom: '2rem' }}>
            প্রতিটি খাতের বরাদ্দ, শতকরা হার ও নিযুক্ত অনুমোদিত শিল্পীদের বিবরণ:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {BUDGET_ITEMS.map((item: BudgetItem) => (
              <div key={item.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="badge-sindoor" style={{ fontSize: '0.78rem' }}>
                      {item.percentage}% বরাদ্দ
                    </span>
                    <span className="font-ui" style={{ fontSize: '0.8rem', color: '#74d99f', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <CheckCircle size={12} /> {item.auditStatus}
                    </span>
                  </div>

                  <h4 className="font-bn" style={{ fontSize: '1.3rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {item.categoryBn}
                  </h4>
                  <span className="font-ui" style={{ fontSize: '0.82rem', color: 'var(--gold-light)', display: 'block', marginBottom: '0.85rem' }}>
                    {item.categoryEn}
                  </span>

                  <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {item.descriptionBn}
                  </p>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--ink-border)' }}>
                  {/* Progress Bar Representation */}
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', marginBottom: '0.75rem' }}>
                    <div style={{ width: `${item.percentage * 2.5}%`, height: '100%', background: 'linear-gradient(90deg, var(--gold), var(--sindoor))' }} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span className="font-bn" style={{ fontSize: '0.82rem', color: 'var(--paper-muted)' }}>
                      কারিগর: {item.vendorBn.split(' ')[0]}
                    </span>
                    <span className="font-display" style={{ fontSize: '1.45rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                      ₹ {item.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Income Sources Grid */}
        <div style={{ marginBottom: '4.5rem' }}>
          <h3 className="font-bn" style={{ fontSize: '1.9rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
            আয়ের উৎস ও অর্থায়ন পরিকল্পনা
          </h3>
          <p className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)', marginBottom: '2rem' }}>
            কোথা থেকে সংগৃহীত হয় আমাদের পূজার অর্থ:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {INCOME_SOURCES.map((src, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.5rem' }}>
                <span className="font-display" style={{ fontSize: '2rem', color: 'var(--gold-light)', fontWeight: 700, display: 'block' }}>
                  {src.percentage}%
                </span>
                <h4 className="font-bn" style={{ fontSize: '1.15rem', color: 'var(--cream)', margin: '0.35rem 0' }}>
                  {src.sourceBn}
                </h4>
                <span className="font-ui" style={{ fontSize: '0.85rem', color: 'var(--paper-muted)', display: 'block', marginBottom: '0.75rem' }}>
                  ₹ {src.amount.toLocaleString('en-IN')}
                </span>
                <span className="badge-gold" style={{ fontSize: '0.75rem' }}>
                  {src.statusBn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Notice: Chanda Portal Temporarily Offline Notice */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            maxWidth: '850px',
            margin: '0 auto',
            textAlign: 'center',
            border: '1px solid rgba(201, 162, 75, 0.35)',
            background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.7) 0%, rgba(35, 12, 16, 0.7) 100%)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(201, 162, 75, 0.15)',
              border: '1px solid var(--gold)',
              color: '#ffd98a',
              marginBottom: '1rem',
            }}
          >
            <HeartHandshake size={28} />
          </div>

          <span className="badge-gold" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
            অনলাইন চাঁদা সংগ্রহ সাময়িক স্থগিত
          </span>

          <h3 className="font-bn" style={{ fontSize: '1.85rem', color: 'var(--cream)', fontWeight: 700, marginBottom: '0.75rem' }}>
            অনলাইন চাঁদা ও অনুদান পোর্টাল এই মুহূর্তে নিষ্ক্রিয় রয়েছে
          </h3>

          <p className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--paper-muted)', maxWidth: '640px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটির সিদ্ধান্ত অনুযায়ী ৭০তম বর্ষের বিশেষ প্রস্তুতি চলাকালীন অনলাইন চাঁদা ও ডোনেশন গ্রহণ সাময়িকভাবে স্থগিত রাখা হয়েছে। পূজা প্রাঙ্গণে সরাসরি অথবা দায়িত্বপ্রাপ্ত কর্মকর্তাদের মারফত শ্রদ্ধার্ঘ্য ও চাঁদার রসিদ সংগ্রহ করার জন্য সনির্বন্ধ অনুরোধ জানানো হচ্ছে।
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.25rem',
              borderRadius: '30px',
              background: 'rgba(7, 9, 21, 0.85)',
              border: '1px solid var(--ink-border)',
              color: 'var(--gold-light)',
            }}
          >
            <span className="font-bn" style={{ fontSize: '0.9rem' }}>
              যোগাযোগ ও অনুসন্ধান: দুয়েরপল্লী পূজা মণ্ডপ সচিবালয়
            </span>
          </div>
        </div>

        {/* 
        ========================================================================
        [CHANDA & DONATION PLEDGE PORTAL CODE - PRESERVED & COMMENTED OUT AS REQUESTED]
        To re-enable this interactive portal, simply remove the JSX comment wrapper
        and re-enable the state block at the top of this component.
        ------------------------------------------------------------------------
        <div
          className="glass-card-sindoor"
          style={{
            padding: '2.5rem',
            maxWidth: '850px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>
              <HeartHandshake size={14} /> সর্বজনীন অনুদান ও চাঁদা পোর্টাল
            </span>
            <h3 className="font-bn" style={{ fontSize: '2rem', color: 'var(--cream)', fontWeight: 700 }}>
              পূজোর মহাযজ্ঞে আপনার শ্রদ্ধার্ঘ্য যুক্ত করুন
            </h3>
            <p className="font-bn" style={{ fontSize: '1rem', color: 'var(--paper-muted)', maxWidth: '580px', margin: '0 auto 0' }}>
              অনলাইনে সরাসরি কমিটির ব্যাংক অ্যাকাউন্টে পাঠিয়ে স্বাচ্ছন্দ্যে রসিদ সংগ্রহ করুন।
            </p>
          </div>

          {isPledged ? (
            <div
              style={{
                background: 'rgba(201, 162, 75, 0.15)',
                border: '1px solid #ffd98a',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <CheckCircle size={44} color="#ffd98a" style={{ marginBottom: '1rem' }} />
              <h4 className="font-bn" style={{ fontSize: '1.75rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
                শ্রদ্ধেয় {pledgeName}, আপনার ₹{pledgeAmount.toLocaleString('en-IN')} অনুদানের সংকল্প গৃহীত হয়েছে!
              </h4>
              <p className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--paper-muted)', marginBottom: '1.5rem' }}>
                আপনার এই পবিত্র সহযোগিতায়: <strong style={{ color: '#ffd98a' }}>{getSponsorshipMeaning(pledgeAmount)}</strong>
              </p>

              <div
                style={{
                  background: 'rgba(7, 9, 21, 0.8)',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  display: 'inline-block',
                  textAlign: 'left',
                  margin: '0 auto',
                }}
              >
                <p className="font-ui" style={{ fontSize: '0.88rem', color: 'var(--cream)' }}>
                  <strong>UPI ID:</strong> {BUDGET_METADATA.bankAccount.upiId}
                </p>
                <p className="font-ui" style={{ fontSize: '0.88rem', color: 'var(--cream)' }}>
                  <strong>Account Name:</strong> {BUDGET_METADATA.bankAccount.accountName}
                </p>
                <p className="font-ui" style={{ fontSize: '0.88rem', color: 'var(--cream)' }}>
                  <strong>SBI A/C:</strong> {BUDGET_METADATA.bankAccount.accountNumber} | <strong>IFSC:</strong> {BUDGET_METADATA.bankAccount.ifscCode}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsPledged(false)}
                >
                  <span className="font-bn">নতুন অনুদান হিসেব করুন</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePledgeSubmit}>
              <div style={{ marginBottom: '1.75rem' }}>
                <label className="font-bn" style={{ display: 'block', fontSize: '1rem', color: 'var(--cream)', marginBottom: '0.75rem' }}>
                  অনুদান বা চাঁদার অঙ্ক নির্বাচন করুন:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => setPledgeAmount(tier.amount)}
                      style={{
                        padding: '1rem 0.75rem',
                        background: pledgeAmount === tier.amount ? 'var(--gold)' : 'rgba(11, 14, 31, 0.65)',
                        color: pledgeAmount === tier.amount ? 'var(--ink-950)' : 'var(--paper)',
                        border: `1px solid ${pledgeAmount === tier.amount ? '#fff' : 'var(--ink-border)'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'var(--transition-smooth)',
                      }}
                    >
                      <span className="font-display" style={{ fontSize: '1.4rem', fontWeight: 700, display: 'block' }}>
                        ₹ {tier.amount}
                      </span>
                      <span className="font-bn" style={{ fontSize: '0.75rem', opacity: 0.9 }}>
                        {tier.sponsorBn.slice(0, 24)}...
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(7, 9, 21, 0.55)',
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  borderLeft: '3px solid var(--gold)',
                  marginBottom: '1.5rem',
                }}
              >
                <span className="font-bn" style={{ fontSize: '0.85rem', color: 'var(--gold-light)', display: 'block' }}>
                  এই অঙ্কে আপনি যা অর্থায়ন করছেন:
                </span>
                <p className="font-bn" style={{ fontSize: '1rem', color: 'var(--cream)', fontWeight: 500 }}>
                  {getSponsorshipMeaning(pledgeAmount)}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label className="font-bn" style={{ display: 'block', fontSize: '0.9rem', color: 'var(--cream)', marginBottom: '0.35rem' }}>
                    আপনার শুভ নাম (Full Name):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="উদাঃ সৌম্য ব্যানার্জী"
                    value={pledgeName}
                    onChange={(e) => setPledgeName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(11, 14, 31, 0.8)',
                      border: '1px solid rgba(201, 162, 75, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-bn)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label className="font-bn" style={{ display: 'block', fontSize: '0.9rem', color: 'var(--cream)', marginBottom: '0.35rem' }}>
                    কাস্টম অঙ্ক (Custom Amount in INR):
                  </label>
                  <input
                    type="number"
                    min="100"
                    step="50"
                    value={pledgeAmount}
                    onChange={(e) => setPledgeAmount(Math.max(100, parseInt(e.target.value || '0', 10)))}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(11, 14, 31, 0.8)',
                      border: '1px solid rgba(201, 162, 75, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '1rem',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-gold"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1.1rem' }}
              >
                <Sparkles size={18} />
                <span className="font-bn">অনুদানের সংকল্প নিশ্চিত করুন ও UPI বিবরণ দেখুন</span>
              </button>
            </form>
          )}
        </div>
        ========================================================================
        */}
      </div>
    </section>
  );
};
