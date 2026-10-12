import React, { useState, useEffect } from 'react';
import { Flame, Shield, Award, Heart, Leaf, Users, CheckCircle, Sparkles, ScrollText, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AlpanaBadge } from './AlpanaBadge';

export const Page1Introduction: React.FC = () => {
  const [diyasLit, setDiyasLit] = useState<number>(1956);
  const [hasLitDiya, setHasLitDiya] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('duyerpally_diyas_lit');
      const alreadyLit = localStorage.getItem('duyerpally_user_lit') === 'true';
      if (stored) {
        setDiyasLit(parseInt(stored, 10));
      }
      setHasLitDiya(alreadyLit);
    } catch {
      // Fallback
    }
  }, []);

  const handleLightDiya = () => {
    if (hasLitDiya) return;

    const newCount = diyasLit + 1;
    setDiyasLit(newCount);
    setHasLitDiya(true);

    try {
      localStorage.setItem('duyerpally_diyas_lit', String(newCount));
      localStorage.setItem('duyerpally_user_lit', 'true');
    } catch {
      // Ignore
    }

    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.75 },
      colors: ['#ffd98a', '#c9a24b', '#ff9d5c', '#b3261e'],
    });
  };

  return (
    <section id="page-intro" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <AlpanaBadge size={32} petals={8} rings={2} color="#ffd98a" strokeWidth={1.5} />
            <span className="section-tag">১ম অধ্যায় · পরিচিতি ও ৭০ বছরের ইতিহাস</span>
            <AlpanaBadge size={8} petals={8} rings={2} color="#ffd98a" strokeWidth={1.5} />
          </div>
          <h2 className="section-title font-bn">সপ্ততিবর্ষের মহিমান্বিত ঐতিহ্য (১৯৫৬ - ২০২৬)</h2>
          <p className="section-desc">
            বরানগর অঞ্চলের দুয়েরপল্লী প্রাঙ্গণ ১৯৫৬ সালে সূচিত হয়েছিল আমাদের পুজো। আজ পূর্ণ হলো গৌরবময় ৭০ বছর।
          </p>
        </div>

        {/* 2-Column Story Grid: 70-Year Legacy & Theme */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {/* Legacy Card */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(201, 162, 75, 0.15)', color: '#ffd98a' }}>
                  <Award size={26} />
                </span>
                <div>
                  <h3 className="font-bn" style={{ fontSize: '1.6rem', color: 'var(--cream)', fontWeight: 600 }}>
                    আমাদের ইতিহাস (১৯৫৬ - ২০২৬)
                  </h3>
                  <span className="font-ui" style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                    70 Years of Duyerpally Sarbojanin Durgotsav
                  </span>
                </div>
              </div>

              <p className="font-bn" style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--paper-muted)', marginBottom: '1rem' }}>
                ১৯৫৬ সালে বরানগরের দুয়েরপল্লী সংলগ্ন অঞ্চলে স্থানীয় নিষ্ঠাবান প্রবীণদের হাত ধরে
                দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটির পথচলা শুরু হয়।
              </p>

              <p className="font-bn" style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--paper-muted)' }}>
                গত ৭ দশক ধরে এলাকার প্রতিটি পরিবারের সুখ-দুঃখের সাথী আমাদের এই পুজো। এখানে কোনো কৃত্রিম অহংকার নেই,
                আছে আন্তরিক মিলন ও মায়ের চরণতলে সর্বজনীন সম্প্রীতি।
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--ink-border)', display: 'flex', gap: '1.5rem' }}>
              <div>
                <span className="font-display" style={{ fontSize: '2.2rem', color: 'var(--gold-light)', fontWeight: 600 }}>70</span>
                <span className="font-bn" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--paper-muted)' }}>বর্ষপূর্তি মহোৎসব</span>
              </div>
              <div>
                <span className="font-display" style={{ fontSize: '2.2rem', color: 'var(--gold-light)', fontWeight: 600 }}>1956</span>
                <span className="font-bn" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--paper-muted)' }}>প্রতিষ্ঠা কাল</span>
              </div>
              <div>
                <span className="font-display" style={{ fontSize: '2.2rem', color: 'var(--gold-light)', fontWeight: 600 }}>100%</span>
                <span className="font-bn" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--paper-muted)' }}>ঐতিহ্য ও সম্প্রীতি</span>
              </div>
            </div>
          </div>

          {/* Theme Card */}
          <div className="glass-card-sindoor" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(179, 38, 30, 0.25)', color: '#ff9d94' }}>
                  <Sparkles size={26} />
                </span>
                <div>
                  <h3 className="font-bn" style={{ fontSize: '1.6rem', color: 'var(--cream)', fontWeight: 600 }}>
                    সপ্ততিবর্ষের ভাবনা ও ঐতিহ্য
                  </h3>
                  <span className="font-ui" style={{ fontSize: '0.85rem', color: '#ffb4a8' }}>
                    70th Platinum Jubilee Celebrations
                  </span>
                </div>
              </div>

              <blockquote className="font-display" style={{ fontSize: '1.22rem', fontStyle: 'italic', color: '#ffd98a', marginBottom: '1rem', borderLeft: '3px solid #ffd98a', paddingLeft: '1rem' }}>
                “সাত দশকের আলো, মাটির গন্ধ আর আন্তরিক ভালোবাসায় দুয়েরপল্লী চিরন্তন।”
              </blockquote>

              <p className="font-bn" style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--paper-muted)' }}>
                ৭০তম বর্ষে আমাদের মণ্ডপ সাজানো হয়েছে পরিবেশবান্ধব শিল্পরীতি ও প্রাচীন বাংলার গৃহকোণের নকশা মিলিয়ে। প্রতিমায়
                রয়েছে সনাতনী সাবেক ডাকের সাজ। দশমীতে আলোকময় ভাসান শোভাযাত্রা আমাদের অন্যতম প্রধান ঐতিহ্য।
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(179, 38, 30, 0.3)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="badge-sindoor">ঐতিহ্যবাহী প্রাঙ্গণ</span>
              <span className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--cream)' }}>
                দুয়েরপল্লী সর্বজনীন উৎসব প্রাঙ্গণ
              </span>
            </div>
          </div>
        </div>

        {/* Official 70th Year Souvenir Message from General Secretary (Transcribed directly from Souvenir Document) */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            maxWidth: '900px',
            margin: '0 auto 4.5rem',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.85) 0%, rgba(35, 12, 16, 0.85) 100%)',
            border: '1px solid var(--gold)',
            boxShadow: 'var(--shadow-gold)',
          }}
        >
          {/* Header Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(201, 162, 75, 0.25)', paddingBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(201, 162, 75, 0.2)', color: '#ffd98a' }}>
                <ScrollText size={24} />
              </span>
              <div>
                <span className="badge-gold" style={{ fontSize: '0.75rem', marginBottom: '0.2rem' }}>
                  ৭০তম বর্ষের শারদীয় স্মরণিকা থেকে
                </span>
                <h3 className="font-bn" style={{ fontSize: '1.75rem', color: 'var(--cream)', fontWeight: 700 }}>
                  সাধারণ সম্পাদকের শারদীয় বার্তা
                </h3>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--gold-light)', display: 'block' }}>
                ১৪৩৩ বঙ্গাব্দ · ২০২৬ সাল
              </span>
              <span className="font-ui" style={{ fontSize: '0.8rem', color: 'var(--paper-muted)' }}>
                70th Year Souvenir Edition
              </span>
            </div>
          </div>

          {/* Shloka Heading */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <p className="font-bn" style={{ fontSize: '1.15rem', color: '#ffd98a', fontStyle: 'italic', fontWeight: 600 }}>
              “যা দেবী সর্বভূতেষু শক্তিরূপেণ সংস্থিতা।<br />
              নমস্তস্যৈ নমস্তস্যৈ নমস্তস্যৈ নমো নমঃ।।”
            </p>
          </div>

          {/* Official Letter Body Text */}
          <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(255, 217, 138, 0.4)' }}>
            <Quote size={28} color="#ffd98a" style={{ opacity: 0.35, marginBottom: '0.5rem' }} />

            <p className="font-bn" style={{ fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.75rem' }}>
              সুধী,
            </p>

            <p className="font-bn" style={{ fontSize: '1.02rem', lineHeight: 1.85, color: 'var(--paper)', marginBottom: '1rem' }}>
              মহালয়ার পুণ্যলগ্নে মা দুর্গার আগমনী বার্তা আর বাতাসে শিউলি ফুলের গন্ধ জানান দিয়ে যাচ্ছে বাঙালির শ্রেষ্ঠ উৎসব শারদোৎসব আগত। মা আসছেন। উলুধ্বনি, শঙ্খধ্বনি, ঢাকবাদ্যি আর সানাইয়ের সুরে সুর আগমনীর সুর ছড়িয়ে পড়েছে আকাশে বাতাসে।
            </p>

            <p className="font-bn" style={{ fontSize: '1.02rem', lineHeight: 1.85, color: 'var(--paper)', marginBottom: '1rem' }}>
              ৭০ বছরে পদার্পণ করলো আমাদের এই পুজো। যত বাড়ে পুজোর বয়স, ততই মনের মণিকোঠায় জমতে থাকে স্মৃতি। চোখে ভেসে ওঠে এই পুজোকে ঘিরে ঘটে যাওয়া কত কত মানুষের নিষ্ঠা, একাগ্রতা, হাসি-কান্না, মিলন-বিরহ।
            </p>

            <p className="font-bn" style={{ fontSize: '1.02rem', lineHeight: 1.85, color: 'var(--paper)', marginBottom: '1rem' }}>
              বহু ঘাত-প্রতিঘাত, চড়াই-উতরাইয়ের মধ্যে পার হয়ে এসেছি এতগুলো বছর। পেয়েছি পল্লীবাসীর অকুণ্ঠ সহযোগিতা, উৎসাহ আর অনুপ্রেরণা। তাই কোনো প্রতিকূলতাও পারেনি আমাদের চলার গতিকে ব্যহত করতে। আসুন, সকল পল্লীবাসী এবং যুব সমাজকে, যুব ভাইদের আহ্বান জানাই — সকলে মিলে একসাথে বাঙালির শ্রেষ্ঠ উৎসবকে মিলন উৎসবে পরিণত করি। শারদীয়ার পুণ্যলগ্নে দেবী দশভুজার কাছে এই প্রার্থনা করি। সবাই ভালো থাকুন, সুস্থ থাকুন, সাবধানে থাকুন।
            </p>

            {/* Poetic Benediction */}
            <div
              style={{
                margin: '1.5rem 0',
                padding: '1.25rem',
                borderRadius: '8px',
                background: 'rgba(7, 9, 21, 0.6)',
                border: '1px solid rgba(201, 162, 75, 0.2)',
                textAlign: 'center',
              }}
            >
              <p className="font-bn" style={{ fontSize: '1.1rem', color: '#ffd98a', lineHeight: 1.7, fontWeight: 500 }}>
                সুন্দরের অন্তর থেকে উৎসারিত আনন্দে<br />
                ভরে যাক শারদ-উৎসবের দিনগুলি<br />
                পূর্ণ হোক সুন্দর হোক সদিচ্ছা অফুরন্ত আনন্দে।।
              </p>
            </div>

            {/* Signature Block */}
            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <span className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)', display: 'block' }}>
                নমস্কারান্তে —
              </span>
              <h4 className="font-bn" style={{ fontSize: '1.35rem', color: 'var(--gold-light)', fontWeight: 700, margin: '0.2rem 0' }}>
                শ্রী হিমাদ্রী শেখর নন্দী (বুবাই)
              </h4>
              <span className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--cream)' }}>
                সাধারণ সম্পাদক · দুয়েরপল্লী সার্ব্বজনীন দুর্গোৎসব
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Duyerpally Pride */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="font-bn" style={{ textAlign: 'center', fontSize: '1.9rem', color: 'var(--cream)', marginBottom: '2rem' }}>
            আমাদের ৪টি মূল আদর্শ ও সংকল্প
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <Leaf size={28} color="#ffd98a" style={{ marginBottom: '0.85rem' }} />
              <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
                ১. প্লাস্টিকমুক্ত পরিবেশবান্ধব মণ্ডপ
              </h4>
              <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>
                মাটি, বাঁশ ও পাটের আবরণে নির্মিত পরিবেশবান্ধব মণ্ডপ। পরিচ্ছন্নতা বজায় রাখা আমাদের প্রধান ব্রত।
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <Shield size={28} color="#ff9d94" style={{ marginBottom: '0.85rem' }} />
              <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
                ২. সনাতনী সাবেক রূপ
              </h4>
              <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>
                ১৯৫৬ সালের প্রথম পূজার ঐতিহ্য বজায় রেখে আজও মা দুর্গার সনাতনী শান্ত একচালা ডাকের সাজের রূপদান।
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <Users size={28} color="#ffd98a" style={{ marginBottom: '0.85rem' }} />
              <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
                ৩. সর্বজনীন অন্নসেবা
              </h4>
              <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>
                সপ্তমী থেকে নবমী সকল পল্লীবাসী ও ভক্তদের জন্য বিনামূল্যে গোবিন্দভোগ খিচুড়ি ও পায়েস ভোগের অবারিত দ্বার।
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <Heart size={28} color="#ff9d94" style={{ marginBottom: '0.85rem' }} />
              <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
                ৪. সমাজকল্যাণ ব্রত
              </h4>
              <p className="font-bn" style={{ fontSize: '0.92rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>
                রক্তদান শিবির, দুঃস্থ শিশুদের বস্ত্রদান এবং এলাকার প্রবীণদের সার্বক্ষণিক স্বাস্থ্য সহায়তা।
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Ritual Experience: Light a Diya */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.7) 0%, rgba(35, 12, 16, 0.75) 100%)',
            border: '1px solid var(--ink-border-bright)',
            borderRadius: '16px',
            padding: '2.5rem',
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-gold)',
          }}
        >
          <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'rgba(201, 162, 75, 0.2)', marginBottom: '1rem' }}>
            <Flame size={38} className="flicker" color="#ffd98a" />
          </div>

          <h3 className="font-bn" style={{ fontSize: '1.85rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
            দুয়েরপল্লী মণ্ডপে একটি ভার্চুয়াল প্রদীপ প্রজ্জ্বলন করুন
          </h3>
          <p className="font-bn" style={{ fontSize: '1.02rem', color: 'var(--paper-muted)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            ৭০তম বর্ষপূর্তির পুণ্যলগ্নে মায়ের চরণে শান্তি ও সকলের মঙ্গলের উদ্দেশ্যে একটি দীপশিখা প্রজ্বলিত করুন।
          </p>

          <button
            type="button"
            className="btn btn-gold"
            onClick={handleLightDiya}
            disabled={hasLitDiya}
            style={{
              fontSize: '1.1rem',
              padding: '0.85rem 2.25rem',
              cursor: hasLitDiya ? 'default' : 'pointer',
              opacity: hasLitDiya ? 0.9 : 1,
            }}
          >
            {hasLitDiya ? (
              <>
                <CheckCircle size={20} color="#04050b" />
                <span className="font-bn">আপনার প্রদীপ প্রজ্বলিত হয়েছে!</span>
              </>
            ) : (
              <>
                <Flame size={20} color="#04050b" />
                <span className="font-bn">মঙ্গল প্রদীপ প্রজ্জ্বলন করুন</span>
              </>
            )}
          </button>

          <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span className="font-display" style={{ fontSize: '1.5rem', color: 'var(--gold-light)', fontWeight: 600 }}>
              {diyasLit.toLocaleString('bn-BD')}
            </span>
            <span className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)' }}>
              জন ভক্ত এই বছর প্রদীপ প্রজ্জ্বলন করেছেন
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
