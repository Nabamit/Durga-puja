import React, { useState, useEffect } from 'react';
import { Clock, Share2, Sparkles, Check } from 'lucide-react';
import { PUJA_SCHEDULE, DaySchedule } from '../data/pujaSchedule';
import { AlpanaBadge } from './AlpanaBadge';

export const Page2Schedule: React.FC = () => {
  const [selectedDayId, setSelectedDayId] = useState<string>('ashtami');
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  // Countdown to Durga Puja 2026 (Maha Saptami - Oct 17, 2026)
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 6,
    hours: 14,
    minutes: 22,
    seconds: 45,
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-17T06:00:00+05:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const activeDay: DaySchedule = PUJA_SCHEDULE.find((d) => d.id === selectedDayId) || PUJA_SCHEDULE[0];

  const handleShareSchedule = async () => {
    const textToShare = `দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটি ২০২৬ (৭০তম বর্ষপূর্তি · ১৯৫৬ - ২০২৬)\n${activeDay.tithiBn} (${activeDay.date})\n${activeDay.taglineBn}\n\nপ্রধান সময়সূচি:\n${activeDay.rituals
      .map((r) => `• ${r.time} - ${r.ritualBn}`)
      .join('\n')}\n\nস্থান: দুয়েরপল্লী প্রাঙ্গণ, কাশীপুর, কলকাতা - ৭০০০৩৬।`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${activeDay.tithiBn} সময়সূচি`,
          text: textToShare,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(textToShare);
      setCopiedStatus(true);
      setTimeout(() => setCopiedStatus(false), 2500);
    } catch {
      // Ignored
    }
  };

  return (
    <section id="page-schedule" style={{ padding: '6rem 0', background: 'var(--ink-900)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <AlpanaBadge size={32} petals={10} rings={2} color="#ffd98a" strokeWidth={1.5} />
            <span className="section-tag">২য় অধ্যায় · বিশুদ্ধ সিদ্ধান্ত পঞ্জিকা</span>
            <AlpanaBadge size={32} petals={10} rings={2} color="#ffd98a" strokeWidth={1.5} />
          </div>
          <h2 className="section-title font-bn">পূজোর নির্ঘণ্ট ও সময়সূচি</h2>
          <p className="section-desc">
            মহালয়া থেকে বিজয়া দশমী — প্রতিটি পূণ্য তিথি, অঞ্জলি, কুমারী পূজা, সন্ধিপূজা এবং ভোগ বিতরণের পুঙ্খানুপুঙ্খ সময়সারণী।
          </p>
        </div>

        {/* Live Countdown to Mahasaptami */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(179, 38, 30, 0.22) 0%, rgba(17, 21, 46, 0.6) 100%)',
            border: '1px solid rgba(201, 162, 75, 0.3)',
            borderRadius: '12px',
            padding: '1.25rem 2rem',
            marginBottom: '3.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{ padding: '0.6rem', borderRadius: '50%', background: 'rgba(201, 162, 75, 0.15)', color: '#ffd98a' }}>
              <Clock size={22} className="flicker" />
            </span>
            <div>
              <span className="font-bn" style={{ fontSize: '1.2rem', color: 'var(--cream)', fontWeight: 600 }}>
                মহাসপ্তমীর পুষ্পাঞ্জলির দিনগণনা
              </span>
              <span className="font-ui" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--paper-muted)' }}>
                Countdown to Sacred Maha Saptami Pushpanjali
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {[
              { val: timeLeft.days, labelBn: 'দিন', labelEn: 'Days' },
              { val: timeLeft.hours, labelBn: 'ঘণ্টা', labelEn: 'Hours' },
              { val: timeLeft.minutes, labelBn: 'মিনিট', labelEn: 'Mins' },
              { val: timeLeft.seconds, labelBn: 'সেকেন্ড', labelEn: 'Secs' },
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', minWidth: '55px' }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.85rem',
                    color: 'var(--gold-light)',
                    fontWeight: 700,
                    display: 'block',
                    lineHeight: 1,
                  }}
                >
                  {String(item.val).padStart(2, '0')}
                </span>
                <span className="font-bn" style={{ fontSize: '0.78rem', color: 'var(--paper-muted)' }}>
                  {item.labelBn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Day Selector Tabs (Mahalaya to Dashami) */}
        <div
          role="tablist"
          aria-label="Days of Durga Puja"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {PUJA_SCHEDULE.map((day) => {
            const isSelected = day.id === selectedDayId;
            return (
              <button
                key={day.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedDayId(day.id)}
                style={{
                  background: isSelected
                    ? 'linear-gradient(135deg, var(--sindoor) 0%, var(--sindoor-dark) 100%)'
                    : 'rgba(17, 21, 46, 0.55)',
                  border: `1px solid ${isSelected ? 'var(--gold-light)' : 'var(--ink-border)'}`,
                  borderRadius: '10px',
                  padding: '1rem 0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'var(--transition-smooth)',
                  boxShadow: isSelected ? '0 6px 20px var(--sindoor-glow)' : 'none',
                }}
              >
                <AlpanaBadge
                  size={42}
                  petals={day.petals}
                  rings={1}
                  color={isSelected ? '#ffd98a' : 'rgba(239, 227, 204, 0.45)'}
                  strokeWidth={2}
                />
                <div>
                  <span
                    className="font-bn"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isSelected ? '#fff' : 'var(--paper)',
                      display: 'block',
                    }}
                  >
                    {day.tithiBn.split(' · ')[0]}
                  </span>
                  <span
                    className="font-ui"
                    style={{
                      fontSize: '0.75rem',
                      color: isSelected ? '#ffd98a' : 'var(--paper-muted)',
                      display: 'block',
                      marginTop: '0.15rem',
                    }}
                  >
                    {day.date.split(',')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Day Detail Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            border: '1px solid var(--ink-border-bright)',
            position: 'relative',
          }}
        >
          {/* Day Header Banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--ink-border)',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span className="badge-gold">{activeDay.date}</span>
                <span className="font-ui" style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                  {activeDay.tithiEn}
                </span>
              </div>
              <h3 className="font-bn" style={{ fontSize: '2.2rem', color: 'var(--cream)', fontWeight: 700 }}>
                {activeDay.tithiBn}
              </h3>
              <p className="font-display" style={{ fontSize: '1.35rem', fontStyle: 'italic', color: '#ffd98a', marginTop: '0.35rem' }}>
                “{activeDay.taglineBn}”
              </p>
            </div>

            <button
              type="button"
              className="btn btn-ghost"
              onClick={handleShareSchedule}
              style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}
            >
              {copiedStatus ? (
                <>
                  <Check size={16} color="#ffd98a" />
                  <span className="font-bn">কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Share2 size={16} />
                  <span className="font-bn">সময়সূচি শেয়ার করুন</span>
                </>
              )}
            </button>
          </div>

          {/* Spiritual Significance Context */}
          <div
            style={{
              background: 'rgba(7, 9, 21, 0.45)',
              padding: '1.25rem 1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid var(--gold)',
              marginBottom: '2.5rem',
            }}
          >
            <h4 className="font-bn" style={{ fontSize: '1.15rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
              তিথির মাহাত্ম্য ও তাৎপর্য
            </h4>
            <p className="font-bn" style={{ fontSize: '0.98rem', color: 'var(--paper-muted)', lineHeight: 1.7 }}>
              {activeDay.significanceBn}
            </p>
          </div>

          {/* Rituals Timeline Grid */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 className="font-bn" style={{ fontSize: '1.45rem', color: 'var(--cream)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} color="#ffd98a" />
              শাস্ত্রীয় পূজার সময়সারণী
            </h4>

            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {activeDay.rituals.map((ritual, idx) => (
                <div
                  key={idx}
                  className="ritual-item-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(120px, 140px) 1fr',
                    gap: '1.25rem',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    background: ritual.isKeyHighlight
                      ? 'linear-gradient(135deg, rgba(179, 38, 30, 0.18) 0%, rgba(17, 21, 46, 0.4) 100%)'
                      : 'rgba(11, 14, 31, 0.4)',
                    border: `1px solid ${ritual.isKeyHighlight ? 'rgba(255, 217, 138, 0.35)' : 'var(--ink-border)'}`,
                  }}
                >
                  {/* Clock Time */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span
                      className="font-ui"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: ritual.isKeyHighlight ? '#ffd98a' : 'var(--paper)',
                      }}
                    >
                      {ritual.time}
                    </span>
                    {ritual.isKeyHighlight && (
                      <span className="badge-sindoor" style={{ alignSelf: 'flex-start', marginTop: '0.35rem', fontSize: '0.72rem' }}>
                        বিশেষ মুহূর্ত
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div>
                    <h5 className="font-bn" style={{ fontSize: '1.2rem', color: 'var(--cream)', fontWeight: 600 }}>
                      {ritual.ritualBn}
                    </h5>
                    <span className="font-ui" style={{ fontSize: '0.82rem', color: 'var(--gold-light)', display: 'block', marginBottom: '0.35rem' }}>
                      {ritual.ritualEn}
                    </span>
                    <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>
                      {ritual.descriptionBn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Attraction Box */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(201, 162, 75, 0.12) 0%, rgba(17, 21, 46, 0.6) 100%)',
              border: '1px solid rgba(201, 162, 75, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Sparkles size={26} color="#ffd98a" style={{ flexShrink: 0 }} />
            <div>
              <span className="font-bn" style={{ fontSize: '0.85rem', color: '#ffd98a', fontWeight: 600, display: 'block' }}>
                আজকের বিশেষ আকর্ষণ
              </span>
              <p className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--cream)', fontWeight: 500 }}>
                {activeDay.specialAttractionBn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
