import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { AlpanaBadge } from './AlpanaBadge';
import { dhakAudio } from '../utils/audioService';

interface OpeningCeremonyProps {
  onDone: () => void;
}

export const OpeningCeremony: React.FC<OpeningCeremonyProps> = ({ onDone }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [canAutoplayPrompt, setCanAutoplayPrompt] = useState<boolean>(false);
  const [showEnterButton, setShowEnterButton] = useState<boolean>(false);

  // Bengali text grapheme segmenter
  const bengaliLetters = useMemo(() => {
    const text = 'মা আসছেন...';
    const IntlWithSegmenter = Intl as unknown as {
      Segmenter?: new (locale: string, options: { granularity: string }) => {
        segment: (input: string) => Iterable<{ segment: string }>;
      };
    };
    if (typeof IntlWithSegmenter.Segmenter === 'function') {
      const segmenter = new IntlWithSegmenter.Segmenter('bn', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    }
    return Array.from(text);
  }, []);

  // Try to start playing Dhak audio on mount
  useEffect(() => {
    let isMounted = true;

    const tryStartAudio = async () => {
      const success = await dhakAudio.play();
      if (!success && isMounted) {
        setCanAutoplayPrompt(true);
      }
    };

    tryStartAudio();

    // Show Enter button after short atmospheric delay
    const timer = setTimeout(() => {
      if (isMounted) setShowEnterButton(true);
    }, 2800);

    // Subscribe to audio state
    const unsubscribe = dhakAudio.subscribe((playing) => {
      if (isMounted) setIsPlaying(playing);
    });

    // Keyboard Escape to dismiss
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDone();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      unsubscribe();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onDone]);

  // Click anywhere to unlock audio if browser autoplay was blocked
  const handleBackdropClick = useCallback(() => {
    if (canAutoplayPrompt && !isPlaying) {
      dhakAudio.play();
      setCanAutoplayPrompt(false);
    }
  }, [canAutoplayPrompt, isPlaying]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    dhakAudio.toggle();
    setCanAutoplayPrompt(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Opening Ceremony"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#050711',
        padding: '1.5rem',
        textAlign: 'center',
        animation: 'fadeIn 0.6s ease-out forwards',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 55%, rgba(201, 120, 40, 0.28) 0%, rgba(179, 38, 30, 0.15) 45%, transparent 70%)',
        }}
      />

      {/* Top Header Sound Control Button */}
      <button
        type="button"
        onClick={toggleSound}
        style={{
          position: 'absolute',
          top: 'max(1.25rem, env(safe-area-inset-top))',
          right: '1.25rem',
          zIndex: 10,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1.15rem',
          borderRadius: '9999px',
          background: 'rgba(11, 14, 31, 0.75)',
          border: '1px solid rgba(255, 217, 138, 0.35)',
          color: isPlaying ? 'var(--gold-light)' : 'var(--paper)',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.88rem',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          transition: 'var(--transition-smooth)',
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={18} className="flicker" color="#ffd98a" />
            <span className="font-bn">ঢাকের আওয়াজ চলছে</span>
          </>
        ) : (
          <>
            <VolumeX size={18} opacity={0.7} />
            <span className="font-bn">ঢাকের আওয়াজ বাজান</span>
          </>
        )}
      </button>

      {/* Rotating Background Alpana Mandala */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(120vw, 800px)',
          height: 'min(120vw, 800px)',
          color: 'rgba(201, 162, 75, 0.15)',
          pointerEvents: 'none',
        }}
      >
        <AlpanaBadge size={800} petals={12} rings={4} strokeWidth={0.4} />
      </div>

      {/* Center Sacred Diya Flame Artwork */}
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <svg
          viewBox="0 0 80 90"
          width="85"
          height="95"
          aria-hidden="true"
          style={{ display: 'block', margin: '0 auto', filter: 'drop-shadow(0 0 15px rgba(255, 180, 60, 0.5))' }}
        >
          <defs>
            <radialGradient id="diyaGlow" cx="50%" cy="70%" r="60%">
              <stop offset="0%" stopColor="#fff3c4" />
              <stop offset="50%" stopColor="#f0a53a" />
              <stop offset="100%" stopColor="#b3261e" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Flame Halo */}
          <circle cx="40" cy="38" r="34" fill="url(#diyaGlow)" opacity="0.45" />

          {/* Flickering Flame */}
          <path
            d="M 40 8 C 48 20 52 28 48 38 C 46 43 42 45 40 45 C 38 45 34 43 32 38 C 28 28 32 20 40 8 Z"
            fill="url(#diyaGlow)"
            className="flicker"
          />

          {/* Clay Bowl Base */}
          <path
            d="M 10 56 C 10 50 24 46 40 46 C 56 46 70 50 70 56 C 70 70 58 78 40 78 C 22 78 10 70 10 56 Z"
            fill="#8a4a1e"
            stroke="#c9a24b"
            strokeWidth="1.8"
          />
          <ellipse cx="40" cy="52" rx="24" ry="5" fill="#2a1408" />
        </svg>
      </div>

      {/* Sacred Bengali Title Reveal ("মা আসছেন...") */}
      <h1
        lang="bn"
        className="font-bn"
        style={{
          fontSize: 'clamp(2.8rem, 10vw, 6.5rem)',
          color: 'var(--cream)',
          lineHeight: 1.1,
          fontWeight: 700,
          textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 0 25px rgba(201,162,75,0.4)',
          position: 'relative',
        }}
      >
        {bengaliLetters.map((char, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              animation: `blurIn 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + idx * 0.22}s both`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* English / Milestone Tagline */}
      <p
        className="font-display"
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.85rem)',
          fontStyle: 'italic',
          color: 'var(--gold-light)',
          marginTop: '0.85rem',
          letterSpacing: '0.04em',
          animation: 'blurIn 1.2s ease-out 2s both',
        }}
      >
        Maa is coming… 70 Years of Duyerpally Durgotsav (1956 - 2026)
      </p>

      {/* Tap anywhere prompt */}
      {canAutoplayPrompt && (
        <p
          className="font-ui"
          style={{
            fontSize: '0.88rem',
            color: 'rgba(239, 227, 204, 0.75)',
            marginTop: '1.25rem',
            animation: 'flicker 2s infinite',
          }}
        >
          ✨ ঢাকের আওয়াজ শুনতে স্ক্রিনে যে কোনো স্থানে স্পর্শ করুন
        </p>
      )}

      {/* Action Buttons: Enter & Skip */}
      <div style={{ marginTop: '2.5rem', minHeight: '60px', position: 'relative', zIndex: 10 }}>
        {showEnterButton ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', animation: 'blurIn 0.8s ease-out both' }}>
            <button
              type="button"
              className="btn btn-gold"
              onClick={onDone}
              autoFocus
              style={{
                fontSize: '1.15rem',
                padding: '0.85rem 2.5rem',
                boxShadow: '0 0 30px rgba(255, 217, 138, 0.45)',
              }}
            >
              <Sparkles size={20} color="#04050b" />
              <span className="font-bn" style={{ fontWeight: 700 }}>প্রবেশ করুন · Enter</span>
            </button>

            <button
              type="button"
              onClick={onDone}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(239, 227, 204, 0.55)',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              Skip
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onDone}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(239, 227, 204, 0.45)',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            Skip
          </button>
        )}
      </div>

      {/* CSS Injected for Opening Blur Reveal */}
      <style>{`
        @keyframes blurIn {
          0% {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
