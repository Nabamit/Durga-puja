import React, { useState } from 'react';
import { Sparkles, Heart, Share2, Award, CheckCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AlpanaBadge } from './AlpanaBadge';

// 5 Archetypes from Pujo Smriti
interface Archetype {
  id: string;
  titleBn: string;
  titleEn: string;
  taglineBn: string;
  descriptionBn: string;
  foodBn: string;
  badgeBn: string;
  color: string;
}

const ARCHETYPES: Record<string, Archetype> = {
  dhunuchi: {
    id: 'dhunuchi',
    titleBn: 'ধুনুচির নাচিয়ে',
    titleEn: 'The Dhunuchi Dancer',
    taglineBn: 'ঢাকের আওয়াজ বাড়লে আপনার নাচের তাল বাড়ে',
    descriptionBn: 'ধুনোর সুগন্ধ আর ঢাকের কাঠি পড়ার সাথে সাথে আপনার মন নেচে ওঠে। দশমীর বিসর্জনের আগে পর্যন্ত আপনার উদ্যম কখনো স্তিমিত হয় না।',
    foodBn: 'মণ্ডপ সংলগ্ন স্টলের স্পেশাল রোল ও ঘটি গরম',
    badgeBn: 'উৎসবের উল্লাস',
    color: '#ff9d5c',
  },
  hopper: {
    id: 'hopper',
    titleBn: 'ঠাকুর দেখার যাত্রী',
    titleEn: 'The Pandal Hopper',
    taglineBn: 'পায়ের জুতো ক্ষয়ে যায়, কিন্তু মণ্ডপ দেখা থামে না',
    descriptionBn: 'সপ্তমী থেকে নবমী সারা রাত ধরে এক মণ্ডপ থেকে অন্য মণ্ডপ ঘোরার পরিকল্পনা আপনার তৈরি। উত্তর থেকে দক্ষিণ — সব আলো আপনার চেনা।',
    foodBn: 'রাস্তার ধারের ফুচকা, ঘুঘনি ও চাউমিন',
    badgeBn: 'রাত জাগা পরিব্রাজক',
    color: '#ffd98a',
  },
  bhog: {
    id: 'bhog',
    titleBn: 'ভোগ আর আড্ডার প্রাণ',
    titleEn: 'The Bhog & Adda Soul',
    taglineBn: 'পুজো মানেই মানুষ, আর মানুষ মানেই আড্ডা ও পাত পেড়ে খাওয়া',
    descriptionBn: 'শালপাতায় গোবিন্দভোগ খিচুড়ি, লাবড়া আর পাড়ার মণ্ডপের কোণে বন্ধুদের সাথে অবিরাম আড্ডাই আপনার কাছে শ্রেষ্ঠ শারদীয় মুহূর্ত।',
    foodBn: 'মহাষ্টমীর খিচুড়ি প্রসাদ, বেগুনভাজা ও পায়েস',
    badgeBn: 'আন্তরিকতার সুর',
    color: '#74d99f',
  },
  shiuli: {
    id: 'shiuli',
    titleBn: 'শিউলির মন',
    titleEn: 'The Shiuli Soul',
    taglineBn: 'ভোরের মহালয়া আর শিউলি ফুলের স্নিগ্ধ গন্ধ আপনার প্রিয়',
    descriptionBn: 'উৎসবের কোলাহলের চেয়েও ভোরের আগমনী গান, কাশবনের দুলুনি আর সন্ধ্যায় শান্ত আরতি আপনার হৃদয়কে গভীরভাবে স্পর্শ করে।',
    foodBn: 'ভোরের গরম লুচি-আলুর দম আর মাটির ভাঁড়ের চা',
    badgeBn: 'স্নিগ্ধ নস্টালজিয়া',
    color: '#ffb4a8',
  },
  anchor: {
    id: 'anchor',
    titleBn: 'পাড়ার পুজোর ভরসা',
    titleEn: 'The Para Pujo Anchor',
    taglineBn: 'আলো জ্বলবে, চেয়ার গোছাবে — আপনি আছেন বলেই পুজোটা হয়',
    descriptionBn: 'চাঁদা তোলা থেকে শুরু করে ফুল আনা, মাইকের তার ঠিক করা আর শৃঙ্খলা বজায় রাখা — আপনি ছাড়া পাড়ার পুজো একদিনও চলে না।',
    foodBn: 'কমিটি অফিসের পিছনে বেঁচে যাওয়া যে কোনো খাবার',
    badgeBn: 'কমিটির মূল স্তম্ভ',
    color: '#c9a24b',
  },
};

