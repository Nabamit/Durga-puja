import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { COMMITTEE_METADATA } from '../data/committeeMembers';
import { AlpanaBadge } from './AlpanaBadge';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onReplayOpening?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayOpening }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#04050a',
        borderTop: '1px solid var(--ink-border)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Top Decorative Alpana Banner */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', color: '#ffd98a' }}>
            <AlpanaBadge size={44} petals={12} rings={2} color="#ffd98a" strokeWidth={1.2} />
            <h3 className="font-bn" style={{ fontSize: '2.1rem', color: 'var(--cream)', fontWeight: 700 }}>
              “আসছে বছর আবার হবে”
            </h3>
            <AlpanaBadge size={44} petals={12} rings={2} color="#ffd98a" strokeWidth={1.2} />
          </div>

          <p className="font-bn" style={{ fontSize: '1.15rem', color: '#ffd98a', marginTop: '0.5rem', fontStyle: 'italic' }}>
            সকলকে জানাই ৭০তম বর্ষের শুভ শারদীয়া ও শুভ বিজয়ার আন্তরিক প্রীতি, শুভেচ্ছা ও ভালোবাসা।
          </p>

          {onReplayOpening && (
            <div style={{ marginTop: '1.25rem' }}>
              <button
                type="button"
                onClick={onReplayOpening}
                className="btn btn-ghost"
                style={{ fontSize: '0.88rem', padding: '0.5rem 1.25rem', borderColor: 'rgba(201, 162, 75, 0.4)' }}
              >
                <Sparkles size={16} color="#ffd98a" />
                <span className="font-bn">সূচনা পর্ব পুনরায় দেখুন (Replay Opening Ceremony)</span>
              </button>
            </div>
          )}
        </div>

        {/* 3-Column Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(201, 162, 75, 0.15)',
          }}
        >
          {/* Column 1: Committee Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'var(--sindoor)',
                  border: '1px solid #ffd98a',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <span className="font-bn" style={{ color: '#ffd98a', fontWeight: 700, fontSize: '1.1rem' }}>দ</span>
              </div>
              <h4 className="font-bn" style={{ fontSize: '1.35rem', color: 'var(--cream)', fontWeight: 700 }}>
                {COMMITTEE_METADATA.committeeNameBn}
              </h4>
            </div>

            <p className="font-display" style={{ fontSize: '1.05rem', color: 'var(--gold-light)', fontStyle: 'italic', marginBottom: '1rem' }}>
              {COMMITTEE_METADATA.committeeNameEn}
            </p>

            <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', lineHeight: 1.7 }}>
              উত্তর কলকাতার অন্যতম ঐতিহ্যবাহী সার্বজনীন দুর্গোৎসব। ১৯৫৬ সালে প্রতিষ্ঠিত এবং ২০২৬-এ গৌরবময় ৭০তম বর্ষে পাড়ার প্রতিটি মানুষের ভালোবাসা ও সহযোগিতায় আমরা গৌরবান্বিত।
            </p>

            <p className="font-ui" style={{ fontSize: '0.82rem', color: 'rgba(239, 227, 204, 0.45)', marginTop: '1rem' }}>
              গভর্নমেন্ট রেজিস্ট্রেশন নং: {COMMITTEE_METADATA.registeredRegNo}
            </p>
          </div>

          {/* Column 2: Venue & Location */}
          <div>
            <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '1.25rem' }}>
              মণ্ডপ প্রাঙ্গণ ও যোগাযোগ
            </h4>

            <div style={{ display: 'grid', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="#ffd98a" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>
                  {COMMITTEE_METADATA.venueBn}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="#ffd98a" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${COMMITTEE_METADATA.contactPhone.split('/')[0].trim()}`}
                  style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'var(--font-ui)' }}
                >
                  {COMMITTEE_METADATA.contactPhone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="#ffd98a" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${COMMITTEE_METADATA.contactEmail}`}
                  style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'var(--font-ui)' }}
                >
                  {COMMITTEE_METADATA.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '1.25rem' }}>
              দ্রুত লিঙ্কসমূহ (Quick Links)
            </h4>

            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem' }}>
              {[
                { id: 'hero', label: 'মূল পাতায় ফিরে যান' },
                { id: 'page-intro', label: 'আমাদের ইতিহাস ও ৭০তম বর্ষের থিম' },
                { id: 'page-schedule', label: 'পূজার তিথি ও রতন বাবুর ঘাট ভাসান' },
                { id: 'page-committee', label: 'কমিটির কার্যনির্বাহী পরিষদ' },
                { id: 'page-budget', label: 'স্বচ্ছ বাজেট ও আর্থিক হিসাব' },
              ].map((lnk) => (
                <li key={lnk.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(lnk.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--paper-muted)',
                      fontFamily: 'var(--font-bn)',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'var(--transition-smooth)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd98a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--paper-muted)')}
                  >
                    • {lnk.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Credits & UNESCO Citation */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'rgba(239, 227, 204, 0.5)',
          }}
        >
          <p className="font-bn">
            UNESCO ইনট্যানজিবল কালচারাল হেরিটেজ অব হিউম্যানিটি (২০২১) স্বীকৃত “কলকাতার দুর্গাপূজা” উদযাপনে নিবেদিত দুয়েরপল্লী সার্ব্বজনীন দুর্গোৎসব সমিতি।
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-ghost"
            style={{ fontSize: '0.82rem', padding: '0.45rem 1rem' }}
          >
            <span>উপরে উঠুন</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
