import React, { useState } from 'react';
import {
  CheckCircle,
  FileText,
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  Wallet,
  Scale,
  Info,
  Building2,
  Lock,
  LayoutGrid,
  ListFilter,
  CheckCircle2,
} from 'lucide-react';
import {
  BUDGET_METADATA,
  INCOME_ITEMS,
  EXPENSE_ITEMS,
  CLOSING_BALANCE_ITEMS,
  RECONCILIATION_DATA,
  IncomeItem,
  ExpenseItem,
  BalanceItem,
} from '../data/budgetData';
import { AlpanaBadge } from './AlpanaBadge';

export const Page4Budget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'expenses' | 'income' | 'balance' | 'reconciliation'>('expenses');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredExpenses = EXPENSE_ITEMS.filter((item: ExpenseItem) =>
    item.descriptionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIncome = INCOME_ITEMS.filter((item: IncomeItem) =>
    item.descriptionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="page-budget" style={{ padding: '6rem 0', background: 'var(--ink-950)', position: 'relative' }}>
      <div className="container">
        {/* 1. Section Header — Consistent with the entire website */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <AlpanaBadge size={32} petals={14} rings={2} color="#ffd98a" strokeWidth={1.5} />
            <span className="section-tag">৪র্থ অধ্যায় · আর্থিক স্বচ্ছতা ও হিসাব</span>
            <AlpanaBadge size={32} petals={14} rings={2} color="#ffd98a" strokeWidth={1.5} />
          </div>
          <h2 className="section-title font-bn">বার্ষিক বাজেট ও প্রকাশ্য আয়-ব্যয়</h2>
          <p className="font-ui" style={{ color: 'var(--gold-light)', fontSize: '1.05rem', marginTop: '0.35rem', fontWeight: 500 }}>
            {BUDGET_METADATA.fiscalYear} | Calculation Verification Report
          </p>
          <p className="section-desc">
            আমাদের বিশ্বাস — জনগণের চাঁদা ও পৃষ্ঠপোষকদের অনুদানের প্রতিটি পয়সার পুঙ্খানুপুঙ্খ হিসাব সর্বসাধারণের জন্য উন্মুক্ত থাকা উচিত।
          </p>
        </div>

        {/* 2. Master Budget Highlight Banner — Rebuilt & Maintained to match the website */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.8) 0%, rgba(35, 12, 16, 0.85) 100%)',
            border: '1px solid var(--gold)',
            borderRadius: '16px',
            padding: '2.5rem',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-gold)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="badge-gold" style={{ marginBottom: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} />
              {BUDGET_METADATA.fiscalYear} অনুমোদিত ও নিরীক্ষিত হিসাব
            </span>

            <h3 className="font-bn" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--cream)', fontWeight: 700, lineHeight: 1.1 }}>
              {BUDGET_METADATA.formattedTotalExpenseBn}
            </h3>
            <span className="font-ui" style={{ fontSize: '1.1rem', color: 'var(--gold-light)', display: 'block', marginTop: '0.25rem' }}>
              Total Verified Expenditure: {BUDGET_METADATA.formattedTotalExpenseEn}
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
              <h4 className="font-bn" style={{ fontSize: '1.15rem', color: 'var(--cream)', margin: 0 }}>
                অফিসিয়াল অডিট ও হিসাব সংসাপত্র
              </h4>
            </div>

            <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', lineHeight: 1.6, margin: 0 }}>
              নিরীক্ষক পরিষদ: <strong style={{ color: 'var(--cream)' }}>{BUDGET_METADATA.auditedByBn}</strong>
            </p>
            <p className="font-bn" style={{ fontSize: '0.85rem', color: 'var(--paper-muted)', marginTop: '0.35rem' }}>
              হিসাব পরীক্ষক: শ্রী অম্বর ঘোষ ও কাঞ্চন মিত্র (অভ্যন্তরীণ নিরীক্ষক পরিষদ)
            </p>

            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={16} color="#74d99f" />
              <span className="font-ui" style={{ fontSize: '0.85rem', color: '#74d99f', fontWeight: 500 }}>
                Financial Books 100% Reconciled & Tax Compliant
              </span>
            </div>
          </div>
        </div>

        {/* 3. Three Master Summary KPI Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Card 1: Total Income */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              border: '1px solid rgba(201, 162, 75, 0.35)',
              background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.75) 0%, rgba(7, 9, 21, 0.85) 100%)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span className="badge-gold" style={{ fontSize: '0.82rem' }}>
                <TrendingUp size={14} /> মোট আয় (Income)
              </span>
              <span className="font-ui" style={{ fontSize: '0.82rem', color: '#74d99f', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle size={14} /> ১২টি খাত মিলেছে
              </span>
            </div>
            <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: 'var(--cream)', fontWeight: 700, margin: '0.2rem 0' }}>
              ₹ {BUDGET_METADATA.totalIncomeINR.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </h3>
            <span className="font-bn" style={{ fontSize: '1.05rem', color: '#ffd98a', display: 'block' }}>
              {BUDGET_METADATA.formattedTotalIncomeBn}
            </span>
            <p className="font-bn" style={{ fontSize: '0.88rem', color: 'var(--paper-muted)', marginTop: '0.65rem', lineHeight: 1.5 }}>
              বিল, অনুদান ও ব্যাংক সুদ সহযোগে সংগৃহীত মোট সর্বজনীন তহবিল।
            </p>
          </div>

          {/* Card 2: Total Expenses */}
          <div
            className="glass-card-sindoor"
            style={{
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span className="badge-sindoor" style={{ fontSize: '0.82rem' }}>
                <TrendingDown size={14} /> পূজা বাবদ মোট খরচ
              </span>
              <span className="font-ui" style={{ fontSize: '0.82rem', color: '#ffd98a', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle size={14} /> ১৯টি খাত সমন্বিত
              </span>
            </div>
            <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: 'var(--cream)', fontWeight: 700, margin: '0.2rem 0' }}>
              ₹ {BUDGET_METADATA.totalExpenseINR.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </h3>
            <span className="font-bn" style={{ fontSize: '1.05rem', color: '#ff9d5c', display: 'block' }}>
              {BUDGET_METADATA.formattedTotalExpenseBn}
            </span>
            <p className="font-bn" style={{ fontSize: '0.88rem', color: 'var(--paper-muted)', marginTop: '0.65rem', lineHeight: 1.5 }}>
              মণ্ডপ, প্রতিমা, আলোকসজ্জা ও পূজাবিধি বাবদ অনুমোদিত সার্বিক ব্যয়।
            </p>
          </div>

          {/* Card 3: Closing Balance Surplus */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              border: '1px solid rgba(116, 217, 159, 0.35)',
              background: 'linear-gradient(135deg, rgba(12, 35, 24, 0.75) 0%, rgba(7, 9, 21, 0.85) 100%)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span className="badge-gold" style={{ fontSize: '0.82rem', borderColor: '#74d99f', color: '#74d99f' }}>
                <Wallet size={14} /> মোট মজুত অর্থ (উদ্বৃত্ত)
              </span>
              <span className="font-ui" style={{ fontSize: '0.82rem', color: '#74d99f', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle size={14} /> ব্যালেন্স সুরক্ষিত
              </span>
            </div>
            <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: 'var(--cream)', fontWeight: 700, margin: '0.2rem 0' }}>
              ₹ {BUDGET_METADATA.closingBalanceINR.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </h3>
            <span className="font-bn" style={{ fontSize: '1.05rem', color: '#74d99f', display: 'block' }}>
              {BUDGET_METADATA.formattedClosingBalanceBn}
            </span>
            <p className="font-bn" style={{ fontSize: '0.88rem', color: 'var(--paper-muted)', marginTop: '0.65rem', lineHeight: 1.5 }}>
              হাতে ও ব্যাংকে মজুত অর্থ পরবর্তী ৭০তম বর্ষের প্রস্তুতিতে জমা।
            </p>
          </div>
        </div>

        {/* 4. Reconciliation Equation Bar */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.9) 0%, rgba(12, 35, 24, 0.85) 100%)',
            border: '1px solid rgba(201, 162, 75, 0.4)',
            borderRadius: '14px',
            padding: '1.5rem 2rem',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-gold)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '1 1 300px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(201, 162, 75, 0.15)',
                border: '1px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffd98a',
                flexShrink: 0,
              }}
            >
              <Scale size={22} />
            </div>
            <div>
              <h4 className="font-bn" style={{ fontSize: '1.15rem', color: 'var(--cream)', margin: 0, fontWeight: 600 }}>
                চূড়ান্ত মিলকরণ সমীকরণ: আয় = খরচ + মজুত অর্থ
              </h4>
              <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', margin: '0.2rem 0 0' }}>
                ₹ ৫,৫৬,৬৮৭.১৮ = ₹ ৫,৩২,৯৫১.০০ + ₹ ২৩,৭৩৬.১৮ (পয়সায় পয়সায় মিলেছে ✓)
              </p>
            </div>
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              background: 'rgba(116, 217, 159, 0.15)',
              border: '1px solid #74d99f',
              color: '#74d99f',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-ui)',
            }}
          >
            <CheckCircle2 size={15} /> অডিট হিসাব ১০০% মিল সম্পন্ন
          </span>
        </div>

        {/* 5. Calculation Discrepancy & Verification Notice Box */}
        <div
          style={{
            background: 'rgba(201, 162, 75, 0.08)',
            border: '1px solid rgba(201, 162, 75, 0.35)',
            borderLeft: '4px solid #ffd98a',
            borderRadius: '10px',
            padding: '1.25rem 1.5rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <Info size={22} color="#ffd98a" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h5 className="font-bn" style={{ fontSize: '1.05rem', color: '#ffd98a', margin: '0 0 0.35rem', fontWeight: 600 }}>
              হিসাব পরীক্ষণ ও মুদ্রণ সংশোধন বিবরণী (Calculation Verification Note)
            </h5>
            <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', margin: 0, lineHeight: 1.65 }}>
              {BUDGET_METADATA.reconciliationNoteBn}
            </p>
          </div>
        </div>

        {/* 6. Filter Tabs Bar — Using site's canonical `btn btn-primary` and `btn btn-ghost` */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
            borderBottom: '1px solid rgba(201, 162, 75, 0.25)',
            paddingBottom: '1.25rem',
          }}
        >
          {/* Main Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {[
              { id: 'expenses', labelBn: `২. ব্যয় (Expenses · ${EXPENSE_ITEMS.length}টি খাত)` },
              { id: 'income', labelBn: `১. আয় (Income · ${INCOME_ITEMS.length}টি খাত)` },
              { id: 'balance', labelBn: `৩. মোট মজুত অর্থ (${CLOSING_BALANCE_ITEMS.length}টি খাত)` },
              { id: 'reconciliation', labelBn: '৪. চূড়ান্ত মিলকরণ অডিট শিট' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setSearchQuery('');
                  }}
                  className={`btn ${isActive ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ fontSize: '0.88rem', padding: '0.55rem 1.35rem' }}
                >
                  <span className="font-bn">{tab.labelBn}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle & Search (for expenses and income) */}
          {(activeTab === 'expenses' || activeTab === 'income') && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="খাত অনুসন্ধান করুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(201, 162, 75, 0.3)',
                  background: 'rgba(7, 9, 21, 0.8)',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-bn)',
                  fontSize: '0.88rem',
                  minWidth: '180px',
                  outline: 'none',
                }}
              />

              <div
                style={{
                  display: 'inline-flex',
                  borderRadius: '20px',
                  border: '1px solid rgba(201, 162, 75, 0.3)',
                  padding: '2px',
                  background: 'rgba(7, 9, 21, 0.8)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: '16px',
                    border: 'none',
                    background: viewMode === 'cards' ? 'var(--gold)' : 'transparent',
                    color: viewMode === 'cards' ? 'var(--ink-950)' : 'var(--paper-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-bn)',
                  }}
                  title="কার্ড ভিউ"
                >
                  <LayoutGrid size={14} /> কার্ড
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: '16px',
                    border: 'none',
                    background: viewMode === 'table' ? 'var(--gold)' : 'transparent',
                    color: viewMode === 'table' ? 'var(--ink-950)' : 'var(--paper-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-bn)',
                  }}
                  title="লেজার টেবিল ভিউ"
                >
                  <ListFilter size={14} /> টেবিল
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 7. Tab 1: Expenses View (২. ব্যয়) */}
        {activeTab === 'expenses' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="font-bn" style={{ fontSize: '1.65rem', color: 'var(--cream)', margin: '0 0 0.25rem' }}>
                ব্যয়ের বিস্তারিত হিসাব তালিকা ({EXPENSE_ITEMS.length}টি খাত)
              </h3>
              <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', margin: 0 }}>
                পূজা বাবদ মোট অনুমোদিত খরচ: <strong>₹ ৫,৩২,৯৫১.০০</strong>
              </p>
            </div>

            {/* Grid Cards Mode (Consistent with Page3 & Site Aesthetic) */}
            {viewMode === 'cards' ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {filteredExpenses.map((exp: ExpenseItem) => (
                  <div
                    key={exp.id}
                    className="glass-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: exp.isVerifiedDiscrepancy ? '1px solid #ffd98a' : '1px solid var(--ink-border)',
                      position: 'relative',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <span className="badge-sindoor" style={{ fontSize: '0.78rem' }}>
                          #{exp.slNo} · {exp.percentage < 0.01 ? '<0.01%' : `${exp.percentage.toFixed(2)}%`}
                        </span>
                        <span className="font-ui" style={{ fontSize: '0.8rem', color: '#74d99f', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <CheckCircle size={12} /> অনুমোদিত
                        </span>
                      </div>

                      <h4 className="font-bn" style={{ fontSize: '1.3rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.25rem' }}>
                        {exp.descriptionBn}
                      </h4>
                      <span className="font-ui" style={{ fontSize: '0.82rem', color: 'var(--gold-light)', display: 'block', marginBottom: '0.75rem' }}>
                        {exp.descriptionEn}
                      </span>

                      {exp.noteBn && (
                        <p className="font-bn" style={{ fontSize: '0.82rem', color: '#ffd98a', background: 'rgba(201, 162, 75, 0.12)', padding: '0.45rem 0.65rem', borderRadius: '6px', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                          {exp.noteBn}
                        </p>
                      )}
                    </div>

                    <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--ink-border)' }}>
                      {/* Progress Bar Representation */}
                      <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                        <div style={{ width: `${Math.min(100, exp.percentage * 3)}%`, height: '100%', background: 'linear-gradient(90deg, var(--gold), var(--sindoor))' }} />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span className="font-bn" style={{ fontSize: '0.82rem', color: 'var(--paper-muted)' }}>
                          বরাদ্দকৃত অঙ্ক:
                        </span>
                        <span className="font-display" style={{ fontSize: '1.45rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                          ₹ {exp.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Ledger Table Mode */
              <div
                style={{
                  overflowX: 'auto',
                  background: 'rgba(7, 9, 21, 0.75)',
                  border: '1px solid rgba(201, 162, 75, 0.25)',
                  borderRadius: '12px',
                  marginBottom: '2.5rem',
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                  <thead>
                    <tr style={{ background: 'rgba(201, 162, 75, 0.12)', borderBottom: '1px solid rgba(201, 162, 75, 0.3)' }}>
                      <th className="font-ui" style={{ padding: '1rem', color: '#ffd98a', width: '60px' }}>#</th>
                      <th className="font-bn" style={{ padding: '1rem', color: '#ffd98a' }}>বিবরণ (Expense Head)</th>
                      <th className="font-bn" style={{ padding: '1rem', color: '#ffd98a', textAlign: 'right' }}>টাকা (₹)</th>
                      <th className="font-ui" style={{ padding: '1rem', color: '#ffd98a', textAlign: 'center', width: '130px' }}>শতকরা বরাদ্দ</th>
                      <th className="font-bn" style={{ padding: '1rem', color: '#ffd98a', textAlign: 'center', width: '130px' }}>স্ট্যাটাস</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExpenses.map((exp: ExpenseItem) => (
                      <tr
                        key={exp.id}
                        style={{
                          borderBottom: '1px solid rgba(201, 162, 75, 0.12)',
                          background: exp.isVerifiedDiscrepancy ? 'rgba(201, 162, 75, 0.08)' : 'transparent',
                          transition: 'var(--transition-smooth)',
                        }}
                      >
                        <td className="font-ui" style={{ padding: '1rem', color: 'var(--paper-muted)', fontWeight: 600 }}>
                          {exp.slNo}
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <span className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--cream)', fontWeight: 500 }}>
                            {exp.descriptionBn}
                          </span>
                          <span className="font-ui" style={{ fontSize: '0.78rem', color: 'var(--paper-muted)', display: 'block' }}>
                            {exp.descriptionEn}
                          </span>
                          {exp.noteBn && (
                            <p className="font-bn" style={{ fontSize: '0.8rem', color: '#ffd98a', margin: '0.25rem 0 0' }}>
                              {exp.noteBn}
                            </p>
                          )}
                        </td>
                        <td className="font-display" style={{ padding: '1rem', textAlign: 'right', fontSize: '1.25rem', color: '#ff9d5c', fontWeight: 600 }}>
                          ₹ {exp.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span className="font-ui" style={{ fontSize: '0.85rem', color: 'var(--paper-muted)' }}>
                            {exp.percentage < 0.01 ? '<0.01%' : `${exp.percentage.toFixed(2)}%`}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#74d99f', fontFamily: 'var(--font-bn)' }}>
                            <CheckCircle size={13} /> অনুমোদিত
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ background: 'rgba(201, 162, 75, 0.18)', borderTop: '2px solid rgba(201, 162, 75, 0.4)' }}>
                      <td colSpan={2} className="font-bn" style={{ padding: '1.15rem 1rem', fontSize: '1.15rem', color: 'var(--cream)', fontWeight: 700 }}>
                        পূজা বাবদ মোট খরচ (Approved Total Expenditure)
                      </td>
                      <td className="font-display" style={{ padding: '1.15rem 1rem', textAlign: 'right', fontSize: '1.45rem', color: '#ffd98a', fontWeight: 700 }}>
                        ₹ {BUDGET_METADATA.totalExpenseINR.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="font-ui" style={{ padding: '1.15rem 1rem', textAlign: 'center', color: '#ffd98a', fontWeight: 700 }}>
                        ১০০%
                      </td>
                      <td style={{ padding: '1.15rem 1rem', textAlign: 'center' }}>
                        <span className="badge-gold" style={{ fontSize: '0.78rem' }}>✓ সম্পূর্ণ মিলেছে</span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>
        )}

        {/* 8. Tab 2: Income View (১. আয়) */}
        {activeTab === 'income' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="font-bn" style={{ fontSize: '1.65rem', color: 'var(--cream)', margin: '0 0 0.25rem' }}>
                আয়ের অনুমোদিত হিসাব তালিকা ({INCOME_ITEMS.length}টি খাত)
              </h3>
              <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', margin: 0 }}>
                সংগৃহীত ও মিলানো মোট তহবিল: <strong>₹ ৫,৫৬,৬৮৭.১৮</strong>
              </p>
            </div>

            {viewMode === 'cards' ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                {filteredIncome.map((inc: IncomeItem) => (
                  <div
                    key={inc.id}
                    className="glass-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid var(--ink-border)',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <span className="badge-gold" style={{ fontSize: '0.78rem' }}>
                          #{inc.slNo} · {inc.percentage.toFixed(2)}%
                        </span>
                        <span className="font-ui" style={{ fontSize: '0.8rem', color: '#74d99f', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <CheckCircle size={12} /> জমা সম্পন্ন
                        </span>
                      </div>

                      <h4 className="font-bn" style={{ fontSize: '1.3rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.25rem' }}>
                        {inc.descriptionBn}
                      </h4>
                      <span className="font-ui" style={{ fontSize: '0.82rem', color: 'var(--gold-light)', display: 'block', marginBottom: '0.85rem' }}>
                        {inc.descriptionEn}
                      </span>
                    </div>

                    <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--ink-border)' }}>
                      <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', marginBottom: '0.65rem' }}>
                        <div style={{ width: `${Math.min(100, inc.percentage * 2)}%`, height: '100%', background: 'linear-gradient(90deg, #74d99f, #ffd98a)' }} />
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span className="font-bn" style={{ fontSize: '0.82rem', color: 'var(--paper-muted)' }}>
                          সংগৃহীত অঙ্ক:
                        </span>
                        <span className="font-display" style={{ fontSize: '1.45rem', color: '#ffd98a', fontWeight: 600 }}>
                          ₹ {inc.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                style={{
                  overflowX: 'auto',
                  background: 'rgba(7, 9, 21, 0.75)',
                  border: '1px solid rgba(201, 162, 75, 0.25)',
                  borderRadius: '12px',
                  marginBottom: '2.5rem',
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                  <thead>
                    <tr style={{ background: 'rgba(201, 162, 75, 0.12)', borderBottom: '1px solid rgba(201, 162, 75, 0.3)' }}>
                      <th className="font-ui" style={{ padding: '1rem', color: '#ffd98a', width: '60px' }}>#</th>
                      <th className="font-bn" style={{ padding: '1rem', color: '#ffd98a' }}>বিবরণ (Income Head)</th>
                      <th className="font-bn" style={{ padding: '1rem', color: '#ffd98a', textAlign: 'right' }}>টাকা (₹)</th>
                      <th className="font-ui" style={{ padding: '1rem', color: '#ffd98a', textAlign: 'center', width: '130px' }}>শতকরা অংশ</th>
                      <th className="font-bn" style={{ padding: '1rem', color: '#ffd98a', textAlign: 'center', width: '130px' }}>স্ট্যাটাস</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredIncome.map((inc: IncomeItem) => (
                      <tr
                        key={inc.id}
                        style={{
                          borderBottom: '1px solid rgba(201, 162, 75, 0.12)',
                          transition: 'var(--transition-smooth)',
                        }}
                      >
                        <td className="font-ui" style={{ padding: '1rem', color: 'var(--paper-muted)', fontWeight: 600 }}>
                          {inc.slNo}
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <span className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--cream)', fontWeight: 500, display: 'block' }}>
                            {inc.descriptionBn}
                          </span>
                          <span className="font-ui" style={{ fontSize: '0.78rem', color: 'var(--paper-muted)' }}>
                            {inc.descriptionEn}
                          </span>
                        </td>
                        <td className="font-display" style={{ padding: '1rem', textAlign: 'right', fontSize: '1.25rem', color: '#ffd98a', fontWeight: 600 }}>
                          ₹ {inc.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span className="font-ui" style={{ fontSize: '0.85rem', color: 'var(--paper-muted)' }}>
                            {inc.percentage.toFixed(2)}%
                          </span>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#74d99f', fontFamily: 'var(--font-bn)' }}>
                            <CheckCircle size={13} /> জমা সম্পন্ন
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ background: 'rgba(201, 162, 75, 0.18)', borderTop: '2px solid rgba(201, 162, 75, 0.4)' }}>
                      <td colSpan={2} className="font-bn" style={{ padding: '1.15rem 1rem', fontSize: '1.15rem', color: 'var(--cream)', fontWeight: 700 }}>
                        গণনা করা ও মুদ্রিত মোট আয় (Total Income)
                      </td>
                      <td className="font-display" style={{ padding: '1.15rem 1rem', textAlign: 'right', fontSize: '1.45rem', color: '#ffd98a', fontWeight: 700 }}>
                        ₹ {BUDGET_METADATA.totalIncomeINR.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="font-ui" style={{ padding: '1.15rem 1rem', textAlign: 'center', color: '#ffd98a', fontWeight: 700 }}>
                        ১০০%
                      </td>
                      <td style={{ padding: '1.15rem 1rem', textAlign: 'center' }}>
                        <span className="badge-gold" style={{ fontSize: '0.78rem' }}>✓ আয় পক্ষ মিলেছে</span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>
        )}

        {/* 9. Tab 3: Closing Balance View (৩. মোট মজুত অর্থ) */}
        {activeTab === 'balance' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="font-bn" style={{ fontSize: '1.65rem', color: 'var(--cream)', margin: '0 0 0.25rem' }}>
                মোট মজুত ও ব্যাংকে গচ্ছিত অর্থ (Closing Balance)
              </h3>
              <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', margin: 0 }}>
                পূজা সমাপনান্তে হাতে ও ব্যাংকে রক্ষিত অনুমোদিত উদ্বৃত্ত: <strong>₹ ২৩,৭৩৬.১৮</strong>
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              {CLOSING_BALANCE_ITEMS.map((bal: BalanceItem) => (
                <div
                  key={bal.id}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    border: '1px solid rgba(116, 217, 159, 0.35)',
                    background: 'rgba(7, 9, 21, 0.85)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="font-ui" style={{ fontSize: '0.85rem', color: '#74d99f', fontWeight: 600 }}>
                      খাত #{bal.slNo}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#74d99f', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <CheckCircle size={14} /> নিরীক্ষিত
                    </span>
                  </div>

                  <h4 className="font-bn" style={{ fontSize: '1.35rem', color: 'var(--cream)', margin: '0 0 0.35rem' }}>
                    {bal.descriptionBn}
                  </h4>
                  <span className="font-ui" style={{ fontSize: '0.82rem', color: 'var(--paper-muted)', display: 'block', marginBottom: '1rem' }}>
                    {bal.descriptionEn}
                  </span>

                  <div style={{ paddingTop: '0.85rem', borderTop: '1px solid rgba(201, 162, 75, 0.2)' }}>
                    <span className="font-display" style={{ fontSize: '1.75rem', color: '#ffd98a', fontWeight: 700 }}>
                      ₹ {bal.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="glass-card"
              style={{
                padding: '2rem',
                border: '1px solid var(--gold)',
                background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.8) 0%, rgba(12, 35, 24, 0.9) 100%)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <div>
                <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>
                  গচ্ছিত মূল তহবিল
                </span>
                <h4 className="font-bn" style={{ fontSize: '1.4rem', color: 'var(--cream)', margin: '0 0 0.25rem' }}>
                  গণনা করা ও মুদ্রিত মোট মজুত অর্থ
                </h4>
                <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', margin: 0 }}>
                  হস্তে মজুত (₹ ৮,০৭৭) + ব্যাংকে মজুত (₹ ১৫,৬৫২.৯৮) + ব্যাংক চার্জ (₹ ৬.২০)
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="font-display" style={{ fontSize: '2.4rem', color: '#74d99f', fontWeight: 700, display: 'block' }}>
                  ₹ {BUDGET_METADATA.closingBalanceINR.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </span>
                <span className="font-bn" style={{ fontSize: '1rem', color: '#ffd98a' }}>
                  {BUDGET_METADATA.formattedClosingBalanceBn}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 10. Tab 4: Final Reconciliation & Summary Sheet (৪. চূড়ান্ত মিলকরণ) */}
        {activeTab === 'reconciliation' && (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 className="font-bn" style={{ fontSize: '1.65rem', color: 'var(--cream)', margin: '0 0 0.25rem' }}>
                ৪. চূড়ান্ত মিলকরণ ও নিরীক্ষা সারসংক্ষেপ (Final Reconciliation Sheet)
              </h3>
              <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', margin: 0 }}>
                অফিসিয়াল অডিট রিপোর্টের প্রতিটি ধাপের সম্পূর্ণ তুলনামূলক বিশ্লেষণ:
              </p>
            </div>

            <div
              style={{
                overflowX: 'auto',
                background: 'rgba(7, 9, 21, 0.8)',
                border: '1px solid rgba(201, 162, 75, 0.35)',
                borderRadius: '12px',
                marginBottom: '2rem',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: 'rgba(201, 162, 75, 0.15)', borderBottom: '1px solid rgba(201, 162, 75, 0.3)' }}>
                    <th className="font-bn" style={{ padding: '1.15rem', color: '#ffd98a' }}>হিসাবের বিবরণ (Financial Head)</th>
                    <th className="font-bn" style={{ padding: '1.15rem', color: '#ffd98a', textAlign: 'right' }}>টাকা (₹)</th>
                    <th className="font-bn" style={{ padding: '1.15rem', color: '#ffd98a', textAlign: 'center', width: '160px' }}>নিরীক্ষা ফল</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(201, 162, 75, 0.12)' }}>
                    <td style={{ padding: '1.15rem' }}>
                      <span className="font-bn" style={{ fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 600 }}>
                        মোট আয় (Printed Total Income)
                      </span>
                      <span className="font-ui" style={{ fontSize: '0.8rem', color: 'var(--paper-muted)', display: 'block' }}>
                        Section 1: 12 Income Line Items
                      </span>
                    </td>
                    <td className="font-display" style={{ padding: '1.15rem', textAlign: 'right', fontSize: '1.35rem', color: '#ffd98a', fontWeight: 600 }}>
                      ₹ {RECONCILIATION_DATA.totalIncome.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '1.15rem', textAlign: 'center' }}>
                      <span className="badge-gold" style={{ fontSize: '0.8rem' }}>✓ আয় পক্ষ মিলেছে</span>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid rgba(201, 162, 75, 0.12)' }}>
                    <td style={{ padding: '1.15rem' }}>
                      <span className="font-bn" style={{ fontSize: '1.1rem', color: '#ff9d5c', fontWeight: 600 }}>
                        (−) পূজা বাবদ মোট খরচ (Printed Total Expenses)
                      </span>
                      <span className="font-ui" style={{ fontSize: '0.8rem', color: 'var(--paper-muted)', display: 'block' }}>
                        Section 2: 19 Expense Line Items (Reconciled with Line 16)
                      </span>
                    </td>
                    <td className="font-display" style={{ padding: '1.15rem', textAlign: 'right', fontSize: '1.35rem', color: '#ff9d5c', fontWeight: 600 }}>
                      ₹ {RECONCILIATION_DATA.totalExpense.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '1.15rem', textAlign: 'center' }}>
                      <span className="badge-sindoor" style={{ fontSize: '0.8rem' }}>✓ সম্পূর্ণ সমন্বিত</span>
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '2px solid rgba(201, 162, 75, 0.3)', background: 'rgba(116, 217, 159, 0.08)' }}>
                    <td style={{ padding: '1.15rem' }}>
                      <span className="font-bn" style={{ fontSize: '1.15rem', color: '#74d99f', fontWeight: 700 }}>
                        = মোট মজুত অর্থ (Net Closing Balance Surplus)
                      </span>
                      <span className="font-ui" style={{ fontSize: '0.8rem', color: 'var(--paper-muted)', display: 'block' }}>
                        Section 3: Cash in Hand + Bank Balance + Bank Charges
                      </span>
                    </td>
                    <td className="font-display" style={{ padding: '1.15rem', textAlign: 'right', fontSize: '1.45rem', color: '#74d99f', fontWeight: 700 }}>
                      ₹ {RECONCILIATION_DATA.closingBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '1.15rem', textAlign: 'center' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#74d99f', fontWeight: 700, fontSize: '0.88rem' }}>
                        <CheckCircle size={15} /> ✓ মিলেছে
                      </span>
                    </td>
                  </tr>

                  <tr style={{ background: 'rgba(201, 162, 75, 0.18)' }}>
                    <td style={{ padding: '1.25rem 1.15rem' }}>
                      <span className="font-bn" style={{ fontSize: '1.2rem', color: 'var(--cream)', fontWeight: 700 }}>
                        ব্যয় পক্ষের মোট = খরচ + মজুত (₹ ৫,৩২,৯৫১.০০ + ₹ ২৩,৭৩৬.১৮)
                      </span>
                      <span className="font-ui" style={{ fontSize: '0.82rem', color: 'var(--gold-light)', display: 'block' }}>
                        Balance Match: Total Expenses + Closing Surplus = Total Income
                      </span>
                    </td>
                    <td className="font-display" style={{ padding: '1.25rem 1.15rem', textAlign: 'right', fontSize: '1.65rem', color: '#ffd98a', fontWeight: 700 }}>
                      ₹ {RECONCILIATION_DATA.balancedSum.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '1.25rem 1.15rem', textAlign: 'center' }}>
                      <span className="badge-gold" style={{ fontSize: '0.85rem' }}>
                        <CheckCircle size={14} /> ✓ নিখুঁত সমতা
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Audit Summary 4-Point Checklist (৫. সারসংক্ষেপ) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                gap: '1.25rem',
              }}
            >
              {[
                { title: 'আয় পক্ষ — সব আইটেমের যোগফল', desc: '১২টি খাতের যোগফল ৫,৫৬,৬৮৭.১৮ টাকার সাথে সম্পূর্ণ মিলেছে।', status: '✓ মিলেছে' },
                { title: 'মজুত অংশের যোগফল', desc: 'হাতে ও ব্যাংকে থাকা ৩টি খাতের যোগফল ২৩,৭৩৬.১৮ টাকার সাথে সম্পূর্ণ মিলেছে।', status: '✓ মিলেছে' },
                { title: 'মোটগুলোর মধ্যে আয় = খরচ + মজুত', desc: '৫,৫৬,৬৮৭.১৮ = ৫,৩২,৯৫১.০০ + ২৩,৭৩৬.১৮ নিখুঁত সমতা অর্জিত।', status: '✓ মিলেছে' },
                { title: 'ব্যয় আইটেম সমন্বয় ও সমাধান', desc: 'মায়ের বিদায় যাত্রা (১,৪১,৪২৫/-) সংশোধনে ১৯টি খাতের সমষ্টি মুদ্রিত মোট খরচে সম্পূর্ণ মিলেছে।', status: '✓ সমন্বিত ও পরীক্ষিত' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.35rem',
                    background: 'rgba(7, 9, 21, 0.75)',
                    border: '1px solid rgba(201, 162, 75, 0.3)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="font-ui" style={{ fontSize: '0.8rem', color: 'var(--paper-muted)', fontWeight: 600 }}>
                      অডিট পয়েন্ট #{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#74d99f', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 600 }}>
                      <CheckCircle size={13} /> {item.status}
                    </span>
                  </div>
                  <h5 className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--cream)', margin: '0 0 0.35rem', fontWeight: 600 }}>
                    {item.title}
                  </h5>
                  <p className="font-bn" style={{ fontSize: '0.85rem', color: 'var(--paper-muted)', margin: 0, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 11. Chanda Notice Box — Maintained from original site */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            maxWidth: '850px',
            margin: '3.5rem auto 0',
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
            <Lock size={28} />
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
              যোগাযোগ ও অনুসন্ধান: দুয়েরপল্লী পূজা মণ্ডপ সচিবালয়
            </span>
          </div>
        </div>

        {/* 12. Audit Certification Footer */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            background: 'rgba(7, 9, 21, 0.85)',
            border: '1px solid rgba(201, 162, 75, 0.3)',
            borderRadius: '14px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '1 1 320px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(201, 162, 75, 0.15)',
                border: '1px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffd98a',
                flexShrink: 0,
              }}
            >
              <Building2 size={22} />
            </div>
            <div>
              <h4 className="font-bn" style={{ fontSize: '1.15rem', color: 'var(--cream)', margin: 0, fontWeight: 600 }}>
                {BUDGET_METADATA.auditedByBn}
              </h4>
              <p className="font-bn" style={{ fontSize: '0.88rem', color: 'var(--paper-muted)', margin: '0.2rem 0 0' }}>
                হিসাব পরীক্ষক: শ্রী অম্বর ঘোষ ও কাঞ্চন মিত্র | অনুমোদিত নিরীক্ষক পরিষদ
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              background: 'rgba(201, 162, 75, 0.1)',
              border: '1px solid rgba(201, 162, 75, 0.35)',
            }}
          >
            <CheckCircle size={14} color="#74d99f" />
            <span className="font-ui" style={{ fontSize: '0.85rem', color: '#74d99f', fontWeight: 500 }}>
              Official Balance Sheet Approved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