export const FestiveExperienceStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'letter' | 'card'>('quiz');

  // Quiz State
  const [currentQ, setCurrentQ] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<Archetype | null>(null);

  // Letter State
  const [letterName, setLetterName] = useState<string>('');
  const [letterText, setLetterText] = useState<string>('');
  const [isLetterSealed, setIsLetterSealed] = useState<boolean>(false);

  // Card Studio State
  const [cardRecipient, setCardRecipient] = useState<string>('');
  const [cardSender, setCardSender] = useState<string>('');
  const [cardBlessing, setCardBlessing] = useState<string>('সকলকে জানাই ৭০তম বর্ষের শুভ শারদীয়া ও শুভ বিজয়ার আন্তরিক প্রীতি ও শুভেচ্ছা।');

  const questions = [
    {
      qBn: '১. দুর্গাপূজার কোন মুহূর্তটি আপনাকে সবচেয়ে বেশি শিহরিত করে?',
      options: [
        { text: 'ঢাকের প্রথম বোল এবং ধুনুচি আরতির উন্মাদনা', type: 'dhunuchi' },
        { text: 'রাতে নতুন জামা পরে বন্ধুদের সাথে মণ্ডপ পরিক্রমা', type: 'hopper' },
        { text: 'মহাষ্টমীর দুপুরে শালপাতায় পরিবেশিত ভোগ ও পাড়ার আড্ডা', type: 'bhog' },
        { text: 'ভোরে বীরেন্দ্রকৃষ্ণ ভদ্রের চণ্ডীপাঠ ও বাতাসে শিউলির গন্ধ', type: 'shiuli' },
        { text: 'মণ্ডপের আলো জ্বলে ওঠা ও উৎসব সুশৃঙ্খলভাবে সম্পন্ন হওয়া', type: 'anchor' },
      ],
    },
    {
      qBn: '২. পুজোর দিনগুলিতে আপনার প্রিয় সান্ধ্য পোশাক কোনটি?',
      options: [
        { text: 'লালপেড়ে গরদ বা সুতির কুর্তা — ধুনুচি নাচের জন্য একদম উপযোগী', type: 'dhunuchi' },
        { text: 'সবচেয়ে আরামদায়ক জুতো ও ট্রেন্ডি পোশাক — অনেক হাঁটার প্রস্তুতি', type: 'hopper' },
        { text: 'ঐতিহ্যবাহী তাঁত বা পাঞ্জাবি — আড্ডার জন্য উপযুক্ত', type: 'bhog' },
        { text: 'হালকা শিউলি রঙের বা সাদা-হলুদ স্নিগ্ধ পোশাক', type: 'shiuli' },
        { text: 'কমিটির ব্যাজ লাগানো যে কোনো পকেটওয়ালা জামা', type: 'anchor' },
      ],
    },
    {
      qBn: '৩. পুজোর অন্যতম শ্রেষ্ঠ স্বাদের স্মৃতি কোনটি?',
      options: [
        { text: 'প্যান্ডেলের ধারের গরম এগরোল আর কোল্ড ড্রিঙ্কস', type: 'dhunuchi' },
        { text: 'লাইনে দাঁড়িয়ে খাওয়া ক্রিস্পি ফুচকা ও আলুকাবলি', type: 'hopper' },
        { text: 'গোবিন্দভোগ চালের খিচুড়ি, লাবড়া আর চাটনি-পায়েস', type: 'bhog' },
        { text: 'ভোরের গরম ফুলকো লুচি আর আলুর দম', type: 'shiuli' },
        { text: 'কমিটি রুমের মাটির ভাঁড়ের গরম চা আর মিষ্টি', type: 'anchor' },
      ],
    },
    {
      qBn: '৪. বিজয়া দশমীর সন্ধ্যায় আপনার মনে কী অনুভূতি জাগে?',
      options: [
        { text: 'সিঁদুর খেলা আর শেষবারের মতো ঢাকের তালে মেতে ওঠা', type: 'dhunuchi' },
        { text: 'ভাসানের শোভাযাত্রা ও আলোকসজ্জা দেখতে যাওয়া', type: 'hopper' },
        { text: 'প্রণাম করে নাড়ু, নিমকি আর মিষ্টিমুখের পারিবারিক মিলন', type: 'bhog' },
        { text: '“আসছে বছর আবার হবে” ভেবে বুকভরা মিষ্টি উদাসীনতা', type: 'shiuli' },
        { text: 'নিরাপদে বিসর্জন সেরে শান্তি ও তৃপ্তির নিঃশ্বাস ফেলা', type: 'anchor' },
      ],
    },
  ];

  const handleSelectOption = (type: string) => {
    const nextAnswers = [...quizAnswers, type];
    setQuizAnswers(nextAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate archetype
      const tally: Record<string, number> = {};
      nextAnswers.forEach((ans) => {
        tally[ans] = (tally[ans] || 0) + 1;
      });
      let highestType = 'shiuli';
      let maxCount = 0;
      Object.keys(tally).forEach((k) => {
        if (tally[k] > maxCount) {
          maxCount = tally[k];
          highestType = k;
        }
      });
      setQuizResult(ARCHETYPES[highestType] || ARCHETYPES.shiuli);

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffd98a', '#ff9d5c', '#b3261e', '#faf5ea'],
      });
    }
  };

  const handleResetQuiz = () => {
    setCurrentQ(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  const handleSealLetter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!letterText.trim()) return;
    setIsLetterSealed(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#b3261e', '#ffd98a', '#ffffff'],
    });
  };

  const handleShareCard = async () => {
    const text = `দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটি (৭০তম বর্ষ · ১৯৫৬ - ২০২৬)\n${cardRecipient ? `শ্রদ্ধেয় ${cardRecipient},\n` : ''}${cardBlessing}\n${cardSender ? `— বিনীত, ${cardSender}` : ''}\n\nআমাদের পুজো দেখুন: http://localhost:3000/`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'শারদীয় শুভেচ্ছা বার্তা',
          text,
        });
      } catch {
        // Fallback
      }
    } else {
      navigator.clipboard?.writeText(text);
      alert('শুভেচ্ছা বার্তা কপি করা হয়েছে! যে কোনো সোশ্যাল মিডিয়ায় পেস্ট করে পাঠান।');
    }
  };

  return (
    <section id="festive-studio" style={{ padding: '6rem 0', background: 'var(--ink-900)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <AlpanaBadge size={28} petals={8} rings={2} color="#ffd98a" strokeWidth={1.5} />
            <span className="section-tag">শারদীয় স্মৃতি স্টুডিও · Pujo Smriti Interactive</span>
            <AlpanaBadge size={28} petals={8} rings={2} color="#ffd98a" strokeWidth={1.5} />
          </div>
          <h2 className="section-title font-bn">পূজার অন্তরঙ্গ স্মৃতি ও শুভেচ্ছার মিলন</h2>
          <p className="section-desc">
            pujo-smriti আদলে আপনার নিজস্ব পূজার ব্যক্তিত্ব আবিষ্কার করুন, মায়ের চরণে সংকল্প চিঠি লিখুন এবং প্রিয়জনকে ডিজিটাল শারদীয় কার্ড পাঠান।
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`btn ${activeTab === 'quiz' ? 'btn-gold' : 'btn-ghost'}`}
            style={{ fontSize: '0.95rem' }}
          >
            <Sparkles size={16} />
            <span className="font-bn">১. পুজো পার্সোনালিটি কুইজ</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('letter')}
            className={`btn ${activeTab === 'letter' ? 'btn-gold' : 'btn-ghost'}`}
            style={{ fontSize: '0.95rem' }}
          >
            <Heart size={16} />
            <span className="font-bn">২. মাকে চিঠি (Letter to Maa)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('card')}
            className={`btn ${activeTab === 'card' ? 'btn-gold' : 'btn-ghost'}`}
            style={{ fontSize: '0.95rem' }}
          >
            <Share2 size={16} />
            <span className="font-bn">৩. শারদীয় শুভেচ্ছা কার্ড</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: PUJO PERSONALITY QUIZ                                   */}
        {/* ============================================================== */}
        {activeTab === 'quiz' && (
          <div
            className="glass-card"
            style={{
              maxWidth: '780px',
              margin: '0 auto',
              padding: '2.75rem',
              position: 'relative',
              border: '1px solid rgba(201, 162, 75, 0.4)',
              boxShadow: 'var(--shadow-gold)',
            }}
          >
            {!quizResult ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
                  <span className="badge-gold">
                    প্রশ্ন {currentQ + 1} / {questions.length}
                  </span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {questions.map((_, idx) => (
                      <span
                        key={idx}
                        style={{
                          width: '28px',
                          height: '4px',
                          borderRadius: '2px',
                          background: idx <= currentQ ? 'var(--gold-light)' : 'rgba(255, 255, 255, 0.15)',
                          transition: 'var(--transition-smooth)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-bn" style={{ fontSize: '1.45rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '1.75rem', lineHeight: 1.5 }}>
                  {questions[currentQ].qBn}
                </h3>

                <div style={{ display: 'grid', gap: '0.85rem' }}>
                  {questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelectOption(opt.type)}
                      style={{
                        padding: '1.1rem 1.25rem',
                        background: 'rgba(11, 14, 31, 0.75)',
                        border: '1px solid var(--ink-border)',
                        borderRadius: '10px',
                        color: 'var(--paper)',
                        fontFamily: 'var(--font-bn)',
                        fontSize: '1.05rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'var(--transition-smooth)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#ffd98a';
                        e.currentTarget.style.background = 'rgba(20, 25, 55, 0.9)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--ink-border)';
                        e.currentTarget.style.background = 'rgba(11, 14, 31, 0.75)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>{opt.text}</span>
                      <span style={{ color: 'var(--gold-light)', opacity: 0.6, fontSize: '0.9rem' }}>➔</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', animation: 'fadeIn 0.6s ease-out' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: `${quizResult.color}25`,
                    border: `2px solid ${quizResult.color}`,
                    color: quizResult.color,
                    marginBottom: '1rem',
                  }}
                >
                  <Award size={32} />
                </div>

                <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>
                  আপনার পূজার অনন্য ব্যক্তিত্ব
                </span>

                <h3 className="font-bn" style={{ fontSize: '2.4rem', color: 'var(--cream)', fontWeight: 700 }}>
                  {quizResult.titleBn}
                </h3>
                <span className="font-display" style={{ fontSize: '1.2rem', color: quizResult.color, fontStyle: 'italic', display: 'block', marginBottom: '1rem' }}>
                  {quizResult.titleEn}
                </span>

                <blockquote
                  className="font-display"
                  style={{
                    fontSize: '1.25rem',
                    fontStyle: 'italic',
                    color: '#ffd98a',
                    maxWidth: '600px',
                    margin: '0 auto 1.5rem',
                    lineHeight: 1.6,
                    borderLeft: `3px solid ${quizResult.color}`,
                    paddingLeft: '1rem',
                    textAlign: 'left',
                  }}
                >
                  “{quizResult.taglineBn}”
                </blockquote>

                <p className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--paper)', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 1.5rem' }}>
                  {quizResult.descriptionBn}
                </p>

                <div
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(7, 9, 21, 0.7)',
                    borderRadius: '8px',
                    border: '1px solid var(--ink-border)',
                    maxWidth: '540px',
                    margin: '0 auto 2rem',
                    textAlign: 'left',
                  }}
                >
                  <span className="font-bn" style={{ fontSize: '0.85rem', color: 'var(--gold-light)', display: 'block' }}>
                    🍽️ আপনার সিগনেচার পুজোর খাদ্য:
                  </span>
                  <strong className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--cream)' }}>
                    {quizResult.foodBn}
                  </strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-gold"
                    onClick={async () => {
                      const shareTxt = `আমার দুর্গাপূজা পার্সোনালিটি: "${quizResult.titleBn} (${quizResult.titleEn})"\n${quizResult.taglineBn}\n\nদুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটির ৭০তম বর্ষে আপনার ব্যক্তিত্ব জানুন: http://localhost:3000/`;
                      if (navigator.share) {
                        try {
                          await navigator.share({ title: 'পুজো পার্সোনালিটি', text: shareTxt });
                        } catch {
                          // Fallback
                        }
                      } else {
                        navigator.clipboard?.writeText(shareTxt);
                        alert('ফলাফল কপি হয়েছে! বন্ধুদের শেয়ার করুন।');
                      }
                    }}
                  >
                    <Share2 size={16} />
                    <span className="font-bn">ফলাফল শেয়ার করুন</span>
                  </button>

                  <button type="button" className="btn btn-ghost" onClick={handleResetQuiz}>
                    <RefreshCw size={16} />
                    <span className="font-bn">আবার কুইজ দিন</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: LETTER TO MAA DURGA                                     */}
        {/* ============================================================== */}
        {activeTab === 'letter' && (
          <div
            style={{
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            {isLetterSealed ? (
              <div
                className="glass-card"
                style={{
                  padding: '3rem 2.5rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.8) 0%, rgba(35, 12, 16, 0.85) 100%)',
                  border: '1px solid var(--gold)',
                }}
              >
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'rgba(179, 38, 30, 0.25)', border: '1px solid #ffd98a', marginBottom: '1.25rem' }}>
                  <CheckCircle size={40} color="#ffd98a" />
                </div>

                <h3 className="font-bn" style={{ fontSize: '2rem', color: 'var(--cream)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  মায়ের চরণে আপনার চিঠি নিবেদিত হয়েছে
                </h3>

                <p className="font-bn" style={{ fontSize: '1.05rem', color: 'var(--paper-muted)', maxWidth: '540px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
                  শ্রদ্ধেয় {letterName || 'ভক্ত'}, আপনার আন্তরিক প্রার্থনা ও ভালোবাসা মায়ের চরণতলে স্থায়ীভাবে সুরক্ষিত রইল। মা আপনাকে ও আপনার পরিবারকে সুখে ও শান্তিতে রাখুন।
                </p>

                {/* Sealed Letter Preview Card */}
                <div
                  style={{
                    padding: '2rem',
                    background: '#fcf6ea',
                    color: '#2a1a10',
                    borderRadius: '8px',
                    textAlign: 'left',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
                    position: 'relative',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #b3261e 40%, #871912 100%)',
                      border: '2px dashed #ffd98a',
                      display: 'grid',
                      placeItems: 'center',
                      color: '#ffd98a',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-bn)',
                      fontWeight: 700,
                      transform: 'rotate(-12deg)',
                      boxShadow: '0 4px 10px rgba(179,38,30,0.4)',
                    }}
                  >
                    সিলমোহর
                  </div>

                  <p className="font-bn" style={{ fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                    “{letterText}”
                  </p>

                  <div style={{ borderTop: '1px solid rgba(201, 162, 75, 0.3)', paddingTop: '0.75rem', textAlign: 'right' }}>
                    <span className="font-bn" style={{ fontSize: '1rem', fontWeight: 600, color: '#b3261e' }}>
                      — {letterName || 'শ্রীচরণেষু এক অনুরাগী'}
                    </span>
                    <span className="font-ui" style={{ fontSize: '0.8rem', display: 'block', color: '#685444' }}>
                      দুয়েরপল্লী ৭০তম শারদোৎসব · ২০২৬
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setIsLetterSealed(false);
                    setLetterText('');
                  }}
                >
                  <span className="font-bn">নতুন চিঠি লিখুন</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSealLetter}
                className="glass-card"
                style={{
                  padding: '2.5rem',
                  background: 'linear-gradient(135deg, rgba(20, 25, 55, 0.75) 0%, rgba(35, 12, 16, 0.75) 100%)',
                  border: '1px solid rgba(201, 162, 75, 0.3)',
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>
                    মাকে আপনার মনের কথা জানান
                  </span>
                  <h3 className="font-bn" style={{ fontSize: '1.9rem', color: 'var(--cream)', fontWeight: 700 }}>
                    মাকে চিঠি · Letter to Maa Durga
                  </h3>
                  <p className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)', maxWidth: '520px', margin: '0.5rem auto 0' }}>
                    কোনো কথা যা আপনি কাউকে বলতে পারেননি, কোনো আশা বা আন্তরিক কৃতজ্ঞতা — আজ নির্দ্বিধায় লিখে ফেলুন।
                  </p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="font-bn" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--cream)', marginBottom: '0.35rem' }}>
                    আপনার নাম (ঐচ্ছিক):
                  </label>
                  <input
                    type="text"
                    placeholder="উদাঃ অনন্যা রায়"
                    value={letterName}
                    onChange={(e) => setLetterName(e.target.value)}
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

                <div style={{ marginBottom: '1.75rem' }}>
                  <label className="font-bn" style={{ display: 'block', fontSize: '0.95rem', color: 'var(--cream)', marginBottom: '0.35rem' }}>
                    মায়ের চরণে আপনার প্রার্থনা বা চিঠি:
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="মা, তুমি সবাইকে ভালো রেখো... এই বছর আমার একটাই চাওয়া..."
                    value={letterText}
                    onChange={(e) => setLetterText(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(11, 14, 31, 0.8)',
                      border: '1px solid rgba(201, 162, 75, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-bn)',
                      fontSize: '1.05rem',
                      lineHeight: 1.6,
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1.1rem' }}
                >
                  <Sparkles size={18} />
                  <span className="font-bn">সিঁদুর ছাপে চিঠি সিলমোহর করুন ও মায়ের চরণে সমর্পণ করুন</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: DIGITAL SHARODIYA GREETING CARD STUDIO                  */}
        {/* ============================================================== */}
        {activeTab === 'card' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            {/* Input Form */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 className="font-bn" style={{ fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '1.5rem' }}>
                শুভেচ্ছা কার্ড কাস্টমাইজ করুন
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <label className="font-bn" style={{ display: 'block', fontSize: '0.9rem', color: 'var(--cream)', marginBottom: '0.35rem' }}>
                  প্রাপকের নাম (যাকে পাঠাচ্ছেন):
                </label>
                <input
                  type="text"
                  placeholder="উদাঃ কাকু ও কাকিমা / প্রিয় বন্ধুরা"
                  value={cardRecipient}
                  onChange={(e) => setCardRecipient(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(11, 14, 31, 0.8)',
                    border: '1px solid rgba(201, 162, 75, 0.3)',
                    borderRadius: '8px',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-bn)',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label className="font-bn" style={{ display: 'block', fontSize: '0.9rem', color: 'var(--cream)', marginBottom: '0.35rem' }}>
                  প্রেরকের নাম (আপনার নাম):
                </label>
                <input
                  type="text"
                  placeholder="উদাঃ সৌম্য ও পরিবার"
                  value={cardSender}
                  onChange={(e) => setCardSender(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(11, 14, 31, 0.8)',
                    border: '1px solid rgba(201, 162, 75, 0.3)',
                    borderRadius: '8px',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-bn)',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label className="font-bn" style={{ display: 'block', fontSize: '0.9rem', color: 'var(--cream)', marginBottom: '0.35rem' }}>
                  শুভেচ্ছা বার্তা নির্বাচন করুন:
                </label>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  {[
                    'সকলকে জানাই ৭০তম বর্ষের শুভ শারদীয়া ও শুভ বিজয়ার আন্তরিক প্রীতি ও শুভেচ্ছা।',
                    'মা দুর্গার আগমনে সকলের জীবন আনন্দ, সুস্বাস্থ্য ও সমৃদ্ধিতে ভরে উঠুক।',
                    'আসছে বছর আবার হবে! মা দুর্গার আশীর্বাদ যেন সারাবছর আপনার পরিবারে থাকে।',
                  ].map((msg, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCardBlessing(msg)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        background: cardBlessing === msg ? 'rgba(201, 162, 75, 0.25)' : 'rgba(7, 9, 21, 0.6)',
                        border: `1px solid ${cardBlessing === msg ? 'var(--gold-light)' : 'var(--ink-border)'}`,
                        borderRadius: '6px',
                        color: 'var(--paper)',
                        fontFamily: 'var(--font-bn)',
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn btn-gold"
                onClick={handleShareCard}
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Share2 size={16} />
                <span className="font-bn">হোয়াটসঅ্যাপ বা বন্ধুদের কার্ডটি পাঠান</span>
              </button>
            </div>

            {/* Live Interactive Card Preview */}
            <div
              style={{
                background: 'linear-gradient(135deg, #18090b 0%, #080c24 100%)',
                border: '2px solid var(--gold)',
                borderRadius: '16px',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow-gold), 0 20px 50px rgba(0,0,0,0.8)',
                textAlign: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Corner Floral Alpana Accents */}
              <div style={{ position: 'absolute', top: '-25px', left: '-25px', opacity: 0.35, pointerEvents: 'none' }}>
                <AlpanaBadge size={100} petals={8} rings={2} color="#ffd98a" strokeWidth={1} />
              </div>
              <div style={{ position: 'absolute', bottom: '-25px', right: '-25px', opacity: 0.35, pointerEvents: 'none' }}>
                <AlpanaBadge size={100} petals={8} rings={2} color="#ffd98a" strokeWidth={1} />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span className="badge-sindoor" style={{ fontSize: '0.78rem' }}>
                  ৭০তম বর্ষপূর্তি উৎসব · ১৯৫৬ - ২০২৬
                </span>
                <h4 className="font-bn" style={{ fontSize: '1.75rem', color: 'var(--cream)', fontWeight: 700, marginTop: '0.5rem' }}>
                  দুয়েরপল্লী সার্ব্বজনীন দুর্গাপূজা কমিটি
                </h4>
                <span className="font-display" style={{ fontSize: '0.95rem', color: 'var(--gold-light)', fontStyle: 'italic', display: 'block' }}>
                  Duyerpally Sarbojanin Durgotsav Samiti
                </span>
              </div>

              {cardRecipient && (
                <p className="font-bn" style={{ fontSize: '1.15rem', color: '#ffd98a', fontWeight: 600, marginBottom: '0.75rem' }}>
                  শ্রদ্ধাস্পদ {cardRecipient},
                </p>
              )}

              <div
                style={{
                  padding: '1.5rem',
                  background: 'rgba(7, 9, 21, 0.65)',
                  borderRadius: '10px',
                  border: '1px solid rgba(201, 162, 75, 0.25)',
                  marginBottom: '1.5rem',
                }}
              >
                <p className="font-bn" style={{ fontSize: '1.1rem', color: 'var(--paper-soft)', lineHeight: 1.7, fontWeight: 500 }}>
                  “{cardBlessing}”
                </p>
              </div>

              {cardSender && (
                <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                  <span className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', display: 'block' }}>
                    শুভেচ্ছান্তে —
                  </span>
                  <span className="font-bn" style={{ fontSize: '1.2rem', color: 'var(--cream)', fontWeight: 700 }}>
                    {cardSender}
                  </span>
                </div>
              )}

              <p className="font-ui" style={{ fontSize: '0.75rem', color: 'rgba(239, 227, 204, 0.45)', marginTop: '1.75rem' }}>
                মণ্ডপ প্রাঙ্গণ: কাশীপুর রোড, কলকাতা - ৭০০০৩৬
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
